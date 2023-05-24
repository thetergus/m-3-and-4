import express from 'express';
import { getQuote } from '../controllers/carInsuranceController';

const router = express.Router();

router.get('/calculateQuote', getQuote);

export default router;
