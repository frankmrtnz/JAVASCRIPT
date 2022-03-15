<?php


if(isset($_REQUEST['codigo']) && isset($_REQUEST['clave'])) {
    $codigoUsuario = $_REQUEST['codigo']; 
    $claveUsuario = $_REQUEST['clave'];

    if($codigoUsuario=="root" && $claveUsuario==1234){ 
        print "OK";
    } else {
        print "ERROR";
    }

} else {
    print "ERROR";
}


?>