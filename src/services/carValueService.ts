import { CarValueInfo } from "../types/carValueInfo";

let carValues: CarValueInfo[] = [];

export const getCarValues = (): CarValueInfo[] => {
  return carValues;
};

export const createCarValue = (model: string, year: number): CarValueInfo => {
  const newCarValue: CarValueInfo = {
    id: carValues.length + 1,
    model,
    year,
  };

  carValues.push(newCarValue);

  return newCarValue;
};

export const getCarValueById = (
  carValueId: number
): CarValueInfo | undefined => {
  return carValues.find((t) => t.id === carValueId);
};

export const calculateCarValue = (
  model: string | null,
  year: number | null
): number | { error: string } => {
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
    } else if (char >= "0" && char <= "9") {
      carValue += parseInt(char);
    }
  }
  carValue = carValue * 100 + year;
  return carValue;
};

export const calculateCarValueById = (
  carValueId: number
): number | { error: string } => {
  const carValueInfo = getCarValueById(carValueId);
  if (!carValueInfo) {
    return { error: `No car value found with id ${carValueId}` };
  }
  return calculateCarValue(carValueInfo.model, carValueInfo.year);
};

export const calculateCarValueIgnoringNumbers = (
  model: string,
  year: number
): number => {
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
