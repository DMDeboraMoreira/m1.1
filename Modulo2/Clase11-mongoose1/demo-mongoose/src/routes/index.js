const {Router}=require("express")
const usersController = require("../controllers/userController")


const router=Router()  // enrutador principal

router.get("/users", usersController.getUsers)
router.post("/users", usersController.createUser)





module.exports= router