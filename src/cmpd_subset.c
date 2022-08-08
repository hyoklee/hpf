/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Copyright by The HDF Group.                                               *
 * Copyright by the Board of Trustees of the University of Illinois.         *
 * All rights reserved.                                                      *
 *                                                                           *
 * This file is part of HDF5.  The full HDF5 copyright notice, including     *
 * terms governing use, modification, and redistribution, is contained in    *
 * the files COPYING and Copyright.html.  COPYING can be found at the root   *
 * of the source code distribution tree; Copyright.html can be found at the  *
 * root level of an installed copy of the electronic HDF5 document set and   *
 * is linked from the top-level documents page.  It can also be found at     *
 * http://hdfgroup.org/HDF5/doc/Copyright.html.  If you do not have          *
 * access to either file, you may request a copy from help@hdfgroup.org.     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
 * This program tests the I/O optimization of compound data type subsetting 
 * for the Chicago company.  For example:
 *                  struct source {            struct destination {
 *                      TYPE1 A;      -->          TYPE1 A;
 *                      TYPE2 B;      -->          TYPE2 B;
 *                      TYPE3 C;      -->          TYPE3 C;
 *                  };                             TYPE4 D;
 *                                                 TYPE5 E;
 *                                             };
 * It records the time to read 1000000 compound elements and save the time
 * into the database for display.
 *
 * Programmer:  Raymond Lu <slu@hdfgroup.org>
 *              27 July 2007
 */

#define FileName "results.xml"

#include "hdf5.h"
#include <assert.h>
#include <sys/time.h>
#include <time.h>
#include <math.h>
#include <float.h>
#include "CAPIShell.h"
// #include "platform.h"
#include "db.h"

const char *FILENAME[] = {
    "src_subset.h5",
    "dst_subset.h5",
    NULL
};

const char *DSET_NAME[] = {
    "contig_src_subset",
    "chunk_src_subset",
    "contig_dst_subset",
    "chunk_dst_subset",
    NULL
};

/* The first dataset */
typedef struct s1_t {
    unsigned int a;
    unsigned int b;
    unsigned int c[4];
    unsigned int d;
    unsigned int e;
} s1_t;

/* The second dataset (same as first) */
typedef s1_t s2_t;

/* The third dataset (reversed fields of s1) */
typedef struct s3_t {
    unsigned int e;
    unsigned int d;
    unsigned int c[4];
    unsigned int b;
    unsigned int a;
} s3_t;

/* The fourth dataset (a subset of s1) */
typedef struct s4_t {
    unsigned int b;
    unsigned int d;
} s4_t;

/* The fifth dataset (a superset of s1) */
typedef struct s5_t {
    unsigned int pre;
    unsigned int a;
    unsigned int b;
    unsigned int mid1;
    unsigned int c[4];
    unsigned int mid2;
    unsigned int d;
    unsigned int e;
    unsigned int post;
} s5_t;

/* The sixth dataset (a superset of s1).  This is for
 * testing the optimization for the Chicago company. */
typedef struct s6_t {
    unsigned int a;
    unsigned int b;
    unsigned int c[4];
    unsigned int d;
    unsigned int e;
    unsigned int pre;
    unsigned int mid1;
    unsigned int mid2;
    unsigned int post;
} s6_t;

/* Structures for testing the optimization for the Chicago company. */
typedef struct {
    int a, b, c[8], d, e;
    float f, g, h[16], i, j;
    double k, l, m, n;
} stype1;
typedef struct {
    int a, b, c[8], d, e;
    float f, g, h[16], i, j;
    double k, l, m, n;
    long o, p, q;
} stype2;
typedef struct {
    int a, b, c[8], d, e;
} stype3;
typedef struct {
    int a, b, c[8], d, e;
    float f, g, h[16], i, j;
    double k, l, m, n;
    long o, p, q;
#ifdef WIN32
    __int64 r, s, t;
#else
  long long r, s, t; /* "long_long" is replaced with "long long" since it's not declared in H5public.h for HDF5 1.6 */
#endif
  
} stype4;

#define FAIL    -1
#define SUCCEED 1
#define TRUE    1
#define FALSE   0

/*
 * The methods to compare the equality of floating-point values:
 *       XXX_ABS_EQUAL - check if the difference is smaller than the
 *       Epsilon value.  The Epsilon values, FLT_EPSILON, DBL_EPSILON,
 *       and LDBL_EPSILON, are defined by compiler in float.h.
 */
#define FLT_ABS_EQUAL(X,Y)      ((float)fabs(X-Y)<FLT_EPSILON)
#define DBL_ABS_EQUAL(X,Y)      (fabs(X-Y)<DBL_EPSILON)
#define LDBL_ABS_EQUAL(X,Y)     (fabsl(X-Y)<LDBL_EPSILON)

/*
 * The name of the test is printed by saying TESTING("something") which will
 * result in the string `Testing something' being flushed to standard output.
 * If a test passes, fails, or is skipped then the PASSED(), H5_FAILED(), or
 * SKIPPED() macro should be called.  After H5_FAILED() or SKIPPED() the caller
 * should print additional information to stdout indented by at least four
 * spaces.  If the h5_errors() is used for automatic error handling then
 * the H5_FAILED() macro is invoked automatically when an API function fails.
 */
