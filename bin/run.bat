rmdir /q /s build
mkdir build
cd build
cmake  -DCMAKE_TOOLCHAIN_FILE=C:/src/vcpkg.microsoft/scripts/buildsystems/vcpkg.cmake ..
ctest -T Build
ctest -C Release -T Test
cd ..
REM cd Release
REM .\vds
REM cd ..\..

