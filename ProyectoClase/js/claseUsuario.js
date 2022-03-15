class Usuario {
    constructor(id,nombre,apellidos,clave){
        this.id = id || "XXXXX";   //con el || asignamos Valor por defecto
        this.nombre = nombre || "SIN NOMBRE";
        this.apellidos = apellidos || "SIN APELLIDOS";
        this.clave = clave || "0000";
    };
    cambiarClave(nuevaClave){
        this.clave = nuevaClave;
    };
    nombreCompleto(){
        return this.nombre + " " + this.apellidos;
    }
}