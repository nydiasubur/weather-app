import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherData(props) {
  return (
    <div>
      <h1>{props.weatherInfo.cityName}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherInfo.date} />
        </li>
        <li className="text-capitalize">{props.weatherInfo.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon iconId={props.weatherInfo.icon} />
          {console.log(props.weatherInfo.icon)}
          <span className="temperature">
            {Math.round(props.weatherInfo.temperature)}
          </span>
          <span className="temperature-unit">°C</span>
        </div>
        <div className="col-6">
          <li>Precipitation: 15%</li>
          <li>Humidity: {props.weatherInfo.humidity}%</li>
          <li>Wind: {props.weatherInfo.wind} km/h</li>
        </div>
      </div>
    </div>
  );
}
