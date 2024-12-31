//Objetos: es una forma de organizar información. 
// cada "tarjeta" tiene propiedades como el título, descripción y una imagen. 
// Un objeto te permite agrupar esos datos de manera lógica

//Clases: Activity define cómo es una actividad, p luego crear varias actividades con sus propios datos usando esta plantilla.

//El repositorio es un lugar donde se gestionan todas las actividades.
//Rol: Es una capa intermedia que organiza y almacena las actividades creadas. 
//permite agregar nuevas actividades y obtener todas las existentes.
//Relación: Las tarjetas (elementos en el DOM) se basan en las actividades que están en el repositorio.
//El formulario recoge los datos de entrada, los pasa al repositorio, y luego las tarjetas se crean dinámicamente en la página

//Un evento es cualquier interacción del usuario con la página (por ejemplo, hacer clic en un botón).
//al hacer clic se ejecuta una función asociada al evento (recoger datos del formulario, crear una actividad y agregarla al DOM)
//Interacción con objetos:
//Los datos del formulario se transforman en un objeto Activity.
//Luego, ese objeto se usa para crear una tarjeta en el DOM

//El DOM es la representación estructurada de tu página HTML en el navegador.
//querySelector: Selecciona elementos de la página, como el formulario o un contenedor donde se agregarán las tarjetas.
//Crear elementos: Con métodos como createElement puedes generar nuevos elementos HTML desde JavaScript.
//Agregar elementos: Usamos appendChild para insertar esos elementos en la página.

//Flujo completo: Formulario → Evento → Clase → Tarjeta
//Formulario: El usuario escribe datos en los campos del formulario.
//Evento: Al hacer clic en "Enviar", se dispara un evento que llama a una función.
//Crear actividad: La función recoge los datos del formulario, crea un objeto de tipo Activity y lo guarda en el repositorio.
//Agregar al DOM: Luego, se genera una tarjeta basada en los datos de la actividad y se agrega a la página.

//Clase Activity: Es una plantilla para crear actividades.
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

//Clase Repository: Almacena las actividades. Métodos importantes:
//createActivity: Crea una nueva actividad y la guarda.
//getAllActivities: Devuelve todas las actividades guardadas.
class Repository {// Clase para almacenar y gestionar actividades
    constructor() {
        this.activities = [];// Array para guardar todas las actividades
    }
    // Método para obtener todas las actividades
    getAllActivities() {
        return this.activities;
    }
    // Método para crear una nueva actividad y guardarla
    createActivity(id, title, description, imgUrl) {
        const activity = new Activity(id, title, description, imgUrl);// Crear instancia de Activity
        this.activities.push(activity);// Añadirla al array de actividades
        return activity; //Devolver la actividad creada
    }
}

//Interacción con el DOM. 
// 1).Agregar una tarjeta al DOM:
//querySelector: Encuentra el contenedor donde se colocarán las tarjetas.
//createElement: Crea un elemento div para representar la tarjeta.
//innerHTML: Llena el contenido del div con los datos de la actividad.
//appendChild: Añade el div al contenedor en el DOM.
const repository = new Repository();// Instancia del repositorio para almacenar actividades

// Función que recibe una actividad y la añade al HTML dinámicamente
function addActivityToDom(activity) {
    const activitiesContainer = document.querySelector(".activity_container");
    const card = document.createElement("div");
    card.className = "tarjetas";
    card.innerHTML = `
        <img src="${activity.imgUrl}" class="logo" alt="${activity.title}">
        <h3 class="titulos">${activity.title}</h3>
        <p class="descripcion">${activity.description}</p>
    `;
    activitiesContainer.appendChild(card);
}

// 2).Capturar datos del formulario:
//document.querySelector("#title_form").value: Obtiene lo que el usuario escribió en el campo de texto.
//Validación: Si algún campo está vacío, muestra un mensaje de error.
//Si todo está bien, crea una actividad.

// Seleccionar el formulario y el botón
const form = document.getElementById("form");
const addButton = document.getElementById("add_button");

// Agregar un evento al botón
addButton.addEventListener("click", () => {
    const title = document.querySelector("#title_form").value;
    const description = document.querySelector("#description_form").value;
    const imgUrl = document.querySelector("#img_form").value;
    if (title === "" || description === "" || imgUrl === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    const id = Date.now();
    const newActivity = repository.createActivity(id, title, description, imgUrl);
    addActivityToDom(newActivity);
    form.reset();
});
