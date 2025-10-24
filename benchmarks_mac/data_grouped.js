window.BENCHMARK_DATA = {
  "lastUpdate": 1761271462071,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "HDF5 Performance Benchmarks (Mac)": [
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
        "date": 1761271459899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.420171,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.420171,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.6868690000000001,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "6.21873 s",
            "value": 0.710493,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 develop",
                "value": 0.710493,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.636297,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.636297,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.874174,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 3.15526,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.15526,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.94533,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 4.38536,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.38536,
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
