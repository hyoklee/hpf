<?
// Sync.php replaces the action ID from TestInstanceBest.
//
// The purporse of sync.php is to synchronize
// the action id in TestInstanceBest table with
// the action id in TestActoinBest table.
//
// This is necessary because C-API of writing Action ID and Routine ID
// are out of sync most of time in MySQL DB.

include("includes/data.inc.php");
include("includes/connect.inc.php");



function get_action_id_by_name($name)
{
  $query = "select TestAction_ID from TestActionBest where TestAction_Name='".$name."'"; 
  $result = mysql_query($query);
  if(!$result){
    die('We can\'t get the test action id for the '.$name.' action.');
  }
  else{
    return mysql_result($result, 0);
  }
}

// Get the action ID from TestACtionID for the TestAction_Name.
// Replace DatasetName record in TestInstanceBest that doesn't have the same ID.
function replace_action_id($TestAction_Name, $DatasetName)
{

  $TestAction_ID =  get_action_id_by_name($TestAction_Name);
  
  $query = "SELECT * FROM TestInstanceBest where DataSetName='".$DatasetName."' AND TestAction_ID != ".$TestAction_ID;
  $result = mysql_query($query); 
  $num = mysql_num_rows($result); 
  
  if ($num){
    while ($row = mysql_fetch_array($result, MYSQL_NUM)){
      $query = "REPLACE INTO TestInstanceBest VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]','$row[5]', '$row[6]', '".$TestAction_ID."')"
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
replace_action_id("group creation", "10000 groups");
replace_action_id("group creation", "200000 groups");
replace_action_id("updating data", "add_rec");
replace_action_id("writing data", "1000000 record");
replace_action_id("destination as a subset of source", "destination as a subset of source");
replace_action_id("source as a subset of destination", "source as a subset of destination");
replace_action_id("free space for datasets", "free space 85 datasets");
replace_action_id("free space for groups", "free space 10000 groups");
replace_action_id("free space for groups with datasets", "free space 200 groups w/ datasets");
replace_action_id("linear cached dataset read", "linear cached dataset read");
replace_action_id("linear cached dataset write", "linear cached dataset write");
replace_action_id("extend early alloc dset", "extend early alloc dset");
replace_action_id("elink traversal without EFC", "elink traversal without EFC");
replace_action_id("elink traversal with EFC", "elink traversal with EFC");
replace_action_id("select disjoint hyperslabs for 1000 times", "select 1000 disjoint hyperslabs dset");
replace_action_id("select disjoint hyperslabs for 10000 times", "select 10000 disjoint hyperslabs dset");
replace_action_id("creating attributes", "creating attributes");
replace_action_id("writing attributes", "writing attributes");
replace_action_id("deleting attributes", "deleting attributes");
replace_action_id("append to 2d dset - 1-unlim-new-x", "append to 2d dset - 1-unlim-new-x");
replace_action_id("append to 2d dset - 1-unlim-new-y", "append to 2d dset - 1-unlim-new-y");
replace_action_id("append to 2d dset - 1-unlim-old-x", "append to 2d dset - 1-unlim-old-x");
replace_action_id("append to 2d dset - 1-unlim-old-y", "append to 2d dset - 1-unlim-old-y");
replace_action_id("append to 2d dset - 2-unlim-new-x", "append to 2d dset - 2-unlim-new-x");
replace_action_id("append to 2d dset - 2-unlim-new-xy", "append to 2d dset - 2-unlim-new-xy");
replace_action_id("append to 2d dset - 2-unlim-new-y", "append to 2d dset - 2-unlim-new-y");
replace_action_id("append to 2d dset - 2-unlim-old-x", "append to 2d dset - 2-unlim-old-x");
replace_action_id("append to 2d dset - 2-unlim-old-xy", "append to 2d dset - 2-unlim-old-xy");
replace_action_id("append to 2d dset - 2-unlim-old-y", "append to 2d dset - 2-unlim-old-y");
?>