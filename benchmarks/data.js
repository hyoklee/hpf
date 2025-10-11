window.BENCHMARK_DATA = {
  "lastUpdate": 1760164119058,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "HDF5 Performance Benchmarks": [
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
          "id": "3e31f323ed98c11da5235981e200d5636627619e",
          "message": "feat: display dates instead of commits on benchmark charts\n\nUpdate benchmark template to show dates on x-axis instead of commit\nIDs, matching the netcdf-c benchmark page style. Dates are rotated\n45 degrees for better readability.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-10T00:13:51Z",
          "url": "https://github.com/hyoklee/hpf/commit/3e31f323ed98c11da5235981e200d5636627619e"
        },
        "date": 1760164116932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cmpd_subset 100",
            "value": 4.8711,
            "unit": "sec"
          },
          {
            "name": "efc_no 100",
            "value": 0.6265270000000001,
            "unit": "sec"
          },
          {
            "name": "many_dsets 100",
            "value": 1.01695,
            "unit": "sec"
          },
          {
            "name": "vds 100",
            "value": 4.27441,
            "unit": "sec"
          }
        ]
      }
    ]
  }
}