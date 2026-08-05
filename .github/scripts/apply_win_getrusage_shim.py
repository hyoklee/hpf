#!/usr/bin/env python3
"""
Make netCDF-C's tst_chunks3 compile with MSVC.

nc_perf is POSIX-only: tst_chunks3's timing macros are built on getrusage(2),
and not one of nc_perf's sources carries a _WIN32 guard, so the workload the
NetCDF-4/CLIO benchmark measures cannot be built on Windows as it stands. This
inserts the missing piece of <sys/resource.h> ahead of those macros.

Why this is a script and not a .patch
-------------------------------------
It was a patch, and `git apply` failed twice in CI for reasons that had nothing
to do with the change: Git on Windows checks sources out as CRLF
(core.autocrlf=true), so an LF patch's context cannot match -- and once the
sources were pinned to LF, the *patch file itself* came out of the hpf checkout
as CRLF and failed the other way. A diff also carries line numbers and context
that go stale whenever upstream edits the file for unrelated reasons.

Anchoring on a distinctive line instead is immune to all of that: line endings
are normalised for matching and the file's own style is preserved on write, and
the only thing that has to stay true is that the include block still exists.

Usage:
    apply_win_getrusage_shim.py <netcdf-c-source-dir>

Idempotent: a tree that already carries the shim is left alone. Exits non-zero
if the anchor is gone, because the build cannot succeed without this.
"""

import re
import sys
from pathlib import Path

MARKER = "HPF_WIN32_GETRUSAGE_SHIM"

# The include block the shim goes after. Matched with flexible line endings and
# trailing whitespace so neither a CRLF checkout nor a reformat breaks it.
ANCHOR = re.compile(
    rb"#ifdef[ \t]+HAVE_SYS_RESOURCE_H[ \t]*\r?\n"
    rb"#include[ \t]+<sys/resource\.h>[ \t]*\r?\n"
    rb"#endif[ \t]*\r?\n"
)

SHIM = """
/* {marker}
 *
 * MSVC has no getrusage(2), and nc_perf's timing macros are built on it, so
 * tst_chunks3 cannot be compiled on Windows as it stands. Supply the small
 * part of the interface those macros use, in the same units.
 *
 * GetProcessTimes reports kernel and user CPU time for the process in 100 ns
 * ticks, which is what ru_utime/ru_stime mean here -- the timing macros sum
 * the two and divide by the repetition count, so the measurement stays CPU
 * time and remains comparable with the POSIX platforms.
 *
 * ru_inblock/ru_oublock have no Win32 equivalent. They are read by the macros
 * but never printed (only the seconds field reaches the output the benchmark
 * parser consumes), so reporting zero costs nothing here. */
#if defined(_WIN32) && !defined(HAVE_SYS_RESOURCE_H)
#ifndef WIN32_LEAN_AND_MEAN
#define WIN32_LEAN_AND_MEAN
#endif
#ifndef NOMINMAX
#define NOMINMAX
#endif
#include <winsock2.h>   /* struct timeval; must precede windows.h */
#include <windows.h>

#define RUSAGE_SELF 0

struct rusage {{
    struct timeval ru_utime;
    struct timeval ru_stime;
    long ru_inblock;
    long ru_oublock;
}};

static __inline void
hpf_filetime_to_timeval(const FILETIME *ft, struct timeval *tv)
{{
    /* 100 ns ticks since an epoch that cancels out: only differences are used */
    ULARGE_INTEGER t;
    t.LowPart = ft->dwLowDateTime;
    t.HighPart = ft->dwHighDateTime;
    tv->tv_sec = (long)(t.QuadPart / 10000000ULL);
    tv->tv_usec = (long)((t.QuadPart % 10000000ULL) / 10ULL);
}}

static __inline int
getrusage(int who, struct rusage *ru)
{{
    FILETIME creation, exit, kernel, user;
    (void)who;
    if (!GetProcessTimes(GetCurrentProcess(), &creation, &exit, &kernel, &user))
        return -1;
    hpf_filetime_to_timeval(&user, &ru->ru_utime);
    hpf_filetime_to_timeval(&kernel, &ru->ru_stime);
    ru->ru_inblock = 0;
    ru->ru_oublock = 0;
    return 0;
}}
#endif /* _WIN32 && !HAVE_SYS_RESOURCE_H */
""".format(marker=MARKER)


def main() -> None:
    if len(sys.argv) != 2:
        print("Usage: apply_win_getrusage_shim.py <netcdf-c-source-dir>")
        sys.exit(2)

    target = Path(sys.argv[1]) / "nc_perf" / "tst_chunks3.c"
    if not target.is_file():
        print(f"ERROR: {target} not found", file=sys.stderr)
        sys.exit(1)

    data = target.read_bytes()

    if MARKER.encode() in data:
        print(f"{target}: shim already present")
        return

    match = ANCHOR.search(data)
    if not match:
        print(f"ERROR: could not find the <sys/resource.h> include block in {target}.",
              file=sys.stderr)
        print("       nc_perf's includes must have been reorganised upstream; "
              "re-anchor this script.", file=sys.stderr)
        sys.exit(1)

    # Write the shim in whatever line ending the file already uses, so the
    # result is consistent whether the checkout is LF or CRLF.
    eol = b"\r\n" if data.count(b"\r\n") > data.count(b"\n") // 2 else b"\n"
    shim = SHIM.replace("\n", eol.decode("ascii")).encode("ascii")

    patched = data[:match.end()] + shim + data[match.end():]
    target.write_bytes(patched)
    print(f"{target}: inserted the Windows getrusage shim "
          f"({len(shim)} bytes, {eol!r} line endings)")


if __name__ == "__main__":
    main()
