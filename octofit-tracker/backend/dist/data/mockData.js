"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workouts = exports.activities = exports.users = exports.teams = void 0;
exports.teams = [
    { id: 't1', name: 'Octo Sprinters' },
    { id: 't2', name: 'Repo Rangers' },
];
exports.users = [
    { id: 'u1', name: 'Ava', teamId: 't1', points: 120 },
    { id: 'u2', name: 'Noah', teamId: 't1', points: 95 },
    { id: 'u3', name: 'Mia', teamId: 't2', points: 130 },
];
exports.activities = [
    { id: 'a1', userId: 'u1', type: 'Run', durationMinutes: 35, points: 35 },
    { id: 'a2', userId: 'u2', type: 'Cycle', durationMinutes: 45, points: 45 },
    { id: 'a3', userId: 'u3', type: 'Yoga', durationMinutes: 50, points: 50 },
];
exports.workouts = [
    { id: 'w1', userId: 'u1', title: 'Intervals', intensity: 'high' },
    { id: 'w2', userId: 'u2', title: 'Recovery Ride', intensity: 'low' },
    { id: 'w3', userId: 'u3', title: 'Core Flow', intensity: 'moderate' },
];
