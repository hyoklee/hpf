<?
// include("includes/data.test.php");
include("includes/data.inc.php");
include("includes/connect.inc.php");

# TestInstance

$query = "SELECT * FROM TestInstance where DataSetName='destination as a subset of source'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstance VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '213')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}

$query = "SELECT * FROM TestInstance where DataSetName='source as a subset of destination'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstance VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '214')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}
$query = "SELECT * FROM TestInstance where DataSetName='add_rec'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstance VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '211')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}
$query = "SELECT * FROM TestInstance where DataSetName='1000000 record'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstance VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '212')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}

$query = "SELECT * FROM TestInstance where DataSetName='10000 groups'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstance VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '210')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}

# TestInstanceBest

$query = "SELECT * FROM TestInstanceBest where DataSetName='destination as a subset of source'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstanceBest VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '213')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}

$query = "SELECT * FROM TestInstanceBest where DataSetName='source as a subset of destination'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstanceBest VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '214')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}
$query = "SELECT * FROM TestInstanceBest where DataSetName='add_rec'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstanceBest VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '211')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}
$query = "SELECT * FROM TestInstanceBest where DataSetName='1000000 record'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstanceBest VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '212')"
;
    echo $query;
    echo "\n";
    $result2 = mysql_query($query);
    if(mysql_num_rows($result) > 0){
      echo "OK\n";
    }
  }
}

$query = "SELECT * FROM TestInstanceBest where DataSetName='10000 groups'";
$result = mysql_query($query); 
$num = mysql_num_rows($result); 
  
if ($num){
  while ($row = mysql_fetch_array($result, MYSQL_NUM)){
    $query = "REPLACE INTO TestInstanceBest VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '210')"
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