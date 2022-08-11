
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

#include <stdio.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

#include "TestUtil.h"

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      6/15/06                      
 *
 * Purpose:             The utility class for performance testing programs
 *                      properites
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
  
///////////////////////////////////////////////////////////////////////////////
//Begin Env.cpp
///////////////////////////////////////////////////////////////////////////////

TestUtil::TestUtil()
{
  dStartUserTime   = 0.0;
  dStartSystemTime = 0.0;
  dEndUserTime     = 0.0;
  dEndSystemTime   = 0.0;
  who = RUSAGE_SELF;
}

TestUtil::~TestUtil()
{
}

void TestUtil::startTimer(struct timeval* timeval_start)
{
    gettimeofday(timeval_start,NULL);
}

double TestUtil::endTimer(struct timeval start)
{
    struct timeval timeval_stop,timeval_diff;

    /*end timing*/
    gettimeofday(&timeval_stop,NULL);
    /* Calculate the elapsed gettimeofday time */
    timeval_diff.tv_usec=timeval_stop.tv_usec-start.tv_usec;
    timeval_diff.tv_sec=timeval_stop.tv_sec-start.tv_sec;
    if(timeval_diff.tv_usec<0) {
        timeval_diff.tv_usec+=1000000;
        timeval_diff.tv_sec--;
    } /* end if */
    return (double)timeval_diff.tv_sec+((double)timeval_diff.tv_usec/(double)1000000.0);
}

double TestUtil::random(long int limit)
{
    int seed;
    /* random value in range [0,1) */ 
    double r; 

    /* choose a seed value */ 
    seed = 10000;
    /* initialize random number generator*/ 
    srand(seed); 
    r = ((double)rand() / ((double)(RAND_MAX)+(double)(1)) ); 
                      
    return (r * limit); 

}

void TestUtil::startUsageTimer()
{
  int ret;
  
  if((ret = getrusage(who, &usage)) !=0)
    perror("getrusage failed");
  
  dStartUserTime = (double) usage.ru_utime.tv_sec
    + 1.e-6 * (double) usage.ru_utime.tv_usec;
  dStartSystemTime = (double) usage.ru_stime.tv_sec
    + 1.e-6 * (double) usage.ru_stime.tv_usec;
#ifdef DEBUG
  cout << "Start User:" << dStartUserTime << endl;
  cout << "Start Sys:" << dStartSystemTime <<endl;
#endif  
}

void TestUtil::endUsageTimer()
{
  int ret;
  
  if((ret = getrusage(who, &usage)) !=0)
    perror("getrusage failed");
  
  dEndUserTime = (double) usage.ru_utime.tv_sec
    + 1.e-6 * (double) usage.ru_utime.tv_usec;
  dEndSystemTime = (double) usage.ru_stime.tv_sec
    + 1.e-6 * (double) usage.ru_stime.tv_usec;
#ifdef DEBUG  
  cout << "End User:" << dEndUserTime << endl;
  cout << "End Sys:" << dEndSystemTime <<endl;
#endif  
}

double TestUtil::getUserTime()
{
  double diff = 0;
#ifdef DEBUG    
  cout << "Start User:" << dStartUserTime << endl;
  cout << "End User:" << dEndUserTime << endl;
#endif
  diff = dEndUserTime - dStartUserTime;
  return diff;
}
double TestUtil::getSystemTime()
{
  double diff = 0;
#ifdef DEBUG      
  cout << "Start System:" << dStartSystemTime << endl;
  cout << "End System:" << dEndSystemTime << endl;
#endif  
  diff = dEndSystemTime - dStartSystemTime;
  return diff;
}



///////////////////////////////////////////////////////////////////////////////
//End TestUtil.cpp
///////////////////////////////////////////////////////////////////////////////
