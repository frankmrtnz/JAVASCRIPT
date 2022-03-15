class Usuario {
    constructor(nombreUsuario,email,clave){
        this.nombreUsuario = nombreUsuario || "SIN NOMBRE";
        this.email = email || "SIN EMAIL";
        this.clave = clave || "0000";
    };
    cambiarClave(nuevaClave){
        this.clave = nuevaClave;
    };
    cambiarnombreUsuario(nuevoNombre){
        this.nombreUsuario = nuevoNombre;
    }
    cambiarEmail(nuevoEmail){
        this.email = nuevoEmail;
    }
}