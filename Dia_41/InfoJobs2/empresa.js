class Empresa {
    constructor(id, nombre, descripcion, sector, url_web, correo, persona_contacto, correo_contacto, CIF, logo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.sector = sector;
        this.url_web = url_web;
        this.correo = correo;
        this.persona_contacto = persona_contacto;
        this.correo_contacto = correo_contacto;
        this.CIF = CIF;
        this.logo = logo;
    }
}

export { Empresa };