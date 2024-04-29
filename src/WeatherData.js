import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1 className="text-capitalize">{props.weatherInfo.cityName}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherInfo.date} />
        </li>
        <li className="text-capitalize">{props.weatherInfo.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon
            class="WeatherData-icon"
            iconId={props.weatherInfo.icon}
            size={80}
          />

          <WeatherTemperature
            temperatureCelcius={props.weatherInfo.temperature}
          />
        </div>
        <div className="col-6 weather-description">
          <li>Precipitation: 15%</li>
          <li>Humidity: {props.weatherInfo.humidity}%</li>
          <li>Wind: {props.weatherInfo.wind} km/h</li>
        </div>
      </div>
    </div>
  );
}
