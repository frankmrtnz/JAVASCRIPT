var listaProyectos=[];
window.onload=function(){
    cargarProyectos(listaProyectos);
    pintarTabla(listaProyectos);
    document.getElementById("btnCancelar")
            .addEventListener("click",cancelar);
    document.getElementById("btnImprimir")
            .addEventListener("click",imprimir);
    document.getElementById("btnOrdenar")
            .addEventListener("click",ordenar);
    document.getElementById("btnNuevo")
            .addEventListener("click",nuevoProyecto);

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
    var div=document.createElement("div");
    div.id="divNuevo";
    div.className="centrada";
    document.body.appendChild(div);
    /*
    var cajaTexto=document.createElement("input");
    cajaTexto.type="text";
    cajaTexto.id="nombreProyecto";
    div.appendChild(cajaTexto);

    var botonAceptar=document.createElement("button");
    botonAceptar.type="button";
    botonAceptar.id="btnAceptarNuevo";
    botonAceptar.addEventListener("click",guardarProyecto);
    div.appendChild(botonAceptar);
    */
    div.innerHTML = "<input type='text' id='nombreProyecto'" +
      "<br><button type='button' onclick='guardarProyecto()'" +
      "id='btnAceptarNuevo'>ACEPTAR</button>"+
      "<button type='button'>CANCELAR</button>";   
}
function guardarProyecto(){
    var nombre=document.getElementById("nombreProyecto")
                       .value.trim();
    if (nombre=="") {
        alert("Debe escribir un nombre de proyecto");
    } else { 
        if (listaProyectos.findIndex((ele)=> ele.toUpperCase() == nombre.toUpperCase())!=-1){
            alert("ESE NOMBRE YA EXISTE");
        } else {
            listaProyectos.push(nombre);
            pintarTabla(listaProyectos);
        }
    }   
}
function filtrar(){
    var texto=document.getElementById("filtro")
                       .value.trim().toUpperCase();
    var listaFiltrada=listaProyectos.filter((elemento) => elemento.toUpperCase().includes(texto))
    pintarTabla(listaFiltrada);
}





















