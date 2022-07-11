//import modules
import express from'express';
import morgan from 'morgan';
import cors from 'cors';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';


//app
const app = express();


//dotenv
dotenv.config();
const dburl = process.env.DB_URL;

//db
Connection(dburl);


//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({}));
app.use(cors());

//routes
app.use('/', Routes)

//port
const port = 8080;


//listener
const server = app.listen(port, ()=>
    console.log(`Server is running on port ${port}`)
);