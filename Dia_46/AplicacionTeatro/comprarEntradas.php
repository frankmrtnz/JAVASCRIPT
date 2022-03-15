<?php require('acceso_mysql.php'); 
try{ 
  $fecha=$_POST["fecha"];
  $idObra=$_POST["idObra"];
  $numEntradas=$_POST["numeroEntradas"];


  $consulta="UPDATE ButacasOBra SET NumeroButacasOcupadas= NumeroButacasOcupadas + :numB WHERE fecha= :fecha AND idObra= :idObra"; 
  $result=$dbh->prepare($consulta); 
  $result->bindParam(":numB",$numEntradas);
  $result->bindParam(":fecha",$fecha);
  $result->bindParam(":idObra",$idObra);
  if ($result->execute()) {
      echo '{"idObra":' . $idObra . ', "estado":1}';
  } else {
      echo '{"idObra":' . $idObra . ', "estado":0}';
  }
}catch(PDOException $e){ } 
?>

