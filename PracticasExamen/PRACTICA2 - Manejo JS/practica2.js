/*
EJERCICIO 1: Al cargar la página debe aparecer directamente la tabla de ciudades.
*/
window.onload = function () {
    cargarCiudades();
    mostrarTablaCiudades(listaCiudades);
}

var listaCiudades = [];
var listaTitulos = ["","CIUDAD","PAIS","DISTANCIA","PRECIO","BREVE DESCRIPCION"];
var listaFiltrada = [];
var hayFiltro = false;

function cargarCiudades() {
    var ciudad0 = new Array("MADRID", "34ESPAÑA", 756, 890, "CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS", "madrid.gif");
    var ciudad1 = new Array("BARCELONA", "34ESPAÑA", 236, 1190, "CIUDAD COSTERA DEL MEDITERRANEO.", "barcelona.gif");
    var ciudad2 = new Array("VALENCIA", "34ESPAÑA", 324, 650, "CAPITAL COSTERA. CIUDAD DE LAS ARTES Y LAS CIENCIAS", "valencia.gif");
    var ciudad3 = new Array("LISBOA", "33PORTUGAL", 756, 890, "CAPITAL DEL PAIS. CIUDAD COSTERA ATLANTICO", "lisboa.gif");
    var ciudad4 = new Array("PARIS", "31FRANCIA", 1556, 2890, "CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS", "paris.gif");
    var ciudad5 = new Array("LONDRES", "3OREINO UNIDO", 2256, 3890, "CAPITAL DEL PAIS. MUSEOS. BIG BEN", "londres.gif");
    var ciudad6 = new Array("BERLIN", "35ALEMANIA", 1234, 4890, "CAPITAL DEL PAIS. ZOO.AVENIDAS", "berlin.gif");
    var ciudad7 = new Array("BERNA", "36SUIZA", 6345, 990, "CAPITAL DEL PAIS.MUSEOS, RESTAURANTES, PARQUES", "berna.gif");
    var ciudad8 = new Array("ROMA", "37ITALIA", 956, 1190, "CAPITAL DEL PAIS. HISTORIA. MUSEOS. IGLESIAS", "roma.gif");
    var ciudad9 = new Array("AMSTERDAM", "38HOLANDA", 2756, 1190, "CAPITAL DEL PAIS. ", "amsterdam.gif");
    var ciudad10 = new Array("VIENA", "39AUSTRIA", 1756, 1290, "CAPITAL DEL PAIS. OPERA. MUSEOS.", "viena.gif");
    var ciudad11 = new Array("BRUSELAS", "40BELGICA", 1056, 5890, "CAPITAL DEL PAIS. PUERTO.", "bruselas.gif");
    var ciudad12 = new Array("COPENAGUE", "41DINAMARCA", 1556, 6890, "CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS", "copenague.gif");
    var ciudad13 = new Array("OSLO", "42NORUEGA", 856, 880, "CAPITAL DEL PAIS. PAISAJES.", "oslo.gif");
    listaCiudades[0] = ciudad0;
    listaCiudades.push(ciudad1);
    listaCiudades.push(ciudad2);
    listaCiudades.push(ciudad3);
    listaCiudades.push(ciudad4);
    listaCiudades.push(ciudad5);
    listaCiudades.push(ciudad6);
    listaCiudades.push(ciudad7);
    listaCiudades.push(ciudad8);
    listaCiudades.push(ciudad9);
    listaCiudades.push(ciudad10);
    listaCiudades.push(ciudad11);
    listaCiudades.push(ciudad12);
    listaCiudades.push(ciudad13);
}


