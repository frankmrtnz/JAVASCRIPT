<?php 
if (isset($_POST["clave"]) && isset($_POST["usuario"])){
 
   $clave=$_POST["clave"];
   $usuario=trim($_POST["usuario"]);
 
   if ($clave =="1234" && strlen($usuario) > 1){
     session_start();
     $_SESSION["usuario"] = $usuario;
	 $perfil = "normal";
	 if ($usuario == "Fernando"){
		 $perfil= "admin";
     }
     echo '{ "estado": "OK","perfil":"' . $perfil .'"}';
   } else {
     echo '{ "estado": "MAL CLAVE"}';
   }
 } else {
   echo '{ "estado": "ERROR"}'; 
}
?>   
