function contarVocales(texto) {
    var contador = 0;
    var vocales = ["a", "e", "i", "o", "u"];
    
    for (var i = 0; i < texto.length; i++) {
      if (vocales.includes(texto[i])) {
        contador++;
      }
    }
    
    return contador;
  }
  
  var texto = "laprofeesunagenia";
  var cantidadVocales = contarVocales(texto);
  console.log(cantidadVocales);