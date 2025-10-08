# VDS Test Performance Comparison

## Test Date
2025-10-08

## Test Configuration
- Test: VDS performance benchmark
- Samples: 100 iterations per test
- Timeout: 300 seconds
- Platform: Linux 6.6.87.2-microsoft-standard-WSL2

## All Results Summary (Ranked by Performance)

| Rank | HDF5 Version | Mean Time | Std Dev | Performance |
|------|--------------|-----------|---------|-------------|
| **1** | **1_14 branch** | **1.597 s** | **53.83 ms** | **Fastest** ✓ |
| 2 | develop branch | 1.734 s | 159.62 ms | +8.6% slower |
| 3 | commit 20557aea82 | 2.152 s | 217.92 ms | +34.7% slower |
| 4 | commit ac169ed3e8 | 2.201 s | 321.96 ms | +37.8% slower |

## Detailed Results

### HDF5 1_14 branch (hdf5_1_14) - BEST PERFORMANCE
- Mean: **1.597 s**
- Low mean: 1.586 s
- High mean: 1.607 s
- Std dev: 53.83 ms (most consistent)
- Range: 21 ms

### HDF5 develop branch (latest)
- Mean: **1.734 s**
- Low mean: 1.709 s
- High mean: 1.776 s
- Std dev: 159.62 ms
- Range: 67 ms

### HDF5 commit 20557aea82 (Update Dockerfile #5905)
- Mean: **2.152 s**
- Low mean: 2.112 s
- High mean: 2.198 s
- Std dev: 217.92 ms
- Range: 86 ms

### HDF5 commit ac169ed3e8 (Optimize VDS operations with r-tree #5843)
- Mean: **2.201 s**
- Low mean: 2.141 s
- High mean: 2.267 s
- Std dev: 321.96 ms (least consistent)
- Range: 126 ms

## Key Findings

1. **The 1_14 branch is significantly faster** (~27% faster than the two specific commits tested)
2. **The develop branch shows improved performance** over the two tested commits, but is still ~8.6% slower than 1_14
3. **The 1_14 branch has the most consistent performance** with the lowest standard deviation (53.83 ms)
4. **Performance degradation appears between 1_14 and 2.0 releases** for this VDS workload
5. **Commit ac169ed3e8** (which includes "Optimize VDS operations with r-tree") actually performed slower and with higher variance than commit 20557aea82

## Performance Comparison

### Speed Relative to 1_14 branch (baseline)
- 1_14 branch: **1.00x** (baseline)
- develop branch: **0.92x** (8.6% slower)
- commit 20557aea82: **0.74x** (34.7% slower)
- commit ac169ed3e8: **0.73x** (37.8% slower)

### Consistency (Lower is Better)
- 1_14 branch: **53.83 ms** (most consistent)
- develop branch: 159.62 ms (2.96x more variable)
- commit 20557aea82: 217.92 ms (4.05x more variable)
- commit ac169ed3e8: 321.96 ms (5.98x more variable)

## Recommendations

1. For VDS performance-critical applications, **HDF5 1.14 branch is recommended**
2. Investigate the performance regression between 1_14 and develop/2.0 branches
3. The r-tree optimization in commit ac169ed3e8 may need review for this VDS workload
4. Consider profiling to identify bottlenecks introduced in the 2.0 development

## Test Environment

- Working directory: `/home/hyoklee/hpf/build`
- HDF5 repository: `/home/hyoklee/hdf5.HDFGroup`
- Build type: Release
- Compiler: GCC 13.3.0
- C++ Standard: Auto-detected
