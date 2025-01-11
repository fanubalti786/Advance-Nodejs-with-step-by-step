import mongoose from 'mongoose';
import express from 'express';
import {DB_NAME} from './constants'

app = express();

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>
        {
            console.log("Error", error);
            throw error;
        });
        app.listen(process.env.PORT, ()=>
        {
            console.log(`app is listening on port : ${process.env.PORT}`)
        });
    } catch (error) {
        console.log("Error : ", error)
    }
})()
// const connectDB = ()=>{}
// connectDB()