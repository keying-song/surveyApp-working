import mongoose from "mongoose";
import 

const userSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
const user = mongoose.model('user', userSchema)

export default user;