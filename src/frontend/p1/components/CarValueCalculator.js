import React, { useState } from "react";

const CarValueCalculator = () => {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [carValue, setCarValue] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/carValue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, year: parseInt(year) }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error);
        return;
      }

      const data = await response.json();
      const calculatedCarValue = data.car_value;

      setCarValue(calculatedCarValue);
      setError(null);
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
      {error && <p style={{ color: "red" }}>{error}</p>}
      {carValue && <p>Car Value: ${carValue}</p>}
    </div>
  );
};

export default CarValueCalculator;
