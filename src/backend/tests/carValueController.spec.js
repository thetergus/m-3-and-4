"use strict";
var carValueService = require("../services/carValueService");
describe("carValueService", function () {
    describe("getCarValues", function () {
        test("should return an array of car values", function () {
            // Arrange
            // no set up required for this test
            // Act
            var carValues = carValueService.getCarValues();
            // Assert
            expect(Array.isArray(carValues)).toBe(true);
        });
    });
    describe("createCarValue", function () {
        test("should create a new car value and add it to the array of car values", function () {
            // Arrange
            var model = "Model 3";
            var year = 2022;
            // Act
            var newCarValue = carValueService.createCarValue(model, year);
            // Assert
            expect(newCarValue).toEqual({
                id: expect.any(Number),
                model: model,
                year: year,
            });
            // Act
            var carValues = carValueService.getCarValues();
            // Assert
            expect(carValues).toContain(newCarValue);
        });
    });
    describe("getCarValueById", function () {
        test("should return the car value with the matching id", function () {
            // Arrange
            var model = "Model 3";
            var year = 2022;
            var newCarValue = carValueService.createCarValue(model, year);
            // Act
            var matchedCarValue = carValueService.getCarValueById(newCarValue.id);
            // Assert
            expect(matchedCarValue).toEqual(newCarValue);
        });
    });
    // test cases correct scenario/Numbers only is ok/empty model/empty year/both null
    describe("calculateCarValue", function () {
        test("should calculate the car value based on the model and year", function () {
            // Arrange
            var model = "Model 3";
            var year = 2022;
            // Act
            var carValue = carValueService.calculateCarValue(model, year);
            // Assert
            expect(carValue).toBe(7222);
        });
    });
});
