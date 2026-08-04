#!/usr/bin/env python3
"""
NetCDF-4 / CLIO benchmark result parser.

Parses one ``tst_chunks3`` output file (as produced by
``.github/scripts/nc4_clio_bench.sh``) into the JSON array that
benchmark-action/github-action-benchmark consumes:

    [{"name": ..., "unit": "sec", "value": <float>, "extra": ...}, ...]

``tst_chunks3`` prints one line per timed operation, formatted by the
TIMING_END macro as ``"%-45.45s %7.2g sec"`` where the 45-char message is
built by the test itself, e.g.::

      contiguous write 512  64 512                    0.31 sec
      chunked    write 512  64 512   64  64  64       0.21 sec   1.5 x faster
      compressed write 512  64 512   64  64  64        1.2 sec   0.26 x slower

The leading token is the storage type (contiguous / chunked / compressed), the
second is the operation (write / read), then the access shape, then -- for
chunked and compressed -- the chunk shape. The trailing "N x faster/slower" is
tst_chunks3's own ratio against the contiguous line and is ignored here: the
dashboard derives comparisons across *variants*, not within a run.

Usage:
    parse_nc4_clio_results.py <results.txt> <output.json> <variant> [commit_info]

``variant`` is one of baseline / clio_vfd / clio_vol and is recorded on each
entry so combine_nc4_clio_results.py can build the three series.
"""

import json
import os
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional

STORAGE_TYPES = ("contiguous", "chunked", "compressed")
OPERATIONS = ("write", "read")


def parse_timing_line(line: str) -> Optional[Dict[str, Any]]:
    """Parse one tst_chunks3 timing line into a benchmark dict, or None."""
    parts = line.split()
    if len(parts) < 4:
        return None
    if parts[0] not in STORAGE_TYPES or parts[1] not in OPERATIONS:
        return None

    storage_type, operation = parts[0], parts[1]

    # The value is the token immediately before the literal "sec".
    try:
        sec_idx = parts.index("sec")
    except ValueError:
        return None
    try:
        value = float(parts[sec_idx - 1])
    except (ValueError, IndexError):
        return None
    # NaN/inf/0 would be written to gh-pages and then plotted forever. A
    # zero-length timing means the timer never advanced, which is not a
    # measurement -- drop it rather than record a fake "infinitely fast" point.
    if not (value > 0 and value < float("inf")):
        print(f"Warning: invalid timing {value!r} in line: {line.strip()}")
        return None

    numbers = []
    for tok in parts[2:sec_idx - 1]:
        try:
            numbers.append(int(tok))
        except ValueError:
            return None

    # contiguous prints 3 access dims; chunked/compressed print 3 access dims
    # followed by 3 chunk dims.
    if storage_type == "contiguous":
        if len(numbers) != 3:
            return None
        dims, chunks = numbers, []
    else:
        if len(numbers) != 6:
            return None
        dims, chunks = numbers[:3], numbers[3:]

    name = f"{storage_type}_{operation}_" + "x".join(map(str, dims))
    if chunks:
        name += "_chunks_" + "x".join(map(str, chunks))

    return {
        "name": name,
        "unit": "sec",
        "value": value,
        "storage_type": storage_type,
        "operation": operation,
        "dimensions": dims,
        "chunks": chunks or None,
    }


def parse_file(path: str) -> List[Dict[str, Any]]:
    with open(path, "r") as fh:
        content = fh.read()

    deflate = 0
    match = re.search(r"deflate level[:\s]+(\d+)", content, re.IGNORECASE)
    if match:
        deflate = int(match.group(1))

    benchmarks = []
    for line in content.split("\n"):
        parsed = parse_timing_line(line)
        if parsed is None:
            continue
        parsed["compression_level"] = deflate
        # Distinguish otherwise identically-named entries taken at different
        # deflate levels, so a future matrix over levels does not collide.
        if parsed["storage_type"] == "compressed" and deflate > 0:
            parsed["name"] += f"_deflate{deflate}"
        benchmarks.append(parsed)
    return benchmarks


def to_gh_benchmark_json(benchmarks: List[Dict[str, Any]],
                         variant: str,
                         commit_info: str) -> List[Dict[str, Any]]:
    """Reduce to the github-action-benchmark schema, dropping duplicates."""
    out: List[Dict[str, Any]] = []
    seen = set()
    for bench in sorted(benchmarks, key=lambda b: b["name"]):
        if bench["name"] in seen:
            print(f"Warning: skipping duplicate benchmark '{bench['name']}'")
            continue
        seen.add(bench["name"])
        entry = {
            "name": bench["name"],
            "unit": bench["unit"],
            "value": bench["value"],
            "variant": variant,
        }
        if commit_info:
            entry["extra"] = commit_info
        out.append(entry)
    return out


def main() -> None:
    if not 4 <= len(sys.argv) <= 5:
        print("Usage: parse_nc4_clio_results.py <results.txt> <output.json> "
              "<variant> [commit_info]")
        sys.exit(1)

    results_file, output_file, variant = sys.argv[1:4]
    commit_info = sys.argv[4] if len(sys.argv) == 5 else ""

    if not os.path.exists(results_file):
        # A variant whose run failed leaves no file. That is not a parser
        # error: emit an empty series so the other two still publish.
        print(f"Warning: {results_file} not found -- emitting empty result set")
        entries: List[Dict[str, Any]] = []
    else:
        print(f"Parsing {results_file} (variant={variant})")
        entries = to_gh_benchmark_json(parse_file(results_file), variant,
                                       commit_info)

    Path(output_file).parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, "w") as fh:
        json.dump(entries, fh, indent=2)

    print(f"Wrote {len(entries)} benchmarks to {output_file}")
    for entry in entries[:5]:
        print(f"  {entry['name']}: {entry['value']} {entry['unit']}")


if __name__ == "__main__":
    main()
