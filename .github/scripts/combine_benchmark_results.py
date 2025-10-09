#!/usr/bin/env python3
"""
Combine benchmark results from multiple HDF5 versions into grouped series format
"""

import json
import sys
from pathlib import Path


def main():
    if len(sys.argv) != 4:
        print("Usage: combine_benchmark_results.py <develop_json> <1_14_json> <output_json>")
        sys.exit(1)

    develop_file = sys.argv[1]
    version_1_14_file = sys.argv[2]
    output_file = sys.argv[3]

    print(f"Combining benchmark results from {develop_file} and {version_1_14_file}")

    # Load both files
    develop_data = []
    version_1_14_data = []

    try:
        with open(develop_file, 'r') as f:
            develop_data = json.load(f)
            print(f"Loaded {len(develop_data)} benchmarks from develop")
    except FileNotFoundError:
        print(f"Warning: {develop_file} not found")
    except Exception as e:
        print(f"Error loading {develop_file}: {e}")

    try:
        with open(version_1_14_file, 'r') as f:
            version_1_14_data = json.load(f)
            print(f"Loaded {len(version_1_14_data)} benchmarks from 1.14")
    except FileNotFoundError:
        print(f"Warning: {version_1_14_file} not found")
    except Exception as e:
        print(f"Error loading {version_1_14_file}: {e}")

    if not develop_data and not version_1_14_data:
        print("Error: No benchmark data found")
        sys.exit(1)

    # Group benchmarks by name (without version suffix)
    grouped = {}

    for bench in develop_data:
        # Remove version suffix to get base name
        base_name = bench['name'].replace(' (develop)', '')
        if base_name not in grouped:
            grouped[base_name] = {'develop': None, '1_14': None}
        grouped[base_name]['develop'] = bench

    for bench in version_1_14_data:
        base_name = bench['name'].replace(' (1_14)', '')
        if base_name not in grouped:
            grouped[base_name] = {'develop': None, '1_14': None}
        grouped[base_name]['1_14'] = bench

    # Create grouped series format for github-action-benchmark
    result = []

    for base_name, versions in sorted(grouped.items()):
        series = []

        # Add 1.14 series
        if versions['1_14']:
            series.append({
                'name': 'HDF5 1.14',
                'value': versions['1_14']['value'],
                'unit': versions['1_14']['unit']
            })

        # Add develop series
        if versions['develop']:
            dev_bench = versions['develop']
            extra_info = f"HDF5 develop"
            if 'hdf5_commit_short' in dev_bench:
                extra_info += f" - {dev_bench['hdf5_commit_short']}"

            series.append({
                'name': 'HDF5 develop',
                'value': dev_bench['value'],
                'unit': dev_bench['unit'],
                'extra': extra_info
            })

        # Only add if we have at least one version
        if series:
            result.append({
                'name': base_name,
                'unit': series[0]['unit'],
                'value': series[0]['value'],  # Use first value for compatibility
                'series': series
            })

    # Write combined results
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_file, 'w') as f:
        json.dump(result, f, indent=2)

    print(f"Combined {len(result)} grouped benchmarks written to {output_file}")


if __name__ == "__main__":
    main()
