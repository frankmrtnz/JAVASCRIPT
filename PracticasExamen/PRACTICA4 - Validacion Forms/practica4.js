/*
EJERCICIO 1:  Escribe una función que reciba un texto y devuelva true si el texto es un número 
de más de 3 dígitos y menos de 9, o false en caso contrario
*/
function esNumeroValido(texto) {
    if (/^[1-9]{1}[0-9]{3,7}$/.test(texto)) return true;
    else return false;
}


/*
EJERCICIO 2:  Escribe una función que reciba un texto y devuelva true si el texto 
es una fecha válida en formato aaaa:dd:mm, o false en caso contrario
*/
function esFechaValida(textoFecha) {
    if (/^\d{4}:\d{2}:\d{2}$/.test(textoFecha)) {   // \d es equivalente a [0-9]
        var listaFecha = textoFecha.split(":");
        var fecha = new Date(listaFecha[0], listaFecha[2] - 1, listaFecha[1]);
        if (fecha.getDate() != listaFecha[1] || fecha.getMonth() != listaFecha[2] - 1
            || fecha.getFullYear() != listaFecha[0]) return false;
        else return true;
    } else return false;
}



/*
EJERCICIO 3:  Escribe una función que reciba un nombre de checkbox y devuelva true 
si hay alguno seleccionado o false en caso contrario
*/
function comprobarCheckBoxes(nombre) {
    var listaElementos = document.getElementsByName(nombre);
    var i = 0;
    while (i < listaElementos.length && !listaElementos[i].checked) i++;
    if (i == listaElementos.length) return false;
    else return true;
}



/*
EJERCICIO 4: Escribe una función que reciba un nombre de radiobutton y devuelva true si 
hay alguno seleccionado o false en caso contrario. Ten en cuenta que puede haber varios 
radiobutton con el mismo nombre.
*/
function comprobarRadio(nombre) {
    var listaElementos = document.getElementsByName(nombre);
    var i = 0;
    while (i < listaElementos.length && !listaElementos[i].checked) i++;
    if (i == listaElementos.length) return false;
    else return true;
}