#define AT()            printf ("        at %s:%d in %s()...\n",              \
                                __FILE__, __LINE__, __FUNCTION__);
#define TESTING(WHAT)   {printf("Testing %-62s",WHAT); fflush(stdout);}
#define PASSED()        {puts(" PASSED");fflush(stdout);}
#define H5_FAILED()     {puts("*FAILED*");fflush(stdout);}
#define H5_WARNING()    {puts("*WARNING*");fflush(stdout);}
#define SKIPPED()       {puts(" -SKIP-");fflush(stdout);}
#define TEST_ERROR      {H5_FAILED(); AT(); goto error;}

#if 1
#  define NX	1000u
#  define NY	1000u
#else
#  define NX	12u
#  define NY    9u
#endif


/*-------------------------------------------------------------------------
 * Function:	initialize_stype1
 *
 * Purpose:	Initialize data buffer.
 *
 * Return:	void
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static void
initialize_stype1(unsigned char *buf, const size_t num)
{
    int	  i, j;
    stype1 *s_ptr;

    for (i=0; i<(int)num; i++) {
	s_ptr = (stype1*)buf + i;
	s_ptr->a    = i*8+0;
	s_ptr->b    = i*8+1;
        for(j=0; j<8; j++)
	    s_ptr->c[j] = i*8+j;
	s_ptr->d    = i*8+6;
	s_ptr->e    = i*8+7;

        s_ptr->f    = i*2/3;
        s_ptr->g    = i*2/3+1;
        for(j=0; j<16; j++)
	    s_ptr->h[j] = i*j/5+j;
        s_ptr->i    = i*2/3+2;
        s_ptr->j    = i*2/3+3;

        s_ptr->k    = i/7+1;
        s_ptr->l    = i/7+2;
        s_ptr->m    = i/7+3;
        s_ptr->n    = i/7+4;
    }
}


/*-------------------------------------------------------------------------
 * Function:	initialize_stype2
 *
 * Purpose:	Initialize data buffer.
 *
 * Return:	void
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static void
initialize_stype2(unsigned char *buf, const size_t num)
{
    size_t i, j;
    stype2 *s_ptr;

    for (i=0; i<num; i++) {
	s_ptr = (stype2*)buf + i;
	s_ptr->a    = i*8+0;
	s_ptr->b    = i*8+1;
        for(j=0; j<8; j++)
	    s_ptr->c[j] = i*8+j;
	s_ptr->d    = i*8+6;
	s_ptr->e    = i*8+7;

        s_ptr->f    = i*2/3;
        s_ptr->g    = i*2/3+1;
        for(j=0; j<16; j++)
	    s_ptr->h[j] = i*j/5+j;
        s_ptr->i    = i*2/3+2;
        s_ptr->j    = i*2/3+3;

        s_ptr->k    = i/7+1;
        s_ptr->l    = i/7+2;
        s_ptr->m    = i/7+3;
        s_ptr->n    = i/7+4;

        s_ptr->o    = i*3+0;
        s_ptr->p    = i*3+1;
        s_ptr->q    = i*3+2;
    }
}


/*-------------------------------------------------------------------------
 * Function:	initialize_stype3
 *
 * Purpose:	Initialize data buffer.
 *
 * Return:	Success:	
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static void
initialize_stype3(unsigned char *buf, const size_t num)
{
    int	  i, j;
    stype3 *s_ptr;

    for (i=0; i<(int)num; i++) {
	s_ptr = (stype3*)buf + i;
	s_ptr->a    = i*8+0;
	s_ptr->b    = i*8+1;
        for(j=0; j<8; j++)
	    s_ptr->c[j] = i*8+j;
	s_ptr->d    = i*8+6;
	s_ptr->e    = i*8+7;
    }
}


/*-------------------------------------------------------------------------
 * Function:	initialize_stype4
 *
 * Purpose:	Initialize data buffer.
 *
 * Return:	void
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static void
initialize_stype4(unsigned char *buf, const size_t num)
{
    size_t i, j;
    stype4 *s_ptr;

    for (i=0; i<num; i++) {
	s_ptr = (stype4*)buf + i;
	s_ptr->a    = i*8+0;
	s_ptr->b    = i*8+1;
        for(j=0; j<8; j++)
	    s_ptr->c[j] = i*8+j;
	s_ptr->d    = i*8+6;
	s_ptr->e    = i*8+7;

        s_ptr->f    = i*2/3;
        s_ptr->g    = i*2/3+1;
        for(j=0; j<16; j++)
	    s_ptr->h[j] = i*j/5+j;
        s_ptr->i    = i*2/3+2;
        s_ptr->j    = i*2/3+3;

        s_ptr->k    = i/7+1;
        s_ptr->l    = i/7+2;
        s_ptr->m    = i/7+3;
        s_ptr->n    = i/7+4;

        s_ptr->o    = i*3+0;
        s_ptr->p    = i*3+1;
        s_ptr->q    = i*3+2;

        s_ptr->r    = i*5+1;
        s_ptr->s    = i*5+2;
        s_ptr->t    = i*5+3;
    }
}


/*-------------------------------------------------------------------------
 * Function:	create_stype1
 *
 * Purpose:	Create HDF5 compound datatype for stype1.
 *
 * Return:	Success:        datatype ID
 *
 *              Failure:        negative	
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static hid_t
create_stype1(void)
{
    hid_t   array_dt1, array_dt2, tid;
    const hsize_t	eight = 8, sixteen = 16;

    /* Build hdf5 datatypes */
    if((array_dt1 = H5Tarray_create(H5T_NATIVE_INT,1, &eight, NULL))<0)
        goto error;
    if((array_dt2 = H5Tarray_create(H5T_NATIVE_FLOAT,1, &sixteen, NULL))<0)
        goto error;

    if ((tid=H5Tcreate(H5T_COMPOUND, sizeof(stype1)))<0 ||
            H5Tinsert(tid, "a", HOFFSET(stype1, a), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "b", HOFFSET(stype1, b), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "c", HOFFSET(stype1, c), array_dt1)<0 ||
            H5Tinsert(tid, "d", HOFFSET(stype1, d), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "e", HOFFSET(stype1, e), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "f", HOFFSET(stype1, f), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "g", HOFFSET(stype1, g), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "h", HOFFSET(stype1, h), array_dt2)<0 ||
            H5Tinsert(tid, "i", HOFFSET(stype1, i), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "j", HOFFSET(stype1, j), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "k", HOFFSET(stype1, k), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "l", HOFFSET(stype1, l), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "m", HOFFSET(stype1, m), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "n", HOFFSET(stype1, n), H5T_NATIVE_DOUBLE)<0) 
        goto error;

    if(H5Tclose(array_dt1)<0)
        goto error;
    if(H5Tclose(array_dt2)<0)
        goto error;

    return tid;

