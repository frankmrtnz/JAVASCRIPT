window.onload = function() {
    listaYatesFiltrada = listaYates.filter(elemento => elemento.Estado == "D");
    mostrarYatesDisponibles(listaYatesFiltrada);

    document.getElementById("btnVerMas").addEventListener("click", verMas);
    document.getElementById("btnVerMasCaro").addEventListener("click", verYateMasCaro);
    document.getElementById("btnOrdenarPorDescripcion").addEventListener("click", ordenarPorDescripcion);

    document.getElementsByTagName("a")[1].addEventListener("click", verSubastasAbiertas);
    setInterval(agrandarFotos, 3000);

    document.getElementById("btnHacerPujas").addEventListener("click", hacerPujas);

}


/* EJERCICIO 1 */

var posicion = 0;
function mostrarYatesDisponibles(lista) {

    // $.get("./js/empleados.json",{},(resultado)=> {
    //     listaEmpleados = resultado;
    //        pintarEmpleados(resultado.empleados);
          
    //   });

    var divPrincipal = document.getElementById("principal");

    var tabla = document.createElement("table");
        tabla.id = "tablaYates";
        tabla.style.textAlign = "center";
    divPrincipal.appendChild(tabla);

    var fila = document.createElement("tr");
    tabla.appendChild(fila);

    for(i=posicion; i<posicion+4 && i<lista.length; i++ ){
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
                                <input type="hidden" value="${lista[i].Codigo}" name="codigoPuja">
                                <input type="text" name="precioPuja" size="6">
                            `;
        celda.appendChild(puja);
    }
}

function verMas() {
    posicion += 4;
    if(posicion >= listaYatesFiltrada.length) {
        alert("Ya no hay más yates a mostrar");
    } else {
        mostrarYatesDisponibles(listaYatesFiltrada);
    }
}

function masDetalle(event) {
    var divVerDetalle = document.createElement("p");
        divVerDetalle.id = "divVerDetalle";
        divVerDetalle.className = "centrado";
    document.body.appendChild(divVerDetalle);

    var cerrarDiv = document.createElement("p");
        cerrarDiv.innerHTML = "X";
        cerrarDiv.style.cursor = "pointer";
        cerrarDiv.addEventListener("click", cerrarDivMasDetalle);
    divVerDetalle.appendChild(cerrarDiv);

    var img = document.createElement("img");
        img.src = "./imagenes/"+event.target.datosYate.Foto;
        img.className = "imagenMax";
    divVerDetalle.appendChild(img);

    var descripcion = document.createElement("p");
        descripcion.innerHTML = "Descripción: "+event.target.datosYate.Descripcion;
    divVerDetalle.appendChild(descripcion);

    var fecha = document.createElement("p");
        fecha.innerHTML = "Fecha: "+event.target.datosYate.FechaCierrePuja;
    divVerDetalle.appendChild(fecha);

    var precio = document.createElement("p");
        precio.innerHTML = "Precio Mínimo: "+event.target.datosYate.PrecioMinimo;
    divVerDetalle.appendChild(precio);
}

function cerrarDivMasDetalle() {
    document.getElementById("divVerDetalle").remove();
}

function verYateMasCaro() {
    var yateMasCaro = listaYatesFiltrada.sort((a,b) => {
        if(a.PrecioMinimo < b.PrecioMinimo) return 1
        else return -1
    });
    var divVerDetalle = document.createElement("p");
        divVerDetalle.id = "divVerDetalle";
        divVerDetalle.className = "centrado";
    document.body.appendChild(divVerDetalle);

    var cerrarDiv = document.createElement("p");
        cerrarDiv.innerHTML = "X";
        cerrarDiv.style.cursor = "pointer";
        cerrarDiv.addEventListener("click", cerrarDivMasDetalle);
    divVerDetalle.appendChild(cerrarDiv);

    var img = document.createElement("img");
        img.src = "./imagenes/"+yateMasCaro[0].Foto;
        img.className = "imagenMax";
    divVerDetalle.appendChild(img);

    var descripcion = document.createElement("p");
        descripcion.innerHTML = "Descripción: "+yateMasCaro[0].Descripcion;
    divVerDetalle.appendChild(descripcion);

    var fecha = document.createElement("p");
        fecha.innerHTML = "Fecha: "+yateMasCaro[0].FechaCierrePuja;
    divVerDetalle.appendChild(fecha);

    var precio = document.createElement("p");
        precio.innerHTML = "Precio Mínimo: "+yateMasCaro[0].PrecioMinimo;
    divVerDetalle.appendChild(precio);
    
}


function ordenarPorDescripcion() {
    posicion = 0;
    var listaOrdenadaPorDescripcion = listaYatesFiltrada.sort((a,b) => {
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
    mostrarYatesDisponibles(listaOrdenadaPorDescripcion);
}


/* EJERCICIO 2 */

function verSubastasAbiertas() {
    var enlaceSubastasAbiertas = document.getElementsByTagName("a")[1];
        enlaceSubastasAbiertas.href = "pujasRealizadas.html";
        enlaceSubastasAbiertas.target = "_blank";
}

var contador = 0;
function agrandarFotos() {
    var listaFotos = document.getElementsByClassName("imagenMin");

    if(contador >= listaFotos.length) {
        listaFotos[listaFotos.length-1].style.width = "100px";
        listaFotos[listaFotos.length-1].style.height = "100px";
    } else {
        listaFotos[contador].style.width = "150px";
        listaFotos[contador].style.height = "150px";
        contador++;
        listaFotos[contador-2].style.width = "100px";
        listaFotos[contador-2].style.height = "100px";
    }
}



var listaPuertos = ["Valencia", "Barcelona", "Ibiza", "Bilbao", "Sagunto", "Ferrol", "Santander", "Vigo", "Ferrol"];
function hacerPujas() {
    var tiposDePago = document.getElementsByName("tipo");
    var puertoIntroducido = document.getElementById("txtPuerto").value;
    var fechaIntroducida = document.getElementsByClassName("fecha")[0].value;
    var numTarjetaIntroducido = document.getElementsByClassName("tarjeta")[0].value;
    var patronTarjeta = /^[A-ZÑ]{3}[-][0-9]{5}$/;

    var fecha = new Date();
    fecha.setDate(fecha.getDate()+2);
    var fechaValida = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    var patronFecha = /^3[0-1]|[0-2][0-9][\/]1[1-2]|0[1-9][\/][0-9]{4}$/;

    var errores = 0;
    var mensajeErrores = "";
    var existeTipoPago = false;


    for(var i=0; i<tiposDePago.length; i++) {
        if (tiposDePago[i].checked) {
            // alert(elementosTipoPago[i].value);
            existeTipoPago = true;
        }
    }
    if(existeTipoPago == false) {
        mensajeErrores += "- No ha elegido un método de pago. \n";
        errores++;
    }

    if(!listaPuertos.find(elemento => elemento == puertoIntroducido.trim())) {
        mensajeErrores += "- El puerto introducido no es el correcto. \n";
        errores++;
    }

    if(patronFecha.test(fechaIntroducida)) {
        if(fechaValida.split("/")[2] == fechaIntroducida.split("/")[2]) {
            if(parseInt(fechaValida.split("/")[1]) == fechaIntroducida.split("/")[1]) {
                if(fechaValida.split("/")[0] > fechaIntroducida.split("/")[0]) {
                    mensajeErrores += "- La fecha debe ser posterior a la fecha del sistema en al menos 2 días. \n";
                    errores++;
                }
            } else if(parseInt(fechaValida.split("/")[1]) > fechaIntroducida.split("/")[1]) {
                mensajeErrores += "- La fecha debe ser posterior a la fecha del sistema en al menos 2 días. \n";
                errores++;
            }
        } else if(fechaValida.split("/")[2] > fechaIntroducida.split("/")[2]) {
            mensajeErrores += "- La fecha debe ser posterior a la fecha del sistema en al menos 2 días. \n";
            errores++;
        }
    } else {
        mensajeErrores += "- Fecha introducida no tiene el formato correcto (DD/MM/AAAA) \n";
        errores++;
    }
    

    if(!patronTarjeta.test(numTarjetaIntroducido)) {
        mensajeErrores += "- Número de tarjeta no tiene formato correcto (AAA-XXXXX) \n";
        errores++;
    }
    


    if(errores > 0) {
        alert("Error en el formulario: \n"+mensajeErrores);
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
                    var pujaFiltrada = listaYatesFiltrada.filter(elemento => elemento.Codigo == codigoPujas[i].value);
                    if(precioPujasHechas[i].value > pujaFiltrada[0].PrecioMinimo) { 
                        if(listaPujasCorrectas.findIndex(elemento => elemento.CodigoYate == codigoPujas[i].value)==-1){   // no existe)
                            listaPujasCorrectas.push({
                                CodigoYate : codigoPujas[i].value, 
                                PrecioPuja : precioPujasHechas[i].value,
                                PuertoRecogida : puertoIntroducido,
                                TarjetaPago : numTarjetaIntroducido,
                                FechaAviso : pujaFiltrada[0].FechaCierrePuja
                            });
                            localStorage.setItem("pujasCorrectas", JSON.stringify(listaPujasCorrectas));
                            pujaHecha = true;
                        
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
                                        FechaAviso : pujaFiltrada[0].FechaCierrePuja
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