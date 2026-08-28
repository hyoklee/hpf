window.BENCHMARK_DATA = {
  "lastUpdate": 1787944626823,
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
          "id": "1408d47edab31b66c278515a02cc15f30cbff0b8",
          "message": "ci: add a macOS NetCDF-4 CLIO benchmark on macos-26\n\nMirrors nc4-clio-benchmark.yml, publishing to benchmarks_nc4_clio_mac/ on\ngh-pages -- a separate directory because github-action-benchmark keys history\non the benchmark name alone, so one directory would interleave the platforms\ninto a single line graph.\n\nmacOS runners cannot use a container, so clio-core's dependency set comes from\nthe conda env built by its own CI/ci-deps.sh, the path clio-core's ci-macos.yml\nand ci-adapters.yml use.\n\nnc4_clio_bench.sh stays the single source of truth and is made portable rather\nthan forked:\n\n  - bash-3.2 clean (macOS ships 3.2): the resolve_src nameref becomes a\n    stdout-returning function\n  - BSD userland: sed -u -> -l, a literal ESC byte instead of the GNU \\x1b\n    escape, no find -perm -u+x, timeout -> gtimeout with a shell-watchdog\n    fallback\n  - .dylib adapter suffix, and an otool/LC_RPATH ABI gate in place of ldd --\n    the conda env ships its own libhdf5, so \"did the plugin link OUR HDF5\"\n    matters more here than on Linux\n  - ELF off, conda on, ar/ranlib pinned to Xcode's (clio-core #797)\n  - /dev/shm sweep is a no-op where there is no /dev/shm\n\nclio-core builds the VFD adapter on Linux only, so the mac workflow passes\n--allow-adapter-build-failure: an adapter that does not compile drops its own\nseries instead of failing the run and losing the other two.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-05T14:51:58Z",
          "url": "https://github.com/hyoklee/hpf/commit/1408d47edab31b66c278515a02cc15f30cbff0b8"
        },
        "date": 1785941988030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.33,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.23,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 16,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
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
          "id": "762bf02a2df9e972590f670c3714a69d69bd4f3a",
          "message": "ci: add a Windows NetCDF-4 CLIO benchmark on windows-2025\n\nPublishes to benchmarks_nc4_clio_win/ on gh-pages, alongside the Linux and\nmacOS series. Two Windows facts shape what it can measure.\n\nnetCDF-C's benchmark suite does not build with MSVC: tst_chunks3's timing\nmacros are built on getrusage(2), and not one of nc_perf's 23 sources carries\na _WIN32 guard, so there is no portable substitute either. Add\n.github/patches/netcdf-c-tst_chunks3-win32.patch, which supplies getrusage on\ntop of GetProcessTimes -- the same user+kernel CPU time the POSIX platforms\nmeasure, so the numbers stay comparable in kind. The driver applies it only to\na checkout it cloned itself, and fails loudly if it stops applying. The job\nsummary and plot page say the workload is patched.\n\nThere is no CLIO VFD on Windows for the same reason as macOS: clio-core gates\nadd_subdirectory(vfd) behind CLIO_CORE_ENABLE_ELF (pkg_check_modules libelf),\nand its own ci-adapters.yml sets CLIO_CTE_ENABLE_VFD=OFF there.\n\nDriver changes, all gated on a WIN flag so Linux and macOS are untouched:\n\n  - multi-config MSVC: -A x64 at configure, --config Release on every build\n    and install\n  - cygpath -m at the path boundary, so bash and the MSVC toolchain agree\n  - vcpkg toolchain/manifest/overlay ports for clio-core, APPLOCAL off\n    (clio-core #848)\n  - clio_hdf5_vol.dll in bin/Release, not libclio_hdf5_vol.so\n  - taskkill/tasklist instead of pkill/pgrep\n  - PATH-based ABI gate: Windows binds imports by bare filename with no\n    soversion, so the first hdf5.dll loaded wins for the whole process. Ours\n    goes first, ahead of the hdf5 vcpkg installs for clio's dependency set,\n    and a stray hdf5.dll beside the plugins fails the build\n  - timeout(1) resolved as /usr/bin/timeout only: a bare `timeout` on Windows\n    is System32's \"pause for N seconds\", which would silently not bound the run\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-05T15:47:07Z",
          "url": "https://github.com/hyoklee/hpf/commit/762bf02a2df9e972590f670c3714a69d69bd4f3a"
        },
        "date": 1785945287150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.24,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.27,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 14,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b6a9b482 / netcdf-c db5a7f93 / clio-core 86ab6341"
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
        "date": 1786009370115,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.24,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.27,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 13,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00071,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 7b37aac6 / netcdf-c db5a7f93 / clio-core 8370b76f"
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
        "date": 1786090473202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.26,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0051,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.17,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 11,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d006fb8d / netcdf-c db5a7f93 / clio-core 20c802db"
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
        "date": 1786175273300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.00098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0069,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0087,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.26,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.17,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 14,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 68b722b8"
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
        "date": 1786261982367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0096,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.24,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.24,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 17,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.00075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.00079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 57128d33 / netcdf-c db5a7f93 / clio-core 3538bf65"
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
        "date": 1786525332746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0099,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core 9eac238e"
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
          "id": "1b300ed2c4e40f47bfdfa3c91a41b29ae841c044",
          "message": "ci: pass the VFD's current config-string grammar, not the old positional one\n\nThe clio_vfd variant died on its first nc_create with \"Permission denied\"\n(exit 13) before any timing, in CI and locally. Nothing was denied:\nnetCDF-C's NC4_create BAILs with a literal EACCES whenever H5Fcreate\nfails (libhdf5/hdf5create.c:249), so nc_strerror(13) falls through to\nstrerror and every HDF5 create failure reads as a permission problem.\nstrace confirmed the file was never opened for writing and no syscall\nreturned EACCES.\n\nThe real cause was this script's HDF5_DRIVER_CONFIG. clio-core 6873b60a\n(2026-08-10) taught the VFD to pull that string off the FAPL with\nH5Pget_driver_config_str and parse it with clio's shared \"key=value;...\"\ngrammar, failing the open on anything it cannot parse; before that commit\nthe driver read the string not at all. The positional \"true 65536\"\n(<persistence> <page_size>) we were passing was therefore ignored for the\n2026-08-03 measurements and became a hard parse error two days before the\nfailing run. cache=1 is the current spelling and asks for the CTE cache\ntier, which is what this series exists to measure.\n\nTwo things hid the cause and are now written down: the driver's own\nH5Epush2 message never reaches the printed stack, because HDF5 2.3.0 runs\ndriver callbacks inside H5_BEFORE_USER_CB, and the VFD README still says\nthe driver does not parse HDF5_DRIVER_CONFIG.\n\nVerified locally against clio-core dev a19a0356: all three variants\nproduce results and the combined payload carries 54 benchmarks (18 per\nseries) where before clio_vfd contributed none. The VFD's contiguous-slab\npathology is unchanged and still tracked -- contiguous write 64 64 1 is\n7.6 s against the baseline's 0.017 s.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-12T22:45:17Z",
          "url": "https://github.com/hyoklee/hpf/commit/1b300ed2c4e40f47bfdfa3c91a41b29ae841c044"
        },
        "date": 1786584166368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.33,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.22,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 17,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 eeba6ab8 / netcdf-c db5a7f93 / clio-core a19a0356"
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
          "id": "4b34a897d19420d1800ab171d1f0263051c849c3",
          "message": "ci(probe): install m4 in the Windows VOL probe\n\nThe probe's Windows job failed in netCDF-C's configure, not in the VOL:\n\"m4 is required to generate attr.c\". The driver's build stage configures\nnetCDF-C on the way to clio-core, and no stock Windows toolchain ships m4 --\nnc4-clio-benchmark-win.yml already solves this and the probe simply lacked\nthe step. Copied verbatim, including handing the path over as NC_M4 rather\nthan adding MSYS2's bin to PATH, where its link.exe would shadow MSVC's.\n\nThe macOS job of the same run answered its question at clio-core\ne3f32dd7 (PR #971): libclio_hdf5_vol.dylib builds, no st_mtim errors.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-13T03:19:10Z",
          "url": "https://github.com/hyoklee/hpf/commit/4b34a897d19420d1800ab171d1f0263051c849c3"
        },
        "date": 1786695340657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.31,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.22,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 17,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.01,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.03,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 e4b6a964 / netcdf-c db5a7f93 / clio-core 39d748b8"
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
          "id": "4b34a897d19420d1800ab171d1f0263051c849c3",
          "message": "ci(probe): install m4 in the Windows VOL probe\n\nThe probe's Windows job failed in netCDF-C's configure, not in the VOL:\n\"m4 is required to generate attr.c\". The driver's build stage configures\nnetCDF-C on the way to clio-core, and no stock Windows toolchain ships m4 --\nnc4-clio-benchmark-win.yml already solves this and the probe simply lacked\nthe step. Copied verbatim, including handing the path over as NC_M4 rather\nthan adding MSYS2's bin to PATH, where its link.exe would shadow MSVC's.\n\nThe macOS job of the same run answered its question at clio-core\ne3f32dd7 (PR #971): libclio_hdf5_vol.dylib builds, no st_mtim errors.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-13T03:19:10Z",
          "url": "https://github.com/hyoklee/hpf/commit/4b34a897d19420d1800ab171d1f0263051c849c3"
        },
        "date": 1786779064791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0098,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.23,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.25,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 18,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0095,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0083,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.03,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c db5a7f93 / clio-core 39d748b8"
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
        "date": 1787038780447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0041,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.25,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0053,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.22,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 19,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0093,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 f8f0379c / netcdf-c 0b0a6f8e / clio-core 795bc827"
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
        "date": 1787125147707,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0076,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0094,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.23,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0057,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.2,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 17,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0085,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0081,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0049,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 393410ba / netcdf-c 00bb4e6b / clio-core 35678b83"
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
        "date": 1787211695147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.32,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.31,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 17,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0061,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0042,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 767ac04b / netcdf-c 2ed1b285 / clio-core 35678b83"
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
        "date": 1787298220014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00054,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.0097,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.002,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.005,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0079,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.076,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.12,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.008,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0076,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0078,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0076,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.02,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core 25e5756b"
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
        "date": 1787383917254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00056,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.12,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0072,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0072,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0075,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0072,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 51b92cce / netcdf-c 2ed1b285 / clio-core fcbc503f"
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
        "date": 1787730382004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.001,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00033,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0039,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00038,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.0058,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.007,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0012,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0023,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0022,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.0004,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0062,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.036,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0059,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0084,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.006,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0088,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0035,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0034,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.019,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.024,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core b31fd45a"
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
        "date": 1787854028876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0027,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0029,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0046,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0086,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.07,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.13,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0066,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0092,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0063,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0089,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.014,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.018,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0067,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.025,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.03,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 d8ec6396 / netcdf-c 2ed1b285 / clio-core ddc93622"
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
        "date": 1787944626500,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0013,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_hdf5_develop",
            "value": 0.0026,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_hdf5_develop",
            "value": 0.00047,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_hdf5_develop",
            "value": 0.0044,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_hdf5_develop",
            "value": 0.0064,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_hdf5_develop",
            "value": 0.00055,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_hdf5_develop",
            "value": 0.009,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_hdf5_develop",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vfd",
            "value": 0.0032,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.003,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0017,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0016,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vfd",
            "value": 0.0031,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vfd",
            "value": 0.00065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vfd",
            "value": 0.0045,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vfd",
            "value": 0.0091,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vfd",
            "value": 0.0048,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vfd",
            "value": 0.065,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vfd",
            "value": 0.12,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VFD - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0074,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0072,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_read_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_1x64x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x1x64_chunks_16x16x16_nc4_clio_vol",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "chunked_write_64x64x1_chunks_16x16x16_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0073,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_read_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_1x64x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0077,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x1x64_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.0082,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "compressed_write_64x64x1_chunks_16x16x16_deflate6_nc4_clio_vol",
            "value": 0.011,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_1x64x64_nc4_clio_vol",
            "value": 0.0043,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x1x64_nc4_clio_vol",
            "value": 0.015,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_read_64x64x1_nc4_clio_vol",
            "value": 0.021,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_1x64x64_nc4_clio_vol",
            "value": 0.0052,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x1x64_nc4_clio_vol",
            "value": 0.028,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          },
          {
            "name": "contiguous_write_64x64x1_nc4_clio_vol",
            "value": 0.037,
            "unit": "sec",
            "extra": "netCDF-4 main / HDF5 develop + CLIO VOL - hdf5 b7b85e7a / netcdf-c 13807175 / clio-core d68f4f2b"
          }
        ]
      }
    ]
  }
}