error:
    return FAIL;
}


/*-------------------------------------------------------------------------
 * Function:	create_stype2
 *
 * Purpose:	Create HDF5 compound datatype for stype2.
 *
 * Return:	Success:        datatype ID
 *
 *              Failure:        negative	
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static hid_t
create_stype2(void)
{
    hid_t   array_dt1, array_dt2, tid;
    const hsize_t	eight = 8, sixteen = 16;

    /* Build hdf5 datatypes */
    if((array_dt1 = H5Tarray_create(H5T_NATIVE_INT,1, &eight, NULL))<0)
        goto error;
    if((array_dt2 = H5Tarray_create(H5T_NATIVE_FLOAT,1, &sixteen, NULL))<0)
        goto error;

    if ((tid=H5Tcreate(H5T_COMPOUND, sizeof(stype2)))<0 ||
            H5Tinsert(tid, "a", HOFFSET(stype2, a), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "b", HOFFSET(stype2, b), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "c", HOFFSET(stype2, c), array_dt1)<0 ||
            H5Tinsert(tid, "d", HOFFSET(stype2, d), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "e", HOFFSET(stype2, e), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "f", HOFFSET(stype2, f), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "g", HOFFSET(stype2, g), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "h", HOFFSET(stype2, h), array_dt2)<0 ||
            H5Tinsert(tid, "i", HOFFSET(stype2, i), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "j", HOFFSET(stype2, j), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "k", HOFFSET(stype2, k), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "l", HOFFSET(stype2, l), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "m", HOFFSET(stype2, m), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "n", HOFFSET(stype2, n), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "o", HOFFSET(stype2, o), H5T_NATIVE_LONG)<0 ||
            H5Tinsert(tid, "p", HOFFSET(stype2, p), H5T_NATIVE_LONG)<0 ||
            H5Tinsert(tid, "q", HOFFSET(stype2, q), H5T_NATIVE_LONG)<0)
        goto error;

    if(H5Tclose(array_dt1)<0)
        goto error;
    if(H5Tclose(array_dt2)<0)
        goto error;

    return tid;

error:
    return FAIL;
}


/*-------------------------------------------------------------------------
 * Function:	create_stype3
 *
 * Purpose:	Create HDF5 compound datatype for stype3.
 *
 * Return:	Success:        datatype ID
 *
 *              Failure:        negative	
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static hid_t
create_stype3(void)
{
    hid_t   array_dt1, tid;
    const hsize_t	eight = 8;

    /* Build hdf5 datatypes */
    if((array_dt1 = H5Tarray_create(H5T_NATIVE_INT,1, &eight, NULL))<0)
        goto error;

    if ((tid=H5Tcreate(H5T_COMPOUND, sizeof(stype3)))<0 ||
            H5Tinsert(tid, "a", HOFFSET(stype3, a), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "b", HOFFSET(stype3, b), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "c", HOFFSET(stype3, c), array_dt1)<0 ||
            H5Tinsert(tid, "d", HOFFSET(stype3, d), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "e", HOFFSET(stype3, e), H5T_NATIVE_INT)<0)
        goto error;

    if(H5Tclose(array_dt1)<0)
        goto error;

    return tid;

error:
    return FAIL;
}


