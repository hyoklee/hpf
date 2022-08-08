<?php

include("analyzer.php");
include("util.php");

function get_best_record_one_day($host, $version, $task, $oneday)
{
  $yesterday = date('Ymd', mktime(0,0,0, date("m"), date("d")-$oneday-1, date("Y")));
  $today = date('Ymd', mktime(0,0,0, date("m"), date("d")-$oneday, date("Y")));  
  $best_time = 100000000.0;
  $query = "SELECT TestResult_Value FROM TestInstance WHERE Host='$host' AND DatasetName='$task' AND TestInstance_Date > $yesterday AND TestInstance_Date < $today AND LibraryVersion='$version'";
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

function record_best_from_one_day($hostname, $version, $instance, $best, $oneday)
{
  $yesterday = date('Ymd', mktime(0,0,0, date("m"), date("d")-$oneday-1, date("Y")));
  $today = date('Ymd', mktime(0,0,0, date("m"), date("d")-$oneday, date("Y")));
  // First, check if there exists a record for this instance.
  $query = "SELECT * FROM TestInstanceBest WHERE Host='$hostname' AND DatasetName='$instance' AND TestInstance_Date > $yesterday AND TestInstance_Date < $today AND LibraryVersion='$version'";
  $result = mysql_query($query); 
  $num = mysql_num_rows($result);
  if($num == 0){
    $query = "INSERT INTO TestInstanceBest SELECT * FROM TestInstance  WHERE Host='$hostname' AND DatasetName='$instance' AND  TestInstance_Date > $yesterday AND TestInstance_Date < $today AND LibraryVersion='$version' AND TestResult_Value='$best' LIMIT 1";
    $result = mysql_query($query);
    if(!$result){
      $message = 'invalid query: '.mysql_error()."\n";
      die($message);
    }
  }
  else{
    $message = "The best record for [".$hostname.",".$version.",".$yesterday.",".$instance."] already exists.\n";
    echo $message;
  }
}


$hostname = $argv[1];
$version = $argv[2];
$window = $argv[3];

$instances = get_test_instances_by_host($hostname, $version);
for($i=0; $i < count($instances) ; $i++){
  // Retrieve the best record.
  $best = get_best_record_one_day($hostname, $version, $instances[$i], $window);
  // Record it into a separate table.
  record_best_from_one_day($hostname, $version, $instances[$i], $best, $window);
}

?>