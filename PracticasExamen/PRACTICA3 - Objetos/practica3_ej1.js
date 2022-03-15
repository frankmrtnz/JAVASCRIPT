class Ciudad {
    constructor(nombre, pais, distancia, precio, comentario, imagen) {
        this.nombre = nombre || "SIN NOMBRE";
        this.pais = pais || "SIN PAIS";
        this.distancia = distancia || 0;
        this.precio = precio || 0;
        this.comentario = comentario || "";
        this.imagen = imagen || "noImagen.gif";
    }
}

class Mapa {
    constructor() {
        this.listaCiudades = [];
        this.listaFiltrada = [];
        this.hayFiltro = false; //esta propiedad controla si se esta utilizando la lista completa o la filtrada
    }

    addCiudad(ciudad) {
        if (ciudad instanceof Ciudad) this.listaCiudades.push(ciudad);
    }

    eliminarCiudad(nombre) {
        var posicion = this.listaCiudades.findIndex(ciudad => ciudad.nombre == nombre);
        if (posicion != -1) {
            this.listaCiudades.splice(posicion, 1);
        }
    }
    mostrarTodasCiudades(destino) {
        this.mostrarCiudades(destino, this.listaCiudades);
    }
    mostrarCiudades(destino, lista) {
        var i;
        var listaTitulos = ["", "NOMBRE", "PAIS", "DISTANCIA", "PRECIO", "DESCRIPCION"];

        //borramos la tabla si ya existe en el destino
        var listaTablas = destino.getElementsByTagName("table");
        if (listaTablas.length > 0) {
            destino.removeChild(listaTablas[0]);
        }

        //creamos la tabla
        var tabla = document.createElement("table");
        destino.appendChild(tabla);

        var fila = document.createElement("tr");
        tabla.appendChild(fila);
        fila.style.backgroundColor = "grey";

        for (i = 0; i < listaTitulos.length; i++) {
            var celdaCabecera = document.createElement("th");
            celdaCabecera.appendChild(document.createTextNode(listaTitulos[i]));
            fila.appendChild(celdaCabecera);
        }

        if (lista.length == 0) {
            var fila = document.createElement("tr");
            tabla.appendChild(fila);
            var celda = document.createElement("td");
            fila.appendChild(celda);
            celda.setAttribute("colspan", "5");
            celda.innerHTML = "NO HAY CIUDADES PARA ESE FILTRO";
        } else {

            for (i = 0; i < lista.length; i++) {
                var fila = document.createElement("tr");
                tabla.appendChild(fila);

                if ((i % 2) == 1) fila.style.backgroundColor = "blue";

                var celda = document.createElement("td");
                fila.appendChild(celda);

                var caja = document.createElement("input");
                caja.type = "text";
                caja.size = 2;
                caja.id = "caja" + i;
                celda.appendChild(caja);

                for (var propiedad in lista[i]) {
                    celda = document.createElement("td");
                    fila.appendChild(celda);

                    var contenido = "";
                    if (propiedad == "pais") contenido = lista[i][propiedad].substr(2);
                    else if (propiedad == "descripcion") contenido = lista[i][propiedad].substr(0, 20);
                    else if (propiedad != "imagen") contenido = lista[i][propiedad];
                    if (contenido != "") celda.appendChild(document.createTextNode(contenido));
                }
            }
        }
    }

    filtrar(tipo, opcion, destino) {
        this.listaFiltrada = [];
        this.hayFiltro = true;

        if (tipo == 'precio') {
            if (opcion == 1) this.listaFiltrada = this.listaCiudades.filter(ciudad => ciudad.precio < 1000);
            if (opcion == 2) this.listaFiltrada = this.listaCiudades.filter(ciudad => ciudad.precio >= 1000 && ciudad.precio <= 2000);
            if (opcion == 3) this.listaFiltrada = this.listaCiudades.filter(ciudad => ciudad.precio < 2000);
        }
        if (tipo == 'distancia') {
            if (opcion == 1) this.listaFiltrada = this.listaCiudades.filter(ciudad => ciudad.distancia < 1000);
            if (opcion == 2) this.listaFiltrada = this.listaCiudades.filter(ciudad => ciudad.distancia >= 1000 && a.distancia <= 2000);
            if (opcion == 3) this.listaFiltrada = this.listaCiudades.filter(ciudad => ciudad.distancia > 2000);
        }
        if (tipo == 'pais') {
            this.listaFiltrada = this.listaCiudades.filter(ciudad => ciudad.pais.substr(2).toUpperCase().indexOf(opcion.toUpperCase()) != -1);
        }
        this.mostrarCiudades(destino, this.listaFiltrada);
    }

