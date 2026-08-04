#!/usr/bin/env python3
"""
Combine the three NetCDF-4 variant results into one github-action-benchmark
payload.

github-action-benchmark keys its history purely on the benchmark *name*, so the
three variants of the same measurement have to become three distinctly-named
entries. Suffixing the variant is what turns them into three separate series --
and therefore three line graphs -- on the dashboard:

    contiguous_write_512x64x512_nc4_hdf5_develop
    contiguous_write_512x64x512_nc4_clio_vfd
    contiguous_write_512x64x512_nc4_clio_vol

Usage:
    combine_nc4_clio_results.py <baseline.json> <clio_vfd.json> <clio_vol.json>
                                <output.json>
"""

import json
import sys
from pathlib import Path
from typing import Any, Dict, List, Tuple

# variant -> (name suffix, human label used in the `extra` field)
VARIANTS: List[Tuple[str, str, str]] = [
    ("baseline", "_nc4_hdf5_develop", "netCDF-4 main / HDF5 develop"),
    ("clio_vfd", "_nc4_clio_vfd", "netCDF-4 main / HDF5 develop + CLIO VFD"),
    ("clio_vol", "_nc4_clio_vol", "netCDF-4 main / HDF5 develop + CLIO VOL"),
]


def load(path: str) -> List[Dict[str, Any]]:
    try:
        with open(path, "r") as fh:
            return json.load(fh)
    except FileNotFoundError:
        print(f"Warning: {path} not found -- variant contributes no series")
        return []
    except json.JSONDecodeError as exc:
        print(f"Error: invalid JSON in {path}: {exc}")
        return []


def combine(per_variant: Dict[str, List[Dict[str, Any]]]) -> List[Dict[str, Any]]:
    combined: List[Dict[str, Any]] = []
    for variant, suffix, label in VARIANTS:
        for bench in per_variant.get(variant, []):
            value = bench.get("value")
            if not isinstance(value, (int, float)) or not (0 < value < float("inf")):
                print(f"Warning: skipping {variant} benchmark "
                      f"{bench.get('name')!r} with invalid value: {value}")
                continue
            entry = {
                "name": f"{bench['name']}{suffix}",
                "unit": bench.get("unit", "sec"),
                "value": value,
            }
            detail = bench.get("extra")
            entry["extra"] = f"{label} - {detail}" if detail else label
            combined.append(entry)
    return combined


def main() -> None:
    if len(sys.argv) != 5:
        print("Usage: combine_nc4_clio_results.py <baseline.json> "
              "<clio_vfd.json> <clio_vol.json> <output.json>")
        sys.exit(1)

    paths = dict(zip([v[0] for v in VARIANTS], sys.argv[1:4]))
    output_file = sys.argv[4]

    per_variant = {variant: load(path) for variant, path in paths.items()}
    for variant, entries in per_variant.items():
        print(f"{variant}: {len(entries)} benchmarks from {paths[variant]}")

    combined = combine(per_variant)
    if not combined:
        # Publishing an empty array makes github-action-benchmark append a
        # commit with no data points, which shows up as a gap in every series.
        print("Error: no benchmarks in any variant -- refusing to publish")
        sys.exit(1)

    Path(output_file).parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, "w") as fh:
        json.dump(combined, fh, indent=2)

    print(f"\nWrote {len(combined)} combined benchmarks to {output_file}")
    for _, suffix, label in VARIANTS:
        count = len([b for b in combined if b["name"].endswith(suffix)])
        print(f"  {label}: {count}")


if __name__ == "__main__":
    main()
