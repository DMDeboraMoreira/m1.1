//PASO 1: Crear una clase p objetos y un repositorio p gestionarlos. Instanciar el Repositorio. new Repositorio()
//PASO 2: Capturar el elemento disparador y el elemento contenedor donde se agregarán los nuevos elementos. document.getElementById
//PASO 3: Crear la función cb que se ejecutará cuando el usuario interactue con el elemento disparador 
//PASO 3.1: Capturo y valido elementos del formulario.Generar un ID p/c actividad. getElementById("").value-if()alert-Date.now()
//PASO 3.2: Creo el objeto(llamo al metodo) y creo el Html c/clase y contenido (createElement/classList.add/innerHTML)
//PASO 3.3: Inserto la actividad en el DOM. appendChild
//PASO 3.4: Capturar el form y reset()
//PASO 4: Crear el evento usando addEventListener.


class Activity {   //Define la estructura de cada actividad (qué propiedades tendrá).
    constructor(id,titulo,descripcion,imgUrl){
        this.id=id,
        this.titulo=titulo,
        this.descripcion=descripcion,
        this.imgUrl=imgUrl
    }
}
class Repositorio {   //Se encarga de almacenar y gestionar las actividades creadas.
    constructor() {
        this.actividades=[]
    }
    listarActividades(){ //creo una funcion q devuelva la lista del []
        return this.actividades
    }
    crearActividad(id,titulo,descripcion,imgUrl){  //creo una funcion p crear nuevas actividades
       const actividad= new Activity (id,titulo,descripcion,imgUrl)
       this.actividades.push(actividad)
       return actividad
    }
}
const repositorio= new Repositorio()    //Esta instancia será utilizada para gestionar las actividades

const boton= document.getElementById("boton")
const contenedorDom=document.getElementById("contenedorDom")

function agActividad() {
    //aca tb necesito capturar los id del formulacio p tarjetas
    const titulo=document.getElementById("actividad").value
    const descripcion=document.getElementById("descripcion").value
    const imgUrl=document.getElementById("imgUrl").value
    const id= Date.now() 
   // const form= document.querySelector("form") 


    if (titulo === "" || descripcion === "" || imgUrl === "") {
        alert("Por favor, completa todos los campos"); // Mostramos una alerta si algún campo está vacío.
        return;
    }
    //solo se crea una actividad si los campos están completos.
    const nuevaActividad= repositorio.crearActividad(id,titulo,descripcion,imgUrl)

    const nuevoE= document.createElement("div")
    nuevoE.classList.add("tarjeta")
   
    //le agrego contenido a la tarjeta con innerHTML
    nuevoE.innerHTML = ` 
        <h3 class="titulos">${nuevaActividad.titulo}</h3>
        <p class="titulos">${nuevaActividad.descripcion}</p>
        <img src="${nuevaActividad.imgUrl}" class="logo"/>
    `
    
    contenedorDom.appendChild(nuevoE)

    const form= document.querySelector("form") 
    form.reset()
}
boton.addEventListener("click", agActividad)
