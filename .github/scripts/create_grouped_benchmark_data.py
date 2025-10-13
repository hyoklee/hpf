#!/usr/bin/env python3
"""
Transform benchmark data to grouped series format for HDF5 version comparison.

This script processes data.js from github-action-benchmark and adds series arrays
to group HDF5 develop and 1.14 benchmarks together for side-by-side comparison.
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, Any, List, Optional


def parse_data_js(file_path: str) -> Optional[Dict[str, Any]]:
    """Parse the data.js file to extract benchmark data."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()

        # Extract the JavaScript object
        match = re.search(r'window\.BENCHMARK_DATA\s*=\s*({.*});?\s*$',
                         content, re.DOTALL | re.MULTILINE)
        if not match:
            print(f"Error: Could not find BENCHMARK_DATA in {file_path}")
            return None

        json_str = match.group(1)
        return json.loads(json_str)

    except FileNotFoundError:
        print(f"Error: File {file_path} not found")
        return None
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {file_path}: {e}")
        return None
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None


def transform_to_grouped_series(data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Transform benchmark data to include series arrays.

    The github-action-benchmark stores data with separate entries for each
    benchmark. We need to group benchmarks by base name and add series data.
    """
    if 'entries' not in data:
        print("Error: No entries found in benchmark data")
        return data

    transformed_data = {
        "lastUpdate": data.get("lastUpdate"),
        "repoUrl": data.get("repoUrl"),
        "entries": {}
    }

    # Process entries - each suite has a list of historical data points
    for suite_name, entries in data['entries'].items():
        if not entries:
            continue

        # For each historical data point (commit), we need to group the benchmarks
        transformed_entries = []

        for entry in entries:
            if 'benches' not in entry:
                continue

            # Group benchmarks by base name
            # Current format: benchmarks are stored individually
            # Target format: group same benchmarks with series data

            bench_dict = entry['benches']
            grouped_benches = []

            # Build a map of base name -> list of bench data
            bench_map = {}
            for bench in bench_dict:
                bench_name = bench['name']

                # Extract version info from extra field if it exists
                extra = bench.get('extra', '')

                # Determine base name and version
                # First check for version suffix in the benchmark name
                # Common suffixes: _hdf5_develop, _hdf5_1146, _hdf5_1_14_6
                version = None
                base_name = bench_name

                # Try to extract version from name suffix
                if '_hdf5_develop' in bench_name.lower():
                    base_name = re.sub(r'_hdf5_develop$', '', bench_name, flags=re.IGNORECASE)
                    version = 'HDF5 develop'
                elif '_hdf5_1146' in bench_name.lower() or '_hdf5_1_14_6' in bench_name.lower():
                    base_name = re.sub(r'_hdf5_(1146|1_14_6)$', '', bench_name, flags=re.IGNORECASE)
                    version = 'HDF5 1.14.6'
                elif '_hdf5_1_14' in bench_name.lower():
                    base_name = re.sub(r'_hdf5_1_14$', '', bench_name, flags=re.IGNORECASE)
                    version = 'HDF5 1.14'

                # If no version in name, check the extra field
                if version is None:
                    if 'HDF5 develop' in extra or 'develop' in extra.lower():
                        version = 'HDF5 develop'
                    elif 'HDF5 1.14.6' in extra or '1.14.6' in extra:
                        version = 'HDF5 1.14.6'
                    elif 'HDF5 1.14' in extra or '1.14' in extra or '1_14' in extra:
                        version = 'HDF5 1.14'

                if base_name not in bench_map:
                    bench_map[base_name] = {}

                if version:
                    bench_map[base_name][version] = {
                        'name': version,
                        'value': bench.get('value'),
                        'unit': bench.get('unit'),
                        'extra': extra
                    }
                else:
                    # Standalone benchmark
                    bench_map[base_name]['standalone'] = bench

            # Create grouped benchmarks
            for base_name, versions in bench_map.items():
                if 'standalone' in versions:
                    # This is a standalone benchmark without version comparison
                    grouped_benches.append(versions['standalone'])
                else:
                    # Create a grouped benchmark with series
                    series = []

                    # Add versions in consistent order (1.14.6 first, then develop)
                    if 'HDF5 1.14.6' in versions:
                        series.append(versions['HDF5 1.14.6'])
                    elif 'HDF5 1.14' in versions:
                        series.append(versions['HDF5 1.14'])

                    if 'HDF5 develop' in versions:
                        series.append(versions['HDF5 develop'])

                    # Add any other versions
                    for ver_name, ver_data in versions.items():
                        if ver_name not in ['HDF5 1.14', 'HDF5 1.14.6', 'HDF5 develop']:
                            series.append(ver_data)

                    if series:
                        # Use the value from the first series as the main value
                        # (required by github-action-benchmark format)
                        grouped_bench = {
                            'name': base_name,
                            'value': series[0]['value'],
                            'unit': series[0]['unit'],
                            'series': series
                        }
                        grouped_benches.append(grouped_bench)

            # Create new entry with grouped benchmarks
            transformed_entry = {
                'commit': entry.get('commit'),
                'date': entry.get('date'),
                'tool': entry.get('tool'),
                'benches': grouped_benches
            }
            transformed_entries.append(transformed_entry)

        transformed_data['entries'][suite_name] = transformed_entries

    return transformed_data


def write_data_js(data: Dict[str, Any], output_file: str):
    """Write the data as a JavaScript file."""
    try:
        with open(output_file, 'w') as f:
            f.write('window.BENCHMARK_DATA = ')
            json.dump(data, f, indent=2)
            f.write(';\n')

        print(f"Benchmark data written to {output_file}")

    except Exception as e:
        print(f"Error writing {output_file}: {e}")
        sys.exit(1)


def main():
    if len(sys.argv) != 3:
        print("Usage: create_grouped_benchmark_data.py <input_data.js> <output_data.js>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    print(f"Processing benchmark data from {input_file}")

    # Parse input data
    data = parse_data_js(input_file)
    if not data:
        sys.exit(1)

    # Transform to grouped series format
    grouped_data = transform_to_grouped_series(data)

    # Create output directory if needed
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write transformed data
    write_data_js(grouped_data, output_file)

    # Print summary
    total_suites = len(grouped_data.get('entries', {}))
    total_entries = sum(len(entries) for entries in grouped_data.get('entries', {}).values())
    total_benchmarks = 0
    grouped_benchmarks = 0

    for entries in grouped_data.get('entries', {}).values():
        for entry in entries:
            benches = entry.get('benches', [])
            total_benchmarks += len(benches)
            grouped_benchmarks += len([b for b in benches if 'series' in b])

    print(f"\nSummary:")
    print(f"  Total benchmark suites: {total_suites}")
    print(f"  Total entries (timestamps): {total_entries}")
    print(f"  Total benchmarks: {total_benchmarks}")
    print(f"  Grouped benchmarks (with series): {grouped_benchmarks}")
    print(f"  Individual benchmarks: {total_benchmarks - grouped_benchmarks}")


if __name__ == "__main__":
    main()
