<?
// Select dates and then display.

include ("util.php");
$routine = $_POST["routine"];
$rid = $_POST["rid"];
$action = $_POST["action"];
$aid = $_POST["aid"];
$host = $_POST["host"];
$version = $_POST["version"];
$instance = $_POST["instance"];
$today = date('Y/m/d');
$month_ago = date('Y/m/d', mktime(0,0,0, date("m")-1, date("d"), date("Y")));
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>HDF Group Benchmark Test Reporting</title>
<link href="includes/style.css" rel="stylesheet" type="text/css" />
<script language="javascript" src="cal2.js">
</script>
<script language="javascript" src="cal_conf2.js"></script>
</head>

<body>
<div id="container">
<h1>HDF Group Benchmark Test Reporting</h1>
<fieldset>
<legend>Please select Dates</legend>

<form method="POST" action="6.php" name="form">
<input type='hidden' name='routine' value='<?=$routine?>'>
<input type='hidden' name='rid' value=<?=$rid?>>
<input type='hidden' name='action' value='<?=$action?>'>
<input type='hidden' name='aid' value=<?=$aid?>>
<input type='hidden' name='host' value=<?=$host?>>
<input type='hidden' name='version' value=<?=$version?>>
<input type='hidden' name='instance' value='<?=$instance?>'>
<table cellspacing="0" cellpadding="0">

<tr>
<td>Test Routine Name:</td>
<td><?=$routine?></td>
</tr>
<td>Test Action Name:</td>
<td><?=$action?></td>
</tr>
<td>Test Host Name:</td>
<td><?=$host?></td>
</tr>
</tr>
<td>HDF Version:</td>
<td><?=$version?></td>
</tr>
<tr>
<td>Instance Name:</td>
<td>
<?=$instance?>
</td>
</tr>
<tr>
<td>
<a href="javascript:showCal('Calendar1')">Select Start Date</a>:</td>
<td>
<input type="text" name="start_date"  value="
<?php if (isset($start_date)){ echo $start_date; }else{ echo $month_ago; } ?>
"> 
</td>
</tr>

<tr>
<td>
<a href="javascript:showCal('Calendar2')">Select End Date</a>:
</td>
<td>
<input type="text" name="end_date" value="<?php if (isset($end_date)){ echo $end_date; }else{ echo $today; } ?>">
</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<input type="button" value="<< Back" onClick="history.go(-1)" name="submit" style="background-color:#e1e1e1;"/>

<input id='foo' type='submit' value='Display' name='submit' style='background-color:#e1e1e1;'/>
</td>
</table>
</form>
</body>