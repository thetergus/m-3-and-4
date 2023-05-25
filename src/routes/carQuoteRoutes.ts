import express from 'express';
import { createQuote, getCarQuote } from '../controllers/carQuoteController';

const router = express.Router();

router.post('/calculateQuote', createQuote);

router.get("/QuoteByID/:id", getCarQuote);

export default router;