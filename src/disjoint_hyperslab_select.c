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
 * This program tests the performance of hyperslab selection for two
 * non-overlapping spans. The time ideally spent on such hyperslab selection
 * should be constant.
 *
 * Programmer:  Chao Mei <chaomei2@hdfgroup.org>
 *              Wednesday, 22 June 2011
 */

#include "hdf5.h"
#include <assert.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <sys/time.h>
#include <time.h>
#include "CAPIShell.h"
#include "db.h"

#define RESULT_FILENAME          "results.xml"
#define USE_LOCAL_STORAGE

/* Set up global variables for the HDF5 peformance test framework.
 * We only have one global routine. But there are multiple actions associated with
 * this routine. Each action has multiple instances, but all of them should share
 * the same dataset name and description.
 */
static const char *routine_name = "Selecting disjoint hyperslabs on an existing slab";
static const char *routine_desc = "performance benchmark of selection for disjoint hyperslabs";
static const char *routine_ver = "1.0";
static const int num_actions = 2;
static const char *action_names[2] = {
    "select disjoint hyperslabs for 1000 times",
    "select disjoint hyperslabs for 10000 times"
};
static const char *action_desc[2] = {
    "measure the average time of one hyperslab selection over 1000 continous selections of disjoint hyperslabs",
    "measure the average time of one hyperslab selection over 10000 continous selections of disjoint hyperslabs"
};
static const char *instance_dataset_names[2] = {
    "select 1000 disjoint hyperslabs dset",
    "select 10000 disjoint hyperslabs dset"
};
static const char *instance_dataset_desc[2] = {
    "1000 disjoint hyperslab selections",
    "10000 disjoint hyperslab selections"
};
static double avg_times_of_selection[2] = {0.0, 0.0};
/* Since the average time of each selection takes about hundreds
 * of microseconds, so amplifying the result to show the performance
 * results more clearly
 */
#define TIME_AMPLIFICATION_DEGREE 10000

/* Set up global variables for the user test program */
static const char *SELECT_FILENAME = "select_test.h5m";
static const char *RANGE_FILENAME = "range_list.txt";
#define MAX_BUFFER_SIZE 1000000

typedef struct RangeList {
    unsigned int *range_list;
    long num_ranges;
} RangeList;

/* Declarations for user test programs */
static int test_select_disjoint_hyperslabs(); /* the main user test program */
static RangeList *init_test(); /* read the input ranges of slabs for selection */
static int select_disjoint_hyperslabs(RangeList *input, int num_selections, 
                                      double* time);

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

/*-------------------------------------------------------------------------
 * Function:    test_select_disjoint_hyperslabs
 *
 * Purpose:     This program tests the performance of hyperslab "OR" selection
 *              on an existing slab with a non-overlapping slab. Such selection
 *              will be repeated for a certain number of times. This test is
 *              motivated by the type of interaction between MOAB-based mesh
 *              application with HDF5.
 *              Ideally, the time spent on each such repeated selection should
 *              be same (i.e. a constant cost for each hyperslab selection)
 *
 * Return:      Success:        0
 *
 *              Failure:        1
 *
 * Programmer:  Chao Mei
 *              Wednesday, 22 June 2011
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int test_select_disjoint_hyperslabs()
{
    RangeList *input = NULL;
    double total_time = 0.0;

    TESTING("selecting disjoint hyerslabs continously");
    /*
    if(H5Perf_init() <0)
        goto error_noend;
    */
    if(NULL == (input = init_test())) 
        goto error;

    /* Perform the first set of 1000 continous selections */
    if(select_disjoint_hyperslabs(input, 1000, &total_time) < 0) 
        goto error;
    printf("time=%lf\n", total_time);

    avg_times_of_selection[0] = total_time/1000*TIME_AMPLIFICATION_DEGREE;

    /* Perform the second set of 10000 continous selections */
    if(select_disjoint_hyperslabs(input, 10000, &total_time) < 0) goto error;
    avg_times_of_selection[1] = total_time/10000*TIME_AMPLIFICATION_DEGREE;
    printf("time=%lf\n", total_time);

    free(input->range_list);
    free(input);

    add_time_to_database();
    /*
    if(H5Perf_end() <0)
        goto error_noend;
    */
    PASSED();
    return 0;

 error:
    H5Perf_end();
 error_noend:
    puts("*** DISJOINT HYPERSLAB SELECTION TESTS FAILED ***");
    return 1;
} /* end test_select_disjoint_hyperslabs() */

