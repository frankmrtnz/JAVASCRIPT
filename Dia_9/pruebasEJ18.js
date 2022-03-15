//ejercicio 18: PARAMETROS POR DEFECTO
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));  // SALIDA ES 10
  
  console.log(multiply(5)); // SALIDA ES 5
  