#!/bin/sh
###############################################################################
#
# This is a general-purporse backend script for HDF5 Performance Framework
#
# Author:   Hyo-Kyung Lee (hyoklee@hdfgroup.org)
#
# Copyright (C) 2009-2023 The HDF Group, Inc. All Rights Reserved.
###############################################################################

###############################################################################
# Please edit the following parameters before you submit this script into cron.
###############################################################################
# Set and export path  if necessary.
# PATH=/usr/local/bin:/usr/ucb/bin
export PATH=/usr/hdf/bin/gcc520/:$PATH
# HDF5 version
VERSION="1.15"
export CC=/usr/hdf/bin/gcc520/gcc
export CXX=/usr/hdf/bin/gcc520/g++

# Set the directory for temporary files.
# DO NOT set it under HDF5_PREFIX. It should never be deleted by this script.
TEMP="/mnt/hdf/hyoklee/tmp/chicago_$VERSION"
# cc or gcc version command
CCV="/usr/hdf/bin/gcc520/gcc -v"
# CC or g++ version command
CPPV="/usr/hdf/bin/gcc520/g++ -v"
# CPPV="g++ -v"
# HDF5 Installation Directory
HDF5_PREFIX="/mnt/hdf/hyoklee/chicago/hdf5-$VERSION"
# Configuration option for HDF5
HDF5_OPTION="--disable-shared --enable-cxx --enable-build-mode=production --prefix=$HDF5_PREFIX --with-default-api-version=v16"
# Configuration option for performance framework
export CXXFLAGS=-std=c++11
PERF_OPTION="CC=$HDF5_PREFIX/bin/h5cc CXX=$HDF5_PREFIX/bin/h5c++ --disable-shared --prefix=/mnt/hdf/hyoklee/chicago --with-hdf5=$HDF5_PREFIX --with-mysqlclient=/mnt/hdf/hyoklee/mysql"
# Path to performance framework source
PERF_SRC="/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perflib/"
# Path to php command
# e.g. PHP=/opt/csw/bin/php
PHP="php"
# Path to performance framework php source 
PHP_SRC="/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perfphp/hdf/"
# Path to make command 
# e.g. MAKE=/usr/ccs/bin/make
MAKE="make"

# This script will run tests 3 times to record the best performance.
# Please set the interval in seconds between trials.
# 600 seconds = 10 minutes
INTERVAL="600"
GIT_URL="https://github.com/HDFGroup/hdf5.git"
###############################################################################
# Please DO NOT edit lines below.
###############################################################################
if [ -e  $PERF_SRC/results.xml ]; then
  rm -f $PERF_SRC/results.xml
fi

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
/mnt/scr1/hyoklee/bin/git clone --quiet $GIT_URL -b develop svn
cd svn
git rev-parse HEAD > $TEMP/svn.log
$PHP  $PHP_SRC/svn.php $VERSION `cat $TEMP/svn.log` # >& /dev/null
rm -rf $TEMP/svn.log
# export HDF5_AUTOCONF=/mnt/hdf/packages/AUTOTOOLS/autoconf/2.69/i386/bin/autoconf
export PATH=/mnt/hdf/packages/AUTOTOOLS/autoconf/2.69/i386/bin/:$PATH
which autoconf
# export HDF5_AUTOMAKE=/mnt/hdf/packages/AUTOTOOLS/automake/1.15/i386/bin/automake-1.15
export PATH=/mnt/hdf/packages/AUTOTOOLS/automake/1.15/i386/bin/:$PATH
which automake
# export HDF5_AUTOHEADER=/mnt/hdf/packages/AUTOTOOLS/autoconf/2.69/i386/bin/autoheader
# export HDF5_ACLOCAL=/mnt/hdf/packages/AUTOTOOLS/automake/1.15/i386/bin/aclocal-1.15
which aclocal
#export HDF5_LIBTOOL=/mnt/hdf/packages/AUTOTOOLS/libtool/2.4.5/i386/bin/libtool
export PATH=/mnt/hdf/packages/AUTOTOOLS/libtool/2.4.5/i386/bin:$PATH
which libtool
# export HDF5_M4=/mnt/hdf/packages/AUTOTOOLS/m4/1.4.17/i386/bin/m4
export PATH=/mnt/hdf/packages/AUTOTOOLS/m4/1.4.17/i386/bin:$PATH
# export HDF5_BISON=/usr/hdf/bin/bison
export PATH=$PATH:/usr/hdf/bin
# export HDF5_FLEX=/usr/hdf/bin/flex
which libtoolize
libtoolize
./autogen.sh
# Get HDF5 compiler option environment
./configure $HDF5_OPTION | grep -v '^checking' | grep -v '^config.status' | grep -v '^configure:' | grep -v '^appending configuration' | grep -v 'Configured on' >  $TEMP/compiler_options_hdf5.txt
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

# Record the test results.
$PHP $PHP_SRC/TestInstance.php $PERF_SRC/results.xml

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
    $PHP $PHP_SRC/environment.php $VERSION $TEMP/uname.txt $TEMP/cc_version.txt $TEMP/cpp_version.txt $TEMP/config_hdf5.txt $TEMP/config_perf.txt $TEMP/compiler_options_hdf5.txt $TEMP/compiler_options_perf.txt #>& /dev/null
fi

# Save file
DATE=`date +%Y%m%d`
mv  $PERF_SRC/results.xml $PERF_SRC/results.$VERSION.$DATE.xml
