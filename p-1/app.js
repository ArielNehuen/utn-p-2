function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }
  
  
  var numero1 = 4;
  var numero2 = 7;
  
  console.log(verificarParImpar(numero1)); // Par
  console.log(verificarParImpar(numero2)); // Impar
  