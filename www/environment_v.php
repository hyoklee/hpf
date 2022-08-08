<?php

//=======================================================================
// File:	environment_v.php
// Description:	This script views environment entries in DB.
//
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
//
// Copyright (c) 2007-2015 The HDF Group  All rights reserved.
//========================================================================

include ("includes/data.inc.php"); 
include ("includes/connect.inc.php");
$query = "SELECT * FROM environment ORDER BY env_date DESC LIMIT 32";
$result = mysql_query($query);
$num = mysql_num_rows($result);
$out="";
$order   = array("\r\n", "\n", "\r");
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $out=$out."<tr bgcolor='#f978f9'><td>Date</td><td>Host</td><td>HDF5 Version</td><td>OS Information</td></tr><tr>";
    // Date, Host, HDF5 Version and OS Information
    for($i=1; $i < 5; $i++){
      $entry_br = str_replace($order, "<br>", $row[$i]);
      $out = $out."<td>".$entry_br."</td>";
    }
    $out=$out."</tr>";

    // C compiler Version    
    $out=$out."<tr><td>C compiler version</td>";
    $entry_br = str_replace($order, "<br>", $row[5]);
    $out=$out."<td colspan=3>".$entry_br."</td>";
    $out=$out."</tr>";
    
    //  C++ Compiler Version
    $out=$out."<tr><td>C++ compiler version</td>";
    $entry_br = str_replace($order, "<br>", $row[6]);
    $out=$out."<td colspan=3>".$entry_br."</td>";
    $out=$out."</tr>";
    
    // HDF5 configuration option
    $out=$out."<tr><td>HDF5 configuration option</td>";
    $entry_br = str_replace($order, "<br>", $row[7]);
    $out=$out."<td colspan=3>".$entry_br."</td>";
    $out=$out."</tr>";
    
    // HPF configuration option
    $out=$out."<tr><td>HPF configuration option</td>";
    $entry_br = str_replace($order, "<br>", $row[8]);
    $out=$out."<td colspan=3>".$entry_br."</td>";
    $out=$out."</tr>";

    // HDF5 build option
    $out=$out."<tr><td colspan=4 align=center>HDF5 build option</td></tr><tr>";
    $entry_br = str_replace($order, "<br>", $row[9]);
    $out=$out."<td colspan=4>".$entry_br."</td>";
    $out=$out."</tr>";
    
    // HPF build option
    $out=$out."<tr><td colspan=4 align=center>HPF build option</td></tr><tr>";
    $entry_br = str_replace($order, "<br>", $row[10]);
    $out=$out."<td colspan=4>".$entry_br."</td>";
    $out=$out."</tr>";    
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
<h1>HDF Group Benchmark - View All System Environments</h1>
<fieldset>
<legend>
<?
  echo('All System Environment Change Entries<br>');
?>
</legend>

<table cellspacing="0" cellpadding="0" border=1>

<?=$out?>

</table>

</fieldset>
</div>
<center>
<p>
<a href="https://hpf.hdfgroup.org/index.html">Go</a> to home
</center>
</body>