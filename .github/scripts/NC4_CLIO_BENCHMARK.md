# NetCDF-4 CLIO Performance Benchmark

Compares three NetCDF-4 performance profiles and publishes the history to
`benchmarks_nc4_clio/` on the `gh-pages` branch.

| Series | Stack | How it is selected |
| --- | --- | --- |
| `baseline` | netCDF-C `main` + HDF5 `develop` | nothing set (sec2 VFD, native VOL) |
| `clio_vfd` | + clio-core `dev` HDF5 VFD | `HDF5_DRIVER=clio_vfd`, `HDF5_DRIVER_CONFIG="cache=1"` |
| `clio_vol` | + clio-core `dev` HDF5 VOL connector | `HDF5_VOL_CONNECTOR=clio` |

All three run **the same** netCDF-C binary against **the same** HDF5 build.
Only the HDF5 plugin environment differs, so a delta between series is
attributable to the CLIO adapter rather than to a different library build.
The workload is `tst_chunks3` from netcdf-c's `nc_perf`.

## Pieces

| File | Role |
| --- | --- |
| `../workflows/nc4-clio-benchmark.yml` | cron workflow (Linux): change gate, build, measure, publish |
| `../workflows/nc4-clio-benchmark-mac.yml` | the same on `macos-26`, publishing to `benchmarks_nc4_clio_mac/` |
| `../workflows/nc4-clio-benchmark-win.yml` | the same on `windows-2025`, publishing to `benchmarks_nc4_clio_win/` |
| `apply_win_nc_perf_shims.py` | supplies `getrusage` so the workload compiles with MSVC |
| `nc4_clio_bench.sh` | builds the three stacks and runs the variants (shared by CI and local runs) |
| `variant_summary.sh` | renders the per-variant outcome table for all three job summaries |
| `clio_runtime.yaml` | `clio_run` compose config used by both CLIO variants |
| `parse_nc4_clio_results.py` | `tst_chunks3` text → benchmark JSON, per variant |
| `combine_nc4_clio_results.py` | three variant JSONs → one suffixed github-action-benchmark payload |
| `create_nc4_clio_plots.py` | `data.js` → self-contained comparison page (`plots.html`) |

## The three platforms

All three run the same driver script and publish to **separate** gh-pages
directories (`benchmarks_nc4_clio/`, `benchmarks_nc4_clio_mac/`,
`benchmarks_nc4_clio_win/`). github-action-benchmark keys its history on the
benchmark name alone, so one shared directory would interleave the platforms
into a single line graph.

What differs, and why:

