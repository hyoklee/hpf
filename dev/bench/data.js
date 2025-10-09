window.BENCHMARK_DATA = {
  "lastUpdate": 1760047338705,
  "repoUrl": "https://github.com/hyoklee/hpf",
  "entries": {
    "Catch2 Benchmark": [
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
          "id": "d370dc5b9c016a7b7f94200c2579e98f069219c9",
          "message": "fix: suppress pass outputs",
          "timestamp": "2025-10-08T20:56:35-05:00",
          "tree_id": "f7a760c40f07f0fdae4977853bfd76fb8b63c84c",
          "url": "https://github.com/hyoklee/hpf/commit/d370dc5b9c016a7b7f94200c2579e98f069219c9"
        },
        "date": 1759976185330,
        "tool": "catch2",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 635,
            "range": "± 4.40684",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "many_dsets 100",
            "value": 1050.8,
            "range": "± 17.1252",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "vds 100",
            "value": 1709.6899999999998,
            "range": "± 41.5524",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "cmpd_subset 100",
            "value": 5209.349999999999,
            "range": "± 147.671",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
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
          "id": "0119175c903375a83bbfd9d790e02b1c3f3ccd3a",
          "message": "feat: add daily HDF5 performance benchmark workflow\n\nAdd GitHub Actions workflow to run daily Catch2 benchmarks comparing\nHDF5 develop and 1.14 branches with interactive Chart.js visualizations.\n\nKey features:\n- Daily cron schedule (6 AM UTC)\n- HDF5 commit hash caching (only runs when commits change)\n- Tests both HDF5 develop and 1.14 branches\n- 4 benchmarks: efc_no, cmpd_subset, many_dsets, vds\n- Grouped series format for side-by-side version comparison\n- Interactive Chart.js charts via github-action-benchmark\n- Publishes results to gh-pages branch\n\nFiles added:\n- .github/workflows/daily.yml: Main workflow\n- .github/scripts/parse_catch2_results.py: Parse Catch2 output\n- .github/scripts/combine_benchmark_results.py: Combine into grouped format\n- .github/scripts/create_benchmark_plots.py: Plotting utilities\n- .github/scripts/create_index_html.py: HTML generation\n- BENCHMARK_TESTING.md: Testing documentation\n- UPDATED_APPROACH.md: Design approach documentation\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-09T14:21:41-05:00",
          "tree_id": "5fb594967a6726833c14a42ec2569b849ce50228",
          "url": "https://github.com/hyoklee/hpf/commit/0119175c903375a83bbfd9d790e02b1c3f3ccd3a"
        },
        "date": 1760038982847,
        "tool": "catch2",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 629.701,
            "range": "± 6.37156",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "many_dsets 100",
            "value": 1066.7,
            "range": "± 24.9185",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "vds 100",
            "value": 1718.5900000000001,
            "range": "± 74.0336",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "cmpd_subset 100",
            "value": 5226.51,
            "range": "± 76.1886",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
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
        "date": 1760043989163,
        "tool": "catch2",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 625.229,
            "range": "± 4.96134",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "many_dsets 100",
            "value": 1055.61,
            "range": "± 17.8198",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "vds 100",
            "value": 1712.73,
            "range": "± 37.7054",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "cmpd_subset 100",
            "value": 5317.13,
            "range": "± 56.181",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
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
          "id": "5046dbcfe807daf6fb5ca0d00d7ba048471cf7dc",
          "message": "feat: add custom benchmark template with series support\n\nAdd custom index.html template for benchmarks that displays multiple\nseries (HDF5 develop vs 1.14) on a single chart, matching the\nnetcdf-c benchmark page style. Update workflow to copy this template\nto gh-pages branch after benchmark action runs.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-09T16:42:43-05:00",
          "tree_id": "e831657771d39f751bc7cb372d2926f17776ea55",
          "url": "https://github.com/hyoklee/hpf/commit/5046dbcfe807daf6fb5ca0d00d7ba048471cf7dc"
        },
        "date": 1760047336815,
        "tool": "catch2",
        "benches": [
          {
            "name": "efc_no 100",
            "value": 644.814,
            "range": "± 2.55585",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "many_dsets 100",
            "value": 1088.46,
            "range": "± 13.2338",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "vds 100",
            "value": 1590.22,
            "range": "± 26.486",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "cmpd_subset 100",
            "value": 5146.57,
            "range": "± 160.916",
            "unit": "ms",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}