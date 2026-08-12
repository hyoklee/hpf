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
| CLIO VFD | `HDF5_DRIVER=clio_vfd`, `HDF5_DRIVER_CONFIG="cache=1"` (was `"true 65536"`; see finding 5) |
| CLIO VOL | `HDF5_VOL_CONNECTOR=clio` |

Workload `tst_chunks3` from netcdf-c `nc_perf`, args `6 64 16 64 16 64 16`
(deflate 6, 64³ elements, 16³ chunks). Sources as of 2026-08-03:

| Repo | Ref | Commit |
| --- | --- | --- |
| HDFGroup/hdf5 | `develop` | `b70a2d09` |
| Unidata/netcdf-c | `main` | `35d5ccf3` |
| iowarp/clio-core | `dev` | `b5c68c5e` + the `clio_file_specific` fix, equivalent to `3e8979cd` already on `dev` (see below) |

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

### 1. CLIO VOL segfaults on the first netCDF-4 call — already fixed upstream

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

The fix delegates those two op types to native with a NULL object: copy the
FAPL, `H5Pset_vol(..., H5VL_NATIVE, NULL)`, forward, restore the caller's FAPL
slot.

**This was already fixed on clio-core `dev` by
[`3e8979cd`](https://github.com/iowarp/clio-core/commit/3e8979cd) (2026-07-31).**
The crash was hit against a stale local checkout at `b5c68c5e`; a local patch
was written to unblock measurement, then discarded once upstream turned out to
have the better version of it — theirs also restores the caller's FAPL slot and
guards the remaining ops. The CLIO VOL numbers above are reproducible on
`dev` @ `03819a98` unmodified.

Upstream also identified a wider trigger than netCDF: HDF5's
`H5VL__file_open_find_connector_cb` asks *every* plugin on `HDF5_PLUGIN_PATH`
whether it can open a file, so merely having `libclio_hdf5_vol.so` in the
plugin directory crashed a plain `H5Fopen` — the connector did not have to be
selected.

What remains missing is coverage: no case in clio-core's `vol_compat_suite.py`
reaches that callback, because every case goes through h5py and h5py never
calls `H5Fis_accessible`. A regression probe is proposed in
[iowarp/clio-core#898](https://github.com/iowarp/clio-core/pull/898).

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

### 4. CLIO VOL: the process cannot exit, and that cost the series

Seen first in the scheduled Linux run of 2026-08-12
([31577100886](https://github.com/hyoklee/hpf/actions/runs/31577100886)):
`clio_vol` printed all 18 timings in three seconds, then sat until the
45-minute `--run-timeout` killed it, and the driver deleted its complete result
file — `[warn] variant clio_vol failed (exit 124); discarding its result file`.
The dashboard lost the whole series to a hang that happened *after* every
measurement was taken.

The hang is atexit ordering. HDF5 registers `H5_term_library` with `atexit` on
the first HDF5 call; the connector initialises the clio client on the first
`H5Fcreate`, which registers clio's `RuntimeManagerCleanupAtExit` **later**.
Handlers run in reverse order, so clio finalises its client first
(`[ClientPool] Clearing 0 persistent connections` is the last line in the log),
and `H5_term_library` then closes the file HDF5 still holds open — through the
connector, which posts a `DelBlobTask` on the finalised client and waits with no
timeout for a reply that can never arrive:

```
#0  syscall
#1  IpcCpu2Cpu::RecvOut<clio::cte::core::DelBlobTask>(...)
#2  Future<DelBlobTask>::WaitCpu2Cpu(float, bool)
#3  clio_write_stamp(...)                     [libclio_hdf5_vol.so]
#4  clio_file_close(void*, long, void**)      [libclio_hdf5_vol.so]
#5  H5VL_file_close                           [libhdf5.so.1000]
#6  H5F__close_cb / H5I_clear_type / H5F_term_package
#9  H5_term_library
#10 __run_exit_handlers                       [libc]
```

Reproduced locally against clio-core `dev` @ `a19a0356`, HDF5 `develop` @
`562e6028`, netCDF-C `main` @ `984d9758`. It takes a file still in HDF5's id
table when `main` returns to reach that atexit close at all: `tst_chunks3` calls
`nc_close` and one is there anyway, while a small program that closes its own
HDF5 objects exits normally — which is why clio-core's h5py-based VOL compat
suite never sees this. Upstream needs either an ordering fix (register
clio's teardown before HDF5's, or defer it) or a bounded wait; a `Future` that
blocks forever when the client is gone will keep turning shutdown bugs into
hangs.

The benchmark side is fixed independently of upstream: `tst_chunks3` emits
exactly 18 timing lines and does no work after the last one, so a result file
holding all 18 is a complete measurement no matter how the process ended.
`nc4_clio_bench.sh` now keeps such a file (noting the unclean exit in it) and
kills a process that has not exited 30 s after its last timing line, so a
teardown hang costs half a minute instead of the whole timeout.

### 5. "Permission denied" from the VFD was a stale `HDF5_DRIVER_CONFIG`

The same run lost `clio_vfd` too, for an unrelated reason: the very first
`nc_create` failed right after the cache line, before any timing —

```
Sorry! Unexpected result, .../nc_perf/tst_chunks3.c, line: 314 - Permission denied
```

Nothing was denied. Line 314 is `nc_create(FILENAME, NC_NETCDF4 |
NC_CLASSIC_MODEL, &ncid)`, and netCDF-C's `NC4_create` does `BAIL(EACCES)` —
a *literal* `EACCES`, not a netCDF status — whenever `H5Fcreate` fails
(`libhdf5/hdf5create.c:249`). `nc_strerror(13)` then falls through to
`strerror`, so every possible HDF5 create failure is reported as "Permission
denied". `strace` showed the give-away: the file was never opened for writing at
all, and no syscall returned `EACCES`.

The actual failure was our own config string, and the change that broke it is
datable: clio-core
[`6873b60a`](https://github.com/iowarp/clio-core/commit/6873b60a) (2026-08-10,
"CLIO cache tier for the VOL and VFD connectors") taught the driver to pull
`HDF5_DRIVER_CONFIG` off the FAPL with `H5Pget_driver_config_str` and parse it
with clio's shared `key=value;...` grammar (`adapter/clio_config_str.h`),
rejecting anything it cannot understand so that a mistyped knob cannot be
silently ignored. **Before that commit the driver did not read the string at
all.** The benchmark was passing the positional `"true 65536"`
(`<persistence> <page_size>`), which was therefore ignored for the 2026-08-03
measurements — the persistence and page-size it claimed to set were never in
effect, and nothing was lost by that, since the VFD's authoritative store is a
real on-disk native file regardless. Two days after `6873b60a` the same string
became *"config entry 'true 65536' has no '=' (expected key=value)"* and failed
the open. `HDF5_DRIVER_CONFIG="cache=1"` is the current spelling — it asks for
the CTE cache tier, which is the thing this series is supposed to measure — and
the variant measures again. Two things hid the cause:

- The driver's own message never reaches the printed stack. It pushes with
  `H5Epush2(H5E_DEFAULT, ...)`, and HDF5 2.3.0 runs driver callbacks inside
  `H5_BEFORE_USER_CB`/`H5_AFTER_USER_CB`, so what a caller sees is HDF5's outer
  `H5FD_open(): can't open file` with nothing underneath it.
- `context-transfer-engine/adapter/vfd/README.md` still says the driver "does
  not yet parse `HDF5_DRIVER_CONFIG`" — stale, and the opposite of what the code
  now does. As with the driver *name* (finding 3), the source is authoritative
  and the README is not.

Worth reporting upstream on the netCDF-C side too: `BAIL(EACCES)` turns every
VFD/VOL create failure into a wrong diagnosis, and the same `BAIL` pattern is in
the diskless branch immediately above it.

## Verified in CI

The Linux workflow has now run on GitHub: the `iowarp/deps-cpu` container path,
the per-component caching, the plot generation and the gh-pages push all work
(run [31577100886](https://github.com/hyoklee/hpf/actions/runs/31577100886)
pushed `benchmarks_nc4_clio/` at 8 runs of history). What that run exposed was
the two adapter problems above, not workflow plumbing. The macOS and Windows
workflows publish to their own directories and are checked by their own runs.
