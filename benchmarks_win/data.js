window.BENCHMARK_DATA = {
  "lastUpdate": 1760541515284,
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
      }
    ]
  }
}