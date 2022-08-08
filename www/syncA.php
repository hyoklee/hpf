<?
// syncA.php replaces the routine ID from TestActionBest.
//
// The purporse of sync.php is to synchronize
// the routine id in TestRoutineBest table with
// the routine id in TestRoutineBest table.
//
// This is necessary because C-API of writing Action ID and Routine ID
// are fixed.

include("includes/data.inc.php");
include("includes/connect.inc.php");



function get_routine_id_by_name($name)
{
  $query = "select TestRoutine_ID from TestRoutineBest where TestRoutine_Name='".$name."'"; 
  $result = mysql_query($query);
  if(!$result){
    die('We can\'t get the test action id for the '.$name.' action.');
  }
  else{
    return mysql_result($result, 0);
  }
}

// Replace the routine ID from TestActionBest for the TestAction_Name.
// Replace DatasetName record in TestActionBest that doesn't have the 
// same ID.
function replace_routine_id($TestRoutine_Name, $DatasetName)
{

  $TestRoutine_ID =  get_routine_id_by_name($TestRoutine_Name);
  
  $query = "SELECT * FROM TestActionBest where DataSetName='".$DatasetName."' AND TestRoutine_ID != ".$TestRoutine_ID;
  $result = mysql_query($query); 
  $num = mysql_num_rows($result); 
  
  if ($num){
    while ($row = mysql_fetch_array($result, MYSQL_NUM)){
      $query = "REPLACE INTO TestInstanceBest VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '".$TestRoutine_ID."')"
	;
      echo $query;
      echo "\n";
      $result2 = mysql_query($query);
      if(mysql_num_rows($result) > 0){
	echo "OK\n";
      }
    }
  }
}

// Replace action id for each action name and dataset name.
replace_routine_id("group creation", "10000 groups");
replace_routine_id("group creation", "200000 groups");
replace_routine_id("updating data", "add_rec");
replace_routine_id("writing data", "1000000 record");
replace_routine_id("destination as a subset of source", "destination as a subset of source");
replace_routine_id("source as a subset of destination", "source as a subset of destination");
replace_routine_id("free space for datasets", "free space 85 datasets");
replace_routine_id("free space for groups", "free space 10000 groups");
replace_routine_id("free space for groups with datasets", "free space 200 groups w/ datasets");
replace_routine_id("linear cached dataset read", "linear cached dataset read");
replace_routine_id("linear cached dataset write", "linear cached dataset write");
replace_routine_id("extend early alloc dset", "extend early alloc dset");
replace_routine_id("elink traversal without EFC", "elink traversal without EFC");
replace_routine_id("elink traversal with EFC", "elink traversal with EFC");
replace_routine_id("select disjoint hyperslabs for 1000 times", "select 1000 disjoint hyperslabs dset");
replace_routine_id("select disjoint hyperslabs for 10000 times", "select 10000 disjoint hyperslabs dset");
replace_routine_id("creating attributes", "creating attributes");
replace_routine_id("writing attributes", "writing attributes");
replace_routine_id("deleting attributes", "deleting attributes");
replace_routine_id("append to 2d dset - 1-unlim-new-x", "append to 2d dset - 1-unlim-new-x");
replace_routine_id("append to 2d dset - 1-unlim-new-y", "append to 2d dset - 1-unlim-new-y");
replace_routine_id("append to 2d dset - 1-unlim-old-x", "append to 2d dset - 1-unlim-old-x");
replace_routine_id("append to 2d dset - 1-unlim-old-y", "append to 2d dset - 1-unlim-old-y");
replace_routine_id("append to 2d dset - 2-unlim-new-x", "append to 2d dset - 2-unlim-new-x");
replace_routine_id("append to 2d dset - 2-unlim-new-xy", "append to 2d dset - 2-unlim-new-xy");
replace_routine_id("append to 2d dset - 2-unlim-new-y", "append to 2d dset - 2-unlim-new-y");
replace_routine_id("append to 2d dset - 2-unlim-old-x", "append to 2d dset - 2-unlim-old-x");
replace_routine_id("append to 2d dset - 2-unlim-old-xy", "append to 2d dset - 2-unlim-old-xy");
replace_routine_id("append to 2d dset - 2-unlim-old-y", "append to 2d dset - 2-unlim-old-y");
?>