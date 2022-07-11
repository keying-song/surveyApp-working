import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//1. import db package
import mongoose from 'mongoose';

//authentication 1-import modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

//modules for JWT support
import cors from 'cors';

//authentication 2 - define our auth objects
let localStrategy = passportLocal.Strategy;

//authentication 3 - import user model
import User from '../Models/user';

//import router data
import indexRouter from '../Routes/index';
import authRouter from '../Routes/auth';
import contactListRouter from '../Routes/contact-list';

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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')))
app.use(cors());// adds CORDS (cross origin resource sharing) to th config

//authentication 4 set up express session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized:false,
  resave:false

})); 
//authentication 5 -set up flash
app.use(flash());

//authentication 6-initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

//authentication 7- implement the auth strategy
passport.use(User.createStrategy());

//authentication 8 - set up User serialization and deserialization
passport.serializeUser(User.serializeUser( ));
passport.deserializeUser(User.deserializeUser());
import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//1. import db package
import mongoose from 'mongoose';

//authentication 1-import modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

//modules for JWT support
import cors from 'cors';

//authentication 2 - define our auth objects
let localStrategy = passportLocal.Strategy;

//authentication 3 - import user model
import User from '../Models/user';

//import router data
import indexRouter from '../Routes/index';
import authRouter from '../Routes/auth';
import contactListRouter from '../Routes/contact-list';

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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')))
app.use(cors());// adds CORDS (cross origin resource sharing) to th config

//authentication 4 set up express session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized:false,
  resave:false

})); 
//authentication 5 -set up flash
app.use(flash());

//authentication 6-initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

//authentication 7- implement the auth strategy
passport.use(User.createStrategy());

//authentication 8 - set up User serialization and deserialization
passport.serializeUser(User.serializeUser( ));
passport.deserializeUser(User.deserializeUser());

// use Routes
app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/', contactListRouter);

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
se('/', authRouter);
app.use('/', contactListRouter);

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
