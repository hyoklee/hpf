<?
include ("util.php");
$routine = $_POST["routine"];
$rid = $_POST["rid"];
$action = $_POST["action"];
$aid = get_action_id($action, $rid);
$hosts = get_host_names($aid);

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
<legend>Please select host name</legend>

<form method="POST" action="3.php" name="form">
<input type='hidden' name='routine' value='<?=$routine?>'>
<input type='hidden' name='rid' value=<?=$rid?>>
<input type='hidden' name='action' value='<?=$action?>'>
<input type='hidden' name='aid' value=<?=$aid?>>
<table cellspacing="0" cellpadding="0">

<tr>
<td>Test Routine Name:</td>
<td><?=$routine?></td>
</tr>
<td>Test Action Name:</td>
<td><?=$action?></td>
</tr>
<td>Test Host Name:</td>
<?
if(count($hosts) != 0){
  echo("<td><select name='host'>");
  for($i=0; $i < count($hosts); $i++){
    echo"<option value='$hosts[$i]'>$hosts[$i]";

  }
  /* Not yet
  if(count($hosts) > 1){
    echo"<option value='all'>all hosts";
  }
  */
  echo("</select></td>");
}
else{
  echo("<td><font color=red>No Test Hosts are available.</font></td>");
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
if(count($hosts) != 0){
  echo("<input type='submit' value='Next >>' name='submit' style='background-color:#e1e1e1;'/>");
}
?>

</td>
</table>
</form>
</body>