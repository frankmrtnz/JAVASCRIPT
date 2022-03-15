/*
var listaUsuarios=[];

cargarUsuarios();

function cargarUsuarios(){
	listaUsuarios.push(new Usuario("root","root","","1234"));
	listaUsuarios.push(new Usuario("jose21","Jose","GJ","3334"));
	listaUsuarios.push(new Usuario("juan","Juan","LK","1221"));
	listaUsuarios.push(new Usuario("jorge72","Jorge","MM","2354"));
	listaUsuarios.push(new Usuario("jaime","Jaime","FF","5634"));
}
*/


function comprobarUsuario(){

	var cajaUsuario = document.getElementById("usuario");
	var cajaClave = document.getElementById("clave");

	$.get("controlUsuarios.php",
		{"codigo":cajaUsuario.value, "clave":cajaClave.value},
		(resultado) => {			//resultado será todo lo que devuelva la página
			if(resultado=="OK") {
				location.href="aterrizaje.html";
			} else {
				alert("USUARIO/CLAVE incorrecto");
				cajaUsuario.style.borderColor = "red";
				cajaClave.style.borderColor = "red";
			}
		});


/*
	var posicion = listaUsuarios.findIndex((elemento) => elemento.id == cajaUsuario.value);
	//var posicion = listaUsuarios.findIndex((elemento) => elemento.id == cajaUsuario.value && elemento.clave == cajaClave.value);
	

	if(posicion!=-1 && listaUsuarios[posicion].clave==cajaClave.value){
		location.href="aterrizaje.html";
	} else {
		alert("USUARIO/CLAVE incorrecto");
		cajaUsuario.style.borderColor = "red";
		cajaClave.style.borderColor = "red";
	}
*/
	
}
