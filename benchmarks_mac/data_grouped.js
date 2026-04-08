window.BENCHMARK_DATA = {
  "lastUpdate": 1775639949953,
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
        "date": 1762850497193,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.409036,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.409036,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.605723,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.57841,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.57841,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.39132,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.6445080000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6445080000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.13142,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.95308,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.95308,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.90666,
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
        "date": 1762936974467,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.501857,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.501857,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.456128,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.74948,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.74948,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.4483,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.6508740000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6508740000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.00689,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.01785,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.01785,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.94599,
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
        "date": 1763195937213,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.561864,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.561864,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.03834,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.82619,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.82619,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.70998,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.670277,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.670277,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.19356,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.3198,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.3198,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.08261,
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
        "date": 1763455396330,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.563502,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.563502,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.626282,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.85516,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.85516,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.92063,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 1.06038,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.06038,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.50391,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.84331,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.84331,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33984,
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
        "date": 1763714830455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.680754,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.680754,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.608565,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.86723,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.86723,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.47659,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.864778,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.864778,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.32588,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.65708,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.65708,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.37136,
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
        "date": 1763800786596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.582063,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.582063,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.579175,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.90954,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.90954,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.81301,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.930126,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.930126,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.00002,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.35276,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.35276,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.31311,
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
        "date": 1764146471901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.359319,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.359319,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.459198,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.4509,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.4509,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.12299,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5229450000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5229450000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8247559999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.28877,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.28877,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.6688,
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
        "date": 1764665217977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.645289,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.645289,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.17082,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.55589,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.55589,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.31239,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.844615,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.844615,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.38134,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.83333,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.83333,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.35521,
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
        "date": 1764751575242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.525076,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.525076,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7438049999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.60553,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.60553,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.27665,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.6719189999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6719189999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.21161,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.43856,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.43856,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.34665,
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
        "date": 1764837989996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.570581,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.570581,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7758189999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.77214,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.77214,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.83821,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.850657,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.850657,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.64067,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.94488,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.94488,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.27834,
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
        "date": 1764924373136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.5801900000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5801900000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.6566989999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.79028,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.79028,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.3242,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.886962,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.886962,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.33648,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.72394,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.72394,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33329,
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
        "date": 1765010406876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.417904,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.417904,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7718379999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.58824,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.58824,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.34353,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.838603,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.838603,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.10007,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.20093,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.20093,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.81372,
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
        "date": 1765096815367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.5605180000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5605180000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.769466,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 7.10449,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 7.10449,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.97093,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.65976,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65976,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.15811,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.36048,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.36048,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.1672,
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
        "date": 1765270147934,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.6632680000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6632680000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.710982,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.93492,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.93492,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.84824,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.8844890000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.8844890000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2798,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.64475,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.64475,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.62761,
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
        "date": 1765356287081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.50011,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.50011,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.693774,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.80881,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.80881,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.69262,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.6855950000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6855950000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.06959,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.93796,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.93796,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.21254,
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
        "date": 1765615251889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.654759,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.654759,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.704054,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.49941,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.49941,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.31875,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5376029999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5376029999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.03691,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.56419,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.56419,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.7785,
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
        "date": 1765874904307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.562581,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.562581,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.698901,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.6043,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.6043,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.49093,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.918628,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.918628,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.22988,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.75162,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.75162,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.26579,
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
        "date": 1766047533454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.370041,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.370041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.550725,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.85016,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.85016,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.53382,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.463254,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.463254,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8453849999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.28062,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.28062,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.58446,
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
        "date": 1766133965953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.616,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.616,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.692222,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 7.0926,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 7.0926,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.9613,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.817436,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.817436,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.36471,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.65347,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.65347,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.77276,
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
        "date": 1766220040510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.430458,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.430458,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.721423,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.23915,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.23915,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.08389,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.524664,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.524664,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8317519999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.48378,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.48378,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.68656,
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
        "date": 1766479512756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.37532499999999996,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.37532499999999996,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.613504,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.83916,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.83916,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.82771,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.537569,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.537569,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8890399999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.44343,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.44343,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.71576,
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
        "date": 1766652303618,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.516355,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.516355,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.749971,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.45382,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.45382,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.58203,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.747441,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.747441,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8733650000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.16293,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.16293,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.07438,
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
        "date": 1767084338296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.500569,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.500569,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.807881,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.23972,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.23972,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.80124,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.633798,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.633798,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.15917,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.08907,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.08907,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.03556,
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
        "date": 1767170755536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.394041,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.394041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.6545489999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.55258,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.55258,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.78323,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.7087870000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.7087870000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.15721,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.85943,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.85943,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.87942,
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
        "date": 1767257170200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.522423,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.522423,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.843665,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.73114,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.73114,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.85444,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.908644,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.908644,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.15391,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.20992,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.20992,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.02156,
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
        "date": 1767429783466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.6281559999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6281559999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.569219,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 7.08586,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 7.08586,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.01662,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.904456,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.904456,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.38375,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.35589,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.35589,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.27164,
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
        "date": 1767775708400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.579202,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.579202,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7480410000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.78787,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.78787,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.6833,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.972957,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.972957,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.34215,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.5321,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.5321,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.28327,
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
        "date": 1768034533081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.474961,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.474961,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.873813,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.6964,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.6964,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.83852,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.773573,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.773573,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.951195,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.03441,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.03441,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.01058,
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
        "date": 1768294075815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.517491,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.517491,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.6714260000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.90707,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.90707,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.68505,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.720905,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.720905,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.99105,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.53818,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.53818,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.91922,
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
        "date": 1768380479957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.541975,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.541975,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.5510320000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.67463,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.67463,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.30567,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.7163010000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.7163010000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.13082,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.42217,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.42217,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.91632,
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
        "date": 1769071834404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.5354070000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5354070000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.538256,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.50847,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.50847,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.50141,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.731032,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.731032,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.23361,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.48731,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.48731,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.19858,
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
        "date": 1769158112197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.543126,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.543126,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.700561,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.40787,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.40787,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.69529,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.922018,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.922018,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.29621,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.37436,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.37436,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.27534,
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
        "date": 1769244086715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.376728,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.376728,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.491593,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.35179,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.35179,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.21733,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.472592,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.472592,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.756974,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.20262,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.20262,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.56608,
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
        "date": 1769330631946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.610769,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.610769,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.51962,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.33068,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.33068,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.33888,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.7647229999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.7647229999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2713,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.83317,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.83317,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.9326,
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
        "date": 1769503886657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.459187,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.459187,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.781807,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 8.46524,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 8.46524,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 8.95642,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.962864,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.962864,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.25991,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 5.42147,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.42147,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.33345,
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
        "date": 1769590204665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.526727,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.526727,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.9341499999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.57522,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.57522,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.95155,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.639952,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.639952,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.957551,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.86137,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.86137,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.93492,
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
        "date": 1769763510047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.37166899999999997,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.37166899999999997,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.701134,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.14926,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.14926,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.7636,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.6255839999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6255839999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.939958,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.75282,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.75282,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.80273,
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
        "date": 1770109089644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.48207,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.48207,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.718187,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.73905,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.73905,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.27485,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.637396,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.637396,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1015,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.93529,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.93529,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.11848,
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
        "date": 1770195729552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.406824,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.406824,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.722642,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.56846,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.56846,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.75692,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.893903,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.893903,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.01534,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.01784,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.01784,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.93423,
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
        "date": 1770282209042,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.8245560000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.8245560000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.03852,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 8.53469,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 8.53469,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.37729,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.825914,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.825914,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.01665,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.6566,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.6566,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.23369,
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
        "date": 1770368457374,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.40030099999999996,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.40030099999999996,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.5861470000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.64979,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.64979,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.75104,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5357770000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5357770000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.933172,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.08497,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.08497,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.70682,
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
        "date": 1770454032544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.352711,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.352711,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.584544,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.10709,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.10709,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.20194,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.582425,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.582425,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.886051,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.31444,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.31444,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.7307,
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
        "date": 1770800842527,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.65225,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65225,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.585469,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.7589,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.7589,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.32031,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.940727,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.940727,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.50895,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.47964,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.47964,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.39043,
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
        "date": 1770973281829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.365927,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.365927,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.694776,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.63243,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.63243,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.51174,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.686626,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.686626,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.03888,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.58652,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.58652,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.78187,
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
        "date": 1771058849756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.382816,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.382816,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.577042,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.68602,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.68602,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.3509,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.523489,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.523489,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.860789,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.31239,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.31239,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.66263,
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
        "date": 1771319096543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.5463640000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5463640000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.5769,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.7163,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.7163,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.60787,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.805933,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.805933,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.9202380000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.5109,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.5109,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.69904,
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
        "date": 1771491849603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.594372,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.594372,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.748461,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.98269,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.98269,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.84923,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.6834969999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6834969999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.22993,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.2916,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.2916,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.16651,
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
        "date": 1771663553886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.39664,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.39664,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.508771,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.19837,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.19837,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4.97448,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.551294,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.551294,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.770499,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.14211,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.14211,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.49543,
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
        "date": 1771923927281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.48491500000000004,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.48491500000000004,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.547892,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.66469,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.66469,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.89201,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.797957,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.797957,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.913124,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.90699,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.90699,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.20833,
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
        "date": 1772010257973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.38608499999999996,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.38608499999999996,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.475723,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.30067,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.30067,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.06819,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.581172,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.581172,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8403440000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.07304,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.07304,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.61248,
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
        "date": 1772182827465,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.592041,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.592041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.793409,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.58291,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.58291,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.73006,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.656145,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.656145,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.22647,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.92607,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.92607,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.00794,
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
        "date": 1772268287376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.468421,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.468421,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.668813,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.55438,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.55438,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.98894,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.667815,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.667815,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.01546,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.55109,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.55109,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.73091,
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
        "date": 1772442172396,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.500297,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.500297,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.548447,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.12059,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.12059,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.45784,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.860647,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.860647,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.20895,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.5629,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.5629,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.07073,
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
        "date": 1772614685484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.5744360000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5744360000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.719148,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.97639,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.97639,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.09986,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.575394,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.575394,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.14863,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.28785,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.28785,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.01812,
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
        "date": 1772701244651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.50119,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.50119,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.480119,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.00934,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.00934,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.74704,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.667357,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.667357,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.92514,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.95898,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.95898,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.7973,
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
        "date": 1772787354399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.36824599999999996,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.36824599999999996,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.542446,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.44854,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.44854,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.25561,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5829690000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5829690000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.919845,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.06836,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.06836,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.61886,
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
        "date": 1772959539867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.37015800000000004,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.37015800000000004,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.49377,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.30431,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.30431,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4.94083,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.487614,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.487614,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7867649999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.06974,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.06974,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.49493,
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
        "date": 1773046946601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.493694,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.493694,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.709284,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.2577,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.2577,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.93854,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.6556960000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.6556960000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.985666,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.41104,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.41104,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.09601,
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
        "date": 1773219565075,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.3857,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.3857,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.774689,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.29376,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.29376,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.42762,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5351079999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5351079999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.816468,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.06237,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.06237,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.48998,
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
        "date": 1773306075225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.58794,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.58794,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.733804,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.77844,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.77844,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.33274,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5834779999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5834779999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.20647,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.29636,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.29636,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.24552,
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
        "date": 1773478379399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.41240499999999997,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41240499999999997,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.596872,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.25961,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.25961,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.29464,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.596697,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.596697,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.929785,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.50259,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.50259,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.62671,
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
        "date": 1773738410294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.503536,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.503536,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.459864,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.14577,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.14577,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.14517,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.522239,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.522239,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8332970000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.28212,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.28212,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.69558,
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
        "date": 1773824764242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.361045,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.361045,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.5641309999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.72842,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.72842,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.57658,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5186989999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5186989999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.93202,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.32915,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.32915,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.60786,
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
        "date": 1773910828175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.46051299999999995,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.46051299999999995,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.6266520000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.1596,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.1596,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.75819,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.663049,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.663049,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.896062,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.67719,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.67719,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.74029,
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
        "date": 1774082905225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.39161,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.39161,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.58901,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.80394,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.80394,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.4304,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5290220000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5290220000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8470650000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.21743,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.21743,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.63097,
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
        "date": 1774429567845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.49779700000000005,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.49779700000000005,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.593286,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.78952,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.78952,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.02468,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.575394,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.575394,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.820705,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.24446,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.24446,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.55968,
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
        "date": 1774602500246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.376497,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.376497,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.574682,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 5.08115,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.08115,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.8751,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.5495119999999999,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.5495119999999999,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.17307,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.18713,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.18713,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.79798,
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
        "date": 1774688207402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.391231,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.391231,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.5193099999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.4818,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.4818,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.31853,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.519792,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.519792,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.813013,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.17658,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.17658,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.55916,
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
        "date": 1774862993743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.652749,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.652749,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.738983,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.23709,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.23709,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.9463,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.7002390000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.7002390000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.47227,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.1905,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.1905,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.24676,
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
        "date": 1774948621065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.36479199999999995,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.36479199999999995,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.502111,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.57718,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.57718,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.35205,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.81923,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.81923,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7832899999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.29582,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.29582,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.52827,
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
        "date": 1775035395593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.401311,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.401311,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.480049,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.79785,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.79785,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.19463,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.541359,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.541359,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.998161,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.26013,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.26013,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.69985,
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
        "date": 1775293049143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.350801,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.350801,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.481045,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.01969,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.01969,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.03646,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.550898,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.550898,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.7345389999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 2.77419,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.77419,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.38411,
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
        "date": 1775379601956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.367685,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.367685,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.533578,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.51866,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.51866,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.50824,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.623971,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.623971,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.813112,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 2.9571,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.9571,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.51773,
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
        "date": 1775553591764,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.384152,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.384152,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.5284439999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.5831,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.5831,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.55643,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.534646,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.534646,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.8467039999999999,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.04842,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.04842,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.54379,
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
        "date": 1775639948107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.391836,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.391836,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.49638299999999996,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 6.01401,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 6.01401,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.48846,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.69352,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.69352,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.9592,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.9185,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9185,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.90747,
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
