//import modules
import express from'express';
import morgan from 'morgan';
import cors from 'cors';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';


//app
const app = express();


//dotenv
dotenv.config();
const dburl = process.env.DB_URL;

//db
Connection(dburl);


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
app.use

//port
const port = process.env.PORT || 8080;


//listener
const server = app.listen(port, ()=>
    console.log(`Server is running on port ${port}`)
);