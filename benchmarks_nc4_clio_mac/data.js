window.BENCHMARK_DATA = {
  "lastUpdate": 1786097551935,
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
      }
    ]
  }
}