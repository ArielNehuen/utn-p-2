function verificarSigno(numero) {
    if (numero > 0) {
      console.log("El número", numero, "es positivo.");
    } else if (numero < 0) {
      console.log("El número", numero, "es negativo.");
    } else {
      console.log("El número es igual a cero.");
    }
  }
  
  
  var numero = -7;
  verificarSigno(numero);
  