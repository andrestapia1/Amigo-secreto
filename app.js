var listaAmigos = [];

function agregarAmigo() {
  var nombre = document.getElementById("amigo");
  var mensaje = document.getElementById("mensaje");
  var lista = document.getElementById("listaAmigos");

  if (/\d/.test(nombre.value) || nombre.value.trim() == "" || /[^A-Za-z\s]/.test(nombre.value)) {
    mensaje.innerHTML = "Ingresa un nombre válido";
    mensaje.style.color = "red";
  } else if (listaAmigos.indexOf(nombre.value) !== -1) {
    mensaje.innerHTML = "Ese amigo ya está participando";
    mensaje.style.color = "blue";
  } else {
    mensaje.innerHTML = "El nombre es válido";
    mensaje.style.color = "green";

    var li = document.createElement("li");
    var litext = document.createTextNode(nombre.value);
    li.appendChild(litext);
    lista.appendChild(li);

    listaAmigos.push(nombre.value);
    nombre.value = "";
  }
}