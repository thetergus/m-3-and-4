"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateQuote = void 0;
var calculateQuote = function (car_value, risk_rating) {
    if (!car_value || !risk_rating) {
        return { error: 'Invalid input. Please input all fields' };
    }
    else if (car_value <= 0 || risk_rating <= 0) {
        return { error: 'Invalid input. The values cannot be negative or zero' };
    }
    else if (typeof car_value !== 'number' || typeof risk_rating !== 'number') {
        return { error: 'Invalid input. Make sure both fields are numbers only' };
    }
    var yearly_quote = parseFloat((car_value * risk_rating / 100).toFixed(2));
    var monthly_quote = parseFloat((yearly_quote / 12).toFixed(2));
    return { monthly_quote: monthly_quote, yearly_quote: yearly_quote };
};
exports.calculateQuote = calculateQuote;
