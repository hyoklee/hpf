/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Copyright by the Board of Trustees of the University of Illinois.         *
 * All rights reserved.                                                      *
 *                                                                           *
 * This file is part of HDF5.  The full HDF5 copyright notice, including     *
 * terms governing use, modification, and redistribution, is contained in    *
 * the files COPYING and Copyright.html.  COPYING can be found at the root   *
 * of the source code distribution tree; Copyright.html can be found at the  *
 * root level of an installed copy of the electronic HDF5 document set and   *
 * is linked from the top-level documents page.  It can also be found at     *
 * http://hdf.ncsa.uiuc.edu/HDF5/doc/Copyright.html.  If you do not have     *
 * access to either file, you may request a copy from hdfhelp@ncsa.uiuc.edu. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/*
 *  This program tests the C API of the hdf performance library.
 */


#include <stdlib.h>
#include <string.h>

#include "CAPIShell.h"


#define FILE_NAME "filestorageinfo_ctest.txt"

#include "db.h"

int main (int argc, char** argv)
{
   int error_num = 0;
   char *test_file_path=NULL;

    printf("Testing Information Storage C API\n");
    if (H5Perf_init() < 0){
        printf("Unable to initialize the API \n");
        return -1;
    }
    long int env = 0;
    if ((env = H5Perf_createSetting()) < 0){
        printf("Unable to create setting object\n");
        H5Perf_end();
        return -1;
    }
    if (H5Perf_addSetting(env, "OS", "AIX") < 0){
        printf("Unable to add setting object\n");
        error_num++;
    }
    if (H5Perf_setSetting(env, "OS", "Linux") < 0){
        printf("Unable to set setting object\n");
        error_num++;
    }
    long int routine = 0;    
    if ((routine = H5Perf_createRoutine()) < 0){
        printf("Unable to create test routine object\n");
        H5Perf_end();
        return -1;
    }
    if (H5Perf_setRoutine(routine, "C API Test Program", "The testing program to test C API","1.0",env) < 0){
        printf("Unable to set test routine object\n");
        H5Perf_end();
        return -1;
    }
    /* Action */
    long int env_action = 0;
    if ((env_action = H5Perf_createSetting()) < 0){
        printf("Unable to create setting object\n");
        H5Perf_end();
        return -1;
    }
    if (H5Perf_addSetting(env_action, "Array X Number", "200") < 0){
        printf("Unable to add setting object\n");
        error_num++;
    }
    if (H5Perf_addAction(routine, "Chunked Write", "Chunked Write Function",env_action) < 0){
        printf("Unable to add action to test routine object\n");
        H5Perf_end();
        return -1;
    }
    
    struct timeval start;
    H5Perf_startTimer(&start);
    /* wasting time */
    long i,j,k;
    int l = 0;
    for(i = 0; i < 1000000; i++)
        if (l < 1)
            l++;
         else
            l--;
    double time = H5Perf_endTimer(start);

    /* Instance without setting */
    if (H5Perf_addInstance(routine, "Chunked Write", "XXX Data","Date Provided by XXX Company","localhost",2006,5,22,12,0,0,"hdf51.7",time,-1) < 0){
        printf("Unable to add instance to test routine object\n");
        H5Perf_end();
        return -1;
    }
 
    long int file;
    test_file_path = getenv("FILE_PATH");
    if(test_file_path == NULL) test_file_path = getenv("PWD");
    if(test_file_path == NULL) {
            printf(" The current directory of the stored file is NULL\n");
            printf(" Please set the path of the file from command line\n");
     }

    if ((file=H5Perf_createFileHandle(test_file_path,FILE_NAME,0)) < 0){
        printf("Unable to create file storage object\n");
        error_num++;
    } else {
        if (H5Perf_write (file,routine) < 0 ){
            printf("Unable to write to file storage\n");
            error_num++;    
        }
        if (H5Perf_close(file) < 0){
            printf("Unable to close file object\n");
            error_num++;            
        }
    }

    long int mysql;
    if ((mysql=H5Perf_createMySQLHandle(server,dbname, user,passwd, port)) < 0){
        printf("Unable to create mysql storage object\n");
        error_num++;
    } else {
        if (H5Perf_write (mysql,routine) < 0 ){
            printf("Unable to write to mysql storage\n");
            error_num++;    
        } else if (H5Perf_remove (mysql,"C API Test Program") < 0 ){
            printf("Unable to remove from mysql storage\n");
            error_num++;    
        }
        if (H5Perf_close(mysql) < 0){
            printf("Unable to close mysql object\n");
            error_num++;            
        }

    }
    if (H5Perf_close(routine) < 0){
        printf("Unable to close routine object\n");
        error_num++;            
    }
    if (H5Perf_close(env) < 0){
        printf("Unable to close setting object\n");
        error_num++;            
    }
    
    if (H5Perf_end() < 0){
        printf("Unable to close API\n");
        error_num++;
    }
    
    if (error_num > 0)
        return -1;
    else    
        return 0;  // successfully terminated
}

