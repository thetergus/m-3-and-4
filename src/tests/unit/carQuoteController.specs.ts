import * as carQuoteService from "../../services/carQuoteService";
import request from "supertest";
import app from "../../app";


describe("GET /carValues", () => {
    test("should respond with error if array not received", async () => {
      // Arrange
      jest.spyOn(carValueService, "getCarValues").mockImplementation(() => {
        throw new Error("An error occurred");
      });
  
      // Act
      const response = await request(app).get("/carValues");
  
      // Assert
      expect(response.statusCode).toBe(500);
    });
  });