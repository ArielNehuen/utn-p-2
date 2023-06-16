var edades = [25, 30, 35, 40, 45];

var sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
  sumaEdades += edades[i];
}

var promedioEdades = sumaEdades / edades.length;

console.log("Edades:", edades);
console.log("Edad promedio:", promedioEdades);
