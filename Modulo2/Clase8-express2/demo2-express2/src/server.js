const express = require("express")
const router= require("./routes/index")
const morgan= require("morgan") 
const cors= require("cors") 

const app=express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use((req,res,next) =>{
    console.log("pasamos por mi propio middleware");
    next()
})

app.use(router)  // .use: quiero q la solicitud tome este camino


module.exports=app