
/****************************************************************************** 
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
 *****************************************************************************/

#ifndef HDF5PERF_CAPISHELL_H
#define HDF5PERF_CAPISHELL_H

#include <sys/time.h>


/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/16/06                      
 *
 * Purpose:             This is a collection of functions which provides 
 *                      C API for the hdf5perf library.
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
extern "C" { 
int H5Perf_init();

long int H5Perf_createCommandLine(const char* message,const char* version);
int H5Perf_addCharArgument(long int handle, const char* flag, const char* name, const char* desc, int req, 
                           char value);
int H5Perf_addIntArgument(long int handle, const char* flag, const char* name, const char* desc, int req, 
                          int value);
int H5Perf_addStringArgument(long int handle, const char* flag, const char* name, const char* desc, int req, 
                             char* value);
int H5Perf_parse(long int handle,int argc, char** argv);
int H5Perf_getCharValue(long int handle, const char* flag, char* value);
int H5Perf_getIntValue(long int handle, const char* flag, int* value);
int H5Perf_getStringValue(long int handle, const char* flag, char* value);

void H5Perf_startTimer(struct timeval* timeval_start);
double H5Perf_endTimer(struct timeval start);
double H5Perf_getRandom(long int limit);

long int H5Perf_createSetting();
int H5Perf_addSetting(long int handle, char* name, char* value);
int H5Perf_setSetting(long int handle, char* name, char* value);

long int H5Perf_createRoutine();
int H5Perf_setRoutine(long int handle,char* name, char* description, char* version, long int settings_handle);
int H5Perf_addAction(long int handle,char* name, char* description,long int settings_handle);
int H5Perf_addInstance(long int handle,char* action_name,char* datasetName, char* datasetDesc,const char* host,
                       unsigned int year,unsigned int month,unsigned int day,unsigned int hour,unsigned int minute, unsigned int second,
                       char* libVersion, double result, long int settings_handle);

long int H5Perf_createOneInstanceRoutine(char* routineName, char* datasetName, char* datasetDesc,const char* host,
                       unsigned int year,unsigned int month,unsigned int day,unsigned int hour,unsigned int minute, unsigned int second,
                       char* libVersion, double result,long int settings_handle);

long int H5Perf_createFileHandle(char* parent,char* name, int append);
long int H5Perf_createMySQLHandle(char* server,char* dbname, char* uid, char* passwd, int port);
long int H5Perf_find_routine (long int storage_handle, char* routine_name);
long int H5Perf_find_instance (long int action_handle,char* instance_name);
long int H5Perf_find_action (long int routine_handle,char* action_name);
int H5Perf_write (long int storage_handle,long int routine_handle);
int H5Perf_update (long int storage_handle,long int routine_handle);
int H5Perf_remove (long int storage_handle,char* routine_name);

int H5Perf_close(long int handle);

int H5Perf_end();
void H5Perf_get_hostname(char* c);
void H5Perf_get_version(char* c);
void H5Perf_startUsageTimer();
void H5Perf_endUsageTimer();
double H5Perf_getUserTime();
double H5Perf_getSystemTime();
}
#endif
