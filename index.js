import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Model from "./SCHEMA/schema.js"
const app = express();

dotenv.config()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 9000
const url= process.env.DB_URL
 mongoose.connect(url,{
     useNewUrlParser:true,useUnifiedTopology:true
 }).then(console.log("database connected successfully")).catch((error)=>{
     console.log(error)
 })


app.get("/",(req,res)=>{
    res.send("My user details API")
})


app.get("/users",async(req,res)=>{
    const detail=await Model.find()
    if(detail){
        return res.status(200).json({
            message:"User detais available",
            data:detail
              })
    }else{
        return res.status(400).json({
            message:"failed to access user details"

        })
    }
})


app.post("/add",async(req,res)=>{
    const {firstName,lastName,dateOfBirth,school}=req.body
    const detail = await Model.create({
        firstName,lastName,dateOfBirth,school
    })
    if(detail){
        return res.status(200).json({
            message:"user added",
        data:detail
        })
    }else{
        return res.status(400).json({
            message:"failed to add user details"
        })
    }
})


app.listen(port,()=>{
    console.log(`database is running at ${port}`)
})