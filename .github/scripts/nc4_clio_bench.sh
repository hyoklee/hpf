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
# poisoning the history with a bogus number. A variant that produced every
# timing and then failed to *exit* is a different case and keeps its result:
# see run_variant and exit_hang_watchdog.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ------------------------------------------------------------- portability
# The script runs on Linux CI (ubuntu container), macOS CI (macos-26), and
# Windows CI (windows-2025, under Git Bash). macOS ships bash 3.2, BSD
# userland, and no /dev/shm, so keep everything below bash-3.2 clean -- in
# particular no `local -n` namerefs and no `declare -A`.
OS="$(uname -s)"

# Windows is a bigger departure than macOS and gets its own flag rather than
# more `case "$OS"` arms: a multi-config MSVC generator, vcpkg instead of a
# distro's packages, DLLs that bind by bare filename, and no POSIX process
# tools. Everything gated on WIN below is one of those four.
case "$OS" in
    MINGW*|MSYS*|CYGWIN*) WIN=1 ;;
    *)                    WIN=0 ;;
esac

# CMake on Windows needs native (or mixed D:/foo) paths; bash here needs
# something it can stat. MSYS2 accepts the mixed form for both, so convert
# once at the boundary and use one spelling everywhere after that.
native_path() {
    if [ "$WIN" = 1 ]; then cygpath -m "$1"; else echo "$1"; fi
}

# The inverse, for anything that goes into a colon-separated list. PATH entries
# must NOT be the mixed form: bash splits PATH on ':', so "D:/a/hpf" becomes the
# two entries "D" and "/a/hpf" and every lookup through it silently fails.
posix_path() {
    if [ "$WIN" = 1 ]; then cygpath -u "$1"; else echo "$1"; fi
}

# Git on Windows defaults to core.autocrlf=true, which checks the sources out
# with CRLF endings. Nothing here depends on that any more (the nc_perf shims
# are injected by a script that handles either), but keeping the trees LF makes
# them identical to the other platforms' and keeps diffs readable. MSVC is
# perfectly happy compiling LF sources.
GIT_CLONE_OPTS=""
if [ "$WIN" = 1 ]; then
    GIT_CLONE_OPTS="-c core.autocrlf=false -c core.eol=lf"
fi

# Extra -D flags every cmake configure below gets. On macOS the conda env that
# supplies clio's dependencies is active for the whole build, which puts
# conda's llvm-tools on PATH; CMake then detects llvm-ranlib, which cannot load
# its own runtime dylib and aborts static archiving intermittently (clio-core
# hit this in their issue #797). Xcode's ar/ranlib have no such dependency and
# are correct here -- nothing in this build produces LTO/bitcode archives.
CMAKE_TOOL_OPTS=""
# Visual Studio is a multi-config generator: the configuration is chosen at
# build time, not configure time, so every --build and --install needs it.
CMAKE_CONFIG_OPTS=""
CMAKE_BUILD_OPTS=""
# Windows has no system zlib, which HDF5 (deflate filter) and netCDF-C both
# require -- and the benchmark runs at deflate 6, so building without it would
# silently drop a third of the series. vcpkg is already needed for clio-core's
# dependency set, so it supplies zlib too; the workflow installs it.
ZLIB_OPTS=""
VCPKG_INSTALLED=""

case "$OS" in
    MINGW*|MSYS*|CYGWIN*)
        NCPU="${NUMBER_OF_PROCESSORS:-4}"
        DSO_EXT="dll"
        SED_UNBUF="-u"   # Git Bash ships GNU sed
        CMAKE_CONFIG_OPTS="-A x64"
        CMAKE_BUILD_OPTS="--config Release"
        if [ -n "${VCPKG_INSTALLATION_ROOT:-}" ]; then
            VCPKG_INSTALLED="$(cygpath -m "$VCPKG_INSTALLATION_ROOT")/installed/x64-windows"
            ZLIB_OPTS="-DZLIB_ROOT=$VCPKG_INSTALLED -DZLIB_USE_EXTERNAL=OFF"
        fi
        ;;
    Darwin)
        NCPU="$(sysctl -n hw.ncpu 2>/dev/null || echo 4)"
        CMAKE_TOOL_OPTS="-DCMAKE_AR=$(xcrun -f ar 2>/dev/null || echo /usr/bin/ar)"
        CMAKE_TOOL_OPTS="$CMAKE_TOOL_OPTS -DCMAKE_RANLIB=$(xcrun -f ranlib 2>/dev/null || echo /usr/bin/ranlib)"
        # CMake builds clio's adapters with add_library(SHARED), which is
        # .dylib on Apple. HDF5's plugin scanner accepts both suffixes
        # (H5PLpath.c matches ".so" or ".dylib"), so only the path this script
        # checks has to change.
        DSO_EXT="dylib"
        # BSD sed spells GNU's -u (unbuffered) as -l (line-buffered).
        SED_UNBUF="-l"
        ;;
    *)
        NCPU="$(nproc 2>/dev/null || echo 4)"
        DSO_EXT="so"
        SED_UNBUF="-u"
        ;;
esac

# coreutils timeout(1) is not in the macOS base system; Homebrew installs it as
# gtimeout. Fall back to a watchdog so a local mac run without coreutils still
# gets hang protection -- an adapter that blocks forever is a result this
# benchmark has to report, not a reason to burn the job's whole time budget.
# A literal ESC byte: `\x1b` in a sed regex is a GNU extension that BSD sed
# would match as the three characters "x1b", leaving the color codes in place.
ESC="$(printf '\033')"

TIMEOUT_BIN=""
if [ "$WIN" = 1 ]; then
    # NOT `command -v timeout`: on Windows that resolves to System32\timeout.exe,
    # which is an interactive "pause for N seconds" command and would silently
    # sleep instead of bounding the benchmark. Only the coreutils one will do.
    [ -x /usr/bin/timeout ] && TIMEOUT_BIN="/usr/bin/timeout"
elif command -v timeout >/dev/null 2>&1; then
    TIMEOUT_BIN="timeout"
elif command -v gtimeout >/dev/null 2>&1; then
    TIMEOUT_BIN="gtimeout"
fi

