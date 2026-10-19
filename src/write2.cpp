// Metadata benchmark ported from the HPF 1.0.0 write2.c
// (https://github.com/hyoklee/hpf/blob/1.0.0/src/write2.c).
//
// Each step of write2.c is its own benchmark, named after the instance
// write2.c recorded for it:
//   "10000 groups"   - create 10000 empty groups in the root of a new file
//   "200000 groups"  - create 200000 empty groups in the root of a new file
//   "1000000 record" - write 1000000 compound records to a chunked
//                      (100 records), shuffled and deflated dataset that has
//                      an unlimited dimension, in "/group_0" of the first file
//   "add_rec"        - 2000 times: open the first file, extend the dataset by
//                      one record and write that record
// Built with the 1.6 API (HDF5 configured with HDF5_DEFAULT_API_VERSION=v16,
// or -DH5_USE_16_API), the steps make the same 1.6 calls as write2.c.
// As in write2.c, the timers cover only the HDF5 calls of each step; creating
// or closing the files around a step is not timed. Unlike write2.c, the
// records are generated before the "1000000 record" timer starts, and the
// group and record counts match the instance names (write2.c created 50000
// groups and 2000000 records under the "10000 groups" and "1000000 record"
// names).
#define CATCH_CONFIG_MAIN
#include <catch2/catch.hpp>

#include "hdf5.h"
#include <cstring>
#include <string>
#include <iostream>
#include <vector>

#define H5FILE_NAME  "h5pf_md_manygroupnew.h5"
#define H5FILE_NAME2 "h5pf_md_manygroupnew2.h5"

#define GROUP_BASENAME "/group_"
#define DATASETNAME    "SAMPLE_DATA"
#define DATASET_PATH   GROUP_BASENAME "0/" DATASETNAME
#define NUM_GROUP_1  10000
#define NUM_GROUP_2  200000
#define NUM_RECORD   1000000
#define NUM_UPDATE   2000

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

