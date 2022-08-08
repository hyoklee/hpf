#include "stdlib.h"
#include <time.h>
#include "db.h"
#include "CAPIShell.h"
#include "hdf5.h"

#define TESTING(WHAT)   {printf("Testing %-62s",WHAT); fflush(stdout);}
#define PASSED()        {puts(" PASSED");fflush(stdout);}
#define H5_FAILED()     {puts("*FAILED*");fflush(stdout);}
#define TEST_ERROR      {H5_FAILED(); goto error;}
#define FileName        "results.xml"
#define FAIL            -1

const char *FILENAME[] = {
    "attribute.h5",
    NULL
};

#define DNAME 		"dset"
#define NUM_ATTRS	1000

/*-------------------------------------------------------------------------
 * Function:    test_perf_delete_attrs()
 *
 * Purpose:     Measure the time in deleting 1000 attributes attached to a dataset.
 *
 * Return:      Success:        0
 *              Failure:        1
 *-------------------------------------------------------------------------
 */
static herr_t
test_perf_delete_attrs(const char *filename, double *time_used)
{
    hid_t       fid;		/* file id */
    hid_t	did; 		/* dataset id */
    hid_t	dsid; 		/* dataspace id */
    hid_t       attr_id; 	/* attribute id */
    char        attr_name[1024];	/* name for an attribute */
    int         i;		/* local index variables */
    struct 	timeval start;

    TESTING("Performance for deleting attributes");
    if(H5Perf_init() <0)
        TEST_ERROR

    H5Perf_startTimer(&start);

    /* Open the file */
    if((fid = H5Fopen(filename, H5F_ACC_RDWR, H5P_DEFAULT)) < 0)
	TEST_ERROR

    /* Open the dataset. */
    if((did = H5Dopen(fid, DNAME)) < 0) TEST_ERROR

   for(i = 0; i < NUM_ATTRS; i++) {
       sprintf(attr_name, "Attr_%d", i);
       if(H5Adelete(did, attr_name) < 0) TEST_ERROR
   }

   if(H5Dclose(did) < 0) TEST_ERROR
   if(H5Fclose(fid) < 0) TEST_ERROR

    *time_used = H5Perf_endTimer(start);
    PASSED();

    return(0);

error:
   return(1);

} /* test_perf_delete_attrs() */

/*-------------------------------------------------------------------------
 * Function:    test_perf_write_attrs()
 *
 * Purpose:     Measure the time in writing 1000 attributes attached to a dataset.
 *
 * Return:      Success:        0
 *              Failure:        1
 *-------------------------------------------------------------------------
 */
static herr_t
test_perf_write_attrs(const char *filename, double *time_used)
{
    hid_t       fid;	/* file id */
    hid_t	did; 	/* dataset id */
    hid_t	dsid; 	/* dataspace id */
    hid_t       attr_id; 		/* attribute id */
    char        attr_name[1024];	/* name for an attribute */
    int         i;	/* local index variables */
    struct 	timeval start;
    double 	times = 0;

    TESTING("Performance for writing attributes");
    if(H5Perf_init() <0)
        TEST_ERROR

    H5Perf_startTimer(&start);

    while(times < 50) {

	/* Open the file */
	if((fid = H5Fopen(filename, H5F_ACC_RDWR, H5P_DEFAULT)) < 0)
	    TEST_ERROR

	/* Open the dataset. */
	if((did = H5Dopen(fid, DNAME)) < 0) TEST_ERROR

	for(i = 0; i < NUM_ATTRS; i++) {
	    sprintf(attr_name, "Attr_%d", i);
	    if((attr_id = H5Aopen_name(did, attr_name)) < 0)
		TEST_ERROR
	    if(H5Awrite(attr_id, H5T_NATIVE_INT, &i) < 0)
		TEST_ERROR
	    if(H5Aclose(attr_id) < 0) TEST_ERROR
	} /* end for */

	if(H5Dclose(did) < 0) TEST_ERROR
	if(H5Fclose(fid) < 0) TEST_ERROR

	++times;
    } /* end while */

    *time_used = H5Perf_endTimer(start);
    PASSED();

    return(0);

error:
   return(1);
} /* test_perf_write_attrs() */


