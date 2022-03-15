var posicionActual=0;
var intervalo=0;
var indiceImagenesAgrandar=0;
var listaPuertos=["Valencia","Barcelona","Ibiza","Bilbao","Sagunto","Ferrol","Santander","Vigo","Ferrol"];
var listaYatesTrabajo=listaYates.concat();
onload=function(){
    mostrarYates(filtrarYatesDisponibles(),posicionActual);
    this.document.getElementById("btnVerMas").addEventListener("click",verMas);
    this.document.getElementById("btnVerMasCaro").addEventListener("click",verMasCaro);
    this.document.getElementById("btnOrdenarPorDescripcion").addEventListener("click",ordenarPorDescripcion);
    this.document.getElementById("btnHacerPujas").addEventListener("click",hacerPuja);
    this.document.getElementById("container").getElementsByTagName("a")[1].href="./pujasRealizadas.html";
    this.document.getElementById("container").getElementsByTagName("a")[1].target="_new";
    intervalo=this.setInterval(agrandarImagen,3000);
}
function agrandarImagen(){
    if (indiceImagenesAgrandar!=0 && (indiceImagenesAgrandar)-1<document.querySelectorAll("#principal img").length){
        document.querySelectorAll("#principal img")[indiceImagenesAgrandar-1].style.width="100px";       
        document.querySelectorAll("#principal img")[indiceImagenesAgrandar-1].style.height="100px";       
    }
    if (indiceImagenesAgrandar<document.querySelectorAll("#principal img").length){
        
        document.querySelectorAll("#principal img")[indiceImagenesAgrandar].style.width="150px";       
        document.querySelectorAll("#principal img")[indiceImagenesAgrandar].style.height="150px";       
        indiceImagenesAgrandar++;
    } else{
        clearInterval(intervalo);
    }
}
function filtrarYatesDisponibles(){
    return listaYatesTrabajo.filter(x=>x.Estado=="D");
}

function ordenarPorDescripcion(){
	listaYatesTrabajo=listaYates.sort((a,b)=> {
        if (a.Descripcion > b.Descripcion) return -1
        else return 1;
    })
    let lista=filtrarYatesDisponibles();
    posicionActual=0;
	indiceImagenesAgrandar=0;
    mostrarYates(lista,0);
}

function verMasCaro(){
    let lista=filtrarYatesDisponibles();
    if (lista.length>0){
        lista.sort((a,b)=>b.PrecioMinimo - a.PrecioMinimo);
        verDetalle(lista[0]);
    }
}

function mostrarYates(lista,posicion){
    var divPrincipal=document.getElementById("principal");
    var tabla;
    if (posicion==0){
        if (divPrincipal.getElementsByTagName("table")[0]) divPrincipal.getElementsByTagName("table")[0].remove();
        tabla=document.createElement("table");
        divPrincipal.appendChild(tabla);
    } else {
        tabla=divPrincipal.getElementsByTagName("table")[0]; 
    }
    if (posicion < lista.length)
    {
        let fila=document.createElement("tr");
        tabla.appendChild(fila);
        let listaCorta = lista.slice(posicion,posicion+4);
        listaCorta.forEach(yate => {
            let celda= document.createElement("td");
            fila.appendChild(celda);
            var parrafo=document.createElement("p");
            celda.appendChild(parrafo);
            var imagen=document.createElement("img");
            imagen.src="./imagenes/" + yate.Foto;
            imagen.classList.add("imagenMin");
            parrafo.appendChild(imagen);
            parrafo=document.createElement("p");
            celda.appendChild(parrafo);
            parrafo.innerHTML = "Ver detalle";
            parrafo.addEventListener("click",((x)=>{return ()=>verDetalle(x)})(yate));
            parrafo=document.createElement("p");
            celda.appendChild(parrafo);
            parrafo.innerHTML = "Fecha:" + yate.FechaCierrePuja;
            parrafo=document.createElement("p");
            celda.appendChild(parrafo);            
            parrafo.innerHTML = "Precio Minimo:" + yate.PrecioMinimo;
            parrafo=document.createElement("p");
            celda.appendChild(parrafo);
            parrafo.appendChild(document.createTextNode("Puja:"));
            let input=document.createElement("input");
            input.type = "text";
            input.datosyate = yate;  
            input.size = 8;
            parrafo.appendChild(input);

        });
    } 
}

function verDetalle(yate){
    let div=document.createElement("div");
    div.className="centrado";
    let contenido=`<p onclick="cerrarDiv()">X</p>
                    <img src='./imagenes/${yate.Foto}' class='imagenMax'>
                   <p>Descripción:${yate.Descripcion}</p>
                   <p>Fecha:${yate.FechaCierrePuja}</p>
                   <p>Precio Minimo:${yate.PrecioMinimo}</p>
    `;
    div.innerHTML=contenido;
    document.body.appendChild(div);
}

function cerrarDiv(){
    document.querySelector("div.centrado").remove();
}

function verMas(){
    let lista=filtrarYatesDisponibles();
    if ((posicionActual+4)<lista.length){
        posicionActual+=4;
        mostrarYates(lista,posicionActual);
    }else {
        alert("No hay más");
    }
}

function hacerPuja(){
    let puerto=document.getElementById("txtPuerto");
    let fecha=document.getElementsByClassName("fecha")[0];
    let tarjeta=document.getElementsByClassName("tarjeta")[0];
    let error=false;
    
    if(listaPuertos.indexOf(puerto.value)==-1){
        puerto.style.border="1px solid red";
        error=true;
    } else {
        puerto.style.border="1px solid grey";
    }
    
    if (!tarjeta.value.match(/^[A-Z]{3}-\d{5}$/)){
        tarjeta.style.border="1px solid red";
        error=true;
    } else {
        tarjeta.style.border="1px solid grey";
    }

    if(noEsFechaValida(fecha.value)){
        fecha.style.border="1px solid red";
        error=true;
    } else {
        fecha.style.border="1px solid grey";
    }

    if (!error){
        var lista=recuperarPujasLocalStorage();
        let contador=0;
        var listaCajas = [...document.getElementById("principal").getElementsByTagName("input")];
        listaCajas.forEach(caja => {
            if (!isNaN(caja.value) && caja.datosyate.PrecioMinimo < parseInt(caja.value)){
                let puja={
                    "CodigoYate":caja.datosyate.Codigo,
                    "PrecioPuja":parseInt(caja.value),
                    "PuertoRecogida":puerto.value,
                    "Tarjeta":tarjeta.value,
                    "FechaAviso": fecha.value
                }
                lista.push(puja);
                contador++;
            }
        });
        alert(`Se han añadido ${contador} pujas`);
        localStorage.setItem("pujas",JSON.stringify(lista));
    }
}

function recuperarPujasLocalStorage(){
    var lista=[];
    if (localStorage.getItem("pujas")){
        lista=JSON.parse(localStorage.getItem("pujas"));
    }
    return lista;
}

function noEsFechaValida(fechaTexto){
    let hoyMas2=new Date();
    hoyMas2.setDate(hoyMas2.getDate()+2);
    let trozos=fechaTexto.split("/");
    if (trozos.length==3){
        let fecha=new Date(trozos[2],trozos[1]-1,trozos[0]);
        return fecha.getFullYear() != trozos[2] || fecha.getMonth()!=trozos[1]-1 || fecha.getDate()!=trozos[0] || fecha<hoyMas2;
    } else return true;
}