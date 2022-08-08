#!/bin/bash
#
# This script uploads the missing records between two dates.
# 
# Usage: ./upload.sh 20140615 20140820
#
PHP="php"
PERF_SRC="/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perflib"
PHP_SRC="/mnt/hdf/hyoklee/hdf5perf/trunk/hdf5perfphp/hdf"
hostname=`hostname | cut -d. -f1`
currentdate=$1
loopenddate=$(/bin/date --date "$2 1 day" +%Y%m%d)
today=`date +%Y%m%d`
window=0

for version in "1.9" "1.8" "1.6"
  do
    until [ "$currentdate" == "$loopenddate" ]
    do 
       filename="results.$version.$currentdate.xml"
       echo $PHP $PHP_SRC/TestInstance.php $PERF_SRC/$filename
       $PHP $PHP_SRC/TestInstance.php $PERF_SRC/$filename
       # currentdate=$(/bin/date --date "$currentdate 1 day" +%Y%m%d)
       currentdate=$(/bin/date --date "$currentdate 1 day" +%Y%m%d)
       ((window++))
    done
    days_ago=0
    until [ "$currentdate" == "$today" ]
    do 
       currentdate=$(/bin/date --date "$currentdate 1 day" +%Y%m%d)
       ((days_ago++))
    done

    for i in $(seq 1 $window)
    do 
	x=`expr $i + $days_ago`
	echo $PHP $PHP_SRC/record_manually_1.php $hostname $version $x
	$PHP $PHP_SRC/record_manually_1.php $hostname $version $x
    done
    currentdate=$1
    window=0
done
$PHP $PHP_SRC/sync.php

