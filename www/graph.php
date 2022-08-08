<?php
include ("jpgraph/src/jpgraph.php");
include ("jpgraph/src/jpgraph_line.php");

session_start();
if (isset($_SESSION['x'])){
  $x = $_SESSION['x'];
  foreach ($x as $val){
    $datax[] = $val;
  }
}else{

}

if (isset($_SESSION['y'])){
  $y = $_SESSION['y'];
  foreach ($y as $valb){
    $ydata[] = $valb;
		
  }
}else{

}
// Create the graph. These two calls are always required
$graph = new Graph(800,500);    
$graph->SetScale("textlin");
$graph->yaxis->scale->SetAutoMin(0);
// Create the linear plot
$lineplot=new LinePlot($ydata);

// Add the plot to the graph
$graph->Add($lineplot);

$graph->img->SetMargin(60,60,20,70);
$graph->title->Set("routine name");
$graph->xaxis->title->Set("Dates");
$graph->xaxis->SetTickLabels($datax);
$graph->yaxis->title->Set("Test Instance");
$lineplot-> mark->SetType(MARK_UTRIANGLE );
$graph->title->SetFont(FF_FONT1,FS_BOLD);
$graph->yaxis->title->SetFont(FF_FONT1,FS_BOLD);
$graph->xaxis->SetFont(FF_ARIAL,FS_NORMAL,9);
$graph->yaxis->SetFont(FF_ARIAL,FS_NORMAL,9);
$graph->yaxis->SetTitleMargin(35);
$graph->xaxis->SetTitleMargin(35);
$graph->xaxis->SetLabelAngle(45);
$lineplot->value->SetFormat('%0.3f');
$lineplot->SetFillColor('#dbeaf5'); 
$lineplot->SetColor("blue");
$lineplot->SetLegend ("Localhost","Test Action");
$lineplot->SetWeight(2);
$lineplot->value-> Show();
$graph->yaxis->SetColor("red");
$graph->SetShadow();
$graph->footer->center->Set("HDF 5.17");
// Display the graph
$graph->Stroke();
?>
