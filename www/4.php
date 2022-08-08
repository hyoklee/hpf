<?
include ("util.php");
$routine = $_POST["routine"];
$rid = $_POST["rid"];
$action = $_POST["action"];
$aid = $_POST["aid"];
$host = $_POST["host"];
$version = $_POST["version"];
$instances = get_test_instances($aid, $host, $version);
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
<h1>HDF Group Benchmark Test Reporting</h1>
<fieldset>
<legend>Please select Test Instances</legend>

<form method="POST" action="5.php" name="form">
<input type='hidden' name='routine' value='<?=$routine?>'>
<input type='hidden' name='rid' value=<?=$rid?>>
<input type='hidden' name='action' value='<?=$action?>'>
<input type='hidden' name='aid' value=<?=$aid?>>
<input type='hidden' name='host' value=<?=$host?>>
<input type='hidden' name='version' value=<?=$version?>>
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
<?
if(count($instances) != 0){
  echo("<td><select name='instance'>");
  for($i=0; $i < count($instances); $i++){
    echo"<option value='$instances[$i]'>$instances[$i]";

  }
  /* Not yet
  if(count($instances) > 1){
    echo"<option value='all'>all instances";
  }
  */
  echo("</select></td>");
}
else{
  echo("<td><font color=red>No instances are available.</font></td>");
}
?>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<input type="button" value="<< Back" onClick="history.go(-1)" name="submit" style="background-color:#e1e1e1;"/>
<?
if(count($instances) != 0){
  echo("<input type='submit' value='Next >>' name='submit' style='background-color:#e1e1e1;'/>");
}
?>

</td>
</table>
</form>
</body>