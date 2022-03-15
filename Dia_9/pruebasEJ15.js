// ejercicio 15: numero de parámetros
// esta función admite un número indeterminado de parámetros

function myConcat(separator) {
    var result = "", // initialize list
        i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
  }
  
  // returns "red, orange, blue, "
  console.log(myConcat(", ", "red", "orange", "blue"));
  
  // returns "elephant; giraffe; lion; cheetah; "
  console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
  
  // returns "sage. basil. oregano. pepper. parsley. "
  console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));