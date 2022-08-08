<?
function array_combine_all($a1, $a2)
{
  $result = array();
  for($i=0; $i < count($a1); $i++){

    if(array_key_exists($a1[$i], $a2)){
      $result[] = $a2[$a1[$i]];
    }
    else{
      $result[] = 0.0;
    }
  }
  // print_r($result);
  return $result;
}

function array_combine($a1, $a2)
{
  $ra = array();
  // print(">array_combine\n");
  for($i=0; $i < count($a1); $i++){
    $ra[$a1[$i]] = $a2[$i];
  }
  if(isset($ra)){
    // print_r($ra);
    return $ra;
  }
  else
    return false;
  
}

function inplacemerge($a, $b) {
  $result = array();
  $i = $j = 0;
  if (count($a)==0) { return $b; }
  if (count($b)==0) { return $a; }
  while($i < count($a) && $j < count($b)){
    if ($a[$i] <= $b[$j]) {
      $result[] = $a[$i];
      if ($a[$i]==$b[$j]) { $j++; }
      $i++;
    } else {
      $result[] = $b[$j];
      $j++;
    }
  }
  while ($i<count($a)){
    $result[] = $a[$i];
    $i++;
  }
  while ($j<count($b)){
    $result[] = $b[$j];
    $j++;
  }
  // print_r($result);
  return $result;
}
?>