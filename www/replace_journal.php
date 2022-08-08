<?
// include("includes/data.test.php");
include("includes/data.inc.php");
include("includes/connect.inc.php");
$query = "SELECT * FROM journal where version = '1.9.0' OR version = '1.9.1' OR version = '1.9.2'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $entry2 = mysql_escape_string($row[5]);
    $query = "REPLACE INTO journal VALUES('$row[0]', '$row[1]', '$row[2]','1.8','$row[4]', '$entry2')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}
?>