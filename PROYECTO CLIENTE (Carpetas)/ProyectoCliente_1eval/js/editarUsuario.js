window.onload=function(){
    //Usuario Logueado
    mostrarUsuarioLogueado();   //La obtenemos del archivo 'util.js'
    //Datos del Usuario logueado
    mostrarDatosUsuarioenForm();

    //boton actualizar usuario
    document.getElementById("actualizarUsuario").addEventListener("click", actualizarUser);

    //Botones/Enlaces footer
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'
}


//Mostramos los datos del Usuario Logueado en el formulario
function mostrarDatosUsuarioenForm(){
    var usuarioLogueado = sessionStorage.getItem("usuario");
    if(usuarioLogueado!=null){
        var nombreUsuarioLogueado = sessionStorage.getItem("usuario").split(",");
        document.getElementById("nombreUsuarioForm").placeholder = nombreUsuarioLogueado[0];
        document.getElementById("emailForm").placeholder = nombreUsuarioLogueado[1];
        document.getElementById("claveForm").value = nombreUsuarioLogueado[2];
    } else {
        document.getElementById("usuarioRegistrarse").innerHTML = "<a href='index.html' class='nav-link text-primary'>Regístrese</a>";
        // document.getElementById("funcionesUsuario").innerHTML = "";
    }
}



//Actualizamos el usuario si no hay campos vacios ni nombre usuario o email existen ya en el localStorage
function actualizarUser(event){
    event.preventDefault();
    var usuario = document.getElementById("nombreUsuarioForm").value;
    var mail = document.getElementById("emailForm").value;
    var password = document.getElementById("claveForm").value;
    var listaAlmacenada3 = [];
    listaAlmacenada3 = localStorage.getItem('localListaUsuarios');
    listaUsuarios3 = JSON.parse(listaAlmacenada3);
    var usuarioLogueado = sessionStorage.getItem("usuario").split(",");

    if(usuario!=""&&mail!=""&&password!=""){
        if(listaUsuarios3.findIndex(element => 
            (element.nombreUsuario == usuario 
            || element.email == mail) && (element.nombreUsuario != usuarioLogueado[0]) 
            && element.email != usuarioLogueado[1] ) == -1){
                for(i=0; i<listaUsuarios3.length; i++){
                    if(listaUsuarios3[i].nombreUsuario == usuarioLogueado[0]){
                        listaUsuarios3.splice(i,1);
                    }
                }
                
                listaUsuarios3.push({nombreUsuario: usuario, email: mail, clave: password});
                listaAlmacenada3 = JSON.stringify(listaUsuarios3);
                localStorage.setItem('localListaUsuarios', listaAlmacenada3);
                sessionStorage.setItem("usuario", usuario+","+mail+","+password);
                mostrarUsuarioLogueado();
                mostrarDatosUsuarioenForm();
                alert("¡USUARIO ACTUALIZADO!");
        } else {
            alert("Ese NOMBRE USUARIO/EMAIL ya existen, no puede actualizar el usuario");
        }       
    } else {
        alert("Debe completar TODOS los campos para actualizar el usuario");
    }
}



