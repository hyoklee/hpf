
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

#include <iostream>
#include <fstream>
#include <strings.h>
#include <string.h>
using namespace std;

#include "Env.h"


/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             This class represents the environmental setting
 *                      properites
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  
Env::Env()
:m_table()
{ 
}

 Env::~Env()
{
}

void Env::set(const char* name, const char* value)
{
    if (name == NULL)
        throw "Setting name is null";
    if (strlen(name) <= 0)
        throw "Setting name is empty";
    string svalue(value);
    string key(name);
    m_table[key] = svalue;
}

void Env::set(Env* env)
{    
    if (env == NULL || env->empty())
        return;
    
    map<string, string>::iterator counter;
    counter = env->begin();
    while( counter != env->end()){ 
        this->set(counter->first.c_str(),counter->second.c_str());
        counter++;
    }
}

bool Env::remove(char* name)
{
    if (name == NULL)
        return false;    
    string key(name);
    map<string, string>::iterator pos = m_table.find(key);
    if (pos == m_table.end())
        return false;
    m_table.erase(pos);
    return true;
}

/**
*/
const char* Env::get(char* name)
{
    if (name == NULL)
        throw "stting name is null";
    if (strlen(name) <= 0)
        throw "setting name is empty";
    string key(name);
    return m_table[key].c_str();
}

int Env::size()
{
    return m_table.size();
}

bool Env::empty()
{
    return m_table.empty();
}

map<string, string>::iterator Env::begin()
{
    return (m_table.begin());
}

map<string, string>::iterator Env::end()
{
    return (m_table.end());
}

const char* Env::toString()
{    
    string result;
    map<string, string>::iterator counter;

    for(counter = m_table.begin(); counter != m_table.end(); counter++){        
        result = counter->first + " = " + counter->second + ", " ;
    }
    return result.c_str();
}

///////////////////////////////////////////////////////////////////////////////
//End Env.cpp
///////////////////////////////////////////////////////////////////////////////


