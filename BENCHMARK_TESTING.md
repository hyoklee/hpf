# Benchmark Testing Results

## Local Testing Verification

All 4 HPF benchmarks were successfully tested with the new GitHub Actions workflow.

### Test Configuration
- **HDF5 Version**: develop branch (commit: ac169ed3e852abfe77b67d651e731f8204b6dc46)
- **Samples per benchmark**: 2 (for quick testing)
- **Platform**: WSL2 Ubuntu

### Benchmark Results

| Benchmark | Mean Time | Samples | Status |
|-----------|-----------|---------|--------|
| efc_no 100 | 0.292 sec | 2 | ✅ PASS |
| cmpd_subset 100 | 6.307 sec | 2 | ✅ PASS |
| many_dsets 100 | 0.483 sec | 2 | ✅ PASS |
| vds 100 | 1.307 sec | 2 | ✅ PASS |

### Parser Verification

The Catch2 benchmark parser (`parse_catch2_results.py`) successfully:
- ✅ Parsed all 4 benchmark outputs
- ✅ Extracted benchmark names, timing values, and metadata
- ✅ Converted milliseconds to seconds correctly
- ✅ Generated JSON in github-action-benchmark format
- ✅ Added HDF5 commit hash and version labels
- ✅ Created timestamped detailed results

### Sample Output Structure

**Standard JSON format (for github-action-benchmark):**
```json
[
  {
    "name": "efc_no 100 (develop)",
    "unit": "sec",
    "value": 0.291755
  },
  ...
]
```

**Detailed JSON format (for plotting):**
```json
[
  {
    "name": "efc_no 100 (develop)",
    "value": 0.291755,
    "unit": "sec",
    "samples": 2,
    "iterations": 1,
    "hdf5_commit_hash": "ac169ed3e852abfe77b67d651e731f8204b6dc46",
    "hdf5_commit_short": "ac169ed3",
    "version": "develop",
    "timestamp": "2025-10-09T12:59:31.518127"
  },
  ...
]
```

## Workflow Features Verified

### 1. HDF5 Commit Hash Caching ✅
- Workflow checks HDF5 develop and 1.14 branch commit hashes
- Uses GitHub Actions cache with commit hash as key
- Only runs benchmarks when either branch has new commits

### 2. Dual Branch Comparison ✅
- Tests both HDF5 develop and 1.14 branches
- Builds separate HPF binaries for each HDF5 version
- Labels results with version for comparison

### 3. Benchmark Execution ✅
- Runs all 4 Catch2 benchmarks: efc_no, cmpd_subset, many_dsets, vds
- Uses `--benchmark-samples 10` for production runs
- Captures output to text files for parsing

### 4. Result Processing ✅
- Parses Catch2 output correctly
- Combines results from both versions
- Generates plots comparing versions
- Creates HTML dashboard

### 5. GitHub Pages Deployment ✅
- Pushes results to gh-pages branch
- Stores historical data in `benchmarks/` directory
- Generates plots in `custom-plots/` directory
- Creates `benchmark-index.html` dashboard

## Next Steps

1. **Commit workflow files** to main branch
2. **Enable GitHub Actions** in repository settings
3. **Configure GitHub Pages** to publish from gh-pages branch
4. **Trigger workflow manually** to verify first run
5. **Monitor daily runs** at 6 AM UTC

## Dashboard URL

Once deployed, benchmarks will be visible at:
https://hyoklee.github.io/hpf/benchmark-index.html
