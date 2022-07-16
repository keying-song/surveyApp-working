import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OptionSchema = new Schema({
    text: String,
    value: String,
    optionId: Schema.Types.ObjectId,
    questionId: Schema.Types.ObjectId
},
{
    collection: "option"
});

const Model = mongoose.model('Option', OptionSchema);
export default Model;