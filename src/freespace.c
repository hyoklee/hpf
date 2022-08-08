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



// #include "stdlib.h"
#include <time.h>
#include "db.h"
#include "CAPIShell.h"
#include "hdf5.h"

const char *FILENAME[] = {
    "frsp_perf1.h5",
    "frsp_perf2.h5",
    "frsp_perf3.h5"
};

#define TESTING(WHAT)   {printf("Testing %-62s",WHAT); fflush(stdout);}
#define PASSED()        {puts(" PASSED");fflush(stdout);}
#define H5_FAILED()     {puts("*FAILED*");fflush(stdout);}
#define TEST_ERROR      {H5_FAILED(); goto error;}
#define FileName        "results.xml"
#define FAIL		-1

#define HUGE_DIM1       20000
#define HUGE_DIM2       20000
#define BIG_DIM1       	3000
#define BIG_DIM2       	2000
#define MED_DIM1       	500
#define MED_DIM2       	20
#define SMALL_DIM1     	10
#define SMALL_DIM2     	2

#define HDSET_NAME     	"HDSET"
#define BDSET_NAME     	"BDSET"
#define MDSET_NAME     	"MDSET"
#define SDSET_NAME     	"SDSET"
#define GRP_NAMEA     	"GROUPA"
#define GRP_NAMEB     	"GROUPB"

#define NUM_85		85
#define NUM_100		100
#define NUM_200		200
#define NUM_10000	10000

#define RANK2		2

#define SKIP0		0
#define SKIP2		2

/*
 * Create groups
 */
static herr_t
gen_groups(hid_t loc, unsigned numgrp, const char *name)
{
    unsigned 	i;
    char	grpname[NUM_100];
    hid_t	grp;

    for (i = 1; i <= numgrp; i++) {
	sprintf(grpname, "%s%d", name, i);
	if((grp = H5Gcreate2(loc, grpname, H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT)) < 0) 
	   TEST_ERROR 
	if (H5Gclose(grp) < 0) TEST_ERROR
    }

    return(0);

error:
    return(FAIL);
} /* gen_groups() */

/*
 * Create datasets 
 */
static herr_t
gen_datasets(hid_t loc, unsigned num, const char *name, hid_t space)
{
    unsigned 	i;
    char	dsetname[NUM_100];
    hid_t	dset, create_parms;

    if ((create_parms = H5Pcreate(H5P_DATASET_CREATE)) < 0) 
	TEST_ERROR

    if (H5Pset_alloc_time(create_parms, H5D_ALLOC_TIME_EARLY) < 0)
	TEST_ERROR

    for (i = 1; i <= num; i++) {
	sprintf(dsetname, "%s%d", name, i);
	if ((dset = H5Dcreate2(loc, dsetname, H5T_NATIVE_INT, space, H5P_DEFAULT, create_parms, H5P_DEFAULT)) < 0) 
	   TEST_ERROR 

	if (H5Dclose(dset) < 0) TEST_ERROR
    }

    return(0);

error:
    return(FAIL);
} /* gen_datasets() */


/*
 * Delete groups
 */
static herr_t
delete_objs(hid_t loc, unsigned numobjs, const char *name, unsigned skip)
{
    unsigned	i;
    char	objname[NUM_100];

    for (i = 1; i <= numobjs; i++) {
	if ((!skip) || (i % skip)) {
	    sprintf(objname, "%s%d", name, i);
	    if (H5Ldelete(loc, objname, H5P_DEFAULT) < 0) 
		TEST_ERROR
	}
    }
    return(0);

error:
    return(FAIL);
} /* delete_objs() */

/* 
 * Create groups for set A
 * Delete odd-numbered groups for set A
 * Create groups for set B
 * Delete all groups for set B
 */
