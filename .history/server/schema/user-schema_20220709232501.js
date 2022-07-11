import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
export user = mongoose.model('user', userSchema)