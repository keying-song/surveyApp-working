"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
}, {
    collection: "question"
});
const Model = mongoose_1.default.model('Question', QuestionSchema);
exports.default = Model;
