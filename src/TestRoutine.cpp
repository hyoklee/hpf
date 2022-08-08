
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
using namespace std;


#include "TestRoutine.h"

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             The information of a performance testing program/routine
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  
///////////////////////////////////////////////////////////////////////////////
//Begin TestRoutine.cpp
///////////////////////////////////////////////////////////////////////////////

TestRoutine::TestRoutine(const char* name, const char* description,
								const char* version )
: m_name(NULL),
m_description(NULL),
m_version(NULL)
{ 
    setName(name);
    setDescription(description);
    setVersion(version);
}

TestRoutine::~TestRoutine()
{
    delete[] m_name;
    delete[] m_description;
    delete[] m_version;

    vector<TestAction*>::iterator counter;
    for(counter= m_actions.begin(); counter != m_actions.end(); counter++){
        delete (*counter);
    }
}

void TestRoutine::setName(const char* name)
{
    if (name == NULL)
        throw "routine name is null";
    if (strlen(name) <= 0)
        throw "routine name is empty";
    if (m_name != NULL)
        delete[] m_name;
    m_name = new char[strlen(name) + 1];
    strcpy(m_name,name);
}

char* TestRoutine::getName()
{
    if (m_name == NULL)
        return NULL;
    char* _name = new char[strlen(m_name) + 1];
    return strcpy(_name,m_name);
}

void TestRoutine::setDescription(const char* description)
{
    if (description == NULL)
        m_description = NULL;
    else{        
        delete[] m_description;
        m_description = new char[strlen(description) + 1];
        strcpy(m_description,description);
    }
}

char* TestRoutine::getDescription()
{
    if (m_description == NULL)
        return NULL;
    char* _description = new char[strlen(m_description) + 1];
    return strcpy(_description,m_description);
}

void TestRoutine::setVersion(const char* version)
{
    if (version == NULL)
        m_version = NULL;
    else{        
        delete[] m_version;
        m_version = new char[strlen(version) + 1];
        strcpy(m_version,version);
    }
}


char* TestRoutine::getVersion()
{
    if (m_version == NULL)
        return NULL;
    char* _version = new char[strlen(m_version) + 1];
    return strcpy(_version,m_version);
}

/**
*
*/
void TestRoutine::addAction(TestAction& testAction)
{
    TestAction* action = new TestAction(testAction);
    m_actions.push_back(action);
}

/**
*
*/
bool TestRoutine::removeAction(vector<TestAction*>::iterator pos)
{
    if (pos == m_actions.end())
        return false;
    TestAction* action = *pos;
    m_actions.erase(pos);
    delete action;    
    return true;
}

/**
*
*/
TestAction* TestRoutine::getAction(vector<TestAction*>::iterator pos)
{
    if (pos == m_actions.end())
        return NULL;
    return (*pos);
}

TestAction* TestRoutine::getAction(char* name)
{
    if (name == NULL)
        return NULL;
    vector<TestAction*>::iterator counter;
    for(counter= m_actions.begin(); counter != m_actions.end();counter++){
        TestAction* action = *counter;
        if (!strcmp(action->getName(),name))
            return action;
    }
    return NULL;
}

vector<TestAction*>::iterator TestRoutine::beginActions()
{
    return m_actions.begin();
}

vector<TestAction*>::iterator TestRoutine::endActions()
{
    return m_actions.end();
}


const char* TestRoutine::toString()
{
    string* str = new string("TestRoutine:\nName: ");
    str->append( m_name);    
    if (m_version != NULL){
        str->append(" version:");
        str->append(m_version);
    }
    if (m_description != NULL){
        str->append("\nDescription: ");
        str->append(m_description);    
    }
    const char* envStr = toEnvString();
    if (envStr!= NULL && strlen(envStr) > 0){
        str->append("\nSettings: ");
        str->append(envStr);
    }
    str->append("\n");    
    for(int count = 0; count < m_actions.size(); count++){
        str->append(m_actions[count]->toString());
        str->append("\n");
    }
    return str->c_str();
}

const char* TestRoutine::toXML()
{
    string* str = new string("<XML>\n <TestRoutine ID=1 Name='");
    str->append(m_name);
    str->append("' ");
    if (m_description != NULL){
  	str->append("Desc='");
	str->append(m_description);
    }
    if (m_version != NULL){
	str->append("' Version='");
	str->append(m_version);
    } 
    str->append("'>\n");
    for(int count = 0; count < m_actions.size(); count++){
	str->append(m_actions[count]->toXML());
	str->append("\n");
    }
    str->append("\n </TestRoutine>"); 
    str->append("\n</XML>");
    return str->c_str();
}


///////////////////////////////////////////////////////////////////////////////
//End TestRoutine.cpp
///////////////////////////////////////////////////////////////////////////////
