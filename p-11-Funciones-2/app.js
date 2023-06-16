function calcularImpuestos(monto) {
    if (monto >= 1000) {
      return monto * 0.2;
    } else {
      return monto * 0.1;
    }
  }
  
  var monto = 1500;
  var impuestos = calcularImpuestos(monto);
  console.log(impuestos); 
  