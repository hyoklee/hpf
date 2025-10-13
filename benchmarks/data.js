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
            "extra": "HDF5 develop"
          },
          {
            "name": "cmpd_subset 100_hdf5_develop",
            "value": 5.20008,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "many_dsets 100_hdf5_develop",
            "value": 1.12535,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "vds 100_hdf5_develop",
            "value": 1.76191,
            "unit": "sec",
            "extra": "HDF5 develop"
          },
          {
            "name": "efc_no 100_hdf5_1146",
            "value": 0.611115,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "cmpd_subset 100_hdf5_1146",
            "value": 4.84132,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "many_dsets 100_hdf5_1146",
            "value": 0.982038,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "vds 100_hdf5_1146",
            "value": 4.34655,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      }
    ]
  }
}
