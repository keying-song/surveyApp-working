"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ResponseSchema = new Schema({
    questionId: Schema.Types.ObjectId,
    optionId: Schema.Types.ObjectId,
    surveyId: Schema.Types.ObjectId,
    value: String
}, {
    collection: "response"
});
const Model = mongoose_1.default.model('Response', ResponseSchema);
exports.default = Model;
