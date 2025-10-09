#!/usr/bin/env python3
"""
Create benchmark plots comparing HDF5 develop and 1.14 branches
"""

import json
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend
import matplotlib.pyplot as plt
import pandas as pd
import sys
import os
from pathlib import Path
from typing import List, Dict, Any
import argparse
import datetime


def load_benchmark_history(gh_pages_dir: str, version: str) -> List[Dict[str, Any]]:
    """Load historical benchmark data from gh-pages branch for a specific version."""
    history = []
    benchmarks_dir = Path(gh_pages_dir) / "benchmarks"

    if not benchmarks_dir.exists():
        print(f"Warning: Benchmarks directory {benchmarks_dir} does not exist")
        return []

    # Look for benchmark data files
    for json_file in benchmarks_dir.glob("*.json"):
        try:
            with open(json_file, 'r') as f:
                data = json.load(f)
                if isinstance(data, list):
                    # Filter by version if specified
                    filtered_data = [item for item in data if item.get('version') == version] if version else data
                    history.extend(filtered_data)
                elif isinstance(data, dict) and data.get('version') == version:
                    history.append(data)
        except Exception as e:
            print(f"Warning: Could not load {json_file}: {e}")

    return history


def load_current_benchmarks(detailed_results_file: str) -> List[Dict[str, Any]]:
    """Load current benchmark results."""
    try:
        with open(detailed_results_file, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading current benchmarks from {detailed_results_file}: {e}")
        return []


def create_individual_benchmark_plots(develop_benchmarks: List[Dict[str, Any]],
                                      v1_14_benchmarks: List[Dict[str, Any]],
                                      output_dir: Path):
    """Create individual plots for each benchmark showing both develop and 1.14 versions."""
    if not develop_benchmarks and not v1_14_benchmarks:
        print("No benchmark data to plot")
        return

    # Get unique benchmark names (without version suffix)
    benchmark_names = set()
    for b in develop_benchmarks:
        name = b['name'].replace(' (develop)', '')
        benchmark_names.add(name)
    for b in v1_14_benchmarks:
        name = b['name'].replace(' (1_14)', '')
        benchmark_names.add(name)

    benchmark_names = sorted(list(benchmark_names))

    if not benchmark_names:
        print("No benchmark names found")
        return

    # Create a plot for each benchmark
    for benchmark_name in benchmark_names:
        fig, ax = plt.subplots(figsize=(12, 7))

        # Collect data for this benchmark from both versions
        develop_data = [b for b in develop_benchmarks if benchmark_name in b['name']]
        v1_14_data = [b for b in v1_14_benchmarks if benchmark_name in b['name']]

        # Filter data with timestamps
        develop_with_time = [b for b in develop_data if 'timestamp' in b]
        v1_14_with_time = [b for b in v1_14_data if 'timestamp' in b]

        plotted = False

        # Plot develop timeline
        if develop_with_time:
            df_dev = pd.DataFrame(develop_with_time)
            df_dev['datetime'] = pd.to_datetime(df_dev['timestamp'])
            df_dev = df_dev.sort_values('datetime')
            ax.plot(df_dev['datetime'], df_dev['value'], 'o-',
                   label='HDF5 develop', linewidth=2, markersize=8, color='#0066cc')
            plotted = True

        # Plot 1.14 timeline
        if v1_14_with_time:
            df_114 = pd.DataFrame(v1_14_with_time)
            df_114['datetime'] = pd.to_datetime(df_114['timestamp'])
            df_114 = df_114.sort_values('datetime')
            ax.plot(df_114['datetime'], df_114['value'], 's-',
                   label='HDF5 1.14', linewidth=2, markersize=8, color='#00aa00')
            plotted = True

        if plotted:
            ax.set_ylabel('Time (seconds)', fontsize=12)
            ax.set_xlabel('Date', fontsize=12)
            ax.set_title(f'{benchmark_name} - Performance Comparison', fontsize=14, fontweight='bold')
            ax.grid(True, alpha=0.3)
            ax.legend(fontsize=11, loc='best')

            # Format x-axis
            ax.xaxis.set_major_formatter(plt.matplotlib.dates.DateFormatter('%Y-%m-%d'))
            plt.setp(ax.xaxis.get_majorticklabels(), rotation=45, ha='right')

            plt.tight_layout()

            # Save with sanitized filename
            safe_name = benchmark_name.replace(' ', '_').replace('/', '_')
            output_file = output_dir / f"{safe_name}_comparison.png"
            plt.savefig(output_file, dpi=300, bbox_inches='tight')
            print(f"Created comparison plot: {output_file}")
            plt.close()
        else:
            plt.close()
            print(f"No data with timestamps for {benchmark_name}")


def create_individual_plots(benchmarks: List[Dict[str, Any]],
                           output_dir: Path,
                           version: str,
                           gh_pages_dir: str = None):
    """Create individual timeline plots for each benchmark in a specific version."""
    if not benchmarks:
        return

    # Load historical data if available
    all_benchmarks = benchmarks.copy()
    if gh_pages_dir:
        historical = load_benchmark_history(gh_pages_dir, version)
        all_benchmarks = historical + benchmarks

    # Filter benchmarks with timestamps
    timestamped_benchmarks = [b for b in all_benchmarks if 'timestamp' in b]

    if not timestamped_benchmarks:
        print(f"No benchmarks with timestamp found for version {version}")
        return

    # Group by benchmark name
    df = pd.DataFrame(timestamped_benchmarks)
    df['datetime'] = pd.to_datetime(df['timestamp'])

    # Get unique benchmark names
    benchmark_names = df['name'].apply(lambda x: x.replace(f' ({version})', '')).unique()

    for benchmark_name in benchmark_names:
        # Filter data for this benchmark
        benchmark_data = df[df['name'].str.contains(benchmark_name)].sort_values('datetime')

        if len(benchmark_data) == 0:
            continue

        fig, ax = plt.subplots(figsize=(12, 6))

        # Plot timeline
        x_dates = benchmark_data['datetime']
        y_values = benchmark_data['value']

        ax.plot(x_dates, y_values, 'o-', linewidth=2, markersize=6)
        ax.set_ylabel('Time (seconds)')
        ax.set_xlabel('Date')
        ax.set_title(f'{benchmark_name} - HDF5 {version}')
        ax.grid(True, alpha=0.3)

        # Format x-axis
        ax.xaxis.set_major_formatter(plt.matplotlib.dates.DateFormatter('%Y-%m-%d'))
        plt.setp(ax.xaxis.get_majorticklabels(), rotation=45, ha='right')

        # Add value labels
        for x, y in zip(x_dates, y_values):
            ax.annotate(f'{y:.4f}', (x, y), textcoords="offset points",
                       xytext=(0,10), ha='center', fontsize=8)

        plt.tight_layout()

        # Save with sanitized filename
        safe_name = benchmark_name.replace(' ', '_').replace('/', '_')
        output_file = output_dir / f"{safe_name}_{version}_timeline.png"
        plt.savefig(output_file, dpi=300, bbox_inches='tight')
        print(f"Individual plot saved to {output_file}")
        plt.close()


def main():
    parser = argparse.ArgumentParser(description='Create HDF5 benchmark comparison plots')
    parser.add_argument('develop_results', help='Path to detailed_results_develop.json file')
    parser.add_argument('v1_14_results', help='Path to detailed_results_1_14.json file')
    parser.add_argument('output_dir', help='Output directory for plots')
    parser.add_argument('--gh-pages-dir', help='Path to gh-pages directory for historical data')

    args = parser.parse_args()

    # Load current benchmark data
    develop_benchmarks = load_current_benchmarks(args.develop_results)
    v1_14_benchmarks = load_current_benchmarks(args.v1_14_results)

    print(f"Loaded {len(develop_benchmarks)} develop benchmarks")
    print(f"Loaded {len(v1_14_benchmarks)} 1.14 benchmarks")

    # Load historical data if available
    if args.gh_pages_dir:
        historical_develop = load_benchmark_history(args.gh_pages_dir, 'develop')
        historical_1_14 = load_benchmark_history(args.gh_pages_dir, '1_14')

        develop_benchmarks = historical_develop + develop_benchmarks
        v1_14_benchmarks = historical_1_14 + v1_14_benchmarks

        print(f"Total develop benchmarks with history: {len(develop_benchmarks)}")
        print(f"Total 1.14 benchmarks with history: {len(v1_14_benchmarks)}")

    # Create output directory
    output_path = Path(args.output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Create individual plots for each benchmark (showing both versions)
    create_individual_benchmark_plots(
        develop_benchmarks,
        v1_14_benchmarks,
        output_path
    )

    print(f"All benchmark plots created in {output_path}")


if __name__ == "__main__":
    main()
