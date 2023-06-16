function verificarLongitud(texto) {
    if (texto.length > 10) {
      return "largo";
    } else {
      return "corto";
    }
  }
  
 
  var cadena1 = "Hola, mundo!";
  var cadena2 = "Hola";
  
  var resultado1 = verificarLongitud(cadena1);
  var resultado2 = verificarLongitud(cadena2);
  
  console.log(resultado1); // largo
  console.log(resultado2); // corto
  