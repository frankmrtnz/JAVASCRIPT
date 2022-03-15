window.onload = function() {
    pintarFotos(listaCoches);
    // setTimeout(ocultarFoto3, 3000);     //A los 3sg se ejecuta funcion
    setInterval(ocultarFotos, 3000);    //Cada 3sg se ejecuta funcion
}


//-------------------------------------------------------------
/* REPASO PASO DE JQuery */


function pintarFotos(lista) {
    for(var i=0; i<lista.length; i++){
        var div = document.createElement("div");
        // document.body.appendChild(div);
        $(div).appendTo(document.body);     //Primero hijo después padre (JQuery)

        
        var imagen = document.createElement("img");
        // div.appendChild(imagen);
        $(div).append(imagen);     //Primero padre después hijo (JQuery)
            

        //imagen.src = lista[i].Foto;
        $(imagen).attr("src", lista[i].Foto);

        
        // imagen.style.width = "300px";
        // imagen.style.height = "150px";
        //2 FORMAS:
        //$(imagen).width("300px");   //(JQuery)
        //$(imagen).height("150px");    //(JQuery)
        $(imagen).css({"width":"300px", "height":"150px"});   // (JQuery)   


        // imagen.datosCoche = lista[i];   //Añadimos propiedad con valor que queremos guardar  
        $(imagen).prop("datosCoche", lista[i]);
        
        //imagen.addEventListener("click", mostrarDetalle);
        $(imagen).click(mostrarDetalle);    // (JQuery)
    }
}


function mostrarDetalle(event){
    alert(event.target.datosCoche.Marca+" "+event.target.datosCoche.Modelo);    //Con event.target podemos sacar la propiedad introducida
}




// -----------------------------------------------------------------
/* REPASO TIMERS EN JQuery */

// function ocultarFoto3(){
//     document.getElementsByTagName("div")[2].style.display="none";   //Se oculta la foto 3
//     $("div:eq(2)").css("display:none");   // (JQuery)
// }

var posicion = 0;

function ocultarFotos(){
    //document.getElementsByTagName("div")[posicion].style.display="none";   //Se oculta la foto por posicion
    $("div:eq("+posicion+")").css({"display":"none"});  //(JQuery)
    posicion++;
}