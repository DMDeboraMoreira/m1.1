// 2. Modelo de datos con clases
// Aquí estamos creando una estructura para manejar información de usuarios usando algo llamado clases en programación. Esto nos ayuda a organizar mejor los datos y acciones relacionados con los usuarios.

// Paso 2.1: Crear la clase User
// Una clase es como un molde o plantilla. Imagina que es como un molde para hacer galletas: 
// te da la forma básica, pero cada galleta puede tener diferentes detalles (como decoraciones).
// En este caso, la clase User define cómo será cada usuario.
// Un usuario tendrá cuatro propiedades:
// id: Un número único que identifica a cada usuario.
// name: El nombre completo del usuario.
// username: Un nombre que usa el usuario para identificarse (como un alias).
// email: La dirección de correo electrónico del usuario.

// ¿Por qué creamos esta clase?
// Para poder crear objetos (representaciones individuales de usuarios) que sigan siempre la misma estructura.

// Paso 2.2: Crear la clase Repository
// Esta clase será un lugar donde guardaremos todos los usuarios creados, como si fuera una "caja" donde almacenamos objetos User.
// Tiene:
// Una propiedad llamada users:
// Es un array vacío (una lista) donde guardaremos los objetos que creemos usando la clase User.
// Un método llamado createUser:
// Este método es como una "máquina" que recibe información, crea un nuevo usuario y lo guarda en la lista.
// Recibe un objeto con las propiedades desestructuradas id, name, username, email. 
// Eso significa que toma esos datos por separado y los usa para crear un usuario.
// Usa esos datos para hacer:
// Crear una nueva instancia de la clase User (es decir, un nuevo objeto usuario).
// Guardar este nuevo usuario en el array users.

// ¿Por qué creamos esta clase?
// Para tener un lugar centralizado que gestione todos los usuarios y facilite su creación.

// 3. Función refresh para actualizar el DOM
// La función refresh es como un "limpiador y organizador". 
// Su objetivo es asegurarse de que los datos de los usuarios se muestren correctamente en la página web.

// Paso 3.1: Capturar el contenedor HTML
// En la página web, hay un lugar específico donde queremos mostrar los usuarios (llamado "contenedor").
// Capturamos ese lugar usando document.getElementById("usersContainer").

// Paso 3.2: Limpiar el contenido inicial
// Antes de mostrar nuevos usuarios, necesitamos borrar lo que haya en ese contenedor.
// Esto se hace asignando una cadena vacía ("") a su contenido interno (innerHTML).

// Paso 3.3: Obtener los usuarios del repositorio
// Accedemos al array users que está dentro de la clase Repository.
// Usamos algo como:
// const users = repository.users
// Esto copia la lista de usuarios en una variable llamada users.

// Paso 3.4: Crear elementos HTML para cada usuario
// Iteramos sobre el array de usuarios para generar "tarjetas" (pequeños bloques de información) que representen a cada usuario.
// Para cada usuario, creamos elementos:
// Título con el nombre.
// Párrafo con el correo.
// Agrupamos todo en un contenedor.

// Paso 3.5: Agregar las tarjetas al contenedor
// Tomamos las "tarjetas" creadas y las añadimos una por una al contenedor de la página web.

// 4. Función addUser para agregar nuevos usuarios
// Esta función es lo que ocurre cuando haces clic en un botón que dice "Agregar usuario".

// Paso 4.1: Capturar el botón
// Localizamos el botón en la página web usando su ID (addUserButton) para poder trabajar con él.

// Paso 4.2: Verificar el límite de usuarios
// Antes de agregar un usuario nuevo, verificamos cuántos usuarios ya hay.
// Si el número de usuarios supera un límite (por ejemplo, 10), mostramos un mensaje de alerta.

// Paso 4.3: Solicitar datos del usuario
// Usamos una solicitud para obtener información de una API pública.
// Una API pública es un servicio que nos da información ya preparada, como datos de prueba.
// Enviamos una solicitud para obtener los datos de un usuario específico.

// Paso 4.4: Crear un usuario con los datos obtenidos
// Usamos los datos que llegan de la API para crear un nuevo usuario.
// Llamamos al método createUser de la clase Repository para añadir este usuario al repositorio.

// Paso 4.5: Actualizar el DOM
// Llamamos a la función refresh para actualizar la lista visible en la página web con el nuevo usuario.

// 5. Vincular el evento al botón
// Paso 5.1: Asociar la función al botón
// Usamos algo llamado addEventListener para decirle al botón: "Cuando te hagan clic, ejecuta la función addUser".

// Resumen del flujo completo
// Al cargar la página, ya tenemos listas las clases (User y Repository) y las funciones.
// Cuando haces clic en "Agregar usuario":
// Se verifica si hay espacio para más usuarios.
// Se solicita información de un usuario nuevo desde una API.
// Se crea un usuario con estos datos y se guarda en el repositorio.
// Se actualiza la página web para mostrar el nuevo usuario.

//////////////////////////////////////////////////////////////////

// 2. Modelo de datos con clases
// Paso 2.1: Crear la clase User
// ¿Qué es una clase y por qué usamos una aquí?
// una clase es como un plano o un molde que define cómo deben ser los objetos que creamos con ella.
// permite organizar mejor los datos relacionados con algo específico, 
// como un "usuario", y establecer las reglas que definen cómo deben comportarse los objetos basados en esa clase.
// Sin clases, tendríamos que manejar los usuarios como simples datos "suelto" en objetos o arrays, 
// lo que puede volverse desordenado rápidamente. Usar clases nos da estructura y consistencia.

