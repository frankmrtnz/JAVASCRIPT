import { Oferta, hacerPeticionOfertas, mensajeExitoInsercion, pintarFiltroSalario } from './oferta.js';

$(document).ready(function(){
    hacerPeticionOfertas();
    mensajeExitoInsercion();
    pintarFiltroSalario();
})


