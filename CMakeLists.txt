cmake_minimum_required(VERSION 3.12)
project(efc_no)

include(FetchContent)
FetchContent_Declare(
  catch2
  GIT_REPOSITORY https://github.com/catchorg/Catch2.git
  GIT_TAG v2.11.0)

FetchContent_GetProperties(catch2)
if(NOT catch2_POPULATED)
  FetchContent_Populate(catch2)
  add_subdirectory(${catch2_SOURCE_DIR} ${catch2_BINARY_DIR})
endif()

find_package(Threads)

set(FIND_HDF_COMPONENTS C static)

find_package(HDF5 NAMES "hdf5" COMPONENTS ${FIND_HDF_COMPONENTS})
if(HDF5_FOUND)
  if(HDF5_static_C_FOUND)
    set(LINK_LIBS ${LINK_LIBS} ${HDF5_C_STATIC_LIBRARY})
  endif()
else()
  message(FATAL_ERROR "HDF5 is Required")
endif()

INCLUDE_DIRECTORIES(${HDF5_INCLUDE_DIR})

set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wall -O2")

set(efc_no_srcs src/efc_no.cpp)
add_executable(efc_no ${efc_no_srcs})
target_link_libraries(efc_no ${LINK_LIBS} Catch2::Catch2)
target_include_directories(efc_no PUBLIC ${MPI_C_INCLUDE_DIRS})
set_property(TARGET efc_no
      APPEND PROPERTY COMPILE_DEFINITIONS STANDALONE
)

set(cmpd_subset_srcs src/cmpd_subset.cpp)
add_executable(cmpd_subset ${cmpd_subset_srcs})
target_link_libraries(cmpd_subset ${LINK_LIBS} Catch2::Catch2)
target_include_directories(cmpd_subset PUBLIC ${MPI_C_INCLUDE_DIRS})
set_property(TARGET cmpd_subset
       APPEND PROPERTY COMPILE_DEFINITIONS STANDALONE
)

set(TEST_nprocs 6)

add_test(
   NAME CLEAR_efc_no
   COMMAND ${CMAKE_COMMAND} -E remove *.h5
)
add_test(NAME TEST_efc_no COMMAND "${CMAKE_COMMAND}"
    -D "TEST_PROGRAM=$<TARGET_FILE:efc_no>"
    -D "TEST_EXPECT=0"
    -D "TEST_SKIP_COMPARE:BOOL=true"
    -D "TEST_OUTPUT=efc_no.out"
    -D "TEST_FOLDER=${PROJECT_BINARY_DIR}"
    -P "${PROJECT_SOURCE_DIR}/scripts/runTest.cmake"
)
set_tests_properties(TEST_efc_no PROPERTIES DEPENDS CLEAR_efc_no)
#[[
add_test(
   NAME CLEAR_cmpd_subset
   COMMAND ${CMAKE_COMMAND} -E remove *.h5
)
add_test(NAME TEST_cmpd_subset COMMAND "${CMAKE_COMMAND}"
     -D "TEST_PROGRAM=$<TARGET_FILE:cmpd_subset>"
     -D "TEST_EXPECT=0"
     -D "TEST_SKIP_COMPARE:BOOL=true"
     -D "TEST_OUTPUT=cmpd_subset.out"
     -D "TEST_FOLDER=${PROJECT_BINARY_DIR}"
     -P "${PROJECT_SOURCE_DIR}/scripts/runTest.cmake"
)
set_tests_properties(TEST_cmpd_subset PROPERTIES DEPENDS CLEAR_cmpd_subset)
]]
set(DART_TESTING_TIMEOUT 1200
    CACHE STRING
    "Timeout in seconds for each test(default 1200=20minutes)"
)
enable_testing()
include(CTest)
include(${PROJECT_SOURCE_DIR}/CTestConfig.cmake)

target_compile_options(
  ${PROJECT_NAME}
  PRIVATE
    $<$<CXX_COMPILER_ID:MSVC>:/DCATCH_CONFIG_ENABLE_BENCHMARKING>
    $<$<OR:$<CXX_COMPILER_ID:GNU>,$<CXX_COMPILER_ID:Clang>,$<CXX_COMPILER_ID:AppleClang>>:-DCATCH_CONFIG_ENABLE_BENCHMARKING>
)

target_compile_options(
   cmpd_subset  
   PRIVATE
     $<$<CXX_COMPILER_ID:MSVC>:/DCATCH_CONFIG_ENABLE_BENCHMARKING>
     $<$<OR:$<CXX_COMPILER_ID:GNU>,$<CXX_COMPILER_ID:Clang>,$<CXX_COMPILER_ID:AppleClang>>:-DCATCH_CONFIG_ENABLE_BENCHMARKING>
)
