const {Router} = require("express")
const postControllers= require("../controllers/postController")

const postRouter = Router()

postRouter.get("/", postControllers.getAllPosts)



module.exports= postRouter