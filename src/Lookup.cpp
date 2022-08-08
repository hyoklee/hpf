
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


using namespace std;

#include "HandleManager.h"
#include "Lookup.h"

#include <iostream>

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/15/06                      
 *
 * Purpose:             This class takes care of generating object  
 *                      handlers amd looking them up. It is mainly used to provide 
 *                      the C API with handle generation&lookup functionality.
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  
///////////////////////////////////////////////////////////////////////////////
//Begin Lookup.cpp
///////////////////////////////////////////////////////////////////////////////
Lookup::Lookup()
:map <long int ,LookupEntry*>()
{ 
}

Lookup::~Lookup()
{
    map<long int ,LookupEntry*>::iterator counter;
    for(counter = begin(); counter != end(); counter++)
        delete (counter->second);
}

long int Lookup::makeEntry(long int handle)
{
    LookupEntry* entry = H5Perf_DEFAULT_OBJECT;
    return add(handle, entry);
}


long int Lookup::add(long int  handle, LookupEntry* object)
{        
    this->operator[](handle) = object;
    return handle;
}

long int Lookup::add(long int  handle, TCLAP::CmdLine* object)
{        
    LookupEntry *entry = new LookupEntry(object);
    return add(handle,entry);
}

long int Lookup::add(long int  handle, TestRoutine* routine)
{        
    LookupEntry *entry = new LookupEntry(routine);
    return add(handle,entry);
}

long int Lookup::add(long int  handle, TestAction* action)
{        
    LookupEntry *entry = new LookupEntry(action);
    return add(handle,entry);
}

long int Lookup::add(long int  handle, TestInstance* instance)
{        
    LookupEntry *entry = new LookupEntry(instance);
    return add(handle,entry);
}

long int Lookup::add(long int  handle, Env* env)
{        
    LookupEntry *entry = new LookupEntry(env);
    return add(handle,entry);
}

long int Lookup::add(long int  handle, StorageManager* storageManager)
{        
    LookupEntry *entry = new LookupEntry(storageManager);
    return add(handle,entry);
}

bool Lookup::remove(long int handle)
{
    if (handle <= H5Perf_INVALID_HANDLE)
        return false;
    if (find(handle) != end()){
        delete this->find(handle)->second;
        this->erase(this->find(handle));        
        return true;
    }
    return false;
}


LookupEntry* Lookup::get(long int handle)
{
    if (handle <= H5Perf_INVALID_HANDLE){
        throw "Invalid hanldle value";
    }
    if (find(handle) != end()){
        return this->find(handle)->second;
    }
    else{
        throw "Handle does not have any object in the lookup table";
    }
}

TCLAP::CmdLine* Lookup::getCmdLine(long int handle)
{
    LookupEntry* entry = get(handle);
    if (entry == NULL)
        return NULL;
    return entry->getCmdLine();
}

Env* Lookup::getEnv(long int handle)
{
    LookupEntry* entry = get(handle);
    if (entry == NULL)
        return NULL;
    return entry->getEnv();
}

TestRoutine* Lookup::getTestRoutine(long int handle)
{
    LookupEntry* entry = get(handle);
    if (entry == NULL)
        return NULL;
    return entry->getTestRoutine();
}



TestAction* Lookup::getTestAction(long int handle)
{
    LookupEntry* entry = get(handle);
    if (entry == NULL)
        return NULL;
    return entry->getTestAction();
}

StorageManager* Lookup::getStorageManager(long int handle)
{
    LookupEntry* entry = get(handle);
    if (entry == NULL)
        return NULL;
    return entry->getStorageManager();
}

int Lookup::set(long int handle, LookupEntry* object)
{
     if (handle <= H5Perf_INVALID_HANDLE)
        throw "Invalid hanldle value";
     if (find(handle) != end()){
        this->find(handle)->second = object;
        return 1;
     }
     return 0;
}

int Lookup::set(long int  handle, TCLAP::CmdLine* object)
{        
    LookupEntry *entry = new LookupEntry(object);
    return set(handle,entry);
}

int Lookup::set(long int  handle, TestRoutine* routine)
{        
    LookupEntry *entry = new LookupEntry(routine);
    return set(handle,entry);
}

int Lookup::set(long int  handle, Env* env)
{        
    LookupEntry *entry = new LookupEntry(env);
    return set(handle,entry);
}

int Lookup::set(long int  handle, StorageManager* storageManager)
{        
    LookupEntry *entry = new LookupEntry(storageManager);
    return set(handle,entry);
}

///////////////////////////////////////////////////////////////////////////////
//End Lookup.cpp
///////////////////////////////////////////////////////////////////////////////


