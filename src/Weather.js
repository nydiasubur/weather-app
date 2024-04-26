import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  let cityName = props.cityName;
  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }

  //only when we're getting the response from the API back that we're ging to show the whole application
  if (weatherData.loaded === true) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{cityName}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt="icon of weather" />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="temperature-unit">°C</span>
          </div>
          <div className="col-6">
            <li>Precipitation: 15%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading..";
  }
}