/*-------------------------------------------------------------------------
 * Function:	create_stype4
 *
 * Purpose:	Create HDF5 compound datatype for stype4.
 *
 * Return:	Success:        datatype ID
 *
 *              Failure:        negative	
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static hid_t
create_stype4(void)
{
    hid_t   array_dt1, array_dt2, tid;
    const hsize_t	eight = 8, sixteen = 16;

    /* Build hdf5 datatypes */
    if((array_dt1 = H5Tarray_create(H5T_NATIVE_INT,1, &eight, NULL))<0)
        goto error;
    if((array_dt2 = H5Tarray_create(H5T_NATIVE_FLOAT,1, &sixteen, NULL))<0)
        goto error;

    if ((tid=H5Tcreate(H5T_COMPOUND, sizeof(stype4)))<0 ||
            H5Tinsert(tid, "a", HOFFSET(stype4, a), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "b", HOFFSET(stype4, b), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "c", HOFFSET(stype4, c), array_dt1)<0 ||
            H5Tinsert(tid, "d", HOFFSET(stype4, d), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "e", HOFFSET(stype4, e), H5T_NATIVE_INT)<0 ||
            H5Tinsert(tid, "f", HOFFSET(stype4, f), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "g", HOFFSET(stype4, g), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "h", HOFFSET(stype4, h), array_dt2)<0 ||
            H5Tinsert(tid, "i", HOFFSET(stype4, i), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "j", HOFFSET(stype4, j), H5T_NATIVE_FLOAT)<0 ||
            H5Tinsert(tid, "k", HOFFSET(stype4, k), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "l", HOFFSET(stype4, l), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "m", HOFFSET(stype4, m), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "n", HOFFSET(stype4, n), H5T_NATIVE_DOUBLE)<0 ||
            H5Tinsert(tid, "o", HOFFSET(stype4, o), H5T_NATIVE_LONG)<0 ||
            H5Tinsert(tid, "p", HOFFSET(stype4, p), H5T_NATIVE_LONG)<0 ||
            H5Tinsert(tid, "q", HOFFSET(stype4, q), H5T_NATIVE_LONG)<0 ||
            H5Tinsert(tid, "r", HOFFSET(stype4, r), H5T_NATIVE_LLONG)<0 ||
            H5Tinsert(tid, "s", HOFFSET(stype4, s), H5T_NATIVE_LLONG)<0 ||
            H5Tinsert(tid, "t", HOFFSET(stype4, t), H5T_NATIVE_LLONG)<0)
        goto error;

    if(H5Tclose(array_dt1)<0)
        goto error;
    if(H5Tclose(array_dt2)<0)
        goto error;

    return tid;

error:
    return FAIL;
}


