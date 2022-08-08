<?
//=======================================================================
// File:	mailer.php
// Description:	This script sends out e-mail when performance of HDF
//              is not normal.
// Created: 	2007-07-27
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
//
// Copyright (c) 2007-2015 The HDF Group, Inc.  All rights reserved.
//========================================================================

include("analyzer.php");
include("util.php");

$emails = "";
$names  = "";
get_subscribers($emails, $names);

$url_base = "https://hpf.hdfgroup.org/daily.php?";
$version1= "1.9";
$version2= "1.6";
$version3= "1.8";
$start_date = date('Ymd', mktime(0,0,0, date("m"), date("d")-7, date("Y")));
$end_date = date('Ymd', mktime(0,0,0, date("m"), date("d"), date("Y")));

$url_v1 = $url_base."version=".$version1."&start=".$start_date."&end=".$end_date;
$url_v2 = $url_base."version=".$version2."&start=".$start_date."&end=".$end_date;
$url_v3 = $url_base."version=".$version3."&start=".$start_date."&end=".$end_date;

// Subject of the e-mail
$subject = "HDF Performance Warning Report ";

// Message 
$message_1 = '
<html>
<head>
   <title>HDF Performance Warning Report</title>
</head>
<body>
   <p>Here is the performance warning report.</p>
   <table border=1>
       <tr><th>Version</th><th>Host</th><th>Task</th><th>Period</th><th>Increase in Time(sec)</th><th>SVN Revision</th></tr>
';
$message_3 = '</table>

<p>View today\'s graph for version <a href="'.$url_v1.'">1.9</a>, <a href="'.$url_v3.'">1.8</a> or
 <a href="'.$url_v2.'">1.6</a>.
<br>Visit HDF Performance Framework <a href="https://hpf.hdfgroup.org/index.html">website</a>.
<p><a href="https://hpf.hdfgroup.org/unsubscribe.html">Unsubscribe</a> this alert.';
// HTML header.
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "To: ".$names."\r\n";
$headers .= "From: HDF Performance Framework <hyoklee@hdfgroup.org>\r\n";


$message_2 = ""; // Message for table in the body.
$is_detected = false; // Flag for anomaly.
$routines = get_routine_names();

// For each routine
for($i=0; $i < count($routines); $i++){
  $rid = get_routine_id($routines[$i]);
  $actions = get_action_names($rid);
    
  //  For each action
  for($j=0; $j < count($actions); $j++){
    $aid = get_action_id($actions[$j], $rid);
    $hosts = get_host_names($aid);
    //    For each machine
    for($k=0; $k < count($hosts); $k++){
      $versions = get_hdf_versions($aid, $hosts[$k]);
      //     For each version
      for($l=0; $l < count($versions); $l++){
	//   For each instance
	$svn_revision = get_svn_revision($hosts[$k], $versions[$l]); 
	$instances = get_test_instances($aid, $hosts[$k], $versions[$l]);
	for($m=0; $m < count($instances); $m++){
	  // Detect anonmaly for yesterday.
	  $increase = detect_anomaly($hosts[$k], $instances[$m], $versions[$l],  7, 1);
	  $pretty = sprintf("%.1f", $increase * 100.0);
	  $pretty = $pretty."%";

	  if((float)$increase > 0.2){
	    $message_2 = $message_2."<tr><td>".$versions[$l]."</td><td>".$hosts[$k]."</td><td>".$instances[$m]."</td><td align=center>1 vs 7</td><td bgcolor=#FFCCCC>".$pretty."</td><td>".$svn_revision."</td></tr>\n";
	    $is_detected = true;
	  }
	  else if(((float)$increase < -0.2 &&  (float)$increase > -1.0)){
	    $message_2 = $message_2."<tr><td>".$versions[$l]."</td><td>".$hosts[$k]."</td><td>".$instances[$m]."</td><td align=center>1 vs 7</td><td bgcolor=#00CCFF>".$pretty."</td><td>".$svn_revision."</td></tr>\n";
	    $is_detected = true;
	  }	  
	  else if($increase == -2){
	    $message_2 = $message_2."<tr><td>".$versions[$l]."</td><td>".$hosts[$k]."</td><td>".$instances[$m]."</td><td align=center>1 vs 7</td><td bgcolor=red>No record is found for last 1 day.</td><td>".$svn_revision."</td></tr>\n";
	    $is_detected = true;
	  }
	  else if($increase == -4){
	    $message_2 = $message_2."<tr><td>".$versions[$l]."</td><td>".$hosts[$k]."</td><td>".$instances[$m]."</td><td align=center>1 vs 7</td><td bgcolor=green>No records found for last 7 days.</td><td>".$svn_revision."</td></tr>\n";
	    $is_detected = true;
	  }

	  
	  // Detect anonmaly for last week.
	  $increase = detect_anomaly($hosts[$k], $instances[$m], $versions[$l],  30, 7);
	  $pretty = sprintf("%.1f", $increase * 100.0);
	  $pretty = $pretty."%";
	  // Give warning if there's 20% of increase in performance.
	  if((float)$increase > 0.2){
	    $message_2 = $message_2."<tr><td>".$versions[$l]."</td><td>".$hosts[$k]."</td><td>".$instances[$m]."</td><td align=center>7 vs 30</td><td bgcolor=#FF99CC>".$pretty."</td><td>".$svn_revision."</td></tr>\n";
	    $is_detected = true;
	  }
	  else if(((float)$increase < -0.2 &&  (float)$increase > -1.0)){
	    $message_2 = $message_2."<tr><td>".$versions[$l]."</td><td>".$hosts[$k]."</td><td>".$instances[$m]."</td><td align=center>7 vs 30</td><td bgcolor=#0099FF>".$pretty."</td><td>".$svn_revision."</td></tr>\n";
	    $is_detected = true;
	  }	  
	  else if($increase == -2){
	    $message_2 = $message_2."<tr><td>".$versions[$l]."</td><td>".$hosts[$k]."</td><td>".$instances[$m]."</td><td align=center>7 vs 30</td><td bgcolor=red>No records found for last 7 days.</td><td>".$svn_revision."</td></tr>\n";
	    $is_detected = true;
	  }
	  else if($increase == -4){
	    $message_2 = $message_2."<tr><td>".$versions[$l]."</td><td>".$hosts[$k]."</td><td>".$instances[$m]."</td><td align=center>7 vs 30</td><td bgcolor=green>No records found for last 30 days.</td><td>".$svn_revision."</td></tr>\n";
	    $is_detected = true;
	  }
	  
	} // instances
      } // versions
    } // hosts
  } // actions
} // routines
mysql_close($link);

if($is_detected){
  // $svn_diff = get_yesterday_revision();
  // $message_4 = "\n<p>Here's the svn diff for last two days:<br><pre>".$svn_diff."</pre></body></html>";
  // $message = $message_1.$message_2.$message_3.$message_4;
  $message = $message_1.$message_2.$message_3;
  mail($emails, $subject, $message, $headers);
}


?>