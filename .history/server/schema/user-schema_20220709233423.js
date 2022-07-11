import mongoose from "mongoose";
import autoIncrement from "mongoose"

const userSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
const user = mongoose.model('user', userSchema)

export default user;