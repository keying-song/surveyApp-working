import mongoose from "mongoose";
import autoincre

const userSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
const user = mongoose.model('user', userSchema)

export default user;