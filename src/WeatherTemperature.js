import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="temperature">
        {Math.round(props.temperatureCelcius)}{" "}
      </span>
      <span className="temperature-unit">°C </span>
    </span>
  );
}
