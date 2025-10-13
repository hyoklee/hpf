window.BENCHMARK_DATA = {
  "lastUpdate": 1760319596614,
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
          "id": "f5dd7d6ba17a9bbd637d5b8fe14a8fb9e8fc1543",
          "message": "ci: test plot generation",
          "timestamp": "2025-10-12T13:57:58-05:00",
          "tree_id": "c6dd3598237919661fe6132d8f6f7c94f70289f9",
          "url": "https://github.com/hyoklee/hpf/commit/f5dd7d6ba17a9bbd637d5b8fe14a8fb9e8fc1543"
        },
        "date": 1760295843092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cmpd_subset 100",
            "value": 4.96194,
            "unit": "sec"
          },
          {
            "name": "efc_no 100",
            "value": 0.63221,
            "unit": "sec"
          },
          {
            "name": "many_dsets 100",
            "value": 1.01621,
            "unit": "sec"
          },
          {
            "name": "vds 100",
            "value": 4.57152,
            "unit": "sec"
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
          "id": "56e1499de67ceff8fb3dc99ccb1e7f9c005b2b3e",
          "message": "ci: use gh workspace",
          "timestamp": "2025-10-12T17:02:14-05:00",
          "tree_id": "c9cc53aa0e829a3c85e82353d0a5016ca3ece18c",
          "url": "https://github.com/hyoklee/hpf/commit/56e1499de67ceff8fb3dc99ccb1e7f9c005b2b3e"
        },
        "date": 1760306936132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cmpd_subset 100",
            "value": 4.60759,
            "unit": "sec"
          },
          {
            "name": "efc_no 100",
            "value": 0.623058,
            "unit": "sec"
          },
          {
            "name": "many_dsets 100",
            "value": 1.00075,
            "unit": "sec"
          },
          {
            "name": "vds 100",
            "value": 4.3141,
            "unit": "sec"
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
          "id": "4f14fa92e7d5f4821937b3950992cc8b0e3775a9",
          "message": "fix: update combine_benchmark_results.py to use version suffix format\n\nRefactor script to match netcdf-c implementation approach:\n- Append version suffixes (_hdf5_develop, _hdf5_1146) to benchmark names\n- Use flat structure instead of grouped series format\n- Add value validation for benchmark data\n- Include type hints and better error handling\n- Display example benchmarks and statistics in output\n\nThis aligns with the netcdf-c approach for better compatibility with\ngithub-action-benchmark and improved plot generation.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-12T20:29:58-05:00",
          "tree_id": "b47a4d709f776807a4c0231e1c90d926f653bf00",
          "url": "https://github.com/hyoklee/hpf/commit/4f14fa92e7d5f4821937b3950992cc8b0e3775a9"
        },
        "date": 1760319594885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100 (develop)_hdf5_develop",
            "value": 0.629623,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100 (develop)_hdf5_develop",
            "value": 5.31973,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100 (develop)_hdf5_develop",
            "value": 1.1947,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100 (develop)_hdf5_develop",
            "value": 1.8376,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100 (1_14)_hdf5_1146",
            "value": 0.635342,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100 (1_14)_hdf5_1146",
            "value": 4.81098,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100 (1_14)_hdf5_1146",
            "value": 1.05247,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100 (1_14)_hdf5_1146",
            "value": 4.36616,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      }
    ]
  }
}