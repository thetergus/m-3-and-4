const { app, calculateQuote } = require('./p3api');

describe('calculateQuote', () => {

  test('TEST 01 - Ideal scenario, value higher than risk', () => {
    const expectedQuote = { yearly_quote: 16.38, monthly_quote:1.36 };
    expect(calculateQuote(655, 2.5)).toEqual(expectedQuote);
  });

 test('TEST 02 - Tried to proceed with no input', () => {
    const expectedQuote = calculateQuote(undefined, undefined);
    expect(expectedQuote).toEqual({ error: 'Invalid input. Please input all fields' });
  });

test('TEST 03 - Tried to proceed only with input 2', () => {   
  const expectedQuote = calculateQuote(undefined, 5);
  expect(expectedQuote).toEqual({ error: 'Invalid input. Please input all fields' });
});

test('TEST 04 - Tried to proceed only with input 1', () => {   
    const expectedQuote = calculateQuote(1, undefined);
    expect(expectedQuote).toEqual({ error: 'Invalid input. Please input all fields' });
  });

  test('TEST 05 - Scenario with value lower than risk', () => {
    const expectedQuote = { yearly_quote: 0.2, monthly_quote:0.02 };
    expect(calculateQuote(4, 5)).toEqual(expectedQuote);
  });

  test('TEST 06 - Scenario with Risk and Car Value at same value ', () => {
    const expectedQuote = { yearly_quote: 0.25, monthly_quote: 0.02 };
    expect(calculateQuote(5, 5)).toEqual(expectedQuote);
  });

 test('TEST 07 - Scenario with input 1 string and input 2 correct', () => {
    const expectedQuote = calculateQuote("Corolla", 5);
    expect(expectedQuote).toEqual({ error: 'Invalid input. Make sure both fields are numbers only' });
  });
  
  test('TEST 08 - Scenario with input 1 correct  and input 2 string', () => {
    const expectedQuote = calculateQuote(17549, "Ford");
    expect(expectedQuote).toEqual({ error: 'Invalid input. Make sure both fields are numbers only' });
  }); 

  test('TEST 09 - Scenario with input 1 string  and input 2 string', () => {
    const expectedQuote = calculateQuote("Ford", "Transit");
    expect(expectedQuote).toEqual({ error: 'Invalid input. Make sure both fields are numbers only' });
  }); 

  test('TEST 10 - Scenario with input 1 negative and input 2 correct', () => {
    const result = calculateQuote(-1001, 5);
    expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
  });

  test('TEST 11 - Scenario with input 1 correct and input 2 negative', () => {
    const result = calculateQuote(3301, -3);
    expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
  });

  test('TEST 12 - Scenario with input 1 negative and input 2 negative', () => {
    const result = calculateQuote(-15781, -3);
    expect(result).toEqual({ error: 'Invalid input. The values cannot be negative or zero' });
  });

  test('TEST 13 - with input 1 undefined and input 2 string', () => {
    const result = calculateQuote(undefined, 'Sprinter');
    expect(result).toEqual({ error: 'Invalid input. Please input all fields' });
  });
  
  });
