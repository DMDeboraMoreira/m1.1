//EXPRESS: es una libreria q permite desarrollar aplicaciones de backend (dl lado del servidor) p la comunicacion http

//Estructura básica de servidor
//HTTP es el lenguaje que permite a los navegadores y servidores compartir información a través de internet.
//Ese pedido (request) y respuesta (response) de información es lograda gracias a el protocolo HTTP.
//cómo es la estructura de un servidor
//host ;el “localhost” es un identificador de ubicación de un recurso en la red,.dirección IP numérica o un nombre de dominio,
//puerto:_Se utiliza para distinguir diferentes servicios o aplicaciones que se ejecutan en el mismo host
//controladores:Dentro del servidor existen los "controladores" que se encargan de recibir el pedido y darle una respuesta. 
//servicio:cada servicio tiene su propia responsabilidad y se organiza para manejar un aspecto particular de la aplicación
//middlewares_con un formato en particular.


//Scaffolding de proyecto: esqueleto. organizacion de archivos
//  Proyecto desde cero:
//  
// // npm init -y
// // index.js: entri point archivo de entrada. requiere a los demas modulos
// // carpeta src: todos los demas modulos van aca
// // // dentro de src: carpeta d routes: modulos q indican ls endpoints ej./users (definen ls rutas d comunicacion) Reciben solicitud
// // // dentro de src: carpeta d controllers: fn q define (NO ejecuta) la LOGICA DE NEGOCIO de cada ruta.tb maneja e informa ERRORES.
//                    // qé hace la app cuando la solicitud se reciba lo define la fn controladora/handler. Ej:
//                    // ir a BD a pedir info de los usiarios
//                    // responder al cliente cn info obtenida
// // // dentro de src: carpeta d services: fn de servicios:se encatgan d ls tareas(ejecutan lo q definen ls controladores al llamarlas)
//                    //ej. se comunica cn BD p pedir info usuarios y darle el formato adecuado

//   // RUTA (recibe solicitud) => CONTROLADOR (dehine q hay q hacer) => SERVICIOS (ejecuta y devuelve al conrtrolador p despachar)

// (no queremos acumular responsabilidades dentro de un mismo modulo)


//Creación de servidor
// npm install express
// npm install -D nodemon y definir el comando "start":"nodemon index.js"
// // // dentro de src: modulo: server.js:requerimos a expres: const express = require("express") y declaramos const app=express()
//                      nuestro servidor vive dentro de la variable app
//                      necesitamos q index conozca a este servidor p ponerlo a funcionar: module.export=app (en server.js)

// en index.js: 
// const app=require("./src/server")       
// p q el servidor quedar a la espera d solicitudes: metodo: app.listen( 3000, ()=>{} ) 
    // este metodo le indica al servidor q tiene q empesar a escuchar solicitudes
    // recibe 2 parametros:
    // 1. El puerto: indicamos en qé puerto de nuestra pc va a estar el servidor escuchando solicitudes
    //    nuestra app va a estar dentro de un host (pc) dentro d pc hay muchos puertos. 3000: no tiene 1 destino especifico dentro de pc
    //    va a esperar las solicitudes (dentro de mi pc) a traves del puerto 3000 
    // 2. cb: se ejecuta luego de q listen termino d hacer su trabajo
    //    y ya esta listo p recibir solicitudes. queda el programa abierto ejecutandose 

// http://localhost:3000
// Ctrl c: para apagar la app


//Controladores
// // dentro carpeta d routes: crear un enrutador: es u obj de la libreria express, q tiene dentro las rutas q yo defino
//    en un archivo.js: const {Router}=require("express") Dentro de express estoy requiriendo a la clase Router
//    const router=Router() Cuando ejecute Router voy a estar creando un enrutador- un obj q puede definir rutas internamente
//    p definir la ruta, al enrutador le agregamos el tipo d solicitud. Ej: router.get("/", ()=>{})
//    2 parametros:
//    1. a donde va a ir: "/" (esto seria definir la ruta: el endpoint)
//    2. un controlador(cb) ()=>{} (dentro del index de controllers) router.get("/", testControllers)

// Ruta definida cn el enrutador: Instanciamos el enrutador, ejecutamos el metodo d la instancia q es .get
// cuando la solicitud se reciba se va a ejecutar la cb (testControllers)

//ahora tenemos definida la ruta y el controlador, pero la solicitud tiene una puerta de entrada para app
// es app quien recibe la solicitud en 1°lugar y sera app quien conduce luego esa solicitud hacia el enrutador
// x lo tanto, mi enrutador y app tienen q conocerse: module.exports= router y const router= require("./routes/index")
// en server.js: app.use(router)  // .use: quiero q la solicitud tome este camino
// entonces la solicitud va a continuar su viaje hacia el enrutador donde se va a encontar con: router.get("/", testControllers)

//controlador: const testControllers=(req,res)=>{ res.status(200).send("")  //200=exitiso  send=envio
// la fn controladora recibe x defecto 2 parametros (q son objetos q representan a la solicitud y a la respuesta):
// 1. la solicitud (request) req
// 2. la respuesta (response) res

// res (respuesta) es el objeto q tiene los metodos q me permiten responderle al cliente
// res.status(): xq quiero definir cual es el 'codigo d respuesta' (hay codigos:200,300,400 y dentro varias posibilidades)200: exitoso
// res.status(200).send(""): p enviar la respuesta
//

// esta escuchando en el puerto 3000
// a traves del puerto 3000 recibe la solicitud
// esa solicitud la encausa hacia el enrutador
// el enrutador tiene definido endpoint (puede recibir xq tiene un endpoint p ese tipo de solicitudes)
// se ejecuta el controlador
// el controlador le responde al cliente cn un status y un mensaje


//Enrutado. crear un enrutador para cada entidad. y cada enrutador requiera solo a los controladores q corresponden
// modularizar enrutado: 
// index.js levanta la applicacion y la pone a escuchar en el puerto 3000
// a traves del puerto 3000 entra la solicitud
// app q es el 1° q recibe la solicitud dice: este modulo se encarga solo d definir app. NO maneja rutas, q d eso se encargue el Router
// entonces direcciona la solicitud hacia el router: app.use(router) 
// el enrutador recibe la solicitud y redirecciona: si es a /users q vaya hacia userRouter, si es a /posts q vaya hacia postRouter
// q son 2 enrutadores distintos: router.use("/users", userRouter) // router.use("/posts", postRouter)










//Extensiones para Visual Studio Code