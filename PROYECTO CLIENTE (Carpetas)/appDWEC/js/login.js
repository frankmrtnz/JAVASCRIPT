function comprobarUsuario(){

    var cajaUsuario = document.getElementById("usuario");
    var cajaClave = document.getElementById("clave");

    $.get("controlUsuarios.php",
         {"codigo":cajaUsuario.value,"clave":cajaClave.value},
         (resultado) => { 
            if(resultado=="OK"){
            	location.href="aterrizaje.html";
            } else {
                alert("Usuario/clave incorrecta");
                cajaUsuario.style.borderColor="red";
                cajaClave.style.borderColor="red";
            }
         });
}
