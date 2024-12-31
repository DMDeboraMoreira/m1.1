const {Router}=require("express")
const {testControllers}= require("../controllers/index")

const router=Router()

router.get("/", testControllers)

module.exports= router