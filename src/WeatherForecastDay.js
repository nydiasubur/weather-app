import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temp.max);
    return temperature;
  }
  function minTemperature() {
    let temperature = Math.round(props.forecastData.temp.min);
    return temperature;
  }
  function formatDay() {
    let date = new Date(props.forecastData.dt * 1000);
    let days = [
      "sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursay",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  }
  return (
    <div>
      <div className="weather-forecast-day">{formatDay()}</div>
      <WeatherIcon iconId={props.forecastData.weather[0].icon} size={50} />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temp-max"> {maxTemperature()}° </span>
        <span className="weather-forecast-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
