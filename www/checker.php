<?
//=======================================================================
// File:	checker.php
// Description:	This script writes a temporary file called "/tmp/chicago".
//              when there is an increase of 10% in performance.
// Created: 	2007-07-27
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
// Version:	$Id$
//
// Copyright (c) 2007 The HDF Group, Inc.  All rights reserved.
//========================================================================

include("analyzer.php");
include("util.php");

$hostname = shell_exec('hostname'); // Get the hostname.
$hostname = trim($hostname); // Remove '\n' at the end of the string.
$hostname = get_short_hostname($hostname);
$version = $argv[1];

$instances = get_test_instances_by_host($hostname, $version);
// print_r($instances);

$is_detected = false; // Flag for anomaly.

for($i=0; $i < count($instances) && !$is_detected ; $i++){
  // Check if performance increased by 10%.
  $increase = detect_anomaly($hostname, $instances[$i], $version,  7, 1);
  if((float)$increase > 0.2){
    $is_detected = true;
  }
}

if($is_detected)
{
  // Create a dummy file called '/tmp/chicago'.
  // This dummy file will be used by the shell script.
  if(($fh=fopen('/tmp/chicago', 'w'))== FALSE){
    die('Failed to create /tmp/chicago for writing!');
  }
  echo("Creating /tmp/chicago\n");
  fwrite($fh, $increase);
  fclose($fh);

  // Clean up DB
  clean_today_data_by_host($hostname, $version);
    
}
?>