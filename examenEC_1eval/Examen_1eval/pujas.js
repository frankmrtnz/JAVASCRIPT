window.onload = function(){
    pintarTablaDatosPujas();
}



var listaPujas = [
    {
        "Foto": "yate1.png",
        "PrecioPuja": 201,
        "FechaCierrePuja": "26/11/2021"
    },
    {
        "Foto": "yate4.png",
        "PrecioPuja": 501,
        "FechaCierrePuja": "6/12/2021"
    },
    {
        "Foto": "yate12.png",
        "PrecioPuja": 501,
        "FechaCierrePuja": "24/11/2021"
    }
];

//var listaDatosPujas = JSON.parse(localStorage.getItem("datosPujas"));


function pintarTablaDatosPujas(){
    listaPujas.forEach(element => {
                    var texto = `<tr>
                    <td><img src="./imagenes/${element.Foto}" class="imagenMin"/></td>
                    <td>${element.FechaCierrePuja}</td>
                    <td>${element.PrecioPuja}</td>
                    <td><a onclick="eliminar(event)">Eliminar</a><br>
                        <a onclick="editar(event)">Editar</a> <input type="text" name="cajaEditar"></input><br>  
                    </td>
                    <tr>`;
            
                    document.getElementById("tablaPujas").innerHTML+=texto;
    });

}


function eliminar(event){
    var foto = event.target.parentNode.getElementsByTagName("a")[0];
    console.log(foto);
}



function editar(){

}