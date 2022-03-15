<?php
if (isset($_REQUEST["codigo"]) && isset($_REQUEST["clave"])){
    $codigo = $_REQUEST["codigo"];
    $clave = $_REQUEST["clave"];
    if ($codigo == "root" && $clave=="1234"){
        echo "OK";
    } else {
        echo "ERROR";
}
} else {
        echo "ERROR";
}
?>
