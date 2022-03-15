// ejercicio 16: funciones flecha

var elementos = [
    "Hidrógeno",
    "Helio",
    "Litio",
    "Berilio"
  ];
  

  console.log(elementos.map(function(elemento){
      return elemento.length;
  }));  // [9, 5, 5, 7]
  

  //CON EXPRESIONES FLECHA
  console.log(elementos.map((elemento) => {
    return elemento.length;
  }));


  //OTRO EJEMPLO ACORTANDO MÁS LA FUNCION FLECHA
    console.log(elementos.find((elemento) => elemento.charAt(0)=="H" ));

  //OTRO EJEMPLO ORDENAR ALFABETICAMENTE CON FUNCION FLEHA Y OPERADOR TERNARIO
    console.log(elementos.sort((a,b) => a>b ? 1:-1));