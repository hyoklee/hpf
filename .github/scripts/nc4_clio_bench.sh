#!/usr/bin/env bash
#
# nc4_clio_bench.sh -- build and run the three NetCDF-4 performance variants
# that the "NetCDF-4 CLIO Performance Benchmark" workflow compares:
#
#   baseline   netCDF-C main  + HDF5 develop                     (sec2 VFD, native VOL)
#   clio_vfd   netCDF-C main  + HDF5 develop + clio-core dev VFD (HDF5_DRIVER=clio_vfd)
#   clio_vol   netCDF-C main  + HDF5 develop + clio-core dev VOL (HDF5_VOL_CONNECTOR=clio)
#
# All three run the SAME netCDF-C and HDF5 build. Only the HDF5 plugin
# environment differs, so a delta between the series is attributable to the
# CLIO adapter and not to a different library build. That is the whole point of
# the comparison, so do not "optimize" this into three separate netCDF builds.
#
# The script is the single source of truth shared by CI and local runs:
#   CI:    .github/workflows/nc4-clio-benchmark.yml calls it with --clone
#   local: .github/scripts/nc4_clio_bench.sh --hdf5-src ~/hdf5 --netcdf-src ~/netcdf-c \
#            --clio-src ~/clio-core --work-dir /tmp/nc4-clio
#
# Exit status is non-zero only for build failures. A variant whose *run* fails
# (e.g. the clio runtime could not start) is reported, skipped, and leaves no
# result file -- the parse step then simply emits no series for it rather than
# poisoning the history with a bogus number.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ----------------------------------------------------------------- defaults
WORK_DIR="${PWD}/nc4-clio-work"
RESULTS_DIR=""
HDF5_SRC=""
NETCDF_SRC=""
CLIO_SRC=""
CLONE=0
HDF5_REF="develop"
NETCDF_REF="main"
CLIO_REF="dev"
HDF5_REPO="https://github.com/HDFGroup/hdf5.git"
NETCDF_REPO="https://github.com/Unidata/netcdf-c.git"
CLIO_REPO="https://github.com/iowarp/clio-core.git"
# tst_chunks3 args: <deflate> <dim1> <chunk1> <dim2> <chunk2> <dim3> <chunk3>
BENCH_ARGS="6 512 64 512 64 512 64"
STAGES="build,run"
JOBS="$(nproc 2>/dev/null || echo 4)"
VARIANTS="baseline,clio_vfd,clio_vol"
RUN_TIMEOUT="45m"

usage() {
    sed -n '3,25p' "$0" | sed 's/^# \{0,1\}//'
    cat <<'EOF'

Options:
  --work-dir DIR      build tree root                (default: ./nc4-clio-work)
  --results-dir DIR   where *.txt results land       (default: <work-dir>/results)
  --hdf5-src DIR      existing HDF5 checkout         (else --clone)
  --netcdf-src DIR    existing netcdf-c checkout     (else --clone)
  --clio-src DIR      existing clio-core checkout    (else --clone)
  --clone             clone any source not supplied via --*-src
  --hdf5-ref REF      default: develop
  --netcdf-ref REF    default: main
  --clio-ref REF      default: dev
  --bench-args "..."  tst_chunks3 args (default: "6 512 64 512 64 512 64")
  --variants LIST     subset of baseline,clio_vfd,clio_vol
  --stages LIST       subset of build,run             (default: build,run)
  --jobs N            parallel build jobs
  --run-timeout DUR   per-variant timeout(1) duration (default: 45m)
EOF
}