function mostrarTablaCiudades(lista) {
    //borramos la tabla si ya existe
    var listaTablas = document.getElementById("tablaCiudades").getElementsByTagName("table");
    if (listaTablas.length > 0) {
        document.getElementById("tablaCiudades").removeChild(listaTablas[0]);
        //listaTablas[0].remove();
    }

    var tabla = document.createElement("table");
    tabla.style.border="3px solid black";
    document.getElementById("tablaCiudades").appendChild(tabla);

    var fila = document.createElement("tr");
    fila.style.border="2px solid black";
    tabla.appendChild(fila);
    //fila.style.backgroundColor="grey";

    for(i=0;i<listaTitulos.length;i++){
        var columnaCabecera=document.createElement("th");
        columnaCabecera.appendChild(document.createTextNode(listaTitulos[i]));
        fila.appendChild(columnaCabecera);
    }

    for(i=0;i<lista.length;i++){
        var fila = document.createElement("tr");
        fila.style.border="2px solid black";
        tabla.appendChild(fila);

        if((i%2)==0) {
            fila.style.backgroundColor="blue";
        }

        var columna = document.createElement("td");
        columna.style.border="2px solid black";
        fila.appendChild(columna);

        var textoCaja = document.createElement("input");
        textoCaja.type="text";
        textoCaja.size=2;
        textoCaja.id="caja"+i;
        columna.appendChild(textoCaja);

        for(j=0;j<lista[i].length;j++){
            columna = document.createElement("td");
            columna.style.border="2px solid black";
            fila.appendChild(columna);
            if(j==1) {
                contenido = lista[i][j].substr(2);
            } else if(j==4){
                contenido = lista[i][j].substr(0,20);
            }else {
                contenido = lista[i][j];
            }
            columna.appendChild(document.createTextNode(contenido));
        }

    }

}



/*
EJERCICIO 2: Crea la función “ordenarPorNombre” que deberá cargar la tabla de nuevo pero ordenada por nombre
*/
function ordenarPorNombre(){
    listaCiudades.sort((a,b) => {
        if(a[0]>b[0]) return 1;
        else if(a[0]==b[0]) return 0;
        else return -1;
    });
    mostrarTablaCiudades(listaCiudades);
    hayFiltro=false;
}

/*
EJERCICIO 3: Crea la función “ordenarPorPrecioAsc” que deberá cargar la tabla de nuevo 
pero ordenada por precio ascendentemente.
*/
function ordenarPorPrecioAsc(){
    listaCiudades.sort((a,b) => {
        if(a[3]>b[3]) return 1;
        else if(a[3]==b[3]) return 0;
        else return -1;
    });
    mostrarTablaCiudades(listaCiudades);
    hayFiltro=false;
}

/*
EJERCICIO 4: Crea la función “ordenarPorPrecioDesc” que deberá cargar la tabla de nuevo 
pero ordenada por precio ascendentemente.
*/
function ordenarPorPrecioDesc(){
    listaCiudades.sort((a,b) => {
        if(a[3]<b[3]) return 1;
        else if(a[3]==b[3]) return 0;
        else return -1;
    });
    mostrarTablaCiudades(listaCiudades);
    hayFiltro=false;
}


/*
EJERCICIO 5: Crea la función “filtrar” que deberá cargar la tabla de nuevo Dicha función 
recibirá el tipo de filtro (precio, distancia, país) y mostrará las ciudades que cumplan 
el filtro correspondiente.
*/
function filtrar(tipoFiltro){
    listaFiltrada=[];
    hayFiltro=true;

    if(tipoFiltro=="precio"){
        var precio = document.getElementById("precio").value;
        if(precio==1) {
            listaFiltrada=listaCiudades.filter(element => element[3]<1000);
        } 
        if(precio==2) {
            listaFiltrada = listaCiudades.filter(element => element[3]>=1000 && element[3]<=2000);
        } 
        if(precio==3) {
            listaFiltrada = listaCiudades.filter(element => element[3]>2000);
        }
    }

    if(tipoFiltro=="distancia"){
        var distancia =  0;
        var listaRadios = document.getElementsByName("distancia");
        for(i=0; i<listaRadios.length;i++){
            if(listaRadios[i].checked){
                distancia = listaRadios[i].value;
            }
        }

        if(distancia==1){
            listaFiltrada=listaCiudades.filter(element => element[2]<1000);
        }
        if(distancia==2){
            listaFiltrada = listaCiudades.filter(element => element[2]>=1000 && element[2]<=2000);
        }
        if(distancia==3){
            listaFiltrada = listaCiudades.filter(element => element[2]>2000);
        }

    }


    if(tipoFiltro=="pais"){
        var pais = document.getElementById("pais").value;
        pais = pais.trim().toUpperCase();
        listaFiltrada=listaCiudades.filter(element => element[1].substr(2).toUpperCase().trim().includes(pais));
    }


    mostrarTablaCiudades(listaFiltrada);

   
}




