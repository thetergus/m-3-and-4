"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValue = exports.getCarValueById = exports.createCarValue = exports.getCarValues = void 0;
var carValueService = require("../services/carValueService");
var getCarValues = function (req, res) {
    var carValues = carValueService.getCarValues();
    res.send(carValues);
};
exports.getCarValues = getCarValues;
var createCarValue = function (req, res) {
    var model = req.body.model;
    var year = req.body.year;
    var newCarValue = carValueService.createCarValue(model, year);
    res.send(newCarValue);
};
exports.createCarValue = createCarValue;
var getCarValueById = function (req, res) {
    var carValueId = parseInt(req.params.id);
    var matchedCarValue = carValueService.getCarValueById(carValueId);
    if (!matchedCarValue) {
        res.status(404).send("Sorry can't seem to generate a car value");
    }
    res.send(matchedCarValue);
};
exports.getCarValueById = getCarValueById;
var calculateCarValue = function (req, res) {
    var model = req.body.model;
    var year = req.body.year;
    if (!model || !year) {
        res.status(400).json({
            error: "Sorry something went wrong! Have you filled both fields?",
        });
        return;
    }
    var carValue = carValueService.calculateCarValue(model, year);
    res.json({ car_value: carValue });
};
exports.calculateCarValue = calculateCarValue;
