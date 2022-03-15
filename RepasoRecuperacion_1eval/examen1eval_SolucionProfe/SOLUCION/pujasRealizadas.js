$(document).ready(()=>{
    mostrarPujas(recuperarPujasLocalStorage());
    $("button#btnMostrarPujasFinalizadas").click(mostrarPujasFinalizadas);
});
function mostrarPujas(lista){
    let $tbody=$("div#principal table tbody").empty();
    lista.forEach(puja => {
        let $fila=$("<tr></tr>").appendTo($tbody);
        let yate=listaYates.find(a=>a.Codigo == puja.CodigoYate);
        $("<td></td>").appendTo($fila).append(`<img src="./imagenes/${yate.Foto}" class="imagenMin">`);
        $("<td></td>").appendTo($fila).text(yate.FechaCierrePuja);
        let $tdPrecio=$("<td></td>").appendTo($fila).text(puja.PrecioPuja);
        let $celda=$("<td></td>").appendTo($fila);
        $("<span>Eliminar</span>").appendTo($celda).click({"pujaAEliminar":puja,"fila":$fila},eliminar);
        $("<br>").appendTo($celda);
        let $caja=$("<input type='text' size='8'>").appendTo($celda);
        $("<span>Editar</span>").insertBefore($caja).click({"pujaAEditar":puja,"caja":$caja,"tdPrecio":$tdPrecio},editar);
    });
}
function eliminar(event){
    let pujaAEliminar = event.data.pujaAEliminar;
    let lista=recuperarPujasLocalStorage();
    let posicion=lista.findIndex((x)=>x.CodigoYate == pujaAEliminar.CodigoYate && x.FechaPuja == pujaAEliminar.FechaPuja);
    if (posicion!=-1){
        lista.splice(posicion,1);
        localStorage.setItem("pujas",JSON.stringify(lista));
        event.data.fila.remove();
    }
}
function editar(event){
    let pujaAEditar = event.data.pujaAEditar;
    let lista=recuperarPujasLocalStorage();
    let posicion=lista.findIndex((x)=>x.CodigoYate == pujaAEditar.CodigoYate && x.FechaPuja == pujaAEditar.FechaPuja);
    if (posicion!=-1){
        lista[posicion].PrecioPuja = parseInt(event.data.caja.val());
        localStorage.setItem("pujas",JSON.stringify(lista));
        event.data.caja.slideUp(3000);
        event.data.tdPrecio.text(event.data.caja.val());
        $(event.target).off();
    }
}
function recuperarPujasLocalStorage(){
    var lista=[];
    if (localStorage.getItem("pujas")){
        lista=JSON.parse(localStorage.getItem("pujas"));
    }
    return lista;
}
function mostrarPujasFinalizadas(){
    mostrarPujas(recuperarPujasLocalStorage().filter((puja)=>new Date(puja.FechaAviso)<new Date()));
}