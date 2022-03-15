window.onload = function() {
    //Funciones
    mostrarOfertasInscritas();
    mostrarUsuarioLogueado();   //La obtenemos del archivo 'util.js'


    //Botones/Enlaces footer
    document.getElementById("linkFacebook").addEventListener("click", mostrarFacebook); //La obtenemos del archivo 'util.js'
    document.getElementById("linkTwitter").addEventListener("click", mostrarTwitter); //La obtenemos del archivo 'util.js'
    document.getElementById("linkGoogle").addEventListener("click", mostrarGoogle); //La obtenemos del archivo 'util.js'
    document.getElementById("linkInstagram").addEventListener("click", mostrarInstagram); //La obtenemos del archivo 'util.js'
    document.getElementById("linkCanaveral").addEventListener("click", mostrarCanaveral); //La obtenemos del archivo 'util.js'

}



//Function que nos muestra las ofertas inscritas asociadas a ese nombre de usuario que esta logueado mediante el sessionStorage
function mostrarOfertasInscritas(){
    var ofertasInscritas = JSON.parse(sessionStorage.getItem("inscripciones"));
    if(ofertasInscritas!=null){
        ofertasInscritas.forEach( resultado =>{
            for(i=0; i<(JSON.parse(sessionStorage.getItem("inscripciones"))).length;i++){
                if(sessionStorage.getItem('usuario').split(",")[0] == (JSON.parse(sessionStorage.getItem("inscripciones"))[i].usuario.split(",")[0]) 
                    && resultado.usuario.split(",")[0] == sessionStorage.getItem('usuario').split(",")[0]) {
            var texto =  
             `<div class="class col-md-4">
                <div class="card mt-3">
                <div class='text-center'>
                    <img src=${resultado.foto}>
                </div>
                    <div class="product-1 align-items-center  text-center">
                      <h3 class="red mt-3">${resultado.titulo}</h3>
                      <div class="cost mt-3">
                        <h5 class="red">${resultado.horas}<br>
                        <span>${resultado.salario}</span><br>
                        <span>${resultado.duracion}</span><br>
                        <span>${resultado.id}</span></h5>
                        
                      </div>
                      <div id="contenidoBtnEliminar" class="my-3">
                        <button type="button" id="btnEliminarOferta" class="btnEliminarOferta" onclick="eliminarOfertaInscrita(event)">Eliminar</button>
                      </div>
                    </div>
                </div>`;
            
            
                }
            }
            if(texto!= undefined) {
                document.getElementById("tablaOfertasInscritas").innerHTML+= texto; 
            } 
            });
    } else {
        document.getElementById("tablaOfertasInscritas").innerHTML+= "<span class='text-center'>NO ESTÁS INSCRITO A NINGUNA OFERTA.</span>";
    } 

}





//Funcion para eliminar las ofertas inscritas
function eliminarOfertaInscrita(event){    
    var ofertasInscritas = JSON.parse(sessionStorage.getItem("inscripciones"));
    var id = event.target.parentNode.parentNode.getElementsByTagName("span")[2].innerHTML;
    console.log(ofertasInscritas);
        for(i=0; i<ofertasInscritas.length;i++){
            if(ofertasInscritas[i].id == id && ofertasInscritas[i].usuario.split(",")[0] == sessionStorage.getItem("usuario").split(",")[0]){
                ofertasInscritas.splice(i,1);
            }
        }
    alert("¡OFERTA ELIMINADA!");
    sessionStorage.setItem("inscripciones", JSON.stringify(ofertasInscritas));
    location.href="ofertasInscritas.html";
}
//Si no hay ofertas inscritas y el array del session queda vacío, borraremos el sessionStorage
if(JSON.parse(sessionStorage.getItem("inscripciones")) == ""){
    sessionStorage.removeItem("inscripciones");
}





  