# duration_seconds 45m -> 2700. Accepts a bare number (seconds) or Ns/Nm/Nh.
duration_seconds() {
    case "$1" in
        *h) echo $(( ${1%h} * 3600 )) ;;
        *m) echo $(( ${1%m} * 60 )) ;;
        *s) echo "${1%s}" ;;
        *)  echo "$1" ;;
    esac
}

run_with_timeout() {
    # run_with_timeout <duration> <cmd> [args...]
    local dur="$1"; shift
    if [ -n "$TIMEOUT_BIN" ]; then
        "$TIMEOUT_BIN" "$dur" "$@"
        return $?
    fi
    local secs pid watchdog rc=0
    secs="$(duration_seconds "$dur")"
    "$@" &
    pid=$!
    ( sleep "$secs"; kill -TERM "$pid" 2>/dev/null || true
      sleep 10;      kill -KILL "$pid" 2>/dev/null || true ) >/dev/null 2>&1 &
    watchdog=$!
    wait "$pid" || rc=$?
    kill "$watchdog" 2>/dev/null || true
    return $rc
}

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
JOBS="$NCPU"
VARIANTS="baseline,clio_vfd,clio_vol"
RUN_TIMEOUT="45m"
# How long a variant may take to *exit* after it has printed its last timing
# line. Nothing is measured past that point -- the only thing left is process
# teardown -- so a process still alive after this has wedged in teardown and is
# killed, keeping the numbers it already produced (see run_variant).
EXIT_GRACE="30"
# clio-core's own CI builds the VFD adapter on Linux only (ci-vfd.yml is
# ubuntu-only; the macOS job in ci-adapters.yml covers just the VOL). Where an
# adapter is not expected to build, --allow-adapter-build-failure demotes its
# build failure to a dropped variant instead of failing the whole run.
ALLOW_ADAPTER_BUILD_FAILURE=0
# Variants dropped because their adapter did not compile (see build_adapter).
UNBUILDABLE=""

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
  --exit-grace SECS   seconds a variant may take to exit after its last
                      timing line before it is killed (default: 30)
  --allow-adapter-build-failure
                      a CLIO adapter that fails to compile drops its variant
                      instead of failing the run (for platforms where the
                      adapter is not supported upstream)
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
        --exit-grace)  EXIT_GRACE="$2"; shift 2 ;;
        --allow-adapter-build-failure) ALLOW_ADAPTER_BUILD_FAILURE=1; shift ;;
        -h|--help)     usage; exit 0 ;;
        *) echo "unknown option: $1" >&2; usage >&2; exit 2 ;;
    esac
done

# Plain seconds, not a timeout(1)-style duration: exit_hang_watchdog counts with
# it, and a "30s" here would fail that comparison inside a background subshell,
# silently leaving the run with no hang protection at all.
case "$EXIT_GRACE" in
    ''|*[!0-9]*) echo "--exit-grace takes whole seconds, got: $EXIT_GRACE" >&2; exit 2 ;;
esac

mkdir -p "$WORK_DIR"
WORK_DIR="$(native_path "$(cd "$WORK_DIR" && pwd)")"
RESULTS_DIR="${RESULTS_DIR:-$WORK_DIR/results}"
mkdir -p "$RESULTS_DIR"
RESULTS_DIR="$(native_path "$(cd "$RESULTS_DIR" && pwd)")"

HDF5_INSTALL="$WORK_DIR/hdf5-install"
NETCDF_INSTALL="$WORK_DIR/netcdf-install"
CLIO_BUILD="$WORK_DIR/clio-build"
CLIO_BIN="$CLIO_BUILD/bin"

# ------------------------------------------------------- per-variant status
# Why a series is missing is knowledge this script has and the workflow's job
# summary does not: "the adapter does not build on this platform" and "it built,
# ran, and crashed" both leave no result file, and reporting them as one line
# ("no result (not built, crashed, or timed out)") is how a platform gap and a
# regression end up looking identical on the dashboard. Record the outcome here,
# at the point that knows it, and let the summary render it.
#
#   <variant>\t<status>\t<note>
#
# status is one of: measured | measured_no_exit | not_built | no_result |
# not_requested. note is free text and may be empty.
STATUS_FILE="$RESULTS_DIR/variant_status.tsv"

# set_variant_status <variant> <status> [note]
# Appended, not rewritten: run_variant runs in a subshell (see record_variant),
# so a shell variable would not survive. Readers take the LAST row for a
# variant, which makes a later, better-informed row win.
set_variant_status() {
    printf '%s\t%s\t%s\n' "$1" "$2" "${3:-}" >>"$STATUS_FILE"
}

# Where the built plugins actually are. A multi-config generator would put them
# in bin/<config>, but clio-core pins RUNTIME_OUTPUT_DIRECTORY to bin/, so on
# Windows the DLLs land in bin/ while only the import libraries go to
# bin/Release. Both layouts exist in the wild, so locate the plugin instead of
# assuming either.
resolve_clio_bin() {
    [ "$WIN" = 1 ] || return 0
    local cand
    for cand in $(find "$CLIO_BUILD/bin" -maxdepth 2 \
                       \( -name clio_hdf5_vol.dll -o -name clio_vfd.dll \) \
                       2>/dev/null); do
        CLIO_BIN="$(dirname "$cand")"
        return 0
    done
}

has_stage()   { case ",$STAGES,"   in *",$1,"*) return 0 ;; *) return 1 ;; esac; }
has_variant() { case ",$VARIANTS," in *",$1,"*) return 0 ;; *) return 1 ;; esac; }
log() { printf '\n\033[1;34m==> %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m[warn] %s\033[0m\n' "$*" >&2; }

# --------------------------------------------------------------- sources
# Prints the resolved source directory on stdout; progress goes to stderr.
# (A `local -n` nameref would read better, but macOS bash is 3.2.)
resolve_src() {
    # resolve_src <current-value> <repo> <ref> <dest-name>
    local cur="$1" repo="$2" ref="$3" name="$4" dest
    if [ -n "$cur" ]; then
        dest="$(native_path "$(cd "$cur" && pwd)")"
        echo "$name: using existing checkout $dest" >&2
        echo "$dest"
        return
    fi
    [ "$CLONE" = 1 ] || { echo "no --${name}-src and no --clone" >&2; exit 2; }
    dest="$WORK_DIR/$name-src"
    if [ ! -d "$dest/.git" ]; then
        # shellcheck disable=SC2086  # GIT_CLONE_OPTS is a deliberate word-split
        git $GIT_CLONE_OPTS clone --depth 1 --branch "$ref" "$repo" "$dest" >&2
    fi
    echo "$name: cloned $repo@$ref -> $dest" >&2
    echo "$dest"
}

