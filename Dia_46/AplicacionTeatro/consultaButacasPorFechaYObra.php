<?php require('acceso_mysql.php'); 
try{ 
  $fecha=$_GET["fecha"];
  $idObra=$_GET["idObra"];

  $consulta="SELECT NumeroTotalButacas,NumeroButacasOcupadas,idObra,fecha FROM ButacasOBra WHERE fecha=? AND idObra=?"; 
  $result=$dbh->prepare($consulta); 
  $result->execute([$fecha,$idObra]); 
  $obras=array(); 
  while ($obra=$result->fetch(PDO::FETCH_ASSOC)) { 
      $obra = array_map('utf8_encode', $obra); 
      array_push($obras,$obra); 
  } 
  //enviamos el array como objeto JSON 
  echo json_encode($obras); 
}catch(PDOException $e){ } 
?>

