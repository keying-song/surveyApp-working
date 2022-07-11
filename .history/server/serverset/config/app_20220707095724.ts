import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
//import cookieParser from 'cookie-parser';
import logger from 'morgan';
//1. import db package
import mongoose from 'mongoose';

//modules for JWT support
import cors from 'cors';


//import router data
import indexRouter from '../routes/index';
//import indexRouter from '../Routes/index';

const app = express();

// Complete the DB Connection Configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.RemoteURI || DBConfig.LocalURI);
const db = mongoose.connection; // alias for the mongoose connection

// Listen for Connections or Errors
db.on("open", function()
{
  console.log(`Connected to MongoDB at: ${(DBConfig.RemoteURI) ? DBConfig.HostName : "localhost"}`);
});

db.on("error", function()
{
  console.error(`Connection Error`);
});


// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')))
app.use(cors());// adds CORDS (cross origin resource sharing) to th config

//authentication 4 set up express session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized:false,
  resave:false

})); 

// use Routes
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
function session(arg0: { secret: any; saveUninitialized: boolean; resave: boolean; }): any {
    throw new Error('Function not implemented.');
}

function flash(): any {
    throw new Error('Function not implemented.');
}

