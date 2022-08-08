
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
#include <string>

using namespace std;


#include "TestInstance.h"

// #include <iostream>
#include <strings.h>
/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             The informatrion of each instance of performance testing action
 *                      on a specific data-set
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
///////////////////////////////////////////////////////////////////////////////
//Begin TestInstance.cpp
///////////////////////////////////////////////////////////////////////////////

TestInstance::TestInstance(const char* datasetName, Date date, const char* host,
                            const char* libVersion,const char* datasetDescription,double result)
: m_datasetName(NULL),
m_datasetDescription(NULL),
m_host(NULL),
m_libVersion(NULL),
m_date(date)
{ 
    setDatasetName(datasetName);
    setDatasetDescription(datasetDescription);
    setHost(host);
    setLibVersion(libVersion);
    setResult(result);
}

TestInstance::TestInstance(TestInstance& instance)
:PO(instance),
m_datasetName(NULL),
m_datasetDescription(NULL),
m_host(NULL),
m_libVersion(NULL),
m_date(instance.getDate()),
m_result(instance.getResult())
{
    setSetting(&instance);    
    setDatasetName(instance.getDatasetName());
    setDatasetDescription(instance.getDatasetDescription());
    setHost(instance.getHost());
    setLibVersion(instance.getLibVersion());

}

TestInstance::~TestInstance()
{
    delete[] m_host;
    delete[] m_libVersion;
    delete[] m_datasetName;    
    delete[] m_datasetDescription;
}

void TestInstance::setDatasetName(const char* datasetName)
{
    if (datasetName == NULL)
        throw "dataset name is null";
    if (strlen(datasetName) <= 0)
        throw "dataset name is empty";

    if (m_datasetName != NULL)
        delete[] m_datasetName;
    m_datasetName = new char[strlen(datasetName) + 1];
    strcpy(m_datasetName,datasetName);
}

char* TestInstance::getDatasetName()
{
    if (m_datasetName == NULL)
        return NULL;
    char* _datasetName = new char[strlen(m_datasetName) + 1];
    return strcpy(_datasetName,m_datasetName);
}

void TestInstance::setDate(Date date)
{
    m_date = date;
}

Date& TestInstance::getDate()
{
    return m_date;
}

void TestInstance::setHost(const char* host)
{
    if (host == NULL || strlen(host) <= 0)
        throw "host name is invalid";
    if (m_host != NULL)
        delete[] m_host;
    m_host = new char[strlen(host) + 1];
    strcpy(m_host,host);
}

char* TestInstance::getHost()
{
    if (m_host == NULL)
        return NULL;
    char* _host = new char[strlen(m_host) + 1];
    return strcpy(_host,m_host);
}

void TestInstance::setLibVersion(const char* libVersion)
{
    if (libVersion == NULL || strlen(libVersion) <= 0)
        throw "library version name is invalid";
    if (m_libVersion != NULL)
        delete[] m_libVersion;
    m_libVersion = new char[strlen(libVersion) + 1];
    strcpy(m_libVersion,libVersion);
}

char* TestInstance::getLibVersion()
{
    if (m_libVersion == NULL)
        return NULL;    
    char* _libVersion = new char[strlen(m_libVersion) + 1];
    return strcpy(_libVersion,m_libVersion);
}

void TestInstance::setDatasetDescription(const char* datasetDescription)
{
    if (datasetDescription == NULL )
        m_datasetDescription = NULL;
    else {
        delete[] m_datasetDescription;
        m_datasetDescription = new char[strlen(datasetDescription) + 1];
        strcpy(m_datasetDescription,datasetDescription);
    }
}

char* TestInstance::getDatasetDescription()
{
    if (m_datasetDescription == NULL)
        return NULL;    
    char* _datasetDescription = new char[strlen(m_datasetDescription) + 1];
    return strcpy(_datasetDescription,m_datasetDescription);
}

void TestInstance::setResult(double result) 
{
 m_result = result;

}
double TestInstance::getResult()

{
  return m_result;

}


const char* TestInstance::toString()
{
    string* str = new string("\t\tTest Run on :\n\t\tDataset Name: ");
    str->append( m_datasetName);
    str->append( "\n\t\tDate: ");
    str->append(m_date.toString());
    str->append( "\n\t\tHost: ");
    str->append(m_host);    
    str->append( "\n\t\tLibrary used: ");
    str->append(m_libVersion);    
    if (m_datasetDescription != NULL){
        str->append("\n\t\tDataset Description: ");
        str->append(m_datasetDescription);
    }
    const char* envStr = toEnvString();
    if (envStr!= NULL && strlen(envStr) > 0){
        str->append("\n\t\tSettings: ");
        str->append(envStr);
    }
    str->append("\n");
    char buffer [sizeof(double)*8+1];
    sprintf (buffer,"%g",m_result);
    str->append(buffer);
    str->append("\n");
    return str->c_str();
}


const char* TestInstance::toXML()
{
    string* str = new string("   <TestInstance>\n");
    str->append("\t<Date>");
    str->append(m_date.toString());
    str->append("</Date>");
    str->append("\n\t<Name>");
    str->append(m_datasetName);
    str->append("</Name>");
    if (m_datasetDescription != NULL){
   	 str->append("\n\t<Desc>");
   	 str->append(m_datasetDescription);
    }
    str->append("</Desc>");
    str->append("\n\t<Version>");
    str->append(m_libVersion);
    str->append("</Version>");
    str->append("\n\t<Host>");
    str->append(m_host);
    str->append("</Host>");
    str->append("\n\t<Result>");
    char buffer [sizeof(double)*8+1];
    sprintf (buffer,"%g",m_result);
    str->append(buffer);
    str->append("</Result>");
    str->append("\n\t<TestAction_ID>");
    str->append("2</TestAction_ID>\n");
    str->append("   </TestInstance>");
    return str->c_str();
} 

///////////////////////////////////////////////////////////////////////////////
//End TestInstance.cpp
///////////////////////////////////////////////////////////////////////////////
