//Arrow functions: función flecha
//sintaxis simplificada
//facilidad p/trabajar c/ cb
//contexto con this:la referencia se toma del ámbito que contiene a la arrow function en el momento de su definición 


// function sumar(a,b) {
//     return a+b
// }

// const sumar= (a,b)=> {  //const x= ()=>{}   //function x (){return}
//     return a+b         
// }

// const sumar= (a,b) =>  a + b  //si tiene una sola linea en la funcion flecha, se pueden obviar las llaves y el return
// console.log(sumar(4,9))

// const arrayNum =[1,2,3,4,5,6,7,8,9,10]

// // const pares = arrayNum.filter(function (num){
// //     return num %2 ==0
// // })
// // console.log(pares);

// const pares = arrayNum.filter((num)=>num %2 ==0)
// console.log(pares);


/////this:

const persona ={
    nombre: "juan",
    amigos: ["maria","pedro","juana"],

    saludar: function () {//establece la referencia c/ el objeto this al momento de ejecutarse la funcion(releciona el objeto c/el metodo)
        console.log("hola, soy", this.nombre);
    },

    despedirse: ()=>{ //se establece la referencia cuando la funcion es definida. NO ejecutada. no hay contexto this ??
        console.log("me despido.", this.nombre); //me despido. undefined
    }
}
persona.saludar()
persona.despedirse() // no logra establecer la referencia con el objeto xq no esta definido

//minuto 3