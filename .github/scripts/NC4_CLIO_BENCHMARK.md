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
| `nc4_clio_bench.sh` | builds the three stacks and runs the variants (shared by CI and local runs) |
| `clio_runtime.yaml` | `clio_run` compose config used by both CLIO variants |
| `parse_nc4_clio_results.py` | `tst_chunks3` text → benchmark JSON, per variant |
| `combine_nc4_clio_results.py` | three variant JSONs → one suffixed github-action-benchmark payload |
| `create_nc4_clio_plots.py` | `data.js` → self-contained comparison page (`plots.html`) |

## The two platforms

Linux and macOS run the same driver script and publish to **separate**
gh-pages directories (`benchmarks_nc4_clio/`, `benchmarks_nc4_clio_mac/`).
github-action-benchmark keys its history on the benchmark name alone, so one
shared directory would interleave the two platforms into a single line graph.

What differs on macOS, and why:

| | Linux | macOS |
| --- | --- | --- |
| clio dependencies | `iowarp/deps-cpu` container | conda env from clio-core's `CI/ci-deps.sh` (runners cannot use containers) |
| adapter suffix | `libclio_vfd.so` | `libclio_vfd.dylib` (`add_library(SHARED)`); HDF5's plugin scanner accepts both |
| ABI gate | `ldd` | `otool -L`, falling back to the `LC_RPATH` list because HDF5 stamps `@rpath/libhdf5.*.dylib` (see below) |
| ELF support | `CLIO_CORE_ENABLE_ELF=ON` | `OFF` — Linux-only |
| `ar` / `ranlib` | default | pinned to Xcode's; conda's `llvm-ranlib` aborts archiving (clio-core #797) |
| shm cleanup | sweeps `/dev/shm` | no-op — macOS POSIX shm objects are not files |
| VFD adapter | must build; a failure is a regression | not available — see below; `--allow-adapter-build-failure` drops the series |

**The CLIO VFD cannot be built on macOS.** clio-core puts `add_subdirectory(vfd)`
inside `if(CLIO_CORE_ENABLE_ELF)` in `context-transfer-engine/adapter/CMakeLists.txt`,
and that option does `pkg_check_modules(libelf REQUIRED libelf)` — so asking for
it on Mach-O fails at configure time. The VFD itself never touches `real_api.h`
(it is a plugin, not an interceptor), so the gate looks incidental rather than
intended, but working around it would mean installing an ELF library on macOS to
satisfy a CMake condition. The workflow instead attempts the target, gets
`No rule to make target 'clio_vfd'`, drops the variant with a warning, and
publishes the other two. If upstream ungates it, the series appears on its own.

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

**clio-core `dev` HDF5 VFD: contiguous slab writes are orders of magnitude
slower than sec2.** Measured locally at 32³, `contiguous write 32 32 1` took
3.5 s through the VFD versus ~0.1 ms native, and a 128³ run did not finish in
5 minutes. This is a real result worth tracking — it is the reason the default
`bench_args` are modest (`6 64 16 64 16 64 16`) and why each variant has its
own timeout.
