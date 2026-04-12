
const express = require ("express")
const cors = require ("cors")
const mongoose = require("mongoose")
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://tla808373_db_user:talha123321@database.zuvtcsf.mongodb.net/")
.then(()=>{
console.log("MongoDB is connected")
}).catch(()=>{
console.log("MongoDB is not connected")
})

const formSchema= new mongoose.Schema({

name: String,
email: String,
message: String,
})

const Message = mongoose.model("Message",formSchema)

app.post("/receive-message",async(req,res)=>{

try{
const {formData} =req.body
const getMessage = new Message({...formData})
const response = await getMessage.save()
console.log(response)
res.status(200).json({success:true,message:"Data Saved"})
}
catch(error){
console.log(error)
res.status(404).json({error:fail,message:"Data is not received"})
}

})

const Port = process.env.PORT || 5000
app.listen(Port,()=>{
console.log(`Server is running on ${Port}`)
})
