window.onload = function() {
    listaPeliculas = peliculas;
    eliminarImagenes();
    mostrarPeliculas(listaPeliculas);
}

/*EJERCICIO1*/

//Function para eliminar imagenes iniciales del div central
function eliminarImagenes() {
    var imagenes = document.querySelectorAll("#central img");
    // console.log(imagenes);
    for(let i=0; i<imagenes.length; i++){
        imagenes[i].remove();
    }
}

// Muestra las peliculas en sus div correspondientes
function mostrarPeliculas(lista) {
    var divCentral = document.getElementById("central");
    var divAccion = document.getElementById("accion");;
    var divComedia = document.getElementById("comedia"); 
    var divTerror = document.getElementById("terror");

    var peliculasAccion = lista.filter(x => x.tipo == "accion");
    var peliculasAccionOrdenada = peliculasAccion.sort((a,b) => {
        if(a.year > b.year) return 1
        else return -1;
    });
    var peliculasComedia = lista.filter(x => x.tipo == "comedia");
    var peliculasComediaOrdenada = peliculasComedia.sort((a,b) => {
        if(a.year > b.year) return 1
        else return -1;
    });
    var peliculasTerror = lista.filter(x => x.tipo == "terror");
    var peliculasTerrorOrdenada = peliculasTerror.sort((a,b) => {
        if(a.year > b.year) return 1
        else return -1;
    });
    // console.log(peliculasAccionOrdenada);

    var tablaAccion = document.createElement("table");
        tablaAccion.style.textAlign = "center";
        tablaAccion.id = "tablaAccion";
    divAccion.appendChild(tablaAccion);
    peliculasAccionOrdenada.forEach(accion => {    
        var fila = document.createElement("tr");
            fila.style.textAlign = "center";
        tablaAccion.appendChild(fila);
        var celda = document.createElement("td");
            celda.style.border = "1px solid black";
            celda.style.textAlign="center";
        fila.appendChild(celda);
        var img = document.createElement("img");
            img.src = "./imagenes/"+accion.imagen; 
            img.className = "imagenMax";
            img.style.cursor = "pointer";
            img.datosPelicula = accion;
            img.addEventListener("click", mostrarDatosPelicula);
        celda.appendChild(img);      
        var nombre = document.createElement("p");
            nombre.innerHTML = accion.nombre;
            nombre.style.cursor = "pointer";
            nombre.datosPelicula = accion;
            nombre.addEventListener("click", mostrarDatosPelicula);
        celda.appendChild(nombre);    
        var anio = document.createElement("p");
            anio.innerHTML = "Año: "+accion.year;
        celda.appendChild(anio);
    });

    var tablaComedia = document.createElement("table");
        tablaComedia.style.textAlign = "center";
        tablaComedia.id = "tablaComedia";
    divComedia.appendChild(tablaComedia);
    peliculasComediaOrdenada.forEach(comedia => {    
        var fila = document.createElement("tr");
            fila.style.textAlign = "center";
        tablaComedia.appendChild(fila);
        var celda = document.createElement("td");
            celda.style.border = "1px solid black";
            celda.style.textAlign="center";
        fila.appendChild(celda);
        var img = document.createElement("img");
            img.src = "./imagenes/"+comedia.imagen; 
            img.className = "imagenMax";
            img.style.cursor = "pointer";
            img.datosPelicula = comedia;
            img.addEventListener("click", mostrarDatosPelicula);
        celda.appendChild(img);      
        var nombre = document.createElement("p");
            nombre.innerHTML = comedia.nombre;
            nombre.style.cursor = "pointer";
            nombre.datosPelicula = comedia;
            nombre.addEventListener("click", mostrarDatosPelicula);
        celda.appendChild(nombre);    
        var anio = document.createElement("p");
            anio.innerHTML = "Año: "+comedia.year;
        celda.appendChild(anio);
    });


    var tablaTerror = document.createElement("table");
        tablaTerror.style.textAlign = "center";
        tablaTerror.id = "tablaTerror";
    divTerror.appendChild(tablaTerror);
    peliculasTerrorOrdenada.forEach(terror => {    
        var fila = document.createElement("tr");
            fila.style.textAlign = "center";
        tablaTerror.appendChild(fila);
        var celda = document.createElement("td");
            celda.style.border = "1px solid black";
            celda.style.textAlign="center";
        fila.appendChild(celda);
        var img = document.createElement("img");
            img.src = "./imagenes/"+terror.imagen; 
            img.className = "imagenMax";
            img.style.cursor = "pointer";
            img.datosPelicula = terror;
            img.addEventListener("click", mostrarDatosPelicula);
        celda.appendChild(img);      
        var nombre = document.createElement("p");
            nombre.innerHTML = terror.nombre;
            nombre.style.cursor="pointer";
            nombre.datosPelicula = terror;
            nombre.addEventListener("click", mostrarDatosPelicula);
        celda.appendChild(nombre);    
        var anio = document.createElement("p");
            anio.innerHTML = "Año: "+terror.year;
        celda.appendChild(anio);
    });
}

