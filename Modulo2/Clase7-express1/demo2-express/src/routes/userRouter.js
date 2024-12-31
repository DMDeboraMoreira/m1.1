const {Router} = require("express")
const userControllers= require("../controllers/userController")

const userRouter = Router()

userRouter.get("/", userControllers.getAllUsers)



module.exports= userRouter
