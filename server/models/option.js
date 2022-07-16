"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const OptionSchema = new Schema({
    text: String,
    value: String,
    optionId: Schema.Types.ObjectId,
    questionId: Schema.Types.ObjectId
}, {
    collection: "option"
});
const Model = mongoose_1.default.model('Option', OptionSchema);
exports.default = Model;
