import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <span>
        <span className="temperature">
          {Math.round(props.temperatureCelcius)}{" "}
        </span>
        <span className="temperature-unit">°C | </span>
        <span className="temperature-unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">
          {Math.round((props.temperatureCelcius * 9) / 5 + 32)}{" "}
        </span>
        <span className="temperature-unit">
          <a href="/" onClick={showCelcius}>
            °C |
          </a>
        </span>
        <span className="temperature-unit"> °F </span>
      </span>
    );
  }
}