    ordenarPorNombre(destino) {
        this.hayFiltro = false;
        this.listaCiudades.sort((a, b) => {
            if (a.nombre > b.nombre) return 1;
            else return -1;
        });
        this.mostrarCiudades(destino, this.listaCiudades);
    }

    ordenarPorPrecioAsc(destino, listaCiudades) {
        this.hayFiltro = false;
        this.listaCiudades.sort((a, b) => a.precio - b.precio);
        this.mostrarCiudades(destino, this.listaCiudades);
    }

    ordenarPorPrecioDesc(destino, listaCiudades) {
        this.hayFiltro = false;
        this.listaCiudades.sort((a, b) => b.precio - a.precio);
        this.mostrarCiudades(destino, this.listaCiudades);
    }

    mostrarRuta(destino) {
        var listaRuta = [];
        var lista = [];

        if (this.hayFiltro) lista = this.listaFiltrada;
        else lista = this.listaCiudades;

        for (var i = 0; i < lista.length; i++) {
            var valor = document.getElementById("caja" + i).value;
            if (valor != "" && !isNaN(valor)) {
                var ciudadConOrden = {
                    "orden": valor,
                    "nombre": lista[i].nombre,
                    "distancia": lista[i].distancia,
                    "precio": lista[i].precio
                };
                listaRuta.push(ciudadConOrden);
            }
        }

        listaRuta.sort((a, b) => a.orden - b.orden);

        var contenido = "";
        var totalKm = 0;
        var totalPrecio = 0;
        for (i = 0; i < listaRuta.length; i++) {
            contenido = contenido + " " + listaRuta[i].orden + " " + listaRuta[i].nombre + "<br>";
            totalKm += listaRuta[i].distancia;
            totalPrecio += listaRuta[i].precio;
        }
        contenido += totalKm + " KILOMETROS<br>";
        contenido += totalPrecio + " EUROS<br>";
        destino.innerHTML = contenido;
    }
}

function cargarMapa() {
    var ciudad0 = new Ciudad("MADRID", "34ESPAÑA", 756, 890, "CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS", "madrid.gif");
    mapa0.addCiudad(ciudad0);
    mapa0.addCiudad(new Ciudad("BARCELONA", "34ESPAÑA", 236, 1190, "CIUDAD COSTERA DEL MEDITERRANEO.", "barcelona.gif"));
    mapa0.addCiudad(new Ciudad("VALENCIA", "34ESPAÑA", 324, 650, "CAPITAL COSTERA. CIUDAD DE LAS ARTES Y LAS CIENCIAS", "valencia.gif"));
    mapa0.addCiudad(new Ciudad("LISBOA", "33PORTUGAL", 756, 890, "CAPITAL DEL PAIS. CIUDAD COSTERA ATLANTICO", "lisboa.gif"));
    mapa0.addCiudad(new Ciudad("PARIS", "31FRANCIA", 1556, 2890, "CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS", "paris.gif"));
    mapa0.addCiudad(new Ciudad("LONDRES", "3OREINO UNIDO", 2256, 3890, "CAPITAL DEL PAIS. MUSEOS. BIG BEN", "londres.gif"));
    mapa0.addCiudad(new Ciudad("BERLIN", "35ALEMANIA", 1234, 4890, "CAPITAL DEL PAIS. ZOO.AVENIDAS", "berlin.gif"));
    mapa0.addCiudad(new Ciudad("BERNA", "36SUIZA", 6345, 990, "CAPITAL DEL PAIS.MUSEOS, RESTAURANTES, PARQUES", "berna.gif"));
    mapa0.addCiudad(new Ciudad("ROMA", "37ITALIA", 956, 1190, "CAPITAL DEL PAIS. HISTORIA. MUSEOS. IGLESIAS", "roma.gif"));
    mapa0.addCiudad(new Ciudad("AMSTERDAM", "38HOLANDA", 2756, 1190, "CAPITAL DEL PAIS. ", "amsterdam.gif"));
    mapa0.addCiudad(new Ciudad("VIENA", "39AUSTRIA", 1756, 1290, "CAPITAL DEL PAIS. OPERA. MUSEOS.", "viena.gif"));
    mapa0.addCiudad(new Ciudad("BRUSELAS", "40BELGICA", 1056, 5890, "CAPITAL DEL PAIS. PUERTO.", "bruselas.gif"));
    mapa0.addCiudad(new Ciudad("COPENAGUE", "41DINAMARCA", 1556, 6890, "CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS", "copenague.gif"));
    mapa0.addCiudad(new Ciudad("OSLO", "42NORUEGA", 856, 880, "CAPITAL DEL PAIS. PAISAJES.", "oslo.gif"));
}

