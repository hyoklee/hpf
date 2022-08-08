#include "stdlib.h"
#include <string.h>
#include <time.h>
#include <string.h>
#include "db.h"
#include "CAPIShell.h"
#include "hdf5.h"

#define TESTING(WHAT)   {printf("Testing %-62s",WHAT); fflush(stdout);}
#define PASSED()        {puts(" PASSED");fflush(stdout);}
#define H5_FAILED()     {puts("*FAILED*");fflush(stdout);}
#define TEST_ERROR      {H5_FAILED(); goto error;}
#define FileName        "results.xml"
#define FAIL            -1
#define TRUE		1
#define FALSE		0

const char *FILENAME[] = {
    "old_append_2unlim.h5",
    "new_append_2unlim.h5",
    NULL
};

#define NELEMENTS       2500000

/* Dataset names */
#define XDSET_2UNLIM    "x_dset_2unlim"		/* Dataset for appending along the x direction */
#define YDSET_2UNLIM    "y_dset_2unlim"		/* Dataset for appending along the y direction */
#define XYDSET_2UNLIM    "xy_dset_2unlim"	/* Dataset for appending along the xy direction */

/* Dataset expansion direction */
typedef enum expand_dir_t {
    xdir,	/* X direction */
    ydir,	/* Y direction */
    xydir	/* XY direcdtion: diagonally */
} expand_dir_t;

/*
 * Create the test file with old or new format.
 * Create 2 datasets in the file:
 * 	(a) XDSET_2UNLIM: 2-d dataset with 2 unlimited dims; append along the x direction
 *	(b) YDSET_2UNLIM: 2-d dataset with 2 unlimited dims; append along the y direction
 *	(c) XYDSET_2UNLIM: 2-d dataset with 2 unlimited dims; append along the y direction
 *
 * Old format: will use BT1 chunk indexing method
 * New format: will use BT2 chunk indexing method
 */
