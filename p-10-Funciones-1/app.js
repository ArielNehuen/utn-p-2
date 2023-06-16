function sumarNumerosPares(n) {
    var suma = 0;
    for (var i = 2; i <= n; i += 2) {
      suma += i;
    }
    return suma;
  }
  
  var numero = 20;
  var resultado = sumarNumerosPares(numero);
  console.log(resultado);