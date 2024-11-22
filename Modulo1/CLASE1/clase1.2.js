//OBJETOS LITERALES
// //Otra gran adicion que trajo ECMAScript6 fueron los Object Literals que son una forma más concisa de definir objetos.
// //antes de ES6
// var objeto= new Object(); //antes tenia que ejecutar el constructor del objeto //crear objeto
// objeto.propiedad="valor"  //luego tenia que dar los valores de las propiedades
// //despues de ES6
// const objeto={
//     propiedad: "valor"
// } 

//-otros ejemplos:

// const nombre="jorge"
// const apellido="vega"

// const persona={
//     nombre:nombre,
//     apellido:apellido,
// }

// const nombre="jorge"
// const apellido="vega"

// const persona={
//     nombre,
//     apellido,
// }

// //nueva forma de asignarle valores a las propiedades de los objetos, gracias a los objetos literales

// function cualquiera(nombre, apellido, edad) { //(los parametros son variables q estan declaradas dentro de una funcion)
//     const persona={
//         nombre, //propiedad nombre q toma el valor de la variable nombre q esta declarada dentro de la funcion
//         apellido,
//         edad,
//     } 
//     return persona
// }
// console.log(cualquiera("jorge", "vega", 31)); //envio los parametros a la funcion

//OBJECT ENTRIES
//El método Object.entries() en JavaScript devuelve un array con los pares [clave, valor]

// const persona = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Nueva York'
//   };
  
//   const entradas = Object.entries(persona);
//   console.log(entradas);

  //PROPIEDADES DINAMICAS 
  //Permiten de agregar, modificar o eliminar propiedades de un objeto de manera dinámica, es decir, en tiempo de ejecución. 
  //Esto es útil cuando no conoces las propiedades de un objeto por adelantado o necesitas crear objetos con claves variables
  //ejemplo:
// const clave = 'edad';
// const persona = {};

// // Agregar una propiedad de manera dinámica
// persona[clave] = 30;

// console.log(persona);
// // Output: { edad: 30 }


// ////orden de ideas:
// //Literales ES6:

// //1. Objetos Literales (derivado de los objetos): 

// //1.1 Propiedades abreviadas:
// const nombre = "Juan";
// const persona = { nombre }; // Equivalente a { nombre: "Juan" }

// //1.2 Propiedades computadas:
// const clave = "edad";
// const persona = { [clave]: 30 }; // { edad: 30 }


// //1.3 Métodos abreviados:
// const persona = {
//   saludar() {
//     console.log("Hola");
//   },
// };

// //2.Template literals (derivado de strings):

// //2.1 Interpolación de variables: una variable se inserta directamente en una cadena utilizando la sintaxis ${}
// const nombre = "Juan";
// console.log(`Hola, ${nombre}`);

// //2.2 Cadenas multilínea
// const texto = `Primera línea
// Segunda línea`;

// //2.3 Inclusión de expresiones: puedes evaluar operaciones, funciones, o cualquier código js directamente en la cadena.
// console.log(`El resultado es: ${2 + 2}`);
// console.log(`La suma de ${a} y ${b} es ${a + b}.`);

// //ejemplo general:

// const clave = "edad";
// const persona = {
//   nombre: "Juan",
//   [clave]: 30,
//   saludar() {
//     return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
//   },
// };

// console.log(persona.saludar());
// // "Hola, me llamo Juan y tengo 30 años."



