const {Router} = require("express")
const userControllers= require("../controllers/userController")

const userRouter = Router()

userRouter.get("/", userControllers.getAllUsers) //indico cual es la funcion. No la ejecuto: getAllUsers()



module.exports= userRouter
