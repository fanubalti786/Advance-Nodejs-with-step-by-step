import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
const app = express();
dotenv.config();

( async ()=>
{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}`);

       app.on("error", (error)=>{
        console.log(`ERROR ${error}`)
       });

       app.listen(process.env.PORT,()=>
        {
            console.log(`port listning on ${process.env.PORT}`)
            console.log(`DB Connected`)
        });


    } catch (error) {
        console.log(`ERORR ${error}`)
        
    }
})()