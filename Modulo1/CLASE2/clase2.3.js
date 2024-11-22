// //Constructor y prototipos
// //POO en js (EcmaSript: js toma la sintaxis de clases, aunq es un lenguaje basado en prototipos y no en clases)
// //cuando creo una instancia, creo un obj nuevo que toma el mismo prototipo de la funcion constructora, y se va formando una cadena
//cuando implementamos una clase trabajams c/1 cadena de prototipos q va ag eslabones a medida que creamos f.constructoras e instancias

// //antes de ES6: implementacion de clases se hacia con funciones constructoras

// function Persona(nombre, edad) { //la F.constructora se usa para luego crear una instancia(ejemplares)//va a ser similar a una clase
//     this.nombre=nombre;
//     this.edad=edad;
// }
// const persona1=new Persona("jorge", 32) //le paso lo argumentos de esta instancia
// console.log(persona1);

// // console.log(Persona.prototype); //el objeto prototype es una propiead de Persona 
// //                                (todos los obj en js tienen una propiedad prototype)

// Persona.prototype.saludar=function () {//puedo ag a su prototipo todas las propiedades y metodos q qdando disponibles p/instancias
//     console.log("hola soy", this.nombre);  
// }
// persona1.saludar()


/////////SINTAXIS DE CLASES de ES: (mascara que busca parecerse a las clases de POO. aunque son prototipos)
//palabra reservada: "class" + Nombre con mayuscula + { constructor(parametros){propiedades}}
//el metodo constructor es la funcion que se ejecuta cuando creamos una instancia, y es el que recibe los parametros
//instancia: const x= new nombre de class (argumentos)
//las prop se inicializan x defecto y luego las puedo modificar

// class Persona {
//     constructor(nombre,edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
// }
// const persona1 = new Persona ("jorge",32);
// console.log(persona1);

class Persona {
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.amigos=[]
        this.sentada=true
    }
agregarAmigo(nombreAmigo){  //metodo dinamico de las instancias que creemos
    this.amigos.push(nombreAmigo)
  }
pararse(){
    this.sentado=false
  }
sentarse(){
    this.sentado=true
  }
}
const persona1 = new Persona ("jorge",32);
console.log(persona1);

persona1.agregarAmigo("pedro")
persona1.agregarAmigo("juana")
console.log(persona1);

persona1.pararse()
console.log(persona1);

//clases: traen conceptos de la vida real a nuestro codigo
//las prop describen al objeto y los metodos indican acciones o comportamientos de ese objeto
//algunos metodos pueden modificar propieades. ej. pararse