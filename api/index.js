import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';

mongoose.connect("mongodb+srv://akshaymohancareer:wTtZdcZJv88RDfD6@mern-estate.zdhny.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=mern-estate").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=> {
    console.log("Error: " + err);
});

const app = express();

app.listen(3000,() =>{
console.log("Server is running on port 3000!!!")
}); 

app.use('/api/user', userRouter);