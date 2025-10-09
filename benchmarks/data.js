window.BENCHMARK_DATA = {
  "lastUpdate": 1760038647925,
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
          "id": "c7f0af211b68ad73af7a224faf89f76fcaf2850c",
          "message": "ci(daily): disable compression",
          "timestamp": "2025-10-09T14:25:56-05:00",
          "tree_id": "9a2958f05c85473309fe9a8fee7fa63565247ffc",
          "url": "https://github.com/hyoklee/hpf/commit/c7f0af211b68ad73af7a224faf89f76fcaf2850c"
        },
        "date": 1760038646301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cmpd_subset 100",
            "value": 4.8539,
            "unit": "sec"
          },
          {
            "name": "efc_no 100",
            "value": 0.6300330000000001,
            "unit": "sec"
          },
          {
            "name": "many_dsets 100",
            "value": 1.08906,
            "unit": "sec"
          },
          {
            "name": "vds 100",
            "value": 4.48672,
            "unit": "sec"
          }
        ]
      }
    ]
  }
}