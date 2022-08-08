/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Copyright by The HDF Group.                                               *
 * Copyright by the Board of Trustees of the University of Illinois.         *
 * All rights reserved.                                                      *
 *                                                                           *
 * This file is part of HDF5.  The full HDF5 copyright notice, including     *
 * terms governing use, modification, and redistribution, is contained in    *
 * the files COPYING and Copyright.html.  COPYING can be found at the root   *
 * of the source code distribution tree; Copyright.html can be found at the  *
 * root level of an installed copy of the electronic HDF5 document set and   *
 * is linked from the top-level documents page.  It can also be found at     *
 * http://hdfgroup.org/HDF5/doc/Copyright.html.  If you do not have          *
 * access to either file, you may request a copy from help@hdfgroup.org.     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
 * This program tests the performance of the library when extending a 2-D
 * dataset by rows, with early allocation enabled.
 *
 * Programmer:  Neil Fortner <nfortne2@hdfgroup.org>
 *              Friday, 19 March 2010
 */

#include "hdf5.h"
#include <assert.h>
#include <stdlib.h>
#include <string.h>
#include <sys/time.h>
#include <time.h>
#include "CAPIShell.h"
// #include "platform.h"
#include "db.h"
#define FILE_NAME          "results.xml"
#define USE_LOCAL_STORAGE

const char *FILENAME[] = {
    "linear_cached_io.h5",
    NULL
};

const char *DSET_NAME[] = {
    "dset",
    NULL
};

#define FAIL    -1
#define SUCCEED 1
#define TRUE    1
#define FALSE   0

/*
 * The name of the test is printed by saying TESTING("something") which will
 * result in the string `Testing something' being flushed to standard output.
 * If a test passes, fails, or is skipped then the PASSED(), H5_FAILED(), or
 * SKIPPED() macro should be called.  After H5_FAILED() or SKIPPED() the caller
 * should print additional information to stdout indented by at least four
 * spaces.  If the h5_errors() is used for automatic error handling then
 * the H5_FAILED() macro is invoked automatically when an API function fails.
 */
#define AT()            printf ("        at %s:%d in %s()...\n",              \
                                __FILE__, __LINE__, __FUNCTION__);
#define TESTING(WHAT)   {printf("Testing %-62s",WHAT); fflush(stdout);}
#define PASSED()        {puts(" PASSED");fflush(stdout);}
#define H5_FAILED()     {puts("*FAILED*");fflush(stdout);}
#define H5_WARNING()    {puts("*WARNING*");fflush(stdout);}
#define SKIPPED()       {puts(" -SKIP-");fflush(stdout);}
#define TEST_ERROR      {H5_FAILED(); AT(); goto error;}

#define MAX_DSET_SIZE_0 10000
#define DSET_SIZE_1     100
#define CHUNK_SIZE_0    2
#define CHUNK_SIZE_1    2



