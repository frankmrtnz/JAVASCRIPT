function pedirCartelera(url,datos,funcionAEjecutar){
    $.getJSON(url,datos,funcionAEjecutar);
}
function comprarEntradas(url,datos,funcionAEjecutar){
    $.post(url,datos,funcionAEjecutar);
}
function borrarCartelera(){
}
function crearCartelera(){
}

export {pedirCartelera, comprarEntradas};


