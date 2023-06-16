var amigos = ["Juan", "María", "Pedro"];
var lista = document.getElementById("amigos-lista");

amigos.forEach(function(amigo) {
  lista.innerHTML += "<li>" + amigo + "</li>";
});
