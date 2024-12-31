

//Jest: libreria de testing amigable en terminos de configuracion
//Jest es un framework de testing diseñado para brindar un conjunto de tests para proyectos de JavaScript.
//cuenta con funciones integradas llamadas mocks que permiten imitar la conducta de nuestro código de manera controlada  
// 
// Integración de Jest



//Dependencias vs dependencias de desarrollo (utiles solo en el entorno de desarrollo)
//mi entorno de desarrollo: mi compu, mis modulos, mi codigo, ejutando, probando

//  // inicializar un proyecto de node desde cero:
//  // npm init -y    (p q se autocomplete con todos los valores x defecto)
//  // Intalar una dependencia de desarrollo: // npm instal -D jest 
//  // configuro el comando test: en el archivo json "scripts": {"test": "jest"} )
//  // crear archivos de test: nombre.spec.js / nombre.test.js
//  // npm test

//instalacion de jest (dependencia de desarrollo)
// npm instal -D jest
// configurar el comando test: en el archivo json "scripts": {"test": "jest"}

//nomenclaturas: nombre.spec.js / nombre.test.js
//jest espera que nombremos a nuestros modulos de testing con spec/test

//te sugerimos que hagas uso de una opción disponible dentro de Jest llamada watchAll 
// q nos va a permitir dejar la ejecución del testing corriendo de forma constante y q esté atento a los cambios
//Esta opción debe ser integrada dentro del script de test del archivo package.json. Donde esta el script "test"

//manejo de funciones mock. Mock Functions
//p imitar el comportamiento de una función, clase o módulo (es como una copia)
//Los mocks se usan cuando estamos probando código y queremos asegurarnos q funcionen bien sin ejecutar todo el código completo.
// se usa cuando necesitamos aislar a la funcion para poder probarla (sin q el resto del codigo la afecte)
// ej. testear la funcion sumar sin ejecutar la funcion sumar:  const mockSumar=jest.fn(sumar)
//es como una especie de copia de la funcion original. asi puedo ejecutar y la copia p probarla, sin ejecutar la original
//me da mas info s/ las ejecuciones y los resultados q se obtienen al ejecutarla, mientras la funcion original no reune estos datos
//va a estar envuelta en 1 objeto q guarda info sobre argumentos, ejecucion, resultados
//console.log(mockSumar.mock);

//jest nos da matchers especiales p buscar en la info del objeto: .toHaveBeenCalledWith() ((Haber sido llamado con))
//se usa para testear si al pasarle unos argumentos, la funcion recibio y registro correctamente esos argumentos
//documentacion de jest: custom Matchers: muy intuitivos

//arrojar errores y hacer que el test testee q se esta arrojando ese error. testeamos q la funcion falle:
//Error: en 1 proceso q realizo, algo no se comporta como esperaba de una forma. esta fuera de lo esperado
// si no recibo lo q tengo q recibir arrojo un Error pq quien la ejecute reciba el error con sus detalles(ej.'Error:faltan datos'):
// expects (funcion).toThrowError("error")
// siempre q testeemos q 1 funcion vaya a arrojar un error, tenemos q poner esa funcion dentro de otra funcion:
// es una funcion q lo unico q hace es ejecutar la funcion q queremos testear:
// expects ( ()=> funcion() ).toThrowError("error")
// (index.js: throw Error("error"))


// module.exports= { } // si quiero exportar varias cosas, tengo q hacerlo con un objt q dentro tenga cada cosa
// y p requerirlo debo desestructurarlo del objeto:  const {cosa} = require("./index")

// bucle for of: sirve p iterar un array. me permite darle un nombre de variable a c/u d los elementos, en cada vuelta
// en casos en donde no necesitamos el indice. dame en cada vuelta 1 elemento distinto

// demo-mock: tecnicas de testing
// tenemos un modulo cn 1 supuesta coneccion cn 1 base de datos: dentro hay 1 funcion q se conecta con la BD: const getItems
// cuando ejecuto esta funcion esto va a una BD a buscar la info d ls productos q quiero calcular y me ls trae
// const calcularTotal=(getItems)  //en vez de darle ls items (array cn objetos adentro), le doy una fn q me consigue items
// esta fn la recibe calcularTotal: const item = getItems() // y la ejecuta pq traiga los items y asi poder trabajar cn ellos

//importancia d la abstraccion: calcularTotal ejecuta getItems y al ejecutarla espera recibir esos items
// calcularTotal no sabe lo q pasa en getItems y no le importa
// entonces si llego a tener un problema en 1 lugar o en otro, puedo encararlo x separado y asi va a ser +sencillo resolverlo

// quiero testear q cuando calcularTotal se ejecuta, la cb q le envio se ejecuta tambien
// no quiero testear a calcularTotal (mokearla), quiero testear a getItems, como se comporta dentro de calcularTotal
// mockearla:pq yo no tenga q ejecutar las funcion real: getItems q va a la BD, voy a crear una fn de mentira p poder testearla
// const mockGetItems = jest.fn(getItems)
//  calcularTotal(mockGetItems)
//  expect(mockGetItems).toHaveBeenCalled()  // espero q se haya ejecutado

//no puedo preguntarle a calcularTotal si ejecuto la fn q le di, entonces mando a getItems mockeado
// pq getItems mockeado pueda entrar como si fuese 1 espia a la fn calcularTotal y me diga si la estan ejecutando ahi adentro o no

// no quiero involucrar a la BD real en las pruebas, entonces uso datos falsos cn 1 fn falta q simula ir a la BD y traerme info




