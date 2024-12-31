//Servicios
//se definen como una parte puntual de la aplicación que "brinda servicio" a una funcionalidad específica de la aplicación

//Recapitulando:
//
//1. El modulo index (entriepoint): recibe la instancia de express q creamos en server.js y la pone a escuchar en el puerto 3000
//2. app recibe la solicitud y las encausa hacia un router q a su vez las encausa hacia otro enrutador (/users /posts)
//3. enrutador users (instancia de la clase Router q tenemos en express) y define una ruta hacia: "/"
//4. dentro dl modulo usersControllers tengo la funcion: getAllUsers q es el controlador q deberia encargarse de comunicar al cliente
//5. al momento de pedir la info d ls usuarios es donde entra en juego el servicio...

//const users = usersService.getUsers()
//      res.status(200).json(users)

// metodo .json: cuando vamos a enviar un json

//habiamos dicho q el controlador, si bien es el q administra la logica, NO es el q ejecuta las tareas mas especificas
//el controlador solo debe ejecutar una funcion y ese recurso debe venir (getUsers())
// d donde viene esa funcion: de los servicios
// dendro de la carpeta services, debemos crear un modulo: usersService.js (una funcion q me da los datos d los usuarios)
//
// normalmente estos servicios de datos van a realizar Operaciones asincronas: async()=>{} (funciones q retornan una promesa)
        // consultar a una BD
        // realizar solicitud http a un servicio experno
        // leeran la informacion de un archivo

//Entonces el controlador tb debera ser async()=>{}
    //getAllUsers: async(req, res)=>{
    //const users = await usersService.getUsers()
    //       res.status(200).json(users)

//getUsers() me esta retornando una promesa x lo tanto yo debo esperar a q esa promesa se resuelva: obtener la info y contestar

//una pequeña mejora: el controlador podria usar: try {} catch (error) {}
// en caso d error se le envia un msj al cliente:  res.status(500).json({error: "Error interno del servidor"})


// Middlewares: se mete a mitad del camino d la request
//funcion q recibe internamente a la solicitud (obj req), hace algo con ella, y luego la libera pq continue su camino
// aparecen entre q la solicitud se recibio y antes d q llegue hacia el 1°enrutador
//son funciones q tienen acceso a ls objetos req y res y tb a la siguiente función en el ciclo de solicitud-respuesta d la app(obj next)
//Se utilizan para realizar acciones específicas entre el flujo de una solicitud y su respuesta. 
//Los middlewares pueden realizar acciones globales antes de llegar a rutas específicas

//Existen dos categorías principales: los pre-built y los personalizados.
//1.componentes listos para ser utilizados, que ofrecen distintas funcionalidades que son específicas para cada tarea
  //morgan: npm install -D morgan //const morgan= require("morgan") /app.use(morgan("dev"))/info d comunicacion en la consola
  //cors: npm install cors //const cors= require("cors") /app.use(cors()) /p indicarle a mi servidor q esta abierto a recibir d otros host 
  //express.json(): app.use(express.json()) / convierte la info en 1 obj de JS
  // la info va y viene en formato json q es parecido a 1 obj d JS pero NO es JS

//2.Middlewares personalizados:son funciones q tú mismo creas p adaptar el flujo d manejo d solicitudes s/ ls necesidades de tu aplicación
    //app.use((req,res,next) =>{ next()}) / next es una funcion q ejecuto p liberar a la req pq continue su camino


// Validaciones
// Middlewares p validar informacion
// ej. nuestro servicio d ususarios, ademas de poder devolvernos usuarios, tiene la capacidad d crear usuarios nuevos:
// funcion del servicio: createUser: async (name)=>{const newUser ={ id, name,}id++ users.push(newUser)
// entonces vamos a necesitar una ruta y un controlador q se encarguen d disparar estas tareas:
//Ruta: userRouter.post("/", validateUser, userControllers.createUser)
//controlador: createUser: async(req,res)=>{const {name}= req.body await usersService.createUser(name)res.status(201).json({message:"")
// cuando hacemos la peticion podemos enviar info en esa peticion, esa info va a venir dentro d 1 objt q esta dentro de req
//(enviamos la info (nombre dl usuario)cn la peticion (request)): const {name}= req.body y esa propiedad va a estar en: req.body
// la info q enviemos va a viajar dentro dl objeto req dentro d 1 prop q tiene req q es body. body va a ser ese objt q le mandemos
// dentro d esre objt vamos a incluir una prop q es la prop name (en el ej)
// luego llamamos a usersService.createUser(name)  y darle ese name pq se encargue de crearlo
//201: recurso creado exitosamente

// p enviar el name (post):
// este objt: req.body es el body de la req q se define en (insomnia-body) formato json
// nos da la opcion de definir un body q va a ser un json y desde ahi podemos mandar lo q querramos. ej {"name": "gama"}

// p validar la info cn un middleware d validacion:
// creamos una carpera middlewares p guardar las funciones ordenadamente y luego exportarlas e importarlas
// const validateUser = (req,res,next)=>{const {name} =req.body if(!name){return res.status(400).json({error:""})} else{next()}}
// al recibir a req, recibe tb a body q esta dentro d req, x lo q voy a tener en el middleware disponible el body q estoy enviando
// voy a tener y chequear el dato antes dq llegue al controlador:  const {name} =req.body 
// si no tengo name: if(!name){return res.status(400).json({error:""})} 
// si tengo en nombre: else{next()}}

// donde queremos q ocurra esta validacion:
// NO en server.js donde estan: app.use(morgan("dev"))  app.use(cors())  app.use(express.json())
// xq por ahi van a pasar todas las req y algunas ni siquiera van a tener name, ni body y van a ser req q no corresponde validar

// tiene q estar en una operacion muy especifica: p el post de usuarios, p crear usuarios
// pq el middleware trabaje solamente ahi, voy a userRouter: userRouter.post("/", validateUser, userControllers.createUser)
// antes dq vaya al controlador quiero q pase x validateUser
// validateUser recibe esa peticion y hacer la validacion: extrae a name de req.body verifica si adentro d esa prop hay algo o nada
// (undefined en json no existe)

//return res.status(400).json({error:""})
// asi como el middleware accede a la prop req, tb accede a la prop res x lo q tiene la capacidad de responder. 
// cortamos y respondemos directamente desde el middleware (polemico. no recomendado igual q: next("nombre invalido"))
