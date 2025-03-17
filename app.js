// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres ingresados
const nombres = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");

    if (input.value.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista
    nombres.push(input.value.trim());

    // Crear un elemento de lista y añadirlo
    const li = document.createElement("li");
    li.textContent = input.value.trim();
    lista.appendChild(li);

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para sortear un amigo
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    // Elegir un nombre al azar
    const indice = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indice];

    // Mostrar el resultado
    const li = document.createElement("li");
    li.textContent = `${nombreSorteado} es el amigo secreto`;
    resultado.appendChild(li);
}

