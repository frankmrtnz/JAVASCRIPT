window.onload = function(){
    mostrarUsuarioLogueado();   //La obtenemos del archivo 'util.js'

    //boton borrar usuario como Admin
    document.getElementById("borrarUsuario").addEventListener("click", borrarUserAdmin);
    //boton actualizar usuario como Admin
    document.getElementById("actualizarUsuario").addEventListener("click", actualizarUserAdmin);


    //Botones/Enlaces footer
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'

}







//Funcion actualizar a un usuario como Admin
function actualizarUserAdmin(){
    var usuario = document.getElementById("nombreUsuarioForm").value;
    var mail = document.getElementById("emailForm").value;
    var password = document.getElementById("claveForm").value;

    var listaAlmacenada=[];
    var listaUsuarios = [];
    listaAlmacenada = localStorage.getItem('localListaUsuarios');
    listaUsuarios = JSON.parse(listaAlmacenada);
    var nombreUsuarioLogueado = sessionStorage.getItem("usuario").split(",");

    if(usuario!=""&&mail!=""&&password!=""){
        if(listaUsuarios.findIndex(element => 
            element.nombreUsuario == usuario 
            && element.email == mail && element.clave == password) == -1){
                for(i=0; i<listaUsuarios.length; i++){
                    if(listaUsuarios[i].nombreUsuario == usuario || listaUsuarios[i].email == mail){
                        listaUsuarios.splice(i,1);
                    }
                }
                
                listaUsuarios.push({nombreUsuario: usuario, email: mail, clave: password});
                listaAlmacenada = JSON.stringify(listaUsuarios);
                localStorage.setItem('localListaUsuarios', listaAlmacenada);
                alert("¡USUARIO ACTUALIZADO!");
                document.getElementById("formUsuario").reset();
        } else {
            alert("Ese NOMBRE USUARIO/EMAIL ya existen, no puede actualizar el usuario");
        }       
    } else {
        alert("Debe completar TODOS los campos para actualizar el usuario");
    }

}





//Funcion borrar a un usuario como Admin
function borrarUserAdmin(){
    var usuarioBorrar = document.getElementById("nombreUsuarioForm").value;
    var mailBorrar = document.getElementById("emailForm").value;
    var passwordBorrar = document.getElementById("claveForm").value;

    var listaAlmacenada2=[];
    var listaUsuarios2 = [];
    listaAlmacenada2 = localStorage.getItem('localListaUsuarios');
    listaUsuarios2 = JSON.parse(listaAlmacenada2);

    if(usuarioBorrar!=""&&mailBorrar!=""&&passwordBorrar!=""){
        if(listaUsuarios2.findIndex(element => 
            element.nombreUsuario == usuarioBorrar 
            && element.email == mailBorrar && element.clave == passwordBorrar) == 1){
                for(i=0; i<listaUsuarios2.length; i++){
                    if(listaUsuarios2[i].nombreUsuario == usuarioBorrar && listaUsuarios2[i].email == mailBorrar
                            && listaUsuarios2[i].clave == passwordBorrar){
                        listaUsuarios2.splice(i,1);
                    }
                }

                listaAlmacenada2 = JSON.stringify(listaUsuarios2);
                localStorage.setItem('localListaUsuarios', listaAlmacenada2);
                
                alert("¡USUARIO ELIMINADO!");
                document.getElementById("formUsuario").reset();
        } else {
            alert("Ese NOMBRE USUARIO/EMAIL/CLAVE NO son correctos");
        }       
    
    } else {
        alert("Debe completar TODOS los campos para borrar el usuario");
    }
}



