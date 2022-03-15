// ejercicio 7: crea una función que reciba dos parámetros x y n y devuelva el valor de
//    la potencia n de x. Por ejemplo: potencia(3,5) = 3*3*3*3*3


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


function hacerPotencia(base, exponente){
        return Math.pow(base, exponente);       
}



function comprobar(dato, funcion){
    if(funcion(dato)){
        alert('OK');
    } else {
        alert('Error');
    }
}


/*Introducimos la función como parametro pasando todo el codigo, si lo pusieramos 
con () estariamos obteniendo lo que devuelve esa función*/
comprobar(5, esPar);  



console.log(hacerPotencia(3,5));

