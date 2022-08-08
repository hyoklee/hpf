
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
 *  
 *****************************************************************************/

#include "LookupEntry.h"

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             This calss represents an entry in the API loookup table
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  
LookupEntry::LookupEntry(int type, void* value)
:m_value(NULL)
{ 
    setType(type);
    setValue( value);    
}

LookupEntry::LookupEntry(LookupEntry& lookupEntry)
{
    setType(lookupEntry.getType());
    setValue(lookupEntry.getValue());    
}

LookupEntry::LookupEntry(TCLAP::CmdLine* cmdLine)
:m_value(NULL)
{ 
    setCmdLine(cmdLine);
}

LookupEntry::LookupEntry(Env* env)
:m_value(NULL)
{ 
    setEnv(env);
}

LookupEntry::LookupEntry(TestRoutine* testRoutine)
:m_value(NULL)
{ 
    setTestRoutine(testRoutine);
}


LookupEntry::LookupEntry(TestAction* testAction)
:m_value(NULL)
{ 
    setTestAction(testAction);
}


LookupEntry::LookupEntry(TestInstance* testInstance)
:m_value(NULL)
{ 
    setTestInstance(testInstance);
}


LookupEntry::LookupEntry(StorageManager* storageManager)
:m_value(NULL)
{ 
    setStorageManager(storageManager);
}

LookupEntry::~LookupEntry()
{
    switch (m_type){
        case COMMANDLINE_TYPE: delete ((TCLAP::CmdLine*)m_value);
                               break;
        case ENV_TYPE:         delete ((Env*) m_value);
                               break;
        case TESTROUTINE_TYPE: delete ((TestRoutine*) m_value);
                               break;
	case TESTACTION_TYPE:  delete ((TestAction*) m_value);
                               break;
	case TESTINSTANCE_TYPE: delete ((TestInstance*) m_value);
                               break;
        case STORAGE_TYPE:     delete ((StorageManager*) m_value);
                               break;

        default: break;
    }
}


void LookupEntry::setType(int type)
{
    m_type = type;
}

int LookupEntry::getType()
{
    return m_type;
}

void* LookupEntry::getValue()
{
    return m_value;
}

void LookupEntry::setValue(void* value)
{
    m_value = value;
}

void LookupEntry::setCmdLine(TCLAP::CmdLine* cmdLine)
{
    m_type = COMMANDLINE_TYPE;
    m_value = cmdLine;
}

TCLAP::CmdLine* LookupEntry::getCmdLine()
{
    if (m_type != COMMANDLINE_TYPE)
        return NULL;
    return (TCLAP::CmdLine*)m_value;
}

void LookupEntry::setTestRoutine(TestRoutine* testRoutine)
{
    m_type = TESTROUTINE_TYPE;
    m_value = testRoutine;
}

TestRoutine* LookupEntry::getTestRoutine()
{
    if (m_type != TESTROUTINE_TYPE)
        return NULL;
    return (TestRoutine*)m_value;
}

void LookupEntry::setTestAction(TestAction* testAction)
{
    m_type = TESTACTION_TYPE;
    m_value = testAction;
}

TestAction* LookupEntry::getTestAction()
{
    if (m_type != TESTACTION_TYPE)
        return NULL;
    return (TestAction*)m_value;
}

void LookupEntry::setTestInstance(TestInstance* testInstance)
{
    m_type = TESTINSTANCE_TYPE;
    m_value = testInstance;
}

TestInstance* LookupEntry::getTestInstance()
{
    if (m_type != TESTINSTANCE_TYPE)
        return NULL;
    return (TestInstance*)m_value;
}


void LookupEntry::setEnv(Env* env)
{
    m_type = ENV_TYPE;
    m_value = env;
}

Env* LookupEntry::getEnv()
{
    if (m_type != ENV_TYPE)
        return NULL;
    return (Env*)m_value;
}

void LookupEntry::setStorageManager(StorageManager* storageManager)
{
    m_type = STORAGE_TYPE;
    m_value = storageManager;    
}

StorageManager* LookupEntry::getStorageManager()
{
    if (m_type != STORAGE_TYPE)
        return NULL;
    return (StorageManager*)m_value;
}
