
<?php
    // consultaTodosLibros.php

    require("acceso_mysql.php");
    $resultado=mysqli_query($con,"SELECT * FROM libros");
    $arrayLibros = array();
    while ($libro=mysqli_fetch_assoc($resultado)) {
            $arrayLibros[] = array_map('utf8_encode', $libro);
    }
    //enviamos el array como objeto JSON
    echo json_encode($arrayLibros);

?>