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
      <h1 style={{ marginTop: "50px", fontSize: "48px" }}>
        Car Value Generator
      </h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
        <label style={{ margin: "20px", fontSize: "24px" }}>
          Model:
          <input
            type="text"
            value={model}
            onChange={(event) => setModel(event.target.value)}
            style={{ margin: "20px", fontSize: "24px" }}
          />
        </label>
        <br />
        <label style={{ margin: "20px", fontSize: "24px" }}>
          Year:
          <input
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            style={{ margin: "20px", fontSize: "24px" }}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{ margin: "20px", padding: "10px", fontSize: "24px" }}
        >
          Generate
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {carValue && <p style={{ fontSize: "24px" }}>Car Value: ${carValue}</p>}
    </div>
  );
};

export default CarValueCalculator;
