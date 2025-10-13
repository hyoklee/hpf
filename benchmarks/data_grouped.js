window.BENCHMARK_DATA = {
  "lastUpdate": 1760383902177,
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
          "id": "4f14fa92e7d5f4821937b3950992cc8b0e3775a9",
          "message": "fix: update combine_benchmark_results.py to use version suffix format\n\nRefactor script to match netcdf-c implementation approach:\n- Append version suffixes (_hdf5_develop, _hdf5_1146) to benchmark names\n- Use flat structure instead of grouped series format\n- Add value validation for benchmark data\n- Include type hints and better error handling\n- Display example benchmarks and statistics in output\n\nThis aligns with the netcdf-c approach for better compatibility with\ngithub-action-benchmark and improved plot generation.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
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
            "series": [
              {
                "name": "HDF5 develop",
                "value": 0.629623,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100 (develop)_hdf5_develop",
            "value": 5.31973,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 5.31973,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100 (develop)_hdf5_develop",
            "value": 1.1947,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 1.1947,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100 (develop)_hdf5_develop",
            "value": 1.8376,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 1.8376,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "efc_no 100 (1_14)_hdf5_1146",
            "value": 0.635342,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14",
                "value": 0.635342,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              }
            ]
          },
          {
            "name": "cmpd_subset 100 (1_14)_hdf5_1146",
            "value": 4.81098,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14",
                "value": 4.81098,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              }
            ]
          },
          {
            "name": "many_dsets 100 (1_14)_hdf5_1146",
            "value": 1.05247,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14",
                "value": 1.05247,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              }
            ]
          },
          {
            "name": "vds 100 (1_14)_hdf5_1146",
            "value": 4.36616,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14",
                "value": 4.36616,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
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
            "name": "efc_no 100_hdf5_develop",
            "value": 0.627601,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 0.627601,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 5.20008,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 5.20008,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.12535,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 1.12535,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 1.76191,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 1.76191,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 0.611115,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14",
                "value": 0.611115,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              }
            ]
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 4.84132,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14",
                "value": 4.84132,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              }
            ]
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 0.982038,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14",
                "value": 0.982038,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              }
            ]
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 4.34655,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14",
                "value": 4.34655,
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
