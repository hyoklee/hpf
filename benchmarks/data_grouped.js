window.BENCHMARK_DATA = {
  "lastUpdate": 1761028055684,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "HDF5 Performance Benchmarks": [
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
          "id": "94224601e5b46153ef2b6c4d43ac130e6e89a1b2",
          "message": "ci: test fix",
          "timestamp": "2025-10-13T14:24:09-05:00",
          "tree_id": "ad73289a999dc6f076ff2d34414282b9fb438846",
          "url": "https://github.com/hyoklee/hpf/commit/94224601e5b46153ef2b6c4d43ac130e6e89a1b2"
        },
        "date": 1760383900438,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.611115,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.611115,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.627601,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.84132,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.84132,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.20008,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.982038,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.982038,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.12535,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.34655,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.34655,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.76191,
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
          "id": "f0cd1ffde1e6715e96735686561cadb3e4cff9a0",
          "message": "fix: generate correct grouped data",
          "timestamp": "2025-10-13T15:11:29-05:00",
          "tree_id": "70a3c78674ae4948262954d7efc7fbf558293866",
          "url": "https://github.com/hyoklee/hpf/commit/f0cd1ffde1e6715e96735686561cadb3e4cff9a0"
        },
        "date": 1760386701537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.619782,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.619782,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.623015,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.58482,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.58482,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.1832,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.0577,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.0577,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.12361,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.17988,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.17988,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.58289,
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
          "id": "449b9ef78e95b2a661bcd65ac132e3d8f352ce17",
          "message": "ci: enable production setting",
          "timestamp": "2025-10-13T20:23:31Z",
          "url": "https://github.com/hyoklee/hpf/commit/449b9ef78e95b2a661bcd65ac132e3d8f352ce17"
        },
        "date": 1760509650493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.61086,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.61086,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.621869,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.6608,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.6608,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.03177,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.97623,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.97623,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.05856,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.28461,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.28461,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.55803,
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
          "id": "d1fab6e6c0af4f4487e382dd10a2a4acde403d5d",
          "message": "fix: create Windows-specific Catch2 parser to handle minutes unit\n\nCreate parse_catch2_results_win.py to fix malformed benchmark output on Windows:\n- Add support for 'm' (minutes) time unit in estimated and mean values\n- Convert minutes to seconds properly (multiply by 60)\n- Add UTF-8 encoding for file operations\n- Fix issue where test names like \"vds 100\" were replaced with \"6.05704 s\"\n\nUpdate daily_win.yml to use parse_catch2_results_win.py instead of parse_catch2_results.py\n\nThe original script only recognized s/ms/us/ns units, causing it to skip lines\nwith minutes and incorrectly parse the mean line as the benchmark name line.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T10:02:36-05:00",
          "tree_id": "34ddbe319c86a88d001a743c1c1e73d54800f097",
          "url": "https://github.com/hyoklee/hpf/commit/d1fab6e6c0af4f4487e382dd10a2a4acde403d5d"
        },
        "date": 1760541275314,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.614096,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.614096,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.665178,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.83547,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.83547,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.29134,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.983315,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.983315,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.11234,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.54862,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.54862,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.70415,
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
        "date": 1760596041588,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.6091169999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6091169999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.6309969999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.58996,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.58996,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.25519,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.999857,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.999857,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.0488,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.26297,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.26297,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.58938,
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
        "date": 1760682353762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.618183,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.618183,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.646098,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.48843,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.48843,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4.66895,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.996836,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.996836,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.00483,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.12656,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.12656,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.55315,
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
        "date": 1761028053776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.443014,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.443014,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.464277,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "9.38802 s",
            "value": 0.0170236,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 0.0170236,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.724956,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.724956,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.75094,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.59561,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.59561,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.67738,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "8.32348 s",
            "value": 0.0321914,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.0321914,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              }
            ]
          }
        ]
      }
    ]
  }
};
