
var listaEmpleados = [];

/*
listaEmpleados.push(new Empleado(11,'12345678A','Paco','Martínez Martín', 32, 2016, 'Jefe'));
listaEmpleados.push(new Empleado(14,'12345678H','Juan','Martín Toribio', 45, 2017, 'SubJefe'));
listaEmpleados.push(new Empleado(15,'12345678B','Fernando','Gonzalez Gonzales', 23, 2015, 'Técnico'));
listaEmpleados.push(new Empleado(24,'12345678A','Aitor','López Bernal', 30, 2010, 'Analista'));
listaEmpleados.push(new Empleado(45,'12345678A','Paco','Martínez Martín', 20, 2009, 'Programador Jr'));
*/

window.onload=function(){
    pedirEmpleados();
    document.getElementById("btnCancelar").addEventListener("click",cancelar);
    document.getElementById("btnOrdenar").addEventListener("click",ordenar);
    document.getElementById("btnEliminar").addEventListener("click",eliminar);
    document.getElementById("btnNuevo").addEventListener("click",nuevoEmpleado);
}


function pedirEmpleados(){
    $.getJSON("ejemploJSON.txt",{},(respuesta)=>{     //Lo muestra como ARRAY (Lista de JSON)
        listaEmpleados = respuesta;
        pintarTabla(listaEmpleados);    //Hay que meterlo dentro porque sino no lo imprime
    });

    /*
    $.get("ejemploJSON.txt",{},(respuesta)=>{       //Lo muestra como TEXTO
        console.log(respuesta);
    });
    pintarTabla(listaEmpleados);
    */
}


function pintarTabla(lista){
    var central = document.getElementById("central");
    var tabla = document.createElement("table");
    central.appendChild(tabla);
    lista.forEach(empleado => {
        var fila = document.createElement("tr");
        tabla.appendChild(fila);

        //Para mostrar los atributos
        var celda = document.createElement("td");
            fila.appendChild(celda);
        var imagen = document.createElement("img");
            imagen.src = empleado.foto;
            imagen.className = "fotoEmpleado";
            celda.appendChild(imagen);
        
            var celda = document.createElement("td");
            fila.appendChild(celda);
            celda.innerHTML= empleado.nombre;
        
            var celda = document.createElement("td");
            fila.appendChild(celda);
            celda.innerHTML= empleado["apellidos"];    //Otra forma de llamar a la propiedad

        var celda = document.createElement("td");
            fila.appendChild(celda);
        var imagen = document.createElement("img");
            imagen.src = "./images/editar.jpeg";
            imagen.className = "fotoEditaryEliminar";
            imagen.id = "fotoEditar";
            imagen.addEventListener("click",editar);
            celda.appendChild(imagen);

        var celda = document.createElement("td");
            fila.appendChild(celda);
        var imagen = document.createElement("img");
            imagen.src = "./images/eliminar.jpeg";
            imagen.className = "fotoEditaryEliminar";
            imagen.id = "fotoEliminar";
            imagen.addEventListener("click",eliminar);
            celda.appendChild(imagen);
        
        /*
        //Recorremos todas las propiedades de un objeto con el siguiente for
        for(propiedad in empleado){
            var celda = document.createElement("td");
            fila.appendChild(celda);
            celda.innerHTML= empleado[propiedad];
        }
        */
        
    });
}


function cancelar(){
    location.href="aterrizaje.html";
}


function editar(){
    alert("Editando...");

}


function eliminar(){
    alert("Eliminando...");
}


function nuevoEmpleado(){
    //falta añadir empleados
}


function filtrar(){
    //falta filtrar por empleado
}