//Muestra datos de la pelicula al pulsar sobre la imagen o el nombre
function mostrarDatosPelicula(event) {
    var datosPeliculaSeleccionada = event.target.datosPelicula;
    var divCentral = document.getElementById("central");
    var divTarea = document.getElementById("tarea");
    var radioOperacion = document.getElementById("tarea").getElementsByTagName("input");

    var hayOperacion = false;
    for(let i=0; i<radioOperacion.length; i++) {
        if(radioOperacion[i].checked) {
            if(radioOperacion[i].value == "likes") {
                var divDatosPelicula = document.createElement("div");
                    divDatosPelicula.id = "divDatosPelicula";
                    divDatosPelicula.className = "centrado";
                    divDatosPelicula.style.border="1px solid black";
                    divDatosPelicula.style.textAlign = "center";
                    divDatosPelicula.style.padding = "10px";
                document.body.appendChild(divDatosPelicula);

                var img = document.createElement("img");
                    img.src = "./imagenes/"+datosPeliculaSeleccionada.imagen;
                divDatosPelicula.appendChild(img);

                var nombre = document.createElement("p");
                    nombre.innerHTML = datosPeliculaSeleccionada.nombre;
                divDatosPelicula.appendChild(nombre);

                var descripcion = document.createElement("p");
                    descripcion.innerHTML = datosPeliculaSeleccionada.descripcion;
                divDatosPelicula.appendChild(descripcion);

                var anio = document.createElement("p");
                        anio.innerHTML = datosPeliculaSeleccionada.year;
                divDatosPelicula.appendChild(anio);

                var parrafo = document.createElement("p");
                divDatosPelicula.appendChild(parrafo);

                var numLikes = document.createElement("span");
                for(let i=0; i<opiniones.length; i++) {
                    if(datosPeliculaSeleccionada.id == opiniones[i].id) {
                        numLikes.innerHTML = opiniones[i].likes;
                    }
                }
                parrafo.appendChild(numLikes);

                var imgLikes = document.createElement("img");
                    imgLikes.src = "./imagenes/like.png";
                    imgLikes.style.height = "30px";
                    imgLikes.style.width = "30px";
                    imgLikes.style.cursor = "pointer";
                    imgLikes.datosPeliLike = datosPeliculaSeleccionada;
                    imgLikes.addEventListener("click", aumentarLike);
                parrafo.appendChild(imgLikes);

                

            } else if(radioOperacion[i].value == "dislikes") {
                var divDatosPelicula = document.createElement("div");
                    divDatosPelicula.id = "divDatosPelicula";
                    divDatosPelicula.className = "centrado";
                    divDatosPelicula.style.border="1px solid black";
                    divDatosPelicula.style.textAlign = "center";
                    divDatosPelicula.style.padding = "10px";
                document.body.appendChild(divDatosPelicula);

                var img = document.createElement("img");
                    img.src = "./imagenes/"+datosPeliculaSeleccionada.imagen;
                divDatosPelicula.appendChild(img);

                var nombre = document.createElement("p");
                    nombre.innerHTML = datosPeliculaSeleccionada.nombre;
                divDatosPelicula.appendChild(nombre);

                var descripcion = document.createElement("p");
                    descripcion.innerHTML = datosPeliculaSeleccionada.descripcion;
                divDatosPelicula.appendChild(descripcion);

                var anio = document.createElement("p");
                        anio.innerHTML = datosPeliculaSeleccionada.year;
                divDatosPelicula.appendChild(anio);

                var parrafo = document.createElement("p");
                divDatosPelicula.appendChild(parrafo);

                var numDislikes = document.createElement("span");
                for(let i=0; i<opiniones.length; i++) {
                    if(datosPeliculaSeleccionada.id == opiniones[i].id) {
                        numDislikes.innerHTML = opiniones[i].dislikes;
                    }
                }
                parrafo.appendChild(numDislikes);

                var imgDislikes = document.createElement("img");
                    imgDislikes.src = "./imagenes/dislike.png";
                    imgDislikes.style.height = "30px";
                    imgDislikes.style.width = "30px";
                    imgDislikes.style.cursor = "pointer";
                    imgDislikes.datosPeliDislike = datosPeliculaSeleccionada;
                    imgDislikes.addEventListener("click", aumentarDislike);
                parrafo.appendChild(imgDislikes);

            } else if(radioOperacion[i].value == "comentar") {
                var divDatosPelicula = document.createElement("div");
                    divDatosPelicula.id = "divDatosPelicula";
                    divDatosPelicula.className = "centrado";
                    divDatosPelicula.style.border="1px solid black";
                    divDatosPelicula.style.textAlign = "center";
                    divDatosPelicula.style.padding = "10px";
                document.body.appendChild(divDatosPelicula);

                var img = document.createElement("img");
                    img.src = "./imagenes/"+datosPeliculaSeleccionada.imagen;
                divDatosPelicula.appendChild(img);

                var nombre = document.createElement("p");
                    nombre.innerHTML = datosPeliculaSeleccionada.nombre;
                divDatosPelicula.appendChild(nombre);

                var descripcion = document.createElement("p");
                    descripcion.innerHTML = datosPeliculaSeleccionada.descripcion;
                divDatosPelicula.appendChild(descripcion);

                var anio = document.createElement("p");
                        anio.innerHTML = datosPeliculaSeleccionada.year;
                divDatosPelicula.appendChild(anio);

                var parrafo = document.createElement("p");
                divDatosPelicula.appendChild(parrafo);

                var btnAceptarComentario = document.createElement("button");
                    btnAceptarComentario.innerHTML = "ACEPTAR COMENTARIO";
                    btnAceptarComentario.type = "button";
                    btnAceptarComentario.id = "btnAceptarComentario";
                    btnAceptarComentario.datosPelicula = datosPeliculaSeleccionada;
                    btnAceptarComentario.addEventListener("click", aceptarComentario);
                parrafo.appendChild(btnAceptarComentario);

                var btnCancelar = document.createElement("button");
                    btnCancelar.innerHTML = "CANCELAR";
                    btnCancelar.type = "button";
                    btnCancelar.id = "btnCancelar";
                    btnCancelar.addEventListener("click", cancelarPelicula);
                parrafo.appendChild(btnCancelar);

            }
        }
    }

    
}


