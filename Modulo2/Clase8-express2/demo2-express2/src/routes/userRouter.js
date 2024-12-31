const {Router} = require("express")
const userControllers= require("../controllers/userController")
const validateUser = require("../middlewares/validateUser")

const userRouter = Router()

userRouter.get("/", userControllers.getAllUsers) //indico cual es la funcion. No la ejecuto: getAllUsers()

userRouter.post("/", validateUser, userControllers.createUser)



module.exports= userRouter
