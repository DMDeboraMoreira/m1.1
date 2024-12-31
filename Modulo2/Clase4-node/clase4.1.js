//NodeJS
//los navegadores cuentan con un motor que permite ejecutar código JavaScript. (El motor de Chrome es V8)
//Node es un entorno de ejecución de JS q permite t° c JS sin depender d navegadores y sus motores xq t° como 1 motor en nuestra pc
//Elementos:
//Node fue desarrollado a partir del motor V8 de Chrome. Este utiliza el lenguaje C++ y una librería llamada libuv escrita en C. 
// //En otras palabras, estamos utilizando un lenguaje para ejecutar otro lenguaje (js)

//modulos: todo nuestro código estará dividido en distintas partes (a partir de las responsabilidades de cada función) 
// //pero se ejecutarán en conjunto.
//conjunto de código organizado y encapsulado que se puede reutilizar en otras partes de un programa.
//cada parte en su propio archivo y una responsabilidad bien delimitada y definida

//abstraccion: cada modulo conoce su propia responsablidad, los demas modulos no 
//carpeta models: clases q definen la abstraccion de los datos

//Node proporciona un sistema de módulos que permite la exportación e importación. 
//Para exportar código desde un módulo se utiliza un objeto llamado exports.
//Para importar ese código en otro archivo se utiliza la función require()
//Existe una manera más cómoda de hacer exportaciones utilizando el objeto module.exports
//module.exports = lo q quiero que este disponible dsd afuera de este modulo pq index pueda requerirlo
//require("./repository") me traigo lo q esta disponible de ese modulo

//proyectos de modulos tienen:
//1. archivo package.json: es el corazon del proyecto. indica comandos, dependencias, version, y toda la info del proyecto
// tenemos un comando con node instalado, para generar este archivo automaticamente:  npm init (npm init -y)
// y nos va a preguntar x el proyecto: nombre, version, descripcion, autor, etc

//2. modulo: index.js (a los archivos de js lo llamamos "modulos")

//3. podemos crear comandos(ej. npm start)
// para comandos manuales q estan fuera de la lista de los comandos convencionales, se agrega adelante: npm ran

//De la misma manera que descubrimos cómo conectar módulos dentro de nuestro proyecto, 
// /también podremos conectar módulos que están por fuera: npm

//NPM (node package modules): gestor de paquetes de Node (q ya viene instalado con node)
//paquete:conjunto de módulos (código) que podemos descargar e instalar en nuestro proyecto.
//Node cuenta con una librería open source gigante con muchos módulos que nos ayudarán a desarrollar nuestros proyectos 
// reduciendo la cantidad de lógica y código
//Beneficios de usar modulos externos:
//reutilizacion de codigo. eficiencia en el desarrollo. colaboracion y comunidad. 
// //actualizaciones. foco en el core de tu app. ecosistema de desarrollo

//Cuando utilizamos módulos externos dentro de nuestra aplicación, nos referimos a estos como una dependencia.
//Dependencia: paquete de modulos(codigo encapsulado con una responsabilidad definida a dispocision p ser requerido)
//q puedo instalar en mi proyecto p requerirlos y usarlos(generando una dependencia con ese paquete)
//dependencia nodemon:nos ayudará a desarrollar más rápido.
// Nos permitirá realizar cambios en el código y que, al guardar, estos cambios impacten directamente en el proyecto.
//cuando instalamos dependencias, instalamos paquetes externos
//(ej: jasmine es una dependencia: npm test) su codigo estaba en el modulo de jasmine q estaba instalado en mi proyecto
//mi proyecto requeria de esas finciones q jasmine me ofrece y podia usarlo y entonces se convertia en una dependencia
//otro ej. live-server: es la dependencia q permite con npm start, usar la funcion q levanta el proyecto en el navegador(refresca)

//a la hora de trabajar con proy vamos a tener 2 grupos de dependencias:
//1.Dependencias: sin las cuales mi proyecto no va a funcionar(fijas)
//2.Dependencias de desarrollo: solo sirven para el proceso de desarrollo(cuando termine el codigo ya no se van a usar)

//Intalar una dependencia de desarrollo: npm i -D nodemon (p poder usarlo=>  "start": "nodemon index.js") cambio el comando en json
// -D indica q esta va a ser una dependencia de desarrollo
// aparece el "node_modules" con carpetas: paquetes de npm q a partir de ahora estan disponibles p ser usados en mi proyecto
//npm por defecto de provee muchos paquetes aunque yo no se lo pida
//entre todos estos paquetes q ya vienen po defecto tenemos a nodemon
// tb aparece dentro de nuesto package.json: "devDependencies" q es una propiedad q va a tener dentro todas las dep de desarrollo(DD)

//es importante q las DD esten en el package.json:
//p subir 1 proyecto a github, se suele tener un archivo .gitignore q tiene dentro: node_modules xq no quiero q toda la carpeta se suba
//si subo mi proyecto sin "node_modules" tengo q instalar solo las dependencias q voy a usar
//npm install: npm viene a package.json: "devDependencies" lee la lista y sabe q dependencias debe volver a instalar automaticamente
//al estar listado entre mis dependencias puedo subirlo sin que todo el paqte viaje y solo intalarlo cuando lo necesito

//Versionado
//los paquetes que NPM nos permite instalar su código:esos módulos de código tienen una versión
//Node nos permite manejar las versiones de los paquetes. 
// podremos controlar y definir qué versiones de los paquetes queremos utilizar en nuestro proyecto.
//Node usa un archivo package.json p definir las dependencias de un proyecto y especificar sus versiones.
//las dependencias pueden tener diversas formas de versionado, pero la convención común es utilizar el formato semántico SemVer. 
// Este consta de tres números separados por puntos, por ejemplo, MAJOR.MINOR.PATCH. 
//el versionado nos permite ver qué otras versiones son compatibles gracias a los símbolos ^ y ~. 
//ej  "dependencies": {
//    "express": "^4.17.1",      depende de "express" en cualquier versión compatible con la 4.17.1 pero no la 5.0.0,
//    "lodash": "~4.17.21"       depende de lodash en cualquier versión compatible con la 4.17.21 pero no la 4.18.0.