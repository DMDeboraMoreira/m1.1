const mongoose=require("mongoose")


const dbCon= async()=>{
  await mongoose.connect("mongodb+srv://debomoreira243:ggHtfbRjzhTdfR6g@cluster0.xxi5t.mongodb.net/movies")
}

module.exports=dbCon