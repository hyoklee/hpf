window.BENCHMARK_DATA = {
  "lastUpdate": 1788013290560,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "NetCDF-4 CLIO Performance Benchmarks (macOS)": [
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
          "id": "271c4b071cc76a3564a03f9e07d1c609f9444b91",
          "message": "ci: resolve the soname in the macOS HDF5 ABI gate\n\nThe first macOS run failed the gate on a false positive: it rejected\nlibclio_hdf5_vol.dylib because the conda env's lib directory comes earlier on\nthe rpath and holds a libhdf5. It cannot shadow ours -- dyld resolves\n@rpath/libhdf5.1000.dylib by that exact filename, and conda ships 1.14 as\nlibhdf5.310.dylib.\n\nResolve the soname against the LC_RPATH list in order instead, expanding\n@loader_path, and fail only when the file dyld would actually load is outside\nour HDF5 prefix. A second copy of the *same* soversion earlier on the path is\nstill caught, which is the case that matters.\n\nAlso record why the CLIO VFD has no macOS series: clio-core gates\nadd_subdirectory(vfd) behind CLIO_CORE_ENABLE_ELF, which requires libelf, so\nthe target does not exist on Mach-O. The run drops it and publishes the rest.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-05T15:19:28Z",
          "url": "https://github.com/hyoklee/hpf/commit/271c4b071cc76a3564a03f9e07d1c609f9444b91"
        },
        "date": 1785943831810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.0005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.11,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
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
        "date": 1786015997955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
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
        "date": 1786097550870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
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
        "date": 1786182249264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
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
        "date": 1786268680012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
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
        "date": 1786529419338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
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
        "date": 1786589860433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.43,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.11,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 4.8,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 480,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
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
          "id": "3e7010e46dee519b4a9c54bee87c791b47b04346",
          "message": "ci(mac): give clio-core's conda recipe the macOS half of c_stdlib\n\nEvery macOS benchmark run since 2026-08-14 has died in the conda step,\nthree retries deep, on a package name that has never existed:\n\n  PackagesNotFoundInChannelsError: The following packages are not\n  available from current channels:\n    - c_osx-arm64\n\nclio-core ae532d92 (PR #973) added {{ stdlib(\"c\") }} to the conda recipe\nso the Linux package builds against sysroot_linux-64 2.28 and installs on\nRHEL8 -- a good change -- and defined the matching variant keys Linux-only\n(`- sysroot  # [linux]`). conda-build strips non-matching `# [selector]`\nlines before parsing the YAML, so on macOS c_stdlib is undefined and\njinja_context._target() falls back to the language name itself\n(package_prefix = language, for stdlib), rendering {{ stdlib(\"c\") }} as\nc_osx-arm64. CI/ci-deps.sh --only-deps hands the rendered requirements\nstraight to conda install, so the job stops before HDF5, netCDF-C or\nclio-core is configured -- nothing is built, so no variant-drop flag\ncovers it. clio-core's own ci-macos.yml is red for the same reason, so\nwaiting for the next dev does not fix it.\n\npatch_clio_conda_variants.sh adds the mapping conda-forge's own pinning\npublishes -- macosx_deployment_target, whose per-target build\nmacosx_deployment_target_osx-arm64 is a real package -- with 11.0 for\narm64 and 10.13 for x86_64, matching the floor the recipe's existing\nMACOSX_DEPLOYMENT_TARGET comment gives for nanobind. It edits the\nrecipe's variant config only, i.e. which dependency packages conda\nresolves for the build env, so no clio-core source is patched and the\nbenchmark still measures the tree upstream ships.\n\nReproduced and verified off CI, on Linux, by rendering the recipe for the\nmacOS subdir with the conda-build the runner installs (26.7.0):\n\n  unpatched  build: ['c_osx-arm64', 'clangxx_osx-arm64', 'cmake', 'make',\n                     'pkg-config']            <- the CI list exactly\n  patched    build count: 46, has c_osx-arm64: False,\n             stdlib pkg: macosx_deployment_target_osx-arm64\n\nNote the unpatched build env is left unresolved; patched it resolves.\n\nThe script is a self-announcing no-op once the recipe stops calling\nstdlib( or gains a c_stdlib entry that applies to macOS, so the two call\nsites can be removed deliberately rather than rotting. It guards on\nDarwin: patching on Linux would break the 2.28 glibc floor #973 exists\nfor. probe-clio-vol-portability.yml's macOS leg hits the identical wall\nand gets the same step.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-17T15:58:14Z",
          "url": "https://github.com/hyoklee/hpf/commit/3e7010e46dee519b4a9c54bee87c791b47b04346"
        },
        "date": 1787046627861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.54,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 5.8,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 450,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 2.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.32,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 3.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 2.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 3.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.98,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 3.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 3.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 2.1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 1.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 2.1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 2.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 1.8,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
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
          "id": "3e7010e46dee519b4a9c54bee87c791b47b04346",
          "message": "ci(mac): give clio-core's conda recipe the macOS half of c_stdlib\n\nEvery macOS benchmark run since 2026-08-14 has died in the conda step,\nthree retries deep, on a package name that has never existed:\n\n  PackagesNotFoundInChannelsError: The following packages are not\n  available from current channels:\n    - c_osx-arm64\n\nclio-core ae532d92 (PR #973) added {{ stdlib(\"c\") }} to the conda recipe\nso the Linux package builds against sysroot_linux-64 2.28 and installs on\nRHEL8 -- a good change -- and defined the matching variant keys Linux-only\n(`- sysroot  # [linux]`). conda-build strips non-matching `# [selector]`\nlines before parsing the YAML, so on macOS c_stdlib is undefined and\njinja_context._target() falls back to the language name itself\n(package_prefix = language, for stdlib), rendering {{ stdlib(\"c\") }} as\nc_osx-arm64. CI/ci-deps.sh --only-deps hands the rendered requirements\nstraight to conda install, so the job stops before HDF5, netCDF-C or\nclio-core is configured -- nothing is built, so no variant-drop flag\ncovers it. clio-core's own ci-macos.yml is red for the same reason, so\nwaiting for the next dev does not fix it.\n\npatch_clio_conda_variants.sh adds the mapping conda-forge's own pinning\npublishes -- macosx_deployment_target, whose per-target build\nmacosx_deployment_target_osx-arm64 is a real package -- with 11.0 for\narm64 and 10.13 for x86_64, matching the floor the recipe's existing\nMACOSX_DEPLOYMENT_TARGET comment gives for nanobind. It edits the\nrecipe's variant config only, i.e. which dependency packages conda\nresolves for the build env, so no clio-core source is patched and the\nbenchmark still measures the tree upstream ships.\n\nReproduced and verified off CI, on Linux, by rendering the recipe for the\nmacOS subdir with the conda-build the runner installs (26.7.0):\n\n  unpatched  build: ['c_osx-arm64', 'clangxx_osx-arm64', 'cmake', 'make',\n                     'pkg-config']            <- the CI list exactly\n  patched    build count: 46, has c_osx-arm64: False,\n             stdlib pkg: macosx_deployment_target_osx-arm64\n\nNote the unpatched build env is left unresolved; patched it resolves.\n\nThe script is a self-announcing no-op once the recipe stops calling\nstdlib( or gains a c_stdlib entry that applies to macOS, so the two call\nsites can be removed deliberately rather than rotting. It guards on\nDarwin: patching on Linux would break the 2.28 glibc floor #973 exists\nfor. probe-clio-vol-portability.yml's macOS leg hits the identical wall\nand gets the same step.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-17T15:58:14Z",
          "url": "https://github.com/hyoklee/hpf/commit/3e7010e46dee519b4a9c54bee87c791b47b04346"
        },
        "date": 1787133159222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.71,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.11,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 5.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 450,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 2.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 3.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 3.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 3.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.8,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.43,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.33,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.54,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.64,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 3.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 3.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 3.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 2.1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 2.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
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
          "id": "589aea4942629c1a86148f29a421fd42c1e12d0b",
          "message": "ci(win): tree-kill the hung workload so the benchmark stops burning 6h\n\nEvery scheduled NetCDF-4 CLIO Windows run since 2026-08-14 was cancelled at\nthe job's 360-minute timeout. The cause was not a slow build: clio-core PR #971\nlanded the VOL portability fix on dev, so clio_vol began *building* on Windows,\nand with it came the known teardown hang (finding 4) -- the workload measures\nall 18 timings, then wedges in HDF5's atexit file close.\n\nexit_hang_watchdog is supposed to bound that to 30s, but on Windows bench_kill\nran `taskkill //F //IM tst_chunks3.exe`, killing only the workload by image\nname. The CLIO client leaves worker children (chimaera/clio) that inherited the\nworkload's stdout -- the run_variant pipe -- so those orphans kept the pipe open,\nthe downstream sed|tee never saw EOF, and the run hung on the pipeline wait for\nthe remaining ~5.5 hours.\n\nAdd //T so taskkill takes the whole process tree in bench_kill and, for the\nsame reason, clio_runtime_stop. Reproduced and verified off CI: with //IM alone\nthe pipeline never returns; with //F //T //IM it returns in seconds with all 18\ntimings kept (the variant is recorded measured_no_exit and still publishes).\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-08-20T04:31:30Z",
          "url": "https://github.com/hyoklee/hpf/commit/589aea4942629c1a86148f29a421fd42c1e12d0b"
        },
        "date": 1787219556792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.16,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 5.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 460,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.46,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 2.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 3.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.91,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 3.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.81,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.71,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.87,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 3.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.54,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 2.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
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
        "date": 1787305720689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.0005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.13,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 1.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 1.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.19,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.83,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.49,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.18,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.13,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.11,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.7,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.12,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 1.7,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.21,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 2.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
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
        "date": 1787391192779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.12,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 1.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 1.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 2.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.07,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.13,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.58,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 1.1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 1.8,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.18,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.94,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.11,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 3.1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 1.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
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
        "date": 1787737870683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0072,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.12,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 1.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 1.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 1.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 1.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 1.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.66,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 3.1,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.7,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.7,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 3.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.82,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 3.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 1.7,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 2.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
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
        "date": 1787950547453,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.11,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 1.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 1.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 2.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 3.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 2.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 2.8,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 1.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 3.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.8,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.54,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 2.5,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 1.6,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 3.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 2.7,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 1.9,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 2.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 1.3,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core d68f4f2b"
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
        "date": 1788013289583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.22,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 2.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 2.4,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.11,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - macOS - hdf5 b7b85e7a / netcdf-c f0b888da / clio-core 3357ac99"
          }
        ]
      }
    ]
  }
}