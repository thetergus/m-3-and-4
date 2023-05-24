"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValueIgnoringNumbers = exports.calculateCarValueById = exports.calculateCarValue = exports.getCarValueById = exports.createCarValue = exports.getCarValues = void 0;
const carValueInfo_1 = require("../types/carValueInfo");
const getCarValues = () => {
    return carValueInfo_1.carValues;
};
exports.getCarValues = getCarValues;
const createCarValue = (model, year) => {
    const newCarValue = {
        id: carValueInfo_1.carValues.length + 1,
        model,
        year,
    };
    carValueInfo_1.carValues.push(newCarValue);
    return newCarValue;
};
exports.createCarValue = createCarValue;
const getCarValueById = (carValueId) => {
    return carValueInfo_1.carValues.find((t) => t.id === carValueId);
};
exports.getCarValueById = getCarValueById;
const calculateCarValue = (model, year) => {
    const currentYear = new Date().getFullYear();
    if (!model && !year) {
        return { error: "Both model and year are required." };
    }
    if (!model) {
        return { error: "Model is required." };
    }
    if (!year) {
        return { error: "Year is required." };
    }
    if (year < 1960 || year > currentYear) {
        return { error: `Year must be between 1960 and ${currentYear}.` };
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let carValue = 0;
    for (let i = 0; i < model.length; i++) {
        const char = model.charAt(i).toLowerCase();
        if (char >= "a" && char <= "z") {
            const index = alphabet.indexOf(char);
            carValue += index + 1;
        }
        else if (char >= "0" && char <= "9") {
            carValue += parseInt(char);
        }
    }
    carValue = carValue * 100 + year;
    return carValue;
};
exports.calculateCarValue = calculateCarValue;
const calculateCarValueById = (carValueId) => {
    const carValueInfo = (0, exports.getCarValueById)(carValueId);
    if (!carValueInfo) {
        return { error: `No car value found with id ${carValueId}` };
    }
    return (0, exports.calculateCarValue)(carValueInfo.model, carValueInfo.year);
};
exports.calculateCarValueById = calculateCarValueById;
const calculateCarValueIgnoringNumbers = (model, year) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let carValue = 0;
    for (let i = 0; i < model.length; i++) {
        const char = model.charAt(i).toLowerCase();
        if (char >= "a" && char <= "z") {
            const index = alphabet.indexOf(char);
            carValue += index + 1;
        }
    }
    carValue = carValue * 100 + year;
    return carValue;
};
exports.calculateCarValueIgnoringNumbers = calculateCarValueIgnoringNumbers;
