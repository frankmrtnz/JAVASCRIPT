<?php require('acceso_mysql.php'); 
try{ 
  $consulta="SELECT * FROM Cartelera"; 
  $result=$dbh->prepare($consulta); 
  $result->execute(); 
  $obras=array(); 
  while ($obra=$result->fetch(PDO::FETCH_ASSOC)) { 
      $obra = array_map('utf8_encode', $obra); 
      array_push($obras,$obra); 
  } 
  //enviamos el array como objeto JSON 
  echo json_encode($obras); 
}catch(PDOException $e){ } 
?>

