#!/usr/bin/env python3
"""
Remove invalid benchmark entries from a grouped benchmark data file.

Malformed Catch2 output can produce benchmark entries whose "name" is a bare
timing value (e.g. "8.51453 s") instead of a real benchmark name such as
"cmpd_subset 100". This script parses window.BENCHMARK_DATA, drops every bench
whose name is numeric (including its nested "series"), and writes the result
back out in the same format as create_grouped_benchmark_data.py.

Usage:
    remove_invalid_entries.py <input_data.js> [output_data.js]

If <output_data.js> is omitted the input file is edited in place.
"""

import json
import re
import sys
from typing import Dict, Any, Optional


def parse_data_js(file_path: str) -> Optional[Dict[str, Any]]:
    """Parse a data.js / data_grouped.js file to extract benchmark data."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()

        match = re.search(r'window\.BENCHMARK_DATA\s*=\s*({.*});?\s*$',
                          content, re.DOTALL | re.MULTILINE)
        if not match:
            print(f"Error: Could not find BENCHMARK_DATA in {file_path}")
            return None

        return json.loads(match.group(1))

    except FileNotFoundError:
        print(f"Error: File {file_path} not found")
        return None
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {file_path}: {e}")
        return None
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None


def is_numeric_name(name: Any) -> bool:
    """Return True if a benchmark name is a bare number (e.g. "8.51453 s").

    Valid benchmark names start with a word (e.g. "vds 100"), so the first
    whitespace-delimited token never parses as a float. Malformed names like
    "8.51453 s" do.
    """
    if not isinstance(name, str):
        return False
    tokens = name.strip().split()
    if not tokens:
        return False
    try:
        float(tokens[0])
        return True
    except ValueError:
        return False


def remove_invalid_entries(data: Dict[str, Any]) -> int:
    """Drop benches with numeric names in place. Returns the number removed."""
    removed = 0
    for benches_owner in data.get('entries', {}).values():
        for run in benches_owner:
            benches = run.get('benches')
            if not isinstance(benches, list):
                continue
            kept = []
            for bench in benches:
                if isinstance(bench, dict) and is_numeric_name(bench.get('name')):
                    print(f"  removing: {bench.get('name')!r}")
                    removed += 1
                else:
                    kept.append(bench)
            run['benches'] = kept
    return removed


def write_data_js(data: Dict[str, Any], output_file: str):
    """Write the data as a JavaScript file (matches github-action-benchmark).

    No trailing ';' -- github-action-benchmark reads its own history with a
    bare JSON.parse of everything after the prefix, so a semicolon makes it
    discard all past runs and push a fresh single-entry file instead.
    """
    try:
        with open(output_file, 'w') as f:
            f.write('window.BENCHMARK_DATA = ')
            json.dump(data, f, indent=2)
        print(f"Benchmark data written to {output_file}")
    except Exception as e:
        print(f"Error writing {output_file}: {e}")
        sys.exit(1)


def main():
    if len(sys.argv) not in (2, 3):
        print("Usage: remove_invalid_entries.py <input_data.js> [output_data.js]")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) == 3 else input_file

    print(f"Processing benchmark data from {input_file}")

    data = parse_data_js(input_file)
    if not data:
        sys.exit(1)

    removed = remove_invalid_entries(data)
    print(f"Removed {removed} invalid {'entry' if removed == 1 else 'entries'}")

    write_data_js(data, output_file)


if __name__ == '__main__':
    main()
