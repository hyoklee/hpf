window.BENCHMARK_DATA = {
  "lastUpdate": 1765351494120,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "HDF5 Performance Benchmarks (Windows)": [
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "d1fab6e6c0af4f4487e382dd10a2a4acde403d5d",
          "message": "fix: create Windows-specific Catch2 parser to handle minutes unit\n\nCreate parse_catch2_results_win.py to fix malformed benchmark output on Windows:\n- Add support for 'm' (minutes) time unit in estimated and mean values\n- Convert minutes to seconds properly (multiply by 60)\n- Add UTF-8 encoding for file operations\n- Fix issue where test names like \"vds 100\" were replaced with \"6.05704 s\"\n\nUpdate daily_win.yml to use parse_catch2_results_win.py instead of parse_catch2_results.py\n\nThe original script only recognized s/ms/us/ns units, causing it to skip lines\nwith minutes and incorrectly parse the mean line as the benchmark name line.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T10:02:36-05:00",
          "tree_id": "34ddbe319c86a88d001a743c1c1e73d54800f097",
          "url": "https://github.com/hyoklee/hpf/commit/d1fab6e6c0af4f4487e382dd10a2a4acde403d5d"
        },
        "date": 1760541496381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.24308,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.63515,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.90039,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.24805,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.10131,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.62218,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.64621,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.23148,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "49eddf559751c5e86a373b8f09db19ce5efe0d37",
          "message": "feat: add Windows benchmark data processing workflow\n\nAdd process-benchmark-data-win.yml that processes Windows benchmark data:\n- Triggers after \"Daily HDF5 Performance Benchmark (Windows)\" workflow\n- Processes gh-pages/benchmarks_win/data.js to data_grouped.js\n- Updates benchmarks_win/index.html to use grouped data format\n- Runs on ubuntu-latest with Python 3.x\n\nMirrors functionality of process-benchmark-data.yml for Windows benchmarks.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T15:42:07Z",
          "url": "https://github.com/hyoklee/hpf/commit/49eddf559751c5e86a373b8f09db19ce5efe0d37"
        },
        "date": 1760599267224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.27446,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.66569,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.93086,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.16162,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.1119,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.71148,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.75957,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.55408,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "49eddf559751c5e86a373b8f09db19ce5efe0d37",
          "message": "feat: add Windows benchmark data processing workflow\n\nAdd process-benchmark-data-win.yml that processes Windows benchmark data:\n- Triggers after \"Daily HDF5 Performance Benchmark (Windows)\" workflow\n- Processes gh-pages/benchmarks_win/data.js to data_grouped.js\n- Updates benchmarks_win/index.html to use grouped data format\n- Runs on ubuntu-latest with Python 3.x\n\nMirrors functionality of process-benchmark-data.yml for Windows benchmarks.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T15:42:07Z",
          "url": "https://github.com/hyoklee/hpf/commit/49eddf559751c5e86a373b8f09db19ce5efe0d37"
        },
        "date": 1760685658698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.27725,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.73739,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.97054,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.29557,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12172,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.71713,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.7303,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.32051,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "49eddf559751c5e86a373b8f09db19ce5efe0d37",
          "message": "feat: add Windows benchmark data processing workflow\n\nAdd process-benchmark-data-win.yml that processes Windows benchmark data:\n- Triggers after \"Daily HDF5 Performance Benchmark (Windows)\" workflow\n- Processes gh-pages/benchmarks_win/data.js to data_grouped.js\n- Updates benchmarks_win/index.html to use grouped data format\n- Runs on ubuntu-latest with Python 3.x\n\nMirrors functionality of process-benchmark-data.yml for Windows benchmarks.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T15:42:07Z",
          "url": "https://github.com/hyoklee/hpf/commit/49eddf559751c5e86a373b8f09db19ce5efe0d37"
        },
        "date": 1761031297336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.28716,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.76412,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.00101,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.36336,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.13374,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.73966,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.72971,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.63565,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "b3ef917ebac68c16dab8759afcd03540465765c1",
          "message": "ci: disable dispatch",
          "timestamp": "2025-10-23T01:01:41Z",
          "url": "https://github.com/hyoklee/hpf/commit/b3ef917ebac68c16dab8759afcd03540465765c1"
        },
        "date": 1761204153400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.09681,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 14.1482,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.50812,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.39792,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 0.957476,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 10.4964,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.38926,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.82473,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "c1fef6cb41ec3e26b07f51fee56154158558c87c",
          "message": "feat: add Mac benchmarking workflows\n\nAdd daily_mac.yml and process-benchmark-data-mac.yml to run HDF5\nperformance benchmarks on macOS-26 platform. Uses benchmarks_mac\ndirectory to store Mac-specific benchmark data separately.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T14:34:50-05:00",
          "tree_id": "48b5491e09f8e9f85e40be7f4e7e4121d5aff7a0",
          "url": "https://github.com/hyoklee/hpf/commit/c1fef6cb41ec3e26b07f51fee56154158558c87c"
        },
        "date": 1761248774529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.2848,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.65318,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.03139,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.30997,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.13315,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.66742,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.7592,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.48251,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T15:12:43-05:00",
          "tree_id": "643f11d23b160496e11375ee179ce7f401828d23",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761274127391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.02733,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.60685,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.42743,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.22358,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 0.894941,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.68293,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.30649,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 6.19685,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761376767859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.28437,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.72672,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.99285,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.28267,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12838,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.78776,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.73063,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.7805,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761636185366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.09119,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 14.1103,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.39979,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.78077,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.23083,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 10.5363,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.25889,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 6.00886,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761808819909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.25587,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.65202,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.98099,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.10371,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.1047,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.73154,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.66824,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.22016,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761895228955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.30128,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.5791,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.29324,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.05582,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.10659,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.65544,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.65949,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.30231,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761981553301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.23639,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.47143,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.33334,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.05662,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.1003,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.60362,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.688,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.27191,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762154533138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.25021,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.64757,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.32544,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.11974,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.11323,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.59467,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.68519,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.35338,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762240855043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.25964,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.7188,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.47863,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.46703,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12475,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.70299,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.7506,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.77717,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762327275863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.25176,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.82955,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.45341,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.5554,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.10382,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.71658,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.7952,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 6.02632,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762413698183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.25848,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.84153,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.40258,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.2884,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12331,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.7975,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.74227,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 6.01739,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762500020628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.24567,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.49208,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.33253,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.11226,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12112,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.59188,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.69603,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.30867,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762586342666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.34338,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.60023,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.38169,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.13301,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.11215,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.60034,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.69005,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.39274,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762672845524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.2556,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 8.06463,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.48562,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.69005,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.11925,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.93089,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.79871,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 6.26406,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762759314232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.27717,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.97844,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.48952,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.64138,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.1275,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.89212,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.79886,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 6.25681,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762845660756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.24345,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.44202,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.30861,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 1.99621,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.10234,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.53152,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.64206,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.05687,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762932083748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.26701,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.9369,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.3365,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.14785,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.13355,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.84048,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.70808,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.46794,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1763191129615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.23172,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.36998,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.26345,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 1.92592,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.10357,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.52336,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.67196,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.09668,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854",
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1763450605888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.05385,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 13.7217,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.75796,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.75828,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 0.934519,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 10.1205,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.42825,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 6.10925,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1763709729390,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.27378,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.86284,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.37755,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.53128,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.1237,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.8577,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.68056,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.77122,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1763795939799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.24647,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.57789,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.29196,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.0799,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12643,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.61892,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.69441,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.48326,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1764141676143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.24157,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.5309,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.29434,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.06331,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.13268,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.62887,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.7236,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.24911,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1764660239104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.25947,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.84244,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.37537,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.18689,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.11437,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.7785,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.68951,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.59648,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1764746642727,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.35596,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.84373,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.3957,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.28789,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12013,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.8315,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.77312,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.50757,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1764832999396,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.27482,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.62979,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.30205,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.14132,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12962,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.82092,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.6933,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.59189,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1764919396175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.25161,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.77451,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.25357,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.05232,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.12615,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.73831,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.67695,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.3426,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1765005565203,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.2315,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.65314,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.36082,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.21031,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.11882,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.60672,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.70288,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.48605,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1765091985242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.2477,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.55061,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.32043,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.16427,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.13122,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.66186,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.69361,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.36596,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1765265033091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.2335,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.49551,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.28926,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.27175,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.1013,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.7197,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.68973,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.22445,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "Hyo-Kyung Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e3fc748470e0b72a3af0a849300ee70e47b4afa1",
          "message": "docs: clean up",
          "timestamp": "2025-11-19T16:03:16Z",
          "url": "https://github.com/hyoklee/hpf/commit/e3fc748470e0b72a3af0a849300ee70e47b4afa1"
        },
        "date": 1765351487560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.24107,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 7.95212,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 2.35604,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.34849,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.10467,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.73362,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.71473,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 5.57833,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      }
    ]
  }
}