/*-------------------------------------------------------------------------
 * Function:	compare_data
 *
 * Purpose:	Compare data of stype1 and stype2.
 *
 * Return:	Success:        0
 *
 *              Failure:        negative	
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int
compare_data(unsigned char *src_data, unsigned char *dst_data, hbool_t src_subset)
{
    stype1  *s_ptr;
    stype2  *d_ptr;
    unsigned     i;

    for (i=0; i<(unsigned)NX*NY; i++) {
        if(src_subset) {
	   s_ptr = ((stype1*)src_data) + i;
	   d_ptr = ((stype2*)dst_data)  + i;
        } else {
	   s_ptr = ((stype2*)src_data) + i;
	   d_ptr = ((stype1*)dst_data)  + i;
        }

	if (s_ptr->a    != d_ptr->a    ||
	    s_ptr->b    != d_ptr->b    ||
	    s_ptr->c[0] != d_ptr->c[0] ||
	    s_ptr->c[1] != d_ptr->c[1] ||
	    s_ptr->c[2] != d_ptr->c[2] ||
	    s_ptr->c[3] != d_ptr->c[3] ||
	    s_ptr->d    != d_ptr->d    ||
	    s_ptr->e    != d_ptr->e    ||
            !FLT_ABS_EQUAL(s_ptr->f, d_ptr->f) ||
            !FLT_ABS_EQUAL(s_ptr->g, d_ptr->g) ||
            !FLT_ABS_EQUAL(s_ptr->h[0], d_ptr->h[0]) ||
            !FLT_ABS_EQUAL(s_ptr->h[1], d_ptr->h[1]) ||
            !FLT_ABS_EQUAL(s_ptr->i, d_ptr->i) ||
            !FLT_ABS_EQUAL(s_ptr->j, d_ptr->j) ||
            !DBL_ABS_EQUAL(s_ptr->k, d_ptr->k) ||
            !DBL_ABS_EQUAL(s_ptr->l, d_ptr->l) ||
            !DBL_ABS_EQUAL(s_ptr->m, d_ptr->m) ||
            !DBL_ABS_EQUAL(s_ptr->n, d_ptr->n) ) {

	    printf("    FAILED\n");
	    printf("    i=%d\n", i);
	    printf("    src={a=%d, b=%d, c=[%d,%d,%d,%d,%d,%d,%d,%d], d=%d, e=%d, f=%f, g=%f, h=[%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f], i=%f, j=%f, k=%f, l=%f, m=%f, n=%f}\n",
		   s_ptr->a, s_ptr->b, s_ptr->c[0], s_ptr->c[1], s_ptr->c[2],
		   s_ptr->c[3], s_ptr->c[4], s_ptr->c[5], s_ptr->c[6], s_ptr->c[7], 
                   s_ptr->d, s_ptr->e, s_ptr->f, s_ptr->g,s_ptr->h[0],s_ptr->h[1],s_ptr->h[2],
                   s_ptr->h[3],s_ptr->h[4],s_ptr->h[5],s_ptr->h[6],s_ptr->h[7],s_ptr->h[8],
                   s_ptr->h[9],s_ptr->h[10],s_ptr->h[11],s_ptr->h[12],s_ptr->h[13],s_ptr->h[14],
                   s_ptr->h[15], s_ptr->i,s_ptr->j,s_ptr->k,s_ptr->l,s_ptr->m,s_ptr->n);
	    printf("    dst={a=%d, b=%d, c=[%d,%d,%d,%d,%d,%d,%d,%d], d=%d, e=%d, f=%f, g=%f, h=[%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f,%f], i=%f, j=%f, k=%f, l=%f, m=%f, n=%f}\n",
		   d_ptr->a, d_ptr->b, d_ptr->c[0], d_ptr->c[1], d_ptr->c[2],
		   d_ptr->c[3], d_ptr->c[4], d_ptr->c[5], d_ptr->c[6], d_ptr->c[7], 
                   d_ptr->d, d_ptr->e, d_ptr->f, d_ptr->g,d_ptr->h[0],d_ptr->h[1],d_ptr->h[2],
                   d_ptr->h[3],d_ptr->h[4],d_ptr->h[5],d_ptr->h[6],d_ptr->h[7],d_ptr->h[8],
                   d_ptr->h[9],d_ptr->h[10],d_ptr->h[11],d_ptr->h[12],d_ptr->h[13],
                   d_ptr->h[14], d_ptr->h[15], d_ptr->i,d_ptr->j,d_ptr->k,d_ptr->l,
                   d_ptr->m,d_ptr->n);
	    goto error;
	}
    }

    return SUCCEED;

error:
    return FAIL;
}


/*-------------------------------------------------------------------------
 * Function:	test_hdf5_src_subset
 *
 * Purpose:	Test the optimization of compound data writing, rewriting,
 *              and reading when the source type is a subset of destination
 *              type.  For example:
 *                  struct source {            struct destination {
 *                      TYPE1 A;      -->          TYPE1 A;
 *                      TYPE2 B;      -->          TYPE2 B;
 *                      TYPE3 C;      -->          TYPE3 C;
 *                  };                             TYPE4 D;
 *                                                 TYPE5 E;
 *                                             };
 *              This optimization is for the Chicago company.
 *
 * Return:	Success:	0
 *
 *		Failure:	1
 *
 * Programmer:	Raymond Lu
 *              Friday, 15 June 2007 
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int
test_hdf5_src_subset(char *filename, double *time_used)
{
    hid_t   file;     
    hid_t   rew_tid, src_tid, dst_tid;
    hid_t   dataset;
    hid_t   space;
    hid_t   dcpl, dxpl;
    hsize_t dims[2] = {NX, NY};
    hsize_t chunk_dims[2] = {NX/10, NY/10};
    unsigned char *orig=NULL, *rew_buf=NULL, *rbuf=NULL;
    struct timeval start;
    int timer = 0;
    
    /* Create the file for this test */
    if((file = H5Fcreate(filename, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) < 0)
	goto error;

    /* Build hdf5 datatypes */
    if ((src_tid=create_stype1())<0)
        goto error;

    if ((dst_tid=create_stype2())<0)
        goto error;

    if ((rew_tid=create_stype3())<0)
        goto error;

    /* Create the data space */
    if((space = H5Screate_simple(2, dims, NULL))<0)
	goto error;

    /* Allocate space and initialize data */
    orig = (unsigned char*)malloc(NX * NY * sizeof(stype1));
    initialize_stype1(orig, (size_t)NX*NY);

    rbuf = (unsigned char*)malloc((size_t)(NX * NY * sizeof(stype2)));

    rew_buf = (unsigned char*)malloc(NX * NY * sizeof(stype3));
    initialize_stype3(rew_buf, (size_t)NX*NY);


    /* Create dataset creation property list */
    if((dcpl = H5Pcreate(H5P_DATASET_CREATE))<0)
        goto error;

    /*
     *######################################################################
     * STEP 1. Write data to contiguous and chunked datasets.
     */
    TESTING("writing data to contiguous and chunked datasets");

    /* Create contiguous data set */
    if((dataset = H5Dcreate(file, DSET_NAME[0], src_tid, space, dcpl))<0)
        goto error;


    /* Write the data to the dataset */
    if(H5Dwrite(dataset, src_tid, H5S_ALL, H5S_ALL, H5P_DEFAULT, orig)<0)
	goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    /* Set chunking */
    if(H5Pset_chunk(dcpl, 2, chunk_dims)<0)
        goto error;

    /* Create chunked data set */
    if((dataset = H5Dcreate(file, DSET_NAME[1], src_tid, space, dcpl))<0)
        goto error;
    /* Write the data to the dataset */
    if(H5Dwrite(dataset, src_tid, H5S_ALL, H5S_ALL, H5P_DEFAULT, orig)<0)
	goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    PASSED();

    /*
     *######################################################################
     * STEP 2. Rewrite the data with a subset of original data type. 
     */
    TESTING("rewriting data with a subset of original data type");

    /* Create xfer properties to preserve initialized data */
    if ((dxpl = H5Pcreate (H5P_DATASET_XFER))<0)
       goto error;

    if (H5Pset_preserve (dxpl, TRUE)<0)
       goto error;

    /* Rewrite contiguous data set */
      // Version 1.6 way
    if((dataset = H5Dopen(file, DSET_NAME[0]))<0)      
      goto error;

    /* Write the data to the dataset */
    if(H5Dwrite(dataset, rew_tid, H5S_ALL, H5S_ALL, dxpl, rew_buf)<0)
	goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    /* Rewrite chunked data set */
      // Version 1.6 way
   if((dataset = H5Dopen(file, DSET_NAME[1]))<0)

        goto error;

    /* Write the data to the dataset */
    if(H5Dwrite(dataset, rew_tid, H5S_ALL, H5S_ALL, dxpl, rew_buf)<0)
	goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    PASSED();

    /*
     *######################################################################
     * STEP 3. Read the data into a subset of the original compound type.
     */
    TESTING("reading data with a subset of original data type");

    /* Check contiguous data set */
      // Version 1.6 way
    if((dataset = H5Dopen(file, DSET_NAME[0]))<0)      
        goto error;

    /* Initialize performance benchmark and start the timer */
    if(H5Perf_init() <0)
        goto error;
    H5Perf_startTimer(&start);
    while(timer < 50){
      if(H5Dread(dataset, dst_tid, H5S_ALL, H5S_ALL, dxpl, rbuf)<0)
        goto error;
      ++timer;
    }
    /* End the timer */
    *time_used = H5Perf_endTimer(start);
    if(H5Perf_end() <0)
        goto error;

    if(compare_data(orig, rbuf, TRUE)<0) 
        goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    /* Check chunked data set */
    if((dataset = H5Dopen(file, DSET_NAME[1]))<0)
        goto error;

    if(H5Dread(dataset, dst_tid, H5S_ALL, H5S_ALL, dxpl, rbuf)<0)
        goto error;

    if(compare_data(orig, rbuf, TRUE)<0) 
        goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    /* Finishing test and release resources */
    if(H5Sclose(space) < 0)
        goto error;

    if(H5Pclose(dcpl) < 0)
        goto error;

    if(H5Pclose(dxpl) < 0)
        goto error;

    if(H5Tclose(src_tid)<0)
        goto error;
    if(H5Tclose(dst_tid)<0)
        goto error;
    if(H5Tclose(rew_tid)<0)
        goto error;
    if(H5Fclose(file) < 0)
        goto error;

    free(orig);
    free(rbuf);
    free(rew_buf);

    PASSED();
    return 0;

error:
    puts("*** DATASET TESTS FAILED ***");
    return 1;
}


