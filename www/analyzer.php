<?php
//=======================================================================
// File:	analyzer.php
// Description:	This script analyzes the past performance of MySQL data.
// Created: 	2007-07-27
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
// Ver:		$Id$
//
// Copyright (c) 2007 The HDF Group, Inc.  All rights reserved.
//========================================================================
include("includes/data.inc.php");
include("includes/connect.inc.php");

function detect_anomaly($host, $task, $version, $period_past, $period_current)
{
  
  $end_date = date('Ymd');
  $start_date = date('Ymd', mktime(0,0,0, date("m"), date("d")-$period_current, date("Y")));
  $start_date_past = date('Ymd', mktime(0,0,0, date("m"), date("d")-$period_past-$period_current, date("Y")));
  $end_date_past = date('Ymd', mktime(0,0,0, date("m"), date("d")-$period_current, date("Y")));
    
  // Pick data from past periods.
  // $query = "SELECT TestResult_Value FROM TestInstance WHERE Host='".$host."' AND DatasetName='".$task."' ORDER BY TestInstance_Date DESC LIMIT ".$period_past;
  $query = "SELECT TestResult_Value FROM TestInstanceBest  WHERE Host='$host' AND DatasetName='$task' AND TestInstance_Date BETWEEN '$start_date_past' AND '$end_date_past' AND LibraryVersion='$version'";
  // print "$query<br>";
  $result = mysql_query($query); 
  $num = mysql_num_rows($result); 
  $sum = 0.0;
  
  if ($num){
    while ($row = mysql_fetch_array($result, MYSQL_NUM)){
      $data_past[] = $row[0];
    }
    for($i=0; $i < count($data_past); $i++){
      $sum += $data_past[$i];
    }
    $past_average = $sum / (float) count($data_past);
    // print "$past_average<br>";
    
  }
  else{
    // No past records found.
    return -4;
  }

    
  // Pick data from current periods.
  $query = "SELECT TestResult_Value FROM TestInstanceBest  WHERE Host='$host' AND DatasetName='$task' AND TestInstance_Date BETWEEN '$start_date' AND '$end_date' AND LibraryVersion='$version'";
  // print "$query<br>";  
  $result = mysql_query($query); 
  $num = mysql_num_rows($result); 
  $sum_current = 0.0;
  if ($num){
    while ($row = mysql_fetch_array($result, MYSQL_NUM)){
      $data_current[] = $row[0];
    }
    for($i=0; $i < count($data_current); $i++){
      $sum_current += $data_current[$i];
    }
    $current_average = $sum_current / (float)count($data_current);
    // print "$current_average<br>";
  }  
  else{
    // No current records found.
    return -2;
  }

  $delta = ($current_average - $past_average) / $past_average;

  // Report the increase in average.
  return $delta;

}

function get_best_record($host, $version, $task)
{
  $today = date('Ymd');  
  $best_time = 100000000.0;
  $query = "SELECT TestResult_Value FROM TestInstance WHERE Host='$host' AND DatasetName='$task' AND TestInstance_Date > $today AND LibraryVersion='$version'";
  $result = mysql_query($query); 
  $num = mysql_num_rows($result);
  if ($num){
    while ($row = mysql_fetch_array($result, MYSQL_NUM)){
      $data_current[] = $row[0];
    }
    for($i=0; $i < count($data_current); $i++){
      if($best_time > $data_current[$i]){
	$best_time = $data_current[$i];
      };
    }
    return $best_time;
  }  
  else{
    // No current records found.
    return -1;
  }
}

?>