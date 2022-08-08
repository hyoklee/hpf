#!/bin/sh
###############################################################################
#
# This is a general-purporse backend script for HDF5 Performance Framework
#
# Author:   Hyo-Kyung Lee (hyoklee@hdfgroup.org)
#
# Copyright (C) 2007 The HDF Group, Inc. All Rights Reserved.
###############################################################################

###############################################################################
# Please edit the following parameters before you submit this script into cron.
###############################################################################
# Set and export path  if necessary.
# PATH=/usr/local/bin:/usr/ucb/bin
# export PATH
# HDF5 version - either 1.8.0 or 1.6.6
VERSION="1.9"
# Set the directory for temporary files.
# DO NOT set it under HDF5_PREFIX. It should never be deleted by this script.
TEMP="/tmp/chicago_$VERSION"
# cc or gcc version command
CCV="gcc -v"
# CC or g++ version command
CPPV="g++ -v"
# HDF5 Installation Directory
HDF5_PREFIX="/home/local/hyoklee/chicago/hdf5-$VERSION"
# Configuration option for HDF5
HDF5_OPTION="--disable-shared --enable-cxx --enable-production --prefix=$HDF5_PREFIX --with-default-api-version=v16"
# Configuration option for performance framework
PERF_OPTION="--disable-shared --prefix=/home/local/hyoklee/chicago --with-hdf5=$HDF5_PREFIX --with-mysqlclient=/hdfdap/mysql"
# Path to performance framework source
PERF_SRC="/home/local/hyoklee/src/chicago/trunk/hdf5perflib/"
# Path to php command
# e.g. PHP=/opt/csw/bin/php
PHP="php"
# Path to performance framework php source 
PHP_SRC="/home/local/hyoklee/src/chicago/trunk/hdf5perfphp/hdf/"
# Path to make command 
# e.g. MAKE=/usr/ccs/bin/make
MAKE="gmake"

# This script will run tests 3 times to record the best performance.
# Please set the interval in seconds between trials.
# 600 seconds = 10 minutes
INTERVAL="600"

SVN_URL="http://svn.hdfgroup.uiuc.edu/hdf5/trunk"

###############################################################################
# Please DO NOT edit lines below.
###############################################################################
# First make sure that $TEMP directory exists.
if [ -e  $TEMP ]; then
  echo "Temp directory is $TEMP"
else
  mkdir $TEMP
fi

# Path to HDF5 svn source directory
HDF5_SRC="$HDF5_PREFIX/svn"

# Move yesterday's environment data.
if [ -e $TEMP/uname.txt ]; then
    mv $TEMP/uname.txt   $TEMP/uname.old.txt
fi

if [ -e $TEMP/cc_version.txt ]; then
    mv $TEMP/cc_version.txt  $TEMP/cc_version.old.txt
fi

if [ -e $TEMP/cpp_version.txt ]; then
    mv $TEMP/cpp_version.txt $TEMP/cpp_version.old.txt
fi

if [ -e $TEMP/config_hdf5.txt ]; then
    mv $TEMP/config_hdf5.txt  $TEMP/config_hdf5.old.txt
fi

if [ -e $TEMP/config_perf.txt ]; then
    mv $TEMP/config_perf.txt  $TEMP/config_perf.old.txt
fi

if [ -e $TEMP/compiler_options_hdf5.txt ]; then
    mv $TEMP/compiler_options_hdf5.txt  $TEMP/compiler_options_hdf5.old.txt
fi

if [ -e $TEMP/compiler_options_perf.txt ]; then
    mv $TEMP/compiler_options_perf.txt  $TEMP/compiler_options_perf.old.txt
fi


# Get today's environment data.
uname -a  >& $TEMP/uname.txt
$CCV  >& $TEMP/cc_version.txt
$CPPV >& $TEMP/cpp_version.txt
echo $HDF5_OPTION > $TEMP/config_hdf5.txt
echo $PERF_OPTION > $TEMP/config_perf.txt

