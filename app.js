const listaAmigos = [];
const nombre = document.getElementById("amigo");
const mensaje = document.getElementById("resultado");
const lista = document.getElementById("listaAmigos");
function agregarAmigo() {
 

  if (/\d/.test(nombre.value) || nombre.value.trim() == "" || /[^A-Za-z\s]/.test(nombre.value)) {
    mensaje.innerHTML = "Ingresa un nombre válido";
    mensaje.style.color = "red";
  } else if (listaAmigos.indexOf(nombre.value) !== -1) {
    mensaje.innerHTML = "Ese amigo ya está participando";
    mensaje.style.color = "blue";
  } else {
    mensaje.innerHTML = "El nombre es válido";
    mensaje.style.color = "green";

    const li = document.createElement("li");
    const litext = document.createTextNode(nombre.value);
    li.appendChild(litext);
    lista.appendChild(li);

    listaAmigos.push(nombre.value);
    nombre.value = "";
  }
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

function sortearAmigo() {
 
  if (listaAmigos.length < 2) {
    mensaje.innerHTML = "Debe haber al menos dos amigos para sortear";
    mensaje.style.color = "red";
  } else {
    const amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    mensaje.innerHTML = "El amigo secreto es: " + amigoSecreto;
    mensaje.style.color = "green";
  }
}

//document.getElementById("sortearBtn").addEventListener("click", sortearAmigo);