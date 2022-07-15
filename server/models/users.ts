// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema for collection
const UserSchema = new Schema({
    userName: String,
    userEmail: String,
    displayName: String,
    created: {
        type: Date,
        default: Date.now()
    },
    update: {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

const Model = mongoose.model('user', UserSchema);
export default Model;