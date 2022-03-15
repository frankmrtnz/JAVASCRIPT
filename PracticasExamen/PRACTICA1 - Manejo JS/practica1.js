var diasValidos = ["lunes", "monday", "martes", "tuesday", "miercoles", "thursday", "jueves", "wednesday",
    "viernes", "friday", "sabado", "saturday", "sunday", "domingo"];

var mesesValidos = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto",
    "septiembre", "octubre", "noviembre", "diciembre"];


function quitaAcentos(texto) {
    texto = texto.replace(/á/g, "a");
    texto = texto.replace(/é/g, "e");
    texto = texto.replace(/í/g, "i");
    texto = texto.replace(/ó/g, "o");
    texto = texto.replace(/ú/g, "u");
    return texto;
}



function ejercicio1_2_3_4_5_6_7_8y10() {
    var numErrores = 0;

    /*
        EJERCICIO 1: Modifica el código de la página de forma que si se pulsa el botón “CONTRATAR” 
        se muestre un mensaje si en la caja de texto “DIA INICIO” no hay un día de la semana válido 
        (da igual minúscula o mayúscula e inglés que español). Ten en cuenta que puede estar vacío.
    */
    //EJERCICIO1
    // var diaInicio = quitaAcentos((document.getElementById("diaInicio").value).trim().toUpperCase());
    // if(diaInicio!="" || diasValidos.find(element => element.toUpperCase()==diaInicio)) {
    //     //alert("El día introducido: '"+diaInicio+"' es válido");
    // } else {
    //     alert("El día introducido: '"+diaInicio+"' NO es válido");
    //     numErrores++;
    // }

    /*
        EJERCICIO 10: Modifica el código del ejercicio 1 de forma que en caso de valor invalido 
        en la caja “DIA INICIO” se le pida al usuario un nuevo valor mientras este no sea válido. 
    */
    var diaInicio = document.getElementById("diaInicio").value.trim();
    while (diaInicio == "" || diasValidos.indexOf(diaInicio) == -1) {
        diaInicio = prompt("Debe introducir un día de la semana válido");
        diaInicio = diaInicio.trim();
    }
    document.getElementById("diaInicio").value = diaInicio;



    /*
        EJERCICIO 2: Añade al código anterior  que se muestre un mensaje si en la caja de texto “MES” no 
        hay un mes válido (da igual minúscula o mayúscula e inglés que español).
    */
    var mes = quitaAcentos((document.getElementById("mes").value).trim().toUpperCase());
    if (mes != "" || mesesValidos.find(element => element.toUpperCase() == mes)) {
        //alert("El mes introducido: '"+mes+"' es válido");
    } else {
        alert("El mes introducido: '" + mes + "' NO es válido");
        numErrores++;
    }

    /*
        EJERCICIO 3: Añade al código anterior  que se muestre un mensaje si en la caja de texto 
        “NUMERO DE DIAS” no hay un día del mes válido (entre 1 y 31) .
    */
    var numDias = quitaAcentos((document.getElementById("numeroDias").value).trim());
    if (numDias == "" || isNaN(numDias) || parseInt(numDias) < 1
        || parseInt(numDias) > 31) {
        alert("EL CAMPO NUMERO DE DIAS NO ES VALIDO: " + numDias);
        numErrores++;
    } else {
        //alert("EL CAMPO NUMERO DE DIAS SÍ ES VALIDO: "+numDias);
    }


    /*
        EJERCICIO 4: Añade al código anterior  que se muestre un mensaje si en la caja de texto 
        “RUTA” no hay nada escrito y otro mensaje si hay alguna ciudad repetida
    */
    var ruta = quitaAcentos((document.getElementById("ruta").value).trim());
    if (ruta == "" || valorRepetidoEnLista(ruta.split(","))) {
        alert("EL CAMPO ruta NO ES VALIDO: " + ruta);
        numErrores++;
    } else {
        //alert("EL CAMPO ruta SÍ ES VALIDO: "+ruta);
    }

    function valorRepetidoEnLista(lista) {
        var contador = 0;
        while (contador < (lista.length - 1) && lista.indexOf(lista[contador], contador + 1) == -1)
            contador++;
        if (contador == lista.length - 1) return false;
        else return true;
    }

    /*
        EJERCICIO 5: Añade al código anterior  que si todo es correcto se muestre una tabla 
        en la capa “AGENDA” con tantas filas como número de días haya y tantas celdas por 
        fila como ciudades haya en la ruta
    */
    /*
        EJERCICIO 6: Modifica el código anterior para que la capa “AGENDA” tenga 
        color de fondo amarillo y la tabla borde de 2 pixeles de color  oliva.
    */
    if (numErrores == 0) {
        crearTablaEnAgenda(parseInt(numDias), ruta.split(",").length);
    }

    function crearTablaEnAgenda(numFilas, numColumnas) {
        document.getElementById("AGENDA").style.backgroundColor = "yellow"; //EJ6

        var tabla = document.createElement("tabla");
        document.getElementById("AGENDA").appendChild(tabla);
        tabla.id = "tablaAgenda";
        tabla.style.border = "2px solid olive;" //EJ6 

        /*
            EJERCICIO 7: Modifica el código anterior para que las filas pares de la tabla 
            anterior tengan fondo verde oscuro y las impares tenga fondo verde claro.
        */
        for (i = 0; i < numFilas; i++) {
            var fila = document.createElement("tr");
            tabla.appendChild(fila);
            if ((i % 2) == 0) {
                fila.style.backgroundColor = "green";
            } else {
                fila.style.backgroundColor = "lightgreen";
            }

            /*
                EJERCICIO 8: Modifica el código anterior para que se añada una celda más en cada 
                fila (al principio) con un checkbox y otra celda al final con un botón con el texto 
                “INCLUIR”. Cada elemento anterior debe tener un identificador diferente.
            */
            var columna = document.createElement("td");
            fila.appendChild(columna);
            var check = document.createElement("input");
            check.type = "checkbox";
            check.id = "checkbox" + i;
            columna.appendChild(check);

            for (j = 0; j < numColumnas; j++) {
                var columna = document.createElement("td");
                columna.appendChild(document.createTextNode("X"));
                fila.appendChild(columna);
            }

            columna = document.createElement("td");
            fila.appendChild(columna);

            var boton = document.createElement("button");
            boton.innerHTML = "INCLUIR";
            boton.id = "boton" + i;
            columna.appendChild(boton);

        }
    }

}

/*
EJERCICIO 9: Modifica el código de la página de forma que si se pulsa el botón “SORPRESA” 
se grabe en la caja “NUMERO DE DIAS” un valor entero aleatorio entre 1 y 31 y además dicha 
caja no se podrá modificar 
(PISTA: busca la propiedad html para impedir modificar una caja de texto).
*/
function ejercicio9() {
    var numAleatorio = Math.floor(Math.random() * 31) + 1;
    document.getElementById("numeroDias").value = numAleatorio;
    document.getElementById("numeroDias").readOnly = true;
    //document.getElementById("numeroDias").disabled=true;
}


