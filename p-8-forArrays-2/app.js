var frutasFavoritas = ["manzana", "pera", "naranja", "uvas", "asado xD"];
var lista = document.getElementById("frutas-lista");

frutasFavoritas.forEach(function(fruta) {
  lista.innerHTML += "<li>" + fruta + "</li>";
});
