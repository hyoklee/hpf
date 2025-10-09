window.BENCHMARK_DATA = {
  "lastUpdate": 1760038984365,
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
      }
    ]
  }
}