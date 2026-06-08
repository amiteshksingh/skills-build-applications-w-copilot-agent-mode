"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const activities_1 = require("./routes/activities");
const leaderboard_1 = require("./routes/leaderboard");
const teams_1 = require("./routes/teams");
const users_1 = require("./routes/users");
const workouts_1 = require("./routes/workouts");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 8000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/users', users_1.usersRouter);
app.use('/api/teams', teams_1.teamsRouter);
app.use('/api/activities', activities_1.activitiesRouter);
app.use('/api/leaderboard', leaderboard_1.leaderboardRouter);
app.use('/api/workouts', workouts_1.workoutsRouter);
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});
const start = async () => {
    try {
        const dbUri = await (0, database_1.connectToDatabase)();
        console.log(`Connected to MongoDB at ${dbUri}`);
        app.listen(PORT, () => {
            console.log(`Backend listening on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start backend:', error);
        process.exit(1);
    }
};
void start();
