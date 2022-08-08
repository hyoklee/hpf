
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

#include "string.h"
#include <string>
#include <map>
#include <vector>
#include <iostream>
using namespace std;

#include "LibUtil.h"
#include "MySQLStorage.h"

#define KB 1024

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             The interface to the MySQL database management system 
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  
///////////////////////////////////////////////////////////////////////////////
//Begin MySQLStorage.cpp
///////////////////////////////////////////////////////////////////////////////

MySQLStorage::MySQLStorage()
:m_connection(NULL)
{ 
    transaction = false;
}

MySQLStorage::~MySQLStorage()
{
    if (isOpen())
        close();    
}

void MySQLStorage::open(const char* server,const char *name, bool append, const char* user, 
                                        const char* passwd, const unsigned int port)
{
    if (server == NULL || strlen(server) <= 0 )
        throw "The server name is not valid";

    if (name == NULL || strlen(name) <= 0)
        throw "The database name is not valid";
	if ((m_connection = mysql_init(m_connection)) == NULL)
		throw "Failed to initate MySQL connection";
	/* Connect to database */
    if (!mysql_real_connect(m_connection, server,
         user, passwd, name, port, NULL, 0)) {
		throw mysql_error(m_connection);      
    }
}

/**
 * Checks to see if the file is open
 */
bool MySQLStorage::isOpen()
{
    if (m_connection == NULL)
        return false;
    //Check if the connection is established and alive
    if (mysql_ping(m_connection) == 0)
        return true;
    return false;
}



TestRoutine* MySQLStorage::findByName(char* routineName)
{
    char *errorMsg;
    MYSQL_RES *result;
    MYSQL_ROW row;
    int rowCount,fieldCount;
    string *query_str;

    if (routineName == NULL || strlen(routineName) <= 0)
        return NULL;

    query_str = new string(FIND_ROUTINE_QUERY);
    query_str->append("'");
    query_str->append(routineName);
    query_str->append("'");
    if (mysql_real_query(m_connection, query_str->c_str(), (unsigned int) strlen(query_str->c_str())) != 0){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        throw errorMsg;
    }
    result = mysql_store_result(m_connection);
    if (result){ // mysql_num_rows(result) == 1 due to the database constraint
        row = mysql_fetch_row(result);
        if(row == NULL) 
            return NULL;
        TestRoutine *routine = new TestRoutine(row[1],row[2],row[3]);
        routine->setId(LibUtil::getIntValue(row[0]));
        Env *env = findEnvsOf(routine->getId(),TESTROUTINE_TYPE);
        if (env != NULL){
            routine->setSetting(env);
            delete env;
        }
        vector<TestAction*>* actions = findActionsOf(routine->getId());
        if (actions != NULL){
            vector<TestAction*>::iterator counter;
            for(counter= actions->begin(); counter != actions->end();counter++){
                TestAction* action = *counter;
                routine->addAction(*action);
            }
            for(counter= actions->begin(); counter != actions->end();counter++){
                delete *counter;                
            }
            delete actions;
        }
        mysql_free_result(result);        
        return routine;
    } else {
        return NULL;        
    }
}

