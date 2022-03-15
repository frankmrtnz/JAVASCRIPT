


window.onload = function() {
    //Botones
    document.getElementById("btnRegistrar").addEventListener("click", registrarUsuario);

    
    obtenerListaUsuarios();
    // var myStorage = window.localStorage;
    // console.log(myStorage.localListaUsuarios);

    //Botones/Enlaces footer
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'
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
                        document.getElementById("nombreUsuario").style.border = "2px solid green";
                        document.getElementById("email").style.border = "2px solid green";
                        document.getElementById("clave").style.border = "2px solid green";
                        document.getElementById("claveConfirmacion").style.border = "2px solid green";
                        $("#login").css("font-size", "2em");
                    } else {
                        alert("No se pudo registrar usuario porque las contraseñas no coinciden");
                        document.getElementById("clave").style.border = "2px solid red";
                        document.getElementById("claveConfirmacion").style.border = "2px solid red";
                        // document.getElementById("formRegistro").reset();
                    }
                } else {
                    alert("El campo clave no debe estar vacío, escriba alguna clave");
                    document.getElementById("clave").style.border = "2px solid red";
                    document.getElementById("claveConfirmacion").style.border = "2px solid red";
                }
            } else {
                alert("El email introducido no es válido");
                document.getElementById("email").style.border = "2px solid red";

            }
        } else {
            alert("El nombre de usuario no es válido");
            document.getElementById("nombreUsuario").style.border = "2px solid red";
        }
    } else {
        alert("NOMBRE USUARIO y/o EMAIL ya existen, pruebe con otros.")
        document.getElementById("nombreUsuario").style.border = "2px solid red";
        document.getElementById("email").style.border = "2px solid red";
    }
}

//Array donde guardaremos los datos de los usuarios registrados
var listaUsuarios=[];

//Registro usuario admin/root por defecto si listadeUsuarios está vacía
if(localStorage.getItem("localListaUsuarios") == null){
    registrarUsuarioEnSistema("admin","admin@gmail.com","admin1234");
}


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




