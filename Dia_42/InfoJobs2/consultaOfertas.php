<?php

require("acceso_mysql.php");


$resultado=mysqli_query($con,"SELECT * FROM Ofertas");
$arrayOfertas = array();
while ($oferta=mysqli_fetch_assoc($resultado)) {
        $arrayOfertas[] = array_map('utf8_encode', $oferta);
}

//enviamos el array como objeto JSON
echo json_encode($arrayOfertas);

?>
