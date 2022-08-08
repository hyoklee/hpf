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
 *   This example shows how to write an extendible dataset with
 *   A 1,000,000 groups: two level(root and others)
 *   An option: each group with an attribute 
 and without an attribute
 
*/
// #define VERSION_1_8_0    
#define H5FILE_NAME        "h5pf_md_manygroupnew.h5"
#define H5FILE_NAME2        "h5pf_md_manygroupnew2.h5"
// #define FILE_NAME          "output.result"
#define FILE_NAME          "results.xml"
#define USE_LOCAL_STORAGE

#define GROUP_BASENAME "/group_"
#define DATASETNAME "SAMPLE_DATA"
#define NUM_GROUP_1  50000
#define NUM_GROUP_2  200000
#define NUM_RECORD   2000000
//#define NUM_RECORD   1000

#define storage_file_name_group "store_group.txt"
#define storage_file_name_dataset "store_dataset.txt"
#define storage_file_name_updatedataset  "store_update.txt"

#include "hdf5.h"
#include <assert.h>
#include <sys/time.h>
#include <time.h>
#include <stdlib.h>
#include "CAPIShell.h"
#include "db.h"
// #include "platform.h"

typedef struct  {
  int int_type1;
  int int_type2;
  int int_type3;
  int int_type4;
  int int_type5;
  float float_type1;
  float float_type2;
  float float_type3;
  double double_type1;
  double double_type2;
  char string_type1[7];
  char string_type2[12];
  char string_type3[15];
  char string_type4[40];
} samp_t;
 
