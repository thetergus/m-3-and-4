import fs from "fs/promises";
import { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

function calculateQuote(car_value: number, risk_rating: number) {
  if (car_value <= 0 || risk_rating <= 0) {
    return { error: 'Invalid input. The values cannot be negative or zero' };
  } 
  const yearly_quote = parseFloat((car_value * risk_rating / 100).toFixed(2));
  const monthly_quote = parseFloat((yearly_quote / 12).toFixed(2));
  return { monthly_quote, yearly_quote };
}

app.get("/calculateQuote", (req: Request, res: Response) => {
  const { car_value, risk_rating } = req.body;

  const quotes = calculateQuote(car_value, risk_rating);

  res.json(quotes);
});

if (require.main === module) {
  app.listen(3000, () => console.log('p3 server is running'));
}

export { app, calculateQuote };

