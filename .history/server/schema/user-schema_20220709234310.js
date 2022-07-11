import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin()
const user = mongoose.model('user', userSchema)

export default user;