<?php 
//Configuracion de la conexion a base de datos 
$db_usuario=$_ENV["DB_USER"]; 
$db_password=$_ENV["DB_PASSWORD"]; 
$db_server=$_ENV["DB_SERVER"];
$db_port=$_ENV["DB_PORT"];
$db_database=$_ENV["DB_DATABASE"];

try{ 
   $dsn="mysql:host=" .$db_server. ":" . $db_port . ";dbname=". $db_database;
   $dbh=new PDO($dsn,$db_usuario,$db_password); 
   $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
} catch(PDOException $e){ 
   echo $e->getMessage(); 
} 
?>
