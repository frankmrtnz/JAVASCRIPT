function hacerPeticion() {
    $.post("prueba.php",
        { "nombre": "juan" },
        (data) => {
            let listaValores = data.split(";"); 
            let resultado = "";
            listaValores.forEach(element => {
                let trozos = element.split(":");
                if(trozos.length>1 && trozos[0]=="respuesta") {
                    resultado = trozos[1];
                }
            });
            $("input#caja").val(resultado);
        });
}


export { hacerPeticion };