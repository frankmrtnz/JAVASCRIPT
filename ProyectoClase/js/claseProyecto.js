
class Proyecto{
    constructor(id,nombre,descripcion,fecha_inicio,fecha_fin,presupuestoInicial, presupuestoActual, 
    cliente, listaEmpleados, estado, modificaciones) {
        this.id = id;
        this.nombre = nombre;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.presupuestoInicial = presupuestoInicial;
        this.presupuestoActual = presupuestoActual;
        this.cliente = cliente;
        this.listaEmpleados = listaEmpleados;
        this.estado = estado;
        this.modificaciones = modificaciones;
    }
}