
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

#include <iostream>
using namespace std;

#include "StorageManager.h"
#include "FileStorage.h"
#include "MySQLStorage.h"

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             This class helps user to chooze suitable Storage class
 *                      to store the performance testing information and/or results for
 *                      different storage types.
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */

StorageManager::StorageManager()
:m_storage(NULL),
m_randomStorage(NULL)
{ 
}

StorageManager::~StorageManager()
{
    delete m_storage;
    delete m_randomStorage;
}

void StorageManager::open(const char* server,const char * name, bool append, const char* user, 
                                        const char* passwd, const unsigned int port)
{
    if (server != NULL){
        if (server[0] == FILE_SEPRATOR || server[1] == FILEDRIVER_SEPRATOR){
            m_storage = new FileStorage;
            m_storage->open(server,name,append);            
        }
        else{
            m_randomStorage = new MySQLStorage;
            m_randomStorage->open(server,name,append,user,passwd,port);
        }
    }
    else
        throw "Invlaid input parameters to create storage connection";
}


bool StorageManager::isOpen()
{
    if (m_storage != NULL)
        return m_storage->isOpen();
    else if (m_randomStorage != NULL)
        return m_randomStorage->isOpen();
    return false;

}

void StorageManager::write(TestRoutine* routine)
{    
    if (m_storage != NULL){
        m_storage->write(routine);        
    }else if (m_randomStorage != NULL){
        m_randomStorage->write(routine);
    }
}

TestRoutine* StorageManager::findByName(char* routineName)
{
    if (m_randomStorage != NULL)
        return m_randomStorage->findByName(routineName);
    return NULL;
}

bool StorageManager::update(TestRoutine* routine)
{
    if (m_randomStorage != NULL)
        return m_randomStorage->update(routine);
    return false;
}

bool StorageManager::remove(char* routineName)
{
    if (m_randomStorage != NULL)
        return m_randomStorage->remove(routineName);
    return false;
}

void StorageManager::close()
{
    if (m_storage != NULL)
        m_storage->close();
    else if (m_randomStorage != NULL)
        m_randomStorage->close();
}
