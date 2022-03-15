window.onload = function() {
    
    pintarMatriculasEnSelectyBotonVer(listaCoches);
    document.getElementsByTagName("select")[0].addEventListener("change", filtrarCocheSeleccionado);
    document.getElementById("botonVer").addEventListener("click", pintarCocheSeleccionado);
    
}


//----------------------------------------------------


/*
TAREA:
-Crear variable listaCoches=[9 coches-> marca, modelo, matricula, foto, nº chasis(123-45A), precio]
-Hacer pagina que tendrá select donde aparezca: matricula y aabajo un boton que sea "Ver" y que
    salga un div al pinchar en esa matricula que salgan los datos de ese coche
*/


function pintarMatriculasEnSelectyBotonVer(lista) {
    divPrincipal = document.getElementById("principal");
    var textoBienvenida = document.createElement("h2");
    textoBienvenida.innerHTML = "Bienvenido, selecciona una matrícula y pulsa en 'Ver'";
    divPrincipal.appendChild(textoBienvenida);

    var select = document.createElement("select");
    divPrincipal.appendChild(select);
    var opt = document.createElement("option");
    opt.innerHTML = "Seleccione matricula";
    opt.value = "0";
    select.appendChild(opt)
    lista.forEach(element => {
        var opt = document.createElement("option");
        opt.innerHTML = element.Matricula;
        opt.value = element.Matricula;
        select.appendChild(opt);  
    });    
    var btnVer = document.createElement("button");
    btnVer.type = "button";
    btnVer.id = "botonVer";
    btnVer.innerHTML = "VER";
    //btnVer.addEventListener("click", pintarCocheSeleccionado);
    //btnVer.addEventListener("onchange", pintarCocheSeleccionado(listaCoches));
    btnVer.style.marginLeft = "20px";
    btnVer.style.backgroundColor = "lightblue";
    btnVer.style.padding = "5px 20px";
    btnVer.style.fontStretch = "bold";
    divPrincipal.appendChild(btnVer);
}


function filtrarCocheSeleccionado(event) {
    
    listaFiltradaCoches = listaCoches.filter(element => element.Matricula == event.target.value);

}



function pintarCocheSeleccionado() {

    $('#divCoche').remove();
    
        listaFiltradaCoches.forEach(element => {
            var divCoche = document.createElement("div");
            divCoche.id = "divCoche";
            divCoche.className = "centrado";
            divPrincipal.appendChild(divCoche);
            var infoCocheSeleccionado = `<p><img src="${element.Foto}" class="imgMin"></p><br>
                                        <p><b>Marca:</b> ${element.Marca}</p>
                                        <p><b>Modelo:</b> ${element.Modelo}</p>
                                        <p><b>Número Chasis:</b> ${element.Num_Chasis}</p>
                                        <p><b>Precio:</b> ${element.Precio}</p>`;
            document.getElementById("divCoche").innerHTML = infoCocheSeleccionado;
    });
    
}




