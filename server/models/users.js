"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
}, {
    collection: "users"
});
const Model = mongoose_1.default.model('user', UserSchema);
exports.default = Model;
