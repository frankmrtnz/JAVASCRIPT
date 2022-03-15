


window.onload = function() {
    //Botones
    document.getElementById("btnRegister").addEventListener("click", mostrarRegistro);
    document.getElementById("btnLogin").addEventListener("click", mostrarLogin);
    document.getElementById("btnRegistrar").addEventListener("click", registrarUsuario);


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



/*REGISTRO DE USUARIO*/
//Función para registrar y validar usuario usando la función de localStorage para registrar usuarios
function registrarUsuario() {
    
    var vNombreUsuario = document.getElementById("nombreUsuario").value;
    var vEmail = document.getElementById("email").value;
    var vClave = document.getElementById("clave").value;
    var vClaveConfirmacion = document.getElementById("claveConfirmacion").value;
    nombreUsuarioRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    var listUsers = obtenerListaUsuarios();
    
    if (listUsers.findIndex(usuario=> usuario.nombreUsuario == vNombreUsuario || usuario.email == vEmail)==-1){
        if(nombreUsuarioRegex.test(vNombreUsuario)) {
            if(emailRegex.test(vEmail)) {
                if(vClave != "" || vClaveConfirmacion != "") {
                    if(vClave === vClaveConfirmacion) {
                        registrarUsuarioEnSistema(vNombreUsuario,vEmail,vClave);
                        alert("Usuario registrado con éxito en el sistema, ahora vaya a loguearse");
                    } else {
                        alert("No se pudo registrar usuario porque las contraseñas no coinciden");
                        document.getElementById("formRegistro").reset();
                    }
                } else {
                    alert("El campo clave no debe estar vacío, escriba alguna clave");
                }
            } else {
                alert("El email introducido no es válido");
            }
        } else {
            alert("El nombre de usuario no es válido");
        }
    } else {
        alert("NOMBRE USUARIO y/o EMAIL ya existen, pruebe con otros.")
    }
}

//Array donde guardaremos los datos de los usuarios registrados
var listaUsuarios=[];

//Registramos usuario con LocalStorage y actualizamos la lista del localStorage
function registrarUsuarioEnSistema(username, mail, password){
    /*
    var nuevoUsuario = {
        nameUsuario : username,
        email : mail,
        clave : password
    }
    */
    listaUsuarios.push(new Usuario(username,mail,password));
    localStorageListaUsuarios(listaUsuarios);
}

//Función para almacenar la lista de Usuarios en localStorage
function localStorageListaUsuarios(lista){
    localStorage.setItem("localListaUsuarios", JSON.stringify(lista));
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


