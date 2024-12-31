const userControllers=(req,res)=>{
    res.status(200).send("estamos recibiendo una solicitud para obtener datos de usuarios") //200=exitiso  send=envio
}

const postControllers=(req,res)=>{
    res.status(200).send("estamos enviando informacion sobre posts") //200=exitiso  send=envio
}


module.exports={
    userControllers,
    postControllers,
}