/*-------------------------------------------------------------------------
 * Function:	test_hdf5_dst_subset
 *
 * Purpose:	Test the optimization of compound data writing, rewriting,
 *              and reading when the destination type is a subset of the
 *              source type.  For example:
 *                  struct source {            struct destination {
 *                      TYPE1 A;      -->          TYPE1 A;
 *                      TYPE2 B;      -->          TYPE2 B;
 *                      TYPE3 C;      -->          TYPE3 C;
 *                      TYPE4 D;               }
 *                      TYPE5 E;
 *                  };
 *              This optimization is for the Chicago company.  This test 
 *              is in opposite of test_hdf5_src_subset. 
 *
 * Return:	Success:	0
 *
 *		Failure:	1
 *
 * Programmer:	Raymond Lu
 *              Friday, 15 June 2007 
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
static int
test_hdf5_dst_subset(char *filename, double *time_used)
{
    hid_t   file;     
    hid_t   rew_tid, src_tid, dst_tid;
    hid_t   dataset;
    hid_t   space;
    hid_t   dcpl, dxpl;
    hsize_t dims[2] = {NX, NY};
    hsize_t chunk_dims[2] = {NX/10, NY/10};
    unsigned char *orig=NULL, *rew_buf=NULL, *rbuf=NULL;
    struct timeval start;
    int timer=0;
    
    /* Create the file for this test */
    if((file = H5Fcreate(filename, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) < 0)
	goto error;

    /* Build hdf5 datatypes */
    if ((src_tid=create_stype2())<0)
        goto error;

    if ((dst_tid=create_stype1())<0)
        goto error;

    if ((rew_tid=create_stype4())<0)
        goto error;

    /* Create the data space */
    if((space = H5Screate_simple(2, dims, NULL))<0)
	goto error;

    /* Allocate space and initialize data */
    orig = (unsigned char*)malloc(NX * NY * sizeof(stype2));
    initialize_stype2(orig, (size_t)NX*NY);

    rbuf = (unsigned char*)malloc(NX * NY * sizeof(stype1));

    rew_buf = (unsigned char*)malloc(NX * NY * sizeof(stype4));
    initialize_stype4(rew_buf, (size_t)NX*NY);

    /* Create dataset creation property list */
    if((dcpl = H5Pcreate(H5P_DATASET_CREATE))<0)
        goto error;

    /*
     *######################################################################
     * STEP 1. Write data to contiguous and chunked datasets.
     */
    TESTING("writing data to contiguous and chunked datasets");

    /* Create contiguous data set */
    if((dataset = H5Dcreate(file, DSET_NAME[2], src_tid, space, dcpl))<0)
        goto error;

    /* Write the data to the dataset */
    if(H5Dwrite(dataset, src_tid, H5S_ALL, H5S_ALL, H5P_DEFAULT, orig)<0)
	goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    /* Set chunking */
    if(H5Pset_chunk(dcpl, 2, chunk_dims)<0)
        goto error;

    /* Create chunked data set */
    if((dataset = H5Dcreate(file, DSET_NAME[3], src_tid, space, dcpl))<0)
        goto error;

    /* Write the data to the dataset */
    if(H5Dwrite(dataset, src_tid, H5S_ALL, H5S_ALL, H5P_DEFAULT, orig)<0)
	goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    PASSED();

    /*
     *######################################################################
     * STEP 2. Rewrite the data with a subset of original data type. 
     */
    TESTING("rewriting data with a subset of original data type");

    /* Create xfer properties to preserve initialized data */
    if ((dxpl = H5Pcreate (H5P_DATASET_XFER))<0)
       goto error;

    if (H5Pset_preserve (dxpl, TRUE)<0)
       goto error;

    /* Rewrite contiguous data set */
    if((dataset = H5Dopen(file, DSET_NAME[2]))<0)
        goto error;

    /* Write the data to the dataset */
    if(H5Dwrite(dataset, rew_tid, H5S_ALL, H5S_ALL, dxpl, rew_buf)<0)
	goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    /* Rewrite chunked data set */
    if((dataset = H5Dopen(file, DSET_NAME[3]))<0)
        goto error;

    /* Write the data to the dataset */
    if(H5Dwrite(dataset, rew_tid, H5S_ALL, H5S_ALL, dxpl, rew_buf)<0)
	goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    PASSED();

    /*
     *######################################################################
     * STEP 3. Read the data into a subset of the original compound type.
     */
    TESTING("reading data with a subset of original data type");

    /* Check contiguous data set */
    if((dataset = H5Dopen(file, DSET_NAME[2]))<0)
        goto error;

    if(H5Dread(dataset, dst_tid, H5S_ALL, H5S_ALL, dxpl, rbuf)<0)
        goto error;

    if(compare_data(orig, rbuf, FALSE)<0) 
        goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    /* Check chunked data set */
    if((dataset = H5Dopen(file, DSET_NAME[3]))<0)
        goto error;

    /* Initialize performance benchmark and start the timer */
    if(H5Perf_init() <0)
        goto error;
    H5Perf_startTimer(&start);
    while(timer < 50){
      if(H5Dread(dataset, dst_tid, H5S_ALL, H5S_ALL, dxpl, rbuf)<0)
        goto error;
      timer++;
    }
    /* End the timer */
    *time_used = H5Perf_endTimer(start);
    if(H5Perf_end() <0)
        goto error;

    if(compare_data(orig, rbuf, FALSE)<0) 
        goto error;

    if(H5Dclose(dataset) < 0)
        goto error;

    /* Finishing test and release resources */
    if(H5Sclose(space) < 0)
        goto error;

    if(H5Pclose(dcpl) < 0)
        goto error;

    if(H5Pclose(dxpl) < 0)
        goto error;

    if(H5Tclose(src_tid)<0)
        goto error;
    if(H5Tclose(dst_tid)<0)
        goto error;
    if(H5Tclose(rew_tid)<0)
        goto error;
    if(H5Fclose(file) < 0)
        goto error;

    free(orig);
    free(rbuf);
    free(rew_buf);

    PASSED();
    return 0;

error:
    puts("*** DATASET TESTS FAILED ***");
    return 1;
}


