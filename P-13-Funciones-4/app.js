function generarContraseña(n) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let contraseña = '';
  
    for (let i = 0; i < n; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres.charAt(indiceAleatorio);
    }
  
    return contraseña;
  }
  
  
  const contraseñaGenerada = generarContraseña(8);
  console.log(contraseñaGenerada);
  