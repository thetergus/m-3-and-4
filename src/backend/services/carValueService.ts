interface CarInfo {
  id: number;
  model: string;
  year: number;
}

let carValues: CarInfo[] = [];

export const getCarValues = (): CarInfo[] => {
  return carValues;
};

export const createCarValue = (model: string, year: number): CarInfo => {
  const newCarValue: CarInfo = {
    id: carValues.length + 1,
    model,
    year,
  };

  carValues.push(newCarValue);

  return newCarValue;
};

export const getCarValueById = (carValueId: number): CarInfo | undefined => {
  return carValues.find((t) => t.id === carValueId);
};

export const calculateCarValue = (model: string, year: number): number => {
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