HDF5_SRC="$(resolve_src   "$HDF5_SRC"   "$HDF5_REPO"   "$HDF5_REF"   hdf5)"
NETCDF_SRC="$(resolve_src "$NETCDF_SRC" "$NETCDF_REPO" "$NETCDF_REF" netcdf)"
CLIO_SRC="$(resolve_src   "$CLIO_SRC"   "$CLIO_REPO"   "$CLIO_REF"   clio)"

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

# A build starts a fresh accounting. `--stages run` on its own does NOT truncate,
# so the not_built rows from a preceding `--stages build` survive into the run.
: >"$STATUS_FILE"

log "Building HDF5 ($HDF5_REF) -> $HDF5_INSTALL"
# Shared libs are mandatory: a VOL connector / VFD plugin is dlopen'd into the
# application and must resolve against the *same* libhdf5.so the app links.
# shellcheck disable=SC2086  # the *_OPTS vars are a deliberate word-split
cmake -S "$HDF5_SRC" -B "$WORK_DIR/hdf5-build" \
      $CMAKE_TOOL_OPTS $CMAKE_CONFIG_OPTS $ZLIB_OPTS \
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
# shellcheck disable=SC2086  # CMAKE_BUILD_OPTS is a deliberate word-split
cmake --build "$WORK_DIR/hdf5-build" -j "$JOBS" $CMAKE_BUILD_OPTS
# shellcheck disable=SC2086
cmake --install "$WORK_DIR/hdf5-build" $CMAKE_BUILD_OPTS >/dev/null

