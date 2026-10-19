#!/usr/bin/env python3
"""
Compare Catch2 benchmark results of two HDF5 commits.

Usage: compare_hdf5_commits.py <base_label> <head_label> <output_json> \
           <base_round1.txt> [...] -- <head_round1.txt> [...]

Each .txt file is the raw Catch2 output of one round. The per-round means are
averaged per benchmark, and a Markdown table (base vs head, delta %) is printed
to stdout so the workflow can append it to $GITHUB_STEP_SUMMARY.
"""

import json
import statistics
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from parse_catch2_results import parse_catch2_benchmark  # noqa: E402


def collect(files):
    """Map benchmark name -> list of per-round mean seconds."""
    rounds = {}
    for f in files:
        for b in parse_catch2_benchmark(Path(f).read_text()):
            rounds.setdefault(b['name'], []).append(b['value'])
    return rounds


def main():
    if '--' not in sys.argv or len(sys.argv) < 7:
        print(__doc__)
        sys.exit(1)
    sep = sys.argv.index('--')
    base_label, head_label, output_json = sys.argv[1:4]
    base = collect(sys.argv[4:sep])
    head = collect(sys.argv[sep + 1:])

    names = sorted(set(base) | set(head))
    if not names or not (base and head):
        print("Error: no benchmark results to compare", file=sys.stderr)
        sys.exit(1)

    results = []
    print(f"| Benchmark | {base_label} (s) | {head_label} (s) | Change |")
    print("|---|---:|---:|---:|")
    for name in names:
        b = statistics.mean(base[name]) if name in base else None
        h = statistics.mean(head[name]) if name in head else None
        delta = (h - b) / b * 100.0 if b and h else None
        results.append({'name': name, 'base': b, 'head': h,
                        'base_rounds': base.get(name, []),
                        'head_rounds': head.get(name, []),
                        'change_percent': delta})
        fmt = lambda v: f"{v:.4f}" if v is not None else "n/a"
        change = f"{delta:+.2f}%" if delta is not None else "n/a"
        print(f"| {name} | {fmt(b)} | {fmt(h)} | {change} |")
    print()
    print("Lower is better; values are the mean of each round's Catch2 mean.")

    Path(output_json).parent.mkdir(parents=True, exist_ok=True)
    with open(output_json, 'w') as f:
        json.dump({'base': base_label, 'head': head_label,
                   'benchmarks': results}, f, indent=2)


if __name__ == "__main__":
    main()
