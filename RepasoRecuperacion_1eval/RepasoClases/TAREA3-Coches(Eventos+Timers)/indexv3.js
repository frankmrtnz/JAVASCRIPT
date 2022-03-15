window.onload = function() {
    pintarFotos(listaCoches);
    //setTimeout(ocultarFoto3, 3000);     //A los 3sg se ejecuta funcion
    setInterval(ocultarFotos, 3000);    //Cada 3sg se ejecuta funcion
}


//-------------------------------------------------------------
/* REPASO PASO DE PARÁMETROS (event) */


/* 1ª FORMA (Más facil) */

function pintarFotos(lista) {
    for(var i=0; i<lista.length; i++){
        var div = document.createElement("div");
        document.body.appendChild(div);
        var imagen = document.createElement("img");
        div.appendChild(imagen);

        imagen.src = lista[i].Foto;
        imagen.style.width = "300px";
        imagen.style.height = "150px";
        imagen.datosCoche = lista[i];   //Añadimos propiedad con valor que queremos guardar

        imagen.addEventListener("click", mostrarDetalle);
    }
}


function mostrarDetalle(event){
    alert(event.target.datosCoche.Marca+" "+event.target.datosCoche.Modelo);    //Con event.target podemos sacar la propiedad introducida
}


/* 2ª FORMA */
/*
function pintarFotos(lista) {
    for(var i=0; i<lista.length; i++){
        var div = document.createElement("div");
        document.body.appendChild(div);
        var imagen = document.createElement("img");
        div.appendChild(imagen);

        imagen.src = lista[i].Foto;
        imagen.style.width = "300px";
        imagen.style.height = "150px";
        imagen.datosCoche = lista[i];

        imagen.addEventListener("click", mostrarDetalle2(listaCoches[i]));
    }
}

function mostrarDetalle2(coche){
    return () => mostrarDetalleCoche(coche);
}

function mostrarDetalleCoche(coche){
    alert(coche.Marca+" "+coche.Modelo);
}
*/




//-------------------------------------------------------------
/* REPASO TIMERS */

function ocultarFoto3(){
    document.getElementsByTagName("div")[2].style.display="none";   //Se oculta la foto 3
}

var posicion = 0;

function ocultarFotos(){
    document.getElementsByTagName("div")[posicion].style.display="none";   //Se oculta la foto por posicion
    posicion++;
}