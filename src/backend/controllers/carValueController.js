const carValueService = require("../services/carValueService");

exports.getCarValues = (req, res) => {
  const carValues = carValueService.getCarValues();
  res.send(carValues);
};

exports.createCarValue = (req, res) => {
  const model = req.body.model;
  const year = req.body.year;
  const newCarValue = carValueService.createCarValue(model, year);
  res.send(newCarValue);
};

exports.getCarValueById = (req, res) => {
  const carValueId = parseInt(req.params.id);
  const matchedCarValue = carValueService.getCarValueById(carValueId);

  if (!matchedCarValue) {
    res.status(404).send("Sorry can't seem to generate a car value");
  }

  res.send(matchedCarValue);
};

exports.calculateCarValue = (req, res) => {
  const model = req.body.model;
  const year = req.body.year;

  if (!model || !year) {
    res.status(400).json({
      error: "Sorry something went wrong! Have you filled both fields?",
    });
    return;
  }

  const carValue = carValueService.calculateCarValue(model, year);
  res.json({ car_value: carValue });
};
