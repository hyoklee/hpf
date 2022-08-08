<?php
include("includes/data.inc.php");
include("includes/connect.inc.php");
include("util.php");

//=======================================================================
// File:	svn.php
// Description:	This script writes svn version and hdf5 version
//              with timestampe and hostname.
// Created: 	2007-10-15
// Author:      Hyo-Kyung Lee (hyoklee@hdfgroup.org)
// Version:	$Id$
//
// Copyright (c) 2007 The HDF Group, Inc.  All rights reserved.
//========================================================================
// Get the hostname.
$hostname = shell_exec('hostname');

// Remove '\n' at the end of the string.
$hostname = trim($hostname);

// Get short hostname. (e.g. linew from linew.ad.hdfgroup.org)
$hostname = get_short_hostname($hostname);
$version_hdf = $argv[1];
$version_svn = $argv[2];
// echo $version_svn;
// echo $version_hdf;
$query = "INSERT INTO subversion VALUES(NULL,NOW(), '$version_svn', '$version_hdf', '$hostname')";

$result = mysql_query($query);

mysql_close($link);

?>