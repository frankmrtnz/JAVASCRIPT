

window.onload = function() {
    //Botones
    document.getElementById("btnContacto").addEventListener("click", mostrarContacto);

    //Funciones
    cargarEmpleados();
    mostrarUsuarioLogueado();   //La obtenemos del archivo 'util.js'


    //Botones/Enlaces footer
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'
}



var listaEmpleados = [];

//Funcion para cargar los empleados a través del JSON 'empleados.json', seguidamente llamamos a la funcion de pintarEmpleados
function cargarEmpleados(){
   $.get("./js/empleados.json",{},(resultado)=> {
     listaEmpleados = resultado;
        pintarEmpleados(resultado.empleados);
       
   });
}


//Function que nos pinta los empleados que tenemos en el JSON pasandole la lista obtenida en la function 'cargarEmpleados'
   function pintarEmpleados(lista){
    lista.forEach( resultado =>{
      var texto = 
      `<tr>
        <th scope="row">#${resultado.cod_empleado}</th>
        <td><img src=${resultado.foto} class="img-fluid avatar" alt="slide1"></td>
        <td>${resultado.nombreyapellidos}</td>
        <td>${resultado.cargo}</td>
       </tr>`;     

       document.getElementById("contenidoEmpleados").innerHTML+= texto; 
       });
   }


  



//Función para mostrar página de Contacto  (ventana nueva)
function mostrarContacto() {
    window.open("contacto.html", "_blank");
}


//Function que nos pasará a la cabecera el texto que introduzcamos en el input del buscador de ofertas
function buscarTrabajo(){
    var textoABuscar = document.getElementById("textoBusqueda").value;
    location.href="todasCategorias.html?filtro="+textoABuscar;
}


