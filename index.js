import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import User from "./models/user.model.js"
import connectDb from "./config/db.js";


const app=express()
const port=8000

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("hello")
})


app.post("/create", async(req,res)=>{
try{
let {name,age,email,userName} = req.body
const user= User.create({
    name,
    age,
    email,
    userName
})
res.status(201).json({mess:"user created"})
}catch(error){
 res.status(400).json({mess:error})
}
})



app.listen(port,()=>{
connectDb();
    console.log("server get started ");
})