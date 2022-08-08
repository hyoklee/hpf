<?php

include ("includes/data.inc.php"); 
include ("includes/connect.inc.php");

date_default_timezone_set('America/Chicago');

function get_library_versions()
{
  $versions = array();  
  $query = "select distinct(LibraryVersion) from TestInstanceBest"; 
  $result = mysql_query($query);

  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $versions[] = $row[0];
  }
  return $versions;  
}

function get_routine_names()
{
  $routines = array();  
  $query = "select distinct(TestRoutine_Name) from TestRoutineBest"; 
  $result = mysql_query($query);

  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $routines[] = $row[0];
  }
  return $routines;  
}

function get_routine_id($name)
{
  $query = "select TestRoutine_ID from TestRoutineBest where TestRoutine_Name = '".$name."'"; 
  $result = mysql_query($query);
  if(!$result){
    die('We can\'t get the routine id for the '.$name.' routine.');
  }
  else{
    return mysql_result($result, 0);
  }
}

function get_action_names($routine)
{
  $actions = array();  
  $query = "select distinct(TestAction_Name) from TestActionBest where TestRoutine_ID = $routine"; 
  $result = mysql_query($query);

  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $actions[] = $row[0];
  }
  return $actions;  
}

function get_action_id($name, $rid)
{
  $query = "select TestAction_ID from TestActionBest where TestAction_Name='".$name."' AND TestRoutine_ID='".$rid."'"; 
  $result = mysql_query($query);
  if(!$result){
    die('We can\'t get the test action id for the '.$name.' action.');
  }
  else{
    return mysql_result($result, 0);
  }
}

function get_host_names($aid)
{
  $hosts = array();  
  if($aid)
    $query = "select distinct(Host) from TestInstanceBest where TestAction_ID = $aid ORDER BY Host";
  else
    $query = "select distinct(Host) from TestInstanceBest ORDER BY Host";
  $result = mysql_query($query);

  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    // Kagiso is turned off. <hyokyung 2009.09.22. 12:19:53>
    // Smirom is turned off. <hyokyung 2009.10.14. 10:54:01>
    // Hdfdap is turned off. <hyokyung 2011.08.12. 13:38:01>
    // Amani is turned off.  <hyokyung 2012.07.25. 17:54:08>
    // Linew is turned off. <hyokyung 2013.09.04. 15:49:58>
    if(!($row[0] == "linew" || $row[0] == "kagiso" || $row[0] == "smirom" || $row[0] == "hdfdap" || $row[0] == "amani" ))	
      $hosts[] = $row[0];
  }
  return $hosts;  
}

function get_hdf_versions($aid, $host)
{
  $versions = array();
  $query = "select distinct(LibraryVersion) from TestInstanceBest where TestAction_ID = $aid";
  if($host != "all"){
    $query = $query." AND Host = '$host'";
  }
  $result = mysql_query($query);

  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $versions[] = $row[0];
  }
  return $versions;  
}

function get_test_instances_all()
{
  $instances = array();
  
  $query = "select distinct(DatasetName) from TestInstanceBest";
  // echo $query;
  $result = mysql_query($query);

  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $instances[] = $row[0];
  }
  return $instances;  
}



function get_test_instances_by_host($host, $version)
{
  $instances = array();
  
  $query = "select distinct(DatasetName) from TestInstance where Host = '$host' and LibraryVersion = '$version'";
  // echo $query;
  $result = mysql_query($query);

  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $instances[] = $row[0];
  }
  return $instances;  
}


function get_test_instances($aid, $host, $version)
{
  $instances = array();
  
  $query = "select distinct(DatasetName) from TestInstanceBest where TestAction_ID = $aid";
  
  if($host != "all"){
    $query = $query." AND Host = '$host'";
  }
  
  if($version != "all"){
    $query = $query." AND LibraryVersion = '$version'";
  }

  $result = mysql_query($query);

  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $instances[] = $row[0];
  }
  return $instances;  
}


function get_yesterday_revision()
{
  // Generate svn diff like this:
  // svn diff --revision '{2007-08-07}:{2007-08-08}' http://svn.ad.hdfgroup.org/hdf5/trunk;
  // Since mailer.php cron job is run next day, it's right to subtract one day for today.
  $today = date('Y-m-d', mktime(0,0,0, date("m"), date("d")-1, date("Y")));;
  $yesterday = date('Y-m-d', mktime(0,0,0, date("m"), date("d")-2, date("Y")));;
  $diff_command = "svn diff -r '{".$yesterday."}:{".$today."}' http://svn.ad.hdfgroup.org/hdf5/trunk";
  $svn_diff = shell_exec($diff_command);
  return $svn_diff;
}

function get_svn_revision($host, $version)
{
  $yesterday = date('Ymd', mktime(0,0,0, date("m"), date("d")-1, date("Y")));;
  $query = "SELECT svn_version FROM subversion  WHERE host='$host' AND checkout_date > $yesterday AND library_version='$version'";
  $result = mysql_query($query);
  if(!$result){
    $message = 'invalid query: '.mysql_error()."\n";
    die($message);
  }
  else{
    $row = mysql_fetch_array($result, MYSQL_NUM);
    return $row[0];
  }
}

function get_last_revision()
{
  $curr_revision = shell_exec("/usr/hdf/bin/svn info  http://svn.ad.hdfgroup.org/hdf5/trunk | grep Revision | cut -d' ' -f2"); // Get the latest revision.
  $curr_revision = trim($curr_revision); // Remove newline character.
  $prev_revision = $curr_revision - 1; // Previous revision.
  $diff_command = "svn diff -r".$prev_revision.":".$curr_revision." http://svn.ad.hdfgroup.org/hdf5/trunk";
  $svn_diff = shell_exec($diff_command);
  return $svn_diff;
}

// Pass by reference.
function get_subscribers(&$emails, &$names)
{
  $query = "select name,email from subscribe";

  $result = mysql_query($query);
  $first = true;
  $comma = "";
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){

    $emails = $emails.$comma.$row[1];
    $names  = $names.$comma.$row[0].'<'.$row[1].'>';
    
    if($first){
      $first = false;
      $comma = ",";
    }
    
  }
}

function get_short_hostname($full_hostname)
{
  $findme = ".";
  $pos = strpos($full_hostname, $findme);
  if($pos == false){
    $short_host_name = $full_hostname;
  }
  else{
    $short_host_name = substr($full_hostname, 0, $pos);
  }
  return $short_host_name;
}

function clean_today_data_by_host($hostname, $version)
{
  $today = date('Ymd');
  $query = "DELETE FROM TestInstance  WHERE Host='$hostname' AND TestInstance_Date > $today AND LibraryVersion='$version'";
  $result = mysql_query($query);
  if(!$result){
    $message = 'invalid query: '.mysql_error()."\n";
    die($message);
  }
}

function record_best($hostname, $version, $instance, $best)
{
  $today = date('Ymd');
  $query = "INSERT INTO TestInstanceBest SELECT * FROM TestInstance  WHERE Host='$hostname' AND DatasetName='$instance' AND  TestInstance_Date > $today AND LibraryVersion='$version' AND TestResult_Value='$best' LIMIT 1";
  $result = mysql_query($query);
  if(!$result){
    $message = 'invalid query: '.mysql_error()."\n";
    die($message);
  }
}

// $names = get_library_versions();

// print_r($names);

?>