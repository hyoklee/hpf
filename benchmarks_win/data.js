window.BENCHMARK_DATA = {
  "lastUpdate": 1760538994924,
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
          "id": "c4c936b4160828fb2a7513f3c88666b8173489f9",
          "message": "fix: handle Unicode encoding on Windows for benchmark script\n\nFix UnicodeEncodeError in combine_benchmark_results.py on Windows:\n- Add UTF-8 stdout wrapper for Windows platform\n- Prevents cp1252 codec error when printing checkmark character\n- Resolves daily_win.yml GitHub Action failure\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-15T09:22:16-05:00",
          "tree_id": "1c939c9d0d5bf2be129e45d98dc4c10a53ede0ad",
          "url": "https://github.com/hyoklee/hpf/commit/c4c936b4160828fb2a7513f3c88666b8173489f9"
        },
        "date": 1760538985905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 1.27719,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "7.8066 s_hdf5_develop",
            "value": 0.044881500000000005,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.98104,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 2.44145,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 1.10903,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 5.77303,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 1.75942,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "6.05704 s_hdf5_1146",
            "value": 0.246046,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      }
    ]
  }
}