<?php

include("jpgraph/src/jpgraph.php");
include("jpgraph/src/jpgraph_line.php");
include("jpgraph/src/jpgraph_date.php");
include("jpgraph/src/jpgraph_mgraph.php");
include("jpgraph/src/jpgraph_utils.inc.php");
include("includes/data.inc.php"); 
include("includes/connect.inc.php");
include("includes/error.inc.php");
include("includes/array.inc.php");

$routine = $_POST["routine"];
$rid = $_POST["rid"];
$action = $_POST["action"];
$aid = $_POST["aid"];
$host = $_POST["host"];
$version = $_POST["version"];
$instance = $_POST["instance"];
$start_date = $_POST["start_date"];
$end_date = $_POST["end_date"];
$sd = str_replace("/", "", $start_date); 
$ed = str_replace("/", "", $end_date);

$query = "SELECT ti.TestResult_Value, DATE_FORMAT(ti.TestInstance_Date,'%m/%d') FROM TestInstanceBest ti WHERE Host='$host' AND DatasetName='$instance' AND LibraryVersion='$version' AND ti.TestInstance_Date BETWEEN '$start_date' AND '$end_date'  ORDER BY TestInstance_Date";


$result = mysql_query($query); 
$num = mysql_num_rows($result); 

if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $datax[] = $row[1];
    $datay[] = $row[0];
  }
}
else{
  echo "No records were found.";
  exit(0);
}

// Create a graph. 
$graph = new Graph(480,240);    
$graph->SetScale("textlin");
$graph->yaxis->scale->SetAutoMin(0);

// Create the linear plot
$lineplot=new LinePlot($datay);

// Add the plot to the graph
$graph->Add($lineplot);

$graph->img->SetMargin(60,60,20,70);
$graph->title->Set($instance." on ".$host);
$graph->xaxis->title->Set("Dates");
// Auto tick doesn't work well.
$graph->xaxis->SetTickLabels($datax);

if(count($datax) > 7){
  $graph->xaxis->SetTextTickInterval(7);
}

// $graph->xaxis->SetDateAlign(DAYADJ_1);
$graph->yaxis->title->Set("Time in seconds");
$graph->yaxis->title->SetColor('red');

$graph->title->SetFont(FF_FONT1,FS_BOLD);
$graph->yaxis->title->SetFont(FF_FONT1,FS_BOLD);
$graph->xaxis->SetFont(FF_ARIAL,FS_NORMAL,9);
$graph->yaxis->SetFont(FF_ARIAL,FS_NORMAL,9);
$graph->yaxis->SetTitleMargin(35);

$graph->xaxis->SetTitleMargin(35);

$graph->xaxis->SetLabelAngle(45);

$lineplot->SetColor("blue");
$lineplot->SetWeight(2);

$graph->yaxis->SetColor("red");
$graph->SetShadow();
$graph->footer->center->Set($version);
$graph->Stroke();

?>
