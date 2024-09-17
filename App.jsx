import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [inflation, setInflation] = useState("");
  const [yearValues, setYearValues] = useState([]);

  function handleValue(event) {
    setValue(event.target.value);
  }

  function handleInflation(event) {
    setInflation(event.target.value);
  }

  function calculateValues() {
    const years = [];
    let previousValue = parseFloat(value);

    if (isNaN(previousValue) || isNaN(parseFloat(inflation))) {
      return [];
    }

    for (let year = 2024; year <= 2034; year++) {
      years.push({ year: year, value: previousValue });
      previousValue = previousValue * (1 + parseFloat(inflation) / 100);
    }

    return years;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const calculatedValues = calculateValues();
    setYearValues(calculatedValues);
  }

  return (
    <div className="container">
      <h1>Inflation Calculation</h1>

      {}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={handleValue}
        />

        <br />

        <input
          type="number"
          placeholder="Inflation (%)"
          value={inflation}
          onChange={handleInflation}
        />

        <br />

        <p>First number (Value): {value}</p>
        <p>Second number (Inflation %): {inflation}</p>

        {}
        <button type="submit">Calculate</button>
      </form>

      {}
      {yearValues.length > 0 && (
        <table border="1" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {yearValues.map((entry, index) => (
              <tr key={index}>
                <td>{entry.year}</td>
                <td>{entry.value.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
