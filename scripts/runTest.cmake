# Simple test runner script
# Usage: cmake -DTEST_PROGRAM=path/to/test/program -DTEST_EXPECT=expected_exit_code -P runTest.cmake

# Check required variables
if(NOT DEFINED TEST_PROGRAM)
    message(FATAL_ERROR "TEST_PROGRAM is not defined")
endif()

if(NOT DEFINED TEST_EXPECT)
    set(TEST_EXPECT 0)
endif()

if(NOT DEFINED TEST_FOLDER)
    set(TEST_FOLDER ${CMAKE_CURRENT_BINARY_DIR})
endif()

# Get the test name from the program path
get_filename_component(TEST_NAME ${TEST_PROGRAM} NAME_WE)

# Run the test program
execute_process(
    COMMAND ${TEST_PROGRAM}
    WORKING_DIRECTORY ${TEST_FOLDER}
    RESULT_VARIABLE TEST_RESULT
    OUTPUT_VARIABLE TEST_OUTPUT
    ERROR_VARIABLE TEST_ERROR
    ECHO_OUTPUT_VARIABLE
    ECHO_ERROR_VARIABLE
)

# Write output to file if TEST_OUTPUT is defined
if(DEFINED TEST_OUTPUT)
    if(NOT "${TEST_OUTPUT}" STREQUAL "")
        file(WRITE ${TEST_FOLDER}/${TEST_NAME}.out "${TEST_OUTPUT}")
    endif()
endif()

# Check the test result
if(NOT "${TEST_RESULT}" STREQUAL "${TEST_EXPECT}")
    message(FATAL_ERROR "Test ${TEST_NAME} failed with exit code: ${TEST_RESULT}, expected: ${TEST_EXPECT}\n${TEST_OUTPUT}\n${TEST_ERROR}")
else()
    message("Test ${TEST_NAME} passed with exit code: ${TEST_RESULT}")
endif()
