"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activitiesRouter = void 0;
const express_1 = require("express");
const mockData_1 = require("../data/mockData");
exports.activitiesRouter = (0, express_1.Router)();
exports.activitiesRouter.get('/', (_req, res) => {
    res.status(200).json(mockData_1.activities);
});
