# Proyecto Amigo Secreto

Este proyecto es una aplicación simple en JavaScript para organizar un sorteo de "Amigo Secreto". Toda la lógica principal se encuentra en el archivo `app.js`.

## ¿Cómo funciona?

1. **Agregar amigos:**  
   Los usuarios pueden ingresar nombres en un campo de texto. Cada nombre debe tener al menos 5 caracteres. Al agregar, el nombre se almacena en un array global llamado `amigos` y se muestra en una lista.

2. **Mostrar amigos:**  
   La función `mostrarAmigos` actualiza la lista en pantalla con todos los amigos agregados. Si no hay amigos, muestra un mensaje indicando que la lista está vacía.

3. **Sortear amigo secreto:**  
   La función `sortearAmigo` selecciona un amigo al azar de la lista y muestra el resultado en pantalla. Solo se permite el sorteo si hay al menos dos amigos en la lista. Al mostrar el resultado, la lista de amigos se oculta.

## Estructura de `app.js`

- **let amigos = []**  
  Array global donde se almacenan los nombres de los amigos.

- **function agregarAmigo()**  
  Agrega un amigo al array si el nombre es válido y actualiza la lista.

- **function mostrarAmigos()**  
  Muestra todos los amigos en un elemento `<ul>` con id `listaAmigos`.

- **function sortearAmigo()**  
  Realiza el sorteo y muestra el resultado en el elemento con id `resultado`.

## Ejemplo de uso

1. Ingresa los nombres de los participantes y agrégalos.
2. Haz clic en el botón de sorteo para ver quién es tu amigo secreto.

---

**Nota:**  
Este proyecto es ideal para practicar lógica de programación y manipulación del DOM