import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { activitiesRouter } from './routes/activities';
import { leaderboardRouter } from './routes/leaderboard';
import { teamsRouter } from './routes/teams';
import { usersRouter } from './routes/users';
import { workoutsRouter } from './routes/workouts';

dotenv.config();

export const PORT = Number(process.env.PORT) || 8000;
export const CODESPACE_NAME = process.env.CODESPACE_NAME;

export const API_BASE_URL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', apiBaseUrl: API_BASE_URL });
});
