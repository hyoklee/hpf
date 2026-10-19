// Group creation benchmark ported from the HPF 1.0.0 write2.c
// (https://github.com/hyoklee/hpf/blob/1.0.0/src/write2.c, create_groups()).
//
// Creates 10000 empty groups "/group_<i>" under the root group of a new file.
// As in write2.c, only the H5Gcreate/H5Gclose loop is timed; the first group
// is kept open until the loop ends, and file creation and closing are not
// part of the measurement.
#define CATCH_CONFIG_MAIN
#include <catch2/catch.hpp>

#include "hdf5.h"
#include <string>
#include <iostream>
#include <vector>

#define GROUP_BASENAME "/group_"
static const int NUM_GROUP = 10000;

// Returns the ID of the first group, which the caller closes, or -1.
static hid_t
create_groups(hid_t fileid, int num_group)
{
    hid_t first_group_id = -1;

    for(int i = 0; i < num_group; i++)
    {
        std::string group_name = GROUP_BASENAME + std::to_string(i);

        // write2.c called the 1.6 H5Gcreate(fileid, name, 0), which creates
        // the same group as the 1.8 API with default property lists.
        hid_t gid = H5Gcreate(fileid, group_name.c_str(), H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT);
        if(gid < 0)
        {
            std::cout << "Cannot create the group: " << group_name << std::endl;
            return -1;
        }

        if(i == 0)
            first_group_id = gid;
        else if(H5Gclose(gid) < 0)
        {
            std::cout << "Cannot close the group: " << group_name << std::endl;
            return -1;
        }
    }
    return first_group_id;
}

static std::string
file_name(int i)
{
    return "many_groups_" + std::to_string(i) + ".h5";
}

TEST_CASE("many_groups layout") {
  hid_t fid = H5Fcreate(file_name(0).c_str(), H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT);
  REQUIRE(fid >= 0);
  hid_t gid = create_groups(fid, NUM_GROUP);
  REQUIRE(gid >= 0);
  REQUIRE(H5Gclose(gid) >= 0);
  REQUIRE(H5Fclose(fid) >= 0);

  fid = H5Fopen(file_name(0).c_str(), H5F_ACC_RDONLY, H5P_DEFAULT);
  REQUIRE(fid >= 0);

  H5G_info_t info;
  REQUIRE(H5Gget_info(fid, &info) >= 0);
  CHECK(info.nlinks == (hsize_t)NUM_GROUP);

  for(int i : {0, NUM_GROUP / 2, NUM_GROUP - 1})
  {
      std::string group_name = GROUP_BASENAME + std::to_string(i);
      H5O_info2_t oinfo;
      REQUIRE(H5Oget_info_by_name3(fid, group_name.c_str(), &oinfo, H5O_INFO_BASIC, H5P_DEFAULT) >= 0);
      CHECK(oinfo.type == H5O_TYPE_GROUP);
  }
  REQUIRE(H5Fclose(fid) >= 0);
}

TEST_CASE("many_groups") {
  // now let's benchmark:
  BENCHMARK_ADVANCED("many_groups 10000")(Catch::Benchmark::Chronometer meter) {
      // One fresh file per run so every run creates the same 10000 groups.
      std::vector<hid_t> fids(meter.runs());
      std::vector<hid_t> gids(meter.runs(), -1);
      for(int i = 0; i < meter.runs(); i++)
          fids[i] = H5Fcreate(file_name(i).c_str(), H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT);

      meter.measure([&](int i) { gids[i] = create_groups(fids[i], NUM_GROUP); });

      for(int i = 0; i < meter.runs(); i++)
      {
          if(gids[i] >= 0)
              H5Gclose(gids[i]);
          H5Fclose(fids[i]);
      }
  };
}