//Cierra el div de la pelicula en cuestión
function cancelarPelicula() {
    document.getElementById("divDatosPelicula").remove();
}



var listaOperaciones = [];

//Aumenta el num de likes y guardamos la operacion en localStorage
function aumentarLike(event) {
    var datosPeliculaLike = event.target.datosPeliLike;
    console.log(datosPeliculaLike);
    

    if(localStorage.getItem("operaciones")) {
        listaOperaciones = JSON.parse(localStorage.getItem("operaciones"));
    }

    listaOperaciones.push({
        id:datosPeliculaLike.id,
        tipoOperacion:"like",
        nombre:datosPeliculaLike.nombre,
        descripcion:datosPeliculaLike.descripcion,
        imagen:datosPeliculaLike.imagen,
        tipo:datosPeliculaLike.tipo,
        rating:datosPeliculaLike.rating,
        maximo_comentarios:datosPeliculaLike.maximo_comentarios,
        year:datosPeliculaLike.year
    });
    //Almacena localStorage
    localStorage.setItem("operaciones", JSON.stringify(listaOperaciones));

    alert("Like añadido con éxito");
    document.getElementById("divDatosPelicula").remove();
}

//Aumenta el num de dislikes y guardamos la operacion en localStorage
function aumentarDislike(event) {
    var datosPeliculaDislike = event.target.datosPeliDislike;
    console.log(datosPeliculaDislike);

    if(localStorage.getItem("operaciones")) {
        listaOperaciones = JSON.parse(localStorage.getItem("operaciones"));
    }

    listaOperaciones.push({
        id:datosPeliculaDislike.id,
        tipoOperacion:"dislike",
        nombre:datosPeliculaDislike.nombre,
        descripcion:datosPeliculaDislike.descripcion,
        imagen:datosPeliculaDislike.imagen,
        tipo:datosPeliculaDislike.tipo,
        rating:datosPeliculaDislike.rating,
        maximo_comentarios:datosPeliculaDislike.maximo_comentarios,
        year:datosPeliculaDislike.year
    });
    //Almacena localStorage
    localStorage.setItem("operaciones", JSON.stringify(listaOperaciones));
    

    alert("Dislike añadido con éxito");
    document.getElementById("divDatosPelicula").remove();
}

