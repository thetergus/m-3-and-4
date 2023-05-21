"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carInsuranceService_1 = require("../services/carInsuranceService");
describe('calculateQuote', function () {
    test('Value HIGHER than Risk', function () {
        //Arrange
        var expectedQuote = { yearly_quote: 113.88, monthly_quote: 9.49 };
        //Act-Assert
        expect((0, carInsuranceService_1.calculateQuote)(4555, 2.5)).toEqual(expectedQuote);
    });
    test('Value LOWER than Risk', function () {
        //Arrange
        var expectedQuote = { yearly_quote: 0.14, monthly_quote: 0.01 };
        //Act-Assert
        expect((0, carInsuranceService_1.calculateQuote)(3, 4.5)).toEqual(expectedQuote);
    });
    test('Value EQUAL to Risk ', function () {
        //Arrange    
        var expectedQuote = { yearly_quote: 0.25, monthly_quote: 0.02 };
        //Act-Assert
        expect((0, carInsuranceService_1.calculateQuote)(5, 5)).toEqual(expectedQuote);
    });
    test('NEGATIVE Value, possitive Risk', function () {
        //Arrange
        var result = (0, carInsuranceService_1.calculateQuote)(-1001, 5);
        //Act-Assert
        expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
    });
    test('Positive value NEGATIVE Risk', function () {
        //Arrange
        var result = (0, carInsuranceService_1.calculateQuote)(3301, -3);
        //Act-Assert
        expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
    });
    test('Double Negative', function () {
        //Arrange
        var result = (0, carInsuranceService_1.calculateQuote)(-15781, -3);
        //Act-Assert
        expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
    });
    // Tests rendered useless by Typescript
    // test('TEST 07 - Scenario with input 1 string and input 2 correct', () => {
    //   const expectedQuote = calculateQuote("Corolla", 5);
    //   expect(expectedQuote).toEqual({ error: 'Invalid input. Make sure both fields are numbers only' });
    // });
    // test('TEST 08 - Scenario with input 1 correct and input 2 string', () => {
    //   const expectedQuote = calculateQuote(17549, "Ford");
    //   expect(expectedQuote).toEqual({ error: 'Invalid input. Make sure both fields are numbers only' });
    // });
    // test('TEST 09 - Scenario with input 1 string and input 2 string', () => {
    //   const expectedQuote = calculateQuote("Ford", "Transit");
    //   expect(expectedQuote).toEqual({ error: 'Invalid input. Make sure both fields are numbers only' });
    // });
    // test('TEST 13 - with input 1 undefined and input 2 string', () => {
    //   const result = calculateQuote(undefined, 'Sprinter');
    //   expect(result).toEqual({ error: 'Invalid input. Please input all fields' });
});
