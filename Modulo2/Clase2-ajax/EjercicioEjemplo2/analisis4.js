// Desglose Extremo de Cada Bloque

// 1. Definición de la constante repository
//
// const repository = new Repository();

// A. ¿Qué hace esta línea?
// Crea una instancia de la clase Repository:
// Utiliza la palabra clave new para instanciar un objeto basado en la clase Repository.
// repository será una referencia a este nuevo objeto.
// Almacena la instancia en una constante:
// La referencia no puede ser reasignada, pero el contenido del objeto puede cambiar.

// B. ¿Por qué se decide instanciar aquí?
// Contexto global:
// Al instanciarlo en el nivel global, permite que esta referencia sea accesible en todas las funciones del archivo, 
// promoviendo reutilización y consistencia.
// Evita múltiples instancias:
// Si Repository maneja datos compartidos (como los usuarios), crear múltiples instancias podría desincronizar el estado de la aplicación.
// Patrón de diseño:
// Esto sugiere un diseño tipo "singleton", donde una sola instancia controla el estado.

// C. Alternativas posibles
// Instanciar dentro de funciones:
// Ejemplo: Crear repository dentro de addUser.
// Ventaja: Encapsula repository, evitando acceso no intencionado desde otras partes del programa.
// Desventaja: Se perdería el estado compartido, ya que cada función tendría su propia instancia.
// Patrón de módulo:
//
// const repository = (() => {
//     const users = [];
//     return {
//         createUser: (user) => users.push(user),
//         getUsers: () => users,
//     };
// })();
// Ventaja: Evita el uso de clases si no son necesarias.
// Desventaja: Menos escalabilidad si se necesitan múltiples métodos o herencia.

// D. Impacto global
// Garantiza un único punto de acceso al almacenamiento de usuarios (repository.users), 
// facilitando el control del estado y la consistencia del programa.

// 2. Selección de elementos DOM
// 
// const addUserButton = document.getElementById("addUserButton");
// const usersContainer = document.getElementById("usersContainer");

// A. ¿Qué hace esta línea?
// document.getElementById:
// Método nativo de la DOM API que selecciona elementos por su atributo id.
// addUserButton es el botón encargado de añadir usuarios.
// usersContainer es el contenedor donde se renderizan las tarjetas de usuario.

// B. ¿Por qué se usa aquí?
// Específico y directo:
// Usar getElementById es eficiente, ya que el id es único en el DOM.
// Se asegura que selecciona exactamente el elemento esperado.

// C. Alternativas posibles
// Usar querySelector:
//
// const addUserButton = document.querySelector("#addUserButton");
// const usersContainer = document.querySelector("#usersContainer");
// Ventaja: Más versátil, permite seleccionar por cualquier tipo de selector CSS.
// Desventaja: Ligeramente menos eficiente que getElementById.
// Agregar referencias dinámicamente:
// Si los elementos no existen inicialmente, podríamos crearlos dinámicamente en lugar de seleccionarlos.

// D. Impacto global
// Estas constantes son esenciales para el funcionamiento del programa, ya que establecen puntos de interacción con el DOM.

// 3. Definición de la función refresh
// 
// const refresh = () => {
//     usersContainer.innerHTML = "";
//     const users = repository.users;
//     const htmlUsers = users.map((user) => {
//         const name = document.createElement("h3");
//         const email = document.createElement("p");
//         name.innerHTML = user.name;
//         email.innerHTML = user.email;

//         const card = document.createElement("div");
//         card.appendChild(name);
//         card.appendChild(email);

//         return card;
//     });
//     htmlUsers.forEach((card) => {
//         usersContainer.appendChild(card);
//     });
// };

// A. ¿Qué hace esta función?
// Limpia el contenedor:
// 
// usersContainer.innerHTML = "";
// Borra todos los elementos hijos de usersContainer.
// Motivación: Se asegura de que el contenedor esté vacío antes de renderizar los usuarios actuales.
// Obtiene los usuarios del repositorio:
// 
// const users = repository.users;
// Recupera la lista de usuarios almacenados en repository.
// Genera elementos HTML dinámicamente:
// 
// const htmlUsers = users.map((user) => { ... });
// Usa Array.prototype.map para convertir cada usuario en un div con su nombre y correo.
// Renderiza los usuarios en el contenedor:
// 
// htmlUsers.forEach((card) => {
//     usersContainer.appendChild(card);
// });
// Añade cada tarjeta generada al contenedor usersContainer.

// B. Alternativas posibles
// Usar innerHTML directamente:
// 
// usersContainer.innerHTML = users.map(user => 
//     `<div><h3>${user.name}</h3><p>${user.email}</p></div>`
// ).join('');
// Ventaja: Más conciso y eficiente.
// Desventaja: Menos flexible si necesitamos personalizar la estructura o manejar eventos.
// Fragmentos del DOM:
// 
// const fragment = document.createDocumentFragment();
// users.forEach(user => {
//     const card = document.createElement("div");
//     // Crear y añadir elementos al card
//     fragment.appendChild(card);
// });
// usersContainer.appendChild(fragment);
// Ventaja: Reduce reflow/repaint en el DOM.
// Desventaja: Mayor complejidad.

// C. Impacto global
// Esta función es esencial para sincronizar la interfaz con el estado actual de repository.

// 4. Función addUser
// 
// const addUser = () => {
//     if (i > 10) return alert("No hay más usuarios");
//     $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
//         i++;
//         repository.createUser(data);
//         refresh();
//     });
// };

// A. ¿Qué hace esta función?
// Controla un límite superior (i > 10).
// Si ya se alcanzó el límite, muestra un mensaje de alerta.
// Hace una solicitud AJAX:
// 
// $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => { ... });
// Recupera datos de un usuario específico mediante i.
// Actualiza el repositorio:
// 
// repository.createUser(data);
// Añade el usuario recuperado al estado interno.
// Actualiza la interfaz:
// 
// refresh();
// Sincroniza la vista con el estado actual.

// B.  Impacto global
// Esta función conecta los datos externos con el estado interno (repository) y la interfaz (usersContainer).
