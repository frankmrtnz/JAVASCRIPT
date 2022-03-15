 window.onload = function(){
    //Botones
    document.getElementById("enviarContacto").addEventListener("click", tramitarContacto);

    //Funciones
    mostrarUsuarioLogueado();   //La obtenemos del archivo 'util.js'

    
    //Botones/Enlaces footer
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'
 }





 //Funcion que tramita los datos introducidos en el formulario, con su respectiva validación y nos redirige a la app por defecto de correo de nuestro ordenador traspasando los datos introducidos a dicha app
 function tramitarContacto(event){
     event.preventDefault();
     var nombre = document.getElementById("fname").value;
     var apellidos =  document.getElementById("lname").value;
     var email = document.getElementById("email").value;
     var mensaje = document.getElementById("message").value;
     nombreRegex = /^[a-záéíóúÁÉÍÓÚñÑ ,.'-]+$/i;
     apellidosRegex = /^[a-záéíóúÁÉÍÓÚñÑ ,.'-]+$/i;
     emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     //var formulario = document.querySelector("#form");
     var enlaceMandarMail = document.querySelector("#enlaceMandarMail");

    if(nombreRegex.test(nombre)) {
        if(apellidosRegex.test(apellidos)) {
            if(emailRegex.test(email)) {
                var DatosFormulario = (new DatosForm(nombre,apellidos,email,mensaje));
                enlaceMandarMail.setAttribute('href',`mailto:contacto_yourjob@gmail.com?subject=Nombre: ${DatosFormulario['nombre']}, Apellidos: ${DatosFormulario['apellidos']}, Email: ${DatosFormulario['email']}&body=${DatosFormulario['mensaje']}`);
                enlaceMandarMail.click();  
            } else {
                alert("El mail introducido no tiene un formato correcto");
            }
        } else {
            alert("Los apellidos introducidos no tienen un formato válido");
        }
    } else {
        alert("El nombre introducido no tiene un formato válido")
    }

 }


  



 

