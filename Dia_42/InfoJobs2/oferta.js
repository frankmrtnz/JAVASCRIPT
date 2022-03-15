class Oferta {
    constructor(id, titulo, descripcion, ubicacion, requisitos, salario, duracion, IdEmpresa, FechaCaducidad, EstaActiva) {
        this.Id = id;
        this.Titulo = titulo | "Sin titulo";
        this.Descripcion = descripcion;
        this.Ubicacion = ubicacion;
        this.Requisitos = requisitos;
        this.Salario = salario;
        this.Duracion = duracion;
        this.IdEmpresa = IdEmpresa;
        this.FechaCaducidad = FechaCaducidad;
        this.EstaActiva = EstaActiva;
    }
}

var numeroOferta = 1;

async function hacerPeticionOfertas(){
    try {
        const respuesta = await fetch("/Dia_42/InfoJobs2/consultaOfertas.php");
        const ofertas = await respuesta.json();
        pintarOfertas(ofertas);
    } catch (error) {
        // console.log(error);
        alert("ERROR AL HACER PETICION AL SERVIDOR ("+error+")");
    }
    
}

function pintarOfertas(lista){
    lista.forEach(oferta =>{
        let $div=$("<div></div>").appendTo("#central");
        $("<h1></h1>").text(oferta.Titulo).appendTo($div);
        $("<p></p>").text("Descripción: "+oferta.Descripcion).appendTo($div);
        $("<p></p>").text("Ubicación: "+oferta.Ubicacion).appendTo($div);
        $("<p></p>").text("Requisitos: "+oferta.Requisitos).appendTo($div);
        $("<p></p>").text("Salario: "+oferta.Salario).appendTo($div);
        $("<p></p>").text("Duración: "+oferta.Duracion).appendTo($div);
        $("<p></p>").text("Id Empresa: "+oferta.IdEmpresa).appendTo($div);
        $("<p></p>").text("Fecha Caducidad: "+oferta.FechaCaducidad).appendTo($div);
        $("<p></p>").text("Esta Activa: "+oferta.EstaActiva).appendTo($div);
        $("<br>").appendTo("#central");
    });
    $("<button type='button' style='border-radius:50%; width:40px; height:40px;'>+</button>").appendTo("#central").click({}, anadirOferta);

}


//------------------------------------------------


//AÑADIR OFERTA

function anadirOferta() {
    $('#divNuevaOferta').remove();
    let $divNuevaOferta = $("<div id='divNuevaOferta' class='centrado'></div>").appendTo(document.body);
    let $formNuevaOferta = $("<form action='insertarOferta.php' method='POST'></form>").appendTo($divNuevaOferta);
    $("<p id='cerrarDiv' style='cursor:pointer;'></p>").text("X").appendTo($formNuevaOferta).on("click", {}, cerrarDivNuevaOferta)   
    $("<h4></h4>").text("INSERTE LOS DATOS DE LA NUEVA OFERTA:").appendTo($formNuevaOferta);
    $("<p>Título: <input type='text' id='titulo' name='titulo'></p>").appendTo($formNuevaOferta);
    $("<p>Descripción: <input type='text' id='descripcion' name='descripcion'></p>").appendTo($formNuevaOferta);
    $("<p>Ubicación: <input type='text' id='ubicacion' name='ubicacion'></p>").appendTo($formNuevaOferta);
    $("<p>Requisitos: <input type='text' id='requisitos' name='requisitos'></p>").appendTo($formNuevaOferta);
    $("<p>Salario: <input type='number' id='salario' name='salario'></p>").appendTo($formNuevaOferta);
    $("<p>Duración: <input type='text' id='duracion' name='duracion'></p>").appendTo($formNuevaOferta);
    $("<p>ID Empresa: <input type='number' id='IdEmpresa' name='IdEmpresa'></p>").appendTo($formNuevaOferta);
    $("<p>Fecha Caducidad: <input type='date' id='FechaCaducidad' name='FechaCaducidad'></p>").appendTo($formNuevaOferta);
    $("<p>Está Activa: <input type='radio' name='EstaActiva' value='1'>Sí <input type='radio' name='EstaActiva' value='0'>No</p>").appendTo($formNuevaOferta);
    $("<p><button type='submit' name='insertarOferta'>Insertar Oferta</button> <button type='reset' name='resetear'>Resetear</button></p>").appendTo($formNuevaOferta);  
}

function cerrarDivNuevaOferta() {
    $('#divNuevaOferta').remove();
}

function mensajeExitoInsercion() {
    var urlPagina = (window.location.href).split("=");
    var urlPagina2 = urlPagina[1];
    if(urlPagina2 == "ok") {
        alert("Oferta insertada con éxito.");
        window.location.href = "index.html";
    } else if(urlPagina2 == "error") {
        alert("No se ha insertado la oferta, intente de nuevo.");
        window.location.href = "index.html";
    }
}


//------------------------------------------------


//FILTRO SALARIO INPUT CON CANTIDAD
function pintarFiltroSalario() {
    let $div=$("<div></div>").appendTo("#central");
    let $divFiltros = $("<div></div>").prependTo($div);
    $("<h4></h4>").text("Filtros:").appendTo($divFiltros);
    $("<input type='number' id='salario' name='salario'>").appendTo($("<p></p>").text("Salario ").appendTo($divFiltros));
    $("<button type='button' id='filtrarSalario' name='filtrarSalario'>Filtrar</button>").appendTo($divFiltros).on("click", {}, filtrarPorSalario);
}

async function filtrarPorSalario() {
    try {
        var valueFiltroSalario = $("#salario").val();
        // console.log(valueFiltroSalario);
        const respuesta = await fetch("/Dia_42/InfoJobs2/consultaOfertas.php");
        const ofertas = await respuesta.json();
        // console.log(ofertas);
        var listaFiltradaPorSalario = ofertas.filter(element => element.Salario == valueFiltroSalario);
        $('#central').text("");
        pintarFiltroSalario();
        pintarOfertas(listaFiltradaPorSalario);
    } catch (error) {
        // console.log(error);
        alert("ERROR AL HACER PETICION AL SERVIDOR ("+error+")");
    }
    
}


//------------------------------------------------


export { Oferta , numeroOferta, hacerPeticionOfertas, mensajeExitoInsercion, pintarFiltroSalario };




