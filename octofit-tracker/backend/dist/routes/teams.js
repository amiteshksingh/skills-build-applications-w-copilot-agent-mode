"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsRouter = void 0;
const express_1 = require("express");
const mockData_1 = require("../data/mockData");
exports.teamsRouter = (0, express_1.Router)();
exports.teamsRouter.get('/', (_req, res) => {
    res.status(200).json(mockData_1.teams);
});
