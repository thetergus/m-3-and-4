"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuote = void 0;
const carInsuranceService_1 = require("../services/carInsuranceService");
const getQuote = (req, res) => {
    const { car_value, risk_rating } = req.body;
    const quotes = (0, carInsuranceService_1.calculateQuote)(car_value, risk_rating);
    res.json(quotes);
};
exports.getQuote = getQuote;
