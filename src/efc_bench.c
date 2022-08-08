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
 * This program tests the performance of the library when writing a 5000 X 5000
 * chunked character dataset by columns and reading by rows.  The chunk cache
 * size is set large enough to hold a row/column of chunks, but not large enough
 * to hold the entire dataset.  Columns/rows are written/read in linear order.
 *
 * Programmer:  Neil Fortner <nfortne2@hdfgroup.org>
 *              5 February 2009
 */

#include "hdf5.h"
#include <sys/time.h>
#include <time.h>
#include "CAPIShell.h"
// #include "platform.h"
#include "db.h"
#define FILE_NAME          "results.xml"
#define USE_LOCAL_STORAGE

const char *FILENAME[] = {
    "efc.h5",
    "ext_file0.h5",
    "ext_file1.h5",
    "ext_file2.h5",
    "ext_file3.h5",
    "ext_file4.h5",
    "ext_file5.h5",
    "ext_file6.h5",
    "ext_file7.h5",
    "ext_file8.h5",
    "ext_file9.h5",
    NULL
};

const char *ELINKNAME[] = {
    "elink0",
    "elink1",
    "elink2",
    "elink3",
    "elink4",
    "elink5",
    "elink6",
    "elink7",
    "elink8",
    "elink9",
    NULL
};

#define NFILES  10
#define NITER  1000


/*-------------------------------------------------------------------------
 * Function:    efc_gen
 *
 * Purpose:     Generate test files used by the benchmarks.
 *
 * Return:      Success:        0
 *
 *              Failure:        1
 *
 * Programmer:  Neil Fortner
 *              Tuersday, 1 February 201
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int
efc_gen(const char *filename)
{
    hid_t       file1;
    hid_t       file2;
    unsigned    i;

    /* Create the file for this test */
    if((file1 = H5Fcreate(filename, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT))
            < 0)
        goto error;

    /* Create external files and links */
    for(i=0; i<NFILES; i++) {
        if((file2 = H5Fcreate(FILENAME[i+1], H5F_ACC_TRUNC, H5P_DEFAULT,
                H5P_DEFAULT)) < 0)
            goto error;
        if(H5Fclose(file2) < 0)
            goto error;

        if(H5Lcreate_external(FILENAME[i+1], "/", file1, ELINKNAME[i],
                H5P_DEFAULT, H5P_DEFAULT) < 0)
            goto error;
    } /* end for */

    if(H5Fclose(file1) < 0)
        goto error;

    return 0;

error:
    return 1;
} /* end efc_gen() */


/*-------------------------------------------------------------------------
 * Function:    t_no_efc
 *
 * Purpose:     Tests the performance of the library when opening NFILES
 *              files through external links NITER times.  Does not use
 *              the external file cache.
 *
 * Return:      Success:        0
 *
 *              Failure:        1
 *
 * Programmer:  Neil Fortner
 *              Thursday, 5 February 2009
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int
t_no_efc(const char *filename, double *time_used)
{
    hid_t       file;
    hid_t       group;
    struct timeval start;
    unsigned    i, j;

    /* Open the file for this test */
    if((file = H5Fopen(filename, H5F_ACC_RDONLY, H5P_DEFAULT)) < 0)
        goto error;

    /**************************** Start the timer ****************************/
    if(H5Perf_init() <0)
        goto error;
    H5Perf_startTimer(&start);

    /* Loop NITER times */
    for(i=0; i<NITER; i++)
        /* Open each external link */
        for(j=0; j<NFILES; j++) {
            if((group = H5Gopen2(file, ELINKNAME[j], H5P_DEFAULT)) < 0)
                goto error;

            if(H5Gclose(group) < 0)
                goto error;
        } /* end for */

    /***************************** End the timer *****************************/
    *time_used = H5Perf_endTimer(start);
    if(H5Perf_end() <0)
        goto error;

    if(H5Fclose(file) < 0)
        goto error;

    return 0;

error:
    return 1;
} /* end t_no_efc() */


