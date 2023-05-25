import { Request, Response } from 'express';
import { calculateQuote } from '../services/carInsuranceService';

export const getQuote = (req: Request, res: Response): void => {
  const { car_value, risk_rating } = req.body;

  const quotes = calculateQuote(car_value, risk_rating);

  res.json(quotes);
};
