
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

#include <stdio.h>
using namespace std;

#include "FileStorage.h"


/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             The interface to the flat file storage system
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */

FileStorage::FileStorage()
:m_file(NULL),
m_fileName(NULL)
{ 
}

FileStorage::~FileStorage()
{
    if (isOpen())
        close();
    delete m_file;
    delete m_fileName;
}

void FileStorage::open(const char* server,const char *name, bool append, const char* user, 
                                        const char* passwd, const unsigned int port)
{
    if (server == NULL || strlen(server) <= 0 )
        throw "The file path is not valid";
    if (name == NULL || strlen(name) <= 0)
        throw "The file name is not valid";
    m_fileName = new string(server);    
    (*m_fileName) += FILE_SEPRATOR;
    m_fileName->append( name);
    if (append){
        m_file = new ofstream(m_fileName->c_str(),ios::out | ios::app);
    }
    else 
        m_file = new ofstream(m_fileName->c_str(),ios::out | ios::app);
    if ((m_file == NULL) || (!m_file->is_open()))
        throw "Unable to open the file";
}

bool FileStorage::isOpen()
{
    if (m_file == NULL) 
        return false;
    if (m_file->is_open())
        return true;
    return false;
}

void FileStorage::write(TestRoutine* routine)
{
    if (!isOpen()){
        throw "File is not open";
    }
    if (routine == NULL)
        return;
    *m_file <<  routine->toXML() << endl;
}

void FileStorage::close()
{
    if (!isOpen())
        m_file->close();
    closed = true;
}
///////////////////////////////////////////////////////////////////////////////
//End FileStorage.cpp
///////////////////////////////////////////////////////////////////////////////

