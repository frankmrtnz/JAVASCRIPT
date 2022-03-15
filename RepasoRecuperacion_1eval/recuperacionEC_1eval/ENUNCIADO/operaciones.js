$(document).ready(function() {
    listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculasAlmacenadas"));
    mostrarNombresPeliculasEnSelect(listaPeliculas);

    $('#central select:eq(0)').on("change", {}, operaciones);
});


//EJERCICIO 2


//Funcion que muestra en el select todos los nombres de las peliculas y añade en el value su id
function mostrarNombresPeliculasEnSelect(lista) {
    var $segundoSelect = $('#central select:eq(1)');
    lista.forEach(pelicula => {
        $segundoSelect.append(`<option value="${pelicula.id}">${pelicula.nombre}</option>`);
    });  
}


//si se selecciona el select operaciones
function operaciones() {
    if($('#central select:eq(0) option:contains("Ver likes")')) {
        alert("ha seleccionado ver likes");
    } else if($('#central select:eq(0) option:contains("Ver dislikes")')) {
        alert("ha seleccionado ver dislikes");
    } else if($('#central select:eq(0) option:contains("Ver comentarios")')) {
        alert("ha seleccionado ver comentarios");
    } else if($('#central select:eq(0) option:contains("Ver todas")')) {
        alert("ha seleccionado ver todas");
    }
}



