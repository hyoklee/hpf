<?php
//
// Copyright (C) 2007-2014 The HDF Group
//
// Author: Hyo-Kyung Lee (hyoklee@hdfgroup.org)
// Last Update: 2014-08-25
//
include("jpgraph/src/jpgraph.php");
include("jpgraph/src/jpgraph_line.php");
include("jpgraph/src/jpgraph_date.php");
include("jpgraph/src/jpgraph_mgraph.php");
include("includes/data.inc.php"); 
include("includes/connect.inc.php");
include("includes/error.inc.php");
include("includes/array.inc.php");
include("util.php");

// Get version information from URL parameter.
$version = $_GET["version"];

// Create the graph label.
$graph_version =  "HDF5 ".$version;
$end_date = $_GET["end"];
$start_date = $_GET["start"];

$mgraph = new MGraph();
$mgraph->SetMargin(2,2,2,2);
$mgraph->SetFrame(true,'darkgray',2);

$routines = get_routine_names();
$colors = array("orange", "blue", "green", "red", "yellow");

// Total count of graph.
$total = 0; 
$y = 0;

$datax_all = array();
$dataz = array();
$datak = array();

// For each routine
for($i=0; $i < count($routines); $i++){
  $rid = get_routine_id($routines[$i]);
  $actions = get_action_names($rid);
  //  For each action
  for($j=0; $j < count($actions); $j++){
    $aid = get_action_id($actions[$j], $rid);
    // For each instance
    unset($datax_all[$i][$j]);                  
    $instances = get_test_instances($aid, "all", $version);
    for($l=0; $l < count($instances); $l++){
	$hosts = get_host_names($aid);
	$error = 0;
	for($k=0; $k < count($hosts); $k++){
	  $query = "SELECT ti.TestResult_Value, DATE_FORMAT(ti.TestInstance_Date,'%m/%d') FROM TestInstanceBest ti WHERE Host='$hosts[$k]' AND DatasetName='$instances[$l]' AND LibraryVersion='".$version."' AND TestInstance_Date BETWEEN '$start_date' AND '$end_date' ORDER BY TestInstance_Date DESC";
	  $result = mysql_query($query); 
	  $num = mysql_num_rows($result);
	  if ($num > 1){

            unset($datax[$i][$j][$k], $datay[$i][$j][$k], $datak[$i][$j][$k], $dataz[$i][$j][$k]);
	    while ($row = mysql_fetch_array($result, MYSQL_NUM)){
                $datax[$i][$j][$k][] = $row[1]; // date
                $datay[$i][$j][$k][] = $row[0]; // result
	    }
	    // DB may have missing values.
	    // Merge the two data to generate correct graph
	    $datax[$i][$j][$k] = array_reverse($datax[$i][$j][$k]);
	    $datay[$i][$j][$k] = array_reverse($datay[$i][$j][$k]);
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
	}// hosts

	$graph[$i][$j] = new Graph(400,250);
	$graph[$i][$j]->SetScale("textlin");
	$graph[$i][$j]->yaxis->scale->SetAutoMin(0);
	$graph[$i][$j]->legend->Pos(0.0,0.0, 'left');

      
	for($k=0; $k < count($hosts); $k++){
	  $a = array_combine_all($datax_all[$i][$j], $datak[$i][$j][$k]);
	  if($a != NULL) {
	    $dataz[$i][$j][$k] = $a;
	    $lineplot[$i][$j][$k]=new LinePlot($dataz[$i][$j][$k]);
	    $lineplot[$i][$j][$k]->SetColor($colors[$k]);
	    $lineplot[$i][$j][$k]->SetLegend (get_short_hostname($hosts[$k]),$instances[$l]);
	    $lineplot[$i][$j][$k]->SetWeight(2);
	
	    $graph[$i][$j]->Add($lineplot[$i][$j][$k]);
	  }
          else {
	    echo "No records were found for the test: <b>".$instances[$l]."</b>.<br/>";
	    echo "Please report this to <a href=\"mailto:hyoklee@hdfgroup.org\">hyoklee@hdfgroup.org</a> now.<br/>";
	    exit(0); 
	  }
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
	$graph[$i][$j]->footer->center->Set($graph_version);
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
