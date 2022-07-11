import mongoose from 'mongoose';

const connection = async()=>{
    const URL = '';
    try{
       await mongoose.connect(URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,})
            console.loh(`database connected succes`)
    }catch(error){
        console.log(`error while connecting to the database`, error)
    }
}

export default connection;