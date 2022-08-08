<?php

//=======================================================================
// File:	journal2.php
// Description:	This script adds journal entry into DB.
// Created: 	2007-11-06
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
//
// Copyright (c) 2007 The HDF Group, Inc.  All rights reserved.
//========================================================================

include ("includes/data.inc.php"); 
include ("includes/connect.inc.php");
$date= $_POST["date"];
$host = $_POST["host"];
$version = $_POST["version"];
$instance = $_POST["instance"];
$entry = urldecode($_POST["entry"]);
$entry2 = mysql_escape_string($entry);
$order   = array("\r\n", "\n", "\r");
$entry_br = str_replace($order, "<br>", $entry2);

$query = "INSERT INTO journal VALUES(NULL,'$date', '$host', '$version', '$instance', '$entry2')";
$result = mysql_query($query);
mysql_close($link);

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>HDF Group Benchmark Test - Add New Journal Entry</title>
<link href="includes/style.css" rel="stylesheet" type="text/css" />
</head>

<div id="container">
<h1>HDF Group Benchmark - Add New Journal Entry</h1>
<fieldset>
<legend>
<?
  if($result == 1){
    echo('Thanks, your entry is added successfully.<br>');
  }
  else{
    echo('Oops, your entry <font color=red>cannot</font> be added.<br>');
  }
?>
</legend>

<table cellspacing="0" cellpadding="0" border=1>

<tr>
<td>Date</td><td>Host</td><td>Version</td><td>Instance</td><td>Journal Entry</td>
</tr>

<tr>
<td><?=$date?></td>
<td><?=$host ?></td>
<td><?=$version?></td>
<td><?=$instance ?></td>
<td><?=$entry_br?></td>
</tr>

</table>

</fieldset>
</div>
<center>
<p>
<a href="index.html">Go</a> to home | <a href="journal.php">Add</a> another entry
</center>
</body>