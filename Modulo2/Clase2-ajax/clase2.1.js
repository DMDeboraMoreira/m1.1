//SINCRONISMO: cada instrucción se ejecuta y completa antes de continuar con la nueva tarea
//JS puede hacer 1 sola cosa x vez (single threaded) y es sincrónico 
//aunq podemos darle un comport asincrónico c el uso d herramientas(cb, promesas y async/await)Ej Js:setTimeOut() q hace q js no se tenega
console.log("tarea1");

setTimeOut(()=>{  //operaciones asincronas: incertidumbre=> no solo x demora
    console.log("tarea2");
},2000) 

console.log("tarea3");   //consola:tarea1 tarea3 tarea2


//ASINCRONISMO:es la capacidad que tiene un lenguaje de realizar otras operaciones mientras una operación se ejecuta en segundo plano
//Asincronismo:características:
//1.Inicio de la tarea: cuando se inicia una tarea asíncrona el programa no espera su finalización.
//2.Continuación inmediata:el programa continúa ejecutando otras tareas sin esperar a que la tarea asíncrona se complete.
//3.Manejo del resultado:completada,se maneja el resultado o se ejecuta una función de retorno (cb) p procesar el resultado.

//AJAX:tecnica d desarrollo q permite pedir info puntual a un servidor p modificar una parte puntual de nuestra pagina
//Permite realizar procesos asincrónicos.ej, hacer una solicitud de información un servidor.
// como se mueve la info
//AJAX es asincrono(solicitud http q hace es asincrona) js y xml(lenguaje d marcado(similar a HTML)formato p mover info-destronado x json)
//en la práctica se pueden utilizar otros formatos.ej, el formato JSON es una forma más sencilla y ligera de enviar información.
//JSON (JavaScript Object Notation) estructura la información con pares clave-valor (como los objetos de JavaScript), 
//es un formato p el transporte de info q es muy parecido a un objeto de js
//donde las claves son cadenas y los valores pueden ser cualquier otro tipo de dato: 
//     {
//         "title": "Titanic",
//         "year": "199X"
//     }