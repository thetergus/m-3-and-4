"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValue = exports.getCarValueById = exports.createCarValue = exports.getCarValues = void 0;
var carValues = [];
var getCarValues = function () {
    return carValues;
};
exports.getCarValues = getCarValues;
var createCarValue = function (model, year) {
    var newCarValue = {
        id: carValues.length + 1,
        model: model,
        year: year,
    };
    carValues.push(newCarValue);
    return newCarValue;
};
exports.createCarValue = createCarValue;
var getCarValueById = function (carValueId) {
    return carValues.find(function (t) { return t.id === carValueId; });
};
exports.getCarValueById = getCarValueById;
var calculateCarValue = function (model, year) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var carValue = 0;
    for (var i = 0; i < model.length; i++) {
        var char = model.charAt(i).toLowerCase();
        if (char >= "a" && char <= "z") {
            var index = alphabet.indexOf(char);
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
