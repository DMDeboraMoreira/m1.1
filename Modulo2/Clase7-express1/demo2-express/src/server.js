const express = require("express")
const router= require("./routes/index")

const app=express()

app.use(router)  // .use: quiero q la solicitud tome este camino


module.exports=app