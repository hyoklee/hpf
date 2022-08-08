
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

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/15/06                      
 *
 * Purpose:             This class manages the handle generation for Lookup class.
 *                      It is mainly used to provide 
 *                      the C API with handle generation functionality.
 *                      Issues: Does it need to be Thread-safe?
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  

HandleManager::HandleManager()
{}

HandleManager::~HandleManager()
{}

void HandleManager::init()
{
    m_lastHandle = 0;
}

bool HandleManager::isInitialized()
{
    return (m_lastHandle >= 0);
}

long int HandleManager::next()
{
    long int next = ++m_lastHandle;
    if (next <= H5Perf_INVALID_HANDLE)
        throw "Unable to support more object creation";
    return next;
}

