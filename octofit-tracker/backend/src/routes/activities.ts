import { Router } from 'express';
import { activities } from '../data/mockData';

export const activitiesRouter = Router();

activitiesRouter.get('/', (_req, res) => {
  res.status(200).json(activities);
});
