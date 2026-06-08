"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.API_BASE_URL = exports.CODESPACE_NAME = exports.PORT = void 0;
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const activities_1 = require("./routes/activities");
const leaderboard_1 = require("./routes/leaderboard");
const teams_1 = require("./routes/teams");
const users_1 = require("./routes/users");
const workouts_1 = require("./routes/workouts");
dotenv_1.default.config();
exports.PORT = Number(process.env.PORT) || 8000;
exports.CODESPACE_NAME = process.env.CODESPACE_NAME;
exports.API_BASE_URL = exports.CODESPACE_NAME
    ? `https://${exports.CODESPACE_NAME}-8000.app.github.dev`
    : `http://localhost:${exports.PORT}`;
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use('/api/users', users_1.usersRouter);
exports.app.use('/api/teams', teams_1.teamsRouter);
exports.app.use('/api/activities', activities_1.activitiesRouter);
exports.app.use('/api/leaderboard', leaderboard_1.leaderboardRouter);
exports.app.use('/api/workouts', workouts_1.workoutsRouter);
exports.app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok', apiBaseUrl: exports.API_BASE_URL });
});
