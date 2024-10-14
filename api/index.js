import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

mongoose.connect("mongodb+srv://akshaymohancareer:wTtZdcZJv88RDfD6@mern-estate.zdhny.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=mern-estate").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=> {
    console.log("Error: " + err);
});

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000,() =>{
console.log("Server is running on port 3000!!!")
}); 

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


//MIDDLEWARE

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});