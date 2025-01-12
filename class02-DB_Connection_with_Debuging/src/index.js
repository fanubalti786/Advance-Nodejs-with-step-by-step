// const express = require('express');
// const mongoose = require('mongoose');
import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
const app = express();
dotenv.config(); 





// // function for mongodb connection using mongoose
// const connectDB = async () => {
//     try {
//       await mongoose.connect(
//         "mongodb+srv://fanubalti786:<sultanG0101>@servicecluster0.wcq6o.mongodb.net/"
//         "mongodb+srv://fanubalti786:sultanG0101@servicecluster0.wcq6o.mongodb.net/"
        
//       );
  
//       console.log("mongo DB connected")
//       console.log(process.env.MONGODB_URL)
  
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
  
//   connectDB()



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