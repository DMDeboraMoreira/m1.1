const Activity=require("./activity")

class Repositorio {
    constructor() {
        this.actividades=[];
        this.id=0;
    }
    listarActividades(){
        return this.actividades
    }
    crearActividad(id,titulo,descripcion,imgUrl){
        const actividad= new Activity (id,titulo,descripcion,imgUrl)
        this.id++;
        this.actividades.push(actividad);
       
    }
}

module.exports=Repositorio