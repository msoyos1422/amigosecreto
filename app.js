// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array global para almacenar los amigos

agregarAmigo = () => {
  let inputAmigo = document.getElementById("amigo");
  let amigo = inputAmigo.value.trim();
  if (amigo.length <= 4) {
    alert("Por favor, ingresa un nombre de amigo correcto.");
    return;
  }

  if (amigo) {
    amigos.push(amigo);
    console.log(`Amigo ${amigo} agregado.`);
    inputAmigo.value = ""; // Limpiar el input
    mostrarAmigos(); // Mostrar la lista actualizada de amigos
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
};
// Funcion mostrar amigo en ul listaAmigos, se deve listar todos los amigos ingresados
mostrarAmigos = () => {
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
};
