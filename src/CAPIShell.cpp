
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


#include <string.h>
#include <string>

#include "CmdLine.h"
#include "ValueArg.h"
#include "Arg.h"

#include "HandleManager.h"
#include "Lookup.h"
#include "TestUtil.h"
#include "Env.h"
#include "TestRoutine.h"
#include "TestAction.h"
#include "Date.h"
#include "Version.h"
#include "Host.h"
#include "TestInstance.h"
#include "StorageManager.h"


#include "CppCompile.h"

#ifndef NULL
#define NULL 0
#endif

#define ENTER_API     if (!isInitialized())\
                        return H5Perf_INVALID_HANDLE;

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/16/06                      
 *
 * Purpose:             This is a collection of functions which provides 
 *                      C API for the hdf5perf library.
 *                      Todo: 1) Error reporting like HDF5
 *                            2) Does it need to be thread-safe?
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */

static HandleManager *handleManager;
static Lookup *cmdLine_table;
static Lookup *env_table;
static Lookup *routine_table;
static Lookup *storageManager_table;
static Lookup *action_table;
static Lookup *instance_table;
static TestUtil *test_util;


static int isInitialized();

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Initializes the C API by initializing the required data 
 *                      structures like lookup tables to manage hnadlers.
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */

int H5Perf_init()
{
    cmdLine_table = new Lookup;
    if (!cmdLine_table)
        return -1;
    env_table = new Lookup;
    if (!env_table)
        return -1;
    routine_table = new Lookup;
    if (!routine_table)
        return -1;
    action_table = new Lookup;
    if (!action_table)
        return -1;
    instance_table = new Lookup;
    if (!instance_table)
        return -1;
    test_util = new TestUtil;
    if (!test_util)
        return -1;
    storageManager_table = new Lookup;
    if (!storageManager_table)
        return -1;    
    handleManager = new HandleManager();
    handleManager->init();
    return 0;
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Checks if the API interface has been initilized.
 *
 * Returns:             zero if fails, non-zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */

static int isInitialized()
{
    if (!cmdLine_table || !env_table || !routine_table || !storageManager_table || !action_table || !instance_table || !handleManager->isInitialized())
        return 0;
    return 1;
}


/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Creates a commandline handle and saves it 
 *                      for user's future calls. The commanline object represents
 *                      the specifications of all command line arguments. The h flag is 
 *                      provided by default for help and usage message.
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_createCommandLine(const char* message,const char* version)
{
    ENTER_API
    TCLAP::CmdLine* cmd = NULL;    
    try{
        // Define the command line object.
        std::string message_str(message); 
        std::string version_str(version);
        //use default seprator
        cmd = new TCLAP::CmdLine(message_str, ' ', version_str);
        return cmdLine_table->add(handleManager->next(),cmd);
    } catch (TCLAP::ArgException &e){
        delete cmd;
        return H5Perf_INVALID_HANDLE;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Adds an argument to the previously created commandline Object referenced
 *                      by handle. The commandline object must be created before using  
 *                      H5Perf_createSetting() function. The type of the argument is character.
 *
 * Parameters:          handle  The commandline object handle
 *                      flag    The short key for the argument ( like -m)
 *                      name    The long key for the argument (like --measure)
 *                      desc    The argument description printed when using the default help option
                                by user
 *                      req     Non-zero for mandatory arguments
 *                      value   Default value when nothing is provided
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_addCharArgument(long int handle, const char* flag, const char* name, const char* desc, int req, 
                                    char value)
{
    ENTER_API
    if (handle <= H5Perf_INVALID_HANDLE || flag == NULL || strlen(flag) <= 0)
        return H5Perf_INVALID_HANDLE;    
    TCLAP::ValueArg<char>* argChar = NULL;
    try{
        TCLAP::CmdLine* cmd = cmdLine_table->getCmdLine(handle);
        if (cmd == NULL)
            return -1;
        // Define the ValueArg object.
        if (req)
            argChar = new TCLAP::ValueArg<char>(flag,name,desc,true,value,"Character");
        else
            argChar = new TCLAP::ValueArg<char>(flag,name,desc,false,value,"Character");
        cmd->add(argChar);
        return 0;
    } catch (TCLAP::ArgException &e){
        delete argChar;
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Adds an argument to the previously created commandline Object referenced
 *                      by handle. The commandline object must be created before using  
 *                      H5Perf_createSetting() function. The type of the argument is integer.
 *
 * Parameters:          handle  The commandline object handle
 *                      flag    The short key for the argument ( like -m)
 *                      name    The long key for the argument (like --measure)
 *                      desc    The argument description printed when using the default help option
                                by user
 *                      req     Non-zero for mandatory arguments
 *                      value   Default value when nothing is provided
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_addIntArgument(long int handle, const char* flag, const char* name, const char* desc, int req, 
                          int value)
{
    ENTER_API
    if (handle <= H5Perf_INVALID_HANDLE || flag == NULL || strlen(flag) <= 0)
        return H5Perf_INVALID_HANDLE;
    TCLAP::ValueArg<int>* argInt = NULL;
    try{
        TCLAP::CmdLine* cmd = cmdLine_table->getCmdLine(handle);
        if (cmd == NULL)
            return -1;
        // Define the ValueArg object.
        if (req)
            argInt = new TCLAP::ValueArg<int>(flag,name,desc,true,value,"Integer");
        else
            argInt = new TCLAP::ValueArg<int>(flag,name,desc,false,value,"Integer");
        cmd->add(argInt);
        return 0;
    } catch (TCLAP::ArgException &e){
        delete argInt;
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Adds an argument to the previously created commandline Object referenced
 *                      by handle. The commandline object must be created before using  
 *                      H5Perf_createSetting() function. The type of the argument is string.
 *
 * Parameters:          handle  The commandline object handle
 *                      flag    The short key for the argument ( like -m)
 *                      name    The long key for the argument (like --measure)
 *                      desc    The argument description printed when using the default help option
                                by user
 *                      req     Non-zero for mandatory arguments
 *                      value   Default value when nothing is provided
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_addStringArgument(long int handle, const char* flag, const char* name, const char* desc, int req, 
                             char* value)
{
    ENTER_API
    if (handle <= H5Perf_INVALID_HANDLE || flag == NULL || strlen(flag) <= 0)
        return -1;
    TCLAP::ValueArg<string>* argString = NULL;
    try{
        TCLAP::CmdLine* cmd = cmdLine_table->getCmdLine(handle);
        if (cmd == NULL)
            return -1;
        // Define the ValueArg object.
        if (req)
            argString = new TCLAP::ValueArg<string>(flag,name,desc,true,value,"String");
        else
            argString = new TCLAP::ValueArg<string>(flag,name,desc,false,value,"String");
        cmd->add(argString);
        return 0;
    } catch (TCLAP::ArgException &e){
        delete argString;
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Parses an instance of command line complying with the defined commandline object and
 *                      provides the values for future use by user through argument getter functions.
 *
 * Parameters:          handle  The commandline object handle
 *                      argc    The standard main function argc parameter.
 *                      argv    The standard main function argv parameter.
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_parse(long int handle,int argc, char** argv)
{
    ENTER_API
    if (handle <= H5Perf_INVALID_HANDLE || argc < 0 || argv == NULL || argv[0] == NULL || strlen(argv[0]) <= 0)
        return -1;
    try{
        TCLAP::CmdLine* cmd = cmdLine_table->getCmdLine(handle);
        if (cmd == NULL)
            return -1;
        cmd->parse(argc, argv);
        return 0;
    } catch (TCLAP::ArgException &e){
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Gets the parsed command line character argument 
 *
 * Parameters:          handle  The commandline object handle
 *                      flag    The short key for the argument ( like -m)
 *                      value   Argument value
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_getCharValue(long int handle, const char* flag, char* value)
{
    ENTER_API
    if (handle <= H5Perf_INVALID_HANDLE || flag == NULL || strlen(flag) <= 0)
        return -1;
    try{
        TCLAP::CmdLine* cmd = (TCLAP::CmdLine* )cmdLine_table->getCmdLine(handle);
        if (cmd == NULL)
            return -1;
        std::string flag_str(flag);
        std::list<TCLAP::Arg*> argList = cmd->getArgList();
        std::list<TCLAP::Arg*>::iterator it = argList.begin();
        while (  it != argList.end()){ 
            if ( (*it)->getFlag() == flag_str){
                *value = ((TCLAP::ValueArg<char>*)(*it))->getValue();
                return 0;
            }
            it++; 
        }
    } catch (TCLAP::ArgException &e){
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Gets the parsed command line integer argument 
 *
 * Parameters:          handle  The commandline object handle
 *                      flag    The short key for the argument ( like -m)
 *                      value   Argument value
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_getIntValue(long int handle, const char* flag, int* value)
{
    ENTER_API
    if (handle <= H5Perf_INVALID_HANDLE || flag == NULL || strlen(flag) <= 0)
        return -1;
    try{
        TCLAP::CmdLine* cmd = (TCLAP::CmdLine* )cmdLine_table->getCmdLine(handle);
        if (cmd == NULL)
            return -1;
        std::string flag_str(flag);
        std::list<TCLAP::Arg*> argList = cmd->getArgList();
        std::list<TCLAP::Arg*>::iterator it = argList.begin();
        while (  it != argList.end()){ 
            if ( (*it)->getFlag() == flag_str){
                *value = ((TCLAP::ValueArg<int>*)(*it))->getValue();
                return 0;
            }
            it++; 
        }
    } catch (TCLAP::ArgException &e){
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Gets the parsed command line string argument 
 *
 * Parameters:          handle  The commandline object handle
 *                      flag    The short key for the argument ( like -m)
 *                      value   Argument value
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_getStringValue(long int handle, const char* flag, char* value)
{
    ENTER_API
    if (handle <= H5Perf_INVALID_HANDLE || flag == NULL || strlen(flag) <= 0)
        return -1;
    try{
        TCLAP::CmdLine* cmd = (TCLAP::CmdLine* ) cmdLine_table->getCmdLine(handle);
        if (cmd == NULL)
            return -1;
        std::string flag_str(flag);
        std::list<TCLAP::Arg*> argList = cmd->getArgList();
        std::list<TCLAP::Arg*>::iterator it = argList.begin();
        while (  it != argList.end()){ 
            if ( (*it)->getFlag() == flag_str){
                string s = ((TCLAP::ValueArg<string>*)(*it))->getValue();
                strcpy(value,s.c_str());
                return 0;
            }
            it++; 
        }
    } catch (TCLAP::ArgException &e){
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Stars a timer to measure up a time interval
 *
 * Parameters:          timeval_start standard timeval struct according to sys/time.h
 *
 * Returns:             
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
void H5Perf_startTimer(struct timeval* timeval_start)
{
    TestUtil::startTimer(timeval_start);
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Stops the timer to measure up a time interval
 *
 * Parameters:          timeval_start standard timeval struct according to sys/time.h which 
 *                      is passed to the H5Perf_startTimer before.
 *
 * Returns:             The time interval value
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
double H5Perf_endTimer(struct timeval start)
{
    return TestUtil::endTimer(start);
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      8/7/06                      
 *
 * Purpose:             Generates a random number in the range of [0,limit)
 *
 * Parameters:          limit   The excluded maximum value of the generated random number.
 *
 * Returns:             A random number
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
double H5Perf_getRandom(long int limit)
{
    return TestUtil::random(limit);
}
/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Creates an Env handle and saves it in its table 
 *                      for user's future calls.
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_createSetting()
{
    ENTER_API
    try{
        return env_table->makeEntry(handleManager->next());
    } catch (char const* errMsg){
        return H5Perf_INVALID_HANDLE;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Adds an entry to the previously Env Object referenced
 *                      by handle. The object must be created before using  
 *                      H5Perf_createSetting() function.
 *
 * Parameters:          handle  The Env object handle
 *                      name    Name of the environmetal setting
 *                      value   Value of the environmetal setting
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_addSetting(long int handle, char* name, char* value)
{
    ENTER_API
    try{
        Env* env = env_table->getEnv(handle); 
        if (env == NULL)
            env = new Env;
        env->set(name,value);
        env_table->set(handle,env);
        return 0;
    } catch (char const* errMsg){
        return -1;
    }
}
/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Sets an entry of the previously Env Object referenced
 *                      by handle. The object must be created before using  
 *                      H5Perf_createSetting() function, and the name must be added
 *                      to object before using H5Perf_addSetting() function.
 *
 * Parameters:          handle  The Env object handle
 *                      name    Name of the environmetal setting
 *                      value   Value of the environmetal setting
 *
 * Returns:             (-1) if fails, zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_setSetting(long int handle, char* name, char* value)
{
    ENTER_API
    try{
        Env* env = env_table->getEnv(handle); 
        if (env == NULL)
            return -1;
        env->set(name,value);
        return 0;
    } catch (char const* errMsg){
        return -1;
    }

}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Creates a TestRoutine handle and saves it in its table
 *                      for user's future calls.
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_createRoutine()
{
    ENTER_API
    try{
        return routine_table->makeEntry(handleManager->next());
    } catch (char const* errMsg){
        return H5Perf_INVALID_HANDLE;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Sets a previously handle created TestRoutine object.
 *                      The object must be created before using  
 *                      H5Perf_createRoutine() function.                      
 *
 * Parameters:          handle  The TestRoutine object handle
 *                      name    Name of the Test Routine
 *                      description   Description of the Test Routine
 *                      version       Version of the Test Routine
 *                      settings_handle handler for Test Routine setting
 *
 * Returns:             (-1) if fails, greater or equal to zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_setRoutine(long int handle,char* name, char* description, char* version, long int settings_handle)
{
    ENTER_API
    try{
        TestRoutine* routine = routine_table->getTestRoutine(handle); 
        if (routine == NULL){
            routine = new TestRoutine(name,description,version);
            routine_table->add(handle,routine);
        }
        else{
            routine->setName(name);
            routine->setDescription(description);
            routine->setVersion(version);
        }
        if (settings_handle != H5Perf_INVALID_HANDLE){
            try{
                Env* env = env_table->getEnv(settings_handle);
                if (env != NULL){
                    routine->setSetting(env);
                }
            } catch(char const* envErrMsg){
                //nothing
            }
        }
        return 0;
    } catch (char const* errMsg){
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Add Test action information to a previously handle created 
 *                      TestRoutine object. The object must be created before using  
 *                      H5Perf_createRoutine() and H5Perf_setRoutine() functions.                      
 *
 * Parameters:          handle  The TestRoutine object handle
 *                      name    Name of the Test action
 *                      description   Description of the Test Action
 *                      settings_handle handler for Test Action setting
 *
 * Returns:             (-1) if fails, greater or equal to zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_addAction(long int handle,char* name, char* description,long int settings_handle)
{
    ENTER_API
    try{
        TestRoutine* routine = routine_table->getTestRoutine(handle); 
        if (routine == NULL){
            return -1;
        }
        TestAction action(name,description);
        if (settings_handle != H5Perf_INVALID_HANDLE){
            try{
                Env* env = env_table->getEnv(settings_handle);
                if (env != NULL){
                    action.setSetting(env);
                }
            } catch(char const* envErrMsg){
                //nothing
            }
        }
        routine->addAction(action);
        return 0;
    } catch (char const* errMsg){
        return -1;
    }
}
/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Add Test instance information to a previously handle created 
 *                      TestRoutine object. The object must be created before using  
 *                      H5Perf_createRoutine() and H5Perf_setRoutine() functions. Also 
 *                      it must already have one action with name action_name set by
 *                      H5Perf_addAction function.
 *
 * Parameters:          handle  The TestRoutine object handle
 *                      action_name    Name of the Test action
 *                      datasetName    Name of the Test Instance dataset
 *                      datasetDesc    Description of the Test Instance dataset
 *		        host	       The host name this instance is running on
 *		        year,..	       The running date	
 *		        libVersion     HDF5 library version used
 *                      settings_handle handler for Test Instance setting
 *
 * Returns:             (-1) if fails, greater or equal to zero otherwise
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_addInstance(long int handle,char* action_name,char* datasetName, char* datasetDesc,const char* host,
                       unsigned int year,unsigned int month,unsigned int day,unsigned int hour,unsigned int minute, 
                       unsigned int second, char* libVersion, double result, long int settings_handle)
{
    ENTER_API
    try{
        TestRoutine* routine = routine_table->getTestRoutine(handle); 
        if (routine == NULL) {
            cerr << "H5Perf_addInstance(): routine_table->getTestRoutine(handle) returned NULL.";
            cerr << " handle = " << handle << endl;
            return -1;
        }
       if (action_name == NULL) {
            cerr << "H5Perf_addInstance():argument action_name is  NULL." << endl;
            return -1;
        }
        TestAction *action = routine->getAction(action_name);
        if (action == NULL){
            cerr << "H5Perf_addInstance(): routine->getAction(action_name) returned NULL.";
            cerr << " action_name = " << action_name << endl;
            return -1;
        }
        Date date(year,month,day,hour,minute,second);
        TestInstance instance(datasetName, date, host, libVersion,datasetDesc,result);
        if (settings_handle != H5Perf_INVALID_HANDLE){
            try{
                Env* env = (Env*)env_table->getEnv(settings_handle);
                if (env != NULL){
                    instance.setSetting(env);
                }
            } catch(char const* envErrMsg){
                //nothing
            }
        }
        action->addInstance(instance);
        return 0;
    } catch (char const* errMsg){
        return -1;
    }

}


/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      8/10/06                      
 *
 * Purpose:             Creates a Test Routine object with just one Test Instance.
 *                      The handle could be used for user's future call to this routine using
 *                      H5Perf_setOneInstanceRoutineResult function.
 *
 * Parameters:          handle         The TestRoutine object handle
 *                      routineName    Name of the Test action
 *                      datasetName    Name of the Test Instance dataset
 *                      datasetDesc    Description of the Test Instance dataset
 *		        host	       The host name this instance is running on
 *		        year,..	       The running date	
 *		        libVersion     HDF5 library version used
 *                      settings_handle handler for Test Instance setting
 *
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_createOneInstanceRoutine(char* routineName, char* datasetName, char* datasetDesc,const char* host,
                       unsigned int year,unsigned int month,unsigned int day,unsigned int hour,unsigned int minute,unsigned int second,
                       char* libVersion, double result,long int settings_handle)
{
    ENTER_API
    long int routine = H5Perf_createRoutine();    
    if (routine == H5Perf_INVALID_HANDLE)
        return H5Perf_INVALID_HANDLE;
    if (H5Perf_setRoutine(routine ,routineName, NULL, NULL, H5Perf_INVALID_HANDLE) < 0)
    {
        H5Perf_close(routine );
        return H5Perf_INVALID_HANDLE;
    }
    if (H5Perf_addAction(routine ,datasetName, NULL, H5Perf_INVALID_HANDLE) < 0)
    {
        H5Perf_close(routine );
        return H5Perf_INVALID_HANDLE;
    }
    if (H5Perf_addInstance(routine,datasetName,datasetName, datasetDesc,host, year, month, day, hour, minute,second,
                            libVersion, result, settings_handle) < 0)
    {
        H5Perf_close(routine );
        return H5Perf_INVALID_HANDLE;
    }
    return routine;
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Creates a File handle and saves it
 *                      for user's future calls. This method also opens
 *                      the file.
 *                  
 * Parameters:          parent  The file parent directory
 *                      name    The file name
 *                      append  Non-zero to append to write the end of previously created file.
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_createFileHandle(char* parent,char* name, int append)
{
    ENTER_API
    StorageManager* storageManager = NULL;
    try{
        storageManager = new StorageManager;
        storageManager->open(parent,name,append);
        return storageManager_table->add(handleManager->next(),storageManager);
    } catch (char const* errMsg){
        delete storageManager;
        return H5Perf_INVALID_HANDLE;
    }
}
/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Creates a handle to mysql database and saves it
 *                      for user's future calls. This method also opens a
 *                      connection to the DBMS.
 *                  
 * Parameters:          server  The server host address
 *                      dbname  The database name
 *                      uid     User name
 *                      passwd  Password
 *                      port    Port number of the DBMS on the server host
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_createMySQLHandle(char* server,char* dbname, char* uid, char* passwd, int port)
{
    ENTER_API
    StorageManager* storageManager = NULL;
    try{
        storageManager = new StorageManager;
        storageManager->open(server,dbname,true,uid,passwd,port);
        return storageManager_table->add(handleManager->next(),storageManager);
    } catch (char const* errMsg){
        delete storageManager;
        return H5Perf_INVALID_HANDLE;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      8/11/06                      
 *
 * Purpose:             Finds the routine object with name "routine_name"
 *                      as well as its dependent objects from the storage 
 *                      that must be random access storage like MySQL.
 *                  
 * Parameters:          storage_hanlde  The handle to the previously created random access storage object (MySQL DBMS)
 *                      routine_name  The name of the routine object
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_find_routine (long int storage_handle, char* routine_name)
{
    ENTER_API    
    try{
        StorageManager* storageManager = storageManager_table->getStorageManager(storage_handle); 
        if (storageManager == NULL)
            return H5Perf_INVALID_HANDLE;
        TestRoutine* routine = storageManager->findByName(routine_name);
        if (routine == NULL)
            return H5Perf_INVALID_HANDLE;
        return routine_table->add(handleManager->next(), routine);
    } catch (char const* errMsg){
        return H5Perf_INVALID_HANDLE;
    }
}
/*-------------------------------------------------------------------------
 *
 * Created:             Kent Yang
 *                      8/28/06                      
 *
 * Purpose:             Finds the action object with name "action_name"
 *                      in the current test routine.
 *                      This action must be random access storage like MySQL.
 *                  
 * Parameters:          storage_handle  The handle to the previously created random access storage object (MySQL DBMS)
 *                      action_name    The name of the action object
 *                      routine_handle The handle of the test routine that the action object tries to find 
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_find_action (long int routine_handle,char* action_name)
{
    ENTER_API    
    try{

        TestRoutine* routine = routine_table->getTestRoutine(routine_handle);
	if (routine == NULL)
            return H5Perf_INVALID_HANDLE;
        TestAction* action = routine->getAction(action_name);
        if (action == NULL)
            return H5Perf_INVALID_HANDLE;
        return action_table->add(handleManager->next(), action);
    } catch (char const* errMsg){
        return H5Perf_INVALID_HANDLE;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Kent Yang
 *                      8/28/06                      
 *
 * Purpose:             Finds the instance object with name "instance_name"
 *                      in the current test action handle.
 *                      The test action handle must be a valid handle returned
 *                      by H5Perf_find_action.
 *                      This action must be random access storage like MySQL.
 *                  
 * Parameters:          storage_handle  The handle to the previously created random access storage object (MySQL DBMS)
 *                      action_name    The name of the action object
 *                      routine_handle The handle of the test routine that the action object tries to find 
 *
 * Returns:             (-1) if fails, a valid handle otherwise (greater or equal to zero)
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
long int H5Perf_find_instance (long int action_handle,char* instance_name)
{
    ENTER_API    
    try{

        TestAction* action = action_table->getTestAction(action_handle);
	if (action == NULL)
            return H5Perf_INVALID_HANDLE;
        TestInstance* instance = action->getInstance(instance_name);
        if (instance == NULL)
            return H5Perf_INVALID_HANDLE;
        return instance_table->add(handleManager->next(), instance);
    } catch (char const* errMsg){
        return H5Perf_INVALID_HANDLE;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Stores the routine object as well as its dependent objects 
 *                      information referenced by routine_handle to the storage 
 *                      that could be file or mysql DBMS.
 *                  
 * Parameters:          storage_hanlde  The handle to the previously created storage object (File or MySQL DBMS)
 *                      routine_handle  The handle to the routine object
 *
 * Returns:             (-1) if fails, greater or equal to zero otherwise 
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_write (long int storage_handle,long int routine_handle)
{
    ENTER_API    
    try{
        TestRoutine* routine = routine_table->getTestRoutine(routine_handle);
        if (routine == NULL)
            return -1;
        StorageManager* storageManager = storageManager_table->getStorageManager(storage_handle); 
        if (storageManager == NULL)
            return -1;
        storageManager->write(routine);
        return 0;
    } catch (char const* errMsg){
        return -1;
    }

}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      8/11/06                      
 *
 * Purpose:             Updates the routine object with handle "routine_handle"  
 *                      as well as its dependent objects in the storage 
 *                      that must be a random access storage like MySQL.
 *                  
 * Parameters:          storage_hanlde  The handle to the previously created random access storage object (MySQL DBMS)
 *                      routine_handle  The handle to the routine object
 *
 * Returns:             (-1) if fails, greater or equal to zero otherwise 
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_update (long int storage_handle,long int routine_handle)
{
    ENTER_API    
    try{
        StorageManager* storageManager = storageManager_table->getStorageManager(storage_handle); 
        if (storageManager == NULL)
            return -1;
        TestRoutine* routine = routine_table->getTestRoutine(routine_handle); 
        if (routine == NULL)
            return -1;   
        storageManager->update(routine);
        return 0;
    } catch (char const* errMsg){
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      8/11/06                      
 *
 * Purpose:             Removes the routine object with the name "routine_name"  
 *                      as well as its dependent objects from the storage 
 *                      that must be a random access storage like MySQL.
 *                  
 * Parameters:          storage_hanlde  The handle to the previously created random access storage object (MySQL DBMS)
 *                      routine_handle  The name of the routine object
 *
 * Returns:             (-1) if fails, greater or equal to zero otherwise 
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_remove (long int storage_handle,char* routine_name)
{
    ENTER_API    
    try{
        StorageManager* storageManager = storageManager_table->getStorageManager(storage_handle); 
        if (storageManager == NULL)
            return -1;
        if (storageManager->remove(routine_name))
            return 0;
        else 
            return -1;
    } catch (char const* errMsg){
        return -1;
    }
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Closes the external storage
 *                      that could be file or mysql DBMS connection.
 *                  
 * Parameters:          hanlde  The handle to the previously created storage object (File or MySQL DBMS)
 *
 *
 * Returns:             (-1) if fails, greater or equal to zero otherwise 
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_close(long int handle)
{
    ENTER_API
    if( cmdLine_table->remove(handle) || env_table->remove(handle) || routine_table->remove(handle) 
        || storageManager_table->remove(handle))
        return 0;
    return -1;
}

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/17/06                      
 *
 * Purpose:             Closes the C API 
 *                  
 *
 * Returns:             (-1) if fails, greater or equal to zero otherwise 
 *          
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
int H5Perf_end()
{
    ENTER_API
    delete env_table;
    delete routine_table;
    delete storageManager_table;
    return 0;
}

void H5Perf_get_hostname(char* host)
{
  Host h;
  return h.get_name(host);
}

void H5Perf_get_version(char* version)
{
  Version v;
  return v.get_version(version);
}

void H5Perf_startUsageTimer()
{
 test_util->startUsageTimer();
}
void H5Perf_endUsageTimer()
{
 test_util->endUsageTimer();
}
double H5Perf_getUserTime()
{
  return test_util->getUserTime();
}
double H5Perf_getSystemTime()
{  
  return test_util->getSystemTime();
}
