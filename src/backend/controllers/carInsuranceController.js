"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuote = void 0;
var carInsuranceService_1 = require("../services/carInsuranceService");
var getQuote = function (req, res) {
    var _a = req.body, car_value = _a.car_value, risk_rating = _a.risk_rating;
    var quotes = (0, carInsuranceService_1.calculateQuote)(car_value, risk_rating);
    res.json(quotes);
};
exports.getQuote = getQuote;