// ¿Qué contiene esta clase?
// Propiedades:
// Cada usuario tiene cuatro atributos (id, name, username y email). Son los datos fundamentales para identificar y describir un usuario.
// ¿Por qué estos atributos? Porque:
// id garantiza que cada usuario sea único.
// name nos da el nombre completo del usuario para identificarlo de forma legible.
// username funciona como un identificador corto y amigable para el usuario (algo que podría usarse en sistemas de inicio de sesión o redes sociales).
// email es crucial para la comunicación y también puede servir como identificador único en algunos sistemas.

// El constructor:
// El constructor es un método especial que se ejecuta automáticamente cuando creamos una nueva instancia de la clase.
// Su trabajo es "darle forma" al objeto: asignar valores iniciales a las propiedades.

// ¿Por qué crear una clase para los usuarios en lugar de usar simples objetos o arrays?
// Si usáramos objetos directamente, podríamos cometer errores fácilmente (por ejemplo, olvidando asignar alguna propiedad).
// Con una clase, cada vez que creamos un usuario, estamos seguros de que tendrá las propiedades que definimos. 
// Esto reduce errores y mejora la claridad del código.

// Paso 2.2: Crear la clase Repository
// ¿Qué es un repositorio y por qué necesitamos uno?
// Un repositorio es un lugar centralizado donde se guarda y organiza un conjunto de datos. 
// En este caso, es un espacio que agrupa todos los usuarios que vamos creando.
// Sin un repositorio, los usuarios estarían dispersos en diferentes partes del programa, 
// lo que haría difícil acceder a ellos o gestionarlos.

// ¿Qué contiene esta clase?
// Una propiedad users:
// Este es un array vacío donde almacenaremos cada usuario que creemos.
// ¿Por qué un array?
// Porque un array nos permite guardar múltiples objetos y acceder a ellos fácilmente por su posición (índice).

// Un método createUser:
// Este método se encarga de crear un usuario nuevo y agregarlo al array users.
// ¿Cómo funciona?
// Recibe datos como id, name, username, y email.
// Usa esos datos para crear un nuevo objeto User con la clase que definimos antes.
// Añade ese objeto al array users usando el método push.

// ¿Por qué dividir la lógica en dos clases (User y Repository)?
// La clase User se encarga únicamente de representar a cada usuario individual. 
// No sabe nada sobre cómo se almacenan o gestionan los usuarios.
// La clase Repository actúa como el administrador o gestor de los usuarios. Es quien maneja el "grupo".
// Dividir estas responsabilidades hace que nuestro código sea más modular y fácil de entender.

// 3. Función refresh para actualizar el DOM
// ¿Qué es el DOM y por qué necesitamos interactuar con él?
// DOM (Document Object Model) es una representación en forma de árbol de toda la estructura HTML de nuestra página web. Nos permite:
// Leer elementos existentes: Por ejemplo, buscar un contenedor para mostrar usuarios.
// Modificar elementos dinámicamente: Como agregar o eliminar usuarios visibles en la página.

// Paso 3.1: Capturar el contenedor HTML
// Usamos document.getElementById("usersContainer") para encontrar el elemento del DOM donde queremos mostrar los usuarios.
// ¿Por qué hacerlo así?
// Porque necesitamos un "punto de entrada" al DOM para poder interactuar con él. 
// Sin esto, no sabríamos dónde agregar las tarjetas de usuarios.

// Paso 3.2: Limpiar el contenido inicial
// Antes de agregar nuevos usuarios, limpiamos el contenedor asignándole un contenido vacío (innerHTML = "").
// ¿Por qué es necesario?
// Si no limpiamos el contenedor, los datos viejos se mezclarán con los nuevos, lo que puede causar duplicados y desorden.

// Paso 3.3: Crear elementos HTML dinámicamente
// Iteramos sobre el array de usuarios para crear un bloque (o "tarjeta") para cada uno.
// ¿Por qué hacerlo dinámicamente?
// Los datos de los usuarios pueden cambiar constantemente, y necesitamos que el HTML refleje esos cambios en tiempo real.

// Paso 3.4: Agregar las tarjetas al contenedor
// Usamos un bucle para agregar cada tarjeta al contenedor principal.
// ¿Por qué iterar así?
// Para procesar cada usuario de forma individual y asegurarnos de que todos se muestren correctamente.

// 4. Función addUser para agregar nuevos usuarios
// ¿Qué hace esta función?
// Agrega un nuevo usuario al sistema y actualiza la página para mostrarlo.

// Paso 4.1: Capturar el botón
// Encontramos el botón en el DOM con getElementById.
// Esto nos permite asociar eventos (como clics) con funciones.

// Paso 4.2: Verificar el límite de usuarios
// Antes de crear un usuario, verificamos si ya alcanzamos un límite (como 10 usuarios).
// ¿Por qué establecer un límite?
// Para evitar problemas como sobrecargar el sistema o la página web.

// Paso 4.3: Solicitar datos del usuario
// Usamos una API pública para obtener datos de prueba.
// ¿Por qué usar una API?
// Nos proporciona datos ya estructurados, lo que facilita la simulación.

// Paso 4.4: Crear un usuario con los datos obtenidos
// Los datos de la API se pasan al método createUser para crear y almacenar un nuevo usuario.

// Paso 4.5: Actualizar el DOM
// Llamamos a refresh para reflejar el nuevo usuario en la página.

// 5. Vincular el evento al botón
// Paso 5.1: Asociar la función al botón
// Usamos addEventListener para decirle al botón que ejecute la función addUser cuando alguien haga clic en él.
// ¿Por qué hacerlo así?
// Esto hace que la interacción con el botón sea dinámica y reactiva.