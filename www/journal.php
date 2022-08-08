<?

include ("util.php");
$hosts = get_host_names();
$versions = get_library_versions();
$instances = get_test_instances_all();
$today = date('Y/m/d', mktime(0,0,0, date("m"), date("d")-1, date("Y")));
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>HDF Group Benchmark Test - Journal Entry Editor</title>
<link href="includes/style.css" rel="stylesheet" type="text/css" />
<script language="javascript" src="cal2.js">
</script>
<script language="javascript" src="cal_conf2.js"></script>
</head>

<body>
<div id="container">
<h1>HDF Group Benchmark - Journal Entry Editor</h1>
Please enter any test error messages or configuration changes that could have affected the performance here.
<fieldset>
<legend>Please enter a journal entry</legend>
<form method="POST" action="journal1.php" name="form">
<table cellspacing="0" cellpadding="0">
<tr>
<td>
<a href="javascript:showCal('Calendar1')">Date</a>:</td>
<td>
<input type="text" name="start_date"  value="
<?php if (isset($start_date)){ echo $start_date; }else{ echo $today; } ?>
"> 
</td>
</tr>
<tr>
<td>Host:</td>
<?
if(count($hosts) != 0){
  echo("<td><select name='host'><option value='all'>all");
  for($i=0; $i < count($hosts); $i++){
    echo"<option value='$hosts[$i]'>$hosts[$i]";
  }
}
?>
 </tr>
<tr>
<td>Version:</td>
<?
if(count($versions) != 0){
  echo("<td><select name='version'><option value='all'>all");
  for($i=0; $i < count($versions); $i++){
    echo"<option value='$versions[$i]'>$versions[$i]";

  }
  echo("</select></td>");
}
?>
</tr>

<tr>
<td>Instance:</td>
<?
if(count($instances) != 0){
  echo("<td><select name='instance'><option value='all'>all");
  for($i=0; $i < count($instances); $i++){
    echo"<option value='$instances[$i]'>$instances[$i]";

  }
  echo("</select></td>");
}
?>
</tr>
<tr>
<td>Journal Entry:</td>
<td><textarea rows=10 cols=40 name='entry'></textarea></td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<?
  echo("<input type='submit' value='Next >>' name='submit' style='background-color:#e1e1e1;'/>");
?>

</td>
</table>
</form>
</fieldset>
</div>
</body>
</html>