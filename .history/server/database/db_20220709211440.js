import mongoose from 'mongoose';

const Connection = async(url)=>{
    const URL = url;
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