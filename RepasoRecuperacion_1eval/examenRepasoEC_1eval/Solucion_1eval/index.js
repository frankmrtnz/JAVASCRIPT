window.onload = function() {
    listaYatesFiltrada = listaYates.filter(element => element.Estado == "D");
    mostrarYates(listaYatesFiltrada);
    document.getElementById("btnVerMas").addEventListener("click", verMas);
    document.getElementById("btnVerMasCaro").addEventListener("click", verYateMasCaro);
    document.getElementById("btnOrdenarPorDescripcion").addEventListener("click", ordenarPorDescripcion);
    document.getElementById("container").getElementsByTagName("a")[1].addEventListener("click", verSubastasAbiertas);
        setInterval(agrandarFotos, 3000);    //Cada 3sg se ejecuta funcion
    document.getElementById("btnHacerPujas").addEventListener("click", hacerPujas);
}

//---------------------------------------
/* EJERCICIO1 */
//---------------------------------------

var posicion = 0;
function mostrarYates(lista) { 
    var divPrincipal = document.getElementById("principal");
    var tabla = document.createElement("table");
        tabla.style.textAlign = "center";
    divPrincipal.appendChild(tabla);
    var fila = document.createElement("tr");  
    tabla.appendChild(fila);

    for(i=posicion; i<posicion+4 && i<lista.length; i++) {
        var td = document.createElement("td");
            td.style.padding = "10px";
            td.style.width = "149px"
        fila.appendChild(td);
        var img = document.createElement("img");
            img.src = "./imagenes/"+lista[i].Foto;
            img.className = "imagenMin";
        td.appendChild(img);

        var verDetalle = document.createElement("p");
            verDetalle.innerHTML = "Ver detalle";
            verDetalle.datosYate = lista[i];
            verDetalle.addEventListener("click", masDetalle);
            verDetalle.style.cursor = "pointer";
        td.appendChild(verDetalle);

        var fecha = document.createElement("p");
            fecha.innerHTML = "Fecha: " + lista[i].FechaCierrePuja;
        td.appendChild(fecha);

        var precioMinimo = document.createElement("p");
            precioMinimo.innerHTML = "Precio mínimo: " + lista[i].PrecioMinimo + "€";
        td.appendChild(precioMinimo);

        var puja = document.createElement("p");
            puja.innerHTML = `Puja:
                                <input type='hidden' value='${lista[i].Codigo}' name='codigoPuja'> 
                                <input type='text' name='precioPuja' size='7'>
                              `;
        td.appendChild(puja);        
    }
}

//---------------------------------------

function verMas() {
    posicion += 4;
    if(posicion >= listaYates.length) {
        alert("No hay más yates para mostrar");
    } else {
        mostrarYates(listaYatesFiltrada);
    } 
}

//---------------------------------------

function masDetalle(event) {
    var divDetalle = document.createElement("div");
        divDetalle.id = "divDetalle";
        divDetalle.className = "centrado";
        divDetalle.innerHTML = `<p onclick='cerrarDiv("divDetalle")' style='cursor:pointer'>X</p>
                                <p><img class='imagenMax' src='./imagenes/${event.target.datosYate.Foto}'></img></p>
                                <p>Descripción: ${event.target.datosYate.Descripcion}</p>
                                <p>Fecha: ${event.target.datosYate.FechaCierrePuja}</p>
                                <p>Precio Mínimo: ${event.target.datosYate.PrecioMinimo}€</p>
                                `;
    document.body.appendChild(divDetalle);
}


//---------------------------------------

function verYateMasCaro() {
    var yateMasCaro = listaYatesFiltrada.sort((b, a) => a.PrecioMinimo - b.PrecioMinimo)[0];
    var divYateMasCaro = document.createElement("div");
        divYateMasCaro.id = "divYateMasCaro";
        divYateMasCaro.className = "centrado";
        divYateMasCaro.innerHTML = `<p onclick='cerrarDiv("divYateMasCaro")' style='cursor:pointer'>X</p>
                                    <p><img class='imagenMax' src='./imagenes/${yateMasCaro.Foto}'></img></p>
                                    <p>Descripción: ${yateMasCaro.Descripcion}</p>
                                    <p>Fecha: ${yateMasCaro.FechaCierrePuja}</p>
                                    <p>Precio Mínimo: ${yateMasCaro.PrecioMinimo}€</p>
                                    `;
    document.body.appendChild(divYateMasCaro);
}

