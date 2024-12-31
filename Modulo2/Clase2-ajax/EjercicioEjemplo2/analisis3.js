const htmlUsers = users.map((user) => {
    const name = document.createElement("h3");
    const email = document.createElement("p");
    name.innerHTML = user.name;
    email.innerHTML = user.email;

    const card = document.createElement("div");
    card.appendChild(name);
    card.appendChild(email);

    return card;
});

htmlUsers.forEach((card) => {
    usersContainer.appendChild(card);
});

// Parte 1: map
// ¿Qué es map?
// map recorre un array (users) y transforma cada elemento (user) en algo nuevo (un <div> con datos de usuario).
// Motivación para usar map: Necesitamos convertir un array de objetos (users) en un array de elementos HTML 
// (htmlUsers). map es ideal porque retorna un array nuevo con los resultados de la transformación.

// Análisis de Cada Paso en el map
// users.map((user) => { ... }):
// Iteramos sobre cada elemento de users. Cada iteración da acceso a un objeto user que contiene datos como name y email.

// ¿Por qué no un bucle for o forEach?
// Aunque for o forEach podrían usarse, no son ideales aquí:
// forEach no devuelve un array nuevo, así que requeriría manipular variables externas.
// for es más verboso y menos declarativo, lo que reduce legibilidad.
// Conclusión: map es más expresivo y directamente convierte datos en un formato diferente.

// Creación de elementos HTML (document.createElement):
// const name = document.createElement("h3");
// const email = document.createElement("p");

// Cada usuario necesita un <h3> para el nombre y un <p> para el correo. 
// Estos elementos se crean dinámicamente usando document.createElement.
// Motivación:
// Esto genera elementos reales en el DOM (no texto sin estructura como innerHTML), 
// lo que permite más control sobre los elementos después, como agregar eventos.

// Asignación de contenido a los elementos:
// name.innerHTML = user.name;
// email.innerHTML = user.email;

// innerHTML asigna el texto (como cadena) al interior de los elementos creados.
// ¿Por qué no textContent?
// En este caso, innerHTML y textContent son intercambiables, pero innerHTML permite insertar contenido con HTML si fuera necesario.
// Conclusión: innerHTML se usa por su flexibilidad, aunque aquí no tiene impacto significativo.

// Envoltorio en un contenedor (card):
// const card = document.createElement("div");
// card.appendChild(name);
// card.appendChild(email);

// Cada usuario se agrupa en un div para mantener el nombre y correo juntos.
// Motivación:
// Agrupar permite manejar cada conjunto de elementos como una unidad. 
// Por ejemplo, podemos estilizar la tarjeta o moverla en el DOM fácilmente.

// Retorno de card:
// return card;

// El resultado del map será un array de div que contienen los datos de cada usuario.
// Motivación:
// Necesitamos mantener estos div separados para insertarlos en el contenedor después.

// Parte 2: forEach
// htmlUsers.forEach((card) => { usersContainer.appendChild(card); }):
// Recorremos cada elemento del array htmlUsers y lo insertamos en el contenedor usersContainer.

// Análisis de Cada Paso en el forEach
// ¿Qué es forEach?
// forEach recorre un array y ejecuta una función para cada elemento. A diferencia de map, no devuelve nada; solo realiza acciones.

// usersContainer.appendChild(card):
// appendChild inserta cada card en el DOM dentro del contenedor usersContainer.

// ¿Por qué no usar innerHTML?
// Aunque innerHTML podría usarse para insertar todo el contenido de una vez, appendChild tiene varias ventajas:
// Es más seguro porque no evalúa código HTML arbitrario, evitando inyección de scripts maliciosos.
// Mantiene los nodos del DOM como objetos manipulables, permitiendo futuras modificaciones o adiciones sin recrear todo.
// Aumenta la flexibilidad: puedes añadir nodos uno por uno en lugar de reemplazar todo el contenido del contenedor.

// ¿Por qué forEach y no map o un bucle for?
// map: No es adecuado aquí porque devuelve un array, lo que no necesitamos; solo queremos realizar una acción (appendChild).
// for: Es funcionalmente equivalente, pero más largo y menos declarativo:
// for (let i = 0; i < htmlUsers.length; i++) {
//     usersContainer.appendChild(htmlUsers[i]);
// }
// Conclusión: forEach es más claro y está diseñado para ejecutar acciones en cada elemento.

// Motivación del Flujo Completo
// Primero map, luego forEach:

// Razón para dividirlo en dos pasos:
// map transforma datos en elementos HTML, manteniéndolos separados para posibles reutilizaciones o manipulación.
// forEach se enfoca únicamente en insertar los elementos en el DOM, dejando clara la intención en cada parte del código.

// Alternativa: Podríamos combinar ambos en un solo forEach, pero esto mezclaría responsabilidades, reduciendo claridad:
// users.map((user) => {
//     const name = document.createElement("h3");
//     const email = document.createElement("p");
//     name.innerHTML = user.name;
//     email.innerHTML = user.email;

//     const card = document.createElement("div");
//     card.appendChild(name);
//     card.appendChild(email);

//     usersContainer.appendChild(card); // Aquí directamente lo insertamos
// });
// Conclusión: Separar las transformaciones (map) de las acciones (forEach) mejora la legibilidad y el mantenimiento del código.