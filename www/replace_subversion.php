<?
// include("includes/data.test.php");
include("includes/data.inc.php");
include("includes/connect.inc.php");
$query = "SELECT * FROM subversion where library_version = '1.9.2'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO subversion VALUES('$row[0]', '$row[1]', '$row[2]','1.9','$row[4]')"
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