| | Linux | macOS | Windows |
| --- | --- | --- | --- |
| clio dependencies | `iowarp/deps-cpu` container | conda env from clio-core's `CI/ci-deps.sh` | vcpkg manifest (its `ci-windows.yml` route) |
| generator | single-config | single-config | multi-config MSVC — every `--build`/`--install` needs `--config Release` |
| adapter file | `libclio_vfd.so` | `libclio_vfd.dylib` | `clio_hdf5_vol.dll` in `bin/Release` |
| ABI gate | `ldd` | `otool -L` + `LC_RPATH` (see below) | PATH order — DLLs bind by bare name, so the first `hdf5.dll` loaded wins |
| ELF support | `ON` | `OFF` — Linux-only | `OFF` |
| shm cleanup | sweeps `/dev/shm` | no-op | no-op |
| process control | `pkill`/`pgrep` | same | `taskkill`/`tasklist` |
| workload | stock `tst_chunks3` | stock | **patched** — nc_perf is POSIX-only (see below) |
| VFD adapter | must build; a failure is a regression | builds and measures (since clio-core PR #938) | target does not exist on `dev` (see below) |
| VOL adapter | must build; a failure is a regression | **broken upstream** — `st_mtim`/`clock_gettime` (clio-core PR #971) | **broken upstream** — same |

**netCDF-C's benchmarks do not build on Windows.** `tst_chunks3`'s timing
macros are built on `getrusage(2)`, and not one of nc_perf's 23 sources carries
a `_WIN32` guard — the suite is POSIX-only by construction, so there is no
portable substitute to switch to either. `apply_win_nc_perf_shims.py`
supplies `getrusage` on top of `GetProcessTimes`, which reports the same
user+kernel CPU time the POSIX platforms measure, so the numbers stay
comparable in kind. `ru_inblock`/`ru_oublock` have no Win32 equivalent and are
reported as zero; the timing macros read but never print them. The driver
applies it only to a checkout it cloned itself — never to a developer's own
tree — and fails loudly if the anchor is gone, since the workload cannot build
without it. It is worth upstreaming.

It injects the shim at an anchor rather than shipping a `.patch` because
`git apply` failed in CI twice, both times over line endings and neither time
over the change itself: Git on Windows checks sources out as CRLF
(`core.autocrlf=true`), so an LF patch's context could not match — and once the
sources were pinned to LF, the patch *file* came out of the hpf checkout as
CRLF and failed the other way. The injector normalises endings for matching,
preserves the file's own style on write, and carries no line numbers to go
stale when upstream edits the file for unrelated reasons.

**Where the CLIO VFD builds, and why Windows still has no series.** This used to
read "the VFD cannot be built off Linux", because clio-core kept
`add_subdirectory(vfd)` inside `if(CLIO_CORE_ENABLE_ELF)` and that option does
`pkg_check_modules(libelf REQUIRED libelf)`. That is no longer the gate:
[`df614075`](https://github.com/iowarp/clio-core/commit/df614075) (PR #938,
2026-08-06) moved it out of the ELF block, on the grounds that the VFD is a
plugin HDF5 `dlopen`s and never touches `real_api.h`. That left
`if(UNIX AND CLIO_CTE_ENABLE_VFD)`, which still shut Windows out;
[`ddc93622`](https://github.com/iowarp/clio-core/commit/ddc93622) (PR #1034,
2026-08-26) dropped the `UNIX` half too. The gate is now `CLIO_CTE_ENABLE_VFD`
alone, and the VFD is expected to compile and measure on all three platforms:

- **macOS.** `libclio_vfd.dylib` has been building on the macOS runner since
  2026-08-06; what kept the series off the dashboard afterwards was the run
  failing with the stale `HDF5_DRIVER_CONFIG` string, not the build.
- **Windows.** `adapter/vfd` builds `H5FDclio_compat_win.cc` for the Win32 file
  I/O and defines `H5_BUILT_AS_DYNAMIC_LIB` so `H5P_CLS_FILE_ACCESS_ID_g`
  resolves as a `dllimport` under MSVC — without it the link fails with LNK2019
  on that one symbol, functions being unaffected.

The Windows workflow therefore no longer passes
`--allow-adapter-build-failure`: a VFD that does not build there is a
regression, and fails the job as it does on Linux. macOS still passes it, for a
VOL that clio-core's own CI does not cover on that platform. When a variant is
dropped the job summary says *why* (`variant_status.tsv`, below), so a platform
gap does not look like a crash.

**Why the macOS ABI gate resolves the soname.** HDF5 stamps its install name as
`@rpath/libhdf5.<soversion>.dylib`, and dyld searches each `LC_RPATH` entry in
order *for that exact filename*. The conda env supplying clio's dependencies
always ships its own libhdf5, and its lib directory comes first — but as a
different release (`libhdf5.310.dylib` vs our develop `libhdf5.1000.dylib`) it
cannot shadow ours. Failing on "an earlier rpath contains some libhdf5" is
therefore a false positive; the gate resolves the actual soname, expanding
`@loader_path`, and fails only when the winning file is outside our prefix.

The script is bash-3.2 clean for this reason: macOS ships bash 3.2, so no
`local -n` namerefs and no `declare -A`. It also avoids GNU-only spellings —
`sed -u` (BSD: `-l`), `\x1b` in a sed regex (BSD matches it literally),
`find -perm -u+x`, and `timeout` (BSD: `gtimeout`, else a shell watchdog).

## Change gate

The workflow only benchmarks when one of the three upstream HEADs moved:
`HDFGroup/hdf5@develop`, `Unidata/netcdf-c@main`, `iowarp/clio-core@dev`. The
last measured triple is stored in `benchmarks_nc4_clio/last_run.json` on
gh-pages and compared at the start of each run. `workflow_dispatch` with
`force: true` overrides it.

Cache-hit heuristics were deliberately not used for this: a cache eviction is
not a source change, and it would trigger an hour-long rebuild for an identical
measurement.

## Running it locally

```bash
.github/scripts/nc4_clio_bench.sh \
  --hdf5-src   ~/hdf5      \
  --netcdf-src ~/netcdf-c  \
  --clio-src   ~/clio-core \
  --work-dir   /tmp/nc4-clio \
  --bench-args "6 64 16 64 16 64 16"

python3 .github/scripts/parse_nc4_clio_results.py \
  /tmp/nc4-clio/results/tst_chunks3_baseline.txt /tmp/base.json baseline
# ... same for clio_vfd / clio_vol, then combine + plot
```

Use `--clone` instead of the `--*-src` flags to fetch the sources. `--stages
build` / `--stages run` split the two phases so a rebuild is not needed to
re-measure.

## Things that are easy to get wrong

**The plugins must link the HDF5 the application links.** A VFD/VOL plugin is
`dlopen`'d into the process; built against a different `libhdf5` it either
fails to load or mismatches the VOL ABI, and HDF5 falls back to native
*silently* — which would make a CLIO series a duplicate of the baseline with
nothing in the log to say so. `nc4_clio_bench.sh` gates on `ldd` and fails the
build if either `.so` does not resolve `libhdf5` inside the benchmark's own
HDF5 prefix.

**The runtime needs the `clio_cte_filesystem` pool.** The VFD does its I/O
through the context-filesystem (CFS) chimod, not through the CTE core pool
directly. Without that pool composed, the first `H5Fcreate` blocks forever
while the runtime logs `ChiMod 'clio_cte_filesystem' not found`. It is a
runtime-loaded module, so nothing in the plugin's link graph pulls it in — the
build target list names `clio_cte_filesystem_runtime` explicitly.

**The VFD driver name is `clio_vfd`, not `clio`.** clio-core's
`adapter/vfd/README.md` says `HDF5_DRIVER=clio`; `H5FD_CLIO_NAME` in
`H5FDclio.h` says `clio_vfd`, and the header is what HDF5 matches against.

**`HDF5_DRIVER_CONFIG` is `key=value`, and a string the driver cannot parse
fails the open.** The VFD pulls the string off the FAPL with
`H5Pget_driver_config_str` and parses it with clio's shared grammar
(`adapter/clio_config_str.h`); unparseable input is rejected on purpose, so a
mistyped knob cannot be silently ignored. `cache=1` is the spelling; the
positional `"true 65536"` passed here before clio-core `6873b60a` (2026-08-10)
was ignored back then — the driver read no config string at all — and fails the
open now with *"no '=' (expected key=value)"*. Two things make that hard to see,
so budget for them: netCDF-C reports **any** `H5Fcreate` failure as `Permission denied` (it
`BAIL`s with a literal `EACCES` in `libhdf5/hdf5create.c`), and the driver's own
error message never reaches the printed stack because HDF5 2.3.0 runs driver
callbacks inside `H5_BEFORE_USER_CB`, leaving only `H5FD_open(): can't open
file`. The VFD README's "does not yet parse `HDF5_DRIVER_CONFIG`" is stale — as
with the driver name, believe the source.

**A variant that fails is dropped, not faked.** If a CLIO variant crashes or
exceeds `--run-timeout`, its result file is removed, the parse step emits an
empty series, and the surviving variants still publish. The workflow prints a
per-variant table to the job summary so a persistently missing series is
visible, and fails outright only if the *baseline* produced nothing.

**"No result" is four different things, and the summary has to say which.** The
driver records every variant's outcome, with a reason, in
`benchmark-results/variant_status.tsv` (`<variant>\t<status>\t<note>`, statuses
`measured`, `measured_no_exit`, `not_built`, `no_result`, `not_requested`), and
`variant_summary.sh` renders it into the job summary for all three platforms.
Before that, each workflow derived the table from "is the result file
non-empty?", so an adapter that does not exist on the platform (Windows VFD), one
that fails to compile (macOS VOL), and one that crashed at runtime all printed
the same warning — which is how the Windows VFD spent weeks looking like a
crashing adapter instead of an absent one. Rows are appended and the last row for
a variant wins; a run stage keeps the preceding build stage's `not_built` rows
and discards everything else, so a repeated `--stages run` cannot report a
variant it never touched.

**A variant that fails to *exit* is not a failed measurement.** `tst_chunks3`
prints 18 timing lines — 3 storage types × 2 operations × 3 access shapes,
whatever dimensions it was given — and does no work after the last one. A
process still alive past that point is wedged in teardown, which is exactly
where the CLIO VOL ends up (see below), and every number the dashboard plots is
already in the file. `run_variant` therefore keeps a result whose 18 lines are
all present even when the process exited non-zero, notes the unclean exit in the
file itself, and reports the variant in a separate "measured but killed because
they never exited" list. `exit_hang_watchdog` kills such a process
`--exit-grace` seconds (default 30) after its last timing line, so a teardown
hang costs half a minute instead of the whole `--run-timeout`.

**On Windows `run_variant` uses a self-contained poll loop, not the POSIX
`exit_hang_watchdog &` + `run_with_timeout … | sed | tee` pair.** The CLIO VOL
client, loaded into `tst_chunks3`, leaves a *detached* worker that inherited the
workload's handles and outlives it, and the runner then never reaps the killed
workload in a way `timeout`/`wait` observe. Either fact alone hangs the POSIX
path to the job's 360-minute limit: the detached orphan holds a live
`sed | tee` pipe open so it never reaches EOF, and even with the pipe removed any
`wait` on the workload blocks forever. That is what turned the Windows benchmark
into a daily 6-hour cancel the moment `clio_vol` began *building* there
(clio-core PR #971 landed the VOL portability fix on `dev`): 18 timings measured
in three seconds, then ~5.5 hours of a wait that never returns. Two things were
tried and did **not** fix it — `taskkill //F //T //IM` (the worker is detached,
so a tree kill misses it) and file-instead-of-pipe capture (removes one blocker,
but the `wait` still hangs). The loop that works launches the workload to a
file, polls `tasklist` and the result file for completion or the run-timeout,
and once it decides to stop the workload **breaks unconditionally without ever
waiting on it** — kill or no kill. An orphan left writing to a file is harmless,
the loop cannot run past `--run-timeout`, and a completed-but-unexited variant is
kept as `measured_no_exit`. Colors are stripped from the file after the run
instead of by the pipe's `sed`. (`bench_kill`/`clio_runtime_stop` still pass
`//T` as cheap hygiene.)

Getting this wrong is what the fix was for: the 2026-08-12 Linux run
([31577100886](https://github.com/hyoklee/hpf/actions/runs/31577100886))
measured all 18 `clio_vol` timings in 3 seconds, sat in teardown for the full
45-minute timeout, and then had its complete result file deleted —
`[warn] variant clio_vol failed (exit 124); discarding its result file`.

## Known upstream issues

**clio-core `dev` HDF5 VOL: `clio_file_specific` NULL-object dereference.**
`H5VL_FILE_IS_ACCESSIBLE` and `H5VL_FILE_DELETE` act on a filename rather than
an open file, so HDF5 passes `obj == NULL`. `clio_file_specific()` in
`context-transfer-engine/adapter/hdf5_vol/clio_vol.cc` casts and dereferences
it unconditionally. netCDF-4 calls `H5Fis_accessible` from `NC_infermodel` on
every `nc_create`/`nc_open`, so **the connector segfaults on the first
netCDF-4 call** and the `clio_vol` series cannot be measured until this is
fixed upstream. The fix mirrors `H5VLpassthru`: for those two op types, copy
the FAPL, `H5Pset_vol(..., H5VL_NATIVE, NULL)`, and forward with a NULL obj.
clio-core's own VOL compat suite does not catch this because h5py never calls
`H5Fis_accessible`.

**clio-core `dev` HDF5 VOL: does not compile on macOS or Windows.** The
coherence-stamp code added in `6873b60a` reads `st.st_mtim`
(`clio_vol.cc:822-823, 908-909`) and calls `clock_gettime(CLOCK_REALTIME, ...)`.
`st_mtim` is the POSIX-2008/glibc spelling: Darwin calls the same member
`st_mtimespec` and MSVC has no sub-second member at all, and MSVC has neither
`clock_gettime` nor `CLOCK_REALTIME`. So macOS fails with
`error: no member named 'st_mtim' in 'stat'` (×4) and Windows with the same four
plus `C2065: 'CLOCK_REALTIME': undeclared identifier`; the driver drops the
`clio_vol` variant and both dashboards have had no VOL series since 2026-08-10.
Fix submitted upstream as
[clio-core PR #971](https://github.com/iowarp/clio-core/pull/971) (a
`clio_stat_mtime()` helper for the three `struct stat` spellings,
`std::chrono::system_clock` for the wall clock, and a 1 s default stamp
granularity on Windows where mtime has one-second resolution). The series return
on their own once it lands on `dev` — nothing here needs to change, and patching
clio-core sources in this repo would make the numbers describe a tree nobody
ships.

**clio-core `dev` HDF5 VOL: the process cannot exit.** With the connector
selected, `tst_chunks3` produces every timing and then blocks forever in
`exit()`. The atexit ordering is the whole story: HDF5 registers
`H5_term_library` on the first HDF5 call, and the connector's first `H5Fcreate`
initialises the clio client *after* that, which registers clio's
`RuntimeManagerCleanupAtExit` second. atexit handlers run in reverse order, so
clio tears its client down first, and `H5_term_library` then closes the file
that HDF5 still holds open — through the connector, which issues a `DelBlobTask`
on a finalised client and waits for a reply that can never arrive:

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

The wait has no timeout, so nothing recovers it. Reproduced against clio-core
`dev` @ `a19a0356` with HDF5 `develop` and netCDF-C `main`. Reaching that atexit
close needs a file still in HDF5's id table when `main` returns, which
`tst_chunks3` leaves behind even though it calls `nc_close`; a program that
closes every HDF5 object itself exits normally, which is why clio-core's
h5py-based VOL compat suite does not see this.
The benchmark's own workaround is the completeness rule above — the numbers are
all produced before the hang, so the series survives.

**clio-core `dev` HDF5 VFD: contiguous slab writes are orders of magnitude
slower than sec2.** Measured locally at 32³, `contiguous write 32 32 1` took
3.5 s through the VFD versus ~0.1 ms native, and a 128³ run did not finish in
5 minutes. This is a real result worth tracking — it is the reason the default
`bench_args` are modest (`6 64 16 64 16 64 16`) and why each variant has its
own timeout.
