// Clase Activity: es un molde para crear objetos que representen actividades
class Activity{  //es un molde p/crear nuevas actividades 
    // estas actividades luego las voy a convertir en tarjetas visuales en la pagina
constructor (id, title, description, imgUrl){ // esta clase convierte estos datos en un objeto
    // El constructor define qué datos necesita cada actividad para crearse
    // recibe parámetros porque cada actividad necesita ser creada con valores específicos cuando se instancia
    // Una vez creada, cada actividad podrá tener su propio ID, título, descripción e imagen.
    // El constructor es el método que se ejecuta automáticamente cuando se crea una nueva instancia de la clase Activity
     // Recibe parámetros para definir las características de la actividad
    this.id= id,                              
    this.title= title,
    this.description = description,
    this.imgUrl = imgUrl
}
}

// Clase Repository: actúa como un "cajón" donde se guardan todas las actividades creadas
class Repository {  
    //Repository es solo una plantilla (o molde) que define cómo debería ser un repositorio y qué funcionalidades debería tener
    //No almacena las actividades. solo crea un molde p/crear repositorios que si almacenan las actividades
    constructor(){  //sirve p/inicializara las prop del obj (dar valores iniciales) 
         this.activities = [],  // Lista para almacenar todas las actividades creadas.
         this.idActivity = 1   //  Contador para asignar un ID único a cada actividad.
    }

    // Método para obtener todas las actividades guardadas en el repositorio
    getAllActivities(){  //Repository tiene métodos para agregar actividades (createActivity)
        return this.activities
    }

    // Método para crear una nueva actividad y guardarla en el repositorio.
    createActivity(title, description, imgUrl){ // envio las propiedadees q tiene mi clase 
        //Repository tiene métodos para devolver todas las actividades guardadas (getAllActivities)
         // Se crea una nueva actividad usando la clase Activity y los datos proporcionados

        const activity = new Activity (this.idActivity, title, description, imgUrl) //instanciacion
        this.idActivity ++ //id: no lo paso como parametro //seteo (asigno valor) de manera directa
        this.activities.push(activity) // Agrega la nueva actividad al array `activities`
    }
}

const repository = new Repository()   //instanciacion -- instanciar o crear = new
// Crear una instancia de Repository: es decir, un nuevo "cajón" para almacenar actividades.

// Crear nuevas actividades llamando al método `createActivity` del repositorio
// (instanciación de `Activity` dentro de `Repository`)
repository.createActivity("titulo1","description1","imgUrl1")  //al invocar al repo tengo q llamar al metodo p/crear
repository.createActivity("titulo2","description2","imgUrl2") 
//Al llamar a repository.createActivity(), creo nuevas instancias de la clase Activity, guardándolas dentro del repository

console.log(repository.getAllActivities());

//para elimimar x id c/ filter : deleteActivity q espere recibir como parametro el id a eliminar y dentro this.activity.filter
// repository.deleteActivity le pasamos el id como argumento