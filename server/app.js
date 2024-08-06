const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const user=require("./model")

mongoose.connect("mongodb://127.0.0.1:27017/REGISTER")
.then(()=>{console.log("connect")})
.catch(()=>{console.log("failed")})

let app=express()
app.use(cors())
app.use(express.json())

app.post("/submitForm",(req,res)=>{
    console.log(req.body.email)  
    user.findOne({email:req.body.email})
    .then((data)=>{
        if(data){
            console.log("user is already existed")
            res.send({"message":"user is already existed"})
        }
        else{
            let data=new user(req.body)
            data.save()
            .then(()=>{console.log("save")
                res.send({"message":"Registeration success"})
            })
            .catch(()=>{console.log("failed")})
        }
    })
})
app.post("/loginData",(req,res)=>{
   let {email,password}=req.body
  
   user.findOne({email:email})

   .then((data)=>{
    if(data){
        if(data.email==email){
            console.log("registered user")
        }else{
            console.log("not a user")
        }
    }
    else{
        console.log("not a user")
    }
   })
   res.send("success")
})

app.get("/user",(req,res)=>{
    user.find()
    .then((data)=>{
        res.send({data})
    })
    .catch(()=>{
        console.log("failed")
    })
})

app.get("/userProfile/:id",(req,res)=>{
    user.findOne({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
})

app.put("/userProfile/:id",(req,res)=>{
    user.updateOne({_id:req.params.id},req.body)
    .then(()=>{res.send({"message":"data updated"})})
    .catch(()=>{console.log("data did not updated")})
})

app.delete("/userProfile/:id",(req,res)=>{
    user.deleteOne({_id:req.params.id})
    .then(()=>{res.send({"message":"data deleted"})})
    .catch(()=>{console.log("database not delted")})
})
  
app.listen(5000,()=>{
    console.log("server is running port no 5000")
})
