const fs=require("fs/promises");
const express = require("express");

const app= express()
app.use(express.json());

if (require.main === module) {
  app.listen(3000, () => console.log('p3 server is running'));
}

function calculateQuote(car_value, risk_rating) {

  if (!car_value || !risk_rating) {
    return {error:'Invalid input. Please input all fields'};
  } else if (car_value <= 0 || risk_rating <= 0) {
    return {error:'Invalid input. The values cannot be negative or zero'};    
  } else if (typeof car_value !== 'number' || typeof risk_rating !== 'number') {
    return {error:'Invalid input. Make sure both fields are numbers only'};
  }
  const yearly_quote = parseFloat((car_value * risk_rating / 100).toFixed(2));
  const monthly_quote = parseFloat((yearly_quote / 12).toFixed(2));
  return { monthly_quote, yearly_quote };
}

app.get("/calculateQuote", (req, res) =>{
  
      const { car_value, risk_rating } = req.body;
  
  const quotes = calculateQuote(car_value, risk_rating);

  res.json(quotes);
});

module.exports ={ app, calculateQuote };