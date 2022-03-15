import { pedirCartelera, comprarEntradas } from './cartelera.js';
import { Storage } from './storage.js';

var listaObras=[];
var total=0;
var listaPropiedadesObra=["nombre","imagen"];

pedirCartelera("consultaCartelera.php",{},recibirCartelera);

$(document).ready(function(){
    $("div#carrito").on("click",{},verCarrito);
});

function verCarrito(){

    if ($("div#detalleCarrito:visible").length>0){
       $("div#detalleCarrito").hide();
    }else{

       $("div#detalleCarrito").empty();

       var storage = new Storage("carrito");
       var lista = storage.leer();
     
       lista.forEach( operacion => {
       $("<div></div>")
         .html(`<p> Id: ${operacion.idObra} 
                 Fecha: ${operacion.fecha}
                </p>`)
         .appendTo("div#detalleCarrito");
       });
       $("<button></button>")
          .attr("type","button")
          .on("click",{"lista":lista},realizarCompra)
          .text("FINALIZAR COMPRA")
          .appendTo("div#detalleCarrito");
       $("div#detalleCarrito").show();
    }
}

function recibirCartelera(datos){
   listaObras= datos;
   mostrarObras(listaObras);
}

function mostrarObras(lista){
   
   var $divCartelera=$("#divCartelera");
   lista.forEach( obra =>{
       var $divObra=$("<div></div>")
              .addClass("child")
              .appendTo($divCartelera)
              .append("<p>" + obra.nombre + "</p>")
              .append("<img src='"+ obra.imagen +"'><BR>");
       $("<button type='button'>COMPRAR ENTRADAS</button>")
              .appendTo($divObra)
              .on("click",{"obraSeleccionada":obra},mostrarDivCompra);
   }); 
}
function mostrarDivCompra(evento){
   //FORMULARIO: NUMERO DE ENTRADAS - SELEC CON FECHAS - SELECT BUTACAS - NOMBRE - IMAGEN - DESCRIPCION
   var obra = evento.data.obraSeleccionada;

   if ($("div.centrada")) {
    $("div.centrada").remove();
   }                 
   var $select=$("<select></select>");
   var $divObra=$("<div></div>").addClass("centrada")
              .appendTo(document.body);
   $("<img src='cerrar.png' class='boton'>")
              .on("click",{},()=> $("div.centrada").remove())
              .appendTo($divObra);
   $divObra.append("<p>" + obra.nombre + "</p>")
              .append("<img class='foto' src='"+ obra.imagen +"'><BR>");              
    $("<input type=date id=fechaCompra>")
              .appendTo($divObra)
              .on("change",{"id":obra.idObra},cargarButacas);
    $divObra.append("<br><span id='numButacas'></span>");
    $("<select></select>").hide().attr("id","selectButacas")
              .appendTo($divObra);
    $("<br>").appendTo($divObra);
    $("<button type='button'>COMPRAR</button>")
              .attr("id","botonButacas")
              .on("click",{"id":obra.idObra},guardarEnCarrito)
              .appendTo($divObra).hide();
}
function cargarButacas(event){
  var idObra = event.data.id;
  var fecha = event.target.value;
  pedirCartelera("consultaButacasPorFechaYObra.php",
  {"fecha":fecha,"idObra":idObra},pintarSelect);
}
function pintarSelect(datos){
   if (datos.length>0){
       $("span#numButacas").text("NUMERO DE ENTRADAS:").show();
       $("button#botonButacas").show();
       var $select=$("select#selectButacas")
              .empty()
              .show();
       var maximo = datos[0].NumeroTotalButacas -   
                    datos[0].NumeroButacasOcupadas;
       for(var i=1;i<= maximo;i++){
          $("<option></option>").text(i)
                                .appendTo("select#selectButacas");
       } 
   } else {
    $("select#selectButacas").hide();
    $("button#botonButacas").hide();
    $("span#numButacas").show().text("NO HAY ENTRADAS PARA ESA FECHA");
   }   
}
function guardarEnCarrito(evento){
  var idObra = evento.data.id;
  var fecha = $("input#fechaCompra").val()
  var numeroEntradas=parseInt($("select#selectButacas").val());

  var storage = new Storage("carrito");
  storage.guardar({
    "idObra":idObra,
    "fecha": fecha,
    "numeroEntradas": numeroEntradas
  });
  actualizarTotalCarrito(numeroEntradas);
}
function actualizarTotalCarrito(numeroEntradas) {
    $("div#carrito span").remove();
    total += numeroEntradas;
    $("<span></span>").text(total).appendTo("div#carrito");
}


function realizarCompra(evento){
  var lista=evento.data.lista;
  contadorTotal=lista.length;
  contadorMalas=0;
  contadorBuenas=0;
  lista.forEach( operacion => {
    comprarEntradas("comprarEntradas.php",
      {"fecha":operacion.fecha,
       "idObra":operacion.idObra,
       "numeroEntradas":operacion.numeroEntradas}
      ,recibirRespuestaCompra);
  });
}
var contadorBuenas;
var contadorMalas;
var contadorTotal;
function recibirRespuestaCompra(respuesta){

/*  if (respuesta =="1") {
    contadorBuenas++;
  } else {
    contadorMalas++;
  }
  if (contadorTotal == contadorBuenas + contadorMalas){
     
  }
*/
}










