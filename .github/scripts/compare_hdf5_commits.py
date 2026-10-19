#!/usr/bin/env python3
"""
Compare Catch2 benchmark results of two HDF5 commits.

Usage: compare_hdf5_commits.py [--plot-dir DIR] <base_label> <head_label> \
           <output_json> <base_round1.txt> [...] -- <head_round1.txt> [...]

Each .txt file is the raw Catch2 output of one round. The per-round means are
averaged per benchmark, and a Markdown table (base vs head, delta %) is printed
to stdout so the workflow can append it to $GITHUB_STEP_SUMMARY. With
--plot-dir, each benchmark is also plotted on its own to DIR/<name>.png.
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


def plot(result, base_label, head_label, plot_dir):
    """Plot one benchmark: each round's mean per commit, and their average."""
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt

    fig, ax = plt.subplots(figsize=(6, 4))
    for x, (label, key, color) in enumerate([(base_label, 'base', '#0066cc'),
                                             (head_label, 'head', '#cc5500')]):
        rounds = [v * 1000.0 for v in result[f'{key}_rounds']]
        if not rounds:
            continue
        ax.bar(x, sum(rounds) / len(rounds), width=0.6, color=color, alpha=0.35)
        ax.plot([x] * len(rounds), rounds, 'o', color=color)
    ax.set_xticks([0, 1], [base_label, head_label])
    ax.set_ylabel('Time (ms)')
    change = result['change_percent']
    ax.set_title(result['name'] + (f" ({change:+.2f}%)" if change is not None else ''))
    ax.set_ylim(bottom=0)
    ax.grid(True, axis='y', alpha=0.3, linestyle='--')
    fig.tight_layout()

    plot_dir.mkdir(parents=True, exist_ok=True)
    fig.savefig(plot_dir / (result['name'].replace(' ', '_').replace('/', '_') + '.png'), dpi=150)
    plt.close(fig)


def main():
    args = sys.argv[1:]
    plot_dir = None
    if args[:1] == ['--plot-dir'] and len(args) > 1:
        plot_dir = Path(args[1])
        args = args[2:]
    if '--' not in args or len(args) < 6:
        print(__doc__)
        sys.exit(1)
    sep = args.index('--')
    base_label, head_label, output_json = args[:3]
    base = collect(args[3:sep])
    head = collect(args[sep + 1:])

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

    if plot_dir:
        for result in results:
            plot(result, base_label, head_label, plot_dir)

    Path(output_json).parent.mkdir(parents=True, exist_ok=True)
    with open(output_json, 'w') as f:
        json.dump({'base': base_label, 'head': head_label,
                   'benchmarks': results}, f, indent=2)


if __name__ == "__main__":
    main()
