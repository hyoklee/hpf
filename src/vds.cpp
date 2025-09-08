#define CATCH_CONFIG_MAIN
#include <catch2/catch.hpp>

#include "hdf5.h"
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define FILE    "h5-vds-performance-data.h5"

#define RANK    2

#define SRC_DATASET "/A"
#define SRC_DIM0    1000
#define SRC_DIM1    100

#define VDS_DATASET "/B"
#define VDS_DIM0    1000
#define VDS_DIM1    10000
#define VDS_CHUNK0  10
#define VDS_CHUNK1  100

#define MEM_DIM0    1
#define MEM_DIM1    1

double benchmark(const char *dataset, hsize_t *dims)
{
    hid_t   file, space, dset, mem_space; /* Handles */
    herr_t  status;
    hsize_t memdims[2] = {MEM_DIM0, MEM_DIM1}; /* Memory dimensions for reading */
    int rdata[MEM_DIM0][MEM_DIM1];             /* read buffer for performance testing */
    hsize_t i;
    hsize_t start[2], count[2], block[2];      /* Hyperslab parameters */
    clock_t clock_start, clock_end;
    double cpu_time_used;

    file = H5Fopen(FILE, H5F_ACC_RDONLY, H5P_DEFAULT);

    /* test performance of reading from SRC dataset */
    clock_start = clock();
    for (i = 0; i < 100; i++) {
        dset = H5Dopen2(file, dataset, H5P_DEFAULT);
        /* read single point at 0, 0 */
        start[0] = 0;
        start[1] = 0;
        count[0] = 1;
        count[1] = 1;
        block[0] = 1;
        block[1] = 1;

        mem_space = H5Screate_simple(RANK, memdims, NULL);
        status = H5Sselect_hyperslab(mem_space, H5S_SELECT_SET, start, NULL, count, block);

        space = H5Screate_simple(RANK, dims, NULL);
        status = H5Sselect_hyperslab(space, H5S_SELECT_SET, start, NULL, count, block);

        status = H5Dread(dset, H5T_NATIVE_INT, mem_space, space, H5P_DEFAULT, rdata[0]);

        status = H5Sclose(space);
        status = H5Sclose(mem_space);
        status = H5Dclose(dset);
    }
    clock_end = clock();
    cpu_time_used = ((double) (clock_end - clock_start)) / CLOCKS_PER_SEC;
    return cpu_time_used;
}

int
test(void)
{
    hid_t   file, src_space, vds_space, src_dset, vds_dset; /* Handles */
    hid_t   dcpl;
    herr_t  status;
    hsize_t vdsdims[2] = {VDS_DIM0, VDS_DIM1}; /* Virtual dataset dimension */
    hsize_t srcdims[2] = {SRC_DIM0, SRC_DIM1}; /* Source dataset dimensions */
    int wdata[SRC_DIM0][SRC_DIM1];             /* Write buffer for source dataset */
    hsize_t i, j;
    hsize_t start[2], count[2], block[2];      /* Hyperslab parameters */

    double cpu_time_used;

    assert(VDS_CHUNK1 == SRC_DIM1);

    /* file for both source and virtual dataset */
    file   = H5Fcreate(FILE, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT);

    /*
     * Initialize data.
     */
    for (i = 0; i < SRC_DIM0; i++)
        for (j = 0; j < SRC_DIM1; j++)
            wdata[i][j] = i + j;

    /*
     * Create the source dataset and write data.
     */

    src_space = H5Screate_simple(RANK, srcdims, NULL);
    src_dset  = H5Dcreate2(file, SRC_DATASET, H5T_NATIVE_INT, src_space, H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT);
    status = H5Dwrite(src_dset, H5T_NATIVE_INT, H5S_ALL, H5S_ALL, H5P_DEFAULT, wdata[0]);
    status = H5Sclose(src_space);
    status = H5Dclose(src_dset);

    /* Create VDS dataspace.  */
    src_space = H5Screate_simple(RANK, srcdims, NULL);
    vds_space = H5Screate_simple(RANK, vdsdims, NULL);
    dcpl = H5Pcreate(H5P_DATASET_CREATE);

    /*
     * Build the mappings.
     */
    for (i = 0; i < VDS_DIM0; i += VDS_CHUNK0) {
        for (j = 0; j < VDS_DIM1; j += VDS_CHUNK1) {
            /* Initialize hyperslab values for src. */
            start[0] = (i + j) % SRC_DIM0;
            start[1] = 0;
            count[0] = 1;
            count[1] = 1;
            block[0] = VDS_CHUNK0;
            block[1] = VDS_CHUNK1;
            status = H5Sselect_hyperslab(src_space, H5S_SELECT_SET, start, NULL, count, block);
            /* Initialize hyperslab values for dst. */
            start[0] = i;
            start[1] = j;
            count[0] = 1;
            count[1] = 1;
            block[0] = VDS_CHUNK0;
            block[1] = VDS_CHUNK1;
            status = H5Sselect_hyperslab(vds_space, H5S_SELECT_SET, start, NULL, count, block);
            /* add mapping */
            status = H5Pset_virtual(dcpl, vds_space, FILE, SRC_DATASET, src_space);
        }
    }

    /* Create a virtual dataset. */
    vds_dset = H5Dcreate2(file, VDS_DATASET, H5T_NATIVE_INT, vds_space, H5P_DEFAULT, dcpl, H5P_DEFAULT);
    status = H5Sclose(vds_space);
    status = H5Sclose(src_space);
    status = H5Dclose(vds_dset);

    status = H5Fclose(file);

    /*
     * Test performance of repeatedly reopening virtual dataset and reading a single point.
     */

    /* test performance of reading from SRC dataset
    cpu_time_used = benchmark(SRC_DATASET, srcdims);
    printf("SRC time: %f seconds\n", cpu_time_used);
     */
    
    /* test performance of reading from VDS dataset */
    cpu_time_used = benchmark(VDS_DATASET, vdsdims);
    /* printf("VDS time: %f seconds\n", cpu_time_used); */

    return 0;
}

TEST_CASE("vds") {
  BENCHMARK("vds 100") {
      test();
  };
}
