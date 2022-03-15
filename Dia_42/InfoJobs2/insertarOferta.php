<?php


if(isset($_REQUEST['insertarOferta'])) {

    require("acceso_mysql.php");

    $titulo = $_REQUEST['titulo'];
    $descripcion = $_REQUEST['descripcion'];
    $ubicacion = $_REQUEST['ubicacion'];
    $requisitos = $_REQUEST['requisitos'];
    $salario = $_REQUEST['salario'];
    $duracion = $_REQUEST['duracion'];
    $IdEmpresa = $_REQUEST['IdEmpresa'];
    $FechaCaducidad = $_REQUEST['FechaCaducidad'];
    $EstaActiva = $_REQUEST['EstaActiva'];

    $consulta = "INSERT INTO Ofertas (Titulo, Descripcion, 
                    Ubicacion, Requisitos, Salario, Duracion, 
                    IdEmpresa, FechaCaducidad, EstaActiva)
                    VALUES ('$titulo', '$descripcion', '$ubicacion', 
                    '$requisitos', $salario, '$duracion', 
                    $IdEmpresa, '$FechaCaducidad', '$EstaActiva')";

    if(mysqli_query($con, $consulta)) {
        header('location:index.html?insercion=ok');
    } else {
        header('location:index.html?insercion=error');
        // print "ERROR: " . mysqli_error($con);
    }
}

?>