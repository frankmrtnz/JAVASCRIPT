window.onload = function() {
    listaYatesFiltradaDisponibles = listaYates.filter(element => element.Estado == "D");
    mostrarListaYates(listaYatesFiltradaDisponibles);

    document.getElementById("btnVerMas").addEventListener("click", verMas);
    document.getElementById("btnVerMasCaro").addEventListener("click", verYateMasCaro);
    document.getElementById("btnOrdenarPorDescripcion").addEventListener("click", ordenarPorDescripcion);

    document.getElementById("container").getElementsByTagName("a")[1].addEventListener("click", verSubastasAbiertas);
    setInterval(agrandarFotos, 3000);
    document.getElementById("btnHacerPujas").addEventListener("click", hacerPujas);
}

//---------------------------------------

/* EJERCICIO 1 ~~ 50mins */

var posicion = 0;

function mostrarListaYates(lista) {
    var divPrincipal = document.getElementById("principal");

    var tabla = document.createElement("table");
        tabla.id = "tablaYates";
        tabla.style.textAlign = "center";
    divPrincipal.appendChild(tabla);

    var fila = document.createElement("tr"); 
    tabla.appendChild(fila);

    for(i=posicion; i<posicion+4 && i<lista.length; i++) {
        var celda = document.createElement("td");
            celda.style.padding = "10px";
            celda.style.width = "150px";
        fila.appendChild(celda);

        var img = document.createElement("img");
            img.src = "./imagenes/"+lista[i].Foto;
            img.className = "imagenMin";
        celda.appendChild(img);

        var verDetalle = document.createElement("p");
            verDetalle.innerHTML = "Ver detalle";
            verDetalle.datosYate = lista[i];
            verDetalle.addEventListener("click", masDetalle);
            verDetalle.style.cursor = "pointer";
        celda.appendChild(verDetalle);

        var fecha = document.createElement("p");
            fecha.innerHTML = "Fecha: "+lista[i].FechaCierrePuja;
        celda.appendChild(fecha);

        var precioMinimo = document.createElement("p");
            precioMinimo.innerHTML = "Precio Mínimo: "+lista[i].PrecioMinimo+"€";
        celda.appendChild(precioMinimo);

        var puja = document.createElement("p");
            puja.innerHTML = `Puja: 
                                <input type="hidden" value="${lista[i].Codigo}" name='codigoPuja'>
                                <input type="text" name="precioPuja" size="7">
                              `;
        celda.appendChild(puja);
    }

}


function verMas() {
    posicion += 4;
    if(posicion >= listaYates.length) {
        alert("No hay más yates para mostrar");
    } else {
        mostrarListaYates(listaYatesFiltradaDisponibles);
    }
}


function masDetalle(event){
    if(document.getElementById("masDetalle") !== null) {
        document.getElementById("masDetalle").remove();
    }
    // console.log(event.target.datosYate);
    var divMasDetalle = document.createElement("div");
        divMasDetalle.id = "masDetalle";
        divMasDetalle.className = "centrado";
    document.body.appendChild(divMasDetalle);

    var cerrarDiv = document.createElement("p");
        cerrarDiv.innerHTML="X";
        cerrarDiv.addEventListener("click", cerrarDivMasDetalle);
        cerrarDiv.style.cursor = "pointer";
    divMasDetalle.appendChild(cerrarDiv);

    var img = document.createElement("img");
        img.src = "./imagenes/"+event.target.datosYate.Foto;
        img.className = "imagenMax";
    divMasDetalle.appendChild(img);

    var descripcion = document.createElement("p");
        descripcion.innerHTML = "Descripción: "+event.target.datosYate.Descripcion;
    divMasDetalle.appendChild(descripcion);

    var fechaCierre = document.createElement("p");
        fechaCierre.innerHTML = "Fecha: "+event.target.datosYate.FechaCierrePuja;
    divMasDetalle.appendChild(fechaCierre);

    var precio = document.createElement("p");
        precio.innerHTML = "Precio Mínimo: "+event.target.datosYate.PrecioMinimo;
    divMasDetalle.appendChild(precio);

}


function cerrarDivMasDetalle() {
    document.getElementById("masDetalle").remove();
}



function verYateMasCaro() {
    if(document.getElementById("masDetalle") !== null) {
        document.getElementById("masDetalle").remove();
    }
    var yateMasCaro = listaYatesFiltradaDisponibles.sort((a,b)=> {
        if(a.PrecioMinimo < b.PrecioMinimo) return 1
        else return -1;
    });
    var divMasDetalle = document.createElement("div");
        divMasDetalle.id = "masDetalle";
        divMasDetalle.className = "centrado";
    document.body.appendChild(divMasDetalle);

    var cerrarDiv = document.createElement("p");
        cerrarDiv.innerHTML="X";
        cerrarDiv.addEventListener("click", cerrarDivMasDetalle);
        cerrarDiv.style.cursor = "pointer";
    divMasDetalle.appendChild(cerrarDiv);

    var img = document.createElement("img");
            img.src = "./imagenes/"+yateMasCaro[0].Foto;
            img.className = "imagenMax";
    divMasDetalle.appendChild(img);

    var descripcion = document.createElement("p");
        descripcion.innerHTML = "Descripción: "+yateMasCaro[0].Descripcion;
    divMasDetalle.appendChild(descripcion);

    var fechaCierre = document.createElement("p");
        fechaCierre.innerHTML = "Fecha: "+yateMasCaro[0].FechaCierrePuja;
    divMasDetalle.appendChild(fechaCierre);

    var precio = document.createElement("p");
        precio.innerHTML = "Precio Mínimo: "+yateMasCaro[0].PrecioMinimo;
    divMasDetalle.appendChild(precio);
}


