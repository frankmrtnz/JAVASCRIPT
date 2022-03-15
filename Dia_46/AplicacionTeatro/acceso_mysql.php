<?php 
//Configuracion de la conexion a base de datos 
$bd_usuario="root"; 
$bd_password="root"; 
try{ 
   $dsn="mysql:host=mysql;dbname=2daw"; 
   $dbh=new PDO($dsn,$bd_usuario,$bd_password); 
   $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
} catch(PDOException $e){ 
   echo $e->getMessage(); } 
?>
