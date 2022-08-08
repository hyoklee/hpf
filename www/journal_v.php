<?php

//=======================================================================
// File:	journal_v.php
// Description:	This script views journal entries in DB.
// Created: 	2007-11-14
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
//
// Copyright (c) 2007 The HDF Group, Inc.  All rights reserved.
//========================================================================

include ("includes/data.inc.php"); 
include ("includes/connect.inc.php");
$query = "SELECT * FROM journal ORDER BY jdate DESC LIMIT 32";
$result = mysql_query($query);
$num = mysql_num_rows($result);
$out="";
$order   = array("\r\n", "\n", "\r");
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $out = $out."<tr bgcolor='#f9f978'><td>Date</td><td>Host</td><td>Version</td><td>Instance</td></tr><tr>";

    for($i=1; $i < 5; $i++){
      $entry_br = str_replace($order, "<br>", $row[$i]);
      $out = $out."<td>".$entry_br."</td>";
    }
    $out=$out."</tr><tr>";
    // $out=$out."<tr><td colspan=4>Journal Entry</td></tr><tr>";
    $entry_br = str_replace($order, "<br>", $row[5]);
    $out = $out."<td colspan=4>".$entry_br."</td></tr>";    
  }
}
mysql_close($link);

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>HDF Group Benchmark Test - View All Journal Entries</title>
<link href="includes/style.css" rel="stylesheet" type="text/css" />
</head>

<div id="container">
<h1>HDF Group Benchmark - View All Journal Entries</h1>
<fieldset>
<legend>
<?
  echo('All Journal Entries<br>');
?>
</legend>

<table cellspacing="0" cellpadding="0" border=1>

<?=$out?>

</table>

</fieldset>
</div>
<center>
<p>
<a href="index.html">Go</a> to home | <a href="journal.php">Add</a> another entry
</center>
</body>