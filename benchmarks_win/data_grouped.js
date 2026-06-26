window.BENCHMARK_DATA = {
  "lastUpdate": 1782469467730,
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
          "message": "fix: create Windows-specific Catch2 parser to handle minutes unit\n\nCreate parse_catch2_results_win.py to fix malformed benchmark output on Windows:\n- Add support for 'm' (minutes) time unit in estimated and mean values\n- Convert minutes to seconds properly (multiply by 60)\n- Add UTF-8 encoding for file operations\n- Fix issue where test names like \"vds 100\" were replaced with \"6.05704 s\"\n\nUpdate daily_win.yml to use parse_catch2_results_win.py instead of parse_catch2_results.py\n\nThe original script only recognized s/ms/us/ns units, causing it to skip lines\nwith minutes and incorrectly parse the mean line as the benchmark name line.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T10:02:36-05:00",
          "tree_id": "34ddbe319c86a88d001a743c1c1e73d54800f097",
          "url": "https://github.com/hyoklee/hpf/commit/d1fab6e6c0af4f4487e382dd10a2a4acde403d5d"
        },
        "date": 1760541496381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10131,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10131,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24308,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.62218,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.62218,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.63515,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.64621,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.64621,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.90039,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.23148,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.23148,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.24805,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "feat: add Windows benchmark data processing workflow\n\nAdd process-benchmark-data-win.yml that processes Windows benchmark data:\n- Triggers after \"Daily HDF5 Performance Benchmark (Windows)\" workflow\n- Processes gh-pages/benchmarks_win/data.js to data_grouped.js\n- Updates benchmarks_win/index.html to use grouped data format\n- Runs on ubuntu-latest with Python 3.x\n\nMirrors functionality of process-benchmark-data.yml for Windows benchmarks.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T15:42:07Z",
          "url": "https://github.com/hyoklee/hpf/commit/49eddf559751c5e86a373b8f09db19ce5efe0d37"
        },
        "date": 1760599267224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1119,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1119,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27446,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.71148,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.71148,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.66569,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.75957,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.75957,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.93086,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.55408,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.55408,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.16162,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "feat: add Windows benchmark data processing workflow\n\nAdd process-benchmark-data-win.yml that processes Windows benchmark data:\n- Triggers after \"Daily HDF5 Performance Benchmark (Windows)\" workflow\n- Processes gh-pages/benchmarks_win/data.js to data_grouped.js\n- Updates benchmarks_win/index.html to use grouped data format\n- Runs on ubuntu-latest with Python 3.x\n\nMirrors functionality of process-benchmark-data.yml for Windows benchmarks.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T15:42:07Z",
          "url": "https://github.com/hyoklee/hpf/commit/49eddf559751c5e86a373b8f09db19ce5efe0d37"
        },
        "date": 1760685658698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12172,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12172,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27725,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.71713,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.71713,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.73739,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7303,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7303,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.97054,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.32051,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.32051,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.29557,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "feat: add Windows benchmark data processing workflow\n\nAdd process-benchmark-data-win.yml that processes Windows benchmark data:\n- Triggers after \"Daily HDF5 Performance Benchmark (Windows)\" workflow\n- Processes gh-pages/benchmarks_win/data.js to data_grouped.js\n- Updates benchmarks_win/index.html to use grouped data format\n- Runs on ubuntu-latest with Python 3.x\n\nMirrors functionality of process-benchmark-data.yml for Windows benchmarks.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T15:42:07Z",
          "url": "https://github.com/hyoklee/hpf/commit/49eddf559751c5e86a373b8f09db19ce5efe0d37"
        },
        "date": 1761031297336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13374,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13374,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.28716,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73966,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73966,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.76412,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72971,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72971,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.00101,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.63565,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.63565,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.36336,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 0.957476,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.957476,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.09681,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.4964,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.4964,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.1482,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.38926,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.38926,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.50812,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.82473,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.82473,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.39792,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "feat: add Mac benchmarking workflows\n\nAdd daily_mac.yml and process-benchmark-data-mac.yml to run HDF5\nperformance benchmarks on macOS-26 platform. Uses benchmarks_mac\ndirectory to store Mac-specific benchmark data separately.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T14:34:50-05:00",
          "tree_id": "48b5491e09f8e9f85e40be7f4e7e4121d5aff7a0",
          "url": "https://github.com/hyoklee/hpf/commit/c1fef6cb41ec3e26b07f51fee56154158558c87c"
        },
        "date": 1761248774529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13315,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13315,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2848,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.66742,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.66742,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.65318,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7592,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7592,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.03139,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.48251,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.48251,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.30997,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T15:12:43-05:00",
          "tree_id": "643f11d23b160496e11375ee179ce7f401828d23",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761274127391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.894941,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.894941,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.02733,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.68293,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.68293,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.60685,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.30649,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.30649,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.42743,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.19685,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.19685,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.22358,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761376767859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12838,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12838,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.28437,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.78776,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.78776,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.72672,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.73063,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.73063,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.99285,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.7805,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.7805,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.28267,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761636185366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.23083,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.23083,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.09119,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.5363,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.5363,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.1103,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.25889,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.25889,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.39979,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.00886,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.00886,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.78077,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761808819909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1047,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1047,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25587,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73154,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73154,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.65202,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.66824,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.66824,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.98099,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.22016,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.22016,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.10371,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761895228955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10659,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10659,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.30128,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.65544,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.65544,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.5791,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.65949,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.65949,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.29324,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.30231,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.30231,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.05582,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1761981553301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1003,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1003,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.23639,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.60362,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.60362,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.47143,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.688,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.688,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33334,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.27191,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.27191,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.05662,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762154533138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11323,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11323,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25021,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.59467,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.59467,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.64757,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.68519,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.68519,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.32544,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.35338,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.35338,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.11974,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762240855043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12475,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12475,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25964,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.70299,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.70299,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.7188,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7506,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7506,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.47863,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.77717,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.77717,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.46703,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762327275863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10382,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10382,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25176,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.71658,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.71658,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.82955,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7952,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7952,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.45341,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.02632,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.02632,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.5554,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762413698183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12331,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12331,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25848,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.7975,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.7975,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.84153,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.74227,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.74227,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.40258,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.01739,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.01739,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.2884,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762500020628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12112,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12112,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24567,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.59188,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.59188,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.49208,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.69603,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.69603,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33253,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.30867,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.30867,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.11226,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762586342666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11215,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11215,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.34338,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.60034,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.60034,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.60023,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.69005,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.69005,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.38169,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.39274,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.39274,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.13301,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762672845524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11925,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11925,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2556,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.93089,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.93089,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.06463,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.79871,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.79871,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.48562,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.26406,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.26406,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.69005,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762759314232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1275,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1275,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27717,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.89212,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.89212,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.97844,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.79886,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.79886,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.48952,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.25681,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.25681,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.64138,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762845660756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10234,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10234,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24345,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.53152,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.53152,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.44202,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.64206,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.64206,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.30861,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.05687,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.05687,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.99621,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1762932083748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13355,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13355,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26701,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.84048,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.84048,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.9369,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.70808,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.70808,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.3365,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.46794,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.46794,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.14785,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1763191129615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10357,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10357,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.23172,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.52336,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.52336,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.36998,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.67196,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.67196,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.26345,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.09668,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.09668,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.92592,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
          "message": "fix: correct cmpd_subset benchmark name parsing on Mac\n\nCreated Mac-specific parser (parse_catch2_results_mac.py) to handle\ncases where Catch2 output formatting on macOS causes benchmark names\nto be replaced with estimated timing values (e.g., \"6.13292 s\" instead\nof \"cmpd_subset 100\").\n\nThe parser detects when a benchmark name consists only of a numeric\ntiming value and recovers the actual benchmark name from the section\nheader above it.\n\nUpdated daily_mac.yml workflow to use the new Mac-specific parser.\n\nFixes #<issue_number>\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T20:12:43Z",
          "url": "https://github.com/hyoklee/hpf/commit/e7b5e062f72e9dfacb9fa3dc19dd35c455d7c854"
        },
        "date": 1763450605888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.934519,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.934519,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.05385,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.1205,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.1205,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 13.7217,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.42825,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.42825,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.75796,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.10925,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.10925,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.75828,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.1237,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1237,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27378,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.8577,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.8577,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.86284,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.68056,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.68056,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.37755,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.77122,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.77122,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.53128,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.12643,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12643,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24647,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.61892,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.61892,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.57789,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.69441,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.69441,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.29196,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.48326,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.48326,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.0799,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.13268,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13268,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24157,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.62887,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.62887,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.5309,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7236,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7236,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.29434,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.24911,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.24911,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.06331,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.11437,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11437,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25947,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.7785,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.7785,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.84244,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.68951,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.68951,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.37537,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.59648,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.59648,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.18689,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.12013,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12013,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.35596,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.8315,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.8315,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.84373,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.77312,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.77312,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.3957,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.50757,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.50757,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.28789,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.12962,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12962,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27482,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.82092,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.82092,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.62979,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.6933,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.6933,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.30205,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.59189,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.59189,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.14132,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.12615,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12615,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25161,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73831,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73831,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.77451,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.67695,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.67695,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.25357,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.3426,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.3426,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.05232,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.11882,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11882,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2315,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.60672,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.60672,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.65314,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.70288,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.70288,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.36082,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.48605,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.48605,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.21031,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.13122,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13122,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2477,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.66186,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.66186,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.55061,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.69361,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.69361,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.32043,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.36596,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.36596,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.16427,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.1013,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1013,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2335,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.7197,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.7197,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.49551,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.68973,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.68973,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.28926,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.22445,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.22445,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.27175,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
            "name": "efc_no 100",
            "value": 1.10467,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10467,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24107,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73362,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73362,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.95212,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71473,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71473,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.35604,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.57833,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.57833,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.34849,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1765610392924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11181,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11181,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26084,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.72084,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.72084,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.74571,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71816,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71816,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33444,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.50647,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.50647,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.17803,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1765869911918,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11911,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11911,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.23802,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.69396,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.69396,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.67253,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.70117,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.70117,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.29223,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.36976,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.36976,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.11171,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1766042685131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1237,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1237,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25459,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.82893,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.82893,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.7703,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7524,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7524,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.40262,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.75504,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.75504,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.2653,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1766129018755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1189,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1189,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27956,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.94172,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.94172,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.65632,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.70446,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.70446,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.29232,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.45762,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.45762,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.10402,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1766215167544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10265,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10265,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24744,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.51705,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.51705,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.47318,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.70236,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.70236,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.3253,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.28648,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.28648,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.10195,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1766474741021,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10281,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10281,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2464,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.67556,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.67556,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.60838,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.65884,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.65884,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.37038,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.51611,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.51611,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.1467,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1766647453188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11502,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11502,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2535,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.68848,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.68848,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.66989,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72565,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72565,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.41132,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.57819,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.57819,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.15,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1767079488546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11778,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11778,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.23264,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.70684,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.70684,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.60723,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.70581,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.70581,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.28345,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.36991,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.36991,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.07822,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1767166045119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.943791,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.943791,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.07587,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.6995,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.6995,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.3501,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.24555,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.24555,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.57293,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.05091,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.05091,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.61842,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1767252274538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12392,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12392,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2497,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.6578,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.6578,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.49167,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71838,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71838,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.28437,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.43094,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.43094,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.25233,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1767424869386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11142,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11142,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25176,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73273,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73273,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.67629,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71351,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71351,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.27507,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.37657,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.37657,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.99651,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1767770817388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12362,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12362,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26258,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.86684,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.86684,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.93552,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.70227,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.70227,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.36729,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.77413,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.77413,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.35119,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1768029756770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10773,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10773,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25436,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.77769,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.77769,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.8242,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72061,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72061,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.38626,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.00505,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.00505,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.58223,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1768289223306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12682,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12682,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26109,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.70565,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.70565,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.73515,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72978,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72978,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.43434,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.92236,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.92236,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.42749,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1768375599544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12006,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12006,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25579,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.74074,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.74074,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.634,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.61357,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.61357,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.27866,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.09557,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.09557,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.94058,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1769066927858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1157,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1157,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24515,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.55515,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.55515,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.48872,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.67627,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.67627,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.28979,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.33343,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.33343,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.14753,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1769153297409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12832,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12832,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.18678,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.18678,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.39362,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.81788,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.81788,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.48195,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.57723,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.57723,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.83246,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1769239334353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1114,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1114,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.50291,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.9046,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.9046,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.04035,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.671,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.671,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.32436,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.54934,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.54934,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.06001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1769325804652,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11506,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11506,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24402,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.64537,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.64537,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.64044,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.64603,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.64603,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.32801,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.23301,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.23301,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.0002,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1769498986958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.15692,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.15692,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2543,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.78616,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.78616,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.80411,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.74831,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.74831,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.36754,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.49611,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.49611,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.22982,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1769585249806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12313,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12313,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24222,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.65405,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.65405,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.65767,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71322,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71322,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.30601,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.38602,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.38602,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.12856,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1769759004538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.14809,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.14809,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25246,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.91741,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.91741,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.75405,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.73863,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.73863,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.38307,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.48735,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.48735,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.45227,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1770104693602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12861,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12861,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.48253,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.60309,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.60309,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.4999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.67159,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.67159,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.30344,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.11445,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.11445,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.98453,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1770191338131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.939548,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.939548,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1155,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.5449,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.5449,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.0169,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.39235,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.39235,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.71647,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.95755,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.95755,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.55471,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1770278080867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.946592,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.946592,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.07769,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.5786,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.5786,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.1248,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.41773,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.41773,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.73869,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.15603,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.15603,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.84968,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1770364149084,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13558,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13558,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.48015,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.82691,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.82691,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.78054,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.69532,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.69532,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.31774,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.53567,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.53567,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.18317,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1770449606828,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.15046,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.15046,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25889,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.70149,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.70149,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.55907,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.68264,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.68264,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.46714,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.26848,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.26848,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.11544,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1770796479172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10182,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10182,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26029,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.45484,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.45484,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.3842,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.61461,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.61461,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.28957,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.08722,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.08722,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.88741,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1770969101849,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13621,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13621,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.29037,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.70533,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.70533,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.74892,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.73663,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.73663,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33757,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.32452,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.32452,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.15178,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1771054618598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12698,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12698,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25389,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.80958,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.80958,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.78645,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72903,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72903,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.34557,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.61945,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.61945,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.27667,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1771314714540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11728,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11728,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25281,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.54845,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.54845,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.48856,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.6644,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.6644,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.34053,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.07858,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.07858,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.01333,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1771487486667,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13798,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13798,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.274,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.78069,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.78069,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.61486,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72977,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72977,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.39352,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.52985,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.52985,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.22044,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1771659343853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.949644,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.949644,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.08667,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.4193,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.4193,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.0604,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.38808,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.38808,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.71991,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.91594,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.91594,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.58777,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1771919537873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.16032,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.16032,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.28013,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.86262,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.86262,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.80088,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.74632,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.74632,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.44652,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.64341,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.64341,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.22383,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1772006046529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12863,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12863,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.48794,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.71774,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.71774,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.65345,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.75135,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.75135,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.34255,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.92382,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.92382,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.26809,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1772178721210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.975601,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.975601,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.08535,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 12.2169,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 12.2169,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 16.5778,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.51834,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.51834,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.86502,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 8.21379,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 8.21379,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.81824,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1772263720247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.15553,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.15553,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27381,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.81556,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.81556,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.76449,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.67567,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.67567,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.3501,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.4511,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.4511,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.5892,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1772437897152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12478,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12478,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.5463,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.736,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.736,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.65802,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.73924,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.73924,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.37639,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.61304,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.61304,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.15072,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1772610077215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1187,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1187,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27274,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.02684,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.02684,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.03562,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.79493,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.79493,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.46198,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.26356,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.26356,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.71665,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1772696676030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13047,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13047,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.47266,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.79289,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.79289,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.79656,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.76197,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.76197,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.34571,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.64631,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.64631,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.18532,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1772782901902,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.16902,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.16902,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25688,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.84914,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.84914,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.88173,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.78404,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.78404,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.37958,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.69167,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.69167,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.62015,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1772868657132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.10814,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.10814,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24352,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.96712,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.96712,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.86653,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72265,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72265,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33932,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.36874,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.36874,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.09813,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1773042798744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13416,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13416,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26929,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.82089,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.82089,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.91488,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71807,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71807,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.4126,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.34947,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.34947,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.30708,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1773215186416,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11287,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11287,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26221,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.74922,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.74922,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.66519,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.76348,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.76348,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.36257,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.97533,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.97533,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.50831,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1773301716236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1259,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1259,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2941,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.03507,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.03507,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.00061,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.75169,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.75169,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.41211,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.75865,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.75865,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.26015,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1773473915433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.14125,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.14125,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26912,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.83443,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.83443,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.61187,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7434,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7434,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.32524,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.40515,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.40515,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.1745,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1773734264726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.937846,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.937846,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.06538,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.2778,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.2778,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 13.8445,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.37538,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.37538,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.69174,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.76272,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.76272,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.38466,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1773820471829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1449,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1449,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.49821,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.94676,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.94676,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.97658,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.75087,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.75087,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.38361,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.86532,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.86532,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.34969,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1773906528904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11527,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11527,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.24898,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.69409,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.69409,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.57358,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.68091,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.68091,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33501,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.28165,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.28165,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.02716,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1774078546093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13189,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13189,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.28196,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.91912,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.91912,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.87814,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72325,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72325,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.31255,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.57397,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.57397,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.16302,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1774425264841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13335,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13335,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26315,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.78551,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.78551,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.68537,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71186,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71186,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.41875,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.5065,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.5065,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.22182,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1774598536661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12098,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12098,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.50316,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.76609,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.76609,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.68758,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.72572,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.72572,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.36943,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.31757,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.31757,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.15978,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1774684072737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.14262,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.14262,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.29792,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.85402,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.85402,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.88451,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.83986,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.83986,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.45929,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.12356,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.12356,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.53312,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1774859129577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12849,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12849,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25283,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.97375,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.97375,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.03919,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7909,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7909,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.40841,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.03647,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.03647,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.52296,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1774944606424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.898966,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.898966,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.07056,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.81044,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.81044,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.81544,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.32016,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.32016,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.57371,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.1684,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.1684,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.10372,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1775031574083,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.933997,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.933997,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.06827,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.1806,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.1806,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 13.8007,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.39325,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.39325,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.72653,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.85079,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.85079,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.63106,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1775289049757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1437,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1437,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27509,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.8758,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.8758,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.81398,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7706,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7706,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.40971,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.65759,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.65759,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.30823,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1775375826062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13074,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13074,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27509,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.78736,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.78736,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.74022,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.75991,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.75991,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.38806,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.87417,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.87417,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.52564,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1775549638892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.14374,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.14374,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.28576,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.86644,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.86644,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.84196,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.79102,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.79102,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.41755,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.42753,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.42753,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.09921,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1775636087822,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.887633,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.887633,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.00621,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.84396,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.84396,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.85862,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.36872,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.36872,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.60565,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.30808,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.30808,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33406,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1775722896526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.9540040000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.9540040000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.07489,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.4996,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.4996,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.1732,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.4211,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4211,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.76654,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.05453,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.05453,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.83759,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1775893913054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12092,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12092,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25448,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.66565,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.66565,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.53444,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.67322,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.67322,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.35431,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.23498,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.23498,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.05239,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1776155343231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1258,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1258,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27594,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.84407,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.84407,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.80095,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71728,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71728,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.40148,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.51235,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.51235,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.12952,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1776760521008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13386,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13386,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26765,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.89519,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.89519,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.9099,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.73421,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.73421,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.41258,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.73791,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73791,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.37082,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1776846760027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.904744,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.904744,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27905,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.01456,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.01456,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.03346,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.33059,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.33059,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.5601,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.51571,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.51571,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.3425,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1777191596614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.12691,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.12691,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2774,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.8935,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.8935,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.83377,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.79516,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.79516,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.41521,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.53694,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.53694,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.20896,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1777454064871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.16215,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.16215,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.28931,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.8816,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.8816,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.91765,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.76819,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.76819,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.47422,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.75101,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.75101,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.47529,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1777540599425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.898707,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.898707,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.996032,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.07409,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.07409,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.06537,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.34086,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.34086,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.57727,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.88928,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.88928,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.43255,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1777626353551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.936372,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.936372,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.06542,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 11.4327,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 11.4327,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 15.7582,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.44669,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.44669,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.80262,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 7.25722,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 7.25722,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.09698,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1777710401584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13837,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13837,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27372,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.8673,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.8673,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.843,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.78007,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.78007,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.39567,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.1058,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.1058,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.47116,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1777797537157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.886135,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.886135,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.9957290000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.09242,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.09242,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.10896,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.37421,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.37421,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.61344,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.64516,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.64516,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.40236,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1778146516328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.15219,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.15219,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27439,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.83585,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.83585,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.83535,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.7378,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.7378,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.46603,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.58516,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.58516,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.22878,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1778228778256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.8053049999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.8053049999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.12092,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.35704,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.35704,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.06428,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.08581,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.08581,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.32211,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.69302,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.69302,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.93406,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1778315612625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.11261,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.11261,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25327,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.78335,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.78335,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.67452,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.73194,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.73194,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.41227,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.79382,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.79382,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.50281,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1778665404867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1288,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1288,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26798,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.76191,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.76191,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.68387,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.64463,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.64463,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.35723,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.3546,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.3546,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.19828,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1778838417208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13837,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13837,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.28315,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.91761,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.91761,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.87618,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.86486,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.86486,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.46587,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.44263,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.44263,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.13535,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1779187159577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13786,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13786,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.28109,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.74151,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.74151,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.66679,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.78292,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.78292,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.36962,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.72379,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.72379,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.23287,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1779272713690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.7101559999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.7101559999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7944009999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.34568,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.34568,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.06242,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.05656,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.05656,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25552,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.77482,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.77482,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.97418,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1779527143255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.710294,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.710294,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.894991,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.66463,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.66463,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.19931,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.07119,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.07119,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.37988,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.63485,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.63485,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.13385,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1779879269176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.912576,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.912576,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.00725,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.75483,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.75483,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.71786,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.30945,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.30945,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.54198,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.16779,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.16779,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.12978,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1780051638752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.890639,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.890639,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.00365,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.83004,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.83004,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.81633,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.32197,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.32197,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.58661,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.16247,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.16247,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.31461,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1780132610814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.8339460000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.8339460000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.905952,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.92742,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.92742,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.73827,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.07246,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.07246,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.29865,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.97882,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.97882,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.95457,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1780317598199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.955483,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.955483,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.0938,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.4113,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.4113,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.1255,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.44626,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.44626,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.77377,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.16014,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.16014,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.95816,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1780487946943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.8833840000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.8833840000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.0005,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73071,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73071,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.71187,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.35201,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.35201,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.54739,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.24804,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.24804,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.07675,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1780569549508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.509776,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.509776,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.577928,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.96488,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.96488,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.84335,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.972198,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.972198,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.0201,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.12268,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.12268,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.88119,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1780656693957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.930783,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.930783,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.05867,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.0046,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.0046,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 13.5281,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.40387,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.40387,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.7404,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.91657,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.91657,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.82505,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1780737955291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.9017419999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.9017419999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.997788,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73696,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73696,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.74767,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.32879,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.32879,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.5681,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.2253,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.2253,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.23056,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781001438790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.9239360000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.9239360000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.05392,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.1025,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.1025,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 13.6856,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.37537,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.37537,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.6929,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.64983,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.64983,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.35653,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781089047680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.895454,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.895454,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.990249,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.09845,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.09845,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.20124,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.37778,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.37778,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.65299,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 7.24531,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 7.24531,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.83597,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781262323060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.900548,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.900548,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.00292,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.93842,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.93842,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.84052,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.32498,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.32498,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.54948,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.22972,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.22972,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.13239,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781344683817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.706963,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.706963,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.781901,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.68904,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.68904,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.34023,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.02866,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.02866,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25567,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.53384,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.53384,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.91984,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781432888685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.14635,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.14635,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.27954,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73663,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73663,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.69489,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.71811,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.71811,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.37807,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.37981,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.37981,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.05851,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781611805537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.8941950000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.8941950000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.00396,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.04677,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.04677,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.06399,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.35506,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.35506,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.63581,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 7.03162,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 7.03162,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.31131,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781696160356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.1231,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1231,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.29337,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.80776,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.80776,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.78827,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.74618,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.74618,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.43641,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.52539,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.52539,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.09457,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781781213949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.14311,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.14311,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26686,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.92039,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.92039,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.90604,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.74594,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.74594,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.45318,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.92396,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.92396,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.38137,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1781949970173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.913046,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.913046,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.996644,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.90036,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.90036,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.79845,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.31994,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.31994,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.57707,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.16281,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.16281,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.10793,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1782211028467,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 1.13954,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.13954,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.29361,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.882,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.882,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.88654,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.82182,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.82182,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.44055,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.14588,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.14588,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.73289,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1782296600964,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.941277,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.941277,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.07073,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.4709,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.4709,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 14.1993,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.39287,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.39287,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.71051,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.73579,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73579,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.42675,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
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
        "date": 1782469464216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.93735,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.93735,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.06591,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 10.4041,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 10.4041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 13.999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.4342,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4342,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.74148,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 6.01657,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.01657,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.83571,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          }
        ]
      }
    ]
  }
};
