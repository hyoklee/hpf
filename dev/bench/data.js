window.BENCHMARK_DATA = {
  "lastUpdate": 1759976187183,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "Catch2 Benchmark": [
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
          "id": "d370dc5b9c016a7b7f94200c2579e98f069219c9",
          "message": "fix: suppress pass outputs",
          "timestamp": "2025-10-08T20:56:35-05:00",
          "tree_id": "f7a760c40f07f0fdae4977853bfd76fb8b63c84c",
          "url": "https://github.com/hyoklee/hpf/commit/d370dc5b9c016a7b7f94200c2579e98f069219c9"
        },
        "date": 1759976185330,
        "tool": "catch2",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 635,
            "range": "± 4.40684",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "many_dsets 100",
            "value": 1050.8,
            "range": "± 17.1252",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "vds 100",
            "value": 1709.6899999999998,
            "range": "± 41.5524",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "cmpd_subset 100",
            "value": 5209.349999999999,
            "range": "± 147.671",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}