import mongoose from 'mongoose';

const connection = ()=>{
    cons
    try{
        mongoose.connect(URL, {})
    }catch(error){
        console.log(`error while connecting to the database`, error)
    }
}