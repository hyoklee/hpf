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
#include <string>

#include "hdf5perf_cpp.h"

using namespace std;

//#define FILE_PATH "/mnt/scr3/termehch/temp"
#define FILE_NAME "filestorageinfo_cpptest.txt"

int main (int argc, char** argv)
{
   char * test_file_path = NULL;
   //write the test information to the repository
   try
   {
       cout <<"Testing File Storage" << endl;
       cout << "Creating Testing Program Information..." << endl; 
       TestRoutine *routine = new TestRoutine("FileStorage Test","Lirary FileStorage Test Program ","1.0");
       if (routine == NULL){
            cout << "Unable to initialize TestRoutine" << endl; 
            return -1;
       } else
            cout << "TestRoutine was initialized... " << endl; 
       routine->setSetting("OS", "RedHat Linux 7.1");
       StorageManager* storageManager  = new StorageManager;
       if (storageManager == NULL){
            cout << "Unable to initialize Storage Manager" << endl; 
            return -1;
       } else
            cout << "Storage Manager was initialized... " << endl; 
       cout << "Opening File Storage..." << endl;
       test_file_path = getenv("FILE_PATH");
       if(test_file_path == NULL) test_file_path = getenv("PWD");
       if(test_file_path == NULL) {
            cout <<" the current directory of the stored file is NULL"<<endl;
            cout << "Please set the path of the file from command line"<<endl;
       }
       storageManager->open(test_file_path,FILE_NAME);
       if (storageManager->isOpen())
           cout << "File is openned successfully" << endl;
       else
           cout << " File is not openned" << endl;
       cout << "Writing Testing Program Information..." << endl; 
       storageManager->write(routine);
       cout << "Closing File Storage..." << endl; 
       storageManager->close();
   }
   // catch failure 
   catch( char* error )
   {
     cout << "Error in File Storage Testing...:" << error <<endl;		
     return -1;
   }

   return 0;  // successfully terminated
}

