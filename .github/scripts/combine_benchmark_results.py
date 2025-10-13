#!/usr/bin/env python3
"""
Combine benchmark results from different HDF5 versions for comparison plots.

This script combines benchmark results from HDF5 develop and HDF5 1.14.6
into a single JSON file that can be used by github-action-benchmark to
generate comparison plots with two line graphs.
"""

import json
import sys
from pathlib import Path
from typing import List, Dict, Any


def load_benchmark_results(file_path: str) -> List[Dict[str, Any]]:
    """Load benchmark results from a JSON file."""
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Error: File {file_path} not found")
        return []
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {file_path}: {e}")
        return []


def combine_benchmark_results(develop_results: List[Dict[str, Any]],
                            v1146_results: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Combine benchmark results from two HDF5 versions into individual benchmarks
    for github-action-benchmark compatibility.

    Creates separate benchmark entries for each HDF5 version.
    """
    combined_results = []

    # Add all develop benchmarks with version suffix
    for bench in develop_results:
        # Validate benchmark value
        value = bench.get("value")
        if not isinstance(value, (int, float)) or not (value > 0 and value < float('inf')):
            print(f"Warning: Skipping develop benchmark '{bench['name']}' with invalid value: {value}")
            continue

        individual_bench = bench.copy()
        individual_bench['name'] = f"{bench['name']}_hdf5_develop"
        if 'extra' in individual_bench:
            individual_bench['extra'] = f"HDF5 develop - {individual_bench['extra']}"
        else:
            individual_bench['extra'] = "HDF5 develop"
        combined_results.append(individual_bench)

    # Add all 1.14.6 benchmarks with version suffix
    for bench in v1146_results:
        # Validate benchmark value
        value = bench.get("value")
        if not isinstance(value, (int, float)) or not (value > 0 and value < float('inf')):
            print(f"Warning: Skipping v1.14.6 benchmark '{bench['name']}' with invalid value: {value}")
            continue

        individual_bench = bench.copy()
        individual_bench['name'] = f"{bench['name']}_hdf5_1146"
        individual_bench['extra'] = "HDF5 1.14.6"
        combined_results.append(individual_bench)

    return combined_results


def main():
    if len(sys.argv) != 4:
        print("Usage: combine_benchmark_results.py <develop_json> <v1146_json> <output_json>")
        sys.exit(1)

    develop_file = sys.argv[1]
    v1146_file = sys.argv[2]
    output_file = sys.argv[3]

    print(f"Loading develop results from {develop_file}")
    develop_results = load_benchmark_results(develop_file)

    print(f"Loading 1.14.6 results from {v1146_file}")
    v1146_results = load_benchmark_results(v1146_file)

    if not develop_results and not v1146_results:
        print("Error: No benchmark results found in either file")
        sys.exit(1)

    print(f"Found {len(develop_results)} develop benchmarks and {len(v1146_results)} v1.14.6 benchmarks")

    # Combine results
    combined_results = combine_benchmark_results(develop_results, v1146_results)

    # Create output directory if it doesn't exist
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write combined results
    with open(output_file, 'w') as f:
        json.dump(combined_results, f, indent=2)

    print(f"Combined benchmark results written to {output_file}")
    print(f"Total combined benchmarks: {len(combined_results)}")

    # Count benchmarks by version
    develop_count = len([b for b in combined_results if "_hdf5_develop" in b['name']])
    v1146_count = len([b for b in combined_results if "_hdf5_1146" in b['name']])

    print(f"  HDF5 develop benchmarks: {develop_count}")
    print(f"  HDF5 1.14.6 benchmarks: {v1146_count}")

    # Show example benchmarks
    print(f"\nExample benchmarks:")
    for bench in sorted(combined_results[:5], key=lambda x: x['name']):  # Show first 5
        version = "develop" if "_hdf5_develop" in bench['name'] else "1.14.6"
        base_name = bench['name'].replace('_hdf5_develop', '').replace('_hdf5_1146', '')
        value = bench.get('value', 'N/A')
        unit = bench.get('unit', '')
        print(f"  ✓ {base_name} (HDF5 {version}): {value} {unit}")


if __name__ == "__main__":
    main()
