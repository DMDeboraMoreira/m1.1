module. exports ={
    getUsers: async()=>{
        
        //Operaciones asincronas:
        // consultar a una BD
        // realizar solicitud http a un servicio experno
        // leeran la informacion de un archivo

        const users =[
            {
                id:1,
                name: "jorge"
            },
            {
                id:2,
                name: "belu"
            },
            {
                id:3,
                name: "alejo"
            }
        ]
        return users
    }
}