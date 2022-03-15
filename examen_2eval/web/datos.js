var validaciones=[
    {"usuario":"Fernando","fecha":"2021-02-02T23:04:44.491Z"},
    {"usuario":"Maria","fecha":"2021-02-02T23:06:03.528Z"},
    {"usuario":"Fernando","fecha":"2021-02-02T23:06:18.837Z"},
    {"usuario":"Ana","fecha":"2021-02-02T23:35:48.473Z"},
    {"usuario":"Fernando","fecha":"2021-02-03T19:05:58.663Z"},
    {"usuario":"Pedro","fecha":"2021-02-03T19:37:51.569Z"},
    {"usuario":"Fernando","fecha":"2021-02-03T19:43:16.647Z"}
    ];

$(document).ready(function() {
    usuarioValidado = sessionStorage.getItem("datosUsuario");
    var tipoUsuario = usuarioValidado.split(",")[0];
    var nombreValidado = usuarioValidado.split(",")[1];
    var claveValidado = usuarioValidado.split(",")[2];
    console.log(tipoUsuario);

    //Obtenemos el tipo de usuario del sessionstorage anteriormente guardado y comprobamos si es admin
    if(tipoUsuario == "admin") {
        $("button#consultar").click({}, hacerPeticion);
    } else {
        alert("NO ERES ADMIN, no podrás hacer la consulta");
    }
})


function hacerPeticion() {
    var consultaIntroducida = $("select:eq(0)").val();
    console.log(consultaIntroducida);
    var fechaIntroducida = $("input#fecha").val();
    console.log(fechaIntroducida);
    var patronFecha = "/^[0-9]{1,2}[\-]{1}[0-9]{1,2}[\-]{1}[0-9]{4}$/";
    if(fechaIntroducida.match(patronFecha)) {
        alert("Formato correcto");
    } else {
        alert("Formato fecha no correcto");
    }
    if(consultaIntroducida!="Escoge una consulta") {
        $.get("consultaSO.php", {}, function(listaUsuarios) {
            // console.log(listaUsuarios);
            pintarUsuarios(listaUsuarios);
        }, "json");
    }
    
}






