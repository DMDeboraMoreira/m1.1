//HERENCIA

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

class Doctor extends Persona {  //clase hija de clase persona (hereda sus prop y metodos)
    constructor(nombre,edad,nMatricula){
        super(nombre,edad)
        this.nMatricula=nMatricula;
        
    }
}

const doctor1= new Doctor("carlos",50, 59394)
console.log(doctor1);

doctor1.agregarAmigo("pedro")
console.log(doctor1);