# Clean up existing HDF5 library
if [ -e  $HDF5_PREFIX ]; then
  rm -rf $HDF5_PREFIX/*
else
  mkdir $HDF5_PREFIX
fi
cd $HDF5_PREFIX
svn co $SVN_URL svn | grep "Checked out revision" | cut -f4 -d ' ' | cut -f1 -d '.' > $TEMP/svn.log
$PHP  $PHP_SRC/svn.php $VERSION `cat $TEMP/svn.log` >& /dev/null
rm -rf $TEMP/svn.log
cd svn
# Get HDF5 compiler option environment
./configure $HDF5_OPTION | grep -v '^checking' | grep -v '^config.status' | grep -v '^configure:' | grep -v '^appending configuration' | grep -v 'Configured on'  >  $TEMP/compiler_options_hdf5.txt
$MAKE
$MAKE install
cd $PERF_SRC
./configure $PERF_OPTION
# Get performance compiler option environment
grep '^CC =' Makefile >>  $TEMP/compiler_options_perf.txt
grep '^CPP =' Makefile >>  $TEMP/compiler_options_perf.txt
grep 'FLAGS =' Makefile >>  $TEMP/compiler_options_perf.txt
$MAKE 
x=0
while [ $x -lt 3 ]
do
  $MAKE check
  x=`expr $x + 1`
  sleep $INTERVAL
done
$MAKE distclean
$PHP  $PHP_SRC/checker_best.php $VERSION >& /dev/null 


cd $HDF5_SRC

OUTPUT=$TEMP/diff.out
y=0

# Check today's environments against yesterday's environments.
if [ -e $TEMP/uname.old.txt ]; then
    diff -u $TEMP/uname.txt $TEMP/uname.old.txt > $OUTPUT
    if [ -s $OUTPUT ] ; then
	y=`expr $y + 1`
    fi
else
    y=`expr $y + 1`
fi

if [ -e $TEMP/cc_version.old.txt ]; then
    diff -u $TEMP/cc_version.txt $TEMP/cc_version.old.txt > $OUTPUT
    if [ -s $OUTPUT ] ; then
	y=`expr $y + 1`
    fi
else
    y=`expr $y + 1`
fi

if [ -e $TEMP/cpp_version.old.txt ]; then
    diff -u $TEMP/cpp_version.txt $TEMP/cpp_version.old.txt > $OUTPUT
    if [ -s $OUTPUT ] ; then
	y=`expr $y + 1`
    fi
else
    y=`expr $y + 1`
fi

if [ -e $TEMP/config_hdf5.old.txt ]; then
    diff -u $TEMP/config_hdf5.txt $TEMP/config_hdf5.old.txt > $OUTPUT
    if [ -s $OUTPUT ] ; then
	y=`expr $y + 1`
    fi
else
    y=`expr $y + 1`
fi


if [ -e $TEMP/config_perf.old.txt ]; then
    diff -u $TEMP/config_perf.txt $TEMP/config_perf.old.txt > $OUTPUT
    if [ -s $OUTPUT ] ; then
	y=`expr $y + 1`
    fi
else
    y=`expr $y + 1`
fi

if [ -e $TEMP/compiler_options_hdf5.old.txt ]; then
    diff -u $TEMP/compiler_options_hdf5.txt $TEMP/compiler_options_hdf5.old.txt > $OUTPUT
    if [ -s $OUTPUT ] ; then
	y=`expr $y + 1`
    fi
else
    y=`expr $y + 1`
fi


if [ -e $TEMP/compiler_options_perf.old.txt ]; then
    diff -u $TEMP/compiler_options_perf.txt $TEMP/compiler_options_perf.old.txt > $OUTPUT
    if [ -s $OUTPUT ] ; then
	y=`expr $y + 1`
    fi
else
    y=`expr $y + 1`
fi

# Record the new environment.
if [ $y -gt 0 ]; then
    echo -n $y
    echo " system environment settings are changed." 
    $PHP $PHP_SRC/environment.php $VERSION $TEMP/uname.txt $TEMP/cc_version.txt $TEMP/cpp_version.txt $TEMP/config_hdf5.txt $TEMP/config_perf.txt $TEMP/compiler_options_hdf5.txt $TEMP/compiler_options_perf.txt >& /dev/null
fi
