//ECMA: organización internacional dedicada a la creación de estándares
//Una feature (característica) de JavaScript es una funcionalidad o capacidad específica que el lenguaje proporciona 
//para facilitar el desarrollo de aplicaciones web o mejorar su eficiencia y flexibilidad.
//Una de las incorporaciones más importantes de ECMAScript 6 son las declaraciones let y const:

//LET & CONST: palabras reservadas para declarar variables

// let a= 5  //Nos permite declarar la variable, inicializarla y modificar su valor 

// a= 15

// let b= 8

// let suma= a+b

// console.log(suma);

// a= [1,2,3]

// console.log(a);


// const a= 5  //Nos permite declarar la variable, inicializarla pero NO modificar su valor. No puede mutar

// a= 13  //NO podemos reasignar el valor de esa variable a lo largo de su ejecucion (costante)

// const b= 8

// const suma= a+b

// console.log(suma);


//Diferencia 1: No podemos REdeclarar variables con el mismo nombre:

// var a= "Declarada con var"
// var a= "jorge vega"
// console.log(a); //pisa la declaracion anterior


// let b="Declarada con let"
// let b="jorge vega" //No podemos REdeclarar una variable con let

// const c="Declarada con const"
// const c="jorge vega" //No podemos REdeclarar una variable con const 


//Diferencia 2: Alcance de las variables:

// var a=15 //alcance global. de ejecucuion del codigo. es accesible desde cualquier punto
// if (true) {
//     console.log(a);//Es accesible desde dentro del bloque if
//     var b=25
// }
// console.log(b); //Es accesible desde fuera del bloque if


// if (true){
//     let a = 15;
//     console.log(a);  //let solo existe dentro de su bloque
// }
// //console.log(a); //let solo es accesibles desde dentro del bloque donde fue declaradas y NO desde fuera

// for (let i= 0; i<5; i++) {
//     let a=10; // solo existe dentro del bloque donde fue declaradas. por eso no se pisan
//     console.log(a); 
// }

// if (true){
//     const a = 15;
//     console.log(a);  //const solo existe dentro de su bloque
// }
// //console.log(a); //const solo es accesibles desde dentro del bloque donde fuedeclarada y NO desde fuera


// for (let i= 0; i<5; i++) {
//     let a=10; // solo existe dentro del bloque donde fue declaradas. por eso no se pisan
//     console.log(i); 
// }
// console.log(i); //la variable i no tiene sentido fuera del codigo xq tenia una funcion especifica y ya la cumplio

// const palabras=["hola","chau"]
// palabras = 10 //declarar con const p/q ni x accidente pueda cambiar el valor de esta variable


//idealmente vamos a usar const
//si quermos que mas adelante la variable modifique su valor, usaremos let para que se limite a su bloque y no sea accesible desde fuera

//SCOPE: hace referencia a la región del código donde se definen las variables y, donde pueden ser accedidas
//global:Cuando se declara fuera de cualquier función o bloque de código (var)
//local:Cuando se declara dentro de una función o un bloque de código y solo es accesible dentro de esa función o bloque.(let/const)

//Hoisting:las declaraciones de las variables y funciones son "movidas" al inicio de su contexto de ejecución 
//durante la fase de compilación, antes de que el código se ejecute.
//si utilizamos let o const para declarar una variable, la declaración de la variable se hoisteará, 
//pero no se inicializará, ya que esto solo sucede con var.
// console.log(y);//undefined
// var y=5
// console.log(y);

console.log(y);//ERROR
const y=5
console.log(y);

