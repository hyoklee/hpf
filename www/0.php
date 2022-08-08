<?
include ("util.php");
$routines = get_routine_names();

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
<legend>Please select routine name</legend>

<form method="POST" action="1.php" name="form">
<table cellspacing="0" cellpadding="0">

<tr>
<td>Test Routine Name:</td>
<?
if(count($routines) != 0){
  echo("<td><select name='routine'>");
  for($i=0; $i < count($routines); $i++){
    echo"<option value='$routines[$i]'>$routines[$i]";
  }
  echo("</select></td>");
}
else{
  echo("<td><font color=red>No Test Routines are available.</font></td>");
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
<?
if(count($routines) != 0){
  echo("<input type='submit' value='Next >>' name='submit' style='background-color:#e1e1e1;'/>");
}
?>

</td>
</table>
</form>
</body>