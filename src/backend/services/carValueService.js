let carValues = [];

exports.getCarValues = () => {
  return carValues;
};

exports.createCarValue = (model, year) => {
  const newCarValue = {
    id: carValues.length + 1,
    model,
    year,
  };

  carValues.push(newCarValue);

  return newCarValue;
};

exports.getCarValueById = (carValueId) => {
  return carValues.find((t) => t.id === carValueId);
};

exports.calculateCarValue = (model, year) => {
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
