window.BENCHMARK_DATA = {
  "lastUpdate": 1786535808095,
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
      }
    ]
  }
}