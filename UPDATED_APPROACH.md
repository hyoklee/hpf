# Updated Benchmark Approach - Using Interactive Charts

## Changes Made

### 1. Removed PNG Generation
- Removed `create_benchmark_plots.py` plotting functions
- Removed PNG file generation steps from workflow
- No more custom-plots directory needed

### 2. Using github-action-benchmark's Interactive Charts
- The github-action-benchmark automatically creates:
  - `benchmarks/index.html` - Interactive Chart.js visualizations
  - `benchmarks/data.js` - Raw benchmark data
  - Charts showing both HDF5 versions on the same plot

### 3. Updated Data Format - Grouped Series
The `combine_benchmark_results.py` now outputs the **grouped series** format:

```json
[
  {
    "name": "efc_no 100",
    "unit": "sec",
    "value": 0.291755,
    "series": [
      {
        "name": "HDF5 1.14",
        "value": 0.291755,
        "unit": "sec"
      },
      {
        "name": "HDF5 develop",
        "value": 0.291755,
        "unit": "sec",
        "extra": "HDF5 develop - ac169ed"
      }
    ]
  }
]
```

This format tells github-action-benchmark to:
- Create ONE chart per benchmark
- Show BOTH versions as separate lines on the same chart
- Use Chart.js for interactive, zoomable charts

### 4. Simplified Workflow

The workflow now:
1. Runs benchmarks with both HDF5 versions
2. Parses results to JSON
3. Combines into grouped series format
4. Passes to github-action-benchmark
5. github-action-benchmark automatically creates interactive charts

No custom plotting code needed!

### 5. Result

Users will see at `https://hyoklee.github.io/hpf/benchmarks/`:
- **4 interactive charts** (one per benchmark)
- **Each chart shows 2 lines**: HDF5 1.14 (blue) and develop (red)
- **Interactive features**: hover for values, zoom, pan
- **Timeline view**: Performance over time

Just like the netcdf-c benchmarks!

## Files Modified

1. `.github/workflows/daily.yml` - Removed PNG generation steps
2. `.github/scripts/combine_benchmark_results.py` - Updated to grouped series format
3. `.github/scripts/create_index_html.py` - Can be simplified or removed
4. `.github/scripts/create_benchmark_plots.py` - No longer needed for PNG generation

## Testing

Verified locally that the grouped JSON format is correct:
- 4 benchmarks: efc_no, cmpd_subset, many_dsets, vds
- Each has series array with both versions
- Format matches netcdf-c data.js structure
