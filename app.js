// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array global para almacenar los amigos

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let amigo = inputAmigo.value.trim();
  // Validar que el nombre del amigo tenga al menos 4 caracteres
  if (amigo.length <= 4) {
    alert("Por favor, ingresa un nombre de amigo correcto.");
    return;
  }
  amigos.push(amigo);
  console.log(`Amigo ${amigo} agregado.`);
  inputAmigo.value = ""; // Limpiar el input
  mostrarAmigos(); // Mostrar la lista actualizada de amigos
}
// Funcion mostrar amigo en ul listaAmigos, se deve listar todos los amigos ingresados
function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });

  if (amigos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay amigos agregados.";
    listaAmigos.appendChild(li);
  }
}
// sortearAmigo esta funcion deve sortear un amigo secreto entre los amigos ingresados seleccionar 1 oculatar resultado de listaAmigos y mostrar resultado en del sortearAmigo resultado
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Necesitas al menos dos amigos para realizar el sorteo.");
    return;
  }
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar el resultado anterior

  const shuffledAmigos = amigos.slice().sort(() => Math.random() - 0.5);
  // Obtener un índice aleatorio
  const indice = Math.floor(Math.random() * shuffledAmigos.length);
  // Obtener el amigo en ese índice
  const amigoSecreto = shuffledAmigos[indice];

  // Mostrar solo el resultado
  const li = document.createElement("li");
  li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);

  // Ocultar la lista de amigos
  document.getElementById("listaAmigos").innerHTML = "";
}
// inicializar la lista de amigos al cargar la página
mostrarAmigos(); // Mostrar la lista de amigos al cargar la página
