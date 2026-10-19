// Port of the HPF 1.0.0 many_dsets benchmark
// (https://github.com/hyoklee/hpf/blob/1.0.0/src/examples/cpp/many_dsets.cpp).
//
// Unlike src/many_dsets.cpp, this keeps the 1.0.0 file creation property list
// as-is (default file space strategy) and times one pass of the whole
// workload: 3 groups holding 23792 x 1, 35285 x 50 and 2173 x 50000 uint8
// datasets (61250 datasets in total).
#define CATCH_CONFIG_MAIN
#include <catch2/catch.hpp>

#include "hdf5.h"
#include <cstdint>
#include <string>
#include <iostream>
#include <vector>

static const char* const FILENAME = "fileWithLargeNumDsets_v1.h5";

// Read this map as:
// First column: Number of datasets to create
// Second column: Number of elements in the dataset
static const int dsetsAndNumElemsMap[3][2] { { 23792, 1 }, { 35285, 50 }, { 2173, 50000 } };

static const std::string GRP_NAME_BASE {"group_"};
static const std::string DSET_NAME_BASE{ "dset_" };

static uint8_t
fill_value(size_t cnt, size_t cntDsets)
{
    return static_cast<uint8_t>(cnt * 31 + cntDsets);
}

int
test (void)
{
    hsize_t dsetDims[2];

    // 1.0.0 left H5Pset_file_space_strategy() commented out, so the default
    // file space strategy is used here.
    hid_t fcpl = H5Pcreate(H5P_FILE_CREATE);

    hid_t fileID = H5Fcreate(FILENAME, H5F_ACC_TRUNC, fcpl, H5P_DEFAULT);
    if(fileID < 0)
    {
        std::cout << "Could not create file" << std::endl;
        return -1;
    }

    for(size_t cnt = 0; cnt < 3; cnt++)
    {
        std::string grpName = GRP_NAME_BASE + std::to_string(cnt);

        // 1.0.0 called the 1.6 H5Gcreate/H5Dcreate APIs with default property
        // lists, which create the same objects as the 1.8 APIs below.
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
        std::vector<uint8_t> dataToWrite(dsetDims[0]);
        for(size_t cntDsets = 0; cntDsets < (size_t)dsetsAndNumElemsMap[cnt][0]; cntDsets++)
        {
            std::string dsetName = DSET_NAME_BASE + std::to_string(cntDsets);

            hid_t dsetID = H5Dcreate(groupID, dsetName.c_str(), H5T_NATIVE_UINT8, spaceID, H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT);

            if(dsetID < 0)
            {
                std::cout << "Could not create dataset: " << dsetName << std::endl;
                return -1;
            }

            dataToWrite[0] = fill_value(cnt, cntDsets);
            if(H5Dwrite(dsetID, H5T_NATIVE_UINT8, H5S_ALL, H5S_ALL, H5P_DEFAULT, dataToWrite.data()) < 0)
            {
                std::cout << "Could not write dataset: " << dsetName << std::endl;
                return -1;
            }

            H5Dclose(dsetID);
        }

        H5Sclose(spaceID);
        H5Gclose(groupID);
    }

    H5Pclose(fcpl);
    if(H5Fclose(fileID) < 0)
    {
        std::cout << "Could not close file" << std::endl;
        return -1;
    }
    return 0;
}

TEST_CASE("many_dsets_v1 layout") {
  REQUIRE(test() == 0);

  hid_t fileID = H5Fopen(FILENAME, H5F_ACC_RDONLY, H5P_DEFAULT);
  REQUIRE(fileID >= 0);

  for(size_t cnt = 0; cnt < 3; cnt++)
  {
      std::string grpName = GRP_NAME_BASE + std::to_string(cnt);
      hid_t groupID = H5Gopen(fileID, grpName.c_str(), H5P_DEFAULT);
      REQUIRE(groupID >= 0);

      H5G_info_t info;
      REQUIRE(H5Gget_info(groupID, &info) >= 0);
      CHECK(info.nlinks == (hsize_t)dsetsAndNumElemsMap[cnt][0]);

      // Spot-check the first and last dataset of each group.
      for(size_t cntDsets : {(size_t)0, (size_t)dsetsAndNumElemsMap[cnt][0] - 1})
      {
          std::string dsetName = DSET_NAME_BASE + std::to_string(cntDsets);
          hid_t dsetID = H5Dopen(groupID, dsetName.c_str(), H5P_DEFAULT);
          REQUIRE(dsetID >= 0);

          hid_t spaceID = H5Dget_space(dsetID);
          hsize_t dims[2] = {0, 0};
          CHECK(H5Sget_simple_extent_dims(spaceID, dims, NULL) == 2);
          CHECK(dims[0] == (hsize_t)dsetsAndNumElemsMap[cnt][1]);
          CHECK(dims[1] == 1);

          std::vector<uint8_t> data(dims[0]);
          REQUIRE(H5Dread(dsetID, H5T_NATIVE_UINT8, H5S_ALL, H5S_ALL, H5P_DEFAULT, data.data()) >= 0);
          CHECK(data[0] == fill_value(cnt, cntDsets));

          H5Sclose(spaceID);
          H5Dclose(dsetID);
      }
      H5Gclose(groupID);
  }
  H5Fclose(fileID);
}

TEST_CASE("many_dsets_v1") {
  // now let's benchmark:
  BENCHMARK("many_dsets_v1 100") {
      return test();
  };
}
