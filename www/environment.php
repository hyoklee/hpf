<?php

include("util.php");

function read_file($filename)
{
  $content = "";
  
  $handle = @fopen("$filename", "r");
  if($handle){
    while(!feof($handle)){
      $line = fgets($handle);
      $content = $content.$line;
    }
    fclose($handle);
  }
  else{
    print "Failed to open file: $filename";
  }
  return $content;
}
//=======================================================================
// File:	environment.php
// Description:	This script writes environment variables into database.
// Created: 	2007-12-04
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
// Version:	$Id$
//
// Copyright (c) 2007 The HDF Group, Inc.  All rights reserved.
//========================================================================
// Get the hostname.
$hostname = shell_exec('hostname');

// Remove '\n' at the end of the string.
$hostname = trim($hostname);

// Get short hostname. (e.g. linew from linew.ad.hdfgroup.org)
$hostname = get_short_hostname($hostname);
$hdf5_version = $argv[1];

// Get the content of the'uname' output.
$uname = mysql_escape_string(read_file($argv[2]));
// Get the content of CC version output.
$cc_version = mysql_escape_string(read_file($argv[3]));
// Get the content of CPP version output.
$cpp_version = mysql_escape_string(read_file($argv[4]));
// Get the content of HDF5 configuration option.
$config_hdf5 = mysql_escape_string(read_file($argv[5]));
// Get the content of performance framework configuration option.
$config_perf = mysql_escape_string(read_file($argv[6]));
// Get the content of HDF5 compilation options.
$compiler_options_hdf5 = mysql_escape_string(read_file($argv[7]));
// Get the content of performance framework compilation options.
$compiler_options_perf = mysql_escape_string(read_file($argv[8]));

$query = "INSERT INTO environment VALUES(NULL, NOW(),
'$hostname',
'$hdf5_version',
'$uname',
'$cc_version',
'$cpp_version',
'$config_hdf5',
'$config_perf',
'$compiler_options_hdf5',
'$compiler_options_perf'
)";

$result = mysql_query($query);
if(!$result){
  $message = 'invalid query: '.mysql_error()."\n";
  die($message);   
}
mysql_close($link);

?>