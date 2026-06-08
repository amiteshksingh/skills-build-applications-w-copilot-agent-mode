import { Router } from 'express';
import { workouts } from '../data/mockData';

export const workoutsRouter = Router();

workoutsRouter.get('/', (_req, res) => {
  res.status(200).json(workouts);
});
