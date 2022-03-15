//worker.js

self.addEventListener('message',function(evento){
    var limite = evento.data; // Lo que recibimos de la llamada
    var mayorEncontradoHastaElMomento = 0;
    function esPrimo(numero) {
       for (var i = 2; i < numero; i++) {
          if (numero % i === 0) {
            return false;
          }
       }
       return numero !== 1;
    }
    for(var x = 0; x < limite; x++){
       if(esPrimo(x)){
      mayorEncontradoHastaElMomento = x;
       }
    }
    //Cuando termine el for, llamamos al método
    // postMessage para informar a nuestro invocador
    // que hemos terminado nuestra larga
    self.postMessage("Hola. El número primo más grande menor que " + limite.toString() + " es " + mayorEncontradoHastaElMomento.toString());
  
  self.close(); // con esa línea eliminamos el worker, sino seguirá existiendo
  
  });
  
  