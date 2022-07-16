import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    questionId: Schema.Types.ObjectId,
    optionId: Schema.Types.ObjectId,
    surveyId: Schema.Types.ObjectId,
    value: String
},
{
    collection: "response"
});

const Model = mongoose.model('Response', ResponseSchema);
export default Model;