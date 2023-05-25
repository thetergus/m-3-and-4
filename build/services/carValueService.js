"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValueIgnoringNumbers = exports.calculateCarValueById = exports.calculateCarValue = exports.getCarValueById = exports.createCarValue = exports.getCarValues = void 0;
let carValues = [
    {
        id: 1,
        model: "civic",
        year: 2014,
    },
    {
        id: 2,
        model: "accord",
        year: 2015,
    },
    {
        id: 3,
        model: "sonata",
        year: 2013,
    },
    {
        id: 4,
        model: "camry",
        year: 2011,
    },
    {
        id: 5,
        model: "model 3",
        year: 2022,
    },
    {
        id: 6,
        model: "911",
        year: 2020,
    },
    {
        id: 7,
        model: "altima*",
        year: 2019,
    },
    {
        id: 8,
        model: "a4",
        year: 2018,
    },
];
const getCarValues = () => {
    return carValues;
};
exports.getCarValues = getCarValues;
const createCarValue = (model, year) => {
    const newCarValue = {
        id: carValues.length + 1,
        model,
        year,
    };
    carValues.push(newCarValue);
    return newCarValue;
};
exports.createCarValue = createCarValue;
const getCarValueById = (carValueId) => {
    return carValues.find((t) => t.id === carValueId);
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
