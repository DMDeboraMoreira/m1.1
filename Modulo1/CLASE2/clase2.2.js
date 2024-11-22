// //programación orientada a objetos (POO)
// //CLASES:son esencialmente plantillas para crear estos objetos, definiendo sus atributos y comportamientos.
// //plantilla que se usa para la creación de objetos definidos a partir de una misma estructura base.
// //INSTANCIAS:Los objetos que provienen de dicha plantilla se conocen como instancias de clase (objetos)
// //con una clase podremos crear esta "plantilla" de un objeto, y luego crear instancias de esta todas las veces que queramos.

// //Encapsulamiento: es el principio de ocultar los detalles internos de la implementación de un objeto, 
// //exponiendo solo las interfaces necesarias para interactuar con él.

// class CajaFuerte {
//     constructor(){
//         this._dinero=0 //detalle interno oculto
//     }
//     depositar(cantidad) { this._dinero += cantidad}
//     retirar(cantidad){ if(cantidad<= this._dinero){
//         this._dinero -= cantidad
//         return cantidad
//     }
//     return 0
// } 
// }

//herencia: permite que una clase (hijo) adopte propiedades y métodos de otra clase (padre).
//es un principio que le permite a una clase derivar propiedades y métodos de otra clase

class Padre {
    caminar(){
        console.log("caminando...");
    }
}

class Hijo extends Padre {
// hijo hereda la capacidad de caminar del padre
}

let hijo = new Hijo()
hijo.caminar() //"caminando"

///Poliformismo: permite que métodos con el mismo nombre actúen de manera diferente en distintos objetos
//permite que objetos de diferentes clases respondan a métodos con el mismo nombre, cada uno según su propia implementación

class Forma{
    dibujar(){
        console.log("dibujando");
    }
}
class Circulo extends Forma {
    dibujar(){
        console.log("dibujando un circulo");
    }
}
class Cuadrado extends Forma {
    dibujar(){
        console.log("dibujando un cuadrado");
    }
}

//Abstracción: es el proceso de ocultar los detalles complejos de la implementación 
//y exponer solo las características esenciales y las funcionalidades de un objeto.
class Coche {
    constructor() {
        this._motorEncendido=false // propiedad privada
    }
    _encenderMotor(){
        //metodo privado: detalle interno sobre como encender el motor
        this._motorEncendido=true
        console.log("motor encendido");
    }
    _apagarMotor(){
        //metodo privado: detalle interno sobre como apagar el motor
        this._motorEncendido=false
        console.log("motor apagado");
    }
}