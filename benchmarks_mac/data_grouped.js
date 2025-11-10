window.BENCHMARK_DATA = {
  "lastUpdate": 1762764251555,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "HDF5 Performance Benchmarks (Mac)": [
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
        "date": 1761381281566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.381078,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.381078,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.588487,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.5376,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.5376,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.48845,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.498393,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.498393,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.6960879999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.35141,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.35141,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.6473,
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
        "date": 1761640916550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.439179,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.439179,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.721094,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.56344,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.56344,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.98193,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.519833,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.519833,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.741579,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.26157,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.26157,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.83688,
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
        "date": 1761813654292,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.458063,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.458063,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7203339999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.84212,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.84212,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.70925,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.6976509999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6976509999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.907876,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.97516,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.97516,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.07899,
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
        "date": 1761900033336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.439149,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.439149,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.515965,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.30219,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.30219,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.88335,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.7141190000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.7141190000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.01448,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.8954,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.8954,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.89689,
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
        "date": 1761986257855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.458818,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.458818,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.5662590000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.88935,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.88935,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.94069,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.745188,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.745188,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3404,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.61437,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.61437,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.18866,
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
        "date": 1762159480171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.54161,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.54161,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.75671,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.59009,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.59009,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.69775,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.855343,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.855343,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.06589,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.48235,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.48235,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.19926,
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
        "date": 1762245797089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.46756,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.46756,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.460314,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.03472,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.03472,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.47482,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.799928,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.799928,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.962172,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.47543,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.47543,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.93627,
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
        "date": 1762332096573,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.38242200000000004,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.38242200000000004,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.630805,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.50865,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.50865,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.68674,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.524533,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.524533,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.846743,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.19741,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.19741,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.63318,
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
        "date": 1762418621889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.568365,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.568365,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.760598,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.57451,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.57451,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.43488,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.853127,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.853127,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.14361,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.49463,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.49463,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.34293,
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
        "date": 1762505112202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.8229460000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.8229460000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.959469,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 8.16568,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 8.16568,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 9.35189,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.831484,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.831484,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.64264,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.21833,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.21833,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8213,
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
        "date": 1762591036659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.346043,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.346043,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.5789529999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.55631,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.55631,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.76613,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.708404,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.708404,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.960557,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.73218,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.73218,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.5982,
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
        "date": 1762677371234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.402969,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.402969,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.78077,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.16824,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.16824,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.56885,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5239020000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5239020000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.964336,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.67076,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.67076,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.75365,
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
        "date": 1762764249655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.538276,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.538276,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.717407,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.20314,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.20314,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.13801,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.721974,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.721974,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26085,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.34772,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.34772,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.05888,
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
