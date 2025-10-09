window.BENCHMARK_DATA = {
  "lastUpdate": 1760043188564,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "HDF5 Performance Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "c7f0af211b68ad73af7a224faf89f76fcaf2850c",
          "message": "ci(daily): disable compression",
          "timestamp": "2025-10-09T14:25:56-05:00",
          "tree_id": "9a2958f05c85473309fe9a8fee7fa63565247ffc",
          "url": "https://github.com/hyoklee/hpf/commit/c7f0af211b68ad73af7a224faf89f76fcaf2850c"
        },
        "date": 1760038646301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cmpd_subset 100",
            "value": 4.8539,
            "unit": "sec"
          },
          {
            "name": "efc_no 100",
            "value": 0.6300330000000001,
            "unit": "sec"
          },
          {
            "name": "many_dsets 100",
            "value": 1.08906,
            "unit": "sec"
          },
          {
            "name": "vds 100",
            "value": 4.48672,
            "unit": "sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "4f541737017341f23131dc67c38dd26bd82aa516",
          "message": "feat: add post-processing for grouped benchmark comparison plots\n\nAdd GitHub Actions post-processing steps to generate grouped comparison\nplots showing HDF5 develop vs 1.14 on the same chart. This addresses\nthe issue where the workflow was generating one plot per benchmark\ninstead of comparison plots.\n\nChanges:\n- Add create_grouped_plots.py script to parse data.js and generate\n  comparison plots with both versions on the same timeline\n- Update daily.yml workflow to:\n  * Checkout gh-pages branch after benchmark storage\n  * Generate grouped comparison plots from benchmark data\n  * Create benchmark index HTML page\n  * Commit and push custom plots to gh-pages\n\nThe workflow now produces both:\n1. Standard interactive benchmark charts (via benchmark-action)\n2. Custom comparison plots showing develop vs 1.14 side-by-side\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-09T15:45:20-05:00",
          "tree_id": "1a8ab02047f8f94e9fb144b23ae0fbb3b2db7bd4",
          "url": "https://github.com/hyoklee/hpf/commit/4f541737017341f23131dc67c38dd26bd82aa516"
        },
        "date": 1760043186990,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cmpd_subset 100",
            "value": 4.63246,
            "unit": "sec"
          },
          {
            "name": "efc_no 100",
            "value": 0.612976,
            "unit": "sec"
          },
          {
            "name": "many_dsets 100",
            "value": 1.00575,
            "unit": "sec"
          },
          {
            "name": "vds 100",
            "value": 4.38411,
            "unit": "sec"
          }
        ]
      }
    ]
  }
}