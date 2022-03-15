var listaYates = [
    {
        "Codigo": "1",
        "Descripcion": "1. YATE MUY BONITO Y DIVERTIDO",
        "Estado": "D",
        "Foto": "yate1.png",
        "PrecioMinimo": 100,
        "FechaCierrePuja": "26/12/2021",
        "HoraCierrePuja": "11:00"
    },
    {
        "Codigo": "2",
        "Descripcion": "2 YATE MUY BONITO",
        "Estado": "D",
        "Foto": "yate2.png",
        "PrecioMinimo": 200,
        "FechaCierrePuja": "26/11/2021",
        "HoraCierrePuja": "13:00"
    },
    {
        "Codigo": "3",
        "Descripcion": "3 YATE MUY BONITO",
        "Estado": "D",
        "Foto": "yate3.png",
        "PrecioMinimo": 4000,
        "FechaCierrePuja": "26/11/2021",
        "HoraCierrePuja": "12:00"
    },
    {
        "Codigo": "4",
        "Descripcion": "4. YATE MUY BONITO 4",
        "Estado": "D",
        "Foto": "yate4.png",
        "PrecioMinimo": 5000,
        "FechaCierrePuja": "6/12/2021",
        "HoraCierrePuja": "11:00"
    },
    {
        "Codigo": "5",
        "Descripcion": "5 YATE MUY BONITO 5",
        "Estado": "D",
        "Foto": "yate5.png",
        "PrecioMinimo": 600,
        "FechaCierrePuja": "26/12/2021",
        "HoraCierrePuja": "12:00"
    },
    {
        "Codigo": "6",
        "Descripcion": "6 YATE MUY BONITO 6",
        "Estado": "D",
        "Foto": "yate6.png",
        "PrecioMinimo": 10000,
        "FechaCierrePuja": "26/11/2021",
        "HoraCierrePuja": "13:00"
    },
    {
        "Codigo": "7",
        "Descripcion": "7 YATE MUY BONITO 7",
        "Estado": "D",
        "Foto": "yate7.png",
        "PrecioMinimo": 1000000,
        "FechaCierrePuja": "26/11/2021",
        "HoraCierrePuja": "12:00"
    },
    {
        "Codigo": "8",
        "Descripcion": "8 YATE MUY BONITO 8",
        "Estado": "D",
        "Foto": "yate8.png",
        "PrecioMinimo": 200000,
        "FechaCierrePuja": "26/11/2021",
        "HoraCierrePuja": "12:00"
    },
    {
        "Codigo": "9",
        "Descripcion": "9 YATE MUY BONITO 9",
        "Estado": "R",
        "Foto": "yate9.png",
        "PrecioMinimo": 100000,
        "FechaCierrePuja": "26/11/2021",
        "HoraCierrePuja": "12:00"
    },
    {
        "Codigo": "10",
        "Descripcion": "10 YATE MUY BONITO 10",
        "Estado": "T",
        "Foto": "yate10.png",
        "PrecioMinimo": 350000,
        "FechaCierrePuja": "26/11/2021",
        "HoraCierrePuja": "12:00"
    },
    {
        "Codigo": "11",
        "Descripcion": "11 YATE MUY BONITO 11",
        "Estado": "R",
        "Foto": "yate11.png",
        "PrecioMinimo": 800000,
        "FechaCierrePuja": "26/11/2021",
        "HoraCierrePuja": "12:00"
    },
    {
        "Codigo": "12",
        "Descripcion": "12 YATE MUY BONITO 12",
        "Estado": "D",
        "Foto": "yate12.png",
        "PrecioMinimo": 777777,
        "FechaCierrePuja": "24/11/2021",
        "HoraCierrePuja": "12:00"
    }];


var listaPuertos=["Valencia","Barcelona","Ibiza","Bilbao",
    "Sagunto","Ferrol","Santander","Vigo","Ferrol"];




window.onload = function(){
    mostrarYatesDisponibles(listaYates);

    document.getElementsByTagName("a")[1].addEventListener("click", abrirPujasRealizadas);


    btnHacerPujas
    document.getElementById("btnHacerPujas").addEventListener("click", validarFormPujas);
    document.getElementById("btnVerMas").addEventListener("click", verMas);
    document.getElementById("btnVerMasCaro").addEventListener("click", verYateMasCaro);
    document.getElementById("btnOrdenarPorDescripcion").addEventListener("click", ordenarPorDescripcion);
}