while [ $# -gt 0 ]; do
    case "$1" in
        --work-dir)    WORK_DIR="$2"; shift 2 ;;
        --results-dir) RESULTS_DIR="$2"; shift 2 ;;
        --hdf5-src)    HDF5_SRC="$2"; shift 2 ;;
        --netcdf-src)  NETCDF_SRC="$2"; shift 2 ;;
        --clio-src)    CLIO_SRC="$2"; shift 2 ;;
        --clone)       CLONE=1; shift ;;
        --hdf5-ref)    HDF5_REF="$2"; shift 2 ;;
        --netcdf-ref)  NETCDF_REF="$2"; shift 2 ;;
        --clio-ref)    CLIO_REF="$2"; shift 2 ;;
        --bench-args)  BENCH_ARGS="$2"; shift 2 ;;
        --variants)    VARIANTS="$2"; shift 2 ;;
        --stages)      STAGES="$2"; shift 2 ;;
        --jobs)        JOBS="$2"; shift 2 ;;
        --run-timeout) RUN_TIMEOUT="$2"; shift 2 ;;
        -h|--help)     usage; exit 0 ;;
        *) echo "unknown option: $1" >&2; usage >&2; exit 2 ;;
    esac
done

mkdir -p "$WORK_DIR"
WORK_DIR="$(cd "$WORK_DIR" && pwd)"
RESULTS_DIR="${RESULTS_DIR:-$WORK_DIR/results}"
mkdir -p "$RESULTS_DIR"
RESULTS_DIR="$(cd "$RESULTS_DIR" && pwd)"

HDF5_INSTALL="$WORK_DIR/hdf5-install"
NETCDF_INSTALL="$WORK_DIR/netcdf-install"
CLIO_BUILD="$WORK_DIR/clio-build"
CLIO_BIN="$CLIO_BUILD/bin"

has_stage()   { case ",$STAGES,"   in *",$1,"*) return 0 ;; *) return 1 ;; esac; }
has_variant() { case ",$VARIANTS," in *",$1,"*) return 0 ;; *) return 1 ;; esac; }
log() { printf '\n\033[1;34m==> %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m[warn] %s\033[0m\n' "$*" >&2; }

# --------------------------------------------------------------- sources
resolve_src() {
    # resolve_src <var-name> <repo> <ref> <dest-name>
    local -n _dest="$1"; local repo="$2" ref="$3" name="$4"
    if [ -n "$_dest" ]; then
        _dest="$(cd "$_dest" && pwd)"
        echo "$name: using existing checkout $_dest"
        return
    fi
    [ "$CLONE" = 1 ] || { echo "no --${name}-src and no --clone" >&2; exit 2; }
    _dest="$WORK_DIR/$name-src"
    if [ ! -d "$_dest/.git" ]; then
        git clone --depth 1 --branch "$ref" "$repo" "$_dest"
    fi
    echo "$name: cloned $repo@$ref -> $_dest"
}

resolve_src HDF5_SRC   "$HDF5_REPO"   "$HDF5_REF"   hdf5
resolve_src NETCDF_SRC "$NETCDF_REPO" "$NETCDF_REF" netcdf
resolve_src CLIO_SRC   "$CLIO_REPO"   "$CLIO_REF"   clio

# Record what was ACTUALLY built. A branch can advance between the workflow
# resolving its HEAD and this script cloning it, so labelling the results with
# the earlier SHA would attribute a measurement to the wrong commit -- and the
# change-detection stamp would then skip the commit that was really measured.
SOURCES_JSON="$WORK_DIR/sources.json"
head_of() { git -C "$1" rev-parse HEAD 2>/dev/null || echo unknown; }
cat > "$SOURCES_JSON" <<EOF
{
  "hdf5_sha": "$(head_of "$HDF5_SRC")",
  "netcdf_sha": "$(head_of "$NETCDF_SRC")",
  "clio_sha": "$(head_of "$CLIO_SRC")"
}
EOF
echo "sources: $(tr -d '\n ' < "$SOURCES_JSON")"

# --------------------------------------------------------------- build
if has_stage build; then

