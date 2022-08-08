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
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
 *  This program tests the file storage system of the hdf performance library.
 */


#include <iostream>
#include <sstream>
#include <string>

#include "hdf5perf_cpp.h"
#include "db.h"

using namespace std;



int main (int argc, char** argv)
{
   //write the test information to the repository
   try
   {
       cout <<"Testing MySQL Storage" << endl;
       cout << "Creating Testing Program Information..." << endl;
       bool done = false;
       StorageManager* storageManager  = new StorageManager;
       if (storageManager == NULL){
            cout << "Unable to initialize Storage Manager" << endl; 
            return -1;
       } else
            cout << "Storage Manager was initialized... " << endl; 
       cout << "Opening MySQL Storage..." << endl;
       storageManager->open(server,dbname,true,user,passwd,port);       
       if (storageManager->isOpen())
           cout << "MySQL Connection established successfully" << endl;
       else
           cout << "MySQL Connection was not established" << endl;

       string *routineName = new string ("Test Program C++");
       char* temp = new char[strlen(routineName->c_str()) + 1];
       if (temp == NULL){
            cout << "Unable to allocate memory" << endl;
            return -1;
       }
       strcpy(temp,routineName->c_str());
       TestRoutine *existingRoutine = NULL;
       //Check for the existing names
       while(existingRoutine = storageManager->findByName(temp)){
           stringstream ss;
           string str;
           ss << TestUtil::random(1000000);
           ss >> str;        
           routineName->append(str);
           temp = new char[strlen(routineName->c_str()) + 1];
           if (temp == NULL){
                cout << "Unable to allocate memory" << endl;
                return -1;
           }
           strcpy(temp,routineName->c_str());
       }       
       //a new name is in the routineName right now
       TestRoutine *routine = new TestRoutine(routineName->c_str(),"C++ Library MySQL Storage","1.0");
       if (routine == NULL){
            cout << "Unable to initialize TestRoutine" << endl; 
            return -1;
       } else
            cout << "TestRoutine was initialized... " << endl; 
       routine->setSetting("OS", "RedHat Linux 7.1");
       cout << "Writing Testing Program Information..." << endl; 
       storageManager->write(routine);
       cout << "Removing the information..." << endl;
       storageManager->remove(routine->getName());
       cout << "Closing MySQL Connection..." << endl; 
       storageManager->close();
   }
   // catch failure 
   catch( char* error )
   {
     cout << "Error in MySQL Connection Testing...:" << error <<endl;		
     return -1;
   }

   return 0;  // successfully terminated
}

