import dotenv from 'dotenv'; // Import dotenv
import express from 'express'; // Import express
import mongoose from 'mongoose';
import { DB_NAME } from './constants';
import connectDB from './db';
dotenv.config(); // Load environment variables


connectDB();

const app = express(); // Initialize express

const port = process.env.PORT || 3001; // Use environment variable or default port



/* ------1ST APPROACH------ 

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("baat nahi ho rahi ERR: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })


    }catch(error){
        console.error("ERROR: ", error) 
        throw error
    }

} )()

*/