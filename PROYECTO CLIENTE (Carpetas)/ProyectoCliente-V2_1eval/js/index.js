


window.onload = function() {
    //Botones
    document.getElementById("btnAcceso").addEventListener("click", comprobarUsuario);


    //Enlaces
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook);
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter);
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle);
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram);
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral);
}




/*LOGIN*/
//Lista de usuarios admitidos
var listaUsuarios=[];
cargarUsuarios();
function cargarUsuarios(){
	listaUsuarios.push(new Usuario("root","root@gmail.com","1234"));
	listaUsuarios.push(new Usuario("juan","juan@gmail.com","1234"));
    listaUsuarios.push(new Usuario("francisco","francisco@gmail.com","1234"));
}
//Función para comprobar el usuario
function comprobarUsuario() {
    var cajaNombreUsuario = document.getElementById("nombreUsuario");
    var cajaClave = document.getElementById("clave");
    var posicion = listaUsuarios.findIndex((elemento) => elemento.nombreUsuario == cajaNombreUsuario.value);

	if(posicion!=-1 && listaUsuarios[posicion].clave==cajaClave.value){
        alert("USUARIO "+cajaNombreUsuario.value+" logueado con éxito");
        location.href="aterrizaje.html";
	} else {
		alert("USUARIO y/o CLAVE incorrectos, pruebe de nuevo");
        document.getElementById("formLogin").reset();
	}
}





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


