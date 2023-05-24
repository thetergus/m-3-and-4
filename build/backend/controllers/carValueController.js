"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValueIgnoringNumbers = exports.calculateCarValue = exports.calculateCarValueById = exports.getCarValueById = exports.createCarValue = exports.getCarValues = void 0;
const carValueService = __importStar(require("../services/carValueService"));
const getCarValues = (res) => {
    try {
        const carValues = carValueService.getCarValues();
        res.send(carValues);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.getCarValues = getCarValues;
const createCarValue = (req, res) => {
    const model = req.body.model;
    const year = req.body.year;
    if (!model || !year) {
        res.status(400).json({
            error: "Sorry something went wrong! Have you filled both fields?",
        });
        return;
    }
    try {
        const newCarValue = carValueService.createCarValue(model, year);
        res.send(newCarValue);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.createCarValue = createCarValue;
const getCarValueById = (req, res) => {
    const carValueId = parseInt(req.params.id);
    try {
        const matchedCarValue = carValueService.getCarValueById(carValueId);
        if (!matchedCarValue) {
            res.status(404).send("Sorry can't seem to generate a car value");
            return;
        }
        res.send(matchedCarValue);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.getCarValueById = getCarValueById;
const calculateCarValueById = (req, res) => {
    const carValueId = parseInt(req.params.id);
    try {
        const result = carValueService.calculateCarValueById(carValueId);
        if (typeof result === "number") {
            res.json({ car_value: result });
        }
        else {
            res.status(404).send(result.error);
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.calculateCarValueById = calculateCarValueById;
const calculateCarValue = (req, res) => {
    const model = req.body.model;
    const year = req.body.year;
    if (!model || !year) {
        res.status(400).json({
            error: "Sorry something went wrong! Have you filled both fields?",
        });
        return;
    }
    try {
        const carValue = carValueService.calculateCarValue(model, year);
        res.json({ car_value: carValue });
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.calculateCarValue = calculateCarValue;
const calculateCarValueIgnoringNumbers = (req, res) => {
    const model = req.body.model;
    const year = req.body.year;
    if (!model || !year) {
        res.status(400).json({
            error: "Sorry something went wrong! Have you filled both fields?",
        });
        return;
    }
    try {
        const carValue = carValueService.calculateCarValueIgnoringNumbers(model, year);
        res.json({ car_value: carValue });
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.calculateCarValueIgnoringNumbers = calculateCarValueIgnoringNumbers;
