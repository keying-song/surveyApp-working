import mongoose from 'mongoose';
import dotenv from 'dotenv';
const Connection = async()=>{
    const URL = 'mongodb+srv://sk1513:j02K8L6uRD4tTNmP@cluster0.eeyo9uy.mongodb.net/media?retryWrites=true&w=majority';
    try{
       await mongoose.connect(URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,})
            console.log(`database connected successfully`)
    }catch(error){
        console.log(`error while connecting to the database`, error)
    }
}

export default Connection;