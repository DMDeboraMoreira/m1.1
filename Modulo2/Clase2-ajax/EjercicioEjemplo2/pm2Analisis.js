// HTML (estructura del documento):
// Encabezado (header)
// Logo e Identidad del sitio:

// Una imagen de logo (palomitas.jpg).
// Un título principal: Mi Cine.
// Barra de navegación (nav):

// Contiene enlaces que apuntan a otras páginas:
// Home: página principal.
// Sobre mi: página de información personal.
// Recomendados: una lista de películas recomendadas.
// Sección principal (main)
// Contiene un section llamada movies-section:
// Un encabezado Películas.
// Un contenedor vacío (div con id="contenedorTarjetas") donde se insertarán dinámicamente las tarjetas de las películas.
// JavaScript (funcionalidad):

// PASO 1: Capturar el contenedor del DOM
// const contenedorTarjetas = document.getElementById("contenedorTarjetas");

// seleccionamos el contenedor vacío #contenedorTarjetas para manipularlo más tarde y agregar las tarjetas de películas dinámicamente

// PASO 2: Crear una tarjeta de película en HTML
// Función movieToHtml
// Esta función recibe un objeto movie como parámetro (representa una película) y genera un elemento HTML con su información.

// const movieToHtml = (movie) => {
//     const container = document.createElement("div"); // Contenedor de la tarjeta.
//     const title = document.createElement("h3"); // Título de la película.
//     const poster = document.createElement("img"); // Imagen de la película.
//     const button = document.createElement("button"); // Botón de acción.

//     // Asignar información al contenido:
//     poster.src = movie.poster; // URL de la imagen.
//     poster.alt = movie.title; // Texto alternativo.
//     title.innerText = movie.title; // Título de la película.
//     button.innerText = "Ver más"; // Texto del botón.

//     // Agregar clase CSS al contenedor:
//     container.classList.add("tarjeta");

//     // Insertar los elementos en el contenedor:
//     container.appendChild(poster);
//     container.appendChild(title);
//     container.appendChild(button);

//     // Retornar la tarjeta lista para insertarse en el DOM:
//     return container;
// };

// Resumen del propósito:
// Esta función transforma un objeto movie en un elemento HTML <div> que incluye:
// Imagen (poster).
// Título.
// Botón interactivo.

// PASO 3: Agregar las tarjetas al contenedor
// Función addToHtml
// Esta función recibe un array de datos de películas (data) y:
// Transforma cada película en un elemento HTML usando movieToHtml.
// Inserta las tarjetas generadas en el contenedor #contenedorTarjetas.

// const addToHtml = (data) => {
//     const contenedorTarjetas = document.getElementById("contenedorTarjetas");

//     // Transformar cada película en una tarjeta HTML:
//     const movieElements = data.map(movieToHtml);

//     // Insertar las tarjetas en el contenedor:
//     movieElements.forEach((movieElem) => contenedorTarjetas.appendChild(movieElem));
// };

// Resumen del propósito:
// Convierte un array de películas en tarjetas HTML y las inserta en el DOM.

// PASO 4: Obtener los datos de la API
// Función getData
// Esta función realiza una solicitud a una API externa para obtener datos de películas y luego los agrega al DOM.

// const getData = () => {
//     $.get("https://students-api.up.railway.app/movies", (data, status) => {
//         addToHtml(data);
//     });
// };

// Detalles clave:
// Solicitud a la API con jQuery:

// Usa $.get para hacer una llamada HTTP al endpoint https://students-api.up.railway.app/movies.
// Si la solicitud es exitosa, se ejecuta el callback con dos parámetros:
// data: El array de películas recibido de la API.
// status: El estado de la solicitud (no se utiliza aquí).

// Procesar los datos:
// Llama a addToHtml(data) para mostrar las películas en la página.
// Nota:

// $.get es parte de jQuery y simplifica la obtención de datos desde un servidor.

// PASO 5: Ejecutar el flujo completo

// getData();
// Llama a getData para iniciar el proceso:
// Solicitar datos de películas.
// Transformar los datos en tarjetas HTML.
// Insertar las tarjetas en el contenedor.

// Orden del flujo de trabajo completo:
// Capturar el contenedor en el DOM (contenedorTarjetas).
// Definir una función para transformar objetos movie en tarjetas HTML (movieToHtml).
// Definir una función para agregar tarjetas al DOM (addToHtml).
// Obtener los datos de la API y mostrarlos en el DOM (getData).

// Resultado final:
// La página muestra dinámicamente una lista de películas obtenidas de la API con su imagen, título y botón de acción.