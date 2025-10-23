window.BENCHMARK_DATA = {
  "lastUpdate": 1761248648747,
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
          "message": "feat: add Mac benchmarking workflows\n\nAdd daily_mac.yml and process-benchmark-data-mac.yml to run HDF5\nperformance benchmarks on macOS-26 platform. Uses benchmarks_mac\ndirectory to store Mac-specific benchmark data separately.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T14:34:50-05:00",
          "tree_id": "48b5491e09f8e9f85e40be7f4e7e4121d5aff7a0",
          "url": "https://github.com/hyoklee/hpf/commit/c1fef6cb41ec3e26b07f51fee56154158558c87c"
        },
        "date": 1761248646223,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100_hdf5_develop",
            "value": 0.504857,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "6.13292 s_hdf5_develop",
            "value": 0.304679,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 0.8326180000000001,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 1.98369,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 0.5734589999999999,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "6.1856 s_hdf5_1146",
            "value": 0.243581,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 0.713733,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 4.65107,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      }
    ]
  }
}