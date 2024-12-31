//1.Define una clase Activity para representar cada actividad con sus propiedades.
//2.Usa un repositorio (Repository) para gestionar todas las actividades.
//3.Crea una función para agregar tarjetas dinámicamente al DOM con createElement y appendChild.
//4.Añade un evento al botón para tomar los datos del formulario, validarlos, crear una actividad y mostrarla en la página.


// Clase para representar una actividad
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id; // Identificador único para la actividad
        this.title = title; // Título de la actividad
        this.description = description; // Descripción de la actividad
        this.imgUrl = imgUrl; // URL de la imagen de la actividad
    }
}
// Clase para almacenar y gestionar actividades
class Repository {
    constructor() {
        this.activities = []; // Array para guardar todas las actividades
    }

    // Método para obtener todas las actividades
    getAllActivities() {
        return this.activities;
    }

    // Método para crear una nueva actividad y guardarla
    createActivity(id, title, description, imgUrl) {
        const activity = new Activity(id, title, description, imgUrl); // Crear instancia de Activity
        this.activities.push(activity); // Añadirla al array de actividades
        return activity; // Devolver la actividad creada
    }
}

// Instancia del repositorio para almacenar actividades
const repository = new Repository();
// Función que recibe una actividad y la añade al HTML dinámicamente
function addActivityToDom(activity) {
    const activitiesContainer = document.querySelector(".activity_container"); // Seleccionar el contenedor de actividades
    const card = document.createElement("div"); // Crear un nuevo div
    card.className = "tarjetas"; // Asignar la clase 'tarjetas' al div
    card.innerHTML = `
        <img src="${activity.imgUrl}" class="logo" alt="${activity.title}">
        <h3 class="titulos">${activity.title}</h3>
        <p class="descripcion">${activity.description}</p>
    `; // Rellenar el HTML de la tarjeta con los datos de la actividad
    activitiesContainer.appendChild(card); // Añadir la tarjeta al contenedor en el DOM
}
// Seleccionar el formulario y el botón
const form = document.getElementById("form"); // Referencia al formulario completo
const addButton = document.getElementById("add_button"); // Referencia al botón 'Enviar'
// Agregar un evento al botón
addButton.addEventListener("click", () => {
    // Obtener los valores de los inputs del formulario
    const title = document.querySelector("#title_form").value; // Obtener el título
    const description = document.querySelector("#description_form").value; // Obtener la descripción
    const imgUrl = document.querySelector("#img_form").value; // Obtener la URL de la imagen

    // Validar que los campos no estén vacíos
    if (title === "" || description === "" || imgUrl === "") {
        alert("Por favor, completa todos los campos."); // Mostrar un mensaje de error si faltan datos
        return; // Salir de la función
    }

    // Crear una nueva actividad
    const id = Date.now(); // Usar la fecha actual como identificador único
    const newActivity = repository.createActivity(id, title, description, imgUrl); // Crear la actividad y guardarla en el repositorio

    // Añadir la nueva actividad al DOM
    addActivityToDom(newActivity);

    // Resetear el formulario (limpiar los inputs)
    form.reset();
});
