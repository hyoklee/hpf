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



int main (int argc, char** argv)
{

    if (H5Perf_init() < 0){
        printf("Unable to initialize the API \n");
        return -1;
    }

    long int cmd = 0;
    if ((cmd = H5Perf_createCommandLine("The test program","1.0")) < 0){
        printf("Unable to create command line object\n");
        H5Perf_end();
        return -1;
    }

    if (H5Perf_addCharArgument(cmd, "c", "character", "Character Parameter", 1, 'a') < 0){
        printf("Unable to add character parameter to command line object\n");
        H5Perf_end();
        return -1;
    }
    printf("Testing Command Line Paresr C API 4\n");    
    if (H5Perf_addIntArgument(cmd, "i", "intg", "Integer Parameter", 1,0 ) < 0) {
        printf("Unable to add integer parameter to command line object\n");
        H5Perf_end();
        return -1;
    }

    if (H5Perf_addStringArgument(cmd, "s", "string", "String Parametr", 0, "string") < 0){
        printf("Unable to add integer parameter to command line object\n");
        H5Perf_end();
        return -1;
    }
    char* input[7] = {"TestProgram","--character", "a","-i","1","-s","aa"};
    if (H5Perf_parse(cmd,7, input) < 0){
        printf("Unable to parse command line\n");
        H5Perf_end();
        return -1;
    }
    char char_value;
    if (H5Perf_getCharValue(cmd, "c", &char_value) < 0){
        printf("Unable to extract charcter parameter from command line object\n");
        H5Perf_end();
        return -1;
    }
    if (char_value != 'a'){
        printf("Error in extracting charcter parameter from command line object\n");
        H5Perf_end();
        return -1;
    }
    int int_value = 0;
    if (H5Perf_getIntValue(cmd, "i", &int_value) < 0){
        printf("Unable to extract integer parameter from command line object\n");
        H5Perf_end();
        return -1;
    }
    if (int_value != 1){
        printf("Error in extracting integer parameter from command line object\n");
        H5Perf_end();
        return -1;
    }
    char str_value[3];               
    if (H5Perf_getStringValue(cmd, "s", str_value) < 0){
        printf("Unable to extract string parameter from command line object\n");
        H5Perf_end();
        return -1;
    }
    if (strcmp(str_value,"aa")){
        printf("Error in extracting string parameter from command line object\n");
        H5Perf_end();
        return -1;
    }                
    if (H5Perf_close(cmd) < 0){
        printf("Unable to close command line object\n");
        H5Perf_end();
        return -1;
    }

    if (H5Perf_end() < 0){
        printf("Unable to close API\n");
        return -1;
    }

    return 0;  // successfully terminated
}

