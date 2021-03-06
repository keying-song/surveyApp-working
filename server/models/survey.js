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
    name: String,
    owner: String,
    surveyId: Schema.Types.ObjectId,
    questionArray: [String],
    isActive: Boolean,
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
    }
}, {
    collection: "surveys"
});
const Model = mongoose_1.default.model('Survey', SurveySchema);
exports.default = Model;
