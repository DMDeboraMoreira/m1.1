class Activity {
    constructor (id, titulo, descripcion,imgUrl) {
        this.id= id,
        this.titulo=titulo,
        this.descripcion=descripcion,
        this.imgUrl=imgUrl
    }
}

class Repositorio{
    constructor() {
        this.activities=[]
    }
    listarActivities(){
        return this.activities
    }
    crearActividad(id, titulo, descripcion,imgUrl){
        const activity = new Activity (id, titulo, descripcion,imgUrl);
        this.activities.push(activity)
        return activity
    }
}

const repositorio = new Repositorio();

function agActividadDom(activity) {
    const contenedorDom= document.querySelector("#contenedorDOM") //capture el contenedor p tarjetas DOM
    const nuevoDiv =document.createElement("div") // cree un div para las tarjetas DOM
    nuevoDiv.className = "tarjeta"  //le asigno la clase q use para tarjeta
    nuevoDiv.innerHTML = `
    <h3 class="titulos">${activity.titulo}</h3>
    <p class="titulos">${activity.descripcion}</p>
    <img src="${activity.imgUrl}" class="logo"/>
    `
    contenedorDom.appendChild(nuevoDiv)  //añado la nueva actividad al DOM
}

const form= document.querySelector("form")    //capturo el formulario antes del evento
const button= document.querySelector("#boton")  //capturo el boton antes del evento

button.addEventListener("click", ()=>{   //le agrego un evento al boton
//obtengo los valores de cada input
const titulo=document.getElementById("actividad").value
const descripcion=document.getElementById("descripcion").value
const imgUrl=document.getElementById("imgUrl").value
const id= Date.now()  ///usar fecha como identificador

if(titulo===""|| descripcion===""||imgUrl===""){ //valido q los campos no esten vacios
    alert ("Por favor, completa todos los campos")
    return //salir de la funcion
}

const nuevaActividad=repositorio.crearActividad(id,titulo,descripcion,imgUrl) //creo y guardo actividad
agActividadDom(nuevaActividad)
form.reset()
})