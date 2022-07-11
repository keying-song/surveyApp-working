//import modules
import express from'express';
//const express = require('express');
import mongoose from 'mongoose';
//const mongoose = require('mongoose');
import
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();


//app
const app = express();


//db
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=>console.log("DB CONNECTED"))
.catch((err)=> console.log("DB CONNECTION ERROR", err));


//middleware
app.use(morgan("dev"));
app.use(cors({origin:true, credentials:true}));

//routes


//port
const port = process.env.PORT || 8080;


//listener
const server = app.listen(port, ()=>
    console.log(`Server is running on port ${port}`)
);