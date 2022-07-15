// import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema for collection
const SurveySchema = new Schema({
    surveyId: Number,
    title: String,
    question: String,
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
    collection: "surveys"
});

const Model = mongoose.model('survey', SurveySchema);
export default Model;