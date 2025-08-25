#!/usr/bin/bash

###############################################################################
#
# This is a general-purporse backend script for HDF5 Performance Framework
#
# Author:   Hyo-Kyung Lee (hyoklee@hdfgroup.org)
#
# Copyright (C) 2009-2025 The HDF Group. All Rights Reserved.
###############################################################################

###############################################################################
# Please edit the following parameters before you submit this script into cron.
###############################################################################
. /etc/bashrc
module load CMake
# module load MPICH/3.3.2-GCC-10.2.0
# export PKG_CONFIG_PATH=/mnt/hdf/packages/mpifileutils/install/pkgconfig
# export MFU_ROOT=/mnt/hdf/packages/mpifileutils/install
# export LD_LIBRARY_PATH=/mnt/hdf/packages/mpifileutils/install/lib
# export NPROCS=4
# export PATH=$PATH:/usr/hdf/bin
export PATH=/usr/hdf/bin/gcc520/:$PATH
export CC=/usr/hdf/bin/gcc520/gcc
export CXX=/usr/hdf/bin/gcc520/g++


# HDF5 version
VERSION="2.0"

# Set the directory for temporary files.
# DO NOT set it under HDF5_PREFIX. It should never be deleted by this script.
TEMP="/scr/hyoklee/tmp/chicago_$VERSION"
# CCV="gcc -v"
# CPPV="g++ -v"
CCV="/usr/hdf/bin/gcc520/gcc -v"
CPPV="/usr/hdf/bin/gcc520/g++ -v"


# HDF5 Installation Directory
HDF5_PREFIX="/scr/hyoklee/chicago/hdf5-$VERSION"
# Configuration option for HDF5
HDF5_OPTION="-DHDF5_BUILD_CPP_LIB:BOOL=True -DBUILD_SHARED_LIBS:BOOL=OFF -DCMAKE_INSTALL_PREFIX=$HDF5_PREFIX -DHDF5_DEFAULT_API_VERSION:STRING=v16"

# Configuration option for performance framework
export CXXFLAGS=-std=c++11
PERF_OPTION="CC=$HDF5_PREFIX/bin/h5cc CXX=$HDF5_PREFIX/bin/h5c++ --disable-shared --prefix=/scr/hyoklee/chicago --with-hdf5=$HDF5_PREFIX --with-mysqlclient=/scr/hyoklee/mysql"
# Path to performance framework source
PERF_SRC="/scr/hyoklee/hdf5perf/trunk/hdf5perflib/"
# Path to php command
# e.g. PHP=/opt/csw/bin/php
PHP="php"
# Path to performance framework php source 
PHP_SRC="/scr/hyoklee/hdf5perf/trunk/hdf5perfphp/hdf/"
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
git clone --quiet $GIT_URL -b develop svn
cd svn
# git checkout 41a7ef8e1e8e0dc83141f7836b05879582e0674c
# git checkout 0e3f1010f1358be39edffb113418b175feba97ac
git rev-parse HEAD > $TEMP/svn.log
$PHP  $PHP_SRC/svn.php $VERSION `cat $TEMP/svn.log` # >& /dev/null
rm -rf $TEMP/svn.log
export PATH=/scr/hyoklee/bin/:$PATH
mkdir build
cd build
# Temporary fix test for bad performance
cp /scr/hyoklee/chicago/H5Shyper.c /scr/hyoklee/chicago/hdf5-2.0/svn/src/
# /mnt/wrk/hdfadmin/devops/spack/spack/opt/spack/linux-centos7-haswell/gcc-10.2.0/cmake-3.22.1-q2wxk3n4lewrhayp7f2dru5lpg3dmc4x/bin/cmake $HDF5_OPTION .. |  grep 'compiler' >  $TEMP/compiler_options_hdf5.txt
cmake $HDF5_OPTION .. |  grep 'compiler' >  $TEMP/compiler_options_hdf5.txt
$MAKE -j
$MAKE -j install
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
