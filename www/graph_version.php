<?php
///////////////////////////////////////////////////////////////////////////////
//
// This script displays two version graphs of a single host for all tasks.
// 
// 
// Author:    Hyo-Kyung Lee
// 
// Copyright (C) 2007 The HDF Group
//
///////////////////////////////////////////////////////////////////////////////
include("jpgraph/src/jpgraph.php");
include("jpgraph/src/jpgraph_line.php");
include("jpgraph/src/jpgraph_date.php");
include("jpgraph/src/jpgraph_mgraph.php");
include("includes/data.inc.php"); 
include("includes/connect.inc.php");
include("includes/error.inc.php");
include("includes/array.inc.php");
include("util.php");

$host = $_GET['host'];
$last = $_GET['last'];
$end_date = date('Ymd', mktime(0,0,0, date("m"), date("d"), date("Y")));
$start_date = date('Ymd', mktime(0,0,0, date("m"), date("d")-$last, date("Y")));

$mgraph = new MGraph();
$mgraph->SetMargin(2,2,2,2);
$mgraph->SetFrame(true,'darkgray',2);

$routines = get_routine_names();
$colors = array("orange", "blue", "green");
$total = 0; // Total count of graph
$y = 0;

// For each routine
for($i=0; $i < count($routines); $i++){
  $rid = get_routine_id($routines[$i]);
  $actions = get_action_names($rid);
  //  For each action
  for($j=0; $j < count($actions); $j++){
    $aid = get_action_id($actions[$j], $rid);
    // For each instances
    $instances = get_test_instances($aid, "all", "1.6");
    for($l=0; $l < count($instances); $l++){
      $versions = get_library_versions($aid);
      for($k=0; $k < count($versions); $k++){
	if($last > 0)
	  // $query = "SELECT ti.TestResult_Value, DATE_FORMAT(ti.TestInstance_Date,'%m/%d') FROM TestInstanceBest ti WHERE Host='$host' AND DatasetName='$instances[$l]' AND LibraryVersion='$versions[$k]' AND TestInstance_Date BETWEEN '$start_date' AND '$end_date' ORDER BY TestInstance_Date DESC";
	   $query = "SELECT ti.TestResult_Value, DATE_FORMAT(ti.TestInstance_Date,'%m/%d') FROM TestInstanceBest ti WHERE Host='$host' AND DatasetName='$instances[$l]' AND LibraryVersion='$versions[$k]' AND TestInstance_Date BETWEEN '$start_date' AND '$end_date' ORDER BY TestInstance_Date";
	else
	  // $query = "SELECT ti.TestResult_Value, DATE_FORMAT(ti.TestInstance_Date,'%m/%d') FROM TestInstanceBest ti WHERE Host='$host' AND DatasetName='$instances[$l]' AND LibraryVersion='$versions[$k]' ORDER BY TestInstance_Date DESC";
	   $query = "SELECT ti.TestResult_Value, DATE_FORMAT(ti.TestInstance_Date,'%m/%d') FROM TestInstanceBest ti WHERE Host='$host' AND DatasetName='$instances[$l]' AND LibraryVersion='$versions[$k]' ORDER BY TestInstance_Date";
	  
	$result = mysql_query($query); 
	$num = mysql_num_rows($result);

	if ($num){
	  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
	    $datax[$i][$j][$k][] = $row[1]; // Dates
	    $datay[$i][$j][$k][] = $row[0]; // Values
	  }
	  
	  // DB may have missing values.
	  // Merge the two data to generate correct graph
	  // $datax[$i][$j][$k] = array_reverse($datax[$i][$j][$k]);
	  // $datay[$i][$j][$k] = array_reverse($datay[$i][$j][$k]);
	  $datak[$i][$j][$k] = array_combine($datax[$i][$j][$k], $datay[$i][$j][$k]);
	  
	  if($k > 0){
	    $datax_all[$i][$j] = inplacemerge($datax[$i][$j][$k], $datax_all[$i][$j]);
	  }
	  else{
	    $datax_all[$i][$j] = $datax[$i][$j][$k];
	  }
	}
	else {
	  error_log($query);
	}
	
      }// versions
      $graph[$i][$j] = new Graph(400,250);
      $graph[$i][$j]->SetScale("textlin");
      $graph[$i][$j]->yaxis->scale->SetAutoMin(0);
      $graph[$i][$j]->legend->Pos(0.0,0.0, 'right');

      
      for($k=0; $k < count($versions); $k++){
	$dataz[$i][$j][$k] = array_combine_all($datax_all[$i][$j], $datak[$i][$j][$k]);
	$lineplot[$i][$j][$k]=new LinePlot($dataz[$i][$j][$k]);
	$lineplot[$i][$j][$k]->SetColor($colors[$k]);
	$lineplot[$i][$j][$k]->SetLegend ($versions[$k],$instances[$l]);
	$lineplot[$i][$j][$k]->SetWeight(2);
	
	$graph[$i][$j]->Add($lineplot[$i][$j][$k]);

	
      }
      $graph[$i][$j]->img->SetMargin(60,60,20,70);
      $graph[$i][$j]->title->Set($instances[$l]);
      $graph[$i][$j]->xaxis->title->Set("Dates");
      $graph[$i][$j]->xaxis->SetTickLabels($datax_all[$i][$j]);

      if(count($datax_all[$i][$j]) > 10){
	$graph[$i][$j]->xaxis->SetTextTickInterval(count($datax_all[$i][$j])/10);
      }

      $graph[$i][$j]->yaxis->title->Set("Time(sec)");
      $graph[$i][$j]->title->SetFont(FF_FONT1,FS_BOLD);
      $graph[$i][$j]->yaxis->title->SetFont(FF_FONT1,FS_BOLD);
      $graph[$i][$j]->xaxis->SetFont(FF_ARIAL,FS_NORMAL,9);
      $graph[$i][$j]->yaxis->SetFont(FF_ARIAL,FS_NORMAL,9);
      $graph[$i][$j]->yaxis->SetTitleMargin(35);
      $graph[$i][$j]->xaxis->SetTitleMargin(35);
      $graph[$i][$j]->xaxis->SetLabelAngle(45);
      $graph[$i][$j]->yaxis->SetColor("red");
      $graph[$i][$j]->SetShadow();
      $graph[$i][$j]->footer->center->Set("$host");
      $mgraph->AddMix($graph[$i][$j],$total%2 * 400, $y, 85);
      ++$total;
      if($total % 2 == 0){
	$y += 250;
      }
      
    } // instances
  } // actions
} // routines

$mgraph->Stroke();

?>
