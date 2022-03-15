// script.php

<?php



   //header("Content-type: text/javascript");

   $operacion = $_GET['operacion'];

   switch ($operacion){

     case 'mostrar':
        echo "$('div').show();";
        break;

     case 'ocultar':
        echo "$('div').hide();";
        break;

   }

?>