test_setup(const char *fname, hbool_t newformat)
{
    hid_t fid = -1;			/* File ID */
    hid_t fapl = -1;			/* File access property list ID */
    hid_t did = -1;			/* Dataset ID */
    hid_t sid = -1;			/* Dataspace ID */
    hid_t dcpl = -1;			/* Dataset creation property list ID */
    hsize_t chunks[2] = {1, 1};		/* Chunk sizes */
    hsize_t max[2];			/* Maximum dimension sizes for dataset */
    hsize_t curr[2];			/* Current dimension sizes for dataset */

    /* Create the test file with old or new format */
    if(newformat) {
	if((fapl = H5Pcreate(H5P_FILE_ACCESS)) < 0)
	    TEST_ERROR
	if(H5Pset_libver_bounds(fapl, H5F_LIBVER_LATEST, H5F_LIBVER_LATEST) < 0)
	    TEST_ERROR
	if((fid = H5Fcreate(fname, H5F_ACC_TRUNC, H5P_DEFAULT, fapl)) < 0)
	    TEST_ERROR
	if(H5Pclose(fapl) < 0)
	    TEST_ERROR
    } else {
	if((fid = H5Fcreate(fname, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) < 0)
	    TEST_ERROR
    }

    /* Create 3 datasets: XDSET_2UNLIM, YDSET_2UNLIM , XYDSET_2UNLIM */

    /* Set chunk sizes */
    if((dcpl = H5Pcreate(H5P_DATASET_CREATE)) < 0)
        TEST_ERROR
    if(H5Pset_chunk(dcpl, 2, chunks) < 0)
        TEST_ERROR

    /* Create XDSET_1UNLIM: 2unlim, xdir */

    /* Create the dataspace */
    curr[0] = 0;
    curr[1] = 1;
    max[0] = H5S_UNLIMITED;
    max[1] = H5S_UNLIMITED;
    if((sid = H5Screate_simple(2, curr, max)) < 0)
        TEST_ERROR
    
    /* Create the dataset */
    if((did = H5Dcreate(fid, XDSET_2UNLIM, H5T_NATIVE_UCHAR, sid, dcpl)) < 0)
        TEST_ERROR

    /* Closing */
    if(H5Dclose(did) < 0)
        TEST_ERROR
    if(H5Sclose(sid) < 0)
        TEST_ERROR

    /* Create YDSET_2UNLIM: 2unlim, ydir */

    /* Create the dataspace */
    curr[0] = 1;
    curr[1] = 0;
    max[0] = H5S_UNLIMITED;
    max[1] = H5S_UNLIMITED;
    if((sid = H5Screate_simple(2, curr, max)) < 0)
        TEST_ERROR

    /* Create the dataset */
    if((did = H5Dcreate(fid, YDSET_2UNLIM, H5T_NATIVE_UCHAR, sid, dcpl)) < 0)
        TEST_ERROR

    /* Closing */
    if(H5Dclose(did) < 0)
        TEST_ERROR
    if(H5Sclose(sid) < 0)
        TEST_ERROR

    /* Create XYDSET_2UNLIM: 2unlim, xydir */

    /* Create the dataspace */
    curr[0] = 1;
    curr[1] = 0;
    max[0] = H5S_UNLIMITED;
    max[1] = H5S_UNLIMITED;
    if((sid = H5Screate_simple(2, curr, max)) < 0)
        TEST_ERROR

    /* Create the dataset */
    if((did = H5Dcreate(fid, XYDSET_2UNLIM, H5T_NATIVE_UCHAR, sid, dcpl)) < 0)
        TEST_ERROR

    /* Closing */
    if(H5Dclose(did) < 0)
        TEST_ERROR
    if(H5Sclose(sid) < 0)
        TEST_ERROR

    if(H5Pclose(dcpl) < 0)
        TEST_ERROR
    if(H5Fclose(fid) < 0)
        TEST_ERROR

    return(0);

error:
    return(1);

} /* test_setup() */

/*-------------------------------------------------------------------------
 * Function:    append_dset
 *
 * Purpose:     Measure the time in appending 1-byte chunk up to NELEMENTS to a dataset.
 *
 * Return:      Success:        0
 *              Failure:        1
 *-------------------------------------------------------------------------
 */
static herr_t
append_dset(const char *filename, hbool_t newformat, char *dname, expand_dir_t dir, double *time_used)
{
    hsize_t n = 0;      /* Local index variable for looping */
    hid_t fapl = -1;    /* File access property list ID */
    hid_t fid = -1;     /* File ID */
    hid_t did = -1;     /* Dataset ID */
    char mesg[100];	/* The message to print for the test */
    struct timeval start;

    strcpy(mesg, "Append chunks to 2d dataset with 2 unlimited dimensions for");
    if(newformat)
	strcat(mesg, " new format file--");
    else
	strcat(mesg, " old format file--");
    if(dir == xdir)
	strcat(mesg, "along the x direction");
    else if(dir == ydir)
	strcat(mesg, "along the y direction");
    else if(dir == xydir)
	strcat(mesg, "along the xy direction");

    TESTING(mesg);

    if(H5Perf_init() <0)
        TEST_ERROR

    H5Perf_startTimer(&start);

    /* Open the test file with old or new format */
    if(newformat) {
	if((fapl = H5Pcreate(H5P_FILE_ACCESS)) < 0)
	    TEST_ERROR
	if(H5Pset_libver_bounds(fapl, H5F_LIBVER_LATEST, H5F_LIBVER_LATEST) < 0)
	    TEST_ERROR
	if((fid = H5Fopen(filename, H5F_ACC_RDWR, fapl)) < 0)
	    goto error;
	if(H5Pclose(fapl) < 0)
	    TEST_ERROR
    } else {
	if((fid = H5Fopen(filename, H5F_ACC_RDWR, H5P_DEFAULT)) < 0)
	    TEST_ERROR
    }

    /* Open the dataset */
    if((did = H5Dopen(fid, dname)) < 0)
	TEST_ERROR

    /* Loop through appending 1 element at a time according to expand direction */
    while(n < NELEMENTS) {
	unsigned char buf = 42;		/* The char to append */
	hid_t msid = -1, fsid = -1;	/* Memory/file dataspace IDs */
	hsize_t extent[2] = {0, 0};	/* The extent to set for the dataset */
	hsize_t new_extent = n + 1;	/* The current dataset extent */
	hsize_t count[2] = {1, 1};	/* Hyperslab: # of elements */
	hsize_t start[2] = {0, 0};	/* Hyperslab: starting offset */

	switch(dir) {
	    case xdir: /* X direction */
		start[0] = n;
		start[1] = 0;
		extent[0] = new_extent;
		extent[1] = 1;
		break;

	    case ydir: /* Y direction */
		start[0] = 0;
		start[1] = n;
		extent[0] = 1;
		extent[1] = new_extent;
		break;

	    case xydir: /* XY direction */
		start[0] = n;
		start[1] = n;
		extent[0] = new_extent;
		extent[1] = new_extent;
		break;

	    default:
		TEST_ERROR
	} /* end switch */

	/* Set the dataset extent */
	if(H5Dset_extent(did, extent) < 0)
	    TEST_ERROR

	/* Set up memory dataspace */
	if((msid = H5Screate_simple(2, count, NULL)) < 0)
	    TEST_ERROR

	/* Get file dataspace */
	if((fsid = H5Dget_space(did)) < 0)
	    TEST_ERROR

	/* Select the hyperslab region */
	if((H5Sselect_hyperslab(fsid, H5S_SELECT_SET, start, NULL, count, NULL)) < 0)
	    TEST_ERROR

	/* Write to the dataset */
	if(H5Dwrite(did, H5T_NATIVE_UCHAR, msid, fsid, H5P_DEFAULT, &buf) < 0)
	    TEST_ERROR

	/* Get ready for the next iteration */
	if(H5Sclose(fsid) < 0)
	    TEST_ERROR
	if(H5Sclose(msid) < 0)
	    TEST_ERROR
	n = new_extent;

    } /* end while */

    /* Closing */
    if(H5Dclose(did) < 0)
	TEST_ERROR
    if(H5Fclose(fid) < 0)
	TEST_ERROR

    *time_used = H5Perf_endTimer(start);
    PASSED();

    return(0);

error:
   return(1);

} /* append_dset() */


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
int database(double old_xtime, double old_ytime, double old_xytime, double new_xtime, double new_ytime, double new_xytime)
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

    find_routine = H5Perf_find_routine(filestorage_handle,"append to 2d dset - 2-unlim");
    if(find_routine >= 0) {
        routine_handle = find_routine;

        find_action1 = H5Perf_find_action(routine_handle,"append to 2d dset - 2-unlim-old-x");
        if(find_action1 <0) {
            if (H5Perf_addAction(routine_handle,
				 "append to 2d dset - 2-unlim-old-x",
				 "measure time for appending to 2d dset - 2-unlim-old-x",
				 env_action) < 0){
	        printf("Unable to add action to test routine object at line %d\n",__LINE__);
	        H5Perf_end();
                goto error;
            }
        }

        if (H5Perf_addInstance(routine_handle,
			       "append to 2d dset - 2-unlim-old-x", 
			       "append to 2d dset - 2-unlim-old-x",
			       "append 1-byte chunk up to 2M bytes",
			       HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,old_xtime,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action2 = H5Perf_find_action(routine_handle,"append to 2d dset - 2-unlim-old-y");
        if(find_action2 <0) {
            if (H5Perf_addAction(routine_handle,
				 "append to 2d dset - 2-unlim-old-y",
				 "measure time for appending to 2d dset - 2-unlim-old-y",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-old-y",
			      "append to 2d dset - 2-unlim-old-y",
			      "measure time for appending to 2d dset - 2-unlim-old-y",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,old_ytime,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action2 = H5Perf_find_action(routine_handle,"append to 2d dset - 2-unlim-old-xy");
        if(find_action2 <0) {
            if (H5Perf_addAction(routine_handle,
				 "append to 2d dset - 2-unlim-old-xy",
				 "measure time for appending to 2d dset - 2-unlim-old-xy",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-old-xy",
			      "append to 2d dset - 2-unlim-old-xy",
			      "measure time for appending to 2d dset - 2-unlim-old-xy",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,old_xytime,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action3 = H5Perf_find_action(routine_handle,
					  "append to 2d dset - 2-unlim-new-x");
        if(find_action3 <0) {
            if (H5Perf_addAction(routine_handle,
				 "append to 2d dset - 2-unlim-new-x",
				 "measure time for appending to 2d dset - 2-unlim-new-x",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-new-x",
			      "append to 2d dset - 2-unlim-new-x",
			      "measure time for appending to 2d dset - 2-unlim-new-x",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,new_xtime,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_update(filestorage_handle,routine_handle) < 0) {
            printf("Unable to update db_handle storage at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }
	
        find_action3 = H5Perf_find_action(routine_handle,
					  "append to 2d dset - 2-unlim-new-y");
        if(find_action3 <0) {
            if (H5Perf_addAction(routine_handle,
				 "append to 2d dset - 2-unlim-new-y",
				 "measure time for appending to 2d dset - 2-unlim-new-y",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-new-y",
			      "append to 2d dset - 2-unlim-new-y",
			      "measure time for appending to 2d dset - 2-unlim-new-y",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,new_ytime,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action3 = H5Perf_find_action(routine_handle,
					  "append to 2d dset - 2-unlim-new-xy");
        if(find_action3 <0) {
            if (H5Perf_addAction(routine_handle,
				 "append to 2d dset - 2-unlim-new-xy",
				 "measure time for appending to 2d dset - 2-unlim-new-xy",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-new-xy",
			      "append to 2d dset - 2-unlim-new-xy",
			      "measure time for appending to 2d dset - 2-unlim-new-xy",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,new_xytime,-1) <0) {
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

        if(H5Perf_setRoutine(routine_handle, "append to 2d dset - 2-unlim",
			     "performance benchmark for appending to 2d dset - 2-unlim",
			     "1.0",env_action) <0) {
            printf("Unable to set test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle,
			    "append to 2d dset - 2-unlim-old-x",
			    "measure time for appending to 2d dset - 2-unlim-old-x",
			    env_action) < 0) {
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addInstance(routine_handle,
			       "append to 2d dset - 2-unlim-old-x", 
			       "append to 2d dset - 2-unlim-old-x",
			       "append 1-byte chunk up to 2M bytes",
			       HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,old_xtime,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle,
			     "append to 2d dset - 2-unlim-old-y",
			     "measure time for appending to 2d dset - 2-unlim-old-y",
			     env_action) < 0) {
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-old-y",
			      "append to 2d dset - 2-unlim-old-y",
			      "measure time for appending to 2d dset - 2-unlim-old-y",			      
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,old_ytime,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle,
			     "append to 2d dset - 2-unlim-old-xy",
			     "measure time for appending to 2d dset - 2-unlim-old-xy",
			     env_action) < 0) {
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-old-xy",
			      "append to 2d dset - 2-unlim-old-xy",
			      "measure time for appending to 2d dset - 2-unlim-old-xy",			      
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,old_xytime,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

	if (H5Perf_addAction(routine_handle,
			     "append to 2d dset - 2-unlim-new-x",
			     "measure time for appending to 2d dset - 2-unlim-new-x",
			     env_action) < 0) {
	  printf("Unable to add action to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
	}
	    
        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-new-x",
			      "append to 2d dset - 2-unlim-new-x",
			      "measure time for appending to 2d dset - 2-unlim-new-x",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,new_xtime,-1) <0) {
	  printf("Unable to add instance to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
        }

	if (H5Perf_addAction(routine_handle,
			     "append to 2d dset - 2-unlim-new-y",
			     "measure time for appending to 2d dataset:2 unlimited:new format:ydir",
			     env_action) < 0) {
	  printf("Unable to add action to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
	}
	    
        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-new-y",
			      "append to 2d dset - 2-unlim-new-y",
			      "measure time for appending to 2d dset - 2-unlim-new-y",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,new_ytime,-1) <0) {
	  printf("Unable to add instance to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
        }

	if (H5Perf_addAction(routine_handle,
			     "append to 2d dset - 2-unlim-new-xy",
			     "measure time for appending to 2d dset - 2-unlim-new-xy",
			     env_action) < 0) {
	  printf("Unable to add action to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
	}
	    
        if(H5Perf_addInstance(routine_handle,
			      "append to 2d dset - 2-unlim-new-xy",
			      "append to 2d dset - 2-unlim-new-xy",
			      "measure time for appending to 2d dset - 2-unlim-new-xy",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,new_xytime,-1) <0) {
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
    double	old_xtime = 0;	/* time for appending chunks: old format, x direction */
    double	old_ytime = 0;	/* time for appending chunks: old format, y direction */
    double	old_xytime = 0;	/* time for appending chunks: old format, xy direction */
    double	new_xtime = 0;	/* time for appending chunks: new format, x direction */
    double	new_ytime = 0;	/* time for appending chunks: new format, y direction */
    double	new_xytime = 0;	/* time for appending chunks: new format, xy direction */
    unsigned	nerrors = 0;	/* cumulative error count */

    puts("Testing performance of chunk indexing methods-BT1 and BT2:");
    if(test_setup(FILENAME[0], FALSE) < 0)
	TEST_ERROR
    if(test_setup(FILENAME[1], TRUE) < 0)
	TEST_ERROR

    nerrors += append_dset(FILENAME[0], FALSE, XDSET_2UNLIM, xdir, &old_xtime);
    nerrors += append_dset(FILENAME[0], FALSE, YDSET_2UNLIM, ydir, &old_ytime);
    nerrors += append_dset(FILENAME[0], FALSE, XYDSET_2UNLIM, xydir, &old_xytime);
    nerrors += append_dset(FILENAME[1], TRUE, XDSET_2UNLIM, xdir, &new_xtime);
    nerrors += append_dset(FILENAME[1], TRUE, YDSET_2UNLIM, ydir, &new_ytime);
    nerrors += append_dset(FILENAME[1], TRUE, XYDSET_2UNLIM, xydir, &new_xytime);

    /* Save the time into the database */
    nerrors += database(old_xtime, old_ytime, old_xytime, new_xtime, new_ytime, new_xytime);

    remove(FILENAME[0]);
    remove(FILENAME[1]);

    if(nerrors) TEST_ERROR;
    puts("All appending chunks to dataset tests passed.");

    return(0);

error:
    puts("*** TESTS FAILED ***");
    exit(1);
} /* main() */