/*-------------------------------------------------------------------------
 * Function:    test_extend_early_alloc
 *
 * Purpose:     This program tests the performance of the library when extending
 *              a 2-D dataset by rows, with early allocation enabled.
 *
 * Return:      Success:        0
 *
 *              Failure:        1
 *
 * Programmer:  Neil Fortner
 *              Friday, 19 March 2010
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int
test_extend_early_alloc(const char *filename, double *time_used)
{
    hid_t   file;
    hid_t   dataset;
    hid_t   mspace, fspace;
    hid_t   dcpl;
    hsize_t mdims[1] = {DSET_SIZE_1};
    hsize_t fdims[2] = {1, DSET_SIZE_1};
    hsize_t fdims_max[2] = {MAX_DSET_SIZE_0, DSET_SIZE_1};
    hsize_t chunk_dims[2] = {CHUNK_SIZE_0, CHUNK_SIZE_1};
    hsize_t fstart[2] = {0, 0}, fcount[2] = {1, DSET_SIZE_1};
    int     wbuf[DSET_SIZE_1];
    struct timeval start;
    int     i = 0, j;

    /* Create the file for this test */
    if((file = H5Fcreate(filename, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) < 0)
        goto error;

    /* Create the data spaces */
    if((mspace = H5Screate_simple(1, mdims, NULL)) < 0)
        goto error;
    if((fspace = H5Screate_simple(2, fdims, fdims_max)) < 0)
        goto error;

    /* Create dataset creation property list */
    if((dcpl = H5Pcreate(H5P_DATASET_CREATE)) < 0)
        goto error;
    if(H5Pset_chunk(dcpl, 2, chunk_dims) < 0)
        goto error;
    if(H5Pset_alloc_time(dcpl, H5D_ALLOC_TIME_EARLY) < 0)
        goto error;

    TESTING("extending a chunked dataset with early allocation");

    /* Create chunked data set */
    if((dataset = H5Dcreate2(file, DSET_NAME[0], H5T_NATIVE_INT, fspace,
            H5P_DEFAULT, dcpl, H5P_DEFAULT)) < 0)
        goto error;

    /**************************** Start the timer ****************************/
    if(H5Perf_init() <0)
        goto error;
    H5Perf_startTimer(&start);

    /* Write first row */
    if(H5Sselect_hyperslab(fspace, H5S_SELECT_SET, fstart, NULL, fcount, NULL) < 0)
        goto error;
    for(j=0; j<DSET_SIZE_1; j++)
        wbuf[j] = 2 * j;
    if(H5Dwrite(dataset, H5T_NATIVE_INT, mspace, fspace, H5P_DEFAULT, wbuf) < 0)
        goto error;

    /* Write loop */
    for(i=1; i<MAX_DSET_SIZE_0; i++) {
        /* Extend dataset by one row */
        fdims[0] = i + 1;
        if(H5Dset_extent(dataset, fdims) < 0)
            goto error;
        if(H5Sset_extent_simple(fspace, 2, fdims, fdims_max) < 0)
            goto error;

        /* Select hyperslab in file */
        fstart[0] = i;
        if(H5Sselect_hyperslab(fspace, H5S_SELECT_SET, fstart, NULL, fcount, NULL) < 0)
            goto error;

        /* Generate write buffer */
        for(j=0; j<DSET_SIZE_1; j++)
            wbuf[j] = i + 2 * j;

        /* Write */
        if(H5Dwrite(dataset, H5T_NATIVE_CHAR, mspace, fspace, H5P_DEFAULT, wbuf) < 0)
            goto error;
    } /* end for */

    /* Close the file */
    if(H5Dclose(dataset) < 0)
        goto error;
    if(H5Fclose(file) < 0)
        goto error;

    /***************************** End the timer *****************************/
    *time_used = H5Perf_endTimer(start);
    if(H5Perf_end() <0)
        goto error;

    /* Close remaining IDs */
    if(H5Pclose(dcpl) < 0)
        goto error;
    if(H5Sclose(mspace) < 0)
        goto error;
    if(H5Sclose(fspace) < 0)
        goto error;

    PASSED();
    return 0;

error:
    puts("*** DATASET TESTS FAILED ***");
    return 1;
} /* end test_extend_early_alloc() */