function ordenarPorDescripcion() {
    posicion = 0;
    var listaOrdenadaPorDescripcion = listaYatesFiltradaDisponibles.sort((a,b)=>{
        if(a.Descripcion < b.Descripcion) return 1
        else return -1;
    });
    
    var divPrincipal = document.getElementById("principal");
    if(divPrincipal !== null) {
        while(divPrincipal.hasChildNodes()) {
            divPrincipal.removeChild(divPrincipal.lastChild);
        }
        var titulo = document.createElement("h1");
            titulo.innerHTML = "YATES DISPONIBLES PARA PUJAR";
        divPrincipal.appendChild(titulo);
    }
    mostrarListaYates(listaOrdenadaPorDescripcion);
}


//---------------------------------------


/* EJERCICIO 2 ~~ 1h y 25mins */

function verSubastasAbiertas(){
    var enlaceSubastasAbiertas = document.getElementById("container").getElementsByTagName("a")[1];
        enlaceSubastasAbiertas.href = "pujasRealizadas.html";
        enlaceSubastasAbiertas.target = "_blank";
}

var contador=0;
function agrandarFotos() {
    var listaFotos = document.getElementsByClassName("imagenMin");
    if(contador >= listaFotos.length) {
        // setInterval(reducirUltimaFoto, 3000);
        listaFotos[listaFotos.length-1].style.width = "100px";
        listaFotos[listaFotos.length-1].style.height = "100px";
    } else {
        listaFotos[contador].style.width  = "150px";
        listaFotos[contador].style.height = "150px";
        contador++;
        listaFotos[contador-2].style.width  = "100px";
        listaFotos[contador-2].style.height = "100px";
    }
}



//LISTA DE PUERTOS INDICADOS EN LA HOJA 1 AL PRINCIPIO
var listaPuertos=["Valencia","Barcelona","Ibiza","Bilbao",
    "Sagunto","Ferrol","Santander","Vigo","Ferrol"];

function hacerPujas() {
    var puertoIntroducido = document.getElementById("txtPuerto").value;
    var fechaIntroducida = document.getElementsByClassName("fecha")[0].value;
    var numTarjetaIntroducido = document.getElementsByClassName("tarjeta")[0].value;
    var errores = 0;
    var mensajeErrores = "";

    var patronTarjeta = /^[A-ZÑ]{3}[\-][0-9]{5}$/;
    var patronFecha = /^3[0-1]|[0-2][0-9][\/]1[1-2]|0[1-9][\/][0-9]{4}$/;
    var fecha = new Date();
    // var fechaActual = "0"+fecha.getDate()+"/0"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    fecha.setDate(fecha.getDate()+2);
    var fechaSumada = "0"+fecha.getDate()+"/0"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();

    

    if(!listaPuertos.find(element => element == puertoIntroducido.trim())) {
        mensajeErrores += "- Puerto introducido no válido. \n";
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
        mensajeErrores += "- Fecha introducida no válido (formato DD/MM/YYYY) \n";
        errores++;
    }


    if(!patronTarjeta.test(numTarjetaIntroducido)) {
        mensajeErrores += "- Número tarjeta introducido no válido. \n";
        errores++;
    }


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




    if(errores>0) {
        alert("NO VÁLIDO, HAY ALGÚN ERROR: \n" + mensajeErrores);
    } else {
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

            for(i=0; i<precioPujasHechas.length; i++) {
                if(precioPujasHechas[i].value != "") {
                    // console.log(codigoPujas[i].value);
                    var pujaFiltrada = listaYatesFiltradaDisponibles.filter(elemento => elemento.Codigo == codigoPujas[i].value);
                    if(precioPujasHechas[i].value > pujaFiltrada[0].PrecioMinimo) { 
                        if(listaPujasCorrectas.findIndex(elemento => elemento.CodigoYate == codigoPujas[i].value)==-1){   // no existe)
                            listaPujasCorrectas.push({
                                CodigoYate : codigoPujas[i].value, 
                                PrecioPuja : precioPujasHechas[i].value,
                                PuertoRecogida : puertoIntroducido,
                                TarjetaPago : numTarjetaIntroducido,
                                FechaAviso : fechaIntroducida
                            });
                            localStorage.setItem("pujasCorrectas", JSON.stringify(listaPujasCorrectas));
                            pujaHecha=true;
                        
                        } else {    //si existe
                            for(j=0; j<listaPujasCorrectas.length; j++) {
                                if(listaPujasCorrectas[j].CodigoYate == codigoPujas[i].value
                                    &&  precioPujasHechas[i].value > listaPujasCorrectas[j].PrecioPuja) {
                                    // Borra puja
                                    listaPujasCorrectas.splice(j,1);
                                    // Inserta puja    
                                    listaPujasCorrectas.push({     
                                        CodigoYate : codigoPujas[i].value, 
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


