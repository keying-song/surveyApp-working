import mongoose from "mongoose";
import autoIncrement FROM

const userSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
const user = mongoose.model('user', userSchema)

export default user;