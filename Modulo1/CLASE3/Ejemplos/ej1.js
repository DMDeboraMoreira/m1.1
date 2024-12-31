
class Activity{  
constructor (id, title, description, imgUrl){ 
    this.id= id,                              
    this.title= title,
    this.description = description,
    this.imgUrl = imgUrl
}
}
class Repository {  
    constructor(){  
         this.activities = [],  
         this.idActivity = 1   
    }
    getAllActivities(){  
        return this.activities
    }
    createActivity(title, description, imgUrl){ 
        const activity = new Activity (this.idActivity, title, description, imgUrl) //instanciacion
        this.idActivity ++ //id: no lo paso como parametro //seteo (asigno valor) de manera directa
        this.activities.push(activity) // Agrega la nueva actividad al array `activities`
    }
}

const repository = new Repository()   
repository.createActivity("titulo1","description1","imgUrl1")  
repository.createActivity("titulo2","description2","imgUrl2") 

console.log(repository.getAllActivities());

