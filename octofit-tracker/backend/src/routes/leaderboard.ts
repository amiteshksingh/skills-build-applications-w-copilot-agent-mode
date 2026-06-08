import { Router } from 'express';
import { users } from '../data/mockData';

export const leaderboardRouter = Router();

leaderboardRouter.get('/', (_req, res) => {
  const leaderboard = [...users]
    .sort((a, b) => b.points - a.points)
    .map(({ id, name, points }, index) => ({ rank: index + 1, id, name, points }));

  res.status(200).json(leaderboard);
});
