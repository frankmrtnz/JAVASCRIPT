class Oferta {
    constructor(id, titulo, descripcion, ubicacion, requisitos, salario, duracion, IdEmpresa, FechaCaducidad, EstaActiva) {
        this.Id = id;
        this.Titulo = titulo | "Sin titulo";
        this.Descripcion = descripcion;
        this.Ubicacion = ubicacion;
        this.Requisitos = requisitos;
        this.Salario = salario;
        this.Duracion = duracion;
        this.IdEmpresa = IdEmpresa;
        this.FechaCaducidad = FechaCaducidad;
        this.EstaActiva = EstaActiva;
    }
}

var numeroOferta = 1;

async function hacerPeticionOfertas(){
    const respuesta = await fetch("/Dia_41/InfoJobs2/consultaOfertas.php");
    const ofertas = await respuesta.json();
    pintarOfertas(ofertas);
}

function pintarOfertas(lista){
    lista.forEach(oferta =>{
        let $div=$("<div></div>").appendTo("#central");
        $("<h1></h1>").text(oferta.Titulo).appendTo($div);
        $("<p></p>").text("Descripción: "+oferta.Descripcion).appendTo($div);
        $("<p></p>").text("Ubicación: "+oferta.Ubicacion).appendTo($div);
        $("<p></p>").text("Requisitos: "+oferta.Requisitos).appendTo($div);
        $("<p></p>").text("Salario: "+oferta.Salario).appendTo($div);
        $("<p></p>").text("Duración: "+oferta.Duracion).appendTo($div);
        $("<p></p>").text("Id Empresa: "+oferta.IdEmpresa).appendTo($div);
        $("<p></p>").text("Fecha Caducidad: "+oferta.FechaCaducidad).appendTo($div);
        $("<p></p>").text("Esta Activa: "+oferta.EstaActiva).appendTo($div);
    });
}

export { Oferta , numeroOferta, hacerPeticionOfertas};