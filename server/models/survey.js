"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
}, {
    collection: "surveys"
});
const Model = mongoose_1.default.model('survey', SurveySchema);
exports.default = Model;
