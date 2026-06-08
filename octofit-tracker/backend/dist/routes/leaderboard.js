"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderboardRouter = void 0;
const express_1 = require("express");
const mockData_1 = require("../data/mockData");
exports.leaderboardRouter = (0, express_1.Router)();
exports.leaderboardRouter.get('/', (_req, res) => {
    const leaderboard = [...mockData_1.users]
        .sort((a, b) => b.points - a.points)
        .map(({ id, name, points }, index) => ({ rank: index + 1, id, name, points }));
    res.status(200).json(leaderboard);
});
