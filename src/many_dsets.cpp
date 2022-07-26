#include "hdf5.h"
#include <string>
#include <iostream>

static const char* const FILENAME = "fileWithLargeNumDsets.h5";

// Read this map as: 
// First column: Number of datasets to create
// Second column: Number of elements in the dataset
static const int dsetsAndNumElemsMap[3][2] { { 23792, 1 }, { 35285, 50 }, { 2173, 50000 } };

static const std::string GRP_NAME_BASE {"group_"};
static const std::string DSET_NAME_BASE{ "dset_" };

int main(int argc, char* argv[])
{
    hsize_t dsetDims[2];
    hid_t fcpl;

    fcpl = H5Pcreate(H5P_FILE_CREATE);
    H5Pset_file_space_strategy(fcpl, H5F_FSPACE_STRATEGY_NONE, 0, (hsize_t)1);
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
        
        hid_t groupID = H5Gcreate(fileID, grpName.c_str(), H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT);
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

            hid_t dsetID = H5Dcreate(groupID, dsetName.c_str(), H5T_NATIVE_UINT8, spaceID, H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT);

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
    return 0;
}