/*-------------------------------------------------------------------------
 * Function:    test_linear_cached_read
 *
 * Purpose:     Tests the performance of the library when opening NFILES
 *              files through external links NITER times.  Uses an
 *              external file cache of size NFILES.
 *
 * Return:      Success:        0
 *
 *              Failure:        1
 *
 * Programmer:  Neil Fortner
 *              Tuesday, 1 February 2011
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int
t_with_efc(const char *filename, double *time_used)
{
    hid_t       file;
    hid_t       group;
    hid_t       fapl;
    struct timeval start;
    unsigned    i, j;

    /* Create the FAPL */
    if((fapl = H5Pcreate(H5P_FILE_ACCESS)) < 0)
        goto error;

    /* Enable the EFC */
    if(H5Pset_elink_file_cache_size(fapl, NFILES) < 0)
        goto error;

    /* Open the file for this test */
    if((file = H5Fopen(filename, H5F_ACC_RDONLY, fapl)) < 0)
        goto error;

    /**************************** Start the timer ****************************/
    if(H5Perf_init() <0)
        goto error;
    H5Perf_startTimer(&start);

    /* Loop NITER times */
    for(i=0; i<NITER; i++)
        /* Open each external link */
        for(j=0; j<NFILES; j++) {
            if((group = H5Gopen2(file, ELINKNAME[j], H5P_DEFAULT)) < 0)
                goto error;

            if(H5Gclose(group) < 0)
                goto error;
        } /* end for */

    /***************************** End the timer *****************************/
    *time_used = H5Perf_endTimer(start);
    if(H5Perf_end() <0)
        goto error;

    if(H5Fclose(file) < 0)
        goto error;
    if(H5Pclose(fapl) < 0)
        goto error;

    return 0;

error:
    return 1;
} /* end t_with_efc() */


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
 *              1 February 2011
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
int database(double no_efc_time, double with_efc_time)
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

    find_routine = H5Perf_find_routine(filestorage_handle,"External File Cache");
    if(find_routine>=0) {
        routine_handle = find_routine;

        find_action1 = H5Perf_find_action(routine_handle,"elink traversal without EFC");

        if(find_action1 <0){
            if (H5Perf_addAction(routine_handle, "elink traversal without EFC", "measure time for opening 10 files 1000 times without an external file cache",env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if (H5Perf_addInstance(routine_handle, "elink traversal without EFC", "elink traversal without EFC","open 10 files 1000 times",HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,no_efc_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action2 = H5Perf_find_action(routine_handle,"elink_traversal with EFC");

        if(find_action2 <0){
            if (H5Perf_addAction(routine_handle, "elink_traversal with EFC", "measure time for opening 10 files 1000 times with an external file cache",env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle, "elink_traversal with EFC", "elink_traversal with EFC","open 10 files 1000 times", HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,with_efc_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

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

        if(H5Perf_setRoutine(routine_handle, "External File Cache", "performance benchmark of traversing external links with and without the external file cache","1.0",env_action) <0) {
            printf("Unable to set test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle, "elink traversal without EFC", "measure time for opening 10 files 1000 times without an external file cache",env_action) < 0){
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if (H5Perf_addInstance(routine_handle, "elink traversal without EFC", "elink traversal without EFC","open 10 files 1000 times",HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,no_efc_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if (H5Perf_addAction(routine_handle, "elink traversal with EFC", "measure time for opening 10 files 1000 times with an external file cache",env_action) < 0){
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addInstance(routine_handle, "elink traversal with EFC", "elink traversal with EFC","open 10 files 1000 times", HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,with_efc_time,-1) <0) {
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
 * Purpose:     Test different cases of I/O for compound data and the
 *              compound optimization for the Chicago company.
 *
 * Return:      Success:         0
 *
 *              Failure:         1
 *
 * Programmer:  Neil Fortner
 *              1 February 2011
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
int
main (void)
{
    double      no_efc_time, with_efc_time;
    int         ret_value = 0;
    unsigned    i;

    if(efc_gen(FILENAME[0]) < 0) {
        ret_value = 1;
        goto done;
    } /* end if */

    if(t_no_efc(FILENAME[0], &no_efc_time) < 0) {
        ret_value = 1;
        goto done;
    } /* end if */

    if(t_with_efc(FILENAME[0], &with_efc_time) < 0) {
        ret_value = 1;
        goto done;
    } /* end if */

    /* Save the time into the database */
    if(database(no_efc_time, with_efc_time) < 0) {
        ret_value = 1;
        goto done;
    } /* end if */

done:
    for(i=0; FILENAME[i]; i++)
        remove(FILENAME[i]);

    return(ret_value);
}

