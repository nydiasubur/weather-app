import ReactAnimatedWeather from "react-animated-weather";
import React from "react";

export default function weatherIcon(props) {
  let iconId = props.iconId;
  console.log(`iconId:${iconId}`);
  let iconMap = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={iconMap[iconId]}
      color="white"
      size={50}
      animate={true}
    />
  );
}
