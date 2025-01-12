// const express = require('express');
// const mongoose = require('mongoose');
import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
const app = express();
dotenv.config(); 


app.listen(process.env.PORT,()=>
{
    console.log(`port listning on ${process.env.PORT}`)
});


// function for mongodb connection using mongoose
const connectDB = async () => {
    try {
      await mongoose.connect(
        ""
      );
  
      console.log("mongo DB connected")
      console.log(process.env.MONGODB_URL)
  
    } catch (error) {
      console.log(error.message);
    }
  };
  
  connectDB()



// ( async ()=>
// {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}`)
//        console.log(`DB connected`)
//     } catch (error) {
//         console.log(`ERORR ${error}`)
        
//     }
// })()