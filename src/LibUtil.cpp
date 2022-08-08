
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

#include <sstream>
using namespace std;


#include "LibUtil.h"

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/25/06                      
 *
 * Purpose:             The class contains the general methods used by the 
 *                      library classes.
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */

LibUtil::LibUtil()
{ 
}

LibUtil::~LibUtil()
{
}

string LibUtil::getStringValue(int value)
{
    stringstream ss;
    string str;
    ss << value;
    ss >> str;
    return str;
}

string LibUtil::getStringValue(unsigned int value)
{
    stringstream ss;
    string str;
    ss << value;
    ss >> str;
    return str;
}

string LibUtil::getStringValue(long value)
{
    stringstream ss;
    string str;
    ss << value;
    ss >> str;
    return str;
}

string LibUtil::getStringValue(float value)
{
    stringstream ss;
    string str;
    ss << value;
    ss >> str;
    return str;
}

int LibUtil::getIntValue(char* str)
{
    if (str == NULL)
        return 0;
    int value = 0;
    stringstream ss;
    ss << str;
    ss >> value;
    return value;
}

double LibUtil::getDoubleValue(char* str)
{
    if (str == NULL)
        return 0;
    double value = 0;
    stringstream ss;
    ss << str;
    ss >> value;
    return value;
}
