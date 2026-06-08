"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const mockData_1 = require("../data/mockData");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter.get('/', (_req, res) => {
    res.status(200).json(mockData_1.users);
});
