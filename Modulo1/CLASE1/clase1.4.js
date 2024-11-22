//Nueva feature ES6: destructuring (distractoring)
//Es una técnica que permite EXTRAER valores de arrays u objetos y asignarlos a variables de una manera más clara y concisa
//Desestructurar los datos: const{} //xq estoy trabajando con un objeto // p/no declarar cada propiedad en una variable nueva
//tomo valores de propiedades y los guardo en variables que tienen los mismos nombres dentro del objeto
//en 1 sola linea puedo declarar multiples variables y automat toman su valor x el nombre de la variable y d la prop del obj q estoy desestructurando
//la desestructuracion vincula la variable c/el valor de la propiedad a traves del nombre. coinciden el nombre de la varable c/ el nombre de la prop

// //P/ OBJETOS:
// const persona={
//     nombre: "carlos",
//     apellido: "perez",
//     edad:50,
//     email:"cperez@mail.com",
//     direccion: "calle falsa 123",
//     ciudad: "posadas",
//     pais: "argentina",
// }

// // function mostrarNombre(persona) {
// //     const nombre=persona.nombre
// //     //const apellido=persona. apellido
// //     console.log("El nombre del usuario es", nombre, "y su apellido es", persona.apellido);

// // }
// // mostrarNombre(persona)

// function mostrarNombre(persona) {
//     const {nombre, apellido}=persona//pasan a ser variables declaradas cuyo valor de inicializacion s el d la prop q tiene el mismo nombre dentro del obj
//                                     //declaro 2 variables q toman su valor de las prop de persona q tiene el mismo nombre
//                                     //logre desestructurar estos 2 valores del obj persona
//     console.log("El nombre del usuario es", nombre, "y su apellido es", apellido);

// }
// mostrarNombre(persona)


//otro ejemplo:
function crearPersona({nombre,apellido,edad}) {
    console.log(nombre,apellido,edad);
}
crearPersona({nombre:"lucas",apellido:"romero",edad:22})


// //P/ ARRAYS:
// //solo lo usamos para arreglos pequeños(0,1,2,3) de pocos elementos y conocemos bien el orden del los elementos dentro del arreglo
// //no hay pares clave valor, pero algo similar es la posicion dl array. lo q esta en la posicion 0 toma el valor de la posicion 0 del array

// const array=[1,2,3,4]
// const[num1, num2,num3,num4]=array //desestructuro los elementos del array

// const palabras=["hola","jorge","cperez@mail","calle falsa 123"]
// const[saludo, nombre, email, direccion]=palabras //sé lo q desestructuro sin tener un nombre comun e/variable y prop q me ayude a vinvularlas
//                                                  // se vinculan solo por la posocion dl array dentro de la desestructuracion