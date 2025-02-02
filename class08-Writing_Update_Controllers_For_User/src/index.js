import '../src/db/db.js';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http'

const app = express();
const server = http.createServer(app)


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


// routes import 
import userRouter from './routes/user.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

// routes declaration
app.use("/api/v1/users", userRouter)
app.use(errorMiddleware)


//
server.listen(8000,()=>{
    console.log("server listen on port 8000")
})









