//Comunicacion HTTP
//HTTP es un protocolo de comunicación entre un cliente (alguien que solicita algo) y 
// un servidor (quien provee al cliente de aquello que ha solicitado). 
// HTTP no hace más que establecer las reglas y la estructura sobre las cuales se dará esta comunicación

//roles: Cliente y servidor
//visitar una página de internet es realizar una solicitud bajo el protocolo HTTP. 
// En este caso, tu navegador es el cliente porque es quien está solicitando información (metodo get), 
// y el servidor es otra computadora remota, que recibirá esta solicitud y responderá al cliente con lo que este ha solicitado

//se maneja con una logica de peticion y respuesta

//estas peticiones tienen metodos como: get pop put delete

//El protocolo HTTP no está sujeto a ningún lenguaje o librería específico. Es independiente de JS back y fronteend
//puede darse en diferentes contextos, no solo en una aplicacion web, no solo con JS, etc

//en la clase de AJAX usamos esta tecnología p hacer solicitudes HTTP y así obtener información de una API pública. de igual manera:
//existen herramientas que permiten enviar solicitudes HTTP a un servidor a través de una API 
// para determinar qué respuestas funcionan correctamente. 
// Sabremos así qué información estamos obteniendo desde el servidor y de qué manera la usamos en el lado cliente.

//Postman, Insomnia y ThunderClient, hacen parte de dichas herramientas que, además de ser gratuitas, 
// poseen ciertas características particulares para trabajar las consultas de una forma más eficiente

//Operaciones asincrónicas
//Las operaciones asíncronas en JS son aquellas en las que el script no espera a que una tarea se complete antes de pasar a la siguiente,
//  sino que, en lugar de bloquear la ejecución del código, el script continúa ejecutando otras tareas.

//JS cuenta con herramientas y metodologías q le permiten dejar d lado su naturaleza síncrona y trabajar con operaciones asincrónicas
// como el uso de las funciones callback
// Una forma más actual p manejar dichas operaciones es mediante el uso de .promesas  
// q permiten encadenar operaciones asíncronas y manejar errores de una forma más estructurada

//Promesas:
//una promesa va a reservar un lugar en mi código para una acción o respuesta que aún no ocurre 
// o de la cual aún no recibimos un resultado , pero que una vez ocurra, mi código sabrá que hacer con esa “respuesta”.
// Es el eventual resultado d una operacion asincrona. no hay 1 unico resultado posible
// la promesa representa todos los resultados posibles ()

//En JS son un objeto q representa el resultado eventual de una operación asincrónica. 
// Dicho resultado puede ser evaluado con éxito o como un fracaso y, 
// dependiendo de ese resultado, se podrá decidir qué hacer a continuación. 
//nosotros tenemos q saber qué hacer cn la promesa: El plan de accion si todo sale bien o si todo sale mal

//Para generar promesas contamos cn 1 estructura nativa: Promise d la cual podemos instanciar promesas usando la palabra clave new. 
// Esta promesa recibe como argumento una función la cual a su vez toma dos funciones como parámetros: (resolve,reject)
// const promesaResuelta= new Promise ((resolve,reject)=>{ resolve("valor de resolucion")})

// (axios nos permite trabajar cn promesas)

//Estados de una promesa. tres estados fundamentales: <pending> pensiente. <fulfilled> resuleta. <rejected> rechazada.
//cuando la promesa fue resuelta o rechazada, ya no estará en pending ni tampoco podrá pasar d “fulfilled” a “rejected” o viceversa

//la gran utilidad de las promesas no es sola informar sobre el estado de la resolución o rechazo, 
// lo que necesitamos es conocer el valor de resolucion o la razón de rechazo que nos retorna para poder utilizarlo en el código.
//Para poder manejar el valor al que se resuelve o se rechaza una promesa, hacemos uso de dos métodos: then y catch.
// then: maneja la logica cuando fue resuelta
// catch:maneja la logica cuando fue rechazada


//Async/ Await: define una funcion de tipo async
//es una estrategia mas comoda en terminos de sintaxis pero enmascarando las promesas q ya conocemos

//Axios: libreria