/*-------------------------------------------------------------------------
 * Function:    database
 *
 * Purpose:     Save the time into the database.
 *
 * Return:      Success:        0
 *
 *              Failure:        1
 *
 * Programmer:  Neil Fortner
 *              Friday, 19 March 2010
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
int database(double extend_time)
{
#ifdef USE_LOCAL_STORAGE
  // char *test_file_path  = NULL;
    char* test_file_path = "/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perflib/";
    int   filestorage_handle;
#endif
    time_t clock1;
    struct tm *t1;
    int    tyear, tmon, tday, thour, tmin, tsec;
    int    db_handle, env_action;
    int    find_routine, routine_handle;
    int    find_action1,find_action2;

    /* <hyokyung 2007.08.31. 15:18:50> */
    char HOST_NAME[128];
    char HDF_VERSION[16];

    H5Perf_get_hostname(HOST_NAME);
    H5Perf_get_version(HDF_VERSION);
    /* <hyokyung 2007.08.31. 15:18:53> */

    time(&clock1);

    /*getting the current local time: year,month,day,hour,min,sec */
    t1     = localtime(&clock1);
    tyear = t1->tm_year + 1900;
    tmon  = t1->tm_mon  + 1;
    tday  = t1->tm_mday;
    thour = t1->tm_hour;
    tmin  = t1->tm_min;
    tsec  = t1->tm_sec;

    if(H5Perf_init() <0) {
        printf("Unable to initialize the API at line %d. \n",__LINE__);
        goto error;
    }

    if((env_action = H5Perf_createSetting()) < 0){
        printf("Unable to create setting object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }

    if (H5Perf_addSetting(env_action, "OS", "Linux 2.6") < 0){
        printf("Unable to add setting object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }

#ifdef USE_LOCAL_STORAGE
    /*
    test_file_path = getenv("FILE_PATH");

    if(test_file_path == NULL)
      test_file_path=getenv("PWD");
    if(test_file_path == NULL) {
      printf("The current directory of the stored file is NULL\n");
      printf("Please set the path of the file from the command line\n");
    }
    */

    if((filestorage_handle = H5Perf_createFileHandle(test_file_path, FILE_NAME,0)) < 0) {
      printf("Unable to create file storage object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }
#else
    int trial = 0;
    while ((db_handle=H5Perf_createMySQLHandle(server, dbname, user, passwd, port)) < 0 && trial < 10){
    // if ((db_handle=H5Perf_createMySQLHandle(server, dbname, user, passwd, port)) < 0){
      ++trial;
    }

    if(trial == 10){
        printf("Unable to create db_handle storage object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }
#endif

    find_routine = H5Perf_find_routine(filestorage_handle,"Extending early allocation dataset");
    if(find_routine>=0) {
        routine_handle = find_routine;

        find_action1 = H5Perf_find_action(routine_handle,"extend early alloc dset");

        if(find_action1 <0){
            if (H5Perf_addAction(routine_handle, "extend early alloc dset", "measure time for extending and writing a chunked dataset by hyperslabs with early allocation enabled",env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if (H5Perf_addInstance(routine_handle, "extend early alloc dset", "extend early alloc dset","extend 10000 rows",HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,extend_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action2 = H5Perf_find_action(routine_handle,"linear cached dataset read");

        if(H5Perf_update(db_handle,routine_handle) < 0){
            printf("Unable to update db_handle storage at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }
    } else {
        if((routine_handle = H5Perf_createRoutine())<0) {
            printf("Unable to create test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_setRoutine(routine_handle, "Extending early allocation dataset", "performance benchmark of extending and writing a chunked dataset by hyperslabs with early allocation enabled","1.0",env_action) <0) {
            printf("Unable to set test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle, "extend early alloc dset", "measure time for extending and writing a chunked dataset by hyperslabs with early allocation enabled",env_action) < 0){
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if (H5Perf_addInstance(routine_handle, "extend early alloc dset", "extend early alloc dset","extend 10000 rows",HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,extend_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

#ifdef USE_LOCAL_STORAGE
        if (H5Perf_write (filestorage_handle,routine_handle) < 0 ){
          printf("Unable to write to file storage at line %d\n",__LINE__);
          H5Perf_end();
          return -1;
        }
#else
        if (H5Perf_write(db_handle,routine_handle) < 0 ){
            printf("Unable to write to db_handle storage at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }
#endif
    }

    if (H5Perf_close(routine_handle) < 0){
        printf("Unable to close the routine handle at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }
#ifdef USE_LOCAL_STORAGE
    if (H5Perf_close(filestorage_handle) < 0){
      printf("Unable to close file object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }
#else
    if (H5Perf_close(db_handle) < 0){
        printf("Unable to close db_handle object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }
#endif


    if (H5Perf_end() < 0){
        printf("Unable to close the performance frame library at line %d\n",__LINE__);
        goto error;
    }

    return 0;

error:
    puts("*** DATABASE FAILED ***");
    return 1;
} /* end database() */


/*-------------------------------------------------------------------------
 * Function:    main
 *
 * Purpose:     Test performance of extending a chunked dataset with early
 *              chunk allocation.
 *
 * Return:      Success:         0
 *
 *              Failure:         1
 *
 * Programmer:  Neil Fortner
 *              Friday, 19 March 2010
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
int
main (void)
{
    unsigned    nerrors = 0;
    double      extend_time;

    puts("Testing incrementally extending a chunked dataset with early allocation:");
    nerrors += test_extend_early_alloc(FILENAME[0], &extend_time);

    /* Save the time into the database */
    nerrors += database(extend_time);

    if (nerrors) {
        printf("***** %u FAILURE%s! *****\n",
               nerrors, 1==nerrors?"":"S");
        exit(1);
    }

    remove(FILENAME[0]);
    puts("All extend early alloc dataset tests passed.");
    return 0;
}

