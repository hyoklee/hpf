
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

#include "TestAction.h"

#include <iostream>
/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             The information of a performance testing action. Each testing
 *                      program/routine may have different testing actions like read,write,..
 *                      on data with different settings.
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  
///////////////////////////////////////////////////////////////////////////////
//Begin TestAction.cpp
///////////////////////////////////////////////////////////////////////////////

TestAction::TestAction(const char* actionName, const char* description)
: m_name(NULL),
m_description(NULL)
{ 
    setName(actionName);
    setDescription(description);
}

TestAction::TestAction(TestAction& action)
:PO(action), 
m_name(NULL),
m_description(NULL)
{
    setSetting(&action);
    setName(action.getName());
    setDescription(action.getDescription());
    vector<TestInstance*>::iterator count;
    for(count = action.beginInstances(); count != action.endInstances(); count++){
        addInstance(*(*count));
    }
}

TestAction::~TestAction()
{
    delete[] m_name;
    delete[] m_description;
    vector<TestInstance*>::iterator count;
    for(count = this->beginInstances(); count != this->endInstances(); count++){
        delete (*count);
    }
}

void TestAction::setName(const char* actionName)
{
    if (actionName == NULL)
        throw "action name is null";
    if (strlen(actionName) <= 0)
        throw "action name is empty";
    if (m_name != NULL)
        delete[] m_name;
    m_name = new char[strlen(actionName) + 1];
    strcpy(m_name,actionName);
}

char* TestAction::getName()
{
    if (m_name == NULL)
        return NULL;
    char* _actionName = new char[strlen(m_name) + 1];
    return strcpy(_actionName,m_name);
}

void TestAction::setDescription(const char* description)
{
    if (description == NULL )
        m_description = NULL;
    else {
        delete[] m_description;
        m_description = new char[strlen(description) + 1];
        strcpy(m_description,description);
    }
}

char* TestAction::getDescription()
{
    if (m_description == NULL)
        return NULL;
    char* _description = new char[strlen(m_description) + 1];
    return strcpy(_description,m_description);
}

/**
*
*/
void TestAction::addInstance(TestInstance& testInstance)
{
    TestInstance* instance = new TestInstance(testInstance);
    m_instances.push_back(instance);    
}

/**
*
*/
bool TestAction::removeInstance(vector<TestInstance*>::iterator pos)
{
    if (pos == m_instances.end())
        return false;
    TestInstance* instance = *(pos);
    m_instances.erase(pos);    
    delete instance;
    return true;
}

/**
*
*/
TestInstance* TestAction::getInstance(vector<TestInstance*>::iterator pos)
{
    if (pos == m_instances.end())
        return NULL;    
    return *pos;
}

TestInstance* TestAction::getInstance(char* name)
{
    if (name == NULL)
        return NULL;
    vector<TestInstance*>::iterator counter;
    for(counter= m_instances.begin(); counter != m_instances.end();counter++){
        TestInstance* instance = *counter;
        if (!strcmp(instance->getDatasetName(),name))
            return instance;
    }
    return NULL;
}

vector<TestInstance*>::iterator TestAction::beginInstances()
{
    return m_instances.begin();
}

vector<TestInstance*>::iterator TestAction::endInstances()
{
    return m_instances.end();
}


const char* TestAction::toString()
{
    string* str = new string("\tTest Action:\n\tName: ");
    str->append( m_name);    
    if (m_description != NULL){
        str->append("\n\tDescription: ");
        str->append(m_description);
    }
    const char* envStr = toEnvString();
    if (envStr!= NULL && strlen(envStr) > 0){
        str->append("\n\tSettings: ");
        str->append(envStr);
    }
    str->append("\n");
    for(int count = 0; count < m_instances.size(); count++){
        str->append(m_instances[count]->toString());
        str->append("\n");
    }
    return str->c_str();
}

const char* TestAction::toXML()
{
   string * str = new string("  <TestAction ID=2  Name='");
   str->append(m_name);
   str->append("' ");
   if (m_description != NULL){
	str->append("Desc='");
	str->append(m_description);
   }
   str->append("' TestRoutine_ID=1>\n");
   for (int count = 0; count < m_instances.size(); count++){
	str->append(m_instances[count]->toXML());
	str->append("\n");
   }
   str->append("\n  <TestAction>");
   return str->c_str();
} 

///////////////////////////////////////////////////////////////////////////////
//End TestAction.cpp
///////////////////////////////////////////////////////////////////////////////

