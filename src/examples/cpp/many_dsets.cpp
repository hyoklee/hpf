#define CATCH_CONFIG_MAIN
#define FILE_NAME          "results2.xml"

#include "hdf5.h"

#include <string>
#include <iostream>
#include <sys/time.h>
#include <time.h>
#include "CAPIShell.h"
//  #include "db.h"
#if 0
extern "C" { 
  int H5Perf_init();
  int H5Perf_end();
  void H5Perf_startTimer(struct timeval* timeval_start);
  double H5Perf_endTimer(struct timeval start);
}
#endif
static const char* const FILENAME = "fileWithLargeNumDsets.h5";

// Read this map as: 
// First column: Number of datasets to create
// Second column: Number of elements in the dataset
static const int dsetsAndNumElemsMap[3][2] = { { 23792, 1 }, { 35285, 50 }, { 2173, 50000 } };

static const std::string GRP_NAME_BASE = "group_";
static const std::string DSET_NAME_BASE =  "dset_";

int database(double write_time)
{
    char* test_file_path = "/scr/hyoklee/chicago/trunk/hdf5perflib/";
    char HOST_NAME[128]; 
    char HDF_VERSION[16];

    int filestorage_handle;
    int tyear, tmon, tday, thour, tmin, tsec;
    int db_handle, env_action;
    int find_routine, routine_handle, find_action;

    time_t clock1;
    struct tm *t1;

    H5Perf_get_hostname(HOST_NAME);
    H5Perf_get_version(HDF_VERSION);

    time(&clock1);
    t1     = localtime(&clock1);
    tyear = t1->tm_year + 1900;
    tmon  = t1->tm_mon  + 1;
    tday  = t1->tm_mday;
    thour = t1->tm_hour;
    tmin  = t1->tm_min;
    tsec  = t1->tm_sec;

    if((env_action = H5Perf_createSetting()) < 0){
        printf("Unable to create setting object at line %d\n",__LINE__);
        return -1;
    }

    if (H5Perf_addSetting(env_action, "OS", "Linux 2.6") < 0){
        printf("Unable to add setting object at line %d\n",__LINE__);
        return -1;
    }

    if((filestorage_handle = 
        H5Perf_createFileHandle(test_file_path, FILE_NAME, 0)) < 0) {
        printf("Unable to create file storage object at line %d\n",__LINE__);
        return -1;
    }

    find_routine = H5Perf_find_routine(filestorage_handle, 
                                       "Linear cached dataset IO");
    if(find_routine>=0) {
        routine_handle = find_routine;

        find_action = H5Perf_find_action(routine_handle,"linear cached dataset write");

        if(find_action <0){
            if (H5Perf_addAction(routine_handle, 
                                 "linear cached dataset write", 
                                 "measure time for writing a chunked dataset by hyperslabs with caching enabled",
                                 env_action) < 0){
	        printf("Unable to add action to test routine object at line %d\n",
                       __LINE__);
                return -1;
            }
        }

        if (H5Perf_addInstance(routine_handle, 
                               "linear cached dataset write", 
                               "linear cached dataset write",
                               "write 10000 columns", HOST_NAME,
                               tyear,tmon,tday,thour,tmin,tsec,
                               HDF_VERSION, write_time, -1) < 0) {
            printf("Unable to add instance to test routine object at line %d\n",
                   __LINE__);
            return -1;
        }
    }
    else {
        printf("Unable to find routine\n");
        if ((routine_handle = H5Perf_createRoutine()) < 0) {
            printf("Unable to create test routine object at line %d\n",__LINE__);
            return -1;
        }
        if (H5Perf_setRoutine(routine_handle, "Chicago-metadata",
                             "metadata performance benchmark for chicago company",
                             "1.0", env_action) <0) {
            printf("Unable to set test routine object at line %d\n",__LINE__);
            return -1;
        }

        if (H5Perf_addAction(routine_handle, "writing data", 
                         "measure dataset creation time",env_action) < 0){
            printf("Unable to add action to test routine object at line %d\n",
                   __LINE__);
            return -1;
        }

        if(H5Perf_addInstance(routine_handle, "writing data", "many dsets",
                              "writing many datasets",
                              HOST_NAME, tyear, tmon, tday, thour, tmin, tsec,
                              HDF_VERSION, write_time, -1) <0) {
            printf("Unable to add instance to test routine object at line %d\n",
             __LINE__);
            return -1;
        }
    }
    if (H5Perf_write(filestorage_handle, routine_handle) < 0 ){
        printf("Unable to write to file storage at line %d\n",__LINE__);
        return -1;
    }
    if (H5Perf_close(routine_handle) < 0){
        printf("Unable to close the routine handle at line %d\n",__LINE__);
        return -1;
    }
    return 0;
}

