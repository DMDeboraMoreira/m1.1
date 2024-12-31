const {Router}=require("express")
const userRouter = require("./userRouter")
const postRouter = require("./postRouter")

const router=Router()  // enrutador principal

router.use("/users", userRouter)
router.use("/posts", postRouter)



// router.get("/users", userControllers)
// router.post("/users", userControllers)
// router.put("/users", userControllers)
// router.delete("/users", userControllers)

// router.get("/posts", postControllers)
// router.post("/posts", postControllers)
// router.put("/posts", postControllers)
// router.delete("/posts", postControllers)

module.exports= router