import React from "react";
import "./style/Week.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Week(props) {
  const apiKey = `39bb51e02e1cb29597d2f2e3f55efcc3`
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=metric`

  function handleResponse(response){
console.log(response.data)
  }
axios.get(apiUrl).then(handleResponse)
  
  return (
    <div className="week">
      <div className="row">
        <div className="col-2" />
        <div className="weeklyForecastTitle col-4">Weekly Forecast:</div>
      </div>
    <div className="row">
    <div className="col">
      <div className="weeklyForecastBackground weekDay">
        <div>Sunday</div>
      </div>
      <div className="weeklyForecast" id="weekly-forecast">
        <div className="forecastIcons">
          <WeatherIcon code={"10d"} size={45} />
          </div>
          <div className="weeklyTemperature">
              <span className="maxTemp"> 3° |</span>
              <span className="minTemp"> 0° </span>
          </div>
        </div>
        </div>
        </div>
      </div>
  );
}
