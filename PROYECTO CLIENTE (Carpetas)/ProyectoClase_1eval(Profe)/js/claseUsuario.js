class Usuario{
    constructor(id,nombre,apellidos,clave){
        this.id = id || "XXXXX";
        this.nombre = nombre || "SIN NOMBRE";
        this.apellidos = apellidos || "SIN APELLIDOS";
        this.clave = clave || "xxxx";
    }
    cambiarClave(nuevaClave){
        this.clave = nuevaClave;
    }
    nombreCompleto(){
        var nombreCompleto=this.nombre + " " + this.apellidos;
        return nombreCompleto;

        return this.nombre + " " + this.apellidos;
    }
}
