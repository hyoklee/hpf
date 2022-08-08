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

$filename = $argv[1];
$raw_file = file_get_contents($filename);
$arr_remove = array("\r", "\n", "\t", "\s");
$archivePage = str_replace($arr_remove, '', $raw_file);

$content_TestRoutine = preg_match_all('/(<XML)(.*?)(>)(.+?)(<\TestInstance>)/i',$archivePage,$matches);

	$mat1x = explode('=',$matches[0][0]);
	$mat1y = explode(" ",$mat1x[1]);
	echo $mat1y[0]." ".$mat1y[1]."\n";

	$mat2x = explode("'",$matches[0][0]);
	$mat2y = explode("'",$mat2x[1]);
	echo $mat2y[0]."\n";

	$mat3x = explode("Desc",$matches[0][0]);
	$mat3y = explode("'",$mat3x[1]);
	$mat3z = explode("'",$mat3y[1]);
	echo $mat3z[0]."\n";

	$mat4x = explode("Version",$matches[0][0]);
	$mat4y = explode("'",$mat4x[1]);
	$mat4z = explode("'",$mat4y[1]);
	echo $mat4z[0]."\n";


$query = "REPLACE INTO TestRoutineBest values ('', '$mat2y[0]', '$mat3z[0]', '$mat4z[0]')";
//  $query = "INSERT INTO TestRoutine values (NULL, '$mat2y[0]', '$mat3z[0]', '$mat4z[0]')";
$result = mysql_query($query);
// Check result
// This shows the actual query sent to MySQL, and the error. Useful for debugging.
if (!$result) {
    $message  = 'Invalid query: ' . mysql_error() . "\n";
    $message .= 'Whole query: ' . $query;
    die($message);
}

echo $mat1y[0]." ".$mat2y[0]." ".$mat3z[0]." ".$mat4z[0]."\n";

mysql_close($link);
?>


