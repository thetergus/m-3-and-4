const express = require("express");
const router = express.Router();
const carValueController = require("../controllers/carValueController");

router.get("/", (req, res) => {
  res.send("Welcome to the car value generator!");
});

router.get("/carValues", carValueController.getCarValues);

router.post("/carValues", carValueController.createCarValue);

router.get("/carValues/:id", carValueController.getCarValueById);

router.post("/carValue", carValueController.calculateCarValue);

module.exports = router;
