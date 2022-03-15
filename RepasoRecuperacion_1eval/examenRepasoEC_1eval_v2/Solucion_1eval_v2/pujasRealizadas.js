//---------------------------------------
/* EJERCICIO3 */
//---------------------------------------

//IGUAL QUE: window.onload = function() {}
$(document).ready(function(){
    listaPujasCorrectas = JSON.parse(localStorage.getItem("pujasCorrectas"));
    mostrarYatesPujados(listaPujasCorrectas);


    $('#principal table tbody span:contains("Eliminar")').on("click", {}, eliminarPuja);  
    $('#principal table tbody span:contains("Editar")').on("click", {}, editarPuja);     
});

//---------------------------------------

function mostrarYatesPujados(lista) {
    if(lista==null) {
        $('#principal').append("<br><br> <font size='5' style='color:red;'>TODAVÍA NO HAY NINGUNA PUJA REALIZADA</font>");
    }
    for(i=0; i<lista.length; i++) {
        var yateFiltrado = listaYates.filter(elemento => elemento.Codigo == lista[i].CodigoYate);
        $('#principal table tbody').append(`<tr>
                                                <input type="hidden" value="${lista[i].CodigoYate}" name="codigosYates">
                                                <td><img src='./imagenes/${yateFiltrado[0].Foto}' class='imagenMin'></td>
                                                <td>${yateFiltrado[0].FechaCierrePuja}</td>
                                                <td>${lista[i].PrecioPuja}</td>
                                                <td>
                                                    <p style='cursor:pointer;'>
                                                        <span>Eliminar</span> <br>
                                                        <span>Editar</span> <input type='text' name='editarPuja' size='6'> 
                                                    </p>
                                                </td>
                                            </tr>`);
    }
}


//---------------------------------------

function eliminarPuja(event) {
    var filaSeleccionada = event.target.parentNode.parentNode.parentNode;
    var codYateSeleccionado = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[0].value;
    
    for(var i=0; i<listaPujasCorrectas.length; i++) {
        if(listaPujasCorrectas[i].CodigoYate == codYateSeleccionado) {
            // Eliminar fila de la tabla
            $(filaSeleccionada).remove();
            // Borra puja de lista
            listaPujasCorrectas.splice(i,1);
            // Almacena puja
            localStorage.setItem("pujasCorrectas", JSON.stringify(listaPujasCorrectas));
        }
    }



}

    
//---------------------------------------


function editarPuja(event) {
    var filaSeleccionada = event.target.parentNode.parentNode.parentNode;
    var codYateSeleccionado = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[0].value;
    var numEscrito = event.target.parentNode.getElementsByTagName("input")[0].value;
    var tdEditaPuja = event.target.parentNode.parentNode.parentNode.getElementsByTagName("td")[2];
    var cajaTextoEditar = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input")[1];
    var spanEditar = event.target.parentNode.parentNode.parentNode.getElementsByTagName("span")[1];
    
    var editado = false;

    // console.log(filaSeleccionada);
    // console.log(codYateSeleccionado);
    // console.log(numEscrito);
    // console.log(tdEditaPuja);
    // console.log(cajaTextoEditar);

    if(numEscrito != "" && !isNaN(numEscrito)) {
        for(var i=0; i<listaPujasCorrectas.length; i++) {
            if(codYateSeleccionado == listaPujasCorrectas[i].CodigoYate) {
                // Inserta puja    
                listaPujasCorrectas.push({     
                    CodigoYate : listaPujasCorrectas[i].CodigoYate, 
                    PrecioPuja : numEscrito,
                    PuertoRecogida : listaPujasCorrectas[i].PuertoRecogida,
                    TarjetaPago : listaPujasCorrectas[i].TarjetaPago,
                    FechaAviso : listaPujasCorrectas[i].FechaAviso
                });
                // Borra puja de lista
                listaPujasCorrectas.splice(i,1);
                // Almacena puja
                localStorage.setItem("pujasCorrectas", JSON.stringify(listaPujasCorrectas));
                editado = true;

                

                //Caja de texto animada 3 segundos antes de ocultarse
                $(cajaTextoEditar).animate({borderWidth:'+=15px'},3000,function() {
                    $(tdEditaPuja).text(numEscrito);  //Edita td con el nuevo valor de Puja
                    $(cajaTextoEditar).hide();  //Oculta
                    $(spanEditar).off('click');  //Elimina evento del span
                });
            }  
        }
        if(editado == true) {
            alert("EDITADO CON ÉXITO!");
        }
    } else {
        alert("[ERROR] NO HA INTRODUCIDO NINGÚN NÚMERO O ES INCORRECTO");
    }
    
    

}

