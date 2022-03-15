var listaUsuarios=[];
function cargarUsuarios(){
	
}
function comprobarUsuario(){
	var user = document.getElementById("usuario").value;
	var pass = document.getElementById("clave").value;

	if(user=="root" && pass=="1234"){
		location.href="aterrizaje.html";
	} else {
		alert("Usuario y/o clave erronea");
	}

}
