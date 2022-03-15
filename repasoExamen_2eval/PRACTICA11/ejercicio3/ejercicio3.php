<?php
    if(isset($_POST["cocinero"])) {
        if($_POST["cocinero"]=="JUAN") {
            echo "OK";
        } else {
            echo "OCUPADO";
        }
    } else {
        echo "Falta parámetro";
    }
?>

