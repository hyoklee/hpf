#!/usr/bin/env python3
"""
Build the NetCDF-4 / CLIO comparison plot page from github-action-benchmark's
``data.js``.

Every benchmark is measured three ways -- baseline, CLIO VFD, CLIO VOL -- and
stored under three suffixed names (see combine_nc4_clio_results.py). This script
undoes that suffixing to recover, per benchmark, three time series that share a
y-axis in seconds, and renders one line chart per benchmark with those three
lines on it.

The output is a single self-contained HTML file: inline SVG, inline CSS/JS, no
CDN, no image files. That matters because it is published to gh-pages, where a
broken external reference is invisible until someone opens the page.

Usage:
    create_nc4_clio_plots.py <data.js> <output.html> [--title TITLE]
    create_nc4_clio_plots.py --sample <sample.json> <output.html>

With --sample, <sample.json> is a plain list of runs
``[{"date": <ms>, "commit": "...", "benches": [...]}, ...]`` -- used to render a
sample page from a local run without a gh-pages history.
"""

import argparse
import html
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

# Suffix -> (series key, display label). Order is the fixed series order and it
# is also the categorical color-slot order: never reorder or cycle these.
SERIES: List[Tuple[str, str, str]] = [
    ("_nc4_hdf5_develop", "baseline", "HDF5 develop"),
    ("_nc4_clio_vfd", "clio_vfd", "CLIO VFD"),
    ("_nc4_clio_vol", "clio_vol", "CLIO VOL"),
]

# Categorical slots 1-3 from the validated palette, light and dark steps.
# Validated all-pairs in both modes (worst CVD dE 9.2 light / 9.4 dark).
# Aqua is below 3:1 on the light surface, hence the mandatory direct labels
# and table view below -- do not drop those.
COLORS_LIGHT = {"baseline": "#2a78d6", "clio_vfd": "#eb6834", "clio_vol": "#1baf7a"}
COLORS_DARK = {"baseline": "#3987e5", "clio_vfd": "#d95926", "clio_vol": "#199e70"}


def parse_data_js(path: str) -> Dict[str, Any]:
    """Extract the JSON object assigned to window.BENCHMARK_DATA."""
    with open(path, "r") as fh:
        content = fh.read()
    match = re.search(r"window\.BENCHMARK_DATA\s*=\s*(\{.*\})\s*;?\s*$",
                      content, re.DOTALL)
    if not match:
        raise ValueError(f"{path} is not a github-action-benchmark data.js")
    return json.loads(match.group(1))


