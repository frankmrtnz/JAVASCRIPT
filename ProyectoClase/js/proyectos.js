var listaProyectos=[];

window.onload=function(){
    cargarProyectos(listaProyectos);
    pintarTabla(listaProyectos);
    document.getElementById("btnCancelar").addEventListener("click",cancelar);
    document.getElementById("btnImprimir").addEventListener("click",imprimir);
    document.getElementById("btnOrdenar").addEventListener("click",ordenar);
    document.getElementById("btnNuevo").addEventListener("click",nuevoProyecto);
    document.getElementById("btnFiltrar").addEventListener("click",filtrar);
}



function imprimir(){
    window.print();
}



function cargarProyectos(lista){
    lista[0]="PROYECTO 0";
    lista[1]="PROYECTO asdsad1";
    lista[2]="PROYECTO 2";
    lista[3]="PROYECTO bbb3";
    lista[4]="PROYECTO e";
    lista[5]="PROYECTO fff5";
    lista[6]="PROYECTO a6";
}



function pintarTabla(lista){
    var tabla=document.getElementById("tablaProyectos");    
    if (tabla){
        limpiarTabla(tabla);
    } else {
        tabla=document.createElement("table");
        tabla.id="tablaProyectos";
        tabla.style.border="1px solid black";
        document.getElementById("central").appendChild(tabla);
    }
    lista.forEach(proyecto=> pintarFila(tabla,proyecto));
}



function limpiarTabla(tabla){
    tabla.innerHTML="";
}



function pintarFila(tabla,texto){
    var fila=document.createElement("tr");   
    tabla.appendChild(fila);
    var celda=document.createElement("td");
    celda.appendChild(document.createTextNode(texto));
    fila.appendChild(celda);
}



function cancelar(){
    location.href="aterrizaje.html";
}



function ordenar(){
    pintarTabla(listaProyectos.sort());
}



function nuevoProyecto(){
    var div = document.createElement("div");
        div.id="divNuevoProyecto";
        div.style.border="1px solid black";
        div.style.margin="0% 30%";
        div.className="divNuevoProyecto";
    document.body.appendChild(div);

    var texto = document.createTextNode("Proyecto:");
    div.appendChild(texto);

    var input = document.createElement("input");
    input.id = "nombreProyecto";
    input.type = "text";
    div.appendChild(input);

    var saltoLinea = document.createElement("br");
    div.appendChild(saltoLinea);

    var botonAceptar = document.createElement("button");
        botonAceptar.type = "button";
        botonAceptar.innerText = "Aceptar";
        botonAceptar.id="btnAceptarNuevo";
        botonAceptar.addEventListener("click",guardarProyecto);
    div.appendChild(botonAceptar);

    var botonCancelar = document.createElement("button");
        botonCancelar.type = "reset";
        botonCancelar.innerText = "Cancelar";
        botonCancelar.id="btnCancelarNuevo";
    div.appendChild(botonCancelar);

}



function guardarProyecto(){
	//Con validación
    var proyectoAnadir = document.getElementById("nombreProyecto").value.trim();  //trim() elimina espacios en blanco delante y detrás
    if(proyectoAnadir==""){
        alert("Debe escribir un nombre de proyecto");
    } else {
        if(listaProyectos.findIndex((elemento)=>elemento.toUpperCase() == proyectoAnadir.toUpperCase())!=-1){
            alert("Ese nombre ya existe");
        } else {
            listaProyectos.push(proyectoAnadir);
            pintarTabla(listaProyectos);
        }
    }
}




function filtrar(){
    var filtro = document.getElementById("textoFiltrar").value.trim().toUpperCase();
    var listaFiltrada = listaProyectos.filter((elemento)=>elemento.toUpperCase().includes(filtro));
    pintarTabla(listaFiltrada);
}





















