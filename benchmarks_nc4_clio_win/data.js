window.BENCHMARK_DATA = {
  "lastUpdate": 1792709923746,
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
          "id": "1720bc0e8341114ba6e566e8ead672b8a8f53a58",
          "message": "ci(win): track the hyoklee/core fork's dev for the CLIO source\n\nThe CLIO VFD's Windows fixes land on the hyoklee/core fork's dev first (e.g. the\nO_ACCMODE define the CTE cache tier needs to compile under MSVC, merged there as\nPR #1073). Point the Windows benchmark's default clio source at that fork's dev\nso the VFD builds and is measured; a workflow_dispatch can still override\nclio_repo/clio_ref back to iowarp/clio-core or any other fork/branch.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-09-02T18:40:39Z",
          "url": "https://github.com/hyoklee/hpf/commit/1720bc0e8341114ba6e566e8ead672b8a8f53a58"
        },
        "date": 1790875967401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 75706f67"
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
        "date": 1790959312345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 75706f67"
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
        "date": 1791040813192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core 75706f67"
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
        "date": 1791129205552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 75706f67"
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
        "date": 1791307240941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 975d7d89 / netcdf-c bc148bf8 / clio-core 75706f67"
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
        "date": 1791395771487,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 cfcd7fe7 / netcdf-c bc148bf8 / clio-core 75706f67"
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
        "date": 1791481999230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 d0be928f / netcdf-c bc148bf8 / clio-core 75706f67"
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
        "date": 1791566951022,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 75706f67"
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
        "date": 1791836563167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 75706f67"
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
        "date": 1791993408081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 75706f67"
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
        "date": 1792079685112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 89490d92 / netcdf-c bc148bf8 / clio-core 75706f67"
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
        "date": 1792164302416,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 75706f67"
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
          "id": "d3678d959914e06c2b0ae0abb7a3565c60dfd699",
          "message": "Retry gh-pages pushes with a rebase when another workflow wins the race\n\nThe daily, grouped-data and NetCDF-4 CLIO workflows all push to gh-pages\nand often finish within seconds of each other. A bare push (or a single\nrebase followed by a push) failed with \"cannot lock ref\" when the branch\nmoved after checkout, as in run 39601837398. Rebase onto the latest\ngh-pages and retry up to five times before failing the step.\n\nCo-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-10-21T14:35:41Z",
          "url": "https://github.com/hyoklee/hpf/commit/d3678d959914e06c2b0ae0abb7a3565c60dfd699"
        },
        "date": 1792598534133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0068,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 761c5e87 / netcdf-c bc148bf8 / clio-core 75706f67"
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
          "id": "bb77b8f467433ac00934a40260bdb1bfde4ebaca",
          "message": "Use a linear y-axis on the NetCDF-4 CLIO plot pages and link the Sep archive\n\nCo-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-10-22T16:20:40Z",
          "url": "https://github.com/hyoklee/hpf/commit/bb77b8f467433ac00934a40260bdb1bfde4ebaca"
        },
        "date": 1792709922103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - Windows (patched nc_perf) - hdf5 43308432 / netcdf-c f5fc1826 / clio-core 75706f67"
          }
        ]
      }
    ]
  }
}