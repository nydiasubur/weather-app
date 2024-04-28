import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(prop) {
  let apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
  let lat = prop.coord.lat;
  let lon = prop.coord.lon;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(url);
  function handleResponse(response) {
    console.log(url);
    console.log(response.data);
  }

  axios.get(url).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-day">Sat</div>
          <WeatherIcon iconId="01d" size={50} />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temp-max">17° </span>
            <span className="weather-forecast-temp-min">13°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
