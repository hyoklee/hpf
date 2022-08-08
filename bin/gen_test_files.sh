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
TEMP="/scr/hyoklee/tmp/chicago_$VERSION"
# cc or gcc version command
CCV="gcc -v"
# CC or g++ version command
CPPV="g++ -v"
# HDF5 Installation Directory
HDF5_PREFIX="/scr/hyoklee/chicago/hdf5-$VERSION"
# Configuration option for HDF5
HDF5_OPTION="--disable-shared --enable-cxx --enable-production --prefix=$HDF5_PREFIX --with-default-api-version=v16"
# Configuration option for performance framework
PERF_OPTION="CC=$HDF5_PREFIX/bin/h5cc --disable-shared --prefix=/scr/hyoklee/chicago --with-hdf5=$HDF5_PREFIX --with-mysqlclient=/scr/hyoklee/mysql"
# Path to performance framework source
PERF_SRC="/scr/hyoklee/chicago/trunk/hdf5perflib/"
# Path to php command
# e.g. PHP=/opt/csw/bin/php
PHP="php"
# Path to performance framework php source 
PHP_SRC="/scr/hyoklee/chicago/trunk/hdf5perfphp/hdf/"
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

# Clean up existing HDF5 library
if [ -e  $HDF5_PREFIX ]; then
  rm -rf $HDF5_PREFIX/*
else
  mkdir $HDF5_PREFIX
fi
cd $HDF5_PREFIX
svn co $SVN_URL svn 
cd svn
# Get HDF5 compiler option environment
./configure $HDF5_OPTION 
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
$MAKE check
