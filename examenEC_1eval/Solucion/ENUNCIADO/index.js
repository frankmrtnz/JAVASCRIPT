window.onload = function(){

    var listaYatesFiltrada = listaYates.filter(element => element.Estado == "D");
    
    mostrarListaYates(listaYatesFiltrada, posicion);

    document.getElementById("btnVerMas").addEventListener("click", verMas);
}

var posicion = 0;

function mostrarListaYates(lista){
    var contenedorPrincipal=document.getElementById("principal");
    var tabla = document.createElement("table");
    contenedorPrincipal.appendChild(tabla);
    var fila = document.createElement("tr");
    tabla.appendChild(fila);
    tabla.style.textAlign = "center";

    for(var i=posicion; i<posicion+4 && i<lista.length; i++){
        var td = document.createElement("td");
        fila.appendChild(td);
        var img = document.createElement("img");
        td.appendChild(img);
        img.src = "./imagenes/"+lista[i].Foto;
        img.className = "imagenMin";

        var enlace = document.createElement("a");
        td.appendChild(enlace);
        enlace.innerHTML = "<br>Ver detalle";


    }

}



function verMas(){
    posicion += 4;
    var listaYatesFiltrada = listaYates.filter(element => element.Estado == "D");
    mostrarListaYates(listaYatesFiltrada, posicion);
}