int main(int argc, char* argv[])
{
    hsize_t dsetDims[2];
    hid_t fcpl;
    struct timeval start;

    if(H5Perf_init() <0) {
        puts("*** MANY_DSETS TEST H5Perf_init() FAILED ***");
        return 1;
    }

    H5Perf_startTimer(&start);

    fcpl = H5Pcreate(H5P_FILE_CREATE);
    // It works only for HDF5 1.10 or above.
    //H5Pset_file_space_strategy(fcpl, H5F_FSPACE_STRATEGY_NONE, 0, (hsize_t)1);
    //H5Pset_file_space_strategy(fcpl, H5F_FSPACE_STRATEGY_FSM_AGGR, 0, (hsize_t)1);

    hid_t fileID = H5Fcreate(FILENAME, H5F_ACC_TRUNC, fcpl, H5P_DEFAULT);
    if(fileID < 0)
    {
        std::cout << "Could not create file" << std::endl;
        return -1;
    }

    for(size_t cnt = 0; cnt < 3; cnt++)
    {
        std::string grpName = GRP_NAME_BASE + std::to_string(cnt);
        
        hid_t groupID = H5Gcreate(fileID, grpName.c_str(), H5P_DEFAULT); // , H5P_DEFAULT, H5P_DEFAULT);
        if( groupID < 0 )
        {
            std::cout << "Could not create group: " << grpName <<std::endl;
            return -1;
        }

        // Specify the dataset dimensions
        dsetDims[0] = dsetsAndNumElemsMap[cnt][1];
        dsetDims[1] = 1;

        hid_t spaceID = H5Screate_simple(2, dsetDims, dsetDims);

        // Create some dummy data to write
        uint8_t* dataToWrite = new uint8_t[dsetDims[0]];
        for(size_t cntDsets = 0; cntDsets < dsetsAndNumElemsMap[cnt][0]; cntDsets++)
        {
            std::string dsetName = DSET_NAME_BASE + std::to_string(cntDsets);

            hid_t dsetID = H5Dcreate(groupID, dsetName.c_str(), H5T_NATIVE_UINT8, spaceID, H5P_DEFAULT); // , H5P_DEFAULT, H5P_DEFAULT);

            if(dsetID < 0)
            {
                std::cout << "Could not create dataset: " << dsetName << std::endl;
                return -1;
            }

            H5Dwrite(dsetID, H5T_NATIVE_UINT8, H5S_ALL, H5S_ALL, H5P_DEFAULT, dataToWrite);

            H5Dclose(dsetID);
        }

        H5Sclose(spaceID);
        H5Gclose(groupID);
        delete[] dataToWrite;
    }

    H5Pclose(fcpl);
    H5Fclose(fileID);
    double time_used = H5Perf_endTimer(start);
    if(database(time_used) < 0) {
        puts("database() failed.");
        return 1;
    };

    if(H5Perf_end() < 0) {
        puts("*** MANY_DSETS TEST H5Perf_end() FAILED ***");
        return 1;        
    }
    return 0;
}
