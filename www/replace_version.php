<?
// include("includes/data.test.php");
include("includes/data.inc.php");
include("includes/connect.inc.php");

$query = "SELECT * FROM TestInstance where LibraryVersion = '1.6.7'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstance VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '1.6','$row[5]', '$row[6]', '$row[7]')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}

$query = "SELECT * FROM TestInstanceBest where LibraryVersion = '1.6.7'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstanceBest VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '1.6','$row[5]', '$row[6]', '$row[7]')"
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