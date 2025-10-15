#!/usr/bin/env python3
"""
HDF5 Performance Benchmark Result Parser for Catch2 output (Windows version)

This script parses Catch2 benchmark output and converts it to JSON format
compatible with benchmark-action/github-action-benchmark.

Windows-specific version that handles estimated times in minutes ('m' unit).
"""

import re
import json
import sys
import os
from pathlib import Path
from typing import List, Dict, Any
import datetime


def parse_catch2_benchmark(content: str) -> List[Dict[str, Any]]:
    """
    Parse Catch2 benchmark output.

    Example output:
    -------------------------------------------------------------------------------
    efc_no
    -------------------------------------------------------------------------------
    benchmark name                       samples       iterations    estimated
                                         mean          low mean      high mean
                                         std dev       low std dev   high std dev
    -------------------------------------------------------------------------------
    efc_no 100                                  10             1     6.08977 s
                                          588.104 ms    583.936 ms    592.672 ms
                                          22.2746 ms    18.3467 ms    26.7398 ms

    Windows may also show estimated time in minutes:
    vds 100                                         10             1      1.5989 m
                                         6.05704 s     5.93705 s     6.25559 s
                                        246.046 ms    147.353 ms    361.437 ms
    """
    benchmarks = []
    lines = content.split('\n')

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Look for the header line that starts with "benchmark name"
        if line.startswith('benchmark name'):
            # Skip header lines
            i += 1  # mean/low mean/high mean line
            if i < len(lines):
                i += 1  # std dev line
            if i < len(lines):
                i += 1  # dashed separator line

            # Now parse benchmark data lines
            while i < len(lines):
                bench_line = lines[i].strip()

                # Stop if we hit empty line or separator
                if not bench_line or bench_line.startswith('='):
                    break

                # Stop if we hit another dashed line (but not part of benchmark data)
                if bench_line.startswith('-'):
                    i += 1
                    continue

                # Parse benchmark data line
                # Example: "efc_no 100                                  2             1    613.923 ms"
                # Windows: "vds 100                                         10             1      1.5989 m"
                parts = bench_line.split()
                if len(parts) >= 4:
                    # Last two parts should be value and unit
                    try:
                        time_value = float(parts[-2])
                        time_unit = parts[-1]

                        # Check if this is a valid time unit (including 'm' for minutes on Windows)
                        if time_unit not in ['s', 'ms', 'us', 'ns', 'm']:
                            i += 1
                            continue

                        # The test name is everything except the last 4 parts (samples, iterations, value, unit)
                        test_name = ' '.join(parts[:-4])
                        samples = parts[-4]
                        iterations = parts[-3]

                        # Convert to seconds
                        if time_unit == 'ms':
                            time_value = time_value / 1000.0
                        elif time_unit == 'us':
                            time_value = time_value / 1000000.0
                        elif time_unit == 'ns':
                            time_value = time_value / 1000000000.0
                        elif time_unit == 'm':
                            time_value = time_value * 60.0

                        # Move to mean line (next line after benchmark name line)
                        i += 1
                        if i < len(lines):
                            mean_line = lines[i].strip()
                            mean_parts = mean_line.split()

                            # Parse mean value (first value with unit)
                            for j in range(len(mean_parts) - 1):
                                if mean_parts[j+1] in ['s', 'ms', 'us', 'ns', 'm']:
                                    try:
                                        mean_value = float(mean_parts[j])
                                        mean_unit = mean_parts[j+1]

                                        # Convert to seconds
                                        if mean_unit == 'ms':
                                            mean_value = mean_value / 1000.0
                                        elif mean_unit == 'us':
                                            mean_value = mean_value / 1000000.0
                                        elif mean_unit == 'ns':
                                            mean_value = mean_value / 1000000000.0
                                        elif mean_unit == 'm':
                                            mean_value = mean_value * 60.0

                                        benchmarks.append({
                                            'name': test_name,
                                            'value': mean_value,
                                            'unit': 'sec',
                                            'samples': int(samples) if samples.isdigit() else 10,
                                            'iterations': int(iterations) if iterations.isdigit() else 1
                                        })
                                        break
                                    except ValueError:
                                        continue

                        # Skip std dev line
                        i += 1
                        continue

                    except (ValueError, IndexError):
                        pass

                i += 1
        else:
            i += 1

    return benchmarks


def main():
    if len(sys.argv) < 3 or len(sys.argv) > 5:
        print("Usage: parse_catch2_results_win.py <input_file> <output_json_file> [hdf5_commit_hash] [version_label]")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]
    hdf5_hash = sys.argv[3] if len(sys.argv) >= 4 else None
    version_label = sys.argv[4] if len(sys.argv) == 5 else None

    print(f"Parsing Catch2 benchmark results from {input_file}")
    if hdf5_hash:
        print(f"Using HDF5 commit hash: {hdf5_hash}")
    if version_label:
        print(f"Version label: {version_label}")

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File {input_file} not found")
        sys.exit(1)

    # Parse benchmarks
    benchmarks = parse_catch2_benchmark(content)

    if not benchmarks:
        print("Warning: No benchmarks found in input file")
        # Don't fail, just create empty result
        benchmarks = []

    print(f"Found {len(benchmarks)} benchmark results")

    # Add metadata
    current_timestamp = datetime.datetime.now().isoformat()
    for benchmark in benchmarks:
        if hdf5_hash:
            benchmark['hdf5_commit_hash'] = hdf5_hash
            benchmark['hdf5_commit_short'] = hdf5_hash[:8]
        if version_label:
            benchmark['version'] = version_label
        benchmark['timestamp'] = current_timestamp

    # Create output directory if it doesn't exist
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write JSON output in github-action-benchmark format
    json_benchmarks = [
        {
            'name': b['name'],
            'unit': b['unit'],
            'value': b['value']
        }
        for b in benchmarks
    ]

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(json_benchmarks, f, indent=2)

    print(f"Benchmark results written to {output_file}")

    # Also write detailed results for plotting
    detailed_file = output_path.parent / f"detailed_results_{version_label}.json"
    with open(detailed_file, 'w', encoding='utf-8') as f:
        json.dump(benchmarks, f, indent=2)

    print(f"Detailed results written to {detailed_file}")

    # Print summary
    if benchmarks:
        print("\nBenchmark Summary:")
        for bench in benchmarks:
            print(f"  {bench['name']}: {bench['value']:.6f} {bench['unit']}")


if __name__ == "__main__":
    main()
