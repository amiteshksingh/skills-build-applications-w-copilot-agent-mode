import { Router } from 'express';
import { users } from '../data/mockData';

export const usersRouter = Router();

usersRouter.get('/', (_req, res) => {
  res.status(200).json(users);
});
