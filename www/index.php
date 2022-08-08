<?php 
ob_start();
session_start(); 
include ("includes/data.inc.php"); 
include ("includes/connect.inc.php");
include ("includes/error.inc.php"); 
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
<?php
$submitted = false;

if (isset($_POST['reset'])){
  $submitted = false;
  unset ($_POST['host']); 
  unset ($_POST['libraryversion']); 
  unset ($_POST['testroutine_name']); 
  unset ($_POST['testaction_name']); 
}

if (isset($_POST['submit'])){
  $submitted = true;
  $testroutine_name = $_POST['testroutine_name']; 
  $testaction_name = $_POST['testaction_name']; 
  $host = $_POST['host']; 
  $libraryversion = $_POST['libraryversion']; 
  $start_date = $_POST['start_date']; 
  $end_date = $_POST['end_date']; 
  $datasetname = $_POST['datasetname']; 
	
  $query = "select TestInstance_ID from TestInstanceBest where TestAction_ID = '$testaction_name'"; 
  $result = mysql_query($query); 
  $num = mysql_num_rows($result); 
  $instance_id = array(); 

  while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){ 
    $temp = $row['TestInstance_ID']; 
    array_push($instance_id, $temp); 
  }






  $sd = str_replace("/", "", $start_date); 
  $ed = str_replace("/", "", $end_date); 

  if (!empty($start_date) && (!empty($end_date))){

    if ($sd > $ed){
      $end_date = FALSE; 
      $start_date = FALSE; 
      echo "Invalid end date.<br />"; 
    }
	
    if ($ed < $sd){
      $end_date = FALSE; 
      $start_date = FALSE; 
      echo "Invalid start date.<br />"; 
    }
	
    $today = date("Ymd"); 
	
    if ($ed > $today){
      $end_date = FALSE; 
      echo "You cannot choose an end date beyond today's date.<br />"; 
    }
	
  }
  if ($testroutine_name && $testaction_name && $host && $libraryversion && $start_date && $end_date){


    //  foreach ($instance_id as $val){
      // $query = "select ti.TestResult_Value, DATE_FORMAT(ti.TestInstance_Date,'%m/%d')  from TestInstanceBest ti, TestRoutine tro where ti.TestInstance_ID = '$val' and ti.TestInstance_Date between '$start_date' and '$end_date' and Host='$host' and LibraryVersion = '$libraryversion' and tro.TestRoutine_ID = '$testroutine_name' and DatasetName='$datasetname'";
      $query = "select ti.TestResult_Value, DATE_FORMAT(ti.TestInstance_Date,'%m/%d')  from TestInstanceBest ti, TestRoutine tro where ti.TestInstance_Date between '$start_date' and '$end_date' and Host='$host' and LibraryVersion = '$libraryversion' and tro.TestRoutine_ID = '$testroutine_name' and DatasetName='$datasetname'";
      $result = mysql_query($query);  
      $num = mysql_num_rows($result); 
      echo $query;
      echo "<p>";
      if ($num){
	while ($row = mysql_fetch_array($result, MYSQL_NUM)){
	  $datax[] = $row[1];
	  $datay[] = $row[0];
	  $redirect = 1; 
	}
      }else{
	$error_msg = 1;
      }

    }					
    if (isset($redirect)==1){
      $_SESSION['y'] = $datay; 
			
      $str = str_replace("-", "", $datax); 
      sort($str); 
      foreach ($str as $val){
	$_SESSION['x'] = $str; 
      }
      header ("Location:graph.php"); 
    }
    //}		


	
}
?>
<div id="container">
<h1>HDF Group Benchmark Test Reporting</h1>
<fieldset>
<legend>Please select search parameters</legend>
<form method="POST" action="index.php" name="form">

<table cellspacing="0" cellpadding="0">
<tr>
<td>Test Routine Name:</td>
<?php
include ("includes/data.inc.php"); 
include ("includes/connect.inc.php"); 
$query = "select distinct(TestRoutine_Name), TestRoutine_ID from TestRoutine"; 
$result = mysql_query($query); 
echo "<td><select name=\"testroutine_name\">";
echo "<option value=\"\" selected>";
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  echo "<option value=\"$row[TestRoutine_ID]\">$row[TestRoutine_Name]";
}
echo "</select>";

