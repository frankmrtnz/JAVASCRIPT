
function cargarTabla(){
    var texto= "";
    /*CON FOR*/
    for(i=0; i<20; i++){
            texto = texto + "<p>"+ (i*2) +"</p>";
    }
    document.getElementById("tabla").innerHTML=texto;
}

function cargarTabla2(){

    var colorIntroducido = prompt("Dime un color");
    switch (colorIntroducido){
        case "rojo":
            color = "red";
            break;
        case "verde":
            color = "green";
            break;
        case "azul":
            color = "blue";
            break;
        case "amarillo":
            color = "yellow";
            break;
        case "naranja":
            color = "orange";
            break;
        default:
            alert("Color invalido");
    }  
    /*
    if(colorIntroducido == "rojo"){
        color = "red";
    } else {
        if(colorIntroducido == "gris"){
            color="grey";
        } else {
            color = "blue";
        }
    }
    */
    var texto = "<table id='tablaPares'>";
    var i = 0;
    /*CON WHILE*/
    while(i<20){    
        texto = texto + "<tr><td>"+ (i*2) +"</td><tr>";
        i++;
    }
    texto = texto + "</table>";
    document.getElementById("tabla").innerHTML=texto;
    /*Para alterar el estilo*/
    document.getElementById("tablaPares").style.backgroundColor=color;
}


function cargarTabla3(){
    var capa=document.createElement("div");
    capa.id="rojo"
    capa.style.backgroundColor="red";
    capa.style.width="200px";
    capa.style.height="200px";
    document.body.appendChild(capa);
    var capa=document.createElement("div");
}

