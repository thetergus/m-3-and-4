// const express = require("express");
// const env = require("dotenv");
// env.config();

// const server = express();
// server.use(express.json());

// const PORT = process.env.PORT;
// server.listen(PORT, () => {
//   console.log(`Server started on ${PORT}`);
// });

// let carValues = [];

// server.get("/", (req, res) => {
//   res.send("Welcome to the car value generator!");
// });

// server.get("/carValues", (req, res) => {
//   res.send(carValues);
// });

// server.post("/carValues", (req, res) => {
//   const model = req.body.model;
//   const year = req.body.year;
//   const newCarValue = {
//     id: carValues.length + 1,
//     model,
//     year,
//   };

//   carValues.push(newCarValue);

//   res.send(newCarValue);
// });

// server.get("/carValues/:id", (req, res) => {
//   const carValueId = parseInt(req.params.id);

//   const matchedCarValue = carValues.find((t) => t.id === carValueId);

//   if (!matchedCarValue) {
//     res.status(404).send("Car value not found");
//   }

//   res.send(matchedCarValue);
// });

// server.post("/carValue", (req, res) => {
//   const model = req.body.model;
//   const year = req.body.year;

//   if (!model || !year) {
//     res.status(400).json({ error: "Invalid input values" });
//     return;
//   }

//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let carValue = 0;
//   for (let i = 0; i < model.length; i++) {
//     const char = model.charAt(i).toLowerCase();
//     const index = alphabet.indexOf(char);
//     if (index !== -1) {
//       carValue += index + 1;
//     }
//   }
//   carValue = carValue * 100 + year;
//   res.json({ car_value: carValue });
// });

const express = require("express");
const env = require("dotenv");
env.config();

const server = express();
server.use(express.json());

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

const carRoutes = require("./routes/carRoutes");
server.use("/", carRoutes);
