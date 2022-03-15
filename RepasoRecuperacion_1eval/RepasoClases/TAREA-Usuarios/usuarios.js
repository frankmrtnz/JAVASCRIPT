var listaUsuarios = [
    {
        "codigo": 001,
        "clave": "cl@ve1",
        "ultimoAcceso": "28/09/2021"
    },
    {
        "codigo": 002,
        "clave": "cl@ve2",
        "ultimoAcceso": "01/11/2021"
    }, 
    {
        "codigo": 003,
        "clave": "cl@ve3",
        "ultimoAcceso": "11/12/2021"
    }  
];


//devolver clave del primer usuario ordenado alfabeticamente por codigo de usuario
function mostrarClavePrimerUsuarioOrdenadoPorCodigo(lista) {
    var listaOrdenada = lista.concat();
    listaOrdenada.sort((a,b) => {
        if(a.codigo > b.codigo) return 1;
        else return -1;
    }); //Esta es la mejor opción
    //listaOrdenada.sort((a,b) => a.codigo - b.codigo);
    alert(listaOrdenada[0].clave);
}
mostrarClavePrimerUsuarioOrdenadoPorCodigo(listaUsuarios);



//devuelva cuantos usuarios entraron el 11/12/2021
function mostrarAccesoUsuariosFecha(lista, fecha) {
    alert(lista.filter(element => element.ultimoAcceso == fecha).length);
}
mostrarAccesoUsuariosFecha(listaUsuarios, "11/12/2021");



//que a todos los objetos que tenga listaUsuarios crear propiedad estado a activo
function anadirPropiedadAEstado(lista) {
    lista.forEach(element => {
        element.estado = "Activo";
    });
}
anadirPropiedadAEstado(listaUsuarios);
alert(listaUsuarios[0].estado);


//crear metodo en todos los objetos de listaUsuarios que pueda cambiar ultimo acceso
function anadirMetodoAUsuarios(lista) {
    lista.forEach(element => {
        element.cambiarUltimoAcceso = function(acceso) {
            this.ultimoAcceso = acceso;
        };
    });
    /*
    OTRA OPCION
    lista.forEach(element => {
        element.cambiarUltimoAcceso = (a) => this.ultimoAcceso = a;
    });
    */
}
anadirMetodoAUsuarios(listaUsuarios);
listaUsuarios[0].cambiarUltimoAcceso("13/12/2021");
alert(listaUsuarios[0].ultimoAcceso);



