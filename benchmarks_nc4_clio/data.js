window.BENCHMARK_DATA = {
  "lastUpdate": 1793368390551,
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
          "id": "1720bc0e8341114ba6e566e8ead672b8a8f53a58",
          "message": "ci(win): track the hyoklee/core fork's dev for the CLIO source\n\nThe CLIO VFD's Windows fixes land on the hyoklee/core fork's dev first (e.g. the\nO_ACCMODE define the CTE cache tier needs to compile under MSVC, merged there as\nPR #1073). Point the Windows benchmark's default clio source at that fork's dev\nso the VFD builds and is measured; a workflow_dispatch can still override\nclio_repo/clio_ref back to iowarp/clio-core or any other fork/branch.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-09-02T18:40:39Z",
          "url": "https://github.com/hyoklee/hpf/commit/1720bc0e8341114ba6e566e8ead672b8a8f53a58"
        },
        "date": 1790863734275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0761c9ee / netcdf-c beb7b958 / clio-core 6cec5008"
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
        "date": 1790947826563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 cf75680f / netcdf-c 4edaf690 / clio-core 183ab948"
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
        "date": 1791029743634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00095,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00095,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00095,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 91fc37c3 / netcdf-c 4edaf690 / clio-core c6f48681"
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
        "date": 1791119093133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e82c1d38 / netcdf-c 4edaf690 / clio-core 784cb968"
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
        "date": 1791214468054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 17a229f0 / netcdf-c 4edaf690 / clio-core 1951aa9f"
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
        "date": 1791295032344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0076,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 9a03597a / netcdf-c 4edaf690 / clio-core ae55f50f"
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
        "date": 1791382451202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0072,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0b4cb453 / netcdf-c bc148bf8 / clio-core fc8281e5"
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
        "date": 1791469412213,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00072,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 8117f4c7 / netcdf-c bc148bf8 / clio-core 3760bc3a"
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
        "date": 1791554995701,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 6c592995"
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
        "date": 1791638309873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 86b4426f"
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
        "date": 1791822546927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 5933130b / netcdf-c bc148bf8 / clio-core 5ac2747d"
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
        "date": 1791903020546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 4ab9223d / netcdf-c bc148bf8 / clio-core 5ac2747d"
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
        "date": 1791981791428,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00072,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core a9018455"
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
        "date": 1792067171280,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00076,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.0003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 c8f58d6f / netcdf-c bc148bf8 / clio-core 1547bb68"
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
        "date": 1792152594422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 9998073a"
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
        "date": 1792236320124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core 03c4ba2b"
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
          "id": "39826c8a5f6be6a1c4adb1d92110462a622d7234",
          "message": "Compare write2 between HDF5 commits on i386 with the v16 API\n\nAdd compare_hdf5_commits_i386_v16.yml: build both HDF5 commits in an Alpine\nx86 (32-bit) chroot with HDF5_DEFAULT_API_VERSION=v16, then benchmark write2\nin alternating rounds. It reports to the run summary and artifact only, not\nto the daily dashboards.\n\nwrite2.cpp now makes the 1.6 calls of the 1.0.0 write2.c (H5Gcreate1,\nH5Dcreate1, H5Dopen1, H5Dextend) when built with the 1.6 API.\n\nCo-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-10-19T15:14:23Z",
          "url": "https://github.com/hyoklee/hpf/commit/39826c8a5f6be6a1c4adb1d92110462a622d7234"
        },
        "date": 1792499724242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.0005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.0006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ab5df552 / netcdf-c bc148bf8 / clio-core e7e409d0"
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
          "id": "10bb6f3dad1350687c9aec4a29531f77fa8613c0",
          "message": "Parse every benchmark of a multi-benchmark test case on Mac\n\nparse_catch2_results_mac.py only skipped one line after a result, so it\nread the std dev line as a malformed entry, then stopped at Catch2's\nwhitespace-only padding line. Only the first benchmark of a test case\nwas recorded, so the Mac dashboard got \"write2 10000 groups\" but not\nthe other three write2 steps. Skip both the mean and std dev lines, and\ntreat padding lines as separators between benchmarks.\n\nCo-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-10-20T15:39:40Z",
          "url": "https://github.com/hyoklee/hpf/commit/10bb6f3dad1350687c9aec4a29531f77fa8613c0"
        },
        "date": 1792586592564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 07129ce4 / netcdf-c bc148bf8 / clio-core e7e409d0"
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
        "date": 1792673246095,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d42a2383 / netcdf-c f5fc1826 / clio-core cc3225d2"
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
        "date": 1792800622508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 62c5dd25 / netcdf-c f5fc1826 / clio-core cc3225d2"
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
        "date": 1792930848757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00076,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.00086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.00084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.00094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 bee3442e / netcdf-c f5fc1826 / clio-core cc3225d2"
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
        "date": 1793106110315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 21e85252 / netcdf-c f5fc1826 / clio-core ba6e2646"
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
        "date": 1793195406762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0076,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 ba7c9991 / netcdf-c 0582e869 / clio-core ba6e2646"
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
        "date": 1793282455509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.00082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 0926ec19 / netcdf-c 0d5d6aa7 / clio-core ba6e2646"
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
        "date": 1793368390097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.0005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 6533bcc0 / netcdf-c 0d5d6aa7 / clio-core fec1a383"
          }
        ]
      }
    ]
  }
}