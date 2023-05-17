const express = require('express');   // importing dependencies 
const dotenv = require('dotenv');    // importing dependencies 
// const cors = require('cors') // importing dependencies 
const app = express();            

dotenv.config(); //loading any variables from the .env

const port = process.env.PORT || 3000; //listen up kids, right now the PORT is set to 3000, tomorrow, the world...but that's only if the .env doesnt have some other port...


app.use(express.json()); //enabling parsing of JSON data for the request bodu
// app.use(express.cors());  //enable cors Cors package, to try to avoid issues when callign from a frond end react

app.post('/calculateQuote',  (req, res) => {              
  const { car_value, risk_rating } = req.body;

  if (!car_value || !risk_rating) {
    return res.status(400).json({ error: 'Invalid input. Make sure both fields are completed and use numbers only (do not use 0' });
    //should add more to make sure the values inserted are the right type of data
  }

  const yearly_quote = car_value * risk_rating / 100;
  const monthly_quote = yearly_quote / 12;

  res.json({ monthly_quote, yearly_quote });
});
//Handling the POST request of the http to the endpoint, retrieving two inputs (the car value nad the risk rating) 
//checking that the values are actually there, if not throwing an error message
//

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//starting the server and listening to whatever port was asssigned 
//(initially 3000 because reasons) and console logging just to check



// module.exports= './calculateQuote'
