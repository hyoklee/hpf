#!/usr/bin/env python3
"""Validate a github-action-benchmark data.js file.

github-action-benchmark loads existing history with a bare

    JSON.parse(script.slice('window.BENCHMARK_DATA = '.length))

and, on any error, silently falls back to an empty {"entries": {}} and
pushes that as the new history. A single stray character -- a trailing
';', a hand edit that breaks the JSON -- therefore wipes every past
benchmark run while the workflow still reports success.

This script reproduces that exact parse so the workflow can fail loudly
instead, and can assert that a run did not shrink the history.
"""

import argparse
import json
import os
import sys

PREFIX = 'window.BENCHMARK_DATA = '


def load(path: str) -> dict:
    """Parse data.js the way github-action-benchmark does, or die."""
    with open(path, encoding='utf-8') as f:
        script = f.read()

    if not script.startswith(PREFIX):
        sys.exit(f"ERROR: {path} does not start with {PREFIX!r}")

    try:
        return json.loads(script[len(PREFIX):])
    except json.JSONDecodeError as e:
        tail = script[-40:].replace('\n', '\\n')
        sys.exit(
            f"ERROR: {path} is not parseable by github-action-benchmark: {e}\n"
            f"       file ends with: ...{tail!r}\n"
            "       The payload must be plain JSON -- no trailing ';', no "
            "comments, no JS expressions. If you hand-edit this file, keep "
            "the final byte a '}'.\n"
            "       Left uncaught, the action would discard all existing "
            "history and push a fresh single-entry file."
        )


def count(data: dict) -> int:
    return sum(len(v) for v in data.get('entries', {}).values())


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('path', help='path to data.js')
    p.add_argument('--min-entries', type=int, default=None,
                   help='fail if the file holds fewer entries than this')
    p.add_argument('--output-name', default=None,
                   help='write <name>=<entry count> to $GITHUB_OUTPUT')
    p.add_argument('--allow-missing', action='store_true',
                   help='treat a missing file as 0 entries instead of an error')
    args = p.parse_args()

    if not os.path.exists(args.path):
        if not args.allow_missing:
            sys.exit(f"ERROR: {args.path} does not exist")
        print(f"{args.path} does not exist yet, treating as 0 entries")
        total = 0
    else:
        data = load(args.path)
        total = count(data)
        suites = ', '.join(
            f"{k} ({len(v)})" for k, v in data.get('entries', {}).items()
        )
        print(f"{args.path}: OK -- {total} entries [{suites}]")

    if args.min_entries is not None and total < args.min_entries:
        sys.exit(
            f"ERROR: {args.path} holds {total} entries but at least "
            f"{args.min_entries} were expected -- benchmark history was "
            "truncated. Do not push this file; inspect the previous "
            "gh-pages revision before re-running."
        )

    if args.output_name:
        github_output = os.environ.get('GITHUB_OUTPUT')
        if github_output:
            with open(github_output, 'a', encoding='utf-8') as f:
                f.write(f"{args.output_name}={total}\n")


if __name__ == '__main__':
    main()
