


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





//Lista que contendrá todos los usuarios registrados
var listaUsuarios=[];


//Función para registrar usuario en el Array listaUsuarios[];
function registrarUsuario() {
    nombreUsuario = document.getElementById("nombreUsuario").value;
    email = document.getElementById("email").value;
    clave = document.getElementById("clave").value;
    claveConfirmacion = document.getElementById("claveConfirmacion").value;

        if(clave === claveConfirmacion) {
            listaUsuarios.push(new Usuario(nombreUsuario, email, clave));
            alert("Usuario registrado con éxito");
            document.getElementById("formRegistro").reset();
        } else {
            alert("Las contraseñas introducidas no coinciden");
            document.getElementById("formRegistro").reset();
        }
    

}




console.log(listaUsuarios);






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


