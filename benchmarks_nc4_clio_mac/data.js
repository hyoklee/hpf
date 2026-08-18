window.BENCHMARK_DATA = {
  "lastUpdate": 1787046629039,
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
      }
    ]
  }
}