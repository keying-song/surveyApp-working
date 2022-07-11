//import modules
import express from'express';
//const express = require('express');

//const mongoose = require('mongoose');
import morgan from 'morgan';
//const morgan = require('morgan');
import cors from 'cors';
//const cors = require('cors');
//require("dotenv").config();
import Connection from './database/db.js';
import dotenv from 'dotenv';


//app
const app = express();


//dotenv
dotenv.config();
const dburl = process.env.DB_URL;
const password = process.env.DB_PASSWORD;
//db
Connection(username, password);


//mongoose.connect(process.env.MONGO_URI,{
   // useNewUrlParser:true,
   // useUnifiedTopology: true,
//})
//.then(()=>console.log("DB CONNECTED"))
//.catch((err)=> console.log("DB CONNECTION ERROR", err));


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