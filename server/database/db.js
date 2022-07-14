import mongoose from 'mongoose';

const Connection = async()=>{
    const URL = "mongodb://localhost:27017";
    try{
       await mongoose.connect("mongodb://localhost:27017", {
            useNewUrlParser:true,
            useUnifiedTopology: true,})
            console.log(`database connected successfully`)
    }catch(error){
        console.log(`error while connecting to the database`, error)
    }
}

export default Connection;
