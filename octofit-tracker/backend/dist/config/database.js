"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DEFAULT_DB_URI = 'mongodb://127.0.0.1:27017/octofit_db';
const connectToDatabase = async () => {
    const mongoUri = process.env.MONGODB_URI || DEFAULT_DB_URI;
    if (mongoose_1.default.connection.readyState === 0) {
        await mongoose_1.default.connect(mongoUri);
    }
    return mongoUri;
};
exports.connectToDatabase = connectToDatabase;
