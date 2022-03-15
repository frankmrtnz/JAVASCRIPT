
$(document).ready(function(){
        listaPujasCorrectas = JSON.parse(localStorage.getItem("pujasCorrectas"));
        mostrarPujasCorrectas(listaPujasCorrectas);


        $('#principal table tbody span:contains("Eliminar")').click({}, eliminarPuja);
        $('#principal table tbody span:contains("Editar")').click({}, editarPuja);

});



function mostrarPujasCorrectas(lista) {
    if(lista == null) {
        $("#principal").append("<h5>TODAVÍA NO HAY PUJAS REALIZADAS</h5>");
    } else {
        for(let i=0; i<lista.length; i++) {
            var yateFiltrado = listaYates.filter(elemento => elemento.Codigo == lista[i].CodigoYate);
            $('#principal table tbody').append(`<tr>
                                                    <input type="hidden" value="${lista[i].CodigoYate}" name="datosPuja">
                                                    <td><img src='./imagenes/${yateFiltrado[0].Foto}' class='imagenMin'></td>
                                                    <td>${yateFiltrado[0].FechaCierrePuja}</td>
                                                    <td>${lista[i].PrecioPuja}</td>
                                                    <td>
                                                        <p>
                                                            <span style='cursor:pointer;'>Eliminar</span> <br>
                                                            <span style='cursor:pointer;'>Editar</span> <input type='text' name'editarPuja' size='6'>
                                                        </p>
                                                    </td>
                                                </tr>`);
        }

    }
}


function eliminarPuja(event) {
    var filaSeleccionada = event.target.parentNode.parentNode.parentNode;
    var codigoPujaSeleccionada = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[0].value;
    console.log(filaSeleccionada);
    for(let i=0; i<listaPujasCorrectas.length; i++) {
        if(codigoPujaSeleccionada == listaPujasCorrectas[i].CodigoYate) {
            //Borra puja
            listaPujasCorrectas.splice(i,1);
            //Actualiza localStorage
            localStorage.setItem("pujasCorrectas", JSON.stringify(listaPujasCorrectas));
            alert("PUJA ELIMINADA (ID: "+codigoPujaSeleccionada+")");
            filaSeleccionada.remove();
        }
    }

}


function editarPuja(event) {
    var filaSeleccionada = event.target.parentNode.parentNode.parentNode;
    var codigoPujaSeleccionada = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[0].value;
    var numEscrito = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[1].value;
    var tdPujaAEditar = event.target.parentNode.parentNode.parentNode.getElementsByTagName("td")[2];
    var cajaTextoEditar = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[1];
    var spanEditar = event.target.parentNode.parentNode.parentNode.getElementsByTagName("span")[1];

    if(numEscrito!="" && !isNaN(numEscrito)) {
        var editado = false;

        for(let i=0; i<listaPujasCorrectas.length; i++) {
            if(codigoPujaSeleccionada == listaPujasCorrectas[i].CodigoYate) {
                //Inserta puja
                listaPujasCorrectas.push({
                    CodigoYate : codigoPujaSeleccionada,
                    PrecioPuja : numEscrito,
                    PuertoRecogida : listaPujasCorrectas[i].PuertoRecogida,
                    TarjetaPago : listaPujasCorrectas[i].TarjetaPago,
                    FechaAviso : listaPujasCorrectas[i].FechaAviso
                });
                //Borra puja
                listaPujasCorrectas.splice(i,1);
                //Actualiza localStorage
                localStorage.setItem("pujasCorrectas", JSON.stringify(listaPujasCorrectas));
                editado=true;


                $(tdPujaAEditar).text(numEscrito);
                $(cajaTextoEditar).animate({width:'0px'}, 3000, function() {
                    $(cajaTextoEditar).hide();  //Oculta
                    $(spanEditar).off("click"); //Elimina evento del span
                });
                

                // //Caja de texto animada 3 segundos antes de ocultarse
                // $(cajaTextoEditar).animate({borderWidth:'+=15px'},3000,function() {
                //     $(tdPujaAEditar).text(numEscrito);  //Edita td con el nuevo valor de Puja
                //     $(cajaTextoEditar).hide();  //Oculta
                //     $(spanEditar).off('click');  //Elimina evento del span
                // });
            }
        }

        if(editado) {
            alert("EDITADO CON ÉXITO");
        } else {
            alert("HUBO ALGÚN ERROR AL EDITAR LA PUJA");
        }
    } else {
        alert("[ERROR] No ha introducido un número válido");
    }


}