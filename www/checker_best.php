<?php

//=======================================================================
// File:	checker_best.php
// Description:	This script records the best case among the test instances.
// Created: 	2007-10-19
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
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

// For each test instance,
for($i=0; $i < count($instances) ; $i++){
  // Retrieve the best record.
  $best = get_best_record($hostname, $version, $instances[$i]);
  // Record it into a separate table.
  record_best($hostname, $version, $instances[$i], $best);
}

?>