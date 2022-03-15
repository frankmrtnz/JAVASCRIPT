/*
EJERCICIO 2:  Utilizando objetos, representar la siguiente información: 
• Tenemos un concesionario, del que tenemos que guardar; nombre, dirección, nif, y teléfono.
• En nuestro concesionario tenemos una flota de coches para vender. De cada coche tenemos que almacenar; 
    identificador, Marca, Combustible, caballos, precio, color, extras, numpuertas. 
• Además tenemos empleados, de los que queremos guardar; nombre, apellidos, fecha nacimiento, nif.
*/
class Coche {
    constructor(identificador, marca, combustible, caballos, precio, color, extras, numpuertas) {
        this.identificador = identificador || "";
        this.marca = marca || "";
        this.combustible = combustible || "";
        this.caballos = caballos || "";
        this.precio = precio || 0;
        this.color = color || "";
        this.extras = extras || "";
        this.numpuertas = numpuertas || 0;
    }
}
class Empleado {
    constructor(nombre, apellidos, fechaNacimiento, nif) {
        this.nombre = nombre || "";
        this.apellidos = apellidos || "";
        this.fechaNacimiento = fechaNacimiento || "";
        this.nif = nif || "";
    }
}
class Concesionario {
    constructor(nombre, direccion, nif, telefono) {
        this.nombre = nombre || "";
        this.direccion = direccion || "";
        this.nif = nif || "";
        this.telefono = telefono || "";
        this.flotaCoches = [];
        this.empleados = [];
    }

    /*
    EJERCICIO 5:  Partiendo del ejercicio 2, añadir al constructor de “concesionario” los siguientes métodos:
    • NuevoCoche. Pide los datos del nuevo coche e introduce nuestro nuevo coche en el concesionario.
    • EliminarCoche. Pide el identificador del coche y lo elimina de nuestro concesionario.
    • MuestraCoches. Muestra en una nueva ventana, la flota de coches que tiene el concesionario 
        (en forma de tabla).
    */

    nuevoCoche() {
        var identificador = prompt("Introduce el identificador del coche");
        var marca = prompt("Introduce la marca del coche");
        var combustible = prompt("Introduce el combustible del coche");
        var caballos = prompt("Introduce los caballos del coche");
        var precio = prompt("Introduce el precio del coche");
        var color = prompt("Introduce el color del coche");
        var extras = prompt("Introduce los extras del coche");
        var puertas = prompt("Introduce el numero de puertas");
        this.flotaCoches.push(new Coche(identificador, marca, combustible, caballos, precio, color, extras, puertas));
    }

    eliminarCoche() {
        var identificador = prompt("Introduce el identificador del coche");
        var posicion = this.flotaCoches.findeIndex(coche => coche.identificador == identificador);
        if (posicion == -1) alert("NO EXISTE UN COCHE CON ESE IDENTIFICADOR");
        else {
            this.flotaCoches.splice(posicion, 1);
            alert("COCHE BORRADO");
        }
    }
    muestraCoches() {
        var i;
        var ventana = window.open();

        var tabla = ventana.document.createElement("table");
        tabla.style.border = "2px solid black";
        ventana.document.body.appendChild(tabla);

        if (this.flotaCoches.length == 0) {
            var fila = ventana.document.createElement("tr");
            tabla.appendChild(fila);
            var celda = ventana.document.createElement("tr");
            fila.appendChild(celda);
            celda.appendChild(ventana.document.createTextNode("NO HAY COCHES"));
        } else {
            var fila = ventana.document.createElement("tr");
            tabla.appendChild(fila);

            for (var prop in this.flotaCoches[0]) {
                var celda = ventana.document.createElement("th");
                fila.appendChild(celda);
                celda.appendChild(ventana.document.createTextNode(prop.toUpperCase()));
            }

            for (i = 0; i < this.flotaCoches.length; i++) {
                var fila = ventana.document.createElement("tr");
                tabla.appendChild(fila);

                if ((i % 2) == 1) fila.style.backgroundColor = "blue";

                for (var prop in this.flotaCoches[i]) {
                    var celda = ventana.document.createElement("td");
                    fila.appendChild(celda);
                    celda.appendChild(ventana.document.createTextNode(this.flotaCoches[i][prop]));
                }
            }
        }
    }
    //otra forma de escribir en una ventana
    muestraCoches2() {
        var i;
        var ventana = window.open();

        var contenido = "<table style='border: 2px solid black'>";

        if (this.flotaCoches.length == 0) {
            contenido += "<tr><td>NO HAY COCHES</td></tr>";
        } else {
            contenido += "<tr>";

            for (var prop in this.flotaCoches[0]) {
                contenido += "<th>" + prop.toUpperCase() + "</th>";
            }
            contenido += "</tr>";

            for (i = 0; i < this.flotaCoches.length; i++) {

                if ((i % 2) == 1) contenido += "<tr style='background-color:blue'>";
                else contenido += "<tr>";

                for (var prop in this.flotaCoches[i]) {
                    contenido += "<td>" + this.flotaCoches[i][prop] + "</td>";
                }
                contenido += "</tr>";
            }
        }
        contenido += "</table>";
        ventana.document.write(contenido);
        ventana.document.close();
    }

}






/*
EJERCICIO 3:  Partiendo del ejercicio anterior, añadir un método al constructor “concesionario” 
que se llame NuevoEmpleado, que lo que haga es pedir los datos por pantalla del nuevo empleado 
y lo almacene como un nuevo empleado en nuestro concesionario.
*/
var concesionario0 = new Concesionario("PRACTICA3");
console.log(concesionario0.nombre);


/*
EJERCICIO 4:  Realizar el ejercicio 3, pero creando dicho método desde fuera del constructor.
*/
concesionario0.nuevoEmpleado = function () {
    var nombre = prompt("Introduce el nombre del Empleado");
    var apellidos = prompt("Introduce los apellidos");
    var fechaNacimiento = prompt("Introduce su fecha de Nacimiento");
    var nif = prompt("Introduce el nif");
    this.empleados.push(new Empleado(nombre, apellidos, fechaNacimiento, nif));
}


alert("VAMOS A CREAR UN EMPLEADO")
concesionario0.nuevoEmpleado();
console.log(concesionario0.empleados[0].nombre);

concesionario0.nuevoCoche();
concesionario0.nuevoCoche();
concesionario0.nuevoCoche();
concesionario0.muestraCoches();
concesionario0.eliminarCoche();
concesionario0.muestraCoches();