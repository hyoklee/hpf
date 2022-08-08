<?
//=======================================================================
// File:	subscribe.php
// Description:	This script checks and inserts alert e-mail subscriber.
// Created: 	2007-07-30
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
// Ver:		$Id$
//
// Copyright (c) 2007 The HDF Group, Inc.  All rights reserved.
//========================================================================

include ("includes/data.inc.php"); 
include ("includes/connect.inc.php");
$email = $_POST["email"];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>HDF Group Benchmark Test Reporting</title>
<link href="includes/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div id="container">
<h1>HDF Group Benchmark Test Alert via E-mail: Unsubscribe</h1>

<?
$valid = true;

if($email == "" && $valid){
  $valid = false;
  echo("<font color=red>No email is set.</font><p>");
  echo('<input type="button" value="<< Back" onClick="history.go(-1)" name="submit" style="background-color:#e1e1e1;"/>');
}

if($valid){
  $query = "DELETE FROM subscribe WHERE email='$email'";
  $result = mysql_query($query);

  if($result == 1){
  
    echo('Your e-mail address is removed from mailing list.<br>');
  }
  else{
    echo('Your e-mail address is <font color=red>not in the mailing list</font>.<br>');
  }
}
mysql_close();
?>
</body>
</html>