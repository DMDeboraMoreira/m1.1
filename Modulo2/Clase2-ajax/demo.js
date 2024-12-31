//JQUERY: es una de las herramientas q se encargan d hacer solicitudes http c la tecnica d ajax, x nosotros
//jQuery es una especie de libreria q se usaba antes(caja de herramientas c funciones). importamos el script:
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

//qremos q al oprimir el boton nuestra pag haga 1 solicitud a un servidor, traiga info del usuario y muestre 1 card c info d ese user
//p eso usamos {JSON} Placeholder q es 1 sitio q nos ofrece una API
//antes sacabamos la info de algo q escribia el usuario. Ahora la info viene d 1 servidor externo

// $ es el objeto de jquery y tiene un metodo .get("") q permite hacer peticiones de tipo get. lleva 2 argumentos:
//1° la url a la q voy a hacer la peticion: https://jsonplaceholder.typicode.com/users/10
//2° una funcion cb q es lo q va a suceder cuando la peticion finalice. (una peticion http es asincrona, es decir q va a demorar)
//A su vez esta cb recibe 2 parametros:
//1. data: informacion
//2. status

//cuando hacemos solicitudes http de tipo get, la info q viene es un json cuando viaja pero cuando llega es un objeto.




class User {   //modelo de datos
    constructor(id,name,username,email) {
        this.id=id;
        this.name=name;
        this.username=username;
        this.email= email
    }
}

class Repository {  //repo de datos
    constructor() {
        this.users=[]
    }
    createUser({id,name,username,email}){ //debe crear una instancia de la clase User
        //tip({x el orden d parametros posicionales})recibo obj p desestructurar, cuando llamen a este metodo van a tener q pasarle 1 obj
        const newUser= new User(id,name,username,email)
        this.users.push(newUser)
    }
}

const repository= new Repository()

const addUserButton= document.getElementById("addUserButton")
const usersContainer=document.getElementById("usersContainer") //selecciona el contenedor

const refresh=()=>{
    
    usersContainer.innerHTML=""    //lo vacia

    const users= repository.users   //trae a todos los usuarios del array del repo

    const htmlUsers=users.map((user)=>{  //quiero convertir esto en elementos html
        //x cada user quiero que cree:
        const name= document.createElement("h3")
        const email= document.createElement("p")
        name.innerHTML=user.name
        email.innerHTML=user.email

        const card=document.createElement("div")
        card.appendChild(name)
        card.appendChild(email)

        return card
    })
    htmlUsers.forEach((card)=>{  //recorre todo 1x1 y los va appendeando todos al contenedor q previamente vaciamos
        usersContainer.appendChild(card)
    })
}


let i=1
const addUser=()=>{
    if(i>10) return alert("No hay mas usuarios")
    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status)=>{
        i++
        // repository.createUser({   //el obj no tiene orden en las propiedades: repository.createUser({})
        //     name: data.name,
        //     id: data.id,
        //     email: data.email,
        //     username: data.username,
        // })
        repository.createUser(data) //data es 1 obj q dentro tiene las prop:id,name,username,email y otras mas
        //le puedo dar el objeto entero p desestructurar. p usar solo las prop q necesita
       //console.log(repository.users); //lo correcto seria crear un metodo getUser q me retorne la propiedad user
       refresh()
    })
}
addUserButton.addEventListener("click", addUser)