hid_t create_groups(hid_t,int,double*);
hid_t create_datasets(hid_t,int,double*);
hid_t create_comtype();
double update_dataset(char*);
int
main (void)
{

  /*#ifdef H5_GROUP_REVISION*/
  hid_t fid = -1;             /* File ID */
  hid_t fid2 = -1;             /* File ID */  
  hid_t fcpl = -1;            /* File creation property list ID */
  hid_t gid = -1;             /* Group creation property list ID */
  hid_t gid2 = -1;            /* Group creation property list ID  <hyokyung 2009.05.13. 10:19:39> */
  hid_t sid = -1;             /* Dataspace ID */
  hid_t did = -1;             /* Dataset ID */
  int   i;
  int   routine_handle,db_handle,filestorage_handle,env_action;
  int   find_action1,find_action2,find_action3,find_routine;
  double create_group_time_1,create_group_time_2,write_dset_time,update_rec_time;
  char *str_num;
  size_t dset_name_size;
  char * dset_abso_path = NULL;
  char *test_file_path  = NULL;
  time_t clock1;
  struct tm *t1;
  int    tyear,tmon,tday,thour,tmin,tsec;
  
  char HOST_NAME[128]; 
  char HDF_VERSION[16];
  

  /* Initialize table handle */
  find_action1  = -1;
  find_action2  = -1;
  find_action3  = -1;
  find_routine = -1;
  routine_handle = -1;

  H5Perf_get_hostname(HOST_NAME);
  H5Perf_get_version(HDF_VERSION);
  
  /* Create file for test groups */
  if((fid = H5Fcreate(H5FILE_NAME, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) <0){
    printf("Cannot create HDF5 file %s, at line %d\n",H5FILE_NAME,__LINE__);
    return -1;
  }  
    
  /* Create 50K groups */

  gid = create_groups(fid,NUM_GROUP_1, &create_group_time_1); 
  if(gid <0){
    printf("Cannot successfully create 50000 groups, at line %d\n",__LINE__);
    return -1;
  }
  printf("create_group_time_1=%f\n",create_group_time_1);

  /* Create file for test groups 2 */
  if((fid2 = H5Fcreate(H5FILE_NAME2, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT)) <0){
    printf("Cannot create HDF5 file %s, at line %d\n",H5FILE_NAME,__LINE__);
    return -1;
  }  
  
  /* Create 200K groups */
  gid2 = create_groups(fid2,NUM_GROUP_2, &create_group_time_2);
  if(gid2 <0){
    printf("Cannot successfully create 200000 groups, at line %d\n",__LINE__);
    return -1;
  }
  printf("create_group_time_2=%f\n",create_group_time_2);

  /* Create one unlimited dimension dataset */
  did = create_datasets(gid,NUM_RECORD, &write_dset_time);
  if(did < 0) {
    printf("Cannot successfully create one unlimited dimension dataset, at line %d\n", __LINE__);
    return -1;
  }
  printf("create_dsets_time=%f\n",write_dset_time);

  if((dset_name_size=H5Iget_name(did,dset_abso_path,0))<0) {
    printf("Cannot retrieve the dataset name size, at line %d\n",__LINE__);
    return -1;
  }

  assert(dset_name_size >0);
  printf("dset_name_size = %d\n",dset_name_size);
  dset_abso_path = (char*) malloc(sizeof(char)*(dset_name_size+1));
  if((dset_name_size=H5Iget_name(did,dset_abso_path,dset_name_size+1))<0) {
    printf("Cannot obtain the dataset name,at line %d\n",__LINE__);
    return -1;
  }
  printf("dset_abso_path = %s\n",dset_abso_path);

  /* Close the dataset */
  if(H5Dclose(did) < 0) {
    printf("Cannot close the dataset, at line %d\n",__LINE__);
    return -1;
  }
      
  /* Close the group */
  if(H5Gclose(gid) < 0){
    printf("Cannot close the group, at line %d\n",__LINE__);
    return -1;
  }

  /* Close the file */
  if(H5Fclose(fid) <0){
    printf("Cannot close the file, at line %d\n",__LINE__);
    return -1;
  }

  /* Close the group */
  if(H5Gclose(gid2) < 0){
    printf("Cannot close the group2, at line %d\n",__LINE__);
    return -1;
  }

  /* Close the file */
  if(H5Fclose(fid2) <0){
    printf("Cannot close the file2, at line %d\n",__LINE__);
    return -1;
  }
  
  /* Look up and append a record to the dataset */
  update_rec_time = update_dataset(dset_abso_path); 
  if(update_rec_time <0) {
    printf("Cannot successfully update the record, at line %d\n",__LINE__);   
    return -1;
  }
  printf("update_rec_time=%f\n",update_rec_time);

  clock1 = time(NULL);   
   
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
    return -1;
  }
 
  if((env_action = H5Perf_createSetting()) < 0){
    printf("Unable to create setting object at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
  }

  if (H5Perf_addSetting(env_action, "OS", "Linux 2.6") < 0){
    printf("Unable to add setting object at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
  }

/*  if ((db_handle=H5Perf_createMySQLHandle(server,dbname, user,passwd, port)) < 0){
    printf("Unable to create db_handle storage object at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
  }*/
   test_file_path = "/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perflib/";
   /*
    test_file_path = getenv("FILE_PATH");
    if(test_file_path == NULL) test_file_path=getenv("PWD");
    if(test_file_path == NULL) {
        printf("The current directory of the stored file is NULL\n");
        printf("Please set the path of the file from the command line\n");
    }
   */
    if((filestorage_handle = H5Perf_createFileHandle(test_file_path, FILE_NAME,0)) < 0) {
        printf("Unable to create file storage object at line %d\n",__LINE__);
        H5Perf_end();
        return -1;
    }

  find_routine = H5Perf_find_routine(filestorage_handle,"Chicago-metadata");
  if(find_routine>=0){
    routine_handle = find_routine;
    find_action1 = H5Perf_find_action(routine_handle,"group creation");
    printf("find the benchmark action group creation\n");
    if(find_action1 <0){
      if (H5Perf_addAction(routine_handle, "group creation", "measure group creation time",env_action) < 0){
	printf("Unable to add action to test routine object at line %d\n",__LINE__);
	H5Perf_end();
	return -1;
      }
    }
    if(H5Perf_addInstance(routine_handle,
			  "group creation", "10000 groups","creating 10000 empty groups",
			  HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,
			  HDF_VERSION,create_group_time_1,-1) <0) {
      printf("Unable to add instance to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

    if(H5Perf_addInstance(routine_handle,
                          "group creation", "200000 groups","creating 200000 empty groups",
                          HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,
                          HDF_VERSION,create_group_time_2,-1) <0) {
      printf("Unable to add instance to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

    find_action2 = H5Perf_find_action(routine_handle,"writing data");
    printf("find the benchmark action writing data\n");
    if(find_action2 <0){
      if (H5Perf_addAction(routine_handle, "writing data", "measure dataset creation time",env_action) < 0){
	printf("Unable to add action to test routine object at line %d\n",__LINE__);
	H5Perf_end();
	return -1;
      }
    }
    printf("find_action2 = %d\n",find_action2);

    
    if(H5Perf_addInstance(routine_handle,
			  "writing data", "1000000 record","writing 1000000 compound records",
			  HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,
			  HDF_VERSION,write_dset_time,-1) <0) {
      printf("Unable to add instance to test routine object at line %d\n",__LINE__);    
      H5Perf_end();
      return -1;
    }
      
    find_action3 = H5Perf_find_action(routine_handle,"updating data");
    printf("find the action updating data\n");
    if(find_action3 <0){
      if (H5Perf_addAction(routine_handle, "updating data", "measure time to append a dataset",env_action) < 0){
	printf("Unable to add action to test routine object at line %d\n",__LINE__);
	H5Perf_end();
	return -1;
      }
    }
    printf("find_action3 = %d\n",find_action3);
    if(H5Perf_addInstance(routine_handle, "updating data", "add_rec","adding a record",
			  HOST_NAME,
			  tyear,tmon,tday,thour,tmin,tsec,
			  HDF_VERSION,update_rec_time,-1) <0) {
      printf("Unable to add instance to test routine object at line %d\n",__LINE__);    
      H5Perf_end();
      return -1;
    }

    if (H5Perf_update (filestorage_handle,routine_handle) < 0 ){
      printf("Unable to update db_handle storage at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

  }
  else {
    if((routine_handle = H5Perf_createRoutine())<0) {
      printf("Unable to create test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

    if(H5Perf_setRoutine(routine_handle, "Chicago-metadata","metadata performance benchmark for chicago company","1.0",env_action) <0) {
      printf("Unable to set test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

    if(H5Perf_addAction(routine_handle, "group creation", "measure group creation time",env_action) < 0){
      printf("Unable to add action to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

    /* Instance without setting */
    if (H5Perf_addInstance(routine_handle, "group creation", "10000 groups","creating 10000 empty groups",HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,create_group_time_1,-1) < 0){
      printf("Unable to add instance to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }
    if (H5Perf_addInstance(routine_handle, "group creation", "200000 groups","creating 200000 empty groups",HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,create_group_time_2,-1) < 0){
      printf("Unable to add instance to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

    if (H5Perf_addAction(routine_handle, "writing data", "measure dataset creation time",env_action) < 0){
      printf("Unable to add action to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

    if(H5Perf_addInstance(routine_handle, "writing data", "1000000 record","writing 1000000 compound records",
			  HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,HDF_VERSION,write_dset_time,-1) <0) {
      printf("Unable to add instance to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

    if (H5Perf_addAction(routine_handle, "updating data", "measure time to append a dataset",env_action) < 0){
      printf("Unable to add action to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }
    if(H5Perf_addInstance(routine_handle,
			  "updating data", "add_rec","adding a record",
			  HOST_NAME,tyear,tmon,tday,thour,tmin,tsec,
			  HDF_VERSION,update_rec_time,-1) <0) {
      printf("Unable to add instance to test routine object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }

  /*  if (H5Perf_write (db_handle,routine_handle) < 0 ){
      printf("Unable to write to db_handle storage at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }
  }

  if (H5Perf_close(db_handle) < 0){
    printf("Unable to close db_handle object at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
  }*/
#ifdef USE_LOCAL_STORAGE
 /* test_file_path = getenv("FILE_PATH");
  if(test_file_path == NULL) test_file_path=getenv("PWD");
  if(test_file_path == NULL) {
    printf("The current directory of the stored file is NULL\n");
    printf(" Please set the path of the file from command line\n");
  }
  if((filestorage_handle = H5Perf_createFileHandle(test_file_path,FILE_NAME,0)) < 0) {
    printf("Unable to create file storage object at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
  } else {*/
    if (H5Perf_write (filestorage_handle,routine_handle) < 0 ){
      printf("Unable to write to file storage at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }
    if (H5Perf_close(filestorage_handle) < 0){
      printf("Unable to close file object at line %d\n",__LINE__);
      H5Perf_end();
      return -1;
    }
  }
#endif
  printf("before find_action1 \n");
  /*
    if(find_action1 >=0) {
    printf("close action handle\n");
    if(H5Perf_close(find_action1)<0) {
    printf("Unable to close the action handle at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
    }
    }
    printf("after find_action1 \n");
    if(find_action2 >=0) {
    if(H5Perf_close(find_action2)<0) {
    printf("Unable to close the action handle at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
    }
    }
    if(find_action3>=0) {
    if(H5Perf_close(find_action3)<0) {
    printf("Unable to close the action handle at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
    }
    }

    printf("before Perf_close\n");
  */

  /*   if(find_routine <0) {
       if (H5Perf_close(routine_handle) < 0){
       printf("Unable to close the routine handle at line %d\n",__LINE__);
       H5Perf_end();
       return -1;
       }
       }
       else */
  H5Perf_close(routine_handle);


  printf("before Perf_close env\n");
  if (H5Perf_close(env_action) < 0){
    printf("Unable to close the environment handle at line %d\n",__LINE__);
    H5Perf_end();
    return -1;
  }

  printf("before end\n");
  if (H5Perf_end() < 0){
    printf("Unable to close the performance frame library at line %d\n",__LINE__);
    return -1;
  }
  return 0;
}

hid_t create_groups(hid_t fileid, int num_group, double *group_time_ptr) {

  int group_digit;
  char* str_num;
  char* group_name;
  hid_t* obj_id_list;
  hid_t first_group_id;
  int i;
  struct timeval start;
  double time_used;
        
  int temp_num_group;

  assert(num_group>0);
  obj_id_list = (hid_t*)calloc(num_group,sizeof(hid_t));
  group_digit = 0;
  temp_num_group = num_group;

  while(temp_num_group != 0) {
    group_digit++;
    temp_num_group /= 10;
  }
  group_name = malloc((group_digit+1)+sizeof(GROUP_BASENAME));

  if(H5Perf_init() <0) {
    printf("Unable to initialize the API,at line %d\n",__LINE__);
    return -1;
  }
  H5Perf_startTimer(&start);
  for(i=0;i<num_group;i++) {
    sprintf(group_name, GROUP_BASENAME "%d",i);

#ifdef VERSION_1_8_0
     if((obj_id_list[i]=H5Gcreate(fileid,group_name,H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT))<0){      
#else
     if((obj_id_list[i]=H5Gcreate(fileid,group_name,(size_t)0))<0){             
#endif       
      printf("Cannot create the group, at line %d\n",__LINE__);
      return -1;
    }

    if(i!=0) {
      if(H5Gclose(obj_id_list[i])<0) {
	printf("Cannot close the group, at line %d\n",__LINE__);
	return -1;
      }
    }
  }
  time_used = H5Perf_endTimer(start);
  *group_time_ptr = time_used;
  if(H5Perf_end() <0) {
    printf("Cannot close the plib C API, at line %d\n",__LINE__);
    return -1;
  }
  first_group_id = obj_id_list[0];
  free(obj_id_list);
  free(group_name);

  return first_group_id;

}

hid_t create_datasets(hid_t gid,int num_records, double * dataset_time_ptr){

    
  hid_t datatype;
  hid_t chunk_prop;
  hid_t dataspace;
  hid_t did;
  samp_t* samp_data;
  int     i,j;
  struct timeval start;
    
  hsize_t dims[1]       ={NUM_RECORD};
  hsize_t maxdims[1]    ={H5S_UNLIMITED};
  hsize_t chunk_dims[1] = {100};
  int gzip_level = 6;
    

  if(H5Perf_init() <0) {
    printf("Unable to initialize the API,at line %d\n",__LINE__);
    return -1;
  }

  H5Perf_startTimer(&start);
  if((chunk_prop = H5Pcreate(H5P_DATASET_CREATE))<0){
    printf("Cannot successfully create the property list, at line %d\n",__LINE__);
    return -1;
  }
    
  if(H5Pset_chunk(chunk_prop,1,chunk_dims)<0){
    printf("Cannot successfully set the chunk property, at line %d\n",__LINE__);
    return -1;
  }

  if(H5Pset_shuffle(chunk_prop)<0) {
    printf("Cannot successfully set shuffle filter,at line %d\n",__LINE__);
    return -1;
  }

  if(H5Pset_deflate(chunk_prop,gzip_level)<0) {
    printf("Cannot successfully set deflate filter,at line %d\n",__LINE__);
    return -1;
  }
    
  if((datatype = create_comtype())<0) {
    printf("Cannot create datatype, at line %d\n",__LINE__);
    return -1;
  }
    
  if((dataspace = H5Screate_simple(1,dims,maxdims))<0){
    printf("Cannot create simple dataspace, at line %d\n",__LINE__);
    return -1;
  }
#ifdef VERSION_1_8_0  
  did = H5Dcreate(gid,DATASETNAME,datatype,dataspace,H5P_DEFAULT,chunk_prop,H5P_DEFAULT);
#else
  did = H5Dcreate(gid,DATASETNAME,datatype,dataspace,chunk_prop);  
#endif
  
  if(did < 0) {
    printf("Cannot create dataset, at line %d\n",__LINE__);
    return -1;
  }

  /* Generate data */
  samp_data =(samp_t *) calloc(NUM_RECORD,sizeof(samp_t));
  for(i=0;i<NUM_RECORD;i++){
    samp_data[i].int_type1 = 25+i;
    samp_data[i].int_type2 = 3756+2*i;
    samp_data[i].int_type3 = 4980-3*i;
    samp_data[i].int_type4 = 123+4*i;
    samp_data[i].int_type5 = 6500-5*i;
    samp_data[i].float_type1= 1.3569+0.5*i;
    samp_data[i].float_type2 = -5.4401+15*i;
    samp_data[i].float_type3 = 566.647-150*i;
    samp_data[i].double_type1 = 0.5516+1.5*i;
    samp_data[i].double_type2 = 555.876-15*i;
    for(j=0;j<7;j++) 
      samp_data[i].string_type1[j]='a'+j+i%32;
    for(j=0;j<12;j++)
      samp_data[i].string_type2[j]='F'-j+i%64;
    for(j=0;j<15;j++)
      samp_data[i].string_type3[j]='T'-2*j+i%16;
    for(j=0;j<40;j++)
      samp_data[i].string_type4[j]='t'+j+i%8;
  }

  if(H5Dwrite(did,datatype,dataspace,dataspace,H5P_DEFAULT,samp_data)<0) {
    printf("Cannot write data, at line %d\n",__LINE__);
    return -1;
  }
  free(samp_data);
  H5Sclose(dataspace);
  H5Tclose(datatype);
  *dataset_time_ptr = H5Perf_endTimer(start);

  if(H5Perf_end() <0) {
    printf("Cannot close the plib C API, at line %d\n",__LINE__);
    return -1;
  }

  return did;
}
    
hid_t create_comtype() {

  hid_t str_type1,str_type2,str_type3,str_type4,comp_type;
    
  if((comp_type = H5Tcreate(H5T_COMPOUND,sizeof(samp_t)))<0){
    printf("cannot create compound datatype, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"int1",HOFFSET(samp_t,int_type1),H5T_NATIVE_INT)<0){
    printf("Cannot insert int1 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"int2",HOFFSET(samp_t,int_type2),H5T_NATIVE_INT)<0){
    printf("Cannot insert int2 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"int3",HOFFSET(samp_t,int_type3),H5T_NATIVE_INT)<0){
    printf("Cannot insert int3 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"int4",HOFFSET(samp_t,int_type4),H5T_NATIVE_INT)<0){
    printf("Cannot insert int4 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"int5",HOFFSET(samp_t,int_type5),H5T_NATIVE_INT)<0){
    printf("Cannot insert int5 into comp_type, at line %d\n",__LINE__);
    return -1;
  }

  if(H5Tinsert(comp_type,"float1",HOFFSET(samp_t,float_type1),H5T_NATIVE_FLOAT)<0){
    printf("Cannot insert float1 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"float2",HOFFSET(samp_t,float_type2),H5T_NATIVE_FLOAT)<0){
    printf("Cannot insert float2 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"float3",HOFFSET(samp_t,float_type3),H5T_NATIVE_FLOAT)<0){
    printf("Cannot insert float3 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  
  if(H5Tinsert(comp_type,"double1",HOFFSET(samp_t,double_type1),H5T_NATIVE_DOUBLE)<0){
    printf("Cannot insert int1 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"double2",HOFFSET(samp_t,double_type2),H5T_NATIVE_DOUBLE)<0){
    printf("Cannot insert int1 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
    
  str_type1 = H5Tcopy(H5T_C_S1);
  H5Tset_size(str_type1,7);

  str_type2 = H5Tcopy(H5T_C_S1);
  H5Tset_size(str_type2,12);

  str_type3 = H5Tcopy(H5T_C_S1);
  H5Tset_size(str_type3,15);

  str_type4 = H5Tcopy(H5T_C_S1);
  H5Tset_size(str_type4,40);
  
  if(H5Tinsert(comp_type,"str1",HOFFSET(samp_t,string_type1),str_type1)<0){
    printf("Cannot insert str1 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"str2",HOFFSET(samp_t,string_type2),str_type2)<0){
    printf("Cannot insert str2 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"str3",HOFFSET(samp_t,string_type3),str_type3)<0){
    printf("Cannot insert str3 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  if(H5Tinsert(comp_type,"str4",HOFFSET(samp_t,string_type4),str_type4)<0){
    printf("Cannot insert str4 into comp_type, at line %d\n",__LINE__);
    return -1;
  }
  H5Tclose(str_type1);
  H5Tclose(str_type2);
  H5Tclose(str_type3);
  H5Tclose(str_type4);
  return comp_type;
} 

double update_dataset(char* dset_path){

  double times = 0;
  hid_t file_id;
  hid_t did; 
  hid_t file_space;
  hid_t mem_space;
  hid_t datatype;
  struct timeval start;
  double time_used;
  
  samp_t rec_to_add;
  hsize_t size[1];
  hsize_t offset[1];

  if(H5Perf_init() <0) {
    printf("Unable to initialize the API,at line %d\n",__LINE__);
    return -1;
  }
  
  H5Perf_startTimer(&start);
  while(times < 2000){
  if((file_id=H5Fopen(H5FILE_NAME,H5F_ACC_RDWR,H5P_DEFAULT))<0) {
    printf("Cannot open the existing HDF5 file at line %d .\n",__LINE__);
    return -1;
  }
   // Version 1.6 way
#ifdef   VERSION_1_8_0  
  if((did=H5Dopen(file_id,dset_path, H5P_DEFAULT))<0){      
#else
  if((did=H5Dopen(file_id,dset_path))<0){          
#endif    
    printf("Cannot open the existing HDF5 dataset at line %d .\n",__LINE__);
    return -1;
  }

  rec_to_add.int_type1=31;
  rec_to_add.int_type2=25;
  rec_to_add.int_type3=42;
  rec_to_add.int_type4=65;
  rec_to_add.int_type5=11;
  rec_to_add.float_type1=1.2456;
  rec_to_add.float_type2=2.4566;
  rec_to_add.float_type3=4.5578;
  rec_to_add.double_type1=5.3319;
  rec_to_add.double_type2=3.44;
  strncpy(rec_to_add.string_type1,"UN851 ",6);
  strncpy(rec_to_add.string_type2,"FromBeijing",11);
  strncpy(rec_to_add.string_type3,"To Chicago-ORD",14);
  strncpy(rec_to_add.string_type4,"Arrival time is 5:30 PM local time",24);

  size[0] = NUM_RECORD +1;
  /* Extend the dataset */

  if(H5Dextend(did,size)<0) {
    printf("cannot extend the dataset at line %d.\n",__LINE__);
    return -1;
  }

  if((file_space = H5Dget_space(did))<0) {
    printf("cannot get file space at line %d.\n",__LINE__);
    return -1;
  }

  offset[0] = NUM_RECORD;
  size[0]   = 1;

  if((mem_space = H5Screate_simple(1,size,NULL))<0){
    printf("Cannot get memory space at line %d.\n",__LINE__);
    return -1;
  }

  if(H5Sselect_hyperslab(file_space, H5S_SELECT_SET, offset, NULL,size,NULL)<0){
    printf("Cannot select hyperslab at line %d.\n",__LINE__);
    return -1;
  }

  if((datatype = H5Dget_type(did))<0) {
    printf("Cannot obtain datatype at line %d.\n",__LINE__);
    return -1;
  }

  if(H5Dwrite(did,datatype,mem_space,file_space,H5P_DEFAULT,(void*)&rec_to_add)<0) {
    printf("Cannot write dataset at line %d .\n",__LINE__);
    return -1;
  }
  H5Dclose(did);
  H5Sclose(file_space);
  H5Sclose(mem_space);
  H5Fclose(file_id);
  times++;
  }
  time_used = H5Perf_endTimer(start);

  if(H5Perf_end() <0) {
    printf("Cannot close the plib C API, at line %d\n",__LINE__);
    return -1;
  }

  return time_used;

}