//---------------------------------------

function cerrarDiv(id) {
    document.getElementById(id).remove();
}

//---------------------------------------

function ordenarPorDescripcion() {
    contador = 0;
    posicion = 0;
    var listaYatesOrdenada = listaYatesFiltrada.sort(function ordenar(a, b) { 
        return b.Descripcion > a.Descripcion ?  1 
            : b.Descripcion < a.Descripcion ? - 1 
            : 0;              
      });
    
      var div = document.getElementById('principal');
      if(div !== null){
          while (div.hasChildNodes()){
              div.removeChild(div.lastChild);
          }
          var titulo = document.createElement("h1");
              titulo.innerHTML = "YATES DISPONIBLES PARA PUJAR";
          div.appendChild(titulo);
      }

    
    mostrarYates(listaYatesOrdenada);
}



//---------------------------------------
/* EJERCICIO2 */
//---------------------------------------

function verSubastasAbiertas() {
    var verSubastasAbiertas = document.getElementById("container").getElementsByTagName("a")[1];
        verSubastasAbiertas.href = "pujasRealizadas.html";
        verSubastasAbiertas.target = "_blank";
}


//---------------------------------------

var contador = 0;
function agrandarFotos() {
    var listaImagenes = document.getElementsByTagName("img");
    listaImagenes[contador].style.width = "150px";
    listaImagenes[contador].style.height = "150px";
    contador++;
    listaImagenes[contador-2].style.width = "100px";
    listaImagenes[contador-2].style.height = "100px";
    if(contador >= listaImagenes.length) {
        setInterval(reducirUltimaFoto, 6000);
    }
}
function reducirUltimaFoto() {
    var listaImagenes = document.getElementsByTagName("img");
    listaImagenes[listaImagenes.length-1].style.width = "100px";
    listaImagenes[listaImagenes.length-1].style.height = "100px";
}


//---------------------------------------

//LISTA DE PUERTOS INDICADOS EN LA HOJA 1 AL PRINCIPIO
var listaPuertos=["Valencia","Barcelona","Ibiza","Bilbao",
    "Sagunto","Ferrol","Santander","Vigo","Ferrol"];

    