// Returns the ID of the first group, which the caller closes, or -1.
static hid_t
create_groups(hid_t fileid, int num_group)
{
    hid_t first_group_id = -1;

    for(int i = 0; i < num_group; i++)
    {
        std::string group_name = GROUP_BASENAME + std::to_string(i);

        // The 1.6 H5Gcreate(fileid, name, 0) of write2.c creates the same
        // group as the 1.8 API with default property lists.
#ifdef H5_USE_16_API
        hid_t gid = H5Gcreate(fileid, group_name.c_str(), (size_t)0);
#else
        hid_t gid = H5Gcreate(fileid, group_name.c_str(), H5P_DEFAULT, H5P_DEFAULT, H5P_DEFAULT);
#endif
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

static hid_t
create_comtype(void)
{
    hid_t comp_type = H5Tcreate(H5T_COMPOUND, sizeof(samp_t));
    if(comp_type < 0)
        return -1;

    H5Tinsert(comp_type, "int1", HOFFSET(samp_t, int_type1), H5T_NATIVE_INT);
    H5Tinsert(comp_type, "int2", HOFFSET(samp_t, int_type2), H5T_NATIVE_INT);
    H5Tinsert(comp_type, "int3", HOFFSET(samp_t, int_type3), H5T_NATIVE_INT);
    H5Tinsert(comp_type, "int4", HOFFSET(samp_t, int_type4), H5T_NATIVE_INT);
    H5Tinsert(comp_type, "int5", HOFFSET(samp_t, int_type5), H5T_NATIVE_INT);
    H5Tinsert(comp_type, "float1", HOFFSET(samp_t, float_type1), H5T_NATIVE_FLOAT);
    H5Tinsert(comp_type, "float2", HOFFSET(samp_t, float_type2), H5T_NATIVE_FLOAT);
    H5Tinsert(comp_type, "float3", HOFFSET(samp_t, float_type3), H5T_NATIVE_FLOAT);
    H5Tinsert(comp_type, "double1", HOFFSET(samp_t, double_type1), H5T_NATIVE_DOUBLE);
    H5Tinsert(comp_type, "double2", HOFFSET(samp_t, double_type2), H5T_NATIVE_DOUBLE);

    const struct { const char* name; size_t offset; size_t size; } strs[] = {
        { "str1", HOFFSET(samp_t, string_type1), sizeof(((samp_t*)0)->string_type1) },
        { "str2", HOFFSET(samp_t, string_type2), sizeof(((samp_t*)0)->string_type2) },
        { "str3", HOFFSET(samp_t, string_type3), sizeof(((samp_t*)0)->string_type3) },
        { "str4", HOFFSET(samp_t, string_type4), sizeof(((samp_t*)0)->string_type4) },
    };
    for(const auto& s : strs)
    {
        hid_t str_type = H5Tcopy(H5T_C_S1);
        H5Tset_size(str_type, s.size);
        if(H5Tinsert(comp_type, s.name, s.offset, str_type) < 0)
        {
            std::cout << "Cannot insert " << s.name << " into comp_type" << std::endl;
            H5Tclose(str_type);
            H5Tclose(comp_type);
            return -1;
        }
        H5Tclose(str_type);
    }
    return comp_type;
}

static const std::vector<samp_t>&
sample_records(void)
{
    static std::vector<samp_t> samp_data;
    if(samp_data.empty())
    {
        samp_data.resize(NUM_RECORD);
        for(int i = 0; i < NUM_RECORD; i++)
        {
            samp_t& r = samp_data[i];
            r.int_type1 = 25+i;
            r.int_type2 = 3756+2*i;
            r.int_type3 = 4980-3*i;
            r.int_type4 = 123+4*i;
            r.int_type5 = 6500-5*i;
            r.float_type1 = 1.3569+0.5*i;
            r.float_type2 = -5.4401+15*i;
            r.float_type3 = 566.647-150*i;
            r.double_type1 = 0.5516+1.5*i;
            r.double_type2 = 555.876-15*i;
            for(int j = 0; j < 7; j++)
                r.string_type1[j] = 'a'+j+i%32;
            for(int j = 0; j < 12; j++)
                r.string_type2[j] = 'F'-j+i%64;
            for(int j = 0; j < 15; j++)
                r.string_type3[j] = 'T'-2*j+i%16;
            for(int j = 0; j < 40; j++)
                r.string_type4[j] = 't'+j+i%8;
        }
    }
    return samp_data;
}

// Returns the ID of the new dataset, which the caller closes, or -1.
static hid_t
create_datasets(hid_t gid, const std::vector<samp_t>& samp_data)
{
    hsize_t dims[1]       = {NUM_RECORD};
    hsize_t maxdims[1]    = {H5S_UNLIMITED};
    hsize_t chunk_dims[1] = {100};
    int gzip_level = 6;

    hid_t chunk_prop = H5Pcreate(H5P_DATASET_CREATE);
    if(chunk_prop < 0 || H5Pset_chunk(chunk_prop, 1, chunk_dims) < 0 ||
       H5Pset_shuffle(chunk_prop) < 0)
    {
        std::cout << "Cannot set the chunk and shuffle properties" << std::endl;
        return -1;
    }
    // HDF5 built without zlib cannot deflate, so the records are only shuffled.
    if(H5Zfilter_avail(H5Z_FILTER_DEFLATE) > 0 && H5Pset_deflate(chunk_prop, gzip_level) < 0)
    {
        std::cout << "Cannot set deflate filter" << std::endl;
        return -1;
    }

    hid_t datatype = create_comtype();
    hid_t dataspace = H5Screate_simple(1, dims, maxdims);
    if(datatype < 0 || dataspace < 0)
    {
        std::cout << "Cannot create the datatype or dataspace" << std::endl;
        return -1;
    }

#ifdef H5_USE_16_API
    hid_t did = H5Dcreate(gid, DATASETNAME, datatype, dataspace, chunk_prop);
#else
    hid_t did = H5Dcreate(gid, DATASETNAME, datatype, dataspace, H5P_DEFAULT, chunk_prop, H5P_DEFAULT);
#endif
    if(did < 0)
    {
        std::cout << "Cannot create dataset" << std::endl;
        return -1;
    }

    if(H5Dwrite(did, datatype, dataspace, dataspace, H5P_DEFAULT, samp_data.data()) < 0)
    {
        std::cout << "Cannot write data" << std::endl;
        H5Dclose(did);
        return -1;
    }
    H5Sclose(dataspace);
    H5Tclose(datatype);
    H5Pclose(chunk_prop);
    return did;
}

static int
update_dataset(const char* file_name, const char* dset_path)
{
    samp_t rec_to_add{};
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

    for(int times = 0; times < NUM_UPDATE; times++)
    {
        hid_t file_id = H5Fopen(file_name, H5F_ACC_RDWR, H5P_DEFAULT);
        if(file_id < 0)
        {
            std::cout << "Cannot open the existing HDF5 file" << std::endl;
            return -1;
        }
#ifdef H5_USE_16_API
        hid_t did = H5Dopen(file_id, dset_path);
#else
        hid_t did = H5Dopen(file_id, dset_path, H5P_DEFAULT);
#endif
        if(did < 0)
        {
            std::cout << "Cannot open the existing HDF5 dataset" << std::endl;
            return -1;
        }

        // Extend the dataset. H5Dextend is deprecated since 1.8.
        hsize_t size[1] = {NUM_RECORD + 1};
#ifdef H5_USE_16_API
        if(H5Dextend(did, size) < 0)
#else
        if(H5Dset_extent(did, size) < 0)
#endif
        {
            std::cout << "Cannot extend the dataset" << std::endl;
            return -1;
        }

        hid_t file_space = H5Dget_space(did);
        hsize_t offset[1] = {NUM_RECORD};
        size[0] = 1;
        hid_t mem_space = H5Screate_simple(1, size, NULL);
        if(file_space < 0 || mem_space < 0 ||
           H5Sselect_hyperslab(file_space, H5S_SELECT_SET, offset, NULL, size, NULL) < 0)
        {
            std::cout << "Cannot select the record to add" << std::endl;
            return -1;
        }

        hid_t datatype = H5Dget_type(did);
        if(datatype < 0 || H5Dwrite(did, datatype, mem_space, file_space, H5P_DEFAULT, &rec_to_add) < 0)
        {
            std::cout << "Cannot write dataset" << std::endl;
            return -1;
        }
        H5Tclose(datatype);
        H5Dclose(did);
        H5Sclose(file_space);
        H5Sclose(mem_space);
        H5Fclose(file_id);
    }
    return 0;
}

// Creates H5FILE_NAME with NUM_GROUP_1 groups and the record dataset in
// "/group_0", as the "add_rec" step expects to find it.
static int
create_record_file(void)
{
    hid_t fid = H5Fcreate(H5FILE_NAME, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT);
    if(fid < 0)
        return -1;
    hid_t gid = create_groups(fid, NUM_GROUP_1);
    if(gid < 0)
        return -1;
    hid_t did = create_datasets(gid, sample_records());
    if(did < 0)
        return -1;
    H5Dclose(did);
    H5Gclose(gid);
    return H5Fclose(fid) < 0 ? -1 : 0;
}

static std::string
run_file_name(const char* base, int i)
{
    return std::string(base) + "." + std::to_string(i);
}

// Benchmarks creating num_group groups, in one fresh file per run.
static void
measure_groups(Catch::Benchmark::Chronometer& meter, const char* base, int num_group)
{
    std::vector<hid_t> fids(meter.runs());
    std::vector<hid_t> gids(meter.runs(), -1);
    for(int i = 0; i < meter.runs(); i++)
        fids[i] = H5Fcreate(run_file_name(base, i).c_str(), H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT);

    meter.measure([&](int i) { gids[i] = create_groups(fids[i], num_group); });

    for(int i = 0; i < meter.runs(); i++)
    {
        if(gids[i] >= 0)
            H5Gclose(gids[i]);
        H5Fclose(fids[i]);
        H5Fdelete(run_file_name(base, i).c_str(), H5P_DEFAULT);
    }
}

TEST_CASE("write2 layout") {
#ifdef H5_USE_16_API
  printf("HDF5 1.6 API\n");
#endif
  printf("deflate filter %s\n", H5Zfilter_avail(H5Z_FILTER_DEFLATE) > 0 ? "available" : "not available, records are only shuffled");

  REQUIRE(create_record_file() == 0);

  hid_t fid2 = H5Fcreate(H5FILE_NAME2, H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT);
  REQUIRE(fid2 >= 0);
  hid_t gid2 = create_groups(fid2, NUM_GROUP_2);
  REQUIRE(gid2 >= 0);
  H5Gclose(gid2);
  REQUIRE(H5Fclose(fid2) >= 0);

  REQUIRE(update_dataset(H5FILE_NAME, DATASET_PATH) == 0);

  const struct { const char* file; int num_group; } files[] = {
      { H5FILE_NAME, NUM_GROUP_1 }, { H5FILE_NAME2, NUM_GROUP_2 } };
  for(const auto& f : files)
  {
      hid_t fid = H5Fopen(f.file, H5F_ACC_RDONLY, H5P_DEFAULT);
      REQUIRE(fid >= 0);
      H5G_info_t info;
      REQUIRE(H5Gget_info(fid, &info) >= 0);
      CHECK(info.nlinks == (hsize_t)f.num_group);

      std::string last = GROUP_BASENAME + std::to_string(f.num_group - 1);
      H5O_info2_t oinfo;
      REQUIRE(H5Oget_info_by_name3(fid, last.c_str(), &oinfo, H5O_INFO_BASIC, H5P_DEFAULT) >= 0);
      CHECK(oinfo.type == H5O_TYPE_GROUP);
      H5Fclose(fid);
  }

  hid_t fid = H5Fopen(H5FILE_NAME, H5F_ACC_RDONLY, H5P_DEFAULT);
  REQUIRE(fid >= 0);
#ifdef H5_USE_16_API
  hid_t did = H5Dopen(fid, DATASET_PATH);
#else
  hid_t did = H5Dopen(fid, DATASET_PATH, H5P_DEFAULT);
#endif
  REQUIRE(did >= 0);

  hid_t space = H5Dget_space(did);
  hsize_t dims[1] = {0};
  REQUIRE(H5Sget_simple_extent_dims(space, dims, NULL) == 1);
  CHECK(dims[0] == (hsize_t)NUM_RECORD + 1);

  // Read back a written record and the added one.
  hid_t datatype = create_comtype();
  hsize_t count[1] = {1};
  hid_t mem_space = H5Screate_simple(1, count, NULL);
  for(hsize_t at : {(hsize_t)12345, (hsize_t)NUM_RECORD})
  {
      samp_t rec{};
      REQUIRE(H5Sselect_hyperslab(space, H5S_SELECT_SET, &at, NULL, count, NULL) >= 0);
      REQUIRE(H5Dread(did, datatype, mem_space, space, H5P_DEFAULT, &rec) >= 0);
      if(at == NUM_RECORD)
      {
          CHECK(rec.int_type1 == 31);
          CHECK(rec.double_type2 == 3.44);
          CHECK(std::string(rec.string_type2, 11) == "FromBeijing");
      }
      else
      {
          const samp_t& expect = sample_records()[at];
          CHECK(rec.int_type5 == expect.int_type5);
          CHECK(rec.double_type1 == expect.double_type1);
          CHECK(std::memcmp(rec.string_type4, expect.string_type4, sizeof(rec.string_type4)) == 0);
      }
  }
  H5Sclose(mem_space);
  H5Tclose(datatype);
  H5Sclose(space);
  H5Dclose(did);
  H5Fclose(fid);
}

TEST_CASE("write2") {
  // now let's benchmark:
  BENCHMARK_ADVANCED("write2 10000 groups")(Catch::Benchmark::Chronometer meter) {
      measure_groups(meter, H5FILE_NAME, NUM_GROUP_1);
  };

  BENCHMARK_ADVANCED("write2 200000 groups")(Catch::Benchmark::Chronometer meter) {
      measure_groups(meter, H5FILE_NAME2, NUM_GROUP_2);
  };

  BENCHMARK_ADVANCED("write2 1000000 record")(Catch::Benchmark::Chronometer meter) {
      // Each run writes into "/group_0" of its own file of NUM_GROUP_1 groups.
      const std::vector<samp_t>& samp_data = sample_records();
      std::vector<hid_t> fids(meter.runs());
      std::vector<hid_t> gids(meter.runs());
      std::vector<hid_t> dids(meter.runs(), -1);
      for(int i = 0; i < meter.runs(); i++)
      {
          fids[i] = H5Fcreate(run_file_name(H5FILE_NAME, i).c_str(), H5F_ACC_TRUNC, H5P_DEFAULT, H5P_DEFAULT);
          gids[i] = create_groups(fids[i], NUM_GROUP_1);
      }

      meter.measure([&](int i) { dids[i] = create_datasets(gids[i], samp_data); });

      for(int i = 0; i < meter.runs(); i++)
      {
          if(dids[i] >= 0)
              H5Dclose(dids[i]);
          H5Gclose(gids[i]);
          H5Fclose(fids[i]);
          H5Fdelete(run_file_name(H5FILE_NAME, i).c_str(), H5P_DEFAULT);
      }
  };

  // Every run writes the same added record, so one file serves all runs.
  REQUIRE(create_record_file() == 0);
  BENCHMARK("write2 add_rec") {
      return update_dataset(H5FILE_NAME, DATASET_PATH);
  };
}