/*-------------------------------------------------------------------------
 * Function:    test_perf_create_attrs()
 *
 * Purpose:     Measure the time in creating 1000 attributes attached to a dataset.
 *
 * Return:      Success:        0
 *              Failure:        1
 *-------------------------------------------------------------------------
 */
static herr_t
test_perf_create_attrs(const char *filename, double *time_used) 
{

    hid_t       fid;	/* file id */
    hid_t	did; 	/* dataset id */
    hid_t	dsid; 	/* dataspace id */
    hid_t 	pid; 	/* file access property id */
    hid_t       attr_id; 	/* attribute id */
    hid_t	sid ;	/* scalar id */
    hsize_t     dims[2] = {4, 6};		/* dimension size */
    int         dset_data[4][6];	/* dataset's data */
    char        attr_name[1024];	/* name for an attribute */
    int         i;	/* local index variables */
    struct 	timeval start;
    double 	times = 0;

    TESTING("Performance for creating attributes");
    if(H5Perf_init() < 0)
        TEST_ERROR

    H5Perf_startTimer(&start);

    while(times < 50) {
	if((fid = H5Fcreate(filename, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) < 0)
	    TEST_ERROR

	/* Create the data space for the dataset. */
	if((dsid = H5Screate_simple(2, dims, NULL)) < 0) TEST_ERROR

	/* Create the dataset. */
	if((did = H5Dcreate(fid, DNAME, H5T_STD_I32BE, dsid, H5P_DEFAULT)) < 0) 
	    TEST_ERROR

	/* Write the dataset. */
	if(H5Dwrite(did, H5T_NATIVE_INT, H5S_ALL, H5S_ALL, H5P_DEFAULT, dset_data) < 0) 
	    TEST_ERROR

	/* Create scalar dataspace */
	if((sid  = H5Screate(H5S_SCALAR)) < 0) TEST_ERROR

	for(i = 0; i < NUM_ATTRS; i++) {
	    sprintf(attr_name, "Attr_%d", i);
	    if((attr_id = H5Acreate(did, attr_name, H5T_NATIVE_INT, sid, H5P_DEFAULT)) < 0) 
		TEST_ERROR
	    if(H5Aclose(attr_id) < 0) TEST_ERROR
	} /* end for */

	if(H5Dclose(did) < 0) TEST_ERROR
	if(H5Sclose(dsid) < 0) TEST_ERROR
	if(H5Fclose(fid) < 0) TEST_ERROR
	
	++times;
    } /* end while */

    *time_used = H5Perf_endTimer(start);
    PASSED();

    return(0);

error:
   return(1);
} /* test_perf_create_attrs() */

/*-------------------------------------------------------------------------
 * Function:    database
 *
 * Purpose:     Save the time into the database.
 *		This routine is copied from other routines and modified accordingly.
 *
 * Return:      Success:        0
 *              Failure:        1
 *-------------------------------------------------------------------------
 */
int database(double cr_time, double wr_time, double del_time)
{
    time_t clock1;
    struct tm *t1;
    int    tyear, tmon, tday, thour, tmin, tsec;
    int    db_handle, env_action;
    int    find_routine, routine_handle;
    int    find_action1, find_action2, find_action3;

    char HOST_NAME[128]; 
    char HDF_VERSION[16];
  
    H5Perf_get_hostname(HOST_NAME);
    H5Perf_get_version(HDF_VERSION);

    
    time(&clock1);   
   
    /*getting the current local time: year,month,day,hour,min,sec */
    t1    = localtime(&clock1);
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

    if(H5Perf_addSetting(env_action, "OS", "Linux 2.6") < 0) {
        printf("Unable to add setting object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }
    int trial = 0;

    char* test_file_path = "/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perflib/";
    int filestorage_handle;
    
    if((filestorage_handle = H5Perf_createFileHandle(test_file_path, FileName,0)) < 0) {
        printf("Unable to create file storage object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    } 

    find_routine = H5Perf_find_routine(filestorage_handle,"Handling attributes");
    if(find_routine >= 0) {
        routine_handle = find_routine;

        find_action1 = H5Perf_find_action(routine_handle,"creating attributes");
        if(find_action1 <0) {
            if (H5Perf_addAction(routine_handle,
				 "creating attributes",
				 "measure time for creating attributes",
				 env_action) < 0){
	        printf("Unable to add action to test routine object at line %d\n",__LINE__);
	        H5Perf_end();
                goto error;
            }
        }

        if (H5Perf_addInstance(routine_handle,
			       "creating attributes", 
			       "creating attributes",
			       "create 1000 attributes (50 times)",
			       HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,cr_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action2 = H5Perf_find_action(routine_handle,"writing attributes");
        if(find_action2 <0) {
            if (H5Perf_addAction(routine_handle,
				 "writing attributes",
				 "measure time for writing attributes",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "writing attributes",
			      "writing attributes",
			      "write 1000 attributes (50 times)",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,wr_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action3 = H5Perf_find_action(routine_handle,
					  "deleting attributes");
        if(find_action3 <0) {
            if (H5Perf_addAction(routine_handle,
				 "deleting attributes",
				 "measure time for deleting attributes",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "deleting attributes",
			      "deleting attributes",
			      "delete 1000 attributes",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,del_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_update(filestorage_handle,routine_handle) < 0) {
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

        if(H5Perf_setRoutine(routine_handle, "Handling attributes",
			     "performance benchmark of creating, writing, deleting attributes",
			     "1.0",env_action) <0) {
            printf("Unable to set test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle,
			    "creating attributes",
			    "measure time for creating attributes",
			    env_action) < 0) {
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addInstance(routine_handle,
			       "creating attributes", 
			       "creating attributes",
			       "create 1000 attributes (50 times)",
			       HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,cr_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle,
			     "writing attributes",
			     "measure time for writing attributes",
			     env_action) < 0) {
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addInstance(routine_handle,
			      "writing attributes",
			      "writing attributes",
			      "write 1000 attributes (50 times)",			      
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,wr_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

	if (H5Perf_addAction(routine_handle,
			     "deleting attributes",
			     "measure time for deleting attributes",
			     env_action) < 0) {
	  printf("Unable to add action to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
	}
	    
        if(H5Perf_addInstance(routine_handle,
			      "deleting attributes",
			      "deleting attributes",
			      "delete 1000 attributes",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,del_time,-1) <0) {
	  printf("Unable to add instance to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
        }

	if(H5Perf_write (filestorage_handle, routine_handle) < 0) { 
	   printf("Unable to write to file storage at line %d\n",__LINE__);
	   H5Perf_end();
	   goto error;
	}

	if(H5Perf_close (filestorage_handle) < 0) {
	   printf("Unable to close file object at line %d\n",__LINE__);
 	   H5Perf_end();
	   goto error;
 	}
    } 
   
    if(H5Perf_close(routine_handle) < 0) {
	printf("Unable to close the routine handle at line %d\n",__LINE__);
	H5Perf_end();
	goto error;
    } 
 
    if(H5Perf_end() < 0) {
        printf("Unable to close the performance frame library at line %d\n",__LINE__);
        goto error;
    }

    return 0;

error:
    puts("*** DATABASE FAILED ***");
    return 1;
} /* database() */

int
main(void)
{
    double	cr_time = 0;	/* "create" time for attributes */
    double	wr_time = 0;	/* "write" time for attriutes */
    double	del_time = 0;	/* "delete" time for attributes */
    unsigned	nerrors = 0;	/* cumulative error count */

    nerrors += test_perf_create_attrs(FILENAME[0], &cr_time);

    nerrors += test_perf_write_attrs(FILENAME[0], &wr_time);

    nerrors += test_perf_delete_attrs(FILENAME[0], &del_time);

    /* Save the time into the database */
    nerrors += database(cr_time, wr_time, del_time);

    remove(FILENAME[0]);

    if(nerrors) TEST_ERROR;
    puts("All attributes performance tests passed.");

    return(0);

error:
    puts("*** TESTS FAILED ***");
    exit(1);
} /* main() */
