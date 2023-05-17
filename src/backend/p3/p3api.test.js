import { calculateQuote } from './p3api';

test('calculateQuote', async () => {
  // Mock the fetch function
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ monthly_premium: 1.36, yearly_premium: 16.38 }),
    })
  );

  // Make the API call
  const result =  await calculateQuote(655, 2.5);

  // Assert the response
  expect(result).toEqual({ monthly_premium: 1.36, yearly_premium: 16.38 });

  // Restore the fetch function
  global.fetch.mockRestore();
});


//---------------------------

// const request = require('supertest')

// const calculateQuote = require('./p3api');
// test ('Ideal type of input #1, 655 Car_value 2.5 RIsk_Rating, yearly premium 16.38, monthly premium 1.36', ()=>{
//   let expectedQuote ={
//     yearly:16.38,
//     monthly:1.36
//   }  
//   expect(calculateQuote(655,2.5)).toEqual(expectedQuote)

// })


//---------------------------

// const request = require('supertest');
// const app = require('./p3api');

// describe('POST /calculateQuote', () => {
//   let server;

//   beforeAll((done) => {
//     server = app.listen(done);
//   });

//   afterAll((done) => {
//     server.close(done);
//   });

//   test('should calculate monthly and yearly insurance quotes correctly', async () => {
//     const requestBody = {
//       car_value: 20000,
//       risk_rating: 2.5,
//     };

//     const expectedResponse = {
//       monthly_premium: 416.67,
//       yearly_premium: 5000,
//     };

//     const response = await request(server)
//       .post('/calculateQuote')
//       .send(requestBody)
//       .expect(200);

//     expect(response.body).toEqual(expectedResponse);
//   });

//   test('should return 400 status with error message for invalid input', async () => {
//     const requestBody = {
//       car_value: 20000,
//       // Missing risk_rating
//     };

//     const expectedResponse = {
//       error: 'Invalid input',
//     };

//     const response = await request(server)
//       .post('/calculateQuote')
//       .send(requestBody)
//       .expect(400);

//     expect(response.body).toEqual(expectedResponse);
//   });
// });
