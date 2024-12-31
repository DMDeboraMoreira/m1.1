//MongoDB
//Sist de BD amigable cn desarrollo web: los docs q crea MongoDB se parcen mucgho a los objt json o d js
//colecciones: lo q serian las tablas. conjunto d docs. muy similar a un arreglo con objt
//documentos(docs): lo q serian las filas. c/u de los objt dentro del arreglo van a ser los docs

//esta es la forma en la q mondoDB va a guardar los datos:
// [
//     {
//         title: "una pelicula",
//         director: "un director",
//         year: 1999
//     },
//     {
//         title: "una pelicula",
//         director: "un director",
//         year: 1999
//     },
// ]

//claves primarias:
//siempre tenemos q identificar con una clave primaria a nuestro documento
// tb podriamos cn librerias definir un tipo d dato p asigna ID, pero si no, se lo podemos dejar a mongo
//Mongo x defecto tiene una especie d objt ID q le asigna un ID automaticamente a c/u d los docs
// esta propiedad: _id
//[
    //     {
    //         _id: ObjectId("nhvhnvh44smvhgr96")
    //         title: "una pelicula",
    //         director: "un director",
    //         year: 1999
    //     },
    //     