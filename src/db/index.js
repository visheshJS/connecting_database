import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async ()=>{
    try{
        const connectionINSTANCE=await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        console.log(`\n MongoDB connected !! DB HOST: 
        ${connectionINSTANCE.connection.host}`)

    }catch(error){
        console.error(" connecting error found: ",error)
        process.exit(1)
    }

}

export default connectDB