// Definimos una clase llamada `Activity` para crear actividades individuales con ciertas propiedades.
class Activity {
    constructor(id, titulo, descripcion, imgUrl) {
        // Cada actividad tiene un identificador único, un título, una descripción y una URL de imagen.
        this.id = id; // Identificador único de la actividad (puede ser una fecha o un número generado).
        this.titulo = titulo; // Título o nombre de la actividad.
        this.descripcion = descripcion; // Breve descripción de la actividad.
        this.imgUrl = imgUrl; // URL de la imagen que representa la actividad.
    }
}

// Definimos otra clase llamada `Repositorio` para gestionar un conjunto de actividades.
class Repositorio {
    constructor() {
        this.activities = []; //crep prop y le asigno valor// Este array almacenará todas las actividades creadas.
    }

    // Método para obtener la lista completa de actividades almacenadas.
    listarActivities() {
        return this.activities; // Retorna todas las actividades en el array.
    }

    // Método para crear una nueva actividad y agregarla al array de actividades.
    crearActividad(id, titulo, descripcion, imgUrl) {
        // Crea una nueva instancia de `Activity` con los datos proporcionados.
        const activity = new Activity(id, titulo, descripcion, imgUrl);
        // Agrega la nueva actividad al array de actividades.
        this.activities.push(activity);
        // Devuelve la actividad recién creada.
        return activity;
    }
}

// Creamos una instancia de `Repositorio` para gestionar las actividades.
const repositorio = new Repositorio();

// Función que agrega una actividad al DOM (es decir, la muestra en la página web).
function agActividadDom(activity) {
    // Seleccionamos el contenedor donde se mostrarán las tarjetas de actividades.
    const contenedorDom = document.querySelector(".contenedor_tarjetasDOM");

    // Creamos un nuevo elemento `div` que representará la tarjeta de la actividad.
    const nuevoDiv = document.createElement("div");

    // Asignamos la clase `tarjeta` al nuevo `div` para aplicarle estilos CSS.
    nuevoDiv.className = "tarjeta";

    // Definimos el contenido HTML del `div` utilizando una plantilla literal.
    // Incluimos el título, la descripción y la imagen de la actividad.
    nuevoDiv.innerHTML = `
        <h3 class="titulos">${activity.titulo}</h3>
        <p class="titulos">${activity.descripcion}</p>
        <img src="${activity.imgUrl}" class="logo"/>
    `;

    // Agregamos el nuevo `div` al contenedor para que se visualice en la página.
    contenedorDom.appendChild(nuevoDiv);
}

// Capturamos el formulario completo para usarlo más adelante (por ejemplo, para reiniciarlo).
const form = document.querySelector("form");

// Capturamos el botón de enviar para asignarle un evento al hacer clic.
const button = document.querySelector("button");

// Agregamos un evento al botón para que ejecute una función cada vez que se haga clic en él.
button.addEventListener("click", () => {
    // Obtenemos los valores actuales de los campos del formulario (inputs).
    const titulo = document.getElementById("Actividad").value; // Valor del campo "Actividad".
    const descripcion = document.getElementById("Descripcion").value; // Valor del campo "Descripción".
    const imgUrl = document.getElementById("Url").value; // Valor del campo "URL de la Imagen".

    // Usamos la fecha y hora actual como identificador único para la actividad.
    const id = Date.now();

    // Validamos que ninguno de los campos esté vacío.
    if (titulo === "" || descripcion === "" || imgUrl === "") {
        alert("Por favor, completa todos los campos"); // Mostramos una alerta si algún campo está vacío.
        return; // Terminamos la ejecución de la función si los campos no están completos.
    }

    // Creamos una nueva actividad y la guardamos en el repositorio.
    const nuevaActividad = repositorio.crearActividad(id, titulo, descripcion, imgUrl);

    // Agregamos la actividad recién creada al DOM para que se vea en la página.
    agActividadDom(nuevaActividad);

    // Reiniciamos los campos del formulario para que queden vacíos.
    form.reset();
});
