//ARCHIVO PARA ACUMULAR LAS FUNCIONES REPETITIVAS Y USARLAS POSTERIORMENTE EN LOS .js OPORTUNOS

//-----------------------------------

/*DATOS USUARIO LOGUEADO*/
//Mostramos el nombre de usuario y las opciones disponibles en el navbar según tipo de usuario
function mostrarUsuarioLogueado() {
    var usuarioLogueado = sessionStorage.getItem("usuario");
    //console.log(usuarioLogueado);
    if(usuarioLogueado!=null){
        var nombreUsuarioLogueado = sessionStorage.getItem("usuario").split(",");
        document.getElementById("nombreUsuario").innerHTML = nombreUsuarioLogueado[0];
        if(usuarioLogueado.split(",")[0]=='admin'){
            var texto = `<li><a class="dropdown-item" href="editarUsuario.html">EDITAR Mi Usuario</a></li>
            <li><a class="dropdown-item" href="editarUsuarioAdmin.html">Editar/Borrar Usuario</a></li>
            <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>`;
            document.getElementById("funcionesUsuario").innerHTML=texto;
        } else {
            var texto = `<li><a class="dropdown-item" href="editarUsuario.html">EDITAR Mi Usuario</a></li>
            <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>`;
            document.getElementById("funcionesUsuario").innerHTML=texto;
        }
    } else {
        document.getElementById("usuarioRegistrarse").innerHTML = "<a href='index.html' class='nav-link text-primary'>Regístrese</a>";
        // document.getElementById("funcionesUsuario").innerHTML = "";
    }
  }
  
  
  //Cierra la sesion del usuario actual llevando al login y borrando sessionStorage del usuario Logueado
  function cerrarSesion(){
    sessionStorage.removeItem("usuario");
    location.href="login.html";
  }


//-----------------------------------



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




//-----------------------------------



/*INSCRIBIRSE A OFERTAS*/
//Funcion que nos permite inscribirnos a las ofertas, y comprueba en el sessionStorage que no esté inscrito
function inscribirse(event){
     
    var usuarioLogueado = sessionStorage.getItem("usuario");
 
     var foto = event.target.parentNode.parentNode.parentNode.getElementsByTagName("a")[0].getElementsByTagName("img")[0].getAttribute("src");
     var titulo = event.target.parentNode.parentNode.parentNode.getElementsByTagName("h3")[0].innerHTML;
     var duracion = event.target.parentNode.parentNode.getElementsByTagName("span")[0].innerHTML;
     var horas = event.target.parentNode.parentNode.getElementsByTagName("span")[1].innerHTML;
     var salario = event.target.parentNode.parentNode.getElementsByTagName("span")[2].innerHTML;
     var id = event.target.parentNode.parentNode.getElementsByTagName("span")[3].innerHTML;
     
     
     
    var listaInscripciones=[];
    if(sessionStorage.getItem("inscripciones")){
      listaInscripciones = JSON.parse(sessionStorage.getItem("inscripciones"));
    }
     
    if (listaInscripciones.findIndex( elemento => elemento.id == id 
      && elemento.usuario.split(",")[0]==usuarioLogueado.split(",")[0])==-1){ // no existe la inscripcion y no es de ese usuario
    

       listaInscripciones.push({usuario:usuarioLogueado,foto:foto,titulo:titulo,duracion:duracion,horas:horas,salario:salario,id:id});
       sessionStorage.setItem("inscripciones", JSON.stringify(listaInscripciones));
         alert("¡TE HAS INSCRITO A LA OFERTA!");
        //  exit();
     }  else{
      alert("¡YA EXISTE EN TU LISTA DE INSCRIPCIONES!");       
     }   
   }