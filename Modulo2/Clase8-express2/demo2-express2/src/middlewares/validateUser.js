const validateUser = (req,res,next)=>{
    const {name} =req.body

    if(!name){
    //console.log("error en el nombre");
    //next("nombre invalido") la req continua x otro camino alternativo q es un manejador d errores q express tiene x defecto(no es ideal)
      return res.status(400).json({
      error: "falta el dato del nombre"
    })
    } else {
        next()
    }
}


module.exports= validateUser