/*
EJERCICIO 6: Crea la función “mostrarRuta” que deberá mostrar en la capa “rutaCiudades” 
la lista de ciudades seleccionadas (aquellas que tengan en la caja de texto un número) 
ordenada con total de kilómetros y precio.
*/
function mostrarRuta(){
    var listaRutas=[];
    var filas=[];

    if(hayFiltro) {
        filas = listaFiltrada;
    } else {
        filas = listaCiudades;
    }

    for(i=0;i<filas.length;i++){
        var valor = document.getElementById("caja"+i).value;
        if(valor!="" && !isNaN(valor)){
            var ciudad=filas[i].concat();
            ciudad.unshift(valor);
            listaRutas.push(ciudad);
        }
    }

    listaRutas.sort((a,b)=>{return a[0]-b[0];});

    var contenido = "";
    var totalKm = 0;
    var totalPrecio = 0;
    for(i=0;i<listaRutas.length;i++){
        contenido = contenido+" "+listaRutas[i][0]+" "+listaRutas[i][1]+"<br>";
        totalKm+=listaRutas[i][3];
        totalPrecio+=listaRutas[i][4];
    }
    contenido+="<br>";
    contenido+=totalKm+" KILOMETROS<br>";
    contenido+=totalPrecio+" EUROS<br>";
    document.getElementById("rutaCiudades").innerHTML=contenido;
}




/*
EJERCICIO 7: Crea la función “comprobarFechas” que deberá indicar un error si alguna de las 
fechas no es valida o fecha Inicio no es menor en al menos 5 días que fecha Fin.
*/
function comprobarFechas(){
    var valorInicio = document.getElementsByName("fechaInicio")[0].value;
    var valorFin = document.getElementsByName("fechaFin")[0].value;

    if(valorInicio=="" || valorFin==""){
        alert("Ha dejado alguna de las fechas vacías");
    }

    var anioInicio=valorInicio.substr(6,4);
    var mesInicio=valorInicio.substr(3,2);
    var diaInicio=valorInicio.substr(0,2);
    var fechaInicio=new Date(anioInicio,mesInicio-1,diaInicio);

    if(anioInicio!=fechaInicio.getFullYear() || (mesInicio-1)!=fechaInicio.getMonth() 
        || diaInicio!=fechaInicio.getDate()) {
            alert("La fecha de inicio tiene formato incorrecto, debe ser: dd/mm/yyyy");
    }

    var anioFin=valorFin.substr(6,4);
	var mesFin=valorFin.substr(3,2);
	var diaFin=valorFin.substr(0,2);
    var fechaFin= new Date(anioFin,mesFin-1,diaFin);
	
	if (anioFin!=fechaFin.getFullYear() || (mesFin-1)!=fechaFin.getMonth() || diaFin!=fechaFin.getDate()){
		alert("La fecha de fin tiene un formato invalido. Debe ser dd/mm/yyyy");
	}

    if((fechaFin.getTime()-fechaInicio.getTime())<(5*24*60*60*1000)) {
        alert("La diferencia de fechas no es valida, mínimo 5 días");
    } else {
        alert("La fechas son validas");
    }
}