Env* MySQLStorage::findEnvsOf(int parent_ID, char parent_Type)
{
    char *errorMsg,name[KB],value[KB];
    MYSQL_RES *result;
    MYSQL_ROW row;
    int rowCount,fieldCount;
    unsigned long int parentTypeLength,outputLength[2]; 
    my_bool is_null[2];
    my_bool errors[2];
    MYSQL_STMT *stmt;
    MYSQL_BIND  inputBind[2],outputBind[2];
    
    if ((stmt=mysql_stmt_init(m_connection)) == NULL){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        rollBack();
        throw errorMsg;
    }

    if (mysql_stmt_prepare(stmt, FIND_ENVS_QUERY, strlen(FIND_ENVS_QUERY))){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }

    memset(inputBind, 0, sizeof(inputBind));
   
    inputBind[0].buffer_type= MYSQL_TYPE_LONG;
    inputBind[0].is_null= 0;
    inputBind[0].buffer= (char *) &parent_ID;
    inputBind[0].length= 0;
    parentTypeLength = 1;
    inputBind[1].buffer_type= MYSQL_TYPE_STRING;
    inputBind[1].is_null= 0;
    inputBind[1].buffer = (char*)&parent_Type;
    inputBind[1].buffer_length = parentTypeLength;
    inputBind[1].length = &parentTypeLength;   
 
    if (mysql_stmt_bind_param(stmt, inputBind)){
    	errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    if (mysql_stmt_execute(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    
    memset(outputBind, 0, sizeof(outputBind));
    outputBind[0].buffer_type = MYSQL_TYPE_STRING;
    outputBind[0].is_null = 0;
    outputBind[0].buffer = (void*) name;
    outputBind[0].buffer_length = KB;
    outputBind[0].length = &outputLength[0];

    outputBind[1].buffer_type = MYSQL_TYPE_STRING;
    outputBind[1].is_null = 0;
    outputBind[1].buffer = (void*) value;
    outputBind[1].buffer_length = KB;
    outputBind[1].length = &outputLength[1];

   if(mysql_stmt_bind_result(stmt,outputBind)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
   }
   if (mysql_stmt_store_result(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
   }
   
   Env *env = new Env;
   while (!mysql_stmt_fetch(stmt)){
	name[outputLength[0]] = '\0';
	value[outputLength[1]] = '\0';
	env->set(name,value);
   }
   if (mysql_stmt_close(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
   }
   if(env->empty()){
	delete env;
	return NULL;
   }
   return env;
}

vector<TestAction*>* MySQLStorage::findActionsOf(int TestRoutine_ID)
{
    char *errorMsg;
    MYSQL_RES *result;
    MYSQL_ROW row;
    int rowCount,fieldCount;
    string *query_str;
    int i;

    query_str = new string(FIND_ACTIONS_QUERY);
    query_str->append(LibUtil::getStringValue(TestRoutine_ID));
    if (mysql_real_query(m_connection, query_str->c_str(), (unsigned int) strlen(query_str->c_str())) != 0){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        throw errorMsg;
    }
    result = mysql_store_result(m_connection);    
    if (result){
        vector <TestAction*> *actions = new vector <TestAction*>;
        for(rowCount= 0; rowCount< mysql_num_rows(result); rowCount++){ 
            row = mysql_fetch_row(result);
            if(row < 0) 
                break;
            TestAction *action = new TestAction(row[1],row[2]);            
            action->setId(LibUtil::getIntValue(row[0]));
            Env *env = findEnvsOf(action->getId(),TESTACTION_TYPE);
            if (env != NULL){
                action->setSetting(env);
                delete env;
            }
            vector<TestInstance*>* instances = findInstancesOf(action->getId());
            if (instances == NULL){
                actions->push_back(action);
                continue;
            }
            vector<TestInstance*>::iterator counter;
            for(counter= instances->begin(); counter != instances->end();counter++){
                TestInstance* instance = *counter;
                action->addInstance(*instance);
            }
            for(counter= instances->begin(); counter != instances->end();counter++){
                delete *counter;                
            }
            delete instances;
            actions->push_back(action);
        }
        mysql_free_result(result);
        return actions;
    } else {
        return NULL;        
    }
}

vector<TestInstance*>* MySQLStorage::findInstancesOf(int TestAction_ID)
{
    char *errorMsg;
    MYSQL_RES *result;
    MYSQL_ROW row;
    int rowCount,fieldCount;
    string *query_str;

    query_str = new string(FIND_INSTANCES_QUERY);
    query_str->append(LibUtil::getStringValue(TestAction_ID));
    if (mysql_real_query(m_connection, query_str->c_str(), (unsigned int) strlen(query_str->c_str())) != 0){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        throw errorMsg;
    }
    result = mysql_store_result(m_connection);    
    if (result){
        vector <TestInstance*> *instances = new vector <TestInstance*>;
        for(rowCount= 0; rowCount< mysql_num_rows(result); rowCount++){ 
            row = mysql_fetch_row(result);
            if(row < 0) 
                break;
            //TestInstance_ID,DatasetName,DatasetDesc,TestAction_ID,Host,TestInstance_Date,LibraryVersion,Result
            Date* date = toDate(row[5]);
            TestInstance *instance = new TestInstance(row[1],*date,row[4],row[6],row[2],LibUtil::getDoubleValue(row[7]));
            instance->setId(LibUtil::getIntValue(row[0]));
            Env *env = findEnvsOf(instance->getId(),TESTINSTANCE_TYPE);
            if (env != NULL){
                instance->setSetting(env);
                delete env;
            }
            instances->push_back(instance);
        }
        mysql_free_result(result);
        return instances;
    } else {
        return NULL;        
    }
}

MYSQL_TIME MySQLStorage::toMYSQL_TIME(Date date)
{
    MYSQL_TIME mysql_time;
    mysql_time.year = date.getYear();
    mysql_time.month = date.getMonth();
    mysql_time.day = date.getDay();
    mysql_time.hour = date.getHour();
    mysql_time.minute = date.getMinute();
    mysql_time.second = date.getSecond();
    mysql_time.neg = (date.isNegative()) ? (my_bool) 1 : (my_bool) 0;
    return mysql_time;
}

Date* MySQLStorage::toDate(MYSQL_TIME mysql_time)
{
    Date *date = new Date(mysql_time.year , mysql_time.month, mysql_time.day,
                            mysql_time.hour, mysql_time.minute, mysql_time.second);
    return date;
}

Date* MySQLStorage::toDate(char* mysql_date)
{
    int dateParam[6];
    char yearStr[5],dateParamStr[3];
    int pos,i,j;

    if (mysql_date == NULL)
        return NULL;
    //input format from MySQL is like: 2006-05-22 12:00:00    
    yearStr[4] = '\0';
    dateParamStr[2] = '\0';
    for(j = 0; j < 6; j++)
        dateParam[j] = 0;   
    pos = 0;
    for(i = 0; i < 4; i++)
        yearStr[i] = mysql_date[pos++];
    dateParam[0] = LibUtil::getIntValue(yearStr);
    pos++;
    for(j = 1; j < 6; j++){
        for(i = 0; i < 2; i++)
            dateParamStr[i] = mysql_date[pos++];
        dateParam[j] = LibUtil::getIntValue(dateParamStr);
        pos++;
    }
    Date *date = new Date(dateParam[0], dateParam[1], dateParam[2], dateParam[3], dateParam[4], dateParam[5]);
    return date;
}


void MySQLStorage::startTransaction()
{
    if (m_connection == NULL)
        throw "Database connection is not open";
    //start transaction, set auto-commit false
    if (mysql_autocommit(m_connection, 0) != 0){        
        throw mysql_error(m_connection);
    }
    transaction = true;
}

void MySQLStorage::rollBack()
{
    char* errorMsg = NULL;

    if (mysql_rollback(m_connection)!= 0){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
    }
    //set auto-commit on anyway
    mysql_autocommit(m_connection, 1);
    transaction = false;

    if (errorMsg != NULL)
        throw errorMsg;
    if (mysql_error(m_connection)[0] != '\0')
        throw mysql_error(m_connection);
}

void MySQLStorage::endTransaction()
{
    char* errorMsg = NULL;

    if (mysql_commit(m_connection)!= 0){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
    }
    //set auto-commit on anyway
    mysql_autocommit(m_connection, 1);
    transaction = false;
    if (errorMsg != NULL)
        throw errorMsg;
    if (mysql_error(m_connection)[0] != '\0')
        throw mysql_error(m_connection);
}

void MySQLStorage::writeEnvs(int parentID, char parentType, EnvOwner* env)
{
    char *name,*value,*errorMsg;
    unsigned long int nameLength,valueLength,parentTypeLength; 
    MYSQL_STMT *stmt;
    MYSQL_BIND  bind[4];


    if (env == NULL)
        return;
    
    if ((stmt=mysql_stmt_init(m_connection)) == NULL){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        rollBack();
        throw errorMsg;
    }

    if (mysql_stmt_prepare(stmt, INSERT_ENV_QUERY, strlen(INSERT_ENV_QUERY))){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }

    map<string, string>::iterator counter;
    for(counter = env->beginSettings(); counter != env->endSettings(); counter++){
        memset(bind, 0, sizeof(bind));
        nameLength = strlen(counter->first.c_str());
        if ((name = new char[nameLength + 1]) == NULL){
            rollBack();
            throw "Unable to allocate memory";
        }
        strcpy(name,counter->first.c_str());
        bind[0].buffer_type= MYSQL_TYPE_STRING;
        bind[0].is_null= 0;
        bind[0].buffer= (char *)name;
        bind[0].buffer_length= nameLength;
        bind[0].length= &nameLength;
        valueLength = strlen(counter->second.c_str());
        if ((value = new char[valueLength + 1]) == NULL){
            rollBack();
            throw "Unable to allocate memory";
        }
        strcpy(value,counter->second.c_str());
        bind[1].buffer_type= MYSQL_TYPE_STRING;
        bind[1].is_null= 0;
        bind[1].buffer= (char *)value;
        bind[1].buffer_length= valueLength;
        bind[1].length= &valueLength;
        bind[2].buffer_type= MYSQL_TYPE_LONG;
        bind[2].buffer= (char *)&parentID;
        bind[2].is_null= 0;
        bind[2].length= 0;
        parentTypeLength = 1; 
        bind[3].buffer_type= MYSQL_TYPE_STRING;
        bind[3].is_null= 0;
        bind[3].buffer= (char *)&parentType;
        bind[3].buffer_length= parentTypeLength;
        bind[3].length= &parentTypeLength;

        if (mysql_stmt_bind_param(stmt, bind)){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));
            rollBack();
            throw errorMsg;
        }
        if (mysql_stmt_execute(stmt)){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));
            rollBack();
            throw errorMsg;
        }
        if(mysql_stmt_affected_rows(stmt) < 1){        
            rollBack();
            throw "Unable to insert row in to the database";
        }
    }
    if (mysql_stmt_close(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
}


void MySQLStorage::write(TestRoutine* routine)
{
    char *errorMsg;

    MYSQL_STMT *stmt;
    MYSQL_BIND    bind[3];


    if (routine == NULL)
        return;
    startTransaction();
    //insert the main fields
    if ((stmt=mysql_stmt_init(m_connection)) == NULL){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        rollBack();
        throw errorMsg;
    }

    if (mysql_stmt_prepare(stmt, INSERT_ROUTINE_QUERY, strlen(INSERT_ROUTINE_QUERY))){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    memset(bind, 0, sizeof(bind));
        
    char* name = routine->getName();
    // name must not be null
    if (name == NULL){
        rollBack();
        throw "The test routine name must not be null";
    }
    unsigned long int nameLength = strlen(routine->getName());
    bind[0].buffer_type= MYSQL_TYPE_STRING;
    bind[0].buffer= (char *)name;
    bind[0].buffer_length= nameLength;
    bind[0].is_null= 0;
    bind[0].length= &nameLength;

    char* desc = routine->getDescription();
    if (desc == NULL){
        bind[1].buffer_type= MYSQL_TYPE_NULL;
    }else {    
        unsigned long int descLength = strlen(routine->getDescription());
        bind[1].buffer_type= MYSQL_TYPE_STRING;
        bind[1].buffer= (char *)desc;
        bind[1].buffer_length= descLength;
        bind[1].is_null= 0;
        bind[1].length= &descLength;
    }

    char* version = routine->getVersion();
    if (version == NULL){
        bind[2].buffer_type= MYSQL_TYPE_NULL;
    } else {
        unsigned long int versionLength = strlen(routine->getVersion());
        bind[2].buffer_type= MYSQL_TYPE_STRING;
        bind[2].buffer= (char *)version;
        bind[2].buffer_length= versionLength;
        bind[2].is_null= 0;
        bind[2].length= &versionLength;
    }

    if (mysql_stmt_bind_param(stmt, bind)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    if (mysql_stmt_execute(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }

    if(mysql_stmt_affected_rows(stmt) < 1){        
        rollBack();
        throw "Unable to insert row in to the database";
    }
    int ID = mysql_stmt_insert_id(stmt);
    
    if (mysql_stmt_close(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }

    //inserting env values
    writeEnvs(ID, TESTROUTINE_TYPE, routine);

    //inserting actions
    vector<TestAction*>::iterator actions;
    for(actions = routine->beginActions(); actions != routine->endActions(); actions++){
        write (ID, *actions);
    }
    endTransaction();
}


void MySQLStorage::write(int parentID, TestAction* action)
{
    char *errorMsg;

    MYSQL_STMT *stmt;
    MYSQL_BIND  bind[3];


    if (action == NULL)
        return;

    //insert the main fields
    if ((stmt=mysql_stmt_init(m_connection)) == NULL){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        rollBack();
        throw errorMsg;
    }

    if (mysql_stmt_prepare(stmt, INSERT_ACTION_QUERY, strlen(INSERT_ACTION_QUERY))){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    memset(bind, 0, sizeof(bind));
    
    char* name = action->getName();    
    if (name == NULL){
        rollBack();
        throw "The action name must not be null";
    }
    unsigned long int nameLength = strlen(action->getName());
    bind[0].buffer_type= MYSQL_TYPE_STRING;
    bind[0].buffer= (char *)name;
    bind[0].buffer_length= nameLength;
    bind[0].is_null= 0;
    bind[0].length= &nameLength;

    char* desc = action->getDescription();
    if (desc == NULL){
        bind[1].buffer_type= MYSQL_TYPE_NULL;
    }else {
        unsigned long int descLength = strlen(action->getDescription());
        bind[1].buffer_type= MYSQL_TYPE_STRING;
        bind[1].buffer= (char *)desc;
        bind[1].buffer_length= descLength;
        bind[1].is_null= 0;
        bind[1].length= &descLength;
    }

    bind[2].buffer_type= MYSQL_TYPE_LONG;
    bind[2].buffer= (char *)&parentID;
    bind[2].is_null= 0;
    bind[2].length= 0;

    if (mysql_stmt_bind_param(stmt, bind)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    if (mysql_stmt_execute(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    if(mysql_stmt_affected_rows(stmt) < 1){        
        rollBack();
        throw "Unable to insert row in to the database";
    }
    int ID = mysql_stmt_insert_id(stmt);

    if (mysql_stmt_close(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    //inserting env values
    writeEnvs(ID, TESTACTION_TYPE, action);
    //inserting instances
    vector<TestInstance*>::iterator instances;
    for(instances = action->beginInstances(); instances != action->endInstances(); instances++){
        write (ID,*instances);
    }   
}


void MySQLStorage::write(int parentID, TestInstance* instance)
{
    char *errorMsg;

    MYSQL_STMT *stmt;
    MYSQL_BIND  bind[7];


    if (instance == NULL)
        return;
    //insert the main fields
    if ((stmt=mysql_stmt_init(m_connection)) == NULL){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        rollBack();
        throw errorMsg;
    }

    if (mysql_stmt_prepare(stmt, INSERT_INSTANCE_QUERY, strlen(INSERT_INSTANCE_QUERY))){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    memset(bind, 0, sizeof(bind));
    int index = 0;
    
    char* name = instance->getDatasetName();    
    if (name == NULL){
        rollBack();
        throw "The test instance name must not be null";
    } else {
        unsigned long int nameLength = strlen(instance->getDatasetName());
        bind[index].buffer_type= MYSQL_TYPE_STRING;
        bind[index].buffer= (char *)name;
        bind[index].buffer_length= nameLength;
        bind[index].is_null= (my_bool*) 0;
        bind[index].length= &nameLength;
    }

    MYSQL_TIME mysql_time;
    index++;
    bind[index].buffer_type= MYSQL_TYPE_DATETIME;
    bind[index].buffer= (char *)&mysql_time;
    bind[index].is_null= (my_bool*) 0;
    bind[index].length= 0;
    mysql_time = toMYSQL_TIME(instance->getDate());
    

    char* host = instance->getHost();
    index++;
    if (host == NULL){
        bind[index].buffer_type= MYSQL_TYPE_NULL;
    }else {    
        unsigned long int hostLength = strlen(instance->getHost());    
        bind[index].buffer_type= MYSQL_TYPE_STRING;
        bind[index].buffer= (char *)host;
        bind[index].buffer_length= hostLength;
        bind[index].is_null= (my_bool*) 0;
        bind[index].length= &hostLength;
    }

    char* libVersion = instance->getLibVersion();    
    index++;
    if (libVersion == NULL){
        bind[index].buffer_type= MYSQL_TYPE_NULL;
    }else {    
        unsigned long int libVersionLength = strlen(instance->getLibVersion());
        bind[index].buffer_type= MYSQL_TYPE_STRING;
        bind[index].buffer= (char *)libVersion;
        bind[index].buffer_length= libVersionLength;
        bind[index].is_null= (my_bool*) 0;
        bind[index].length= &libVersionLength;
    }

    char* desc = instance->getDatasetDescription();    
    index++;    
    if (desc == NULL){
        bind[index].buffer_type= MYSQL_TYPE_NULL;
    }
    else{
        unsigned long int descLength = strlen(instance->getDatasetDescription());        
        bind[index].buffer_type= MYSQL_TYPE_STRING;
        bind[index].buffer= (char *)desc;
        bind[index].buffer_length= descLength;
        bind[index].is_null= (my_bool*) 0;
        bind[index].length= &descLength;
    }

    double result_value = instance->getResult();
    index++;
    bind[index].buffer_type= MYSQL_TYPE_DOUBLE;
    bind[index].buffer= (char *)&result_value;
    bind[index].is_null= 0;
    bind[index].length= 0;
 
    index++;
    bind[index].buffer_type= MYSQL_TYPE_LONG;
    bind[index].buffer= (char *)&parentID;
    bind[index].is_null= (my_bool*) 0;
    bind[index].length= 0;

    if (mysql_stmt_bind_param(stmt, bind)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    if (mysql_stmt_execute(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }

    if(mysql_stmt_affected_rows(stmt) < 1){        
        rollBack();
        throw "Unable to insert row in to the database";
    }
    int ID = mysql_stmt_insert_id(stmt);

    if (mysql_stmt_close(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    //inserting env values
    writeEnvs(ID, TESTINSTANCE_TYPE, instance);
}


/**
*
*/
void MySQLStorage::close()
{
    if (m_connection != NULL){
        mysql_close(m_connection);
    }
}

bool MySQLStorage::update(TestRoutine* routine)
{
    char* errorMsg;

    if (routine == NULL)
        return true;

    // name must not be null
    if (routine->getName() == NULL || strlen(routine->getName()) <= 0)
        return false;  
    try{
        startTransaction();
        if (! remove(routine->getName())){
            rollBack();
            return false;
        }
        write(routine);
        endTransaction();
    }
    catch(char* errorMsg){
        rollBack();
        throw errorMsg;
    }
    return true;    
}

/**
*
*/
bool MySQLStorage::remove(char* routineName)
{
    char *errorMsg;
    TestRoutine *routine = NULL;

    MYSQL_STMT *stmt;
    MYSQL_BIND bind[1];
    // name must not be null
    if (routineName == NULL || strlen(routineName) <= 0)
        return false;
    
    startTransaction();
    routine = findByName(routineName);
    if (routine == NULL){
        rollBack();
        return false;
    }    
    if (!removeTestActions(routine)){
        rollBack();
        return false;
    }
    if (!removeTestEnvs(routine->getId(),TESTROUTINE_TYPE)){
        rollBack();
        return false;
    }
    if ((stmt=mysql_stmt_init(m_connection)) == NULL){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));
        rollBack();
        throw errorMsg;
    }
    if (mysql_stmt_prepare(stmt, REMOVE_ROUTINE_QUERY, strlen(REMOVE_ROUTINE_QUERY))){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    memset(bind, 0, sizeof(bind));

    unsigned long int nameLength = strlen(routineName);
    bind[0].buffer_type= MYSQL_TYPE_STRING;
    bind[0].buffer= (char *)routineName;
    bind[0].buffer_length= nameLength;
    bind[0].is_null= 0;
    bind[0].length= &nameLength;
    if (mysql_stmt_bind_param(stmt, bind)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    if (mysql_stmt_execute(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
   if(mysql_stmt_affected_rows(stmt) < 1){        
        rollBack();
        throw "Unable to remove row from database";
    }
    if (mysql_stmt_close(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        rollBack();
        throw errorMsg;
    }
    endTransaction();
    return true;
}

bool MySQLStorage::removeTestActions(TestRoutine* routine)
{
    char *errorMsg;
    TestAction *action = NULL;
    MYSQL_STMT *stmt;
    MYSQL_BIND bind[2];

    if (routine == NULL)
        return true;
    vector<TestAction*>::iterator actions;
    for(actions = routine->beginActions(); actions != routine->endActions(); actions++){
        TestAction *action = *actions;
        if (action == NULL)
            continue;
        if (!removeTestInstances(action)){
            return false;
        }
        if (!removeTestEnvs(action->getId(),TESTACTION_TYPE)){        
            return false;
        }
        if ((stmt=mysql_stmt_init(m_connection)) == NULL){
            errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
            strcpy(errorMsg,mysql_error(m_connection));            
            throw errorMsg;
        }
        if (mysql_stmt_prepare(stmt, REMOVE_ACTIONS_QUERY, strlen(REMOVE_ACTIONS_QUERY))){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));            
            throw errorMsg;
        }
        memset(bind, 0, sizeof(bind));
        int routine_id = routine->getId();
        bind[0].buffer_type = MYSQL_TYPE_LONG;
        bind[0].buffer = (char *)&routine_id;
        bind[0].is_null= 0;
        bind[0].length= 0;

        char* action_name=action->getName();
        unsigned long int nameLength = strlen(action_name);
        bind[1].buffer_type=MYSQL_TYPE_STRING;
        bind[1].buffer =(char*)action_name;
        bind[1].buffer_length=nameLength;
        bind[1].is_null = 0;
        bind[1].length= &nameLength;

        
        if (mysql_stmt_bind_param(stmt, bind)){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));        
            throw errorMsg;
        }
        if (mysql_stmt_execute(stmt)){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));
            throw errorMsg;
        }
        if(mysql_stmt_affected_rows(stmt) < 1){            
            throw "Unable to remove row from database";
        }
        if (mysql_stmt_close(stmt)){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));
            throw errorMsg;
        }        
    }
    return true;
}

bool MySQLStorage::removeTestInstances(TestAction* action)
{
    char *errorMsg;
    TestInstance *instance = NULL;
    MYSQL_STMT *stmt;
    MYSQL_BIND bind[3];

    if (action == NULL)
        return true;

    vector<TestInstance*>::iterator instances;
    for(instances = action->beginInstances(); instances != action->endInstances(); instances++){
        instance = *instances;
        if (instance == NULL)
            continue;
        if (!removeTestEnvs(instance->getId(),TESTINSTANCE_TYPE)){        
            return false;
        }
        if ((stmt=mysql_stmt_init(m_connection)) == NULL){
            errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
            strcpy(errorMsg,mysql_error(m_connection));            
            throw errorMsg;
        }
        if (mysql_stmt_prepare(stmt, REMOVE_INSTANCES_QUERY, strlen(REMOVE_INSTANCES_QUERY))){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));            
            throw errorMsg;
        }
        memset(bind, 0, sizeof(bind));
        int action_id = action->getId();
        bind[0].buffer_type = MYSQL_TYPE_LONG;
        bind[0].buffer= (char *)&action_id;
        bind[0].is_null= 0;
        bind[0].length= 0;

        char* instance_name=instance->getDatasetName();
        unsigned long int nameLength = strlen(instance_name);
        bind[1].buffer_type=MYSQL_TYPE_STRING;
        bind[1].buffer =(char*)instance_name;
        bind[1].buffer_length=nameLength;
        bind[1].is_null = 0;
        bind[1].length= &nameLength;

        MYSQL_TIME mysql_time = toMYSQL_TIME(instance->getDate());


        bind[2].buffer_type = MYSQL_TYPE_DATETIME;
        bind[2].buffer      =(char *)&mysql_time;
        bind[2].is_null = (my_bool*)0;
        bind[2].length =0;

        if (mysql_stmt_bind_param(stmt, bind)){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));        
            throw errorMsg;
        }
        if (mysql_stmt_execute(stmt)){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));
            throw errorMsg;
        }
        if(mysql_stmt_affected_rows(stmt) < 0){
            throw "Unable to remove row from database";
        } 
        if (mysql_stmt_close(stmt)){
            errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
            strcpy(errorMsg,mysql_stmt_error(stmt));
            throw errorMsg;
        }        
    }
    return true;
}

bool MySQLStorage::removeTestEnvs(int parent_ID,char parent_Type)
{
    char *errorMsg;
    MYSQL_STMT *stmt;
    MYSQL_BIND bind[2];
    unsigned long int  parentTypeLength = 1;

    if ((stmt=mysql_stmt_init(m_connection)) == NULL){
        errorMsg = new char[strlen(mysql_error(m_connection)) + 1];
        strcpy(errorMsg,mysql_error(m_connection));            
        throw errorMsg;
    }
    if (mysql_stmt_prepare(stmt, REMOVE_ENVS_QUERY, strlen(REMOVE_ENVS_QUERY))){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));            
        throw errorMsg;
    }
    memset(bind, 0, sizeof(bind));
    bind[0].buffer_type = MYSQL_TYPE_LONG;
    bind[0].buffer= (char *)&parent_ID;
    bind[0].is_null= 0;
    bind[0].length= 0;

    bind[1].buffer_type = MYSQL_TYPE_STRING;
    bind[1].buffer= (char *)&parent_Type;
    bind[1].buffer_length = parentTypeLength;
    bind[1].is_null= 0;
    bind[1].length= &parentTypeLength;

    if (mysql_stmt_bind_param(stmt, bind)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));        
        throw errorMsg;
    }
    if (mysql_stmt_execute(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        throw errorMsg;
    }
    if (mysql_stmt_close(stmt)){
        errorMsg = new char[strlen(mysql_stmt_error(stmt)) + 1];
        strcpy(errorMsg,mysql_stmt_error(stmt));
        throw errorMsg;
    }
    return true;
}
///////////////////////////////////////////////////////////////////////////////
//End MySQLStorage.cpp
///////////////////////////////////////////////////////////////////////////////
