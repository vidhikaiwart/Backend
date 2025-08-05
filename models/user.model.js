import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

name:{
    type:String,
    required:true,

},age:{
    type:Number,
    required:true,

    
},email:{
    type:String,
    required:true,
    unique:true
    
},userName:{
    type:String,
    required:true,
    unqiue:true
    
}

},{timestamps:true})

const User = mongoose.model("User" , userSchema)

export default User