?>

</td>
</tr>

<?
// <hyokyung 2007.06.21. 12:36:45>
if (empty($testroutine_name) && $submitted){
  $testroutine_name = FALSE; 
  error_print_row("Test routine name is required.");
}
?>

<tr>
<td>Test Action Name:</td>
<?php
$query = "select distinct(TestAction_Name), TestAction_ID from TestAction"; 
$result = mysql_query($query); 
echo "<td><select name=\"testaction_name\">";
echo "<option value=\"\" selected>";
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  echo "<option value=\"$row[TestAction_ID]\">$row[TestAction_Name]";
}
echo "</select>"; 
?>
</td>
</tr>

<?
  if (empty($testaction_name) && $submitted){
    $testaction_name = FALSE;
    error_print_row("Test action name is required."); 
  }

?>

<tr>
<td>Testing Host:</td>
<?php
$query = "select distinct(Host) from TestInstanceBest"; 
$result = mysql_query($query); 
echo "<td><select name=\"host\">"; 
echo "<option value=\"\" selected>";
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  foreach ($row as $val){
    echo "<option"; 
    if ($_POST['host'] == $val){
      echo " selected"; 
    }
    echo ">$val"; 
  }
}
echo "</select>"; 

?>
</td>
</tr>
<?

  if (empty($host) && $submitted){
    $host = FALSE; 
    error_print_row("Host is required.");
  }

?>

<tr>
<td>Library Version used:</td>
<?php
$query = "select distinct(LibraryVersion) from TestInstanceBest"; 
$result = mysql_query($query); 
			
echo "<td><select name=\"libraryversion\">";
echo "<option value=\"\" selected>";
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  foreach ($row as $val){
    echo "<option"; 
    if ($_POST['libraryversion'] == $val){
      echo " selected"; 
    }
    echo ">$val"; 
  }
}
echo "</select>"; 
?>
</td>
</tr>

<?
  if (empty($libraryversion) && $submitted){
    $libraryversion = FALSE; 
    error_print_row("Library version is required.");
  }

?>

<tr>
<td>Instance Name:</td>
<?php
$query = "select distinct(DatasetName) from TestInstanceBest"; 
$result = mysql_query($query); 
			
echo "<td><select name=\"datasetname\">";
echo "<option value=\"\" selected>";
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
  foreach ($row as $val){
    echo "<option"; 
    if ($_POST['datasetname'] == $val){
      echo " selected"; 
    }
    echo ">$val"; 
  }
}
echo "</select>"; 
?>
</td>
</tr>

<tr>
<td>
<small><a href="javascript:showCal('Calendar1')">Select Start Date</a></small></td>
<td>
<input type="text" name="start_date"  value="<?php if (isset($start_date)){ echo $start_date; }else{ echo ""; } ?>"> 
</td>
</tr>

<?
  if (empty($start_date) && $submitted){
    $start_date = FALSE; 
    error_print_row("Start date is required.");
  }
?>

<tr>
<td>
<small><a href="javascript:showCal('Calendar2')">Select End Date</a></small>
</td>
<td>
<input type="text" name="end_date" value="<?php if (isset($end_date)){ echo $end_date; }else{ echo ""; } ?>">
</td>
</tr>

<?
  if (empty($end_date) && $submitted){
    $end_date = FALSE; 
    error_print_row("End date is required."); 
  }

?>
<?
  if (isset($error_msg) == 1){
    error_print_row("No records found");
  }elseif(isset($error_msg) == 2){
    error_print_row("You need at least two points to plot this graph"); 
  }
?>

<tr>
<td>&nbsp;</td>
<td>
<input type="submit" value="Submit" name="submit" style="background-color:#e1e1e1;"/>
<input type="submit" value="Reset" name="reset" style="background-color:#e1e1e1;"/>
</td>
</tr>

</table>
</form>
</fieldset>

</div>
</body>
</html>