var mapa0 = new Mapa();

window.onload = function () {
    cargarMapa();
    mapa0.mostrarTodasCiudades(document.getElementById("tablaCiudades"));
}

function ordenarPorNombre() {
    mapa0.ordenarPorNombre(document.getElementById("tablaCiudades"));
}

function ordenarPorPrecioAsc() {
    mapa0.ordenarPorPrecioAsc(document.getElementById("tablaCiudades"));
}
function ordenarPorPrecioDesc() {
    mapa0.ordenarPorPrecioDesc(document.getElementById("tablaCiudades"));
}
function mostrarRuta() {
    mapa0.mostrarRuta(document.getElementById("rutaCiudades"));
}
function filtrar(tipo) {
    if (tipo == "precio") {
        var precio = document.getElementById("precio").value;
        mapa0.filtrar(tipo, precio, document.getElementById("tablaCiudades"));
    }
    if (tipo == "distancia") {
        var distancia = 0;
        var listaRadios = document.getElementsByName("distancia");
        //var listaRadios=document.querySelector("input [type=radio]");

        for (i = 0; i < listaRadios.length; i++) {
            if (listaRadios[i].checked) distancia = listaRadios[i].value;
        }
        mapa0.filtrar(tipo, distancia, document.getElementById("tablaCiudades"));
    }
    if (tipo == "pais") {
        var pais = document.getElementById("pais").value;
        mapa0.filtrar(tipo, pais, document.getElementById("tablaCiudades"));
    }
}

function comprobarFechas() {
    var valorInicio = document.getElementsByName("fechaInicio")[0].value;
    var valorFin = document.getElementsByName("fechaFin")[0].value;

    if (valorInicio == "" || valorFin == "") {
        alert("Alguna de las fechas está vacía");
        return;
    }

    var yearInicio = valorInicio.substr(6, 4);
    var mesInicio = valorInicio.substr(3, 2);
    var diaInicio = valorInicio.substr(0, 2);
    var fechaInicio = new Date(yearInicio, mesInicio - 1, diaInicio);

    if (yearInicio != fechaInicio.getFullYear() || (mesInicio - 1) != fechaInicio.getMonth() || diaInicio != fechaInicio.getDate()) {
        alert("Fecha inicio tiene un formato invalido. Debe ser dd/mm/yyyy");
        return;
    }

    var yearFin = valorFin.substr(6, 4);
    var mesFin = valorFin.substr(3, 2);
    var diaFin = valorFin.substr(0, 2);
    var fechaFin = new Date(yearFin, mesFin - 1, diaFin);

    if (yearFin != fechaFin.getFullYear() || (mesFin - 1) != fechaFin.getMonth() || diaFin != fechaFin.getDate()) {
        alert("Fecha fin tiene un formato invalido. Debe ser dd/mm/yyyy");
        return;
    }

    if ((fechaFin.getTime() - fechaInicio.getTime()) < (5 * 24 * 60 * 60 * 1000)) {
        alert("La diferencia de fechas no es valida");
    } else alert("Las fechas son validas")
}