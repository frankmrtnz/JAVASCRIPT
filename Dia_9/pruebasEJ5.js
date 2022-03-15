// ejercicio 5: crea una función que reciba un número como parámetro y
//    devuelva si el numero es par o impar (controla que sea un número)


function esPar(num){
    if(isNaN(num)){
      return false;  
    } else {
        if(num%2 == 0){
            return true;
        } else {
            return false;
        }
    }
}


if(esPar(5)){
    alert('5 es par');
} else {
    alert('5 es impar');
}