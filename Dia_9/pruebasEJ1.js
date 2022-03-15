function miPrimeraFuncion(){
        console.log("Hola mundo");

        var a = 11;
        var textoEnInglesDeNumero = a == 5 ? 'Five' :
                                    a == 7 ? 'Seven' :
                                    a == 11 ? 'Eleven' :
                                    a == 15 ? 'Fifteen' :
                                  'Other Number';

        console.log(textoEnInglesDeNumero); // Eleven
}

miPrimeraFuncion();
