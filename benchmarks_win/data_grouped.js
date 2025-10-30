window.BENCHMARK_DATA = {
  "lastUpdate": 1761808826743,
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
      }
    ]
  }
};