/*-------------------------------------------------------------------------
 * Function:	database
 *
 * Purpose:	Save the time into the database.
 *
 * Return:	Success:	0
 *
 *		Failure:	1
 *
 * Programmer:	Raymond Lu
 *              31 July 2007 
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
int database(double src_subset_time, double dst_subset_time)
{
    time_t clock1;
    struct tm *t1;
    int    tyear, tmon, tday, thour, tmin, tsec;
    int    db_handle, env_action;
    int    find_routine, routine_handle;
    int    find_action1,find_action2;

    /* <hyokyung 2007.08.31. 15:18:50> */
    char HOST_NAME[128]; 
    char HDF_VERSION[16];
  
    H5Perf_get_hostname(HOST_NAME);
    H5Perf_get_version(HDF_VERSION);
    /* <hyokyung 2007.08.31. 15:18:53> */
    
    time(&clock1);   
   
    /*getting the current local time: year,month,day,hour,min,sec */
    t1     = localtime(&clock1);
    tyear = t1->tm_year + 1900;
    tmon  = t1->tm_mon  + 1;
    tday  = t1->tm_mday;
    thour = t1->tm_hour;
    tmin  = t1->tm_min;
    tsec  = t1->tm_sec;

    if(H5Perf_init() <0) {
        printf("Unable to initialize the API at line %d. \n",__LINE__);
        goto error;
    }

    if((env_action = H5Perf_createSetting()) < 0){
        printf("Unable to create setting object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }

    if (H5Perf_addSetting(env_action, "OS", "Linux 2.6") < 0){
        printf("Unable to add setting object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }
    int trial = 0;
/*
    while ((db_handle=H5Perf_createMySQLHandle(SERVER, DBNAME, USER, PASSWD, PORT)) < 0 && trial < 10){
    // if ((db_handle=H5Perf_createMySQLHandle(SERVER, DBNAME, USER, PASSWD, PORT)) < 0){
      ++trial;
    }
    
    if(trial == 10){
        printf("Unable to create db_handle storage object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }*/
    char* test_file_path = NULL;
    int filestorage_handle;
    // test_file_path = getenv("FILE_PATH");
    test_file_path = "/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perflib/";
    /*
    if(test_file_path == NULL) test_file_path=getenv("PWD");
    if(test_file_path == NULL) {
        printf("The current directory of the stored file is NULL\n");
        printf("Please set the path of the file from the command line\n");
    }
    */
    printf("File path=%s", test_file_path);
    if((filestorage_handle = H5Perf_createFileHandle(test_file_path, FileName,0)) < 0) {
        printf("Unable to create file storage object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }

    find_routine = H5Perf_find_routine(filestorage_handle,"Chicago - compound subset");
    if(find_routine>=0) {
        routine_handle = find_routine;

        find_action1 = H5Perf_find_action(routine_handle,"source as a subset of destination");
   
        if(find_action1 <0){
            if (H5Perf_addAction(routine_handle, "source as a subset of destination", "measure time for compound data reading when source type is a subset of destination",env_action) < 0){
	        printf("Unable to add action to test routine object at line %d\n",__LINE__);
	        H5Perf_end();
                goto error;
            }
        }

        if (H5Perf_addInstance(routine_handle, "source as a subset of destination", "source as a subset of destination","read 1000000 compound elements",HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,src_subset_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        find_action2 = H5Perf_find_action(routine_handle,"destination as a subset of source");

        if(find_action2 <0){
            if (H5Perf_addAction(routine_handle, "destination as a subset of source", "measure time for compound data reading when destination type is a subset of source",env_action) < 0){
                printf("Unable to add action to test routine object at line %d\n",__LINE__);
                H5Perf_end();
                goto error;
            }
        }

        if(H5Perf_addInstance(routine_handle, "destination as a subset of source", "destination as a subset of source","read 1000000 compound elements", HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,dst_subset_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

/*        if(H5Perf_update(db_handle,routine_handle) < 0){
            printf("Unable to update db_handle storage at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        } */

        if(H5Perf_update(filestorage_handle,routine_handle) < 0){
            printf("Unable to update db_handle storage at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }
    } else {
        if((routine_handle = H5Perf_createRoutine())<0) {
            printf("Unable to create test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_setRoutine(routine_handle, "Chicago - compound subset", "performance benchmark of the compound data type subset for the chicago company","1.0",env_action) <0) {
            printf("Unable to set test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addAction(routine_handle, "source as a subset of destination", "measure time for compound data reading when source type is a subset of destination",env_action) < 0){
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if (H5Perf_addInstance(routine_handle, "source as a subset of destination", "source as a subset of destination","read 1000000 compound elements",HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,src_subset_time,-1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if (H5Perf_addAction(routine_handle, "destination as a subset of source", "measure time for compound data reading when destination type is a subset of source",env_action) < 0){
            printf("Unable to add action to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }

        if(H5Perf_addInstance(routine_handle, "destination as a subset of source", "destination as a subset of source","read 1000000 compound elements", HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,dst_subset_time,-1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }
/*
        if (H5Perf_write(db_handle,routine_handle) < 0 ){
            printf("Unable to write to db_handle storage at line %d\n",__LINE__);
            H5Perf_end();
            goto error;
        }
    }

    if (H5Perf_close(routine_handle) < 0){
        printf("Unable to close the routine handle at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }  

    if (H5Perf_close(db_handle) < 0){
        printf("Unable to close db_handle object at line %d\n",__LINE__);
        H5Perf_end();
        goto error;
    }*/

  	if (H5Perf_write(filestorage_handle, routine_handle) < 0) {
 	   printf("Unable to write to file storage at line %d\n",__LINE__);
	   H5Perf_end();
	   goto error;
	}
	if (H5Perf_close (filestorage_handle) < 0){
	   printf("Unable to close file object at line %d\n",__LINE__);
	   H5Perf_end();
	   goto error;
	} 
    }

    if (H5Perf_close(routine_handle) < 0){
	printf("Unable to close the routine handle at line %d\n",__LINE__);
	H5Perf_end();
	goto error;
    }

    if (H5Perf_end() < 0){
        printf("Unable to close the performance frame library at line %d\n",__LINE__);
        goto error;
    }

    return 0;

error:
    puts("*** DATABASE FAILED ***");
    return 1;
}


/*-------------------------------------------------------------------------
 * Function:	main
 *
 * Purpose:	Test different cases of I/O for compound data and the 
 *              compound optimization for the Chicago company.
 *
 * Return:	Success:         0
 *
 *              Failure:         1	
 *
 * Programmer:  Raymond Lu
 *              Friday, 15 June 2007
 *
 * Modifications:
 *-------------------------------------------------------------------------
 */
int
main (void)
{
    unsigned 	nerrors = 0;
    double      ssubset_time, dsubset_time;

    puts("Testing the optimization of when the source type is a subset of the dest:");
    nerrors += test_hdf5_src_subset(FILENAME[0], &ssubset_time);

    puts("Testing the optimization of when the dest type is a subset of the source:");
    nerrors += test_hdf5_dst_subset(FILENAME[1], &dsubset_time);

    /* Save the time into the database */
    nerrors += database(ssubset_time, dsubset_time);

    if (nerrors) {
        printf("***** %u FAILURE%s! *****\n",
               nerrors, 1==nerrors?"":"S");
        exit(1);
    }

    remove(FILENAME[0]);
    remove(FILENAME[1]);
    puts("All compound dataset tests passed.");
    return 0;
}
