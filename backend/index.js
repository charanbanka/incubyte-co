import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/router.js';

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use('/',router)
mongoose.connect(process.env.DB_CON,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(process.env.PORT||5000,()=>console.log("Server is running on Port: 5000")))
    .catch((err)=>console.log(err))