log "Building HDF5 ($HDF5_REF) -> $HDF5_INSTALL"
# Shared libs are mandatory: a VOL connector / VFD plugin is dlopen'd into the
# application and must resolve against the *same* libhdf5.so the app links.
cmake -S "$HDF5_SRC" -B "$WORK_DIR/hdf5-build" \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX="$HDF5_INSTALL" \
      -DBUILD_SHARED_LIBS=ON \
      -DBUILD_STATIC_LIBS=OFF \
      -DHDF5_ENABLE_PARALLEL=OFF \
      -DHDF5_ENABLE_THREADSAFE=OFF \
      -DBUILD_TESTING=OFF \
      -DHDF5_BUILD_EXAMPLES=OFF \
      -DHDF5_BUILD_TOOLS=ON \
      -DHDF5_BUILD_HL_LIB=ON \
      -DHDF5_ENABLE_ZLIB_SUPPORT=ON \
      -DHDF5_ENABLE_Z_LIB_SUPPORT=ON \
      -DHDF5_ENABLE_SZIP_SUPPORT=OFF \
      >/dev/null
cmake --build "$WORK_DIR/hdf5-build" -j "$JOBS"
cmake --install "$WORK_DIR/hdf5-build" >/dev/null

log "Building netCDF-C ($NETCDF_REF) against HDF5 $HDF5_REF"
cmake -S "$NETCDF_SRC" -B "$WORK_DIR/netcdf-build" \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX="$NETCDF_INSTALL" \
      -DCMAKE_PREFIX_PATH="$HDF5_INSTALL" \
      -DHDF5_ROOT="$HDF5_INSTALL" \
      -DENABLE_HDF5=ON \
      -DUSE_PARALLEL=OFF -DHDF5_PARALLEL=OFF -DUSE_PARALLEL4=OFF \
      -DENABLE_PARALLEL4=OFF \
      -DENABLE_DAP=OFF \
      -DENABLE_LIBXML2=OFF \
      -DENABLE_NCZARR=OFF \
      -DENABLE_BYTERANGE=OFF \
      -DENABLE_PLUGINS=OFF \
      -DBUILD_UTILITIES=ON \
      -DBUILD_TESTING=ON \
      -DENABLE_BENCHMARKS=ON \
      >/dev/null
cmake --build "$WORK_DIR/netcdf-build" -j "$JOBS"
cmake --install "$WORK_DIR/netcdf-build" >/dev/null
cmake --build "$WORK_DIR/netcdf-build" --target tst_chunks3 -j "$JOBS"