function mostrarYatesDisponibles(lista){
    lista.filter(element=>element.Estado == "D");
    var contador = 0;
            lista.forEach(element => {
                contador++;
                if(contador <= 4){
                    if(parseInt(element.Codigo)==contador ){
                        var texto = `<div style="border:1px solid white; width:250px; height:250px; text-align:center;" >
                                <img src="./imagenes/${element.Foto}" class="imagenMin"><br>
                                <a onclick="verDetalle(event)">Ver detalle</a><br><br>
                                Fecha: ${element.FechaCierrePuja}<br><br>
                                Puja: <input type="text" name="puja"></input><br>
                                <span>Código Yate: ${element.Codigo}<br><span>
                            </div>`;
                
                        document.getElementById("principal").innerHTML+=texto;
                    }
                }
            
                    
            });       
}


function verMas(){
    lista=listaYates;
    var contador = 0;
    lista.filter(element=>element.Estado=="D");
        lista.forEach(element=>{
            contador++;
            if(contador>4 && contador<=8) {
                if(parseInt(element.Codigo)==contador ){
                    var texto = `<div style="border:1px solid white; width:250px; height:250px; text-align:center;" >
                            <img src="./imagenes/${element.Foto}" class="imagenMin"><br>
                            <a onclick="verDetalle(event)">Ver detalle</a><br><br>
                            Fecha: ${element.FechaCierrePuja}<br><br>
                            Puja: <input type="text" name="puja"></input><br>
                            <span>Código Yate: ${element.Codigo}<br><span>
                        </div>`;
            
                    document.getElementById("principal").innerHTML+=texto;
                }  else {
                    alert("Ya no hay más yates disponibles");
                    exit();
                }
            } 

            if(contador>8) {
                if(parseInt(element.Codigo)==contador ){
                    var texto = `<div style="border:1px solid white; width:250px; height:250px; text-align:center;" >
                            <img src="./imagenes/${element.Foto}" class="imagenMin"><br>
                            <a onclick="verDetalle(event)">Ver detalle</a><br><br>
                            Fecha: ${element.FechaCierrePuja}<br><br>
                            Puja: <input type="text" name="puja"></input><br>
                            <span>Código Yate: ${element.Codigo}<br><span>
                        </div>`;
            
                    document.getElementById("principal").innerHTML+=texto;
                } else {
                    alert("Ya no hay más yates disponibles");
                    exit();
                }
            }
        });
}




function verDetalle(event){
    var codigo = event.target.parentNode.getElementsByTagName("span")[0].innerHTML.split("<")[0].split(":")[1];

    listaYates.forEach(element => {
        if(element.Codigo == codigo) {

            window.open("index.html","_blank");

            var detalle=`<button onclick='window.close()'>X<button><br>
                <img src='${element.Foto}'><br>
                ${element.Descripcion}<br>
                ${element.FechaCierrePuja}<br>
                ${element.PrecioMinimo}`;

            document.getElementById("principal").innerHTML=detalle;

        }
    });

}


function verYateMasCaro(){
    listaYates.filter(element => {
        for(i=0;i<listaYates.length;i++){
            if(element[i].PrecioMinimo>element[i+1].PrecioMinimo) {
                yateMasCaro = element[i].PrecioMinimo;
            }
        }
        
    });
}



function ordenarPorDescripcion(){
    listaYates.sort((a,b)=>{
        if(a.Descripcion>b.Descripcion) return 1;
        else if(a.Descripcion==b.Descripcion) return 0;
        else return -1;
    }
    );

    mostrarYatesDisponibles(listaYates);
}



function abrirPujasRealizadas(){
    location.href = "pujasRealizadas.html";
}



function validarFormPujas(){
    var puertoIntroducido = document.getElementById("txtPuerto").value;
    var fechaIntroducida = document.getElementsByClassName("fecha")[0].value;
    var numTarjetaIntroducido = document.getElementsByClassName("tarjeta")[0].value;
    var fecha= new Date();
    var patronTarjeta = /^[A-Z]{3}[-]{1}[0-9]{5}/;
    var errores=0;

    if(listaPuertos.find(element => element == puertoIntroducido.trim())) {

    } else {
        alert("Puerto introducido no valido");
        errores++;
    }

    if(fechaIntroducida != fecha.getDate()){
        alert("Fecha introducida no valida");
        errores++;
    }

    
    if(patronTarjeta.test(numTarjetaIntroducido)){

    } else {
        alert("Num Tarjeta introducido no valido");
        errores++;
    }


    if(errores > 0){
        alert("NO ES VALIDO EL FORMULARIO");
    } else {
        var listaPujas = document.getElementsByName("puja");
        var listaDatosPujas = [];
        for(i=0;i<listaPujas.length;i++){
            if(listaPujas[i].value != ""){
                listaDatosPujas.push(listaYates[i]+listaPujas[i].value);
            }
        }
        localStorage.setItem("datosPujas", JSON.stringify(listaDatosPujas));
    }


}