function hacerPujas () {
    var puertoIntroducido = document.getElementById("txtPuerto").value;
    var fechaIntroducida = document.getElementsByClassName("fecha")[0].value;
    var patronFecha = /^([0-2][0-9]|3[0-1])(\/)(0[1-9]|1[0-2])\2(\d{4})$/;
    var numTarjetaIntroducido = document.getElementsByClassName("tarjeta")[0].value;
    var patronTarjeta = /^[A-ZÑ]{3}[-]{1}[0-9]{5}/;
    var fecha = new Date();
    // var fechaActual = "0"+fecha.getDate()+"/0"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    fecha.setDate(fecha.getDate() + 2);
    var fechaSumada = "0"+fecha.getDate()+"/0"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    var errores = 0;
    var mensajeErrores = "";



    var elementosTipoPago = document.getElementsByName("tipo");
    var existeTipoPago = false;
    for(var i=0; i<elementosTipoPago.length; i++) {
        if (elementosTipoPago[i].checked) {
            // alert(elementosTipoPago[i].value);
            var tipoPago = elementosTipoPago[i].value;
            existeTipoPago = true;
        }
    }
    if(!existeTipoPago) {
        mensajeErrores += "- No ha elegido un método de pago. \n";
        errores++;
    }
    


    if(patronFecha.test(fechaIntroducida)) {
        var fechaIntroducidaSeparada = fechaIntroducida.split("/");
        var fechaSumadaSeparada = fechaSumada.split("/"); 

        if(fechaIntroducidaSeparada[2] == fechaSumadaSeparada[2]) {
            if (fechaIntroducidaSeparada[1] == fechaSumadaSeparada[1]) {
                if(fechaIntroducidaSeparada[0] < fechaSumadaSeparada[0]) {
                    mensajeErrores += "- La fecha no es posterior a la fecha del sistema en al menos 2 días. \n";
                    errores++; 
                }
            } else if(fechaIntroducidaSeparada[1] < fechaSumadaSeparada[1]) {
                mensajeErrores += "- La fecha no es posterior a la fecha del sistema en al menos 2 días. \n";
                errores++; 
            }
        } else if(fechaIntroducidaSeparada[2] < fechaSumadaSeparada[2]) {
            mensajeErrores += "- La fecha no es posterior a la fecha del sistema en al menos 2 días. \n";
            errores++;
        }

    } else {
        mensajeErrores += "- Fecha introducida no válida (dd/mm/aaaa) \n";
        errores++;
    }

    if(!listaPuertos.find(element => element == puertoIntroducido.trim())) {
        mensajeErrores += "- Puerto introducido no válido \n";
        errores++;
    }

    if(!patronTarjeta.test(numTarjetaIntroducido)){
        mensajeErrores += "- Num Tarjeta introducido no válido \n";
        errores++;
    } 


    if(errores > 0) {
        alert("FORMULARIO NO VÁLIDO: \n" + mensajeErrores);
    } else {   
        // alert("PUJA/S REALIZADA/S CON ÉXITO");
        var precioPujasHechas = document.getElementsByName("precioPuja");
        var codigoPujas = document.getElementsByName("codigoPuja");
        var listaPujasCorrectas = [];
        var hayPujas = false;
        
        if(localStorage.getItem("pujasCorrectas")){
            listaPujasCorrectas = JSON.parse(localStorage.getItem("pujasCorrectas"));
        }
        
        for(var i=0; i<precioPujasHechas.length; i++) {
            if(precioPujasHechas[i].value != "" && !isNaN(precioPujasHechas[i].value)) {
                hayPujas = true;
            }
        }

        if(hayPujas == false) {
            alert("[ERROR] NO HA INTRODUCIDO NINGUNA PUJA O ES INCORRECTA (Solo números)");
        } else {
            var pujaHecha = false;
            for(var i=0; i<precioPujasHechas.length; i++) {
                if (listaPujasCorrectas.findIndex( elemento => elemento.CodigoYate == codigoPujas[i].value)==-1){   // no existe 
                    if(precioPujasHechas[i].value > listaYates[i].PrecioMinimo) {
                        listaPujasCorrectas.push({
                            CodigoYate : codigoPujas[i].value, 
                            PrecioPuja : precioPujasHechas[i].value,
                            PuertoRecogida : puertoIntroducido,
                            TarjetaPago : numTarjetaIntroducido,
                            FechaAviso : fechaIntroducida
                        });
                        localStorage.setItem("pujasCorrectas", JSON.stringify(listaPujasCorrectas));
                        pujaHecha = true;
                    }
                } else {    // si existe
                    if(precioPujasHechas[i].value > listaYates[i].PrecioMinimo) {
                        for(var j=0; j<listaPujasCorrectas.length; j++) {
                            if(listaPujasCorrectas[j].CodigoYate == codigoPujas[i].value) {
                                if(precioPujasHechas[i].value > listaPujasCorrectas[j].PrecioPuja) {
                                    // Borra puja
                                    listaPujasCorrectas.splice(j,1);
                                    // Inserta puja    
                                    listaPujasCorrectas.push({     
                                        CodigoYate : listaYates[i].Codigo, 
                                        PrecioPuja : precioPujasHechas[i].value,
                                        PuertoRecogida : puertoIntroducido,
                                        TarjetaPago : numTarjetaIntroducido,
                                        FechaAviso : fechaIntroducida
                                    });
                                    // Almacena puja
                                    localStorage.setItem("pujasCorrectas", JSON.stringify(listaPujasCorrectas));
                                    pujaHecha = true;
                                }
                                
                            }
                        }
                            
                    }
                }        
            }
            if(pujaHecha == false) {
                alert("[ERROR] NINGUNA DE LAS PUJAS REALIZADAS SUPERA EL IMPORTE MÍNIMO O PRECIO DE PUJA ÚLTIMO.")
            } else {
                alert("PUJA/S REALIZADA/S CON ÉXITO (Solo las correctas)");
            }

            
        }
        
    }
 
}




//---------------------------------------




