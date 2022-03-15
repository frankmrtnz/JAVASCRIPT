


window.onload = function() {
    //Botones
    document.getElementById("btnRegister").addEventListener("click", mostrarRegistro);
    document.getElementById("btnLogin").addEventListener("click", mostrarLogin);
    document.getElementById("btnAcceso").addEventListener("click", loguearUsuario);


    //Enlaces
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook);
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter);
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle);
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram);
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral);
}

//Función para mostrar página de Registro (misma ventana)
function mostrarRegistro() {
    location.href = "registro.html";
}

//Función para mostrar página de Login (misma ventana)
function mostrarLogin() {
    location.href = "login.html";
}

//Función para mostrar página de Contacto  (ventana nueva)
function mostrarContacto() {
    window.open("contacto.html", "_blank");
}


//---------------------------------------------------------



/*LOGIN DE USUARIO*/
//Función para registrar y validar usuario usando la función de localStorage para registrar usuarios
function loguearUsuario() {
    
    var vNombreUsuario_email = document.getElementById("nombreUsuario_email").value;
    var vClave = document.getElementById("clave").value;
    
    var listUsers = obtenerListaUsuarios();
    
    if (listUsers.findIndex(usuario=> usuario.nombreUsuario == vNombreUsuario_email || usuario.email == vNombreUsuario_email && usuario.clave == vClave)==-1){
        alert("El NOMBRE USUARIO o EMAIL no están registrados en el sistema, debe registrarse.")
    } else {
        alert("Logueado con éxito.");
        document.getElementById("perfilUsuario").innerHTML = `<a href='#' style='color:red;'>${vNombreUsuario_email}</a>`;
    }
}

//Array donde guardaremos los datos de los usuarios registrados
var listaUsuarios=[];

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





//---------------------------------------------------------



/*FOOTER*/
//Función para mostrar página de Facebook (ventana nueva)
function mostrarFacebook() {
    window.open("https://www.facebook.com/", "_blank");
}
//Función para mostrar página de Google (ventana nueva)
function mostrarGoogle() {
    window.open("https://www.google.es/", "_blank");
}
//Función para mostrar página de Twitter (ventana nueva)
function mostrarTwitter() {
    window.open("https://twitter.com/", "_blank");
}
//Función para mostrar página de Instagram (ventana nueva)
function mostrarInstagram() {
    window.open("https://instagram.com/");
}
//Función para mostrar página del IES Cañaveral (ventana nueva)
function mostrarCanaveral() {
    window.open("https://www.educa2.madrid.org/web/iescanaveral", "_blank");
}


