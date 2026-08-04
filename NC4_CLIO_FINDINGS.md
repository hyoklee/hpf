# NetCDF-4 / CLIO benchmark — findings

First measurements from the `NetCDF-4 CLIO Performance Benchmark` workflow
(`.github/workflows/nc4-clio-benchmark.yml`). How the benchmark is built and
what it is easy to get wrong is documented separately in
[`.github/scripts/NC4_CLIO_BENCHMARK.md`](.github/scripts/NC4_CLIO_BENCHMARK.md);
this file records what the numbers said and what broke on the way there.

## What was compared

Three NetCDF-4 profiles, all on **one** HDF5 build and **one** netCDF-C binary —
only the HDF5 plugin environment differs, so a delta belongs to the CLIO
adapter and not to a different library build.

| Series | Selected by |
| --- | --- |
| baseline | nothing set (sec2 VFD, native VOL) |
| CLIO VFD | `HDF5_DRIVER=clio_vfd`, `HDF5_DRIVER_CONFIG="true 65536"` |
| CLIO VOL | `HDF5_VOL_CONNECTOR=clio` |

Workload `tst_chunks3` from netcdf-c `nc_perf`, args `6 64 16 64 16 64 16`
(deflate 6, 64³ elements, 16³ chunks). Sources as of 2026-08-03:

| Repo | Ref | Commit |
| --- | --- | --- |
| HDFGroup/hdf5 | `develop` | `b70a2d09` |
| Unidata/netcdf-c | `main` | `35d5ccf3` |
| iowarp/clio-core | `dev` | `b5c68c5e` (+ the VOL fix below) |

Run on one x86-64 Linux host (WSL2, 20 cores), three repetitions; the table
below is the per-benchmark median of those three. These are single-host
numbers meant to establish the shape of the differences, not published
performance figures.

## Results

| benchmark | baseline (s) | CLIO VFD (s) | CLIO VOL (s) | VFD | VOL |
| --- | ---: | ---: | ---: | ---: | ---: |
| `chunked_read_1x64x64_chunks_16x16x16` | 0.00093 | 0.00120 | 0.01400 | 1.3x | 15.1x |
| `chunked_read_64x1x64_chunks_16x16x16` | 0.00092 | 0.00110 | 0.01300 | 1.2x | 14.1x |
| `chunked_read_64x64x1_chunks_16x16x16` | 0.00160 | 0.00190 | 0.01400 | 1.2x | 8.8x |
| `chunked_write_1x64x64_chunks_16x16x16` | 0.00094 | 0.00110 | 0.01200 | 1.2x | 12.8x |
| `chunked_write_64x1x64_chunks_16x16x16` | 0.00093 | 0.00100 | 0.01400 | 1.1x | 15.1x |
| `chunked_write_64x64x1_chunks_16x16x16` | 0.00200 | 0.00250 | 0.01500 | 1.2x | 7.5x |
| `compressed_read_1x64x64_chunks_16x16x16_deflate6` | 0.00095 | 0.00110 | 0.01400 | 1.2x | 14.7x |
| `compressed_read_64x1x64_chunks_16x16x16_deflate6` | 0.00095 | 0.00110 | 0.01400 | 1.2x | 14.7x |
| `compressed_read_64x64x1_chunks_16x16x16_deflate6` | 0.00160 | 0.00200 | 0.01500 | 1.2x | 9.4x |
| `compressed_write_1x64x64_chunks_16x16x16_deflate6` | 0.00092 | 0.00100 | 0.01400 | 1.1x | 15.2x |
| `compressed_write_64x1x64_chunks_16x16x16_deflate6` | 0.00092 | 0.00100 | 0.01400 | 1.1x | 15.2x |
| `compressed_write_64x64x1_chunks_16x16x16_deflate6` | 0.00190 | 0.00220 | 0.01500 | 1.2x | 7.9x |
| `contiguous_read_1x64x64` | 0.00029 | 0.00037 | 0.01100 | 1.3x | 37.9x |
| `contiguous_read_64x1x64` | 0.00220 | 0.00200 | 0.01700 | 0.9x | 7.7x |
| `contiguous_read_64x64x1` | 0.00340 | 0.09900 | 0.01900 | **29x** | 5.6x |
| `contiguous_write_1x64x64` | 0.00035 | 0.01000 | 0.00960 | **29x** | 27.4x |
| `contiguous_write_64x1x64` | 0.00490 | 0.48000 | 0.02300 | **98x** | 4.7x |
| `contiguous_write_64x64x1` | 0.00690 | 46.0 | 0.02500 | **6667x** | 3.6x |

