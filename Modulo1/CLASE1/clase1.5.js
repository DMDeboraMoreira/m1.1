//Operadores ES6: Spread & Rest (spred y rest) (...)
//1.Spread: p/crear otro objeto distinto que sea una copia del primero (p/hacer copias,p/ag elementos)
//js objetos: igualdad por referencia. guarda una referencia a la posicion en memoria donde el objeto esta alojado

// const perro ={
//     raza: "salchica",
//     nombre: "pancho",
//     edad: 3,
//     color:"marron",
// }

// // // const perro2=perro //perro2 es perro y siempre van a ser el mismo objeto //no logre la copia

// // perro.collar=true

// // // console.log(perro);

// // // console.log(perro2);//no quiero que tenga collar pero los 2 son iguales

// // //p/copiar:
// //const perro2={...perro} //al usar llaves digo esto es un objeto distinto, nuevo q tiene "una copia de" las propiedades de perro
//                         //... se puede traducir como "las propiedades de" tal objeto
                        
// // perro.collar=true
// // console.log(perro2); //no tiene collar xq es una copia
// //                      //logre guardar las propiedades de otro objeto en uno nuevo


//  /////////tb puedo cambiar algunos de sus valores //gracias al destructuring y al spread
 
//  const perro2={...perro, nombre: "fido"} //copia todo y en el mismo paso cambia el valor de la propiedad que le indico
// console.log(perro2);





//////////tb podemos agregar elementos de forma sencilla

// const arreglo=[true,"palabra",{a:5}] 
// //const no me permite reasignar un nuevo valor a la variable, pero aca el valor sigue siendo un arrray (aunq sus elementos cambien)
// arreglo.push("nuevo elemento") // se agrego el nuevo elemento pero sigue siendo el mismo atteglo
// console.log(arreglo);

// ////////p/copiar y modificar arrays. cuando necesito que el array sea distinto. uno nuevo

// const arreglo=[true,"palabra",{a:5}] //quiero ag elemento y q el array sea nuevo. que sea igual al anterior salvo x 1 elemento

// const nuevoArreglo=[...arreglo, "nuevo elemento"] //al usar [] digo esto es un array nuevo q tiene "una copia de los elementos"  
//                                                   //"una copia de los elementos de" tal arreglo y tb puedo ag un nuevo elemento
// console.log(nuevoArreglo);


/////////////p/ concatenar arreglos (en lugar del metodo "concat")

// const arreglo1 =[1,2,3]
// const arreglo2 =[1,2,3]
// const arreglo3 =[...arreglo1,...arreglo2]
// console.log(arreglo3);



//////////////
//Rest: puede recibir una cantidad variable de argumentos y los agrupa todos dentro de un arreglo[]

// function sumar(a,b,c){
//     const suma= a+b+c
//     return suma
// }
// console.log(sumar(5,9,3))//17
// console.log(sumar(5,9))//NaN: espera un tercer elemento
// console.log(sumar(5,9,3,8,4,6)) //17 esta mal

function sumar(...numeros){ //"los parametros que reciba"(no importa cuantos argumentos me envien al mmento de ejecutar la funcion)
                            //rebibe todos los argumentos y los guarda dentro de una variable [] (c/el nombre q qramos-como todo paramentro)
  console.log(numeros);
  
  let suma=0
  for (let i = 0; i < numeros.length; i++) {
   suma+= numeros[i]
  }
  return suma
}
console.log(sumar(5,9,3))
console.log(sumar(5,9))
console.log(sumar(5,9,3,8,4,6,10)) 
