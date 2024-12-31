//Proyectos Full Stack
//Frontend: es la rama del desarrollo q esta relacionada con todo aquello con lo q interactua el usuario. aplicacion separada.
//se encarga de q los sitios web tengan todos los elementos y funcionalidades q se necesitan (interfaz del usuario)
//tb se encarga de la experiencia del usuario. diseño atractivo,comodo, ordenado, facil de usar p el usuario 
//Tecnologías comunes: q solo sirven para el desarrollo del frontend. 1.lenguajes 2.frameworks 3.librerias 4.preprocesadores

//Backend:Es la parte encargada de la lógica que hace foco en las funcionalidades de una página y la gestión de bases de datos.
//es1 aplicacion aparte q se encarga de recibir solicitudes dl frontend.gestiona recursos,logica,seguridad e intractua c base d datos
//se encarga dq la aplicación funcione bien (detrás de cámaras) manipulando y disponiendo la info necesaria p ser consumida x el cliente
//Tecnologías comunes: 1.entorno de ejecución 2.frameworks 3.ORMS y ODMS
//será equivalente a la cocina. Por ej NodeJS. Este es nuestro entorno de ejecución. 
//recetas detalladas q debes seguir p preparar tus platos de forma correcta y simplificar tu trabajo.
//serán los tarros etiquetados que guardan ciertos ingredientes que usarás para la preparación de cada plato

//API:define el conjunto de reglas y protocolos(tb recursos y herramientas)q permiten q 2 sistemas independientes se comuniquen e/sí
// fontend pide recursos a backend a traves de una API
//API dicta cómo debe realizarse la solicitud de info de un cliente a un servidor y cómo este deberá estructurar las respuestas
//pueden seguir distintos patrones y diseños como API Restful q es un estilo de arquitectura para diseñar una API
//ppios de API Restful: 1.recursos 2.operaciones CRUD 3.estado representacional 4.identificadores unicos 5.sin estado(Stateless)
//1.puede ser cualq info q tenga sentido p el sistema, como un objeto, un servicio o incluso una entidad abstracta.
//2.operaciones estándar basadas en el sist CRUD(Create,Read,Update,Delete -Crear,Leer,Actualizar,Eliminar)p interactuar c recursos
//3.El estado d1 recurso se representa y se transfiere e/el cliente y el servidor en algún formato de representación,ej JSON o XML
//4.Cada recurso tiene un URI(Identificador de Recurso Uniforme).estos proporcionan una forma de acceder/manipular un recurso específico
//5.cada solicitud dl cliente al servidor contiene toda la info necesaria p entender/procesar la solicitud.
//No hay info de estado almacenada en el servidor e/las solicitudes
// //un tipo especial de APIs q se suele usar p estas interacciones: API Rest
//esta diseñada p el intercambio de recursos (mayormente info) y pq la comunicacion hacia la API este dada x el protocolo HTTP
//APIs establecen un protocolo de comunicación e/el cliente y el servidor y el + comúnmente empleado es el llamado protocolo HTTP

//HTTP: es un procoloco, reglas p comunicar e/sistemas. Hay 2 actores/roles: cliente y servidor 
//cliente: solicita recursos(peticion/request). servidor:gestiona solicitud y brinda respuesta(respuesta/response).Siempre 1 y 1
//NO solo se aplica p las API Rest, tb se usa en otros tipos de comunicacion. no es el unico protocolo de comunicacion q extiste
//Es el principal protocolo para transferencia de información en internet
//Métodos HTTP: p indicar el tipo d request q queremos hacer al servidor 
//1.get:obtiene info de un recurso existente 2.post:crea y guarda nuevo recurso 3.put:actualiza recurso 4.delete:elimina recursos
//métodos que representan los cuatro principales tipos de interacciones correspondientes al sistema CRUD.


