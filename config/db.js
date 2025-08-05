import mongoose
 from "mongoose";
const connectDb =async()=> {
    try{
        mongoose.connect(process.env.MONGO)
        console.log("Db connected");

    } catch (error){
         console.log("database error:   ", error)
    }


}
export default connectDb;