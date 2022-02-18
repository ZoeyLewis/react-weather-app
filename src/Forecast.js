import React from "react";
import "./style/Forecast.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"
import TodayTemperature from "./TodayTemperature.js"

export default function Forecast(props) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="ps-0 col-2" />
          <h1 className="cityName col-4 text-uppercase">{props.data.city}</h1>
          <div className="currentWeather col-6">
            <div id="updated-date">Last updated:</div>
            <div id="today-date"><FormattedDate date={props.data.date}/></div>
            <div id="today-temp">
                <TodayTemperature celsius={props.data.temperature}/>
              <WeatherIcon code={props.data.icon} alt={props.data.description} size={64}
                id="today-weather-emoji"/>
            </div>
            
            <div id="today-temp-tag" className="text-capitalize">
              {props.data.description}
            </div>
            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="windSpeed">Wind: {props.data.windSpeed}m/h</div>
          </div>
        </div>
      </div>
    );
  }
