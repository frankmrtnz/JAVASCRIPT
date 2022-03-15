// ejercicio 17: funciones AUTOEJECUTABLES


//Declaramos la funcion y además la llamamos dandole los parámetros
(function(a,b){
    console.log(a);
    console.log(b);
}) ("HOLA",123)


//Lo anterior es la misma que esto siguiente:
function mostrarMensaje(a,b){
    console.log(a);
    console.log(b);
}
mostrarMensaje("HOLA", 123);