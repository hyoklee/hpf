<?php

//============================================================================
// File:	journal1.php
// Description:	This script confirms a journal entry before storing it into DB.
// Created: 	2007-11-06
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
//
// Copyright (c) 2007 The HDF Group, Inc.  All rights reserved.
//=============================================================================

include ("includes/data.inc.php"); 
include ("includes/connect.inc.php");

$date=      $_POST["start_date"];
$host =     $_POST["host"];
$version =  $_POST["version"];
$instance = $_POST["instance"];
$entry =    $_POST["entry"];
$order   = array("\r\n", "\n", "\r");
$entry_br = str_replace($order, "<br>", $entry);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>HDF Group Benchmark Test - New Journal Entry Confirmation</title>
<link href="includes/style.css" rel="stylesheet" type="text/css" />
</head>

<div id="container">

<h1>HDF Group Benchmark - New Journal Entry Confirmation</h1>

<fieldset>
<legend>Please confirm your journal entry</legend>
<form method="POST" action="journal2.php" name="form">

<input type=hidden name='date' value='<?=$date?>'>
<input type=hidden name='host' value='<?=$host?>'>
<input type=hidden name='version' value='<?=$version?>'>
<input type=hidden name='instance' value='<?=$instance?>'>
<input type=hidden name='entry' value='<?=urlencode($entry)?>'>

<table cellspacing="0" cellpadding="0">
<tr>
<td>Date:</td><td><?=$date?></td>
</tr>

<tr>
<td>Host:</td><td><?= $host ?></td></tr>
<tr>
<td>Version:</td><td><?= $version?></td>
</tr>

<tr>
<td>Instance:</td><td><?= $instance ?></td>
</tr>

<tr>
<td>Journal Entry:</td>
<td><?= $entry_br ?></td>
</tr>

<tr>
<td>&nbsp;</td>
<td>
<input type="button" value="<< Back" onClick="history.go(-1)" name="submit" style="background-color:#e1e1e1;"/>
<?
  echo("<input type='submit' value='Add This Entry>>' name='submit' style='background-color:#e1e1e1;'/>");
?>
</table>

</form>

</fieldset>

</div>

</body>

</html>