if has_variant clio_vfd || has_variant clio_vol; then
    log "Building clio-core ($CLIO_REF) VFD + VOL against HDF5 $HDF5_REF"
    # Only the adapters and the runtime they need -- not CAE/CEE/fuse/python,
    # which roughly triples the build for no benefit to this benchmark.
    cmake -S "$CLIO_SRC" -B "$CLIO_BUILD" \
          -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_PREFIX_PATH="$HDF5_INSTALL" \
          -DHDF5_ROOT="$HDF5_INSTALL" \
          -DHDF5_DIR="$HDF5_INSTALL/cmake" \
          -DCLIO_CORE_ENABLE_RUNTIME=ON \
          -DCLIO_CORE_ENABLE_CTE=ON \
          -DCLIO_CORE_ENABLE_CAE=OFF \
          -DCLIO_CORE_ENABLE_CEE=OFF \
          -DCLIO_CORE_ENABLE_TESTS=OFF \
          -DCLIO_CORE_ENABLE_BENCHMARKS=OFF \
          -DCLIO_CORE_ENABLE_PYTHON=OFF \
          -DCLIO_CORE_ENABLE_CONDA=OFF \
          -DCLIO_CORE_ENABLE_ELF=ON \
          -DCLIO_CTE_ENABLE_POSIX_ADAPTER=ON \
          -DCLIO_CTE_ENABLE_STDIO_ADAPTER=ON \
          -DCLIO_CTE_ENABLE_VFD=ON \
          -DCLIO_CTE_ENABLE_HDF5_VOL=ON \
          -DCLIO_CTE_ENABLE_FUSE_ADAPTER=OFF \
          -DCLIO_CTE_ENABLE_ADIOS2_ADAPTER=OFF \
          -DCLIO_CTE_ENABLE_COMPRESS=OFF \
          -DCLIO_CORE_ENABLE_GRAY_SCOTT=OFF \
          -DCLIO_CTP_LOG_LEVEL=1
    # clio_cte_filesystem_runtime is the chimod the VFD's CFS client talks to.
    # It is a runtime-loaded module, so nothing in the link graph of clio_vfd
    # pulls it in -- omit it and the VFD hangs on its first H5Fcreate while the
    # runtime logs "ChiMod 'clio_cte_filesystem' not found".
    cmake --build "$CLIO_BUILD" -j "$JOBS" --target \
        clio_vfd clio_hdf5_vol clio_run \
        clio_cte_core_runtime clio_cte_filesystem_runtime \
        clio_bdev_runtime clio_admin_runtime

    # ABI gate. A VFD/VOL plugin linked against a *different* libhdf5 than the
    # application either fails to load or corrupts the VOL ABI, and HDF5's
    # plugin loader reports that as a silent fallback to native -- which would
    # make the CLIO series a duplicate of the baseline without anyone noticing.
    for so in "$CLIO_BIN/libclio_vfd.so" "$CLIO_BIN/libclio_hdf5_vol.so"; do
        [ -f "$so" ] || { echo "missing $so" >&2; exit 1; }
        linked="$(ldd "$so" | awk '/libhdf5/ {print $3; exit}')"
        echo "$(basename "$so") -> libhdf5: ${linked:-<none>}"
        case "$linked" in
            "$HDF5_INSTALL"/*) ;;
            *) echo "ERROR: $(basename "$so") does not link the HDF5 under $HDF5_INSTALL" >&2
               exit 1 ;;
        esac
    done
fi

fi  # stage build

# --------------------------------------------------------------- run
if ! has_stage run; then
    log "stages=$STAGES -- skipping run"
    exit 0
fi

TST_CHUNKS3="$(find "$WORK_DIR/netcdf-build" -name tst_chunks3 -type f -perm -u+x | head -1)"
[ -n "$TST_CHUNKS3" ] || { echo "tst_chunks3 not found under $WORK_DIR/netcdf-build" >&2; exit 1; }

RUN_DIR="$WORK_DIR/run"
export LD_LIBRARY_PATH="$HDF5_INSTALL/lib:$NETCDF_INSTALL/lib:$CLIO_BIN${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"

CLIO_CONF="$WORK_DIR/clio_runtime.yaml"
CLIO_RUN_LOG="$WORK_DIR/clio_run.log"

CLIO_RUNTIME_STARTED=0

# clio/chimaera shm segments outlive a killed runtime and make the next
# `clio_run start` fail with "Address already in use".
clio_shm_sweep() {
    find /dev/shm -maxdepth 1 \( -name 'chimaera*' -o -name 'clio*' \) -delete 2>/dev/null || true
}

clio_runtime_stop() {
    # Match the runtime we started by its full path. A bare `pkill -f clio_run`
    # would also kill a developer's unrelated clio_run on the same machine.
    pkill -f "^$CLIO_BIN/clio_run" >/dev/null 2>&1 || true
    [ "$CLIO_RUNTIME_STARTED" = 1 ] || return 0
    sleep 1
    clio_shm_sweep
    CLIO_RUNTIME_STARTED=0
}

clio_runtime_start() {
    clio_runtime_stop
    clio_shm_sweep
    CLIO_RUNTIME_STARTED=1
    cp "$SCRIPT_DIR/clio_runtime.yaml" "$CLIO_CONF"
    CLIO_SERVER_CONF="$CLIO_CONF" "$CLIO_BIN/clio_run" start >"$CLIO_RUN_LOG" 2>&1 &
    for _ in $(seq 1 60); do
        if grep -q "pools created successfully" "$CLIO_RUN_LOG" 2>/dev/null; then
            sleep 1
            echo "clio_run ready"
            return 0
        fi
        sleep 1
    done
    warn "clio_run did not become ready in 60s; tail of $CLIO_RUN_LOG:"
    tail -40 "$CLIO_RUN_LOG" >&2 || true
    return 1
}

trap clio_runtime_stop EXIT

# run_variant <variant> <header>
run_variant() {
    local variant="$1" header="$2"
    local out="$RESULTS_DIR/tst_chunks3_${variant}.txt"
    local dir="$RUN_DIR/$variant"

    rm -rf "$dir"; mkdir -p "$dir"

    log "Running variant: $variant"
    {
        echo "=== $header ==="
        echo "Variant: $variant"
        echo "Testing with deflate level: ${BENCH_ARGS%% *}"
        echo "tst_chunks3 args: $BENCH_ARGS"
    } >"$out"

    # A hung variant must not stall the whole job: the CLIO adapters block
    # indefinitely when the runtime is missing a pool they need, and that is a
    # failure to report, not a reason to burn the CI timeout.
    # The sed strips clio's ANSI color codes so the archived artifact is
    # readable; the parser ignores non-timing lines either way.
    # shellcheck disable=SC2086  # BENCH_ARGS is deliberately word-split
    if ( cd "$dir" && timeout "$RUN_TIMEOUT" "$TST_CHUNKS3" $BENCH_ARGS ) 2>&1 \
            | sed -u 's/\x1b\[[0-9;]*m//g' | tee -a "$out"; then
        echo "variant $variant: ok"
    else
        warn "variant $variant failed; discarding its result file"
        rm -f "$out"
        return 1
    fi
}

FAILED=""

if has_variant baseline; then
    ( unset HDF5_DRIVER HDF5_DRIVER_CONFIG HDF5_VOL_CONNECTOR HDF5_PLUGIN_PATH
      run_variant baseline "NetCDF-4 with HDF5 develop (baseline)" ) \
        || FAILED="$FAILED baseline"
fi

if has_variant clio_vfd; then
    if clio_runtime_start; then
        ( unset HDF5_VOL_CONNECTOR
          export HDF5_PLUGIN_PATH="$CLIO_BIN"
          # Driver name is H5FD_CLIO_NAME from clio-core's H5FDclio.h. The
          # adapter README still says "clio"; the header is authoritative.
          export HDF5_DRIVER="clio_vfd"
          # "<persistence> <page_size>": persist so the netCDF file on disk is
          # real and the comparison is apples-to-apples with the baseline.
          export HDF5_DRIVER_CONFIG="true 65536"
          export CLIO_SERVER_CONF="$CLIO_CONF"
          run_variant clio_vfd "NetCDF-4 with HDF5 develop + clio-core VFD" ) \
            || FAILED="$FAILED clio_vfd"
    else
        warn "skipping clio_vfd: runtime unavailable"
        FAILED="$FAILED clio_vfd"
    fi
    clio_runtime_stop
fi

if has_variant clio_vol; then
    if clio_runtime_start; then
        ( unset HDF5_DRIVER HDF5_DRIVER_CONFIG
          export HDF5_PLUGIN_PATH="$CLIO_BIN"
          export HDF5_VOL_CONNECTOR="clio"   # under-VOL defaults to native
          export CLIO_SERVER_CONF="$CLIO_CONF"
          run_variant clio_vol "NetCDF-4 with HDF5 develop + clio-core VOL" ) \
            || FAILED="$FAILED clio_vol"
    else
        warn "skipping clio_vol: runtime unavailable"
        FAILED="$FAILED clio_vol"
    fi
    clio_runtime_stop
fi

log "Results in $RESULTS_DIR"
ls -la "$RESULTS_DIR"
if [ -n "$FAILED" ]; then
    warn "variants that produced no result:$FAILED"
fi
exit 0
