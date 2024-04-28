import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(prop) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [prop.coord]);
  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded === false) {
    let apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
    let lat = prop.coord.lat;
    let lon = prop.coord.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (currentForecastDay, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay forecastData={currentForecastDay} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
