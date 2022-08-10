#
# Copyright by the Board of Trustees of the University of Illinois.
# All rights reserved.
#
# This file is part of HDF5.  The full HDF5 copyright notice, including
# terms governing use, modification, and redistribution, is contained in
# the files COPYING and Copyright.html.  COPYING can be found at the root
# of the source code distribution tree; Copyright.html can be found at the
# root level of an installed copy of the electronic HDF5 document set and
# is linked from the top-level documents page.  It can also be found at
# http://hdf.ncsa.uiuc.edu/HDF5/doc/Copyright.html.  If you do not have
# access to either file, you may request a copy from hdfhelp@ncsa.uiuc.edu.
##
## Makefile.am
## Run automake to generate a Makefile.in from this file.
##

include $(top_srcdir)/config/commence.am

INCLUDES=-I$(top_srcdir)/include/

LDADD=$(LIBPERF)
CXXFLAGS +=-std=c++11
CXX=/usr/hdf/bin/gcc520/g++

# create_SOURCES=create.cpp
many_dsets_SOURCES=many_dsets.cpp

# check_PROGRAMS=create many_dsets
check_PROGRAMS=many_dsets

TESTS=$(check_PROGRAMS)