/*-------------------------------------------------------------------------
 * Function:    init_test
 *
 * Purpose:     Read the slabs's dimension from the text file.
 *
 * Return:      Success:        pointer to the input
 *
 *              Failure:        NULL
 *
 * Programmer:  Chao Mei
 *              Wednesday, 22 June 2011
 *
 *-------------------------------------------------------------------------
 */
static RangeList *init_test()
{
    RangeList *ret = NULL;
    unsigned int *buffer = NULL;
    long count = 0;
    unsigned int val = 0;

    FILE *ifp = fopen(RANGE_FILENAME, "r");
    if(NULL == ifp) return NULL;

    ret = malloc(sizeof(RangeList));
    buffer = malloc(sizeof(unsigned int)*MAX_BUFFER_SIZE);
    while(1) {
        int err = fscanf(ifp, "%ud", &val);
        if (err == EOF || err == 0) break;
        buffer[count++] = val;
        if(count == MAX_BUFFER_SIZE) {
            printf("Have reached the maximum buffer for input\n");
            free(ret);
            free(buffer);
            return NULL;
        }
    }

    ret->num_ranges = count/2;
    ret->range_list = malloc(sizeof(unsigned int)*count);
    memcpy((void *)ret->range_list, (void *)buffer, sizeof(unsigned int)*count);

    fclose(ifp);
    free(buffer);
    return ret;
}

/*-------------------------------------------------------------------------
 * Function:    select_disjoint_hyperslabs
 *
 * Purpose:     Perform the selection continously for "num_selections" times
 *              based on the "input", and record the time in "exec_time"
 *
 * Return:      Success:        0
 *              Failure:        -1
 *
 * Programmer:  Chao Mei
 *              Wednesday, 22 June 2011
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int select_disjoint_hyperslabs(RangeList *input, int num_selections, 
                                      double *exec_time)
{
    hid_t       file_id, plist_id, filespace, dset_id;
    hsize_t     file_dim = 0;
    hsize_t     offset = 0;
    hsize_t     count = 0;
    long nranges, i;
    H5S_seloper_t op;
    struct timeval start_time;

    long num_ranges = input->num_ranges;
    unsigned int *range_list = input->range_list;

    if (num_selections > num_ranges) {
        printf("Specified range count %ld exceeds maximum of %ld\n",
               num_selections, num_ranges );
        goto error;
    }

    /* Set up file access property list with parallel I/O access */
    if((plist_id = H5Pcreate(H5P_FILE_ACCESS)) < 0) goto error;

    /* Create a new file collectively. */
    if((file_id = H5Fcreate(SELECT_FILENAME, H5F_ACC_TRUNC, H5P_DEFAULT, plist_id)) < 0) 
        goto error;

    if(H5Pclose(plist_id) < 0) goto error;

    /* Create data space */
    file_dim = range_list[2*num_ranges-1] + 1;
    if((filespace = H5Screate_simple(1, &file_dim, NULL)) < 0) goto error;
    dset_id = H5Dcreate(file_id, "data", H5T_NATIVE_INT, filespace, 
                        H5P_DEFAULT);
    if(dset_id < 0) goto error;
    if(H5Sclose(filespace) < 0) goto error;

    /* select (file) hyperslabs */
    if((filespace = H5Dget_space(dset_id)) < 0) goto error;

    H5Perf_startTimer(&start_time);
    op = H5S_SELECT_SET;
    for (i = 0; i < num_selections; ++i) {
        offset = range_list[2*i];
        count = range_list[2*i+1] - range_list[2*i] + 1;
        if(H5Sselect_hyperslab(filespace, op, &offset, NULL, &count, NULL)<0) goto error;
        op = H5S_SELECT_OR;
    }
    *exec_time = H5Perf_endTimer(start_time);

    if(H5Dclose(dset_id) < 0) goto error;
    if(H5Sclose(filespace) < 0) goto error;
    if(H5Fclose(file_id)<0) goto error;

    /* delete the temporary selection file */
    remove(SELECT_FILENAME);

    return 0;

 error:
    puts("*** DISJOINT HYPERSLAB SELECTION TESTS FAILED ***");
    return -1;
}

