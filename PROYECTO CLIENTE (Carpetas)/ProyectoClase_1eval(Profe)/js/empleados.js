var listaEmpleados=[];
window.onload = function(){
    pedirEmpleados();
}
function pedirEmpleados(){
    $.getJSON("ejemploJSON.txt",{},(resultado) =>{
        listaEmpleados = resultado;
        pintarTabla(listaEmpleados);
    });

}

function pintarTabla(lista){
    var central = document.getElementById("central");
    var tabla = document.createElement("table");
    central.appendChild(tabla);
    lista.forEach(empleado => {
        var fila=document.createElement("tr");
        tabla.appendChild(fila);
        for(propiedad in empleado){
           var celda=document.createElement("td");
           fila.appendChild(celda);
           celda.innerHTML = empleado[propiedad];  
        }
    });

}






