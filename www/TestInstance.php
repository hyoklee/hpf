<?php

$link = mysql_connect('cheetah.ad.hdfgroup.org', 'root', '');
if (!$link) {
  die('Could not connect: ' . mysql_error());
 }
// make 'test' the current db
$db_selected = mysql_select_db('hdf5perfsimple', $link);
if (!$db_selected) {
  die ('Can\'t use test : ' . mysql_error());
 }

//$filename = 'filestorageinfo_ctest.xml';
$filename = $argv[1];
$raw_file = file_get_contents($filename);
$arr_remove = array("\r", "\n", "\t", "\s");
$archivePage = str_replace($arr_remove, '', $raw_file);

$content_Date = preg_match_all('/(<Date)(.*?)(>)(.+?)(<\/Date>)/i',$archivePage,$Date_matches);
$content_Name = preg_match_all('/(<Name)(.*?)(>)(.+?)(<\/Name>)/i',$archivePage,$Name_matches);
$content_Desc = preg_match_all('/(<Desc)(.*?)(>)(.+?)(<\/Desc>)/i',$archivePage,$Desc_matches);
$content_Version = preg_match_all('/(<Version)(.*?)(>)(.+?)(<\/Version>)/i',$archivePage,$Version_matches);
$content_Host = preg_match_all('/(<Host)(.*?)(>)(.+?)(<\/Host>)/i',$archivePage,$Host_matches);
$content_Result = preg_match_all('/(<Result)(.*?)(>)(.+?)(<\/Result>)/i',$archivePage,$Result_matches);
$content_TestAction_ID = preg_match_all('/(<TestAction_ID)(.*?)(>)(.+?)(<\/TestAction_ID>)/i',$archivePage,$TestAction_ID_matches);

$column1; $j=0;
for($i=0; $i<$content_Date; $i=$i+1){
  $matches1 = explode(">",$Date_matches[0][$i]);
  $matches2 = explode("<",$matches1[1]);
  $matches3 = explode("--",$matches2[0]);
  $matches4 = explode("/", $matches3[0]);
  $array1 = array($matches4[2], $matches4[0], $matches4[1]);
  $date_array = implode("-", $array1);
  $array = array($date_array, $matches3[1]);
  $column1[$j]=implode(" ", $array); $j=$j+1;
 }

$column2; $j=0;
for($i=0; $i<$content_Name; $i=$i+1){
  $matches1 = explode(">",$Name_matches[0][$i]);
  $matches2 = explode("<",$matches1[1]);
  $column2[$j]=$matches2[0]; $j=$j+1;
 }

$column3; $j=0;
for($i=0; $i<$content_Desc; $i=$i+1){
  $matches1 = explode(">",$Desc_matches[0][$i]);
  $matches2 = explode("<",$matches1[1]);
  $column3[$j]=$matches2[0]; $j=$j+1;
 }

$column4; $j=0;
for($i=0; $i<$content_Version; $i=$i+1){
  $matches1 = explode(">",$Version_matches[0][$i]);
  $matches2 = explode("<",$matches1[1]);
  $column4[$j]=$matches2[0]; $j=$j+1;
 }

$column5; $j=0;
for($i=0; $i<$content_Host; $i=$i+1){
  $matches1 = explode(">",$Host_matches[0][$i]);
  $matches2 = explode("<",$matches1[1]);
  $column5[$j]=$matches2[0]; $j=$j+1;
 }

$column6; $j=0;
for($i=0; $i<$content_Result; $i=$i+1){
  $matches1 = explode(">",$Result_matches[0][$i]);
  $matches2 = explode("<",$matches1[1]);
  $column6[$j]=$matches2[0]; $j=$j+1;
 }

$column7; $j=0;
for($i=0; $i<$content_TestAction_ID; $i=$i+1){
  $matches1 = explode(">",$TestAction_ID_matches[0][$i]);
  $matches2 = explode("<",$matches1[1]);
  $column7[$j]=$matches2[0]; $j=$j+1;
 }

function insert_data_into_table($column1,$column2,$column3,$column4,$column5,$column6,$column7){
    echo $column1." ".$column2." ".$column3." ".$column4." ".$column5." ".$column6." ".$column7."\n";
    $query = "Replace into TestInstance values ('', '$column1', '$column2', '$column3', '$column4', '$column5', '$column6', '$column7')";
    $result = mysql_query($query);
  // Check result
  // This shows the actual query sent to MySQL, and the error. Useful for debugging.
    if (!$result) {
    	$message  = 'Invalid query: ' . mysql_error() . "\n";
    	$message .= 'Whole query: ' . $query;
    	die($message);
    }
    return true;
}

for($i=0; $i<sizeof($column1); $i++){
   insert_data_into_table($column1[$i],$column2[$i],$column3[$i],$column4[$i],$column5[$i],$column6[$i],$column7[$i]);
}

mysql_close($link);
?>


