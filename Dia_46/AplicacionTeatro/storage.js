export class Storage {
  constructor(nombre){
    this.nombre=nombre || "SIN_NOMBRE";
  }
  guardar(operacion){
    let lista=[];
    if (localStorage.getItem(this.nombre)){
        lista=JSON.parse(localStorage.getItem(this.nombre));
    }
    lista.push(operacion);
    localStorage.setItem(this.nombre,JSON.stringify(lista));
  }
  leer(){
    let lista=[];
    if (localStorage.getItem(this.nombre)){
        lista=JSON.parse(localStorage.getItem(this.nombre));
    }
    return lista;
  }
}