Ratios are against the baseline; higher is slower.

- **CLIO VFD — median 1.2x, worst 6667x.** On every chunked and compressed
  access it is within noise of native. The damage is confined to *contiguous*
  access, and it scales with the number of `nc_put_vara` calls rather than with
  the bytes moved: the 1×64×64 slab loop (64 calls) costs 29x, the 64×1×64 loop
  (64 calls over a worse stride) 98x, and the 64×64×1 loop 6667x — 46 seconds
  against 6.9 ms. This is a per-request cost through the CFS chimod, not a
  bandwidth problem. A 128³ run of the same benchmark did not finish in five
  minutes.
- **CLIO VOL — median 13.4x, worst 38x, no pathological case.** The overhead is
  a nearly flat ~10–14 ms per timed operation regardless of what the operation
  is, which is the signature of a fixed per-call round trip rather than of
  data volume. It shows up as a large *ratio* on the cheapest operations
  (`contiguous_read_1x64x64`, 0.29 ms native) and a small one on the most
  expensive.

The two adapters therefore fail in opposite directions: the VOL is uniformly
and predictably slower, the VFD is free until it is catastrophic.

## Problems found

### 1. CLIO VOL segfaults on the first netCDF-4 call — fixed, needs upstream

`clio_file_specific()` in
`context-transfer-engine/adapter/hdf5_vol/clio_vol.cc` casts and dereferences
`obj` unconditionally. For `H5VL_FILE_IS_ACCESSIBLE` and `H5VL_FILE_DELETE`
HDF5 passes `obj == NULL` — those ops act on a *filename*, not on an open file.
netCDF-C calls `H5Fis_accessible` from `NC_infermodel` on every `nc_create` and
`nc_open`, so the connector crashed before writing anything:

```
Program received signal SIGSEGV, Segmentation fault.
0  clio_file_specific(void*, H5VL_file_specific_args_t*, long, void**) [libclio_hdf5_vol.so]
1  H5VL_file_specific ()  [libhdf5.so.1000]
2  H5Fis_accessible ()    [libhdf5.so.1000]
3  NC_infermodel ()       [libnetcdf.so.22]
4  NC_create ()           [libnetcdf.so.22]
5  nc_create ()           [libnetcdf.so.22]
6  main ()
```

The fix mirrors `H5VLpassthru`: for those two op types, shallow-copy the args,
copy the FAPL, `H5Pset_vol(..., H5VL_NATIVE, NULL)`, and forward with a NULL
object. clio-core's own VOL compat suite cannot catch this — every case runs
through h5py, and h5py never calls `H5Fis_accessible`.

Reported and fixed upstream; the CLIO VOL numbers above were measured with that
fix applied. Until it lands in clio-core `dev`, the workflow will publish only
the baseline and VFD series (it drops a crashing variant rather than recording
a fabricated value).

### 2. The VFD needs the `clio_cte_filesystem` pool composed

The VFD does its I/O through the context-filesystem (CFS) chimod, not through
the CTE core pool directly. With only `clio_bdev` + `clio_cte_core` composed,
the first `H5Fcreate` blocks forever while the runtime logs
`ChiMod 'clio_cte_filesystem' not found`. It is a runtime-loaded module, so
nothing in the plugin's link graph pulls it in — `clio_cte_filesystem_runtime`
has to be named as an explicit build target. Both are handled in
`.github/scripts/clio_runtime.yaml` and `nc4_clio_bench.sh`.

### 3. The VFD driver name is `clio_vfd`, not `clio`

clio-core's `adapter/vfd/README.md` documents `HDF5_DRIVER=clio`.
`H5FD_CLIO_NAME` in `H5FDclio.h` is `clio_vfd`, and that is what HDF5 matches
the environment variable against. Following the README silently gets you the
sec2 driver and a "CLIO" series identical to the baseline.

## Not verified

The workflow has not yet run on GitHub. Every script it invokes was exercised
locally, but the `iowarp/deps-cpu` container path, the per-component caching,
and the gh-pages push are untested until the first scheduled run.
