window.onload = function() {
    //Si el localstorage está vacío (null) lo crearemos a partir de la 'listaCoches' del fichero cochesv2.js
    if(localStorage.getItem("coches") == null) {
        localStorage.setItem("coches", JSON.stringify(listaCoches));
    } 

    pintarMarcasEnSelectyBotonVer(JSON.parse(localStorage.getItem("coches")));
    document.getElementsByTagName("select")[0].addEventListener("change", filtrarMarcaSeleccionada);
    //document.getElementById("botonVer").addEventListener("onclick", pintarCocheSeleccionado2);
}


//-------------------------------------------------------------
/* REPASO PASO DE PARÁMETROS */


/*
TAREA: Mostrar las marcas de los coches y al pulsar en una marca mostrar desplegable con todos
los coches, y poner boton eliminar que borre ese coche y actualice la lista
*/



function pintarMarcasEnSelectyBotonVer (lista){
    
    divPrincipal = document.getElementById("principal");
    var textoBienvenida = document.createElement("h2");
    textoBienvenida.innerHTML = "Bienvenido, selecciona una marca y pulsa en 'Ver'";
    divPrincipal.appendChild(textoBienvenida);

    var select = document.createElement("select");
    divPrincipal.appendChild(select);
    var opt = document.createElement("option");
    opt.innerHTML = "Seleccione marca";
    opt.value = "0";
    select.appendChild(opt)
    lista.forEach(element => {
        var opt = document.createElement("option");
        opt.innerHTML = element.Marca;
        opt.value = element.Marca;
        select.appendChild(opt);  
    });    
    var btnVer = document.createElement("button");
    btnVer.type = "button";
    btnVer.id = "botonVer";
    btnVer.innerHTML = "VER";
    btnVer.addEventListener("click", pintarCocheSeleccionado2);
    // btnVer.addEventListener("onchange", pintarCocheSeleccionado(listaCoches));
    btnVer.style.marginLeft = "20px";
    btnVer.style.backgroundColor = "lightblue";
    btnVer.style.padding = "5px 20px";
    btnVer.style.fontStretch = "bold";
    divPrincipal.appendChild(btnVer);
}



function filtrarMarcaSeleccionada(event) {
    listaFiltradaCochesMarca = listaCoches.filter(element => element.Marca == event.target.value);
    mostrarSelectCochesFiltrados(listaFiltradaCochesMarca);
}


function mostrarSelectCochesFiltrados (lista) {
    $('#selectCoches').remove();

    var select2 = document.createElement("select");
    select2.id = "selectCoches";
    select2.style.marginLeft = "20px";
    divPrincipal.appendChild(select2);
    var opt2 = document.createElement("option");
    opt2.innerHTML = "Seleccione coche";
    opt2.value = "0";
    select2.appendChild(opt2);
    lista.forEach(element => {
        var opt2 = document.createElement("option");
        opt2.innerHTML = element.Modelo;
        opt2.value = element.Modelo;
        select2.appendChild(opt2);  
    });    


    document.getElementsByTagName("select")[1].addEventListener("change", filtrarCocheSeleccionado);
}


function filtrarCocheSeleccionado(event) {
    listaFiltradaCochesModelo = listaFiltradaCochesMarca.filter(element => element.Modelo == event.target.value);
}



function pintarCocheSeleccionado2() {

    $('#divCoche2').remove();
    
        listaFiltradaCochesModelo.forEach(element => {
            var divCoche = document.createElement("div");
            divCoche.id = "divCoche2";
            divCoche.className = "centrado";
            divPrincipal.appendChild(divCoche);
            var infoCocheSeleccionado = `<p><img src="${element.Foto}" class="imgMin"></p><br>
                                        <p><b>Marca:</b> ${element.Marca}</p>
                                        <p><b>Modelo:</b> ${element.Modelo}</p>
                                        <p><b>Número Chasis:</b> ${element.Num_Chasis}</p>
                                        <p><b>Precio:</b> ${element.Precio}</p>
                                        <button type="submit" id="eliminar" class="btnEliminar" onclick="eliminar(event)">Eliminar</button>`;
            document.getElementById("divCoche2").innerHTML = infoCocheSeleccionado;
    });
    
}



function eliminar(event) {
    var numChasisCoche = event.target.parentNode.getElementsByTagName("p")[3].innerHTML.split("</b>")[1];
    //console.log(numChasisCoche);
    var listaCochesAlmacenados = JSON.parse(localStorage.getItem("coches"));

    for(i=0; i<listaCochesAlmacenados.length; i++){
        if(listaCochesAlmacenados[i].Num_Chasis == numChasisCoche.trim()){  //Tenemos que quitar el espacio del principio
            listaCochesAlmacenados.splice(i,1);
        } 
    }
    alert("¡COCHE ELIMINADO!");
    localStorage.setItem("coches", JSON.stringify(listaCochesAlmacenados));
    location.href="cochesv2.html";
    
}