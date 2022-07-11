import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
const user = mongoose.model('user', userSchema)

export default