import mongoose from 'mongoose';

const connection = ()=>{
    try{
        mongoose.connect()
    }catch(error){
        console.log(`error while connecting to the database`, error)
    }
}