const carValueService = require("../services/carValueService");

describe("carValueService", () => {
  describe("getCarValues", () => {
    it("should return an array of car values", () => {
      // Arrange
      // no set up required for this test
      // Act
      const carValues = carValueService.getCarValues();
      //   Assert
      expect(Array.isArray(carValues)).toBe(true);
    });
  });

  describe("createCarValue", () => {
    it("should create a new car value and add it to the array of car values", () => {
      // Arrange
      const model = "Model 3";
      const year = 2022;
      //   Act
      const newCarValue = carValueService.createCarValue(model, year);
      //   Assert
      expect(newCarValue).toEqual({
        id: expect.any(Number),
        model,
        year,
      });
      // Act
      const carValues = carValueService.getCarValues();
      //   Assert
      expect(carValues).toContain(newCarValue);
    });
  });

  describe("getCarValueById", () => {
    it("should return the car value with the matching id", () => {
      // Arrange
      const model = "Model 3";
      const year = 2022;
      const newCarValue = carValueService.createCarValue(model, year);
      //   Act
      const matchedCarValue = carValueService.getCarValueById(newCarValue.id);
      //   Assert
      expect(matchedCarValue).toEqual(newCarValue);
    });
  });

  // test cases correct scenario/Numbers only is ok/empty model/empty year/both null
  describe("calculateCarValue", () => {
    it("should calculate the car value based on the model and year", () => {
      // Arrange
      const model = "Model 3";
      const year = 2022;

      // Act
      const carValue = carValueService.calculateCarValue(model, year);

      // Assert
      expect(carValue).toBe(7222);
    });
  });
});
