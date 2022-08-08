<?php

$link = mysql_connect('cheetah.ad.hdfgroup.org', 'root', '');
if (!$link) {
    die('Could not connect: ' . mysql_error());
 }

$db_selected = mysql_select_db('hdf5perfsimple', $link);
if (!$db_selected) {
    die ('Can\'t use test : ' . mysql_error());
 }

$filename = $argv[1];
$raw_file = file_get_contents($filename);
$arr_remove = array("\r", "\n", "\t", "\s");
$archivePage = str_replace($arr_remove, '', $raw_file);

$content_TestAction = preg_match_all('/(<TestAction ID)(.*?)(>)(.+?)(<\TestInstance>)/i',$archivePage,$matches);

$column1; $column2; $column3; $column4; $j=0;
for($i=0; $i<$content_TestAction; $i=$i+1){
    $matches1 = explode("=",$matches[0][$i]);
    $matches2 = explode(" ",$matches1[1]);
    $column1[$j] = $matches2[0];

    $matches3 = explode("'",$matches1[2]);
    $column2[$j] = $matches3[1];

    $matches4 = explode("'",$matches1[3]);
    $column3[$j] = $matches4[1];

    $matches5 = explode(">",$matches1[4]);
    $column4[$j] = $matches5[0];
    $j=$j+1;
 }

function insert_data_into_table($column1,$column2,$column3,$column4){ 
    $query = "REPLACE INTO TestAction values ('', '$column2', '$column3', '$column4')";
    $result = mysql_query($query);
    // Check result.
    // This shows the actual query sent to MySQL, and the error. 
    // Useful for debugging.
    if (!$result) {
    	$message  = 'Invalid query: ' . mysql_error() . "\n";
    	$message .= 'Whole query: ' . $query;
    	die($message);
    }

    return true;
}

for($i=0; $i<sizeof($column1); $i++){
    echo $column1[$i]." ".$column2[$i]." ".$column3[$i]." ".$column4[$i]."\n";
    insert_data_into_table($column1[$i],$column2[$i],$column3[$i],$column4[$i]);
}

mysql_close($link);
?>


