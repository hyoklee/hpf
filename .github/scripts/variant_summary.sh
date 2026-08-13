#!/usr/bin/env bash
#
# variant_summary.sh -- render the per-variant outcome table for a job summary.
#
# Sourced (not executed) by the three NetCDF-4/CLIO benchmark workflows:
#
#     . .github/scripts/variant_summary.sh
#     variant_summary_table "Variants (macOS)" >> "$GITHUB_STEP_SUMMARY"
#
# The outcomes come from benchmark-results/variant_status.tsv, which
# nc4_clio_bench.sh writes as it goes (see set_variant_status there):
#
#     <variant>\t<status>\t<note>
#
# One renderer for all three platforms on purpose. The previous version was the
# same `if [ -s <result file> ]` block copy-pasted into each workflow, which
# could only say "measured" or "no result" -- so "this adapter does not build on
# this platform" and "this adapter crashed" printed the same warning, and the
# Windows VFD looked broken when it was merely absent. Anything the driver knows
# about a variant belongs in the driver, not in three copies of a YAML step.

VARIANT_STATUS_FILE="${VARIANT_STATUS_FILE:-benchmark-results/variant_status.tsv}"

# variant_status_field <variant> <field-number>
# Last row wins: the driver appends, and a later row is better informed.
variant_status_field() {
    [ -f "$VARIANT_STATUS_FILE" ] || return 0
    awk -F'\t' -v v="$1" -v f="$2" '$1 == v { val = $f } END { print val }' \
        "$VARIANT_STATUS_FILE"
}

# variant_summary_row <variant> -> "| `variant` | rendered result |"
variant_summary_row() {
    local variant="$1" status note cell
    status="$(variant_status_field "$variant" 2)"
    note="$(variant_status_field "$variant" 3)"

    # No status file at all means the driver died before it could write one (or
    # an older driver produced these results): fall back to file presence, which
    # is what this table used to do.
    if [ -z "$status" ]; then
        if [ -s "benchmark-results/tst_chunks3_${variant}.txt" ]; then
            status=measured
        else
            status=no_result
        fi
    fi

    case "$status" in
        measured)         cell="measured" ;;
        measured_no_exit) cell="measured, :warning: process never exited (killed after the last timing)" ;;
        not_built)        cell=":no_entry_sign: adapter not built on this platform" ;;
        not_requested)    cell="not requested" ;;
        no_result)        cell=":warning: no result (crashed or timed out)" ;;
        *)                cell=":warning: $status" ;;
    esac

    # The note is where a platform gap explains itself, so keep it -- but only
    # when it adds something the status word does not already say.
    case "$status" in
        measured) ;;
        *) [ -n "$note" ] && cell="$cell<br><sub>$note</sub>" ;;
    esac

    printf '| `%s` | %s |\n' "$variant" "$cell"
}

# variant_summary_table [heading]
variant_summary_table() {
    local heading="${1:-Variants}" v
    echo "### $heading"
    echo
    echo "| variant | result |"
    echo "| --- | --- |"
    for v in baseline clio_vfd clio_vol; do
        variant_summary_row "$v"
    done
}
