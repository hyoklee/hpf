window.BENCHMARK_DATA = {
  "lastUpdate": 1785938759744,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "NetCDF-4 CLIO Performance Benchmarks": [
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
          "id": "24452223eea8dfbb546e38f28b2e09d8aed8085a",
          "message": "ci: run nc4-clio-benchmark steps under bash, not dash\n\nThe benchmark job runs in the iowarp/deps-cpu container, where the runner\ndoes not default to bash -- it falls back to `sh -e {0}`. dash rejects\n`set -o pipefail`, so the Parse results step died with\n\n    set: Illegal option -o pipefail\n\nand four later steps would have failed the same way. Declare bash as the\ndefault shell for the workflow.\n\nThe same run also dropped the clio_vol variant: clio_runtime_stop() sent\nSIGTERM and waited a fixed 1s, but the clio_vfd runtime reaps ~16GB of shm\nsegments before releasing its :9413 listener, so clio_vol's runtime raced\nthe previous one and lost with \"Could not start TCP server\". Poll for the\nprocess to actually exit, escalating to SIGKILL, and fail fast on a bind\nerror instead of waiting out the full 60s readiness timeout.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-05T13:37:33Z",
          "url": "https://github.com/hyoklee/hpf/commit/24452223eea8dfbb546e38f28b2e09d8aed8085a"
        },
        "date": 1785938759123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.25,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.27,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 13,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 8715591a"
          }
        ]
      }
    ]
  }
}