/*-------------------------------------------------------------------------
 * Function:    add_time_to_database
 *
 * Purpose:     Save the times into the database based on the globally-set
 *              variables.
 *
 * Return:      Success:        0
 *
 *              Failure:        -1
 *
 * Programmer:  Chao Mei
 *              Wednesday, 22 June 2011
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
int add_time_to_database()
{
#ifdef USE_LOCAL_STORAGE
    char* test_file_path = "/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perflib/";
#endif
    time_t clock1;
    struct tm *t1;
    int    tyear, tmon, tday, thour, tmin, tsec;
    int    storage_handle, env_action;
    int    routine_handle;
    int    action_handle;
    int    i;

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

    if((env_action = H5Perf_createSetting()) < 0) {
        printf("Unable to create setting object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }

    if (H5Perf_addSetting(env_action, "OS", "Linux 2.6") < 0) {
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

    if((storage_handle = H5Perf_createFileHandle(test_file_path, RESULT_FILENAME, 0)) < 0) {
        printf("Unable to create file storage object at line %d\n",__LINE__);
        H5Perf_end();
        return -1;
    }
#else
    int trial = 0;
    while ((storage_handle=H5Perf_createMySQLHandle(server, dbname, user, passwd, port)) < 0 ) {
        if(++trial >= 10) break;
    }

    if(trial == 10) {
        printf("Unable to create db_handle storage object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }
#endif

    routine_handle = H5Perf_find_routine(storage_handle,routine_name);
    if(routine_handle < 0) {
        /* routine not found, needs to be created */
        if((routine_handle = H5Perf_createRoutine())<0) {
            printf("Unable to create test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_setRoutine(routine_handle, routine_name, routine_desc, routine_ver, env_action) <0) {
            printf("Unable to set test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }


        for(i=0; i<num_actions; i++) {
            action_handle = H5Perf_find_action(routine_handle, action_names[i]);
            if(action_handle < 0) {
                if (H5Perf_addAction(routine_handle, action_names[i], action_desc[i],env_action) < 0) {
                    printf("Unable to add action %d to test routine object at line %d\n",i, __LINE__);
                    H5Perf_end();
                    goto error;
                }
            }

            /* not to check if the instance is a repetition ?? */
            if (H5Perf_addInstance(routine_handle, action_names[i], instance_dataset_names[i],instance_dataset_desc[i],HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,avg_times_of_selection[i],-1) < 0) {
                printf("Unable to add instance %d to test routine object at line %d\n",i, __LINE__);
                H5Perf_end();
                goto error;
            }

            if(H5Perf_update(storage_handle,routine_handle) < 0) {
                printf("Unable to update the storage at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        } /* end for */


        if (H5Perf_write(storage_handle,routine_handle) < 0 ) {
            printf("Unable to write to storage at line %d\n",__LINE__);
            H5Perf_end();
            return -1;
        }
    }

    if (H5Perf_close(routine_handle) < 0) {
        printf("Unable to close the routine handle at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }

    if (H5Perf_close(storage_handle) < 0) {
        printf("Unable to close file object at line %d\n",__LINE__);
        H5Perf_end();
        return -1;
    }

    if (H5Perf_end() < 0) {
        printf("Unable to close the performance frame library at line %d\n",__LINE__);
        goto error;
    }

    return 0;

 error:
    fprintf(stderr, "*** DATABASE FAILED ***");
    return -1;
} /* end database() */

/*-------------------------------------------------------------------------
 * Function:    main
 *
 * Purpose:     This program tests the performance of hyperslab "OR" selection
 *              on an existing slab with a non-overlapping slab. Such selection
 *              will be repeated for a certain number of times. This test is
 *              motivated by the type of interaction between MOAB-based mesh
 *              application with HDF5.
 *              Ideally, the time spent on each such repeated selection should
 *              be same (i.e. a constant cost for each hyperslab selection)
 *
 * Return:      Success:         0
 *
 *              Failure:         1
 *
 * Programmer:  Chao Mei
 *              Wednesday, 22 June 2011
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
int
main (void)
{
    unsigned    nerrors = 0;
    double      extend_time;

    puts("Testing performance of hyperslab selection for non-overlapping slabs:");
    nerrors += test_select_disjoint_hyperslabs();

    /* Save the time into the database */
    nerrors += add_time_to_database();

    if (nerrors) {
        printf("***** %u FAILURE%s! *****\n",
               nerrors, 1==nerrors?"":"S");
        exit(1);
    }

    puts("All tests of hyerslab selection for non-overlapping slabs passed.");
    return 0;
}

