window.BENCHMARK_DATA = {
  "lastUpdate": 1784880934560,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "HDF5 Performance Benchmarks": [
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
          "id": "ee5a0bc90670cf19b400d234f7ae5667601d6780",
          "message": "fix(lin): occasional invalid entries",
          "timestamp": "2026-07-22T03:58:13Z",
          "url": "https://github.com/hyoklee/hpf/commit/ee5a0bc90670cf19b400d234f7ae5667601d6780"
        },
        "date": 1784880932537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 0.621235,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.621235,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.627658,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "cmpd_subset 100",
            "value": 3.73191,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.73191,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4.15312,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "many_dsets 100",
            "value": 0.9529650000000001,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.9529650000000001,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.26588,
                "unit": "sec",
                "extra": "HDF5 develop"
              }
            ]
          },
          {
            "name": "vds 100",
            "value": 4.27755,
            "unit": "sec",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.27755,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.58761,
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
