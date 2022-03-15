// script.php

<?php


$salida = "";


if (isset($_GET['operacion'])) {
    $operacion = $_GET['operacion'];
    $salida = "";
    if($operacion == 'mostrar' ) {
        $salida = shell_exec("uname -a");
    }
    if($operacion == 'ocultar') {
        $salida = rand(1,10);
    }
} 
print $salida;




?>