def runs_from_data_js(data: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Flatten every suite's history into a chronological list of runs."""
    runs: List[Dict[str, Any]] = []
    for history in (data.get("entries") or {}).values():
        for point in history:
            commit = point.get("commit") or {}
            runs.append({
                "date": point.get("date", 0),
                "commit": commit.get("id", "") or "",
                "url": commit.get("url", "") or "",
                "benches": point.get("benches") or [],
            })
    runs.sort(key=lambda r: r["date"])
    return runs


def split_name(name: str) -> Optional[Tuple[str, str]]:
    """Split a suffixed benchmark name into (base name, series key)."""
    for suffix, key, _ in SERIES:
        if name.endswith(suffix):
            return name[: -len(suffix)], key
    return None


def build_charts(runs: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Group the flattened runs into one chart spec per benchmark."""
    # base name -> series key -> list of points
    grouped: Dict[str, Dict[str, List[Dict[str, Any]]]] = {}
    units: Dict[str, str] = {}

    for run in runs:
        for bench in run["benches"]:
            split = split_name(bench.get("name", ""))
            if split is None:
                continue
            base, key = split
            value = bench.get("value")
            if not isinstance(value, (int, float)):
                continue
            units.setdefault(base, bench.get("unit", "sec"))
            grouped.setdefault(base, {}).setdefault(key, []).append({
                "t": run["date"],
                "v": value,
                "commit": run["commit"][:8],
                "url": run["url"],
            })

    charts = []
    for base in sorted(grouped):
        series = [
            {"key": key, "label": label, "points": grouped[base].get(key, [])}
            for _, key, label in SERIES
        ]
        if not any(s["points"] for s in series):
            continue
        charts.append({
            "id": re.sub(r"[^A-Za-z0-9_-]", "-", base),
            "name": base,
            "title": prettify(base),
            "unit": units.get(base, "sec"),
            "series": series,
        })
    return charts


def prettify(base: str) -> str:
    """contiguous_write_512x64x512 -> 'contiguous write - 512x64x512'."""
    parts = base.split("_")
    if len(parts) >= 3 and parts[1] in ("write", "read"):
        head = f"{parts[0]} {parts[1]}"
        rest = " ".join(parts[2:]).replace("chunks ", "chunks ")
        return f"{head} — {rest}"
    return base.replace("_", " ")


PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>__TITLE__</title>
<style>
:root {
  color-scheme: light dark;
  --surface-0: #f4f4f2;
  --surface-1: #fcfcfb;
  --border:    #dededa;
  --grid:      #e7e7e3;
  --text-primary:   #0b0b0b;
  --text-secondary: #52514e;
  --text-muted:     #77766f;
  --series-baseline: #2a78d6;
  --series-clio_vfd: #eb6834;
  --series-clio_vol: #1baf7a;
}
@media (prefers-color-scheme: dark) {
  :root:where(:not([data-theme="light"])) {
    --surface-0: #111110;
    --surface-1: #1a1a19;
    --border:    #333331;
    --grid:      #2b2b29;
    --text-primary:   #ffffff;
    --text-secondary: #c3c2b7;
    --text-muted:     #92918a;
    --series-baseline: #3987e5;
    --series-clio_vfd: #d95926;
    --series-clio_vol: #199e70;
  }
}
:root[data-theme="dark"] {
  --surface-0: #111110;
  --surface-1: #1a1a19;
  --border:    #333331;
  --grid:      #2b2b29;
  --text-primary:   #ffffff;
  --text-secondary: #c3c2b7;
  --text-muted:     #92918a;
  --series-baseline: #3987e5;
  --series-clio_vfd: #d95926;
  --series-clio_vol: #199e70;
}
:root {
  /* Two roles, no webfont: prose in the UI sans, every measured quantity in
     the mono face. Numbers on this page are read in columns and compared
     across series, so they get the face that keeps digits aligned. */
  --font-prose: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-data: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
}
* { box-sizing: border-box; }
body {
  margin: 0; padding: 24px 20px 64px;
  background: var(--surface-0); color: var(--text-primary);
  font: 15px/1.5 var(--font-prose);
}
.wrap { max-width: 1180px; margin: 0 auto; }
h1 { font-size: 1.6rem; margin: 0 0 6px; letter-spacing: -0.01em; }
.sub { color: var(--text-secondary); margin: 0 0 4px; font-size: 0.93rem; }
.meta { color: var(--text-muted); font-size: 0.83rem; margin: 0 0 24px; }
.legend {
  display: flex; flex-wrap: wrap; gap: 18px; align-items: center;
  padding: 12px 16px; margin-bottom: 20px;
  background: var(--surface-1); border: 1px solid var(--border); border-radius: 10px;
}
.legend-item { display: inline-flex; align-items: center; gap: 8px;
  font-size: 0.88rem; color: var(--text-secondary); }
.swatch { width: 22px; height: 3px; border-radius: 2px; flex: none; }
.controls { margin-left: auto; display: flex; gap: 8px; }
button {
  font: inherit; font-size: 0.85rem; padding: 5px 12px; border-radius: 7px;
  border: 1px solid var(--border); background: var(--surface-1);
  color: var(--text-secondary); cursor: pointer;
}
button:hover { color: var(--text-primary); }
button:focus-visible { outline: 2px solid var(--series-baseline); outline-offset: 2px; }
button[aria-pressed="true"] { color: var(--text-primary); border-color: var(--text-muted); }
.summary {
  display: grid; gap: 12px; margin-bottom: 22px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}
.tile {
  background: var(--surface-1); border: 1px solid var(--border);
  border-radius: 10px; padding: 14px 16px;
  border-left: 3px solid var(--tile-accent, var(--border));
}
.tile .tile-label { font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 6px; }
.tile .tile-value {
  font-family: var(--font-data); font-size: 1.5rem; font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}
.tile .tile-note { font-size: 0.78rem; color: var(--text-muted); margin-top: 4px; }
.grid { display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(430px, 1fr)); }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
.card {
  background: var(--surface-1); border: 1px solid var(--border);
  border-radius: 12px; padding: 14px 16px 10px; overflow: hidden;
}
.card h2 { font-size: 0.98rem; margin: 0 0 2px; font-weight: 600; }
.card .unit { font-size: 0.78rem; color: var(--text-muted); margin: 0 0 8px; }
svg { display: block; width: 100%; height: auto; overflow: visible; }
.gridline { stroke: var(--grid); stroke-width: 1; }
.axis-text { fill: var(--text-muted); font-size: 10px; font-family: var(--font-data); }
.series-line { fill: none; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
.series-dot { stroke: var(--surface-1); stroke-width: 2; }
.series-label { font-size: 10px; font-weight: 600; }
.crosshair { stroke: var(--text-muted); stroke-width: 1; stroke-dasharray: 3 3; opacity: 0; }
.hit { fill: transparent; }
.tip {
  position: fixed; z-index: 20; pointer-events: none; opacity: 0;
  transform: translate(-50%, calc(-100% - 12px));
  background: var(--surface-1); border: 1px solid var(--border); border-radius: 8px;
  padding: 8px 10px; font-size: 0.8rem; color: var(--text-primary);
  box-shadow: 0 6px 20px rgba(0,0,0,0.16); min-width: 150px;
}
.tip .tip-date { color: var(--text-muted); margin-bottom: 5px; font-size: 0.74rem; }
.tip-row { display: flex; align-items: center; gap: 7px; white-space: nowrap; }
.tip-row .swatch { width: 10px; height: 10px; border-radius: 3px; }
.tip-row .tip-val {
  margin-left: auto; font-family: var(--font-data); font-variant-numeric: tabular-nums;
}
.tables { display: none; }
body.show-tables .tables { display: block; }
body.show-tables .grid { display: none; }
/* Each table scrolls inside its own box: history grows a column per run, and
   the page body must never scroll sideways. */
.table-wrap { overflow-x: auto; margin-bottom: 22px; }
table { border-collapse: collapse; width: 100%; min-width: 480px; font-size: 0.84rem; }
caption { text-align: left; font-weight: 600; padding: 10px 0 6px; }
th, td { text-align: right; padding: 6px 10px; border-bottom: 1px solid var(--border); white-space: nowrap; }
th:first-child, td:first-child { text-align: left; }
th { color: var(--text-secondary); font-weight: 600; }
td {
  font-family: var(--font-data); font-variant-numeric: tabular-nums;
  color: var(--text-primary);
}
.empty { color: var(--text-muted); padding: 30px 0; text-align: center; }
</style>
</head>
<body>
<div class="wrap">
  <h1>__TITLE__</h1>
  <p class="sub">__SUBTITLE__</p>
  <p class="meta">__META__</p>

  <div class="legend" id="legend"></div>
  <div class="summary" id="summary"></div>
  <div class="grid" id="grid"></div>
  <div class="tables" id="tables"></div>
</div>
<div class="tip" id="tip"></div>

<script id="chart-data" type="application/json">__DATA__</script>
<script>
(function () {
  "use strict";
  var DATA = JSON.parse(document.getElementById("chart-data").textContent);
  var SERIES = DATA.series;              // [{key,label}]
  var CHARTS = DATA.charts;
  var tip = document.getElementById("tip");
  var NS = "http://www.w3.org/2000/svg";

  function el(name, attrs, parent) {
    var node = document.createElementNS(NS, name);
    for (var k in attrs) { if (attrs[k] !== null) node.setAttribute(k, attrs[k]); }
    if (parent) parent.appendChild(node);
    return node;
  }
  function fmt(v) {
    if (v >= 100) return v.toFixed(0);
    if (v >= 1) return v.toFixed(2);
    if (v >= 0.01) return v.toFixed(4);
    return v.toExponential(2);
  }
  function fmtDate(ms) {
    var d = new Date(ms);
    return d.toISOString().slice(0, 10) + " " + d.toISOString().slice(11, 16) + "Z";
  }

  // ---- legend (always present for >= 2 series) ----------------------------
  var legend = document.getElementById("legend");
  SERIES.forEach(function (s) {
    var item = document.createElement("span");
    item.className = "legend-item";
    item.innerHTML = '<span class="swatch" style="background:var(--series-' + s.key + ')"></span>' +
                     '<span>' + s.label + '</span>';
    legend.appendChild(item);
  });
  var controls = document.createElement("div");
  controls.className = "controls";
  var tableBtn = document.createElement("button");
  tableBtn.type = "button";
  tableBtn.textContent = "Table view";
  tableBtn.setAttribute("aria-pressed", "false");
  tableBtn.onclick = function () {
    var on = document.body.classList.toggle("show-tables");
    tableBtn.setAttribute("aria-pressed", on ? "true" : "false");
  };
  controls.appendChild(tableBtn);
  legend.appendChild(controls);

  // ---- summary ------------------------------------------------------------
  // 18 charts is too many to scan for "is CLIO slower, and by how much". Lead
  // with the answer: the MEDIAN per-benchmark ratio against the baseline on
  // the newest run. Median, not mean, because one pathological operation (the
  // VFD's contiguous slab write) otherwise sets the headline for all 18.
  renderSummary();

  function renderSummary() {
    var summary = document.getElementById("summary");
    var latest = 0;
    CHARTS.forEach(function (c) {
      c.series.forEach(function (s) {
        s.points.forEach(function (p) { if (p.t > latest) { latest = p.t; } });
      });
    });
    if (!latest) { return; }

    function atLatest(chart, key) {
      var v = null;
      chart.series.forEach(function (s) {
        if (s.key !== key) { return; }
        s.points.forEach(function (p) { if (p.t === latest) { v = p.v; } });
      });
      return v;
    }

    SERIES.forEach(function (s) {
      var ratios = [];
      CHARTS.forEach(function (chart) {
        var base = atLatest(chart, "baseline"), mine = atLatest(chart, s.key);
        if (base && mine) { ratios.push(mine / base); }
      });
      if (!ratios.length) { return; }
      ratios.sort(function (a, b) { return a - b; });
      var mid = ratios.length % 2
        ? ratios[(ratios.length - 1) / 2]
        : (ratios[ratios.length / 2 - 1] + ratios[ratios.length / 2]) / 2;

      var tile = document.createElement("div");
      tile.className = "tile";
      tile.style.setProperty("--tile-accent", "var(--series-" + s.key + ")");

      var label = document.createElement("div");
      label.className = "tile-label";
      label.textContent = s.label;
      tile.appendChild(label);

      var value = document.createElement("div");
      value.className = "tile-value";
      value.textContent = s.key === "baseline"
        ? "reference"
        : (mid >= 1 ? mid.toFixed(1) + "x slower" : (1 / mid).toFixed(1) + "x faster");
      tile.appendChild(value);

      var note = document.createElement("div");
      note.className = "tile-note";
      note.textContent = s.key === "baseline"
        ? ratios.length + " benchmarks, latest run"
        : "median over " + ratios.length + " benchmarks, worst "
          + ratios[ratios.length - 1].toFixed(0) + "x";
      tile.appendChild(note);

      summary.appendChild(tile);
    });
  }

  // ---- charts -------------------------------------------------------------
  var grid = document.getElementById("grid");
  if (!CHARTS.length) {
    grid.innerHTML = '<p class="empty">No benchmark history yet.</p>';
  }

  CHARTS.forEach(function (chart) { renderChart(grid, chart); });

  function renderChart(parent, chart) {
    var W = 520, H = 260;
    var M = { top: 14, right: 76, bottom: 26, left: 52 };
    var iw = W - M.left - M.right, ih = H - M.top - M.bottom;

    var card = document.createElement("div");
    card.className = "card";
    var heading = document.createElement("h2");
    heading.textContent = chart.title;
    card.appendChild(heading);
    var unitLine = document.createElement("p");
    unitLine.className = "unit";
    unitLine.textContent = chart.unit + " · lower is better";
    card.appendChild(unitLine);
    parent.appendChild(card);

    var svg = el("svg", {viewBox: "0 0 " + W + " " + H,
                         role: "img",
                         "aria-label": chart.title + " over time, three series"}, card);

    var all = [];
    chart.series.forEach(function (s) { s.points.forEach(function (p) { all.push(p); }); });
    if (!all.length) { return; }

    var ts = all.map(function (p) { return p.t; });
    var vs = all.map(function (p) { return p.v; });
    var t0 = Math.min.apply(null, ts), t1 = Math.max.apply(null, ts);
    var vmax = Math.max.apply(null, vs);
    var vmin = Math.min.apply(null, vs);
    if (t1 === t0) { t0 -= 1; t1 += 1; }

    // These are durations, so a linear axis is anchored at zero -- not
    // zero-anchoring would exaggerate small differences. But the CLIO
    // adapters can be thousands of times slower than native on the same
    // operation, and on a zero-anchored linear axis that pins two of the
    // three series flat against the baseline and shows nothing. Above a 50x
    // spread, switch that chart to log10 (still ONE axis, and labelled as
    // such) so all three series stay readable.
    var logScale = vmin > 0 && vmax / vmin > 50;
    var lo, hi;
    if (logScale) {
      lo = Math.floor(Math.log10(vmin) * 2) / 2;   // half-decade padding
      hi = Math.ceil(Math.log10(vmax) * 2) / 2;
      if (hi === lo) { hi = lo + 0.5; }
    } else {
      lo = 0;
      hi = vmax > 0 ? vmax * 1.12 : 1;
    }
    if (logScale) { unitLine.textContent += " · log scale"; }

    function X(t) { return M.left + (t - t0) / (t1 - t0) * iw; }
    function Y(v) {
      var s = logScale ? Math.log10(v) : v;
      return M.top + ih - (s - lo) / (hi - lo) * ih;
    }

    // gridlines + y ticks (recessive)
    var TICKS = 4;
    for (var i = 0; i <= TICKS; i++) {
      var s = lo + (hi - lo) * i / TICKS;
      var v = logScale ? Math.pow(10, s) : s;
      var y = M.top + ih - (s - lo) / (hi - lo) * ih;
      el("line", {class: "gridline", x1: M.left, x2: M.left + iw, y1: y, y2: y}, svg);
      var lbl = el("text", {class: "axis-text", x: M.left - 8, y: y + 3,
                            "text-anchor": "end"}, svg);
      lbl.textContent = fmt(v);
    }
    // x axis end labels only -- a tick per run collides once history grows
    var xa = el("text", {class: "axis-text", x: M.left, y: H - 8}, svg);
    xa.textContent = new Date(t0).toISOString().slice(0, 10);
    var xb = el("text", {class: "axis-text", x: M.left + iw, y: H - 8,
                         "text-anchor": "end"}, svg);
    xb.textContent = new Date(t1).toISOString().slice(0, 10);

    // series: line + dots + direct end label (the label is the relief for the
    // low-contrast slot, so it is not optional)
    var endLabels = [];
    chart.series.forEach(function (s) {
      if (!s.points.length) { return; }
      var pts = s.points.slice().sort(function (a, b) { return a.t - b.t; });
      var color = "var(--series-" + s.key + ")";
      if (pts.length > 1) {
        var d = pts.map(function (p, i) {
          return (i ? "L" : "M") + X(p.t).toFixed(2) + " " + Y(p.v).toFixed(2);
        }).join(" ");
        el("path", {class: "series-line", d: d, stroke: color}, svg);
      }
      pts.forEach(function (p) {
        el("circle", {class: "series-dot", cx: X(p.t), cy: Y(p.v), r: 4, fill: color}, svg);
      });
      var last = pts[pts.length - 1];
      endLabels.push({x: X(last.t) + 9, y: Y(last.v), color: color, text: s.label});
    });

    // Series whose latest values are close land their end labels on top of
    // each other, which destroys the direct-labelling this chart relies on for
    // identity. Push overlaps apart before drawing.
    endLabels.sort(function (a, b) { return a.y - b.y; });
    for (var li = 1; li < endLabels.length; li++) {
      var gap = endLabels[li].y - endLabels[li - 1].y;
      if (gap < 12) { endLabels[li].y = endLabels[li - 1].y + 12; }
    }
    endLabels.forEach(function (l) {
      var lab = el("text", {class: "series-label", x: l.x, y: l.y + 3,
                            fill: l.color}, svg);
      lab.textContent = l.text;
    });

    // hover layer: one crosshair snapped to the nearest run timestamp
    var cross = el("line", {class: "crosshair", y1: M.top, y2: M.top + ih}, svg);
    var stamps = [];
    all.forEach(function (p) { if (stamps.indexOf(p.t) < 0) { stamps.push(p.t); } });
    stamps.sort(function (a, b) { return a - b; });

    var hit = el("rect", {class: "hit", x: M.left, y: M.top, width: iw, height: ih}, svg);
    hit.addEventListener("pointermove", function (ev) {
      // The SVG scales to the card width, so map the pointer back through the
      // viewBox before inverting the x scale.
      var box = svg.getBoundingClientRect();
      var vx = (ev.clientX - box.left) / box.width * W;
      var t = t0 + (vx - M.left) / iw * (t1 - t0);
      var near = stamps[0], best = Infinity;
      stamps.forEach(function (s) {
        var dd = Math.abs(s - t);
        if (dd < best) { best = dd; near = s; }
      });
      cross.setAttribute("x1", X(near));
      cross.setAttribute("x2", X(near));
      cross.style.opacity = 1;
      showTip(ev, chart, near);
    });
    hit.addEventListener("pointerleave", function () {
      cross.style.opacity = 0;
      tip.style.opacity = 0;
    });
  }

  function showTip(ev, chart, stamp) {
    var rows = "", commit = "";
    chart.series.forEach(function (s) {
      var hitPt = null;
      s.points.forEach(function (p) { if (p.t === stamp) { hitPt = p; } });
      if (!hitPt) { return; }
      commit = hitPt.commit || commit;
      rows += '<div class="tip-row">' +
              '<span class="swatch" style="background:var(--series-' + s.key + ')"></span>' +
              '<span>' + s.label + '</span>' +
              '<span class="tip-val">' + fmt(hitPt.v) + ' ' + chart.unit + '</span></div>';
    });
    if (!rows) { tip.style.opacity = 0; return; }
    tip.innerHTML = '<div class="tip-date">' + fmtDate(stamp) +
                    (commit ? ' &middot; ' + commit : '') + '</div>' + rows;
    tip.style.left = ev.clientX + "px";
    tip.style.top = ev.clientY + "px";
    tip.style.opacity = 1;
  }

  // ---- table view (accessibility + the low-contrast relief requirement) ---
  var tables = document.getElementById("tables");
  CHARTS.forEach(function (chart) {
    var stamps = [];
    chart.series.forEach(function (s) {
      s.points.forEach(function (p) { if (stamps.indexOf(p.t) < 0) { stamps.push(p.t); } });
    });
    stamps.sort(function (a, b) { return b - a; });

    var head = "<tr><th>Run (UTC)</th>";
    SERIES.forEach(function (s) { head += "<th>" + s.label + " (" + chart.unit + ")</th>"; });
    head += "</tr>";

    var body = "";
    stamps.forEach(function (t) {
      body += "<tr><td>" + fmtDate(t) + "</td>";
      chart.series.forEach(function (s) {
        var v = null;
        s.points.forEach(function (p) { if (p.t === t) { v = p.v; } });
        body += "<td>" + (v === null ? "&mdash;" : fmt(v)) + "</td>";
      });
      body += "</tr>";
    });

    var wrap = document.createElement("div");
    wrap.className = "table-wrap";
    var table = document.createElement("table");
    table.innerHTML = "<caption>" + chart.title + "</caption><thead>" + head +
                      "</thead><tbody>" + body + "</tbody>";
    wrap.appendChild(table);
    tables.appendChild(wrap);
  });
})();
</script>
</body>
</html>
"""


def render_page(charts: List[Dict[str, Any]], title: str, subtitle: str,
                meta: str) -> str:
    payload = {
        "series": [{"key": key, "label": label} for _, key, label in SERIES],
        "charts": charts,
    }
    # </script> inside the JSON blob would close the tag early.
    data = json.dumps(payload, separators=(",", ":")).replace("</", "<\\/")
    page = PAGE_TEMPLATE
    for placeholder, value in (("__TITLE__", html.escape(title)),
                               ("__SUBTITLE__", subtitle),
                               ("__META__", meta),
                               ("__DATA__", data)):
        page = page.replace(placeholder, value)
    return page


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", help="data.js (or sample JSON with --sample)")
    parser.add_argument("output", help="HTML file to write")
    parser.add_argument("--sample", action="store_true",
                        help="input is a plain list of runs, not a data.js")
    parser.add_argument("--title", default="NetCDF-4 CLIO Performance Benchmark")
    args = parser.parse_args()

    if args.sample:
        with open(args.input, "r") as fh:
            raw = json.load(fh)
        runs = [{"date": r.get("date", 0), "commit": r.get("commit", ""),
                 "url": r.get("url", ""), "benches": r.get("benches", [])}
                for r in raw]
        runs.sort(key=lambda r: r["date"])
    else:
        runs = runs_from_data_js(parse_data_js(args.input))

    charts = build_charts(runs)
    if not charts:
        print("Warning: no NetCDF-4/CLIO series found in the input", file=sys.stderr)

    subtitle = ("netCDF-C <code>main</code> measured three ways on one HDF5 "
                "<code>develop</code> build: unmodified, through the clio-core "
                "<code>dev</code> HDF5 VFD, and through the clio-core "
                "<code>dev</code> HDF5 VOL connector.")
    generated = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    meta = (f"{len(charts)} benchmarks &middot; {len(runs)} runs &middot; "
            f"generated {generated} &middot; source: <code>tst_chunks3</code> "
            f"(netcdf-c <code>nc_perf</code>)")

    out = Path(args.output)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(render_page(charts, args.title, subtitle, meta))

    print(f"Wrote {out} ({len(charts)} charts, {len(runs)} runs)")
    for chart in charts:
        counts = ", ".join(f"{s['label']}={len(s['points'])}" for s in chart["series"])
        print(f"  {chart['name']}: {counts}")


if __name__ == "__main__":
    main()
