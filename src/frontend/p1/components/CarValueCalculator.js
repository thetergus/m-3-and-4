import React, { useState } from "react";

const CarValueCalculator = () => {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [carValue, setCarValue] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/carValue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, year }),
      });

      const data = await response.json();
      const calculatedCarValue = data.car_value;

      setCarValue(calculatedCarValue);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <h1>Car Value Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Model:
          <input
            type="text"
            value={model}
            onChange={(event) => setModel(event.target.value)}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      {carValue && <p>Car Value: ${carValue}</p>}
    </div>
  );
};

export default CarValueCalculator;
