<?
include ("util.php");
$hosts = get_host_names();

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>HDF Group Benchmark Test Reporting: Version Comparison</title>
<link href="includes/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div id="container">
<h1>HDF Group Benchmark Test Reporting: Version Comparison</h1>
<fieldset>
<legend>Please select host name</legend>

<form method="GET" action="graph_version.php" name="form">
<table cellspacing="0" cellpadding="0">

<tr>
<td>Hostname:</td>
<?
if(count($hosts) != 0){
  echo("<td><select name='host'>");
  for($i=0; $i < count($hosts); $i++){
    echo"<option value='$hosts[$i]'>$hosts[$i]";
  }
  echo("</select></td>");
}
else{
  echo("<td><font color=red>No hosts are available.</font></td>");
}
?>
</tr>
<tr>
<td>Show only last</td>
<td><input name='last' type=text size=3 value=0></input> days of data. (Optional; 0 means all data)</td>
</tr>

<tr>
<td>&nbsp;</td>
<td></td></tr>
<tr>
<td>&nbsp;</td>
<td>
<?
if(count($hosts) != 0){
  echo("<input type='submit' value='View Graph' name='submit' style='background-color:#e1e1e1;'/>");
}
?>

</td>
</table>
</form>
</body>