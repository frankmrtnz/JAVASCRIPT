class Usuario {
    constructor(nombreUsuario,email,clave){
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.clave = clave;
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