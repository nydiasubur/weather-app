import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div class="row">
          <div class="col-10">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div class="col-2">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday, 7:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear"
          />
          <span className="temperature">11</span>
          <span className="temperature-unit">°C</span>
        </div>
        <div className="col-6">
          <li>Precipitation: 15%</li>
          <li>Humidity: 47%</li>
          <li>Wind: 10 km/h</li>
        </div>
      </div>
    </div>
  );
}
