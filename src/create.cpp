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
 *  This example measures the performance of writing a dataset to a new HDF5 file.
 */

#ifdef OLD_HEADER_FILENAME
#include <iostream.h>
#else
#include <iostream>
#endif
#include <string>

#include "H5Cpp.h"

#include "CmdLine.h"
#include "ValueArg.h"

#include "TestRoutine.h"
#include "StorageManager.h"

const H5std_string	FILE_NAME( "SDS.h5" );
const H5std_string	DATASET_NAME( "IntArray" );
const int 	NX = 5;                    // dataset dimensions
const int 	NY = 6;
const int 	RANK = 2;

int main (int argc, char** argv)
{
   /*
    * Data initialization.
    */
   int i, j;
   int** data;          // buffer for data to write
   int x,y;
   char* test_file_path = NULL;

   try {  

    // Define the command line object.
    std::string name("The write performance measurer"); 
    std::string version("0.9");
    TCLAP::CmdLine* cmd = new TCLAP::CmdLine(name, ' ', version);

    TCLAP::ValueArg<int> dimXArg("x","xDimension","X Dimension of array",false,NX,"integer");
    cmd->add( dimXArg );
    TCLAP::ValueArg<int> dimYArg("y","yDimension","Y Dimension of array",false,NY,"integer");
    cmd->add( dimYArg );

    // Parse the args.    
    cmd->parse( argc, argv );

    // Get the value parsed by each arg. 
    x = dimXArg.getValue();
    y = dimYArg.getValue();
   } 
   catch (TCLAP::ArgException &e)  // catch any exceptions
   { 
       std::cerr << "error: " << e.error() << " for arg " << e.argId() << std::endl; 
       return -1;
   }
   data = new int*[x];
   for(i = 0; i < x; i++)
   {
       data[i] = new int[y];
   }
    cout << "data[i] = new int(0);" << endl;
   for (j = 0; j < x; j++)
   {
      for (i = 0; i < y; i++) {
	 data[j][i] = i + j;
         cout << "data[j][i] = " << data[j][i]<<endl;
      }
   }

   // Try block to detect exceptions raised by any of the calls inside it
   try
   {
      /*
       * Turn off the auto-printing when failure occurs so that we can
       * handle the errors appropriately
       */       
       H5::Exception::dontPrint();
       cout << "H5::Exception::dontPrint();" << endl;

      /*
       * Create a new file using H5F_ACC_TRUNC access,
       * default file creation properties, and default file
       * access properties.
       */       
      H5::H5File file( FILE_NAME, H5F_ACC_TRUNC );
      cout << "H5::H5File file( FILE_NAME, H5F_ACC_TRUNC );" << endl;

      /*
       * Define the size of the array and create the data space for fixed
       * size dataset.
       */
      hsize_t     dimsf[2];              // dataset dimensions
      dimsf[0] = x;
      dimsf[1] = y;
      H5::DataSpace dataspace( RANK, dimsf );
      cout << "H5::DataSpace dataspace( RANK, dimsf );" << endl;

      /*
       * Define datatype for the data in the file.
       * We will store little endian INT numbers.
       */
      H5::IntType datatype( H5::PredType::NATIVE_INT );
      cout << "H5::IntType datatype( H5::PredType::NATIVE_INT );" << endl;
      datatype.setOrder( H5T_ORDER_LE );
      cout << "datatype.setOrder( H5T_ORDER_LE );" << endl;

      /*
       * Create a new dataset within the file using defined dataspace and
       * datatype and default dataset creation properties.
       */
      H5::DataSet dataset = file.createDataSet( DATASET_NAME, datatype, dataspace );
      cout << "H5::DataSet dataset = file.createDataSet( DATASET_NAME, datatype, dataspace );" << endl;
      /*
       * Write the data to the dataset using default memory space, file
       * space, and transfer properties.
       */
      dataset.write( data, H5::PredType::NATIVE_INT );
      cout << "dataset.write( data, H5::PredType::NATIVE_INT );" << endl;
   }  // end of try block

   // catch failure caused by the H5File operations
   catch( H5::FileIException error )
   {
      error.printErrorStack();
      return -1;
   }

   // catch failure caused by the DataSet operations
   catch( H5::DataSetIException error )
   {
      error.printErrorStack();
      return -1;
   }

   // catch failure caused by the DataSpace operations
   catch( H5::DataSpaceIException error )
   {
      error.printErrorStack();
      return -1;
   }

   // catch failure caused by the DataSpace operations
   catch( H5::DataTypeIException error )
   {
      error.printErrorStack();
      return -1;
   }
   //write the test information to the repository
   try
   {
        TestRoutine *routine = new TestRoutine("create","create dataset test program ","1.0");        
        routine->setSetting("OS", "RedHat Linux 7.1");
        StorageManager* storageManager  = new StorageManager;
        cout <<"storageManager  = new StorageManager;" <<endl;
        if(test_file_path == NULL) test_file_path = getenv("PWD");
        if(test_file_path == NULL) {
            cout <<" the current directory of the stored file is NULL"<<endl;
            cout << "Please set the path of the file from command line"<<endl;
        }
        storageManager->open(test_file_path,"createInfo.txt");
        
        storageManager->write(routine);
        storageManager->close();
   }
   // catch failure 
   catch( char* error )
   {
     std::cerr<< error << std::endl; 
     return -1;
   }

   return 0;  // successfully terminated
}

