import { WeatherSvg } from "weather-icons-animated";
import React from "react";

export default function weatherIcon(props) {
  let iconId = props.iconId;
  console.log(`iconId:${iconId}`);
  let iconMap = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partlycloudy",
    "02n": "cloudy",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "fog",
    "04n": "fog",
    "09d": "pouring",
    "09n": "pouring",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "lightning-rainy",
    "11n": "lightning-rainy",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "windy-variant",
  };
  return (
    <WeatherSvg
      state={iconMap[iconId]}
      width={props.size}
      height={props.size}
    />
  );
}
