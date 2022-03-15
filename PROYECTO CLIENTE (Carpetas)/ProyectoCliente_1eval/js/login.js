


window.onload = function() {
    //Botones
    document.getElementById("btnAcceso").addEventListener("click", loguearUsuario);

    //Botones/Enlaces footer
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'
}


//---------------------------------------------------------



/*LOGIN DE USUARIO*/
//Función para registrar y validar usuario usando la función de localStorage para registrar usuarios
function loguearUsuario() {
    
    var vNombreUsuario = document.getElementById("nombreUsuario").value;
    var vClave = document.getElementById("clave").value;
    var vEmail =document.getElementById("email").value

    var listUsers = obtenerListaUsuarios();
    

    if (listUsers.findIndex(usuario=> usuario.nombreUsuario == vNombreUsuario 
            && usuario.email == vEmail 
            && usuario.clave == vClave) == -1){
        alert("NOMBRE USUARIO/EMAIL/CLAVE no existen o son erroneos, debe registrarse.")
        document.getElementById("nombreUsuario").style.border = "2px solid red";
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("clave").style.border = "2px solid red";
        $("#register").css("font-size", "2em");
    } else {
        alert("LOGUEADO CON ÉXITO.");
        sessionStorage.setItem("usuario", vNombreUsuario+","+vEmail+","+vClave);
        location.href = "aterrizaje.html";
    }
}



//Array donde guardaremos los datos de los usuarios registrados
var listaUsuarios=[];


//Si localStorage de listaUsuarios es nulo cargamos el usuario Admin por defecto
if(localStorage.getItem("localListaUsuarios") == null){
    listaUsuarios.push(new Usuario("admin","admin@gmail.com","admin1234"));
    localStorage.setItem("localListaUsuarios", JSON.stringify(listaUsuarios));
}


//Funcion para obtener la lista de Usuarios almacenados en el localStorage
function obtenerListaUsuarios() {
    var listaAlmacenada = localStorage.getItem('localListaUsuarios');
    if(listaAlmacenada == null) {
        listaUsuarios = [];
    } else {
        listaUsuarios = JSON.parse(listaAlmacenada);
    }
    return listaUsuarios;
}







