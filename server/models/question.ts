// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema for collection
const QuestionSchema = new Schema({
    text: String,
    question: [{
        title: String,
        option: [{
            optionID: Schema.Types.ObjectId,
            text: String,
        }]
    }],
    type: String,
    surveyID: Schema.Types.ObjectId,
    questionID: Schema.Types.ObjectId,
},
{
    collection: "question"
});

const Model = mongoose.model('Question', QuestionSchema);
export default Model;