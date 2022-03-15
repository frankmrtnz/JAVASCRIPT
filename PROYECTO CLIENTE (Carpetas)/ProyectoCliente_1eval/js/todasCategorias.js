window.onload = function() {
    cargarTodasCategorias();
    mostrarUsuarioLogueado();   //La obtenemos del archivo 'util.js'


    //Botones/Enlaces footer
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'
 }



 //Variable global donde almacenamos la Lista de Ofertas obtenidas del JSON
var listaOfertas=[];


//Funcion para cargar las ofertas de todas las Categorias
 function cargarTodasCategorias(){
  var urlPagina = (window.location.href).split("=");
  var urlPagina2 = urlPagina[1];
  var listaTodasCategorias=[];

    $.get("./js/ofertas.json",{},(resultado)=> {
      listaOfertas = resultado;
      if(urlPagina2 == undefined){
        pintarTodasCategorias(resultado.tiempoCompleto);
        listaTodasCategorias.push(resultado.tiempoCompleto);
        pintarTodasCategorias(resultado.tiempoParcial);
        listaTodasCategorias.push(resultado.tiempoParcial);
        pintarTodasCategorias(resultado.temporal);
        listaTodasCategorias.push(resultado.temporal);
      }


    //Aqui hacemos la busqueda sobre los titulos de la palabra introducida (que contenga)
    if(urlPagina2 != undefined){
      var texto = urlPagina2.trim().toUpperCase();
      //Lista Tiempo Completo
      var listaFiltrada=resultado.tiempoCompleto.filter((elemento) => elemento.titulo.toString().toUpperCase().includes(texto));
      pintarTodasCategorias(listaFiltrada);
      //Lista Tiempo Parcial
      var listaFiltrada=resultado.tiempoParcial.filter((elemento) => elemento.titulo.toString().toUpperCase().includes(texto));
      pintarTodasCategorias(listaFiltrada);
      //Lista Temporal
      var listaFiltrada=resultado.temporal.filter((elemento) => elemento.titulo.toString().toUpperCase().includes(texto));
      pintarTodasCategorias(listaFiltrada);
    }
    
    });

    


  }


//Funcion para pintar las ofertas de trabajo de Todas las Categorias mediante una lista que obtenemos del JSON 'ofertas.json'
    function pintarTodasCategorias(lista){
      lista.forEach( resultado =>{
        var texto =  
         `<div class="class col-md-4">
            <div class="card mt-3">
                <div class="product-1 align-items-center  text-center">
                 <a href="${resultado.fotoEmpresa}"> <img src="${resultado.fotoEmpresa}" alt="fotoEmpresa_${resultado.id}" class="rounded"></a>
                  <h3 class="red mt-3">${resultado.titulo}</h3>
                  <!--CARD INFO-->
                  <div class="mt-3 px-5 info">
                    <span class="descripcion d-block">${resultado.descripcion}</span>
                  </div>
                  <br>
                  <div class="cost mt-3">
                    <h5 class="red"> <span>Duración: ${resultado.duracion}</span><br>
                    <span>Horas: ${resultado.horas}h/semana</span><br>
                    <span>Salario: ${resultado.salario}€/mes</span><br>
                    <span>ID: ${resultado.id}</span></h5>
                    <div class="star mt-4 mb-5 align-items-center">
                      <button class="btnInscribirse" type="button" onclick="inscribirse(event)">Inscribirse</button>
                    </div>
                  </div>
                </div>
            </div>`;

        document.getElementById("contenidoTodasCategorias").innerHTML+= texto; 
        });
    }

    

    

//Funcion para ordenar los elementos de la lista de ofertas de Todas las Categorias según el valor del select opt
    function ordenarLista(){
      document.getElementById("contenidoTodasCategorias").innerHTML = "";
      var valueSelectOrdenar = document.getElementById("ordenarOfertas").value;
      var listaTrabajosTodasCategorias=[];
      listaTrabajosTodasCategorias.push(listaOfertas["tiempoCompleto"]);
      listaTrabajosTodasCategorias.push(listaOfertas["tiempoParcial"]);
      listaTrabajosTodasCategorias.push(listaOfertas["temporal"]);
      

      if(valueSelectOrdenar == "nombre") {
        var ordenadaNombre = listaTrabajosTodasCategorias[0].sort(function ordenar(a, b) { 
          return b.titulo < a.titulo ?  1 
              : b.titulo > a.titulo ? - 1 
              : 0;              
        });
        var ordenadaNombre2 = listaTrabajosTodasCategorias[1].sort(function ordenar(a, b) { 
          return b.titulo < a.titulo ?  1 
              : b.titulo > a.titulo ? - 1 
              : 0;              
        });
        var ordenadaNombre3 = listaTrabajosTodasCategorias[2].sort(function ordenar(a, b) { 
          return b.titulo < a.titulo ?  1 
              : b.titulo > a.titulo ? - 1 
              : 0;              
        });
        
        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg1'><h2><span class='tituloCateg2'>Tiempo Completo:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaNombre);
        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg2'><h2><span class='tituloCateg2'>Tiempo Parcial:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaNombre2);
        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg2'><h2><span class='tituloCateg2'>Temporal:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaNombre3);
      }


      if(valueSelectOrdenar == "masAlto"){
        var ordenadaPrecioAlto = listaTrabajosTodasCategorias[0].sort(function ordenar(a, b) { 
          return b.salario > a.salario ?  1 
              : b.salario < a.salario ? - 1 
              : 0;              
        });
        var ordenadaPrecioAlto2 = listaTrabajosTodasCategorias[1].sort(function ordenar(a, b) { 
          return b.salario > a.salario ?  1 
              : b.salario < a.salario ? - 1 
              : 0;              
        });
        var ordenadaPrecioAlto3 = listaTrabajosTodasCategorias[2].sort(function ordenar(a, b) { 
          return b.salario > a.salario ?  1 
              : b.salario < a.salario ? - 1 
              : 0;              
        });

        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg1'><h2><span class='tituloCateg2'>Tiempo Completo:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaPrecioAlto);
        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg2'><h2><span class='tituloCateg2'>Tiempo Parcial:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaPrecioAlto2);
        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg2'><h2><span class='tituloCateg2'>Temporal:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaPrecioAlto3);
      }



      if(valueSelectOrdenar == "masBajo"){
        var ordenadaPrecioBajo = listaTrabajosTodasCategorias[0].sort(function ordenar(a, b) { 
          return b.salario < a.salario ?  1 
              : b.salario > a.salario ? - 1 
              : 0;              
        });
        var ordenadaPrecioBajo2 = listaTrabajosTodasCategorias[1].sort(function ordenar(a, b) { 
          return b.salario < a.salario ?  1 
              : b.salario > a.salario ? - 1 
              : 0;              
        });
        var ordenadaPrecioBajo3 = listaTrabajosTodasCategorias[2].sort(function ordenar(a, b) { 
          return b.salario < a.salario ?  1 
              : b.salario > a.salario ? - 1 
              : 0;              
        });

        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg1'><h2><span class='tituloCateg2'>Tiempo Completo:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaPrecioBajo);
        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg2'><h2><span class='tituloCateg2'>Tiempo Parcial:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaPrecioBajo2);
        document.getElementById("contenidoTodasCategorias").innerHTML+= "<div class='contenidoTituloCateg2'><h2><span class='tituloCateg2'>Temporal:</span></h2></div><br>"; 
        pintarTodasCategorias(ordenadaPrecioBajo3);
      }
   }
  





  
     

  






  





