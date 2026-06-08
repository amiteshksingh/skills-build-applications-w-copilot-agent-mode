"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = require("../config/database");
const mockData_1 = require("../data/mockData");
dotenv_1.default.config();
const seed = async () => {
    // Seed the octofit_db database with test data
    const mongoUri = await (0, database_1.connectToDatabase)();
    const db = mongoose_1.default.connection.db;
    if (!db) {
        throw new Error('Database connection is not available.');
    }
    await db.collection('users').deleteMany({});
    await db.collection('teams').deleteMany({});
    await db.collection('activities').deleteMany({});
    await db.collection('workouts').deleteMany({});
    await db.collection('users').insertMany(mockData_1.users);
    await db.collection('teams').insertMany(mockData_1.teams);
    await db.collection('activities').insertMany(mockData_1.activities);
    await db.collection('workouts').insertMany(mockData_1.workouts);
    console.log(`Seeded test data into ${mongoUri}`);
};
seed()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error('Failed to seed database:', error);
    process.exit(1);
});
