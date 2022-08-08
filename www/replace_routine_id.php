<?
// include("includes/data.test.php");
include("includes/data.inc.php");
include("includes/connect.inc.php");
$query = "SELECT * FROM TestAction where TestRoutine_ID=24401";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestAction VALUES('$row[0]', '$row[1]', '$row[2]', '22401')"
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