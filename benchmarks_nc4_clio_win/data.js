window.BENCHMARK_DATA = {
  "lastUpdate": 1788533981177,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "NetCDF-4 CLIO Performance Benchmarks (Windows)": [
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
          "id": "fe3274f50d4a621371b0cdee87cb3bf8948062f6",
          "message": "ci: build the Windows DLL search path from POSIX paths\n\nEverything builds and the ABI gate passes, but both variants died at run time:\n\n    clio_run.exe: error while loading shared libraries: libzmq-mt-4_3_5.dll:\n    cannot open shared object file\n\nand tst_chunks3.exe produced no output at all, which on Windows is what a\nfailed DLL load looks like.\n\nThe DLLs were all present and their directories were all \"on PATH\" -- as mixed\nD:/... paths. PATH is colon-separated, so bash split \"D:/a/hpf/...\" into the\nentries \"D\" and \"/a/hpf/...\", and every lookup through it failed. Demonstrated\nlocally rather than guessed.\n\nAdd posix_path() as the inverse of native_path() and compose PATH from it:\nCMake arguments keep the mixed form, colon-separated lists get the POSIX form.\nThe path is echoed now, and a failed variant reports its exit status, so the\nnext occurrence of this class is one line to diagnose.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-05T17:37:08Z",
          "url": "https://github.com/hyoklee/hpf/commit/fe3274f50d4a621371b0cdee87cb3bf8948062f6"
        },
        "date": 1785952706259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          }
        ]
      },
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
          "id": "fe3274f50d4a621371b0cdee87cb3bf8948062f6",
          "message": "ci: build the Windows DLL search path from POSIX paths\n\nEverything builds and the ABI gate passes, but both variants died at run time:\n\n    clio_run.exe: error while loading shared libraries: libzmq-mt-4_3_5.dll:\n    cannot open shared object file\n\nand tst_chunks3.exe produced no output at all, which on Windows is what a\nfailed DLL load looks like.\n\nThe DLLs were all present and their directories were all \"on PATH\" -- as mixed\nD:/... paths. PATH is colon-separated, so bash split \"D:/a/hpf/...\" into the\nentries \"D\" and \"/a/hpf/...\", and every lookup through it failed. Demonstrated\nlocally rather than guessed.\n\nAdd posix_path() as the inverse of native_path() and compose PATH from it:\nCMake arguments keep the mixed form, colon-separated lists get the POSIX form.\nThe path is echoed now, and a failed variant reports its exit status, so the\nnext occurrence of this class is one line to diagnose.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-05T17:37:08Z",
          "url": "https://github.com/hyoklee/hpf/commit/fe3274f50d4a621371b0cdee87cb3bf8948062f6"
        },
        "date": 1786021636237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          }
        ]
      },
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
          "id": "7d3088b7d71528073b68516ba6179350f91d4794",
          "message": "ci: drop the macOS VFD probe now that it has answered\n\nBoth rounds are recorded in iowarp/clio-core#937 and the fix is proposed in\niowarp/clio-core#938: the VFD builds and runs on macOS once\nadd_subdirectory(vfd) moves off the ELF gate. Keeping a workflow that patches\nsomeone else's CMake in-job would only rot.\n\nIf clio-core takes the change, benchmarks_nc4_clio_mac/ picks up a clio_vfd\nseries on its own -- nc4_clio_bench.sh already attempts the target every run\nand drops it with a warning when it is absent.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-07T03:26:00Z",
          "url": "https://github.com/hyoklee/hpf/commit/7d3088b7d71528073b68516ba6179350f91d4794"
        },
        "date": 1786103762413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          }
        ]
      },
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
          "id": "3f0ff537926925a7812441909af77b5f06630ddc",
          "message": "ci: run tst_chunks3 through the ported VFD on Windows\n\nThe build question is answered on both platforms, so the Windows job becomes\nthe end-to-end one: HDF5 develop and netCDF-C main from source, a live\nclio_run, and tst_chunks3 driven through HDF5_DRIVER=clio_vfd against the\nclio-core branch carrying the port. Results printed, not published -- a\npatched clio-core does not belong in the dashboard history.\n\n--allow-adapter-build-failure is deliberately not passed: the VFD is what is\nbeing measured, so a build failure should stop the job rather than silently\ndrop the variant.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-08T01:24:02Z",
          "url": "https://github.com/hyoklee/hpf/commit/3f0ff537926925a7812441909af77b5f06630ddc"
        },
        "date": 1786188928283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 4d25fc77"
          }
        ]
      },
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
          "id": "3f0ff537926925a7812441909af77b5f06630ddc",
          "message": "ci: run tst_chunks3 through the ported VFD on Windows\n\nThe build question is answered on both platforms, so the Windows job becomes\nthe end-to-end one: HDF5 develop and netCDF-C main from source, a live\nclio_run, and tst_chunks3 driven through HDF5_DRIVER=clio_vfd against the\nclio-core branch carrying the port. Results printed, not published -- a\npatched clio-core does not belong in the dashboard history.\n\n--allow-adapter-build-failure is deliberately not passed: the VFD is what is\nbeing measured, so a build failure should stop the job rather than silently\ndrop the variant.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-08T01:24:02Z",
          "url": "https://github.com/hyoklee/hpf/commit/3f0ff537926925a7812441909af77b5f06630ddc"
        },
        "date": 1786275371808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          }
        ]
      },
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
          "id": "3f0ff537926925a7812441909af77b5f06630ddc",
          "message": "ci: run tst_chunks3 through the ported VFD on Windows\n\nThe build question is answered on both platforms, so the Windows job becomes\nthe end-to-end one: HDF5 develop and netCDF-C main from source, a live\nclio_run, and tst_chunks3 driven through HDF5_DRIVER=clio_vfd against the\nclio-core branch carrying the port. Results printed, not published -- a\npatched clio-core does not belong in the dashboard history.\n\n--allow-adapter-build-failure is deliberately not passed: the VFD is what is\nbeing measured, so a build failure should stop the job rather than silently\ndrop the variant.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-08T01:24:02Z",
          "url": "https://github.com/hyoklee/hpf/commit/3f0ff537926925a7812441909af77b5f06630ddc"
        },
        "date": 1786535806264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          }
        ]
      },
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
          "id": "807c39fd152c955c827c118f603f144505dd65bb",
          "message": "ci: say why a variant is missing instead of one \"no result\" for everything\n\n\"Why doesn't mac & win CI report clio VFD results?\" could not be answered\nfrom the job summaries, because all three rendered their table from \"is the\nresult file non-empty?\". An adapter that does not exist on the platform, one\nthat fails to compile, and one that crashed at runtime all printed the same\nwarning, so a platform gap was indistinguishable from a regression.\n\nThe driver now records each variant's outcome and the reason as it goes, in\nbenchmark-results/variant_status.tsv (measured / measured_no_exit /\nnot_built / no_result / not_requested), and the new variant_summary.sh\nrenders it for all three workflows -- one renderer instead of three copies\nof a YAML if-block, since what happened to a variant is something the\ndriver knows and a workflow step can only guess at. Rows are appended and\nlast-wins; a run stage keeps the preceding build stage's not_built rows and\ndrops the rest, so a repeated --stages run cannot report a variant it never\ntouched.\n\nThe answers the old table was hiding, now written down in\nNC4_CLIO_BENCHMARK.md:\n\n  macOS   -- the VFD has been building since clio-core df614075 (PR #938,\n             2026-08-06) moved add_subdirectory(vfd) off the ELF gate to\n             `if(UNIX AND CLIO_CTE_ENABLE_VFD)`. What kept the series off\n             the dashboard afterwards was the run failing with the stale\n             HDF5_DRIVER_CONFIG string, fixed in 1b300ed. Also records that\n             the macOS VOL now fails to compile upstream (st_mtim is not a\n             Darwin struct stat member), which is why that series is absent.\n  Windows -- not UNIX, so the clio_vfd target does not exist and MSBuild\n             reports MSB1009. The port is merged (PR #950) but onto the\n             fs-descriptor-windows branch, which is not an ancestor of dev\n             or main, so a dev build cannot have it and no flag here\n             changes that. The series returns by itself once it lands.\n\nThe stale \"the VFD cannot be built off Linux / ELF gate\" explanation is\ncorrected in the script comment and the docs.\n\nVerified on Linux: full three-variant run writes measured / measured /\nmeasured_no_exit; a --stages run with --variants baseline preserves an\ninjected not_built row, marks the unrequested variant not_requested, and\ndoes not carry over the previous run's outcomes; the renderer produces the\nright cell for every status and still falls back to file presence when no\nstatus file exists.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-13T02:42:12Z",
          "url": "https://github.com/hyoklee/hpf/commit/807c39fd152c955c827c118f603f144505dd65bb"
        },
        "date": 1786590053827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          }
        ]
      },
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
          "id": "c54beabe9347e73eef9b40986ee00a280a44e67b",
          "message": "ci(win): poll the workload instead of waiting on it, to end the 6h hang\n\nNeither prior attempt fixed the Windows benchmark's daily 6-hour cancel:\n- 589aea4 (taskkill //T tree kill) -- run 32333759358 still cancelled at 360m.\n  The clio worker is detached, not a tree child, so //T never reaches it.\n- a8e95af (file capture, no pipe)  -- run 32362824565 still cancelled at 360m,\n  at the identical line. Removing the pipe removed one blocker but not the real\n  one: after the workload is killed the runner never reaps it in a way\n  `timeout`/bash `wait` observe, so any wait on it blocks to the job timeout.\n\nReplace, on Windows only, the POSIX `exit_hang_watchdog &` +\n`run_with_timeout ... | sed | tee` pair with a self-contained poll loop:\nlaunch tst_chunks3 to a file, poll tasklist + the result file for completion\n(then EXIT_GRACE) or for --run-timeout, and once it decides to stop the workload\nbreak UNCONDITIONALLY -- never wait on it, kill or no kill. A detached orphan\nleft writing to a file is harmless, and the loop cannot run past --run-timeout.\n\nVerified off CI, including the pathological case where the kill does nothing:\nthe loop still returns in ~grace seconds with all 18 timings kept (recorded\nmeasured_no_exit). Linux/macOS keep the pipe path unchanged.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-08-21T01:12:20Z",
          "url": "https://github.com/hyoklee/hpf/commit/c54beabe9347e73eef9b40986ee00a280a44e67b"
        },
        "date": 1787275866851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core bfdc5938"
          }
        ]
      },
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
          "id": "c54beabe9347e73eef9b40986ee00a280a44e67b",
          "message": "ci(win): poll the workload instead of waiting on it, to end the 6h hang\n\nNeither prior attempt fixed the Windows benchmark's daily 6-hour cancel:\n- 589aea4 (taskkill //T tree kill) -- run 32333759358 still cancelled at 360m.\n  The clio worker is detached, not a tree child, so //T never reaches it.\n- a8e95af (file capture, no pipe)  -- run 32362824565 still cancelled at 360m,\n  at the identical line. Removing the pipe removed one blocker but not the real\n  one: after the workload is killed the runner never reaps it in a way\n  `timeout`/bash `wait` observe, so any wait on it blocks to the job timeout.\n\nReplace, on Windows only, the POSIX `exit_hang_watchdog &` +\n`run_with_timeout ... | sed | tee` pair with a self-contained poll loop:\nlaunch tst_chunks3 to a file, poll tasklist + the result file for completion\n(then EXIT_GRACE) or for --run-timeout, and once it decides to stop the workload\nbreak UNCONDITIONALLY -- never wait on it, kill or no kill. A detached orphan\nleft writing to a file is harmless, and the loop cannot run past --run-timeout.\n\nVerified off CI, including the pathological case where the kill does nothing:\nthe loop still returns in ~grace seconds with all 18 timings kept (recorded\nmeasured_no_exit). Linux/macOS keep the pipe path unchanged.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-08-21T01:12:20Z",
          "url": "https://github.com/hyoklee/hpf/commit/c54beabe9347e73eef9b40986ee00a280a44e67b"
        },
        "date": 1787311992958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          }
        ]
      },
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
          "id": "c54beabe9347e73eef9b40986ee00a280a44e67b",
          "message": "ci(win): poll the workload instead of waiting on it, to end the 6h hang\n\nNeither prior attempt fixed the Windows benchmark's daily 6-hour cancel:\n- 589aea4 (taskkill //T tree kill) -- run 32333759358 still cancelled at 360m.\n  The clio worker is detached, not a tree child, so //T never reaches it.\n- a8e95af (file capture, no pipe)  -- run 32362824565 still cancelled at 360m,\n  at the identical line. Removing the pipe removed one blocker but not the real\n  one: after the workload is killed the runner never reaps it in a way\n  `timeout`/bash `wait` observe, so any wait on it blocks to the job timeout.\n\nReplace, on Windows only, the POSIX `exit_hang_watchdog &` +\n`run_with_timeout ... | sed | tee` pair with a self-contained poll loop:\nlaunch tst_chunks3 to a file, poll tasklist + the result file for completion\n(then EXIT_GRACE) or for --run-timeout, and once it decides to stop the workload\nbreak UNCONDITIONALLY -- never wait on it, kill or no kill. A detached orphan\nleft writing to a file is harmless, and the loop cannot run past --run-timeout.\n\nVerified off CI, including the pathological case where the kill does nothing:\nthe loop still returns in ~grace seconds with all 18 timings kept (recorded\nmeasured_no_exit). Linux/macOS keep the pipe path unchanged.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-08-21T01:12:20Z",
          "url": "https://github.com/hyoklee/hpf/commit/c54beabe9347e73eef9b40986ee00a280a44e67b"
        },
        "date": 1787398086929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          }
        ]
      },
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
          "id": "c54beabe9347e73eef9b40986ee00a280a44e67b",
          "message": "ci(win): poll the workload instead of waiting on it, to end the 6h hang\n\nNeither prior attempt fixed the Windows benchmark's daily 6-hour cancel:\n- 589aea4 (taskkill //T tree kill) -- run 32333759358 still cancelled at 360m.\n  The clio worker is detached, not a tree child, so //T never reaches it.\n- a8e95af (file capture, no pipe)  -- run 32362824565 still cancelled at 360m,\n  at the identical line. Removing the pipe removed one blocker but not the real\n  one: after the workload is killed the runner never reaps it in a way\n  `timeout`/bash `wait` observe, so any wait on it blocks to the job timeout.\n\nReplace, on Windows only, the POSIX `exit_hang_watchdog &` +\n`run_with_timeout ... | sed | tee` pair with a self-contained poll loop:\nlaunch tst_chunks3 to a file, poll tasklist + the result file for completion\n(then EXIT_GRACE) or for --run-timeout, and once it decides to stop the workload\nbreak UNCONDITIONALLY -- never wait on it, kill or no kill. A detached orphan\nleft writing to a file is harmless, and the loop cannot run past --run-timeout.\n\nVerified off CI, including the pathological case where the kill does nothing:\nthe loop still returns in ~grace seconds with all 18 timings kept (recorded\nmeasured_no_exit). Linux/macOS keep the pipe path unchanged.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-08-21T01:12:20Z",
          "url": "https://github.com/hyoklee/hpf/commit/c54beabe9347e73eef9b40986ee00a280a44e67b"
        },
        "date": 1787744264794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          }
        ]
      },
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
          "id": "26ab9612811565602638d6ea737a82515bbd0455",
          "message": "ci(win): measure the CLIO VFD now that clio-core dev builds it\n\nclio-core ddc93622 (PR #1034, 2026-08-26) dropped the `UNIX AND` half of\nthe VFD's CMake gate, so `if(CLIO_CTE_ENABLE_VFD)` is the whole condition\nand the adapter compiles on Windows: adapter/vfd picks up\nH5FDclio_compat_win.cc for the Win32 file I/O and defines\nH5_BUILT_AS_DYNAMIC_LIB so H5P_CLS_FILE_ACCESS_ID_g resolves as a\ndllimport (without it MSVC links everything but that one global).\n\nThe Windows benchmark already passed -DCLIO_CTE_ENABLE_VFD=ON and the run\nstage was already platform-aware, so what changes is the tolerance:\n--allow-adapter-build-failure existed only for this platform gap, and it\nis no longer passed. A Windows VFD that does not build now fails the job\nas it does on Linux, instead of dropping itself out of the published\nseries. macOS keeps the flag, for a VOL that clio-core's own CI does not\ncover there.\n\nDrop the Windows special case in build_adapter() that annotated a\nclio_vfd failure with \"the port is on the fs-descriptor-windows branch\" —\nthat is now false and would misdirect anyone reading a real failure.\n\nDelete probe-clio-vfd-windows.yml. It said \"delete once it has answered\",\nand it has: it proved the port worked end to end before it landed.\n\nDocs: NC4_CLIO_BENCHMARK.md described the UNIX gate as current, so it is\nrewritten around the two-step history and the current expectation that\nall three platforms measure the VFD. NC4_CLIO_FINDINGS.md keeps the\nPR #950 / MSB1009 history — that file records what broke on the way —\nwith the entry updated to say the port landed.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01H9EpQCTVMkEqcaRoTagJDF",
          "timestamp": "2026-08-27T18:33:05Z",
          "url": "https://github.com/hyoklee/hpf/commit/26ab9612811565602638d6ea737a82515bbd0455"
        },
        "date": 1787856934529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.07,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.07,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          }
        ]
      },
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
          "id": "26ab9612811565602638d6ea737a82515bbd0455",
          "message": "ci(win): measure the CLIO VFD now that clio-core dev builds it\n\nclio-core ddc93622 (PR #1034, 2026-08-26) dropped the `UNIX AND` half of\nthe VFD's CMake gate, so `if(CLIO_CTE_ENABLE_VFD)` is the whole condition\nand the adapter compiles on Windows: adapter/vfd picks up\nH5FDclio_compat_win.cc for the Win32 file I/O and defines\nH5_BUILT_AS_DYNAMIC_LIB so H5P_CLS_FILE_ACCESS_ID_g resolves as a\ndllimport (without it MSVC links everything but that one global).\n\nThe Windows benchmark already passed -DCLIO_CTE_ENABLE_VFD=ON and the run\nstage was already platform-aware, so what changes is the tolerance:\n--allow-adapter-build-failure existed only for this platform gap, and it\nis no longer passed. A Windows VFD that does not build now fails the job\nas it does on Linux, instead of dropping itself out of the published\nseries. macOS keeps the flag, for a VOL that clio-core's own CI does not\ncover there.\n\nDrop the Windows special case in build_adapter() that annotated a\nclio_vfd failure with \"the port is on the fs-descriptor-windows branch\" —\nthat is now false and would misdirect anyone reading a real failure.\n\nDelete probe-clio-vfd-windows.yml. It said \"delete once it has answered\",\nand it has: it proved the port worked end to end before it landed.\n\nDocs: NC4_CLIO_BENCHMARK.md described the UNIX gate as current, so it is\nrewritten around the two-step history and the current expectation that\nall three platforms measure the VFD. NC4_CLIO_FINDINGS.md keeps the\nPR #950 / MSB1009 history — that file records what broke on the way —\nwith the entry updated to say the port landed.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01H9EpQCTVMkEqcaRoTagJDF",
          "timestamp": "2026-08-27T18:33:05Z",
          "url": "https://github.com/hyoklee/hpf/commit/26ab9612811565602638d6ea737a82515bbd0455"
        },
        "date": 1787864970212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.12,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core 6344d7dd"
          }
        ]
      },
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
          "id": "26ab9612811565602638d6ea737a82515bbd0455",
          "message": "ci(win): measure the CLIO VFD now that clio-core dev builds it\n\nclio-core ddc93622 (PR #1034, 2026-08-26) dropped the `UNIX AND` half of\nthe VFD's CMake gate, so `if(CLIO_CTE_ENABLE_VFD)` is the whole condition\nand the adapter compiles on Windows: adapter/vfd picks up\nH5FDclio_compat_win.cc for the Win32 file I/O and defines\nH5_BUILT_AS_DYNAMIC_LIB so H5P_CLS_FILE_ACCESS_ID_g resolves as a\ndllimport (without it MSVC links everything but that one global).\n\nThe Windows benchmark already passed -DCLIO_CTE_ENABLE_VFD=ON and the run\nstage was already platform-aware, so what changes is the tolerance:\n--allow-adapter-build-failure existed only for this platform gap, and it\nis no longer passed. A Windows VFD that does not build now fails the job\nas it does on Linux, instead of dropping itself out of the published\nseries. macOS keeps the flag, for a VOL that clio-core's own CI does not\ncover there.\n\nDrop the Windows special case in build_adapter() that annotated a\nclio_vfd failure with \"the port is on the fs-descriptor-windows branch\" —\nthat is now false and would misdirect anyone reading a real failure.\n\nDelete probe-clio-vfd-windows.yml. It said \"delete once it has answered\",\nand it has: it proved the port worked end to end before it landed.\n\nDocs: NC4_CLIO_BENCHMARK.md described the UNIX gate as current, so it is\nrewritten around the two-step history and the current expectation that\nall three platforms measure the VFD. NC4_CLIO_FINDINGS.md keeps the\nPR #950 / MSB1009 history — that file records what broke on the way —\nwith the entry updated to say the port landed.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01H9EpQCTVMkEqcaRoTagJDF",
          "timestamp": "2026-08-27T18:33:05Z",
          "url": "https://github.com/hyoklee/hpf/commit/26ab9612811565602638d6ea737a82515bbd0455"
        },
        "date": 1787952891853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          }
        ]
      },
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
          "id": "26ab9612811565602638d6ea737a82515bbd0455",
          "message": "ci(win): measure the CLIO VFD now that clio-core dev builds it\n\nclio-core ddc93622 (PR #1034, 2026-08-26) dropped the `UNIX AND` half of\nthe VFD's CMake gate, so `if(CLIO_CTE_ENABLE_VFD)` is the whole condition\nand the adapter compiles on Windows: adapter/vfd picks up\nH5FDclio_compat_win.cc for the Win32 file I/O and defines\nH5_BUILT_AS_DYNAMIC_LIB so H5P_CLS_FILE_ACCESS_ID_g resolves as a\ndllimport (without it MSVC links everything but that one global).\n\nThe Windows benchmark already passed -DCLIO_CTE_ENABLE_VFD=ON and the run\nstage was already platform-aware, so what changes is the tolerance:\n--allow-adapter-build-failure existed only for this platform gap, and it\nis no longer passed. A Windows VFD that does not build now fails the job\nas it does on Linux, instead of dropping itself out of the published\nseries. macOS keeps the flag, for a VOL that clio-core's own CI does not\ncover there.\n\nDrop the Windows special case in build_adapter() that annotated a\nclio_vfd failure with \"the port is on the fs-descriptor-windows branch\" —\nthat is now false and would misdirect anyone reading a real failure.\n\nDelete probe-clio-vfd-windows.yml. It said \"delete once it has answered\",\nand it has: it proved the port worked end to end before it landed.\n\nDocs: NC4_CLIO_BENCHMARK.md described the UNIX gate as current, so it is\nrewritten around the two-step history and the current expectation that\nall three platforms measure the VFD. NC4_CLIO_FINDINGS.md keeps the\nPR #950 / MSB1009 history — that file records what broke on the way —\nwith the entry updated to say the port landed.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01H9EpQCTVMkEqcaRoTagJDF",
          "timestamp": "2026-08-27T18:33:05Z",
          "url": "https://github.com/hyoklee/hpf/commit/26ab9612811565602638d6ea737a82515bbd0455"
        },
        "date": 1788017973526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          }
        ]
      },
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
          "id": "1720bc0e8341114ba6e566e8ead672b8a8f53a58",
          "message": "ci(win): track the hyoklee/core fork's dev for the CLIO source\n\nThe CLIO VFD's Windows fixes land on the hyoklee/core fork's dev first (e.g. the\nO_ACCMODE define the CTE cache tier needs to compile under MSVC, merged there as\nPR #1073). Point the Windows benchmark's default clio source at that fork's dev\nso the VFD builds and is measured; a workflow_dispatch can still override\nclio_repo/clio_ref back to iowarp/clio-core or any other fork/branch.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-09-02T18:40:39Z",
          "url": "https://github.com/hyoklee/hpf/commit/1720bc0e8341114ba6e566e8ead672b8a8f53a58"
        },
        "date": 1788376776832,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core e23d46c7"
          }
        ]
      },
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
          "id": "1720bc0e8341114ba6e566e8ead672b8a8f53a58",
          "message": "ci(win): track the hyoklee/core fork's dev for the CLIO source\n\nThe CLIO VFD's Windows fixes land on the hyoklee/core fork's dev first (e.g. the\nO_ACCMODE define the CTE cache tier needs to compile under MSVC, merged there as\nPR #1073). Point the Windows benchmark's default clio source at that fork's dev\nso the VFD builds and is measured; a workflow_dispatch can still override\nclio_repo/clio_ref back to iowarp/clio-core or any other fork/branch.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-09-02T18:40:39Z",
          "url": "https://github.com/hyoklee/hpf/commit/1720bc0e8341114ba6e566e8ead672b8a8f53a58"
        },
        "date": 1788447996945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 44426bfc / netcdf-c fdae24a6 / clio-core 4b85a2bf"
          }
        ]
      },
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
          "id": "1720bc0e8341114ba6e566e8ead672b8a8f53a58",
          "message": "ci(win): track the hyoklee/core fork's dev for the CLIO source\n\nThe CLIO VFD's Windows fixes land on the hyoklee/core fork's dev first (e.g. the\nO_ACCMODE define the CTE cache tier needs to compile under MSVC, merged there as\nPR #1073). Point the Windows benchmark's default clio source at that fork's dev\nso the VFD builds and is measured; a workflow_dispatch can still override\nclio_repo/clio_ref back to iowarp/clio-core or any other fork/branch.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-09-02T18:40:39Z",
          "url": "https://github.com/hyoklee/hpf/commit/1720bc0e8341114ba6e566e8ead672b8a8f53a58"
        },
        "date": 1788533971407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 9515219a / netcdf-c 8f708dd8 / clio-core b623b563"
          }
        ]
      }
    ]
  }
}