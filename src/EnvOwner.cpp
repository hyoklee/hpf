
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

#include "EnvOwner.h"

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             The parent class for all the classes with environmental setting
 *                      properites
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  
EnvOwner::EnvOwner()
:m_env()
{
}

EnvOwner::~EnvOwner()
{
}

Env* EnvOwner::getEnv()
{
    return &m_env;
}

void EnvOwner::setSetting(const char* name, const char* value)
{
    m_env.set(name, value);
}

void EnvOwner::setSetting(Env* env)
{    
    m_env.set(env);
}

void EnvOwner::setSetting(EnvOwner* envOwner)
{    
    m_env.set(envOwner->getEnv());
}

bool EnvOwner::removeSetting(char* name)
{
    return m_env.remove(name);
}

const char* EnvOwner::getSettingValue(char* name)
{
    return m_env.get(name);
}

int EnvOwner::getSettingSize()
{
    return m_env.size();
}

map<string, string>::iterator EnvOwner::beginSettings()
{
    return (m_env.begin());
}

map<string, string>::iterator EnvOwner::endSettings()
{
    return (m_env.end());
}

const char* EnvOwner::toEnvString()
{    
    return m_env.toString();
}