# nc_perf is POSIX-only: tst_chunks3's timing macros are built on getrusage(2),
# which MSVC does not have, so the benchmark workload cannot be compiled on
# Windows as it stands. Supply the shim before configuring. Only ever applied
# to a checkout this script cloned itself -- silently rewriting a developer's
# own tree would be a nasty surprise.
if [ "$WIN" = 1 ]; then
    case "$NETCDF_SRC" in
        "$WORK_DIR"/*)
            PY=python3
            command -v python3 >/dev/null 2>&1 || PY=python
            "$PY" "$SCRIPT_DIR/apply_win_nc_perf_shims.py" "$NETCDF_SRC"
            ;;
        *)  warn "netcdf-c checkout was not cloned by this script; leaving it alone."
            warn "tst_chunks3 will not compile on Windows without the getrusage shim." ;;
    esac
fi

log "Building netCDF-C ($NETCDF_REF) against HDF5 $HDF5_REF"
# netCDF-C generates libsrc/attr.c and friends from .m4 sources, and there is no
# m4 in a stock Windows toolchain. Pre-seeding the cache variable satisfies
# find_program(NC_M4 ...) without putting the whole MSYS2 bin directory on PATH,
# where its link.exe would shadow MSVC's linker.
NETCDF_EXTRA_OPTS=""
if [ -n "${NC_M4:-}" ]; then
    NETCDF_EXTRA_OPTS="-DNC_M4=$NC_M4"
    echo "netcdf-c: using m4 at $NC_M4"
fi
# shellcheck disable=SC2086  # the *_OPTS vars are a deliberate word-split
cmake -S "$NETCDF_SRC" -B "$WORK_DIR/netcdf-build" \
      $CMAKE_TOOL_OPTS $CMAKE_CONFIG_OPTS $ZLIB_OPTS $NETCDF_EXTRA_OPTS \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX="$NETCDF_INSTALL" \
      -DCMAKE_PREFIX_PATH="$HDF5_INSTALL${VCPKG_INSTALLED:+;$VCPKG_INSTALLED}" \
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
if [ "$WIN" = 1 ]; then
    # Only the library and the one benchmark target. Building everything would
    # drag in the rest of nc_perf -- bm_file, tst_ar4*, tst_wrf_reads and the
    # rest all include <sys/time.h> or <unistd.h> unguarded and none of them is
    # needed here -- and the utilities and test suite besides. Skipping the
    # install step follows from that: its rules cover binaries never built, so
    # the run stage takes netcdf.dll from the build tree instead.
    # shellcheck disable=SC2086  # CMAKE_BUILD_OPTS is a deliberate word-split
    cmake --build "$WORK_DIR/netcdf-build" --target netcdf -j "$JOBS" $CMAKE_BUILD_OPTS
    # shellcheck disable=SC2086
    cmake --build "$WORK_DIR/netcdf-build" --target tst_chunks3 -j "$JOBS" $CMAKE_BUILD_OPTS
else
    # shellcheck disable=SC2086  # CMAKE_BUILD_OPTS is a deliberate word-split
    cmake --build "$WORK_DIR/netcdf-build" -j "$JOBS" $CMAKE_BUILD_OPTS
    # shellcheck disable=SC2086
    cmake --install "$WORK_DIR/netcdf-build" $CMAKE_BUILD_OPTS >/dev/null
    # shellcheck disable=SC2086
    cmake --build "$WORK_DIR/netcdf-build" --target tst_chunks3 -j "$JOBS" $CMAKE_BUILD_OPTS
fi

if has_variant clio_vfd || has_variant clio_vol; then
    log "Building clio-core ($CLIO_REF) VFD + VOL against HDF5 $HDF5_REF"

    # Our HDF5 must win over any other one on the prefix path, but the rest of
    # the path has to survive: on macOS clio's dependencies (thallium, mercury,
    # argobots, cereal, yaml-cpp, ...) come from the conda env that
    # CI/ci-deps.sh creates, and the workflow passes that in through the
    # environment. A bare -DCMAKE_PREFIX_PATH="$HDF5_INSTALL" would override it
    # and the configure step would fail to find them.
    # CMAKE_PREFIX_PATH is a ';'-separated CMake list as a -D value but a
    # ':'-separated path list as an environment variable, so the ambient value
    # has to be converted rather than concatenated.
    CLIO_PREFIX_PATH="$HDF5_INSTALL"
    if [ -n "${CMAKE_PREFIX_PATH:-}" ]; then
        CLIO_PREFIX_PATH="$CLIO_PREFIX_PATH;$(echo "$CMAKE_PREFIX_PATH" | tr ':' ';')"
    fi

    # CLIO_CORE_ENABLE_ELF is Linux-only (it does pkg_check_modules(libelf
    # REQUIRED)) and it used to gate the VFD too, but no longer: clio-core
    # df614075 (2026-08-06, PR #938) moved add_subdirectory(vfd) out of the ELF
    # block to `if(UNIX AND CLIO_CTE_ENABLE_VFD)`, because the VFD is a plugin
    # HDF5 dlopen's and never touches real_api.h. Consequences per platform:
    #   Linux   -- VFD and VOL both build; a failure is a regression.
    #   macOS   -- UNIX, so the VFD builds here now. Do not "fix" a macOS VFD
    #              failure by disabling the variant; it is expected to measure.
    #   Windows -- not UNIX, so the target does not exist and MSBuild reports
    #              "MSB1009: Project file does not exist. Switch:
    #              clio_vfd.vcxproj". The port itself is written and merged, but
    #              onto the fs-descriptor-windows branch (PR #950), which is not
    #              an ancestor of dev or main -- so a dev build cannot have it.
    #              probe-clio-vfd-windows.yml runs that branch on demand;
    #              nothing publishes from it. The variant reappears here by
    #              itself once the port reaches dev.
    # --allow-adapter-build-failure is what turns a missing target into a
    # dropped variant instead of a failed job (mac and Windows pass it).
    # The rest mirrors what clio-core's own ci-macos.yml / ci-adapters.yml do.
    if [ "$WIN" = 1 ]; then
        # vcpkg supplies zeromq/yaml-cpp/cereal/msgpack (and an hdf5 we must not
        # let win -- see the ABI gate below). The manifest and overlay port live
        # in the clio checkout, matching clio-core's ci-windows.yml.
        CLIO_PLATFORM_OPTS="-DCLIO_CORE_ENABLE_ELF=OFF -DCLIO_CORE_ENABLE_CONDA=OFF"
        CLIO_PLATFORM_OPTS="$CLIO_PLATFORM_OPTS -DCLIO_CORE_ENABLE_RPATH=OFF"
        CLIO_PLATFORM_OPTS="$CLIO_PLATFORM_OPTS -DCLIO_CORE_ENABLE_ZMQ=ON -DCLIO_CORE_ENABLE_CEREAL=ON"
        CLIO_PLATFORM_OPTS="$CLIO_PLATFORM_OPTS -DVCPKG_TARGET_TRIPLET=x64-windows"
        CLIO_PLATFORM_OPTS="$CLIO_PLATFORM_OPTS -DVCPKG_MANIFEST_DIR=$CLIO_SRC/installers/vcpkg"
        CLIO_PLATFORM_OPTS="$CLIO_PLATFORM_OPTS -DVCPKG_OVERLAY_PORTS=$CLIO_SRC/installers/vcpkg/overlay-ports"
        # vcpkg's per-target applocal DLL copy races itself and Defender on
        # these runners (clio-core #848); the run step puts the vcpkg bin dir
        # on PATH instead, so nothing needs copying.
        CLIO_PLATFORM_OPTS="$CLIO_PLATFORM_OPTS -DVCPKG_APPLOCAL_DEPS=OFF"
        if [ -n "${VCPKG_INSTALLATION_ROOT:-}" ]; then
            CLIO_PLATFORM_OPTS="$CLIO_PLATFORM_OPTS -DCMAKE_TOOLCHAIN_FILE=$(native_path "$VCPKG_INSTALLATION_ROOT")/scripts/buildsystems/vcpkg.cmake"
        else
            echo "ERROR: VCPKG_INSTALLATION_ROOT is unset; clio-core needs vcpkg on Windows" >&2
            exit 1
        fi
    elif [ "$OS" = Darwin ]; then
        CLIO_PLATFORM_OPTS="-DCLIO_CORE_ENABLE_ELF=OFF -DCLIO_CORE_ENABLE_CONDA=ON"
    else
        CLIO_PLATFORM_OPTS="-DCLIO_CORE_ENABLE_ELF=ON -DCLIO_CORE_ENABLE_CONDA=OFF"
    fi

    # Only the adapters and the runtime they need -- not CAE/CEE/fuse/python,
    # which roughly triples the build for no benefit to this benchmark.
    # shellcheck disable=SC2086  # the *_OPTS vars are a deliberate word-split
    cmake -S "$CLIO_SRC" -B "$CLIO_BUILD" \
          -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_PREFIX_PATH="$CLIO_PREFIX_PATH" \
          $CMAKE_TOOL_OPTS $CMAKE_CONFIG_OPTS \
          $CLIO_PLATFORM_OPTS \
          -DHDF5_ROOT="$HDF5_INSTALL" \
          -DHDF5_DIR="$HDF5_INSTALL/cmake" \
          -DCLIO_CORE_ENABLE_RUNTIME=ON \
          -DCLIO_CORE_ENABLE_CTE=ON \
          -DCLIO_CORE_ENABLE_CAE=OFF \
          -DCLIO_CORE_ENABLE_CEE=OFF \
          -DCLIO_CORE_ENABLE_TESTS=OFF \
          -DCLIO_CORE_ENABLE_BENCHMARKS=OFF \
          -DCLIO_CORE_ENABLE_PYTHON=OFF \
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
    # shellcheck disable=SC2086  # CMAKE_BUILD_OPTS is a deliberate word-split
    cmake --build "$CLIO_BUILD" -j "$JOBS" $CMAKE_BUILD_OPTS --target \
        clio_run clio_cte_core_runtime clio_cte_filesystem_runtime \
        clio_bdev_runtime clio_admin_runtime

    # The adapters are built one target at a time so that an adapter which does
    # not compile on this platform can be dropped on its own, leaving the other
    # variants measurable. Without --allow-adapter-build-failure this is just a
    # slower way to fail, which is what Linux CI wants: there, an adapter that
    # stops compiling is a regression, not a platform gap.
    build_adapter() {
        # build_adapter <variant> <cmake-target>
        local variant="$1" target="$2"
        has_variant "$variant" || return 0
        # shellcheck disable=SC2086  # CMAKE_BUILD_OPTS is a deliberate word-split
        if cmake --build "$CLIO_BUILD" -j "$JOBS" $CMAKE_BUILD_OPTS --target "$target"; then
            return 0
        fi
        [ "$ALLOW_ADAPTER_BUILD_FAILURE" = 1 ] || {
            echo "ERROR: target $target failed to build" >&2
            exit 1
        }
        warn "target $target failed to build; dropping the $variant variant"
        VARIANTS="$(echo ",$VARIANTS," | sed "s/,$variant,/,/" | sed 's/^,//; s/,$//')"
        UNBUILDABLE="$UNBUILDABLE $variant"
        # Name the known platform gap explicitly. Anything else is a real build
        # failure and the log is where to look, so do not guess at a cause.
        local note="target $target did not build on $OS"
        if [ "$WIN" = 1 ] && [ "$variant" = clio_vfd ]; then
            note="$note: clio-core gates the VFD on UNIX, and the Windows port (PR #950) is on the fs-descriptor-windows branch, not on $CLIO_REF"
        fi
        set_variant_status "$variant" not_built "$note"
    }
    build_adapter clio_vfd clio_vfd
    build_adapter clio_vol clio_hdf5_vol

    # ABI gate. A VFD/VOL plugin linked against a *different* libhdf5 than the
    # application either fails to load or corrupts the VOL ABI, and HDF5's
    # plugin loader reports that as a silent fallback to native -- which would
    # make the CLIO series a duplicate of the baseline without anyone noticing.
    # The risk is concrete on macOS, where the conda env that supplies clio's
    # dependencies also ships its own libhdf5.
    check_links_our_hdf5() {
        # check_links_our_hdf5 <dso>
        local dso="$1" linked base
        base="$(basename "$dso")"
        if [ "$WIN" = 1 ]; then
            # Windows binds imports by bare filename ("hdf5.dll") with no
            # soversion to tell two builds apart, and the first hdf5.dll loaded
            # into the process serves everyone. So the question is not what the
            # plugin recorded but what the loader will find first, and the only
            # copies that can win are one sitting beside the executable or
            # plugin, or the first one on PATH. vcpkg installs its own hdf5 for
            # clio's dependency set, so this is a live hazard, not a theoretical
            # one -- but it is decided by the run stage's PATH, which is set
            # further down and re-checked there.
            local stray
            stray="$(ls "$(dirname "$dso")"/hdf5.dll 2>/dev/null || true)"
            if [ -n "$stray" ]; then
                echo "ERROR: $stray sits beside $base and would shadow the HDF5 under $HDF5_INSTALL" >&2
                return 1
            fi
            echo "$base: no stray hdf5.dll in $(dirname "$dso") (load order is enforced by PATH at run time)"
            return 0
        fi
        if [ "$OS" = Darwin ]; then
            # otool reports the recorded install name. HDF5's CMake stamps
            # @rpath/libhdf5.*.dylib, which names no directory at all, so for
            # that case the check moves to the LC_RPATH list: our HDF5 has to
            # be on it, and no other directory holding a libhdf5 may come
            # first. An absolute install name is checked directly.
            linked="$(otool -L "$dso" | awk '/libhdf5/ {print $1; exit}')"
            echo "$base -> libhdf5: ${linked:-<none>}"
            case "$linked" in
                "$HDF5_INSTALL"/*) return 0 ;;
                @rpath/*)
                    # dyld resolves @rpath against each LC_RPATH entry in order,
                    # looking for that exact filename -- so the question is not
                    # "does an earlier rpath hold some libhdf5" (the conda env
                    # that supplies clio's dependencies always does) but "which
                    # directory holds libhdf5.<soversion>.dylib first". A
                    # different HDF5 release cannot shadow ours; a second copy
                    # of the same soversion can, and that is the case to catch.
                    local soname rp dsodir first="" resolved hdf5_real
                    soname="${linked#@rpath/}"
                    dsodir="$(cd "$(dirname "$dso")" && pwd -P)"
                    for rp in $(otool -l "$dso" \
                                | awk '/LC_RPATH/{f=1} f && $1=="path"{print $2; f=0}'); do
                        case "$rp" in
                            @loader_path*) rp="$dsodir${rp#@loader_path}" ;;
                            # Expanded against the loading program, which is not
                            # known here; the runtime ldd gate cannot see these.
                            @executable_path*) continue ;;
                        esac
                        if [ -e "$rp/$soname" ]; then first="$rp/$soname"; break; fi
                    done
                    if [ -z "$first" ]; then
                        echo "ERROR: $base needs $soname but no rpath entry provides it" >&2
                        return 1
                    fi
                    resolved="$(cd "$(dirname "$first")" && pwd -P)/$(basename "$first")"
                    hdf5_real="$(cd "$HDF5_INSTALL" && pwd -P)"
                    case "$resolved" in
                        "$hdf5_real"/*)
                            echo "$base resolves $soname -> $resolved"
                            return 0 ;;
                        *)  echo "ERROR: $base resolves $soname to $resolved, not the HDF5 under $HDF5_INSTALL" >&2
                            return 1 ;;
                    esac ;;
                "") echo "ERROR: $base does not link libhdf5 at all" >&2; return 1 ;;
                *)  echo "ERROR: $base links $linked, not the HDF5 under $HDF5_INSTALL" >&2
                    return 1 ;;
            esac
        fi
        linked="$(ldd "$dso" | awk '/libhdf5/ {print $3; exit}')"
        echo "$base -> libhdf5: ${linked:-<none>}"
        case "$linked" in
            "$HDF5_INSTALL"/*) return 0 ;;
            *) echo "ERROR: $base does not link the HDF5 under $HDF5_INSTALL" >&2
               return 1 ;;
        esac
    }

    resolve_clio_bin

    for pair in "clio_vfd:libclio_vfd:clio_vfd" "clio_vol:libclio_hdf5_vol:clio_hdf5_vol"; do
        variant="${pair%%:*}"; rest="${pair#*:}"
        libname="${rest%%:*}"; winname="${rest#*:}"
        has_variant "$variant" || continue
        # MSVC produces clio_vfd.dll, not libclio_vfd.dll.
        if [ "$WIN" = 1 ]; then dso="$CLIO_BIN/$winname.dll"; else dso="$CLIO_BIN/$libname.$DSO_EXT"; fi
        [ -f "$dso" ] || { echo "missing $dso" >&2; exit 1; }
        check_links_our_hdf5 "$dso" || exit 1
    done
fi

fi  # stage build

# --------------------------------------------------------------- run
if ! has_stage run; then
    log "stages=$STAGES -- skipping run"
    exit 0
fi

# Every run measures afresh, so drop the previous run's outcomes -- otherwise a
# repeated `--stages run` (or one narrowed with --variants) would leave last
# run's rows in place and the summary would report a variant this run never
# touched. not_built rows are the exception: they are build-stage facts, and a
# `--stages build` + `--stages run` pair must not lose them.
if [ -f "$STATUS_FILE" ]; then
    awk -F'\t' '$2 == "not_built"' "$STATUS_FILE" >"$STATUS_FILE.new" || true
    mv "$STATUS_FILE.new" "$STATUS_FILE"
fi

# Repeated from the build stage so that --stages run alone still finds them.
resolve_clio_bin

# `-perm -u+x` is not portable to BSD find; test executability in the shell.
TST_CHUNKS3=""
for cand in $(find "$WORK_DIR/netcdf-build" \( -name tst_chunks3 -o -name tst_chunks3.exe \) -type f); do
    if [ -x "$cand" ]; then TST_CHUNKS3="$cand"; break; fi
done
[ -n "$TST_CHUNKS3" ] || { echo "tst_chunks3 not found under $WORK_DIR/netcdf-build" >&2; exit 1; }

RUN_DIR="$WORK_DIR/run"
export LD_LIBRARY_PATH="$HDF5_INSTALL/lib:$NETCDF_INSTALL/lib:$CLIO_BIN${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
# macOS: SIP strips DYLD_* from the environment of protected binaries, so this
# does not survive into a child of /bin/bash and is only a belt-and-braces
# measure. What actually resolves the libraries there is the install RPATH that
# HDF5, netCDF-C, and clio-core all bake in ($ORIGIN / @loader_path relative).
if [ "$OS" = Darwin ]; then
    export DYLD_LIBRARY_PATH="$HDF5_INSTALL/lib:$NETCDF_INSTALL/lib:$CLIO_BIN${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
fi
if [ "$WIN" = 1 ]; then
    # There is no rpath on Windows: a DLL is found beside the executable, in
    # the system directories, or on PATH -- and the first hdf5.dll to load wins
    # for every module in the process. Our HDF5 therefore goes first, ahead of
    # the vcpkg tree that supplies clio's zeromq/yaml-cpp/msgpack (and its own
    # hdf5, which must not win). PATH here is a POSIX-style list; Git Bash
    # converts it for the child processes.
    VCPKG_BIN="$CLIO_BUILD/vcpkg_installed/x64-windows/bin"
    # netCDF-C is not installed on Windows (see the build stage), so netcdf.dll
    # comes from wherever the multi-config generator left it.
    NETCDF_DLL_DIR=""
    for cand in $(find "$WORK_DIR/netcdf-build" -name netcdf.dll -type f 2>/dev/null); do
        NETCDF_DLL_DIR="$(dirname "$cand")"; break
    done
    [ -n "$NETCDF_DLL_DIR" ] || warn "netcdf.dll not found under $WORK_DIR/netcdf-build"
    # zlib1.dll lives in the classic-mode vcpkg tree that supplied zlib to the
    # HDF5 and netCDF-C builds; the manifest tree above is clio's own. Every
    # entry goes in as a POSIX path -- see posix_path().
    WIN_DLL_PATH="$(posix_path "$HDF5_INSTALL/bin")"
    WIN_DLL_PATH="$WIN_DLL_PATH:$(posix_path "${NETCDF_DLL_DIR:-$NETCDF_INSTALL/bin}")"
    WIN_DLL_PATH="$WIN_DLL_PATH:$(posix_path "$CLIO_BIN")"
    WIN_DLL_PATH="$WIN_DLL_PATH:$(posix_path "$VCPKG_BIN")"
    [ -n "$VCPKG_INSTALLED" ] && WIN_DLL_PATH="$WIN_DLL_PATH:$(posix_path "$VCPKG_INSTALLED/bin")"
    export PATH="$WIN_DLL_PATH:$PATH"
    echo "DLL search path: $WIN_DLL_PATH"
    if [ -f "$HDF5_INSTALL/bin/hdf5.dll" ]; then
        echo "hdf5.dll resolved from: $HDF5_INSTALL/bin (ahead of $VCPKG_BIN)"
    else
        echo "ERROR: no hdf5.dll under $HDF5_INSTALL/bin; the vcpkg copy would win" >&2
        exit 1
    fi
fi

CLIO_CONF="$WORK_DIR/clio_runtime.yaml"
CLIO_RUN_LOG="$WORK_DIR/clio_run.log"

CLIO_RUNTIME_STARTED=0

# clio/chimaera shm segments outlive a killed runtime and make the next
# `clio_run start` fail with "Address already in use". macOS has no /dev/shm --
# its POSIX shm objects are not exposed in the filesystem, so there is nothing
# to sweep there and the runtime has to reclaim them itself.
clio_shm_sweep() {
    [ -d /dev/shm ] || return 0
    find /dev/shm -maxdepth 1 \( -name 'chimaera*' -o -name 'clio*' \) -delete 2>/dev/null || true
}

clio_runtime_alive() {
    if [ "$WIN" = 1 ]; then
        # tasklist has no command-line filter, so this matches the image name.
        # Unlike the POSIX branch it cannot tell our clio_run from someone
        # else's -- acceptable on a CI runner, which is the only place this
        # path runs, and noted so nobody ports it to a workstation unawares.
        tasklist //FI "IMAGENAME eq clio_run.exe" 2>/dev/null | grep -qi clio_run.exe
        return $?
    fi
    pgrep -f "^$CLIO_BIN/clio_run" >/dev/null 2>&1
}

clio_runtime_stop() {
    # Match the runtime we started by its full path. A bare `pkill -f clio_run`
    # would also kill a developer's unrelated clio_run on the same machine.
    if [ "$WIN" = 1 ]; then
        taskkill //F //IM clio_run.exe >/dev/null 2>&1 || true
    else
        pkill -f "^$CLIO_BIN/clio_run" >/dev/null 2>&1 || true
    fi
    [ "$CLIO_RUNTIME_STARTED" = 1 ] || return 0

    # SIGTERM shutdown is not instant -- the runtime reaps its shm segments and
    # only then releases the :9413 listener. A fixed `sleep 1` was not enough:
    # the next variant's clio_run reached ServerInitShm while the previous one
    # still held the port, died with "Could not start TCP server", and the
    # variant was dropped from the dashboard. Wait for the process to actually
    # be gone, escalating to SIGKILL, before sweeping and returning.
    local i
    for i in $(seq 1 60); do
        clio_runtime_alive || break
        sleep 1
    done
    if clio_runtime_alive; then
        warn "clio_run still alive 60s after SIGTERM; sending SIGKILL"
        pkill -9 -f "^$CLIO_BIN/clio_run" >/dev/null 2>&1 || true
        for i in $(seq 1 10); do
            clio_runtime_alive || break
            sleep 1
        done
    fi
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
        # A failed bind is terminal -- the runtime never retries -- so report it
        # now instead of waiting out the full readiness timeout.
        if grep -q "Could not start TCP server" "$CLIO_RUN_LOG" 2>/dev/null; then
            warn "clio_run could not bind its server port; tail of $CLIO_RUN_LOG:"
            tail -40 "$CLIO_RUN_LOG" >&2 || true
            return 1
        fi
        sleep 1
    done
    warn "clio_run did not become ready in 60s; tail of $CLIO_RUN_LOG:"
    tail -40 "$CLIO_RUN_LOG" >&2 || true
    return 1
}

trap clio_runtime_stop EXIT

# --------------------------------------------------- workload completeness
# tst_chunks3 prints exactly one timing line per (storage type x operation x
# access shape): 3 storage types (contiguous/chunked/compressed) x 2 operations
# (write/read) x 3 shapes = 18, whatever dimensions it was given. A result file
# holding all 18 is a complete measurement -- every number the dashboard plots
# is already in it -- regardless of how the process then ended.
EXPECTED_TIMINGS=18

# Count the timing lines a result file already holds. The pattern is the
# parser's (parse_nc4_clio_results.py): "<storage> <op> ... <value> sec ...".
timing_line_count() {
    # `grep -c` exits 1 on zero matches, which `set -e` would treat as fatal.
    grep -cE \
        '^[[:space:]]*(contiguous|chunked|compressed)[[:space:]]+(write|read)[[:space:]].*[[:space:]]sec' \
        "$1" 2>/dev/null || true
}

results_complete() {
    local n
    n="$(timing_line_count "$1")"
    [ "${n:-0}" -ge "$EXPECTED_TIMINGS" ]
}

bench_alive() {
    if [ "$WIN" = 1 ]; then
        tasklist //FI "IMAGENAME eq tst_chunks3.exe" 2>/dev/null \
            | grep -qi tst_chunks3.exe
        return $?
    fi
    # Anchored on the full path so it matches the workload and not the
    # `timeout 45m <path> ...` wrapper around it (same idiom as clio_run).
    pgrep -f "^$TST_CHUNKS3" >/dev/null 2>&1
}

bench_kill() {
    if [ "$WIN" = 1 ]; then
        taskkill //F //IM tst_chunks3.exe >/dev/null 2>&1 || true
        return 0
    fi
    pkill -f "^$TST_CHUNKS3" >/dev/null 2>&1 || true
    local i
    for i in $(seq 1 10); do
        bench_alive || return 0
        sleep 1
    done
    pkill -9 -f "^$TST_CHUNKS3" >/dev/null 2>&1 || true
}

# exit_hang_watchdog <result-file>
#
# Kill the workload once it has printed all $EXPECTED_TIMINGS timing lines and
# then failed to exit within $EXIT_GRACE seconds. Nothing is measured after the
# last line, so a process still running past it is wedged in teardown -- and
# the CLIO VOL is, reliably: HDF5 registers its H5_term_library atexit handler
# on the first HDF5 call, the connector registers clio's client teardown later
# (on the first H5Fcreate), so at exit clio's runs FIRST and H5_term_library's
# file close then issues CTE tasks through a finalized client and waits for a
# reply that can never come (see "Known upstream issues" in
# NC4_CLIO_BENCHMARK.md). Without this the variant burns the whole
# --run-timeout and its complete measurement is thrown away with it.
exit_hang_watchdog() {
    local out="$1" waited i
    # This is started just before the pipeline that forks the workload, so the
    # workload does not exist yet: wait for it to show up, or the `while
    # bench_alive` below would see nothing and return immediately. Bounded, so a
    # variant that never starts at all does not leave a watchdog spinning (and
    # run_variant kills this one when the pipeline ends either way).
    for i in $(seq 1 60); do
        bench_alive && break
        sleep 1
    done
    while bench_alive; do
        if results_complete "$out"; then
            waited=0
            while [ "$waited" -lt "$EXIT_GRACE" ]; do
                bench_alive || return 0
                sleep 1
                waited=$((waited + 1))
            done
            bench_alive || return 0
            warn "all $EXPECTED_TIMINGS timings measured but the process has not exited ${EXIT_GRACE}s later; killing it"
            bench_kill
            return 0
        fi
        sleep 2
    done
}

# run_variant <variant> <header>
run_variant() {
    local variant="$1" header="$2"
    local out="$RESULTS_DIR/tst_chunks3_${variant}.txt"
    local dir="$RUN_DIR/$variant"
    local rc=0 watchdog

    rm -rf "$dir"; mkdir -p "$dir"

    log "Running variant: $variant"
    {
        echo "=== $header ==="
        echo "Variant: $variant"
        echo "Testing with deflate level: ${BENCH_ARGS%% *}"
        echo "tst_chunks3 args: $BENCH_ARGS"
    } >"$out"

    exit_hang_watchdog "$out" &
    watchdog=$!

    # A hung variant must not stall the whole job: the CLIO adapters block
    # indefinitely when the runtime is missing a pool they need, and that is a
    # failure to report, not a reason to burn the CI timeout.
    # The sed strips clio's ANSI color codes so the archived artifact is
    # readable; the parser ignores non-timing lines either way.
    # shellcheck disable=SC2086  # BENCH_ARGS is deliberately word-split
    ( cd "$dir" && run_with_timeout "$RUN_TIMEOUT" "$TST_CHUNKS3" $BENCH_ARGS ) 2>&1 \
        | sed "$SED_UNBUF" "s/${ESC}\\[[0-9;]*m//g" | tee -a "$out" || rc=$?

    kill "$watchdog" 2>/dev/null || true
    wait "$watchdog" 2>/dev/null || true

    if [ "$rc" = 0 ]; then
        echo "variant $variant: ok"
        set_variant_status "$variant" measured
    elif results_complete "$out"; then
        # Every timing was measured and only the exit went wrong (the CLIO VOL
        # wedges in HDF5's atexit file close; the watchdog above then kills it).
        # Discarding this would drop a complete, valid series from the
        # dashboard because of a teardown bug that no timing here depends on.
        warn "variant $variant measured all $EXPECTED_TIMINGS timings but did not exit cleanly (status $rc); keeping its result"
        echo "NOTE: process did not exit cleanly (status $rc) after producing" \
             "all $EXPECTED_TIMINGS timings; the timings above are complete" >>"$out"
        echo "variant $variant: ok (measured; unclean exit $rc)"
        set_variant_status "$variant" measured_no_exit \
            "all $EXPECTED_TIMINGS timings measured; process did not exit (status $rc) and was killed"
        # 2, not 0: the caller counts it as measured but still reports it, so a
        # teardown bug that starts costing real data is visible in the log.
        return 2
    else
        # Windows reports a failed DLL load as 0xC0000135 (-1073741515) with no
        # output at all, which is indistinguishable from a silent crash unless
        # the status is printed.
        warn "variant $variant failed (exit $rc); discarding its result file"
        set_variant_status "$variant" no_result \
            "ran but produced fewer than $EXPECTED_TIMINGS timings (exit $rc)"
        rm -f "$out"
        return 1
    fi
}

FAILED=""
# Variants that produced a complete measurement but could not exit.
HUNG=""

# record_variant <variant> <status-from-run_variant>
# Each variant runs in a subshell (so its HDF5_* environment cannot leak into
# the next one), which is why the outcome comes back as an exit status rather
# than in a variable.
record_variant() {
    case "$2" in
        0) ;;
        2) HUNG="$HUNG $1" ;;
        *) FAILED="$FAILED $1" ;;
    esac
}

if has_variant baseline; then
    RC=0
    ( unset HDF5_DRIVER HDF5_DRIVER_CONFIG HDF5_VOL_CONNECTOR HDF5_PLUGIN_PATH
      run_variant baseline "NetCDF-4 with HDF5 develop (baseline)" ) || RC=$?
    record_variant baseline "$RC"
fi

if has_variant clio_vfd; then
    if clio_runtime_start; then
        RC=0
        ( unset HDF5_VOL_CONNECTOR
          export HDF5_PLUGIN_PATH="$CLIO_BIN"
          # Driver name is H5FD_CLIO_NAME from clio-core's H5FDclio.h. The
          # adapter README still says "clio"; the header is authoritative.
          export HDF5_DRIVER="clio_vfd"
          # HDF5 stores this string on the FAPL and the driver pulls it with
          # H5Pget_driver_config_str (there is no H5FD_class_t callback for it).
          # The grammar is clio's shared "key=value;..." one, and the driver
          # fails the open on anything it cannot parse -- deliberately, so a
          # mistyped knob cannot be silently ignored. Until clio-core 6873b60a
          # (2026-08-10) the driver read this string not at all, so the
          # positional "<persistence> <page_size>" that used to be passed here
          # was silently ignored; since that commit it fails the open with "no
          # '=' (expected key=value)", which netCDF-C then reports as the very
          # misleading "Permission denied" (hdf5create.c BAILs with a literal
          # EACCES whenever H5Fcreate fails).
          # `cache=1` asks for the CTE cache tier, which is what makes this
          # variant a CLIO measurement rather than a second baseline; the
          # on-disk native file is authoritative either way, so the comparison
          # stays apples-to-apples. Accepted keys: cache.
          export HDF5_DRIVER_CONFIG="cache=1"
          export CLIO_SERVER_CONF="$CLIO_CONF"
          run_variant clio_vfd "NetCDF-4 with HDF5 develop + clio-core VFD" ) || RC=$?
        record_variant clio_vfd "$RC"
    else
        warn "skipping clio_vfd: runtime unavailable"
        FAILED="$FAILED clio_vfd"
        set_variant_status clio_vfd no_result "clio_run did not become ready; variant never ran"
    fi
    clio_runtime_stop
fi

if has_variant clio_vol; then
    if clio_runtime_start; then
        RC=0
        ( unset HDF5_DRIVER HDF5_DRIVER_CONFIG
          export HDF5_PLUGIN_PATH="$CLIO_BIN"
          export HDF5_VOL_CONNECTOR="clio"   # under-VOL defaults to native
          export CLIO_SERVER_CONF="$CLIO_CONF"
          run_variant clio_vol "NetCDF-4 with HDF5 develop + clio-core VOL" ) || RC=$?
        record_variant clio_vol "$RC"
    else
        warn "skipping clio_vol: runtime unavailable"
        FAILED="$FAILED clio_vol"
        set_variant_status clio_vol no_result "clio_run did not become ready; variant never ran"
    fi
    clio_runtime_stop
fi

# Backfill a row for every canonical variant that has none yet, so the summary
# never has to guess what silence meant. Anything still unaccounted for was
# either not asked for (--variants) or dropped before it could run.
status_recorded() {
    [ -f "$STATUS_FILE" ] || return 1
    awk -F'\t' -v v="$1" '$1 == v { found = 1 } END { exit !found }' "$STATUS_FILE"
}
for variant in baseline clio_vfd clio_vol; do
    status_recorded "$variant" && continue
    if has_variant "$variant"; then
        set_variant_status "$variant" no_result "no outcome recorded; see the log"
    else
        set_variant_status "$variant" not_requested "not in --variants ($VARIANTS)"
    fi
done

log "Results in $RESULTS_DIR"
ls -la "$RESULTS_DIR"
echo "variant status:"
cat "$STATUS_FILE"
if [ -n "$UNBUILDABLE" ]; then
    warn "variants whose adapter did not build on $OS:$UNBUILDABLE"
fi
if [ -n "$HUNG" ]; then
    warn "variants measured but killed because they never exited:$HUNG"
fi
if [ -n "$FAILED" ]; then
    warn "variants that produced no result:$FAILED"
fi
exit 0
