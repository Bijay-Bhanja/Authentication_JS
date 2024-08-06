const mongoose=require("mongoose")

let data=new mongoose.Schema({
    name:String,
    email:String,
    phoneNo:Number,
    confirmPassword:String
})
let user=mongoose.model("RegisterData",data)

module.exports=user