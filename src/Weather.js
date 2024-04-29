import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherData from "./WeatherData.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  let [cityName, updateCityName] = useState("Singapore");
  function handleResponse(response) {
    setWeatherData({
      cityName: cityName,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCityState(event) {
    updateCityName(event.target.value);
  }

  //only when we're getting the response from the API back that we're ging to show the whole application
  if (weatherData.loaded === true) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                onChange={updateCityState}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="search"
                className="btn btn-outline-light w-100"
              />
            </div>
          </div>
        </form>
        <WeatherData weatherInfo={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
