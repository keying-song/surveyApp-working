import mongoose from 'mongoose';

const connection = ()=>{
    try{
        mongoose
    }catch(error){
        console.log(`error while connecting to the database`, error)
    }
}