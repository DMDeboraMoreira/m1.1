//Default Assignment: Asignación por defecto
//permite que la función realice su tarea, reciba o no el argumento requerido, 
//o que utilice esa asignación como valor por defecto hasta que el valor sea recibido o modificado
//ej:
function saludar(nombre= 'invitado'){
console.log(`hola, ${nombre}! `);
}
saludar()  //cuando ejecutamos la función sin pasarle un parámetro, éste toma por defecto el valor igualado ('Invitado'). 
saludar("juan") //En el caso de si pasarle un parámetro, este será el valor a utilizar.




//El Nullish Coalescing Operator, representado como (??), nos permite agregar un valor por defecto 
//a una variable si su valor actual es nulo o es indefinido. 

let valor1=null
let valor2="valor por defecto"

let resultado= valor1 ?? valor2
console.log(resultado);

//Entre 2 valores de los cuales uno es nulo, este operador asigna por defecto el valor q sea true
//Cuando comparemos dos valores falsos, permanecerá el segundo. 
//Pero cuando ambos sean verdaderos, permanecerá el primero
