# NetCDF-4 CLIO Performance Benchmark

Compares three NetCDF-4 performance profiles and publishes the history to
`benchmarks_nc4_clio/` on the `gh-pages` branch.

| Series | Stack | How it is selected |
| --- | --- | --- |
| `baseline` | netCDF-C `main` + HDF5 `develop` | nothing set (sec2 VFD, native VOL) |
| `clio_vfd` | + clio-core `dev` HDF5 VFD | `HDF5_DRIVER=clio_vfd`, `HDF5_DRIVER_CONFIG="true 65536"` |
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
| VFD adapter | must build; a failure is a regression | not available (ELF gate) | not available (ELF gate) |

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

**The CLIO VFD cannot be built off Linux.** clio-core puts `add_subdirectory(vfd)`
inside `if(CLIO_CORE_ENABLE_ELF)` in `context-transfer-engine/adapter/CMakeLists.txt`,
and that option does `pkg_check_modules(libelf REQUIRED libelf)` — so asking for
it on Mach-O or Windows fails at configure time — and clio-core's own
`ci-adapters.yml` sets `CLIO_CTE_ENABLE_VFD=OFF` on Windows for the same reason.
The VFD itself never touches `real_api.h` (it is a plugin, not an interceptor),
so the gate looks incidental rather than intended, but working around it would
mean installing an ELF library on those platforms to satisfy a CMake condition.
The workflows instead attempt the target, get `No rule to make target
'clio_vfd'`, drop the variant with a warning, and publish the rest. If upstream
ungates it, the series appears on its own.

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

**A variant that fails is dropped, not faked.** If a CLIO variant crashes or
exceeds `--run-timeout`, its result file is removed, the parse step emits an
empty series, and the surviving variants still publish. The workflow prints a
per-variant table to the job summary so a persistently missing series is
visible, and fails outright only if the *baseline* produced nothing.

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
