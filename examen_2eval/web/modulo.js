import {etiqueta} from "/index.js";


$(document).ready(function (){
    //Añadimos la funcion que se realizará cuando se pulse el boton consulta
    $("button[name='Consultar']").click({},hacerPeticion);
    
})

//Funcion con la que haremos peticion al servidor
function hacerPeticion() {
    var servidorValor = document.getElementsByName("servidor")[0].value;
        console.log(servidorValor);
    $.get("consultaUsuarios.php", {servidor: servidorValor}, function(listaUsuarios) {
        // console.log(listaUsuarios);
        pintarUsuarios(listaUsuarios);
    }, "json");
}

//Funcion con la que pintamos usuarios tirando del componente web creado en index.js
function pintarUsuarios(lista) {
    var $divUsuarios = $("div#usuarios");
    lista.forEach(element => {
        $("<ies-usuario nombre="+element.nombre+" foto="+element.foto+"></ies-usuario>").appendTo($divUsuarios);
        
    });
    $("ies-usuario").click({},mostrarDivUsuario);
    // console.log(lista);
    // var $divUsuarios = $("div#infoUsers");
    // lista.forEach(element => {
    //     console.log(element.foto);
    //     console.log(element.nombre);
    //     var $divInfoUser = $("<div></div>").appendTo($divUsuarios);
    //     console.log($divInfoUser);
    //     var $img = $("<img src='./imagenes/"+element.foto+"' style='width:100px; height:100px;'>").appendTo($divInfoUser);
    //     console.log($img);
    //     $("<p style='text-align:left;'>"+element.nombre+"</p>").appendTo($divInfoUser);
    // });
}

//Funcion con la que mostraremos el div del usuario en el que hemos clickado en su imagen
function mostrarDivUsuario(event) {
    var nombre = event.target.getAttribute("nombre");
    var foto = event.target.getAttribute("foto");
    $("div#login").show();  //lo muestra
    $("div#login input:eq(0)").val(nombre); //inserta el nombre
    $("div#login input:eq(1)").removeAttr("disabled");  //borra el atributo disabled del input password
    $("div#login input:eq(1)").addClass("passwordUser");
    $("button:contains('VALIDAR')").click({"nombre":nombre, "password": document.getElementsByClassName("passwordUser")[0] },validarUsuario);
}


//contador para acumular las veces que le da el usuario al boton validar del login
var contador = 0;
//funcion con la que validaremos al usuario
function validarUsuario(event) {
    var nombreUsuario = event.data.nombre;
    var claveUsuario = event.data.password.value;
    var listaDatos = [];
    if(contador >= 3) {
        alert("Has probado 3 veces ya, se eliminara el usuario");
        $(event.target.parentNode).remove();
        var listaUsuarios2 = document.getElementsByTagName("ies-usuario");
        for(let i=0; i<listaUsuarios2.length; i++) {
            // console.log(listaUsuarios2[i].getAttribute("nombre"));
            if(listaUsuarios2[i].getAttribute("nombre") == nombreUsuario) {
                $(listaUsuarios2[i]).remove();  //elimina el div del usuario los usuarios
            }
        }
        
    } else {
        $.post("validar.php", {usuario:nombreUsuario, clave:claveUsuario}, function(datos) {
            if(datos.estado == "OK") {
                listaDatos.push("admin",nombreUsuario,claveUsuario);
    
                sessionStorage.setItem("datosUsuario", listaDatos);
                alert("¡Usuario correcto!");
                $(event.target.parentNode).remove();    //elimina el login
            } else {
                alert(datos.estado);
                contador++;
            }
        }, "json");
    }

}