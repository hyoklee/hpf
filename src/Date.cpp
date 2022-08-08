
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

#include "Date.h"
#include "LibUtil.h"

#include <iostream>

/*-------------------------------------------------------------------------
 *
 * Created:             Arash Termehchy
 *                      7/20/06                      
 *
 * Purpose:             A utility class to implement date information
 *
 * Modifications:
 *
 *-------------------------------------------------------------------------
 */
///////////////////////////////////////////////////////////////////////////////
//Begin Date.cpp
///////////////////////////////////////////////////////////////////////////////

Date::Date(unsigned int year, unsigned int month, unsigned int day,
            unsigned int hour, unsigned int minute, unsigned int second,
            bool neg)
{
    setYear(year);
    setMonth(month);
    setDay(day);
    setHour(hour);
    setMinute(minute);
    setSecond(second);
    setNegative(neg);
}

Date::Date(Date& date)
{
    setYear(date.getYear());
    setMonth(date.getMonth());
    setDay(date.getDay());
    setHour(date.getHour());
    setMinute(date.getMinute());
    setSecond(date.getSecond());
    setNegative(date.isNegative());
}

Date::~Date()
{
}

unsigned int Date::getYear()
{
    return year;
}

void Date::setYear(unsigned int year)
{
    this->year = year;
}

unsigned int Date::getMonth()
{
    return month;
}

void Date::setMonth(unsigned int month)
{
    if (month < 1 || month > 12)
        throw "Invalid month number";
    this->month = month;
}

unsigned int Date::getDay()
{
    return day;
}

void Date::setDay(unsigned int day)
{
    if (day < 1 || day > 31)
        throw "Invalid day number";
    this->day = day;
}

unsigned int Date::getHour()
{
    return hour;
}

void Date::setHour(unsigned int hour)
{
    if (hour > 23)
        throw "Invalid hour number";
    this->hour = hour;
}

unsigned int Date::getMinute()
{
    return minute;
}

void Date::setMinute(unsigned int minute)
{
    if (minute >59 )
        throw "Invalid minute number";
    this->minute = minute;
}

unsigned int Date::getSecond()
{
    return second;
}

void Date::setSecond(unsigned int second)
{
    if (second >59 )
        throw "Invalid second number";
    this->second = second;
    
}

bool Date::isNegative()
{
    return neg;
}

void Date::setNegative(bool neg)
{
    this->neg = neg;
}

Date& Date::operator=(const Date& date)
{
    setYear(date.year);
    setMonth(date.month);
    setDay(date.day);
    setHour(date.hour);
    setMinute(date.minute);
    setSecond(date.second);
    setNegative(date.neg);
    return *this;
}

const char* Date::toString()
{
    string* str = new string;
    *str += LibUtil::getStringValue(month);
    *str += "/";
    *str += LibUtil::getStringValue(day);
    *str += "/";
    *str += LibUtil::getStringValue(year);
    *str += "--";
    *str += LibUtil::getStringValue(hour);
    *str += ":";
    *str += LibUtil::getStringValue(minute);
    *str += ":";
    *str += LibUtil::getStringValue(second);
    return str->c_str();
}


///////////////////////////////////////////////////////////////////////////////
//End Date.cpp
///////////////////////////////////////////////////////////////////////////////
