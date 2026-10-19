
# HDF Performance Framework

[Dashboard](https://github.com/hyoklee/hpf/wiki#dashboards)

## About

This directory contains tests 
from [HDF Performance Framework 1.0.0](https://hpf.hdfgroup.org/).
These tests do not require MPI.

## Tests

* src/cmpd_subset.cpp: Compound dataset
* src/efc_no.cpp: No external file cache
* src/many_dsets.cpp: Many (> 2K) datasets
* src/write2.cpp: Group creation (10K, 200K), 1M compound records, record appends (1.0.0 write2.c)
* src/vds.cpp: Virtudal dataset
