import { Router } from 'express';
import { teams } from '../data/mockData';

export const teamsRouter = Router();

teamsRouter.get('/', (_req, res) => {
  res.status(200).json(teams);
});