static herr_t
test_perf_gr(const char *filename, unsigned numgrps, double* time_used)
{
    hid_t		file;
    struct timeval start;
    double times = 0;
  
    TESTING("Performance for free-space when creating/deleting groups");
    /* H5_timer_begin(&timer); */
    if(H5Perf_init() <0)
	TEST_ERROR

    H5Perf_startTimer(&start);
    while(times < 5){
      if((file = H5Fcreate(filename, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) < 0)
        TEST_ERROR; 

      /* Create groups */
    if (gen_groups(file, numgrps, GRP_NAMEA) < 0) TEST_ERROR

    /* delete odd-numbered groups */
    if (delete_objs(file, numgrps, GRP_NAMEA, SKIP2) < 0) TEST_ERROR

    /* Create groups */
    if (gen_groups(file, numgrps, GRP_NAMEB) < 0) TEST_ERROR

    /* delete all groups */
    if (delete_objs(file, numgrps, GRP_NAMEB, SKIP0) < 0) TEST_ERROR

    if (H5Fclose(file) < 0) TEST_ERROR
      ++times;			      
    }
    *time_used = H5Perf_endTimer(start);
    
    /*
    H5_timer_end(&sum_timer, &timer);
    printf("\nutime= %g stime=%g elapsed time = %g\n", timer.utime, timer.stime, timer.etime);
    */

    PASSED();
    return 0;

error:
    return(FAIL);
} /* test_perf_gr() */

/*
 * Create one set of big datasets
 * Delete odd-numbered big datasets
 * Create one huge dataset
 * Delete the huge dataset
 * Create one set of medium datasets
 * Delete odd-numbered medium datasets
 * Create one set of small datasets
 */
static herr_t
test_perf_dt(const char *filename, unsigned numdsets, double* time_used)
{
    hid_t		file;
    hid_t		small_space, med_space, big_space, huge_space;
    hsize_t		huge_dims[] = {HUGE_DIM1, HUGE_DIM2};
    hsize_t		big_dims[] = {BIG_DIM1, BIG_DIM2};
    hsize_t		med_dims[] = {MED_DIM1, MED_DIM2};
    hsize_t		small_dims[] = {SMALL_DIM1, SMALL_DIM2};

    struct timeval start;
    double times = 0;
    
    TESTING("Performance for free-space when creating/deleting datasets");
    /* H5_timer_begin(&timer); */
    if(H5Perf_init() <0)
	TEST_ERROR

    H5Perf_startTimer(&start);

    while(times < 500){
    if ((file = H5Fcreate(filename, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) < 0)
	TEST_ERROR

    if((huge_space = H5Screate_simple(RANK2, huge_dims, NULL)) < 0) 
	TEST_ERROR

    if ((big_space = H5Screate_simple(RANK2, big_dims, NULL)) < 0) 
	TEST_ERROR

    if ((med_space = H5Screate_simple(RANK2, med_dims, NULL)) < 0)
	TEST_ERROR

    if ((small_space = H5Screate_simple(RANK2, small_dims, NULL)) < 0)
	TEST_ERROR
    
    /* Create big datasets*/
    if (gen_datasets(file, numdsets, BDSET_NAME, big_space) < 0)
	TEST_ERROR

    /* delete odd-numbered big datasets */
    if (delete_objs(file, numdsets, BDSET_NAME, SKIP2) < 0)
	TEST_ERROR

    /* create 1 huge dataset */
    if (gen_datasets(file, 1, HDSET_NAME, huge_space) < 0)
	TEST_ERROR

    /* delete the huge dataset */
    if (delete_objs(file, 1, HDSET_NAME, SKIP0) < 0)
	TEST_ERROR

    /* Create medium datasets */
    if (gen_datasets(file, numdsets, MDSET_NAME, med_space) < 0)
	TEST_ERROR

    /* Delete odd-numbered medium datasets */
    if (delete_objs(file, numdsets, MDSET_NAME, SKIP2) < 0)
	TEST_ERROR

    /* create small datasets */
    if (gen_datasets(file, numdsets, SDSET_NAME, small_space) < 0)
	TEST_ERROR

    if(H5Fclose(file) < 0) TEST_ERROR
     times++;			     
    } /* while */
    /* 
    H5_timer_end(&sum_timer, &timer);
    printf("\nutime= %g stime=%g elapsed time = %g\n", timer.utime, timer.stime, timer.etime);
    */
    *time_used = H5Perf_endTimer(start);	
    PASSED();
    return 0;

error:
    return(FAIL);
} /* test_perf_dt() */

/*
 * Create first set of groups with medium datasets
 * Delete odd-nubmered groups and all their datasets in the first set
 * Create second set of groups with small datasets
 */
static herr_t
test_perf_gr_dt(const char *filename, unsigned num, double* time_used)
{
    hid_t	file, med_space, small_space, grp;
    hsize_t	med_dims[] = {MED_DIM1, MED_DIM2};
    hsize_t	small_dims[] = {SMALL_DIM1, SMALL_DIM2};
    unsigned	i;
    char	grpname[NUM_100], dsetname[NUM_100];
    struct timeval start;
    
    TESTING("Performance for free-space when creating/deleting groups/datasets");
                             
    /* H5_timer_begin(&timer); */
    if(H5Perf_init() <0)
	goto error;

    H5Perf_startTimer(&start);
    
    if ((file = H5Fcreate(filename, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) < 0)
        TEST_ERROR; 

    if ((med_space = H5Screate_simple(RANK2, med_dims, NULL)) < 0)
        TEST_ERROR; 

    if ((small_space = H5Screate_simple(RANK2, small_dims, NULL)) < 0)
        TEST_ERROR; 

    /* create groups with medium datasets */
    for (i = 1; i <= num; i++) {
	sprintf(grpname, "%s%d", GRP_NAMEA, i);
	if((grp = H5Gcreate2(file, grpname, H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT)) < 0) 
	    TEST_ERROR; 

	if (gen_datasets(grp, num, MDSET_NAME, med_space) < 0)
	    TEST_ERROR; 
	    
	if (H5Gclose(grp) < 0) TEST_ERROR
    }

    /* delete odd-numbered groups and all its medium datasets */
    for (i = 1; i <= num; i++) {
	if (i % SKIP2) {
	    sprintf(grpname, "%s%d", GRP_NAMEA, i);
	    sprintf(dsetname, "/%s/%s", grpname, MDSET_NAME);

	    if (delete_objs(file, num, dsetname, SKIP0) < 0) TEST_ERROR

            if (H5Ldelete(file, grpname, H5P_DEFAULT) < 0) TEST_ERROR; 
	}
    }

    /* create groups with small datasets */
    for (i = 1; i <= num; i++) {
	sprintf(grpname, "%s%d", GRP_NAMEB, i);
	if((grp = H5Gcreate2(file, grpname, H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT)) < 0) 
	    TEST_ERROR; 

	if (gen_datasets(grp, num, SDSET_NAME, small_space) < 0)
	    TEST_ERROR
	if (H5Gclose(grp) < 0) TEST_ERROR
    }

    if(H5Fclose(file) < 0) TEST_ERROR

    /* 
    H5_timer_end(&sum_timer, &timer);
    printf("\nutime= %g stime=%g elapsed time = %g\n", timer.utime, timer.stime, timer.etime);
    */
    *time_used = H5Perf_endTimer(start);	
    PASSED();
    return 0;

error:
    return(FAIL);
} /* test_perf_gr_dt() */

int database(double g_time, double d_time, double gd_time)
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
    int trial = 0;
/*    while ((db_handle=H5Perf_createMySQLHandle(SERVER, DBNAME, USER, PASSWD, PORT)) < 0 && trial < 10){
      ++trial;
      sleep(1);
    }
    
    if(trial == 10){
        printf("Unable to create db_handle storage object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }*/

    char* test_file_path = "/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perflib/";
    int filestorage_handle;
    /*
    test_file_path = getenv("FILE_PATH");
    if(test_file_path == NULL) test_file_path=getenv("PWD");
    if(test_file_path == NULL) {
        printf("The current directory of the stored file is NULL\n");
        printf("Please set the path of the file from the command line\n");
    }
    */
    
    if((filestorage_handle = H5Perf_createFileHandle(test_file_path, FileName,0)) < 0) {
        printf("Unable to create file storage object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    } 
    find_routine = H5Perf_find_routine(filestorage_handle,"Chicago - free space");
    if(find_routine>=0) {
        routine_handle = find_routine;

        find_action1 = H5Perf_find_action(routine_handle,"free space for groups");
        if(find_action1 <0){
            if (H5Perf_addAction(routine_handle,
				 "free space for groups",
				 "measure time for creating and deleting groups",
				 env_action) < 0){
	        printf("Unable to add action to test routine object at line %d\n",__LINE__);
	        H5Perf_end();
                goto error;
            }
        }

        if (H5Perf_addInstance(routine_handle,
			       "free space for groups", 
			       "free space 10000 groups",
			       "create and delete 10000 groups",
			       HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,g_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action2 = H5Perf_find_action(routine_handle,"free space for datasets");
        if(find_action2 <0){
            if (H5Perf_addAction(routine_handle,
				 "free space for datasets",
				 "measure time for creating and deleting datasets",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "free space for datasets",
			      "free space 85 datasets",
			      "create and delete 85 datasets",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,d_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }


        find_action3 = H5Perf_find_action(routine_handle,
					  "free space for groups with datasets");
        if(find_action3 <0){
            if (H5Perf_addAction(routine_handle,
				 "free space for groups with datasets",
				 "measure time for creating and deleting groups with datasets",
				 env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle,
			      "free space for groups with datasets",
			      "free space 200 groups w/ datasets",
			      "create and delete 200 groups with datasets",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,gd_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

/*	if(H5Perf_update(db_handle,routine_handle) < 0){
            printf("Unable to update db_handle storage at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }   */


        if(H5Perf_update(filestorage_handle,routine_handle) < 0){
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

        if(H5Perf_setRoutine(routine_handle, "Chicago - free space",
			     "performance benchmark of free space for the chicago company",
			     "1.0",env_action) <0) {
            printf("Unable to set test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle,
			    "free space for groups",
			    "measure time for creating and deleting groups",
			    env_action) < 0){
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if (H5Perf_addInstance(routine_handle,
			       "free space for groups", 
			       "free space 10000 groups",
			       "create and delete 10000 groups",			       
			       HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,g_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if (H5Perf_addAction(routine_handle,
			     "free space for datasets",
			     "measure time for creating and deleting datasets",
			     env_action) < 0){
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addInstance(routine_handle,
			      "free space for datasets",
			      "free space 85 datasets",
			      "create and delete 85 datasets",			      
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,d_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

	if (H5Perf_addAction(routine_handle,
			     "free space for groups with datasets",
			     "measure time for creating and deleting groups with datasets",
			     env_action) < 0){
	  printf("Unable to add action to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
	}
	    
        if(H5Perf_addInstance(routine_handle,
			      "free space for groups with datasets",
			      "free space 200 groups w/ datasets",
			      "create and delete 200 groups with datasets",
			      HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,gd_time,-1) <0) {
	  printf("Unable to add instance to test routine object at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
        }
/*
      if (H5Perf_write(db_handle,routine_handle) < 0 ){
	  printf("Unable to write to db_handle storage at line %d\n",__LINE__);
	  H5Perf_end();
	  goto error;
        }
    }

     if (H5Perf_close(routine_handle) < 0){
        printf("Unable to close the routine handle at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
      } 

    if (H5Perf_close(db_handle) < 0){
        printf("Unable to close db_handle object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }*/

	if (H5Perf_write (filestorage_handle, routine_handle) < 0) { 
	   printf("Unable to write to file storage at line %d\n",__LINE__);
	   H5Perf_end();
	   goto error;
	}
	if (H5Perf_close (filestorage_handle) < 0){
	   printf("Unable to close file object at line %d\n",__LINE__);
 	   H5Perf_end();
	   goto error;
 	}
    } 
   
    if (H5Perf_close(routine_handle) < 0){
	printf("Unable to close the routine handle at line %d\n",__LINE__);
	H5Perf_end();
	goto error;
    } 
 
    if (H5Perf_end() < 0){
        printf("Unable to close the performance frame library at line %d\n",__LINE__);
        goto error;
    }

    return 0;

error:
    puts("*** DATABASE FAILED ***");
    return 1;
}

int
main(void)
{
    double              g_time = 0;
    double              d_time = 0;
    double              gd_time = 0;
    unsigned    	nerrors = 0;    /* Cumulative error count */

    nerrors += test_perf_gr(FILENAME[0], NUM_10000, &g_time);
    remove(FILENAME[0]);

    nerrors += test_perf_dt(FILENAME[1], NUM_85, &d_time);
    remove(FILENAME[1]);

    nerrors += test_perf_gr_dt(FILENAME[2], NUM_200, &gd_time);
    remove(FILENAME[2]);

    /* Save the time into the database */
    nerrors += database(g_time, d_time, gd_time);
    
    if(nerrors) TEST_ERROR
    puts("All free-space performance tests passed.");

    return(0);

error:      
    puts("*** TESTS FAILED ***");
    exit(1);
} /* main() */
