import express from 'express';
import mongoose from 'mongoose';
const app = express();

( async ()=>
{
    try {

       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`);
       console.log(connectionInstance.connection.host);


       app.on("error", (error)=>{
        console.log(`Express connection is failing to establish. ${error}`)
       });

       app.listen(process.env.PORT,()=>
        {
            console.log(`port listning on ${process.env.PORT}`)
            console.log(`DB Connected`)
        });


    } catch (error) {
        console.log(`MongoDb Connection Failed ${error}`);
        process.exit(1);
        
    }
})()