//Funcion para aceptar/cambiar comentario validando los datos de las cajas
function aceptarComentario(event) {
    var datosPelicula = event.target.datosPelicula;
    // console.log(datosPelicula);

    var comentarioIntroducido = document.getElementById("txtComentario");
    var codIntroducido = document.getElementById("txtCodigo");
    var fechaIntroducido = document.getElementById("txtFecha");


    var patronCodigo = /^[A-Z][-][0-9]{3}[-][A-Z]$/;
    var fecha = new Date();
    fecha.setDate(fecha.getDate()+7);
    var fechaValida = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear;
    var patronFecha = /^3[0-1]|[0-2][0-9][\/]1[1-2]|0[0-9][\/][0-9]{4}$/;

    var error=false;

    if(!patronCodigo.test(codIntroducido.value)) {
        codIntroducido.style.border = "1px solid red";
        error=true;
    }

    if(comentarioIntroducido.value == "") {
        comentarioIntroducido.style.border = "1px solid red";
        error=true;
    }

    if(patronFecha.test(fechaIntroducido.value)) {
        var trozosFechaIntroducido = fechaIntroducido.value.split("/");
        console.log(trozosFechaIntroducido);
        var trozosFechaValida = fechaValida.split("/");

        if(parseInt(trozosFechaValida[2]) == parseInt(trozosFechaIntroducido[2])) {
            if(parseInt(trozosFechaValida[1]) == parseInt(trozosFechaIntroducido[1])) {
                if(parseInt(trozosFechaValida[0]) > parseInt(trozosFechaIntroducido[0])) {
                    fechaIntroducido.style.border = "1px solid red;"
                    error=true;
                    alert("Fecha no es superior en una semana a la fecha actual");
                }
            } else if(parseInt(trozosFechaValida[1]) > parseInt(trozosFechaIntroducido[1])) {
                fechaIntroducido.style.border = "1px solid red;"
                error=true;
                alert("Fecha no es superior en una semana a la fecha actual");
            }
        } else if(parseInt(trozosFechaValida[2])  > parseInt(trozosFechaIntroducido[2])) {
            fechaIntroducido.style.border = "1px solid red;"
            error=true;
            alert("Fecha no es superior en una semana a la fecha actual");
        }
    } else {
        fechaIntroducido.style.border = "1px solid red;"
        error=true;
    }


    if(error==false) {
        listaPeliculasAlmacenadas = listaPeliculas;
        // listaPeliculasAlmacenadas = localStorage.setItem("listaPeliculasAlmacenadas", JSON.stringify(listaPeliculasAlmacenadas));
        for(let i=0; i<listaPeliculasAlmacenadas.length; i++) {
            if(listaPeliculasAlmacenadas[i].id == datosPelicula.id) {
                //Borra pelicula
                listaPeliculasAlmacenadas.slice(i,1);
                
                listaPeliculasAlmacenadas.push({
                    id:datosPelicula.id,
                    nombre:datosPelicula.nombre,
                    descripcion:comentarioIntroducido.value,
                    imagen:datosPelicula.imagen,
                    tipo:datosPelicula.tipo,
                    rating:datosPelicula.rating,
                    maximo_comentarios:datosPelicula.maximo_comentarios,
                    year:datosPelicula.year
                });
                        
            }
        }

        //Almacena localStorage
        localStorage.setItem("operaciones", JSON.stringify(listaPeliculasAlmacenadas));

        //Actualiza div correspondiente
        mostrarPeliculas(listaPeliculasAlmacenadas); 

        if(localStorage.getItem("operaciones")) {
            listaOperaciones = JSON.parse(localStorage.getItem("operaciones"));
        }
    
        listaOperaciones.push({
            id:datosPelicula.id,
            tipoOperacion:"dislike",
            nombre:datosPelicula.nombre,
            descripcion:datosPelicula.descripcion,
            imagen:datosPelicula.imagen,
            tipo:datosPelicula.tipo,
            rating:datosPelicula.rating,
            maximo_comentarios:datosPelicula.maximo_comentarios,
            year:datosPelicula.year
        });
        //Almacena localStorage
        localStorage.setItem("operaciones", JSON.stringify(listaOperaciones));

        alert("Comentario añadido con éxito");
        //Borra el div
        document.getElementById("divDatosPelicula").remove(); 

        
    } else {    //si hay errores muestra mensaje de error
        alert("Hay errores, debe comprobar los datos introducidos");
    }

}