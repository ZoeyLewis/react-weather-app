import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecastDay(props){
function maxTemperature(){
    let maxTemperature = Math.round(props.data.temp.max)
    return `${maxTemperature}°`
}
function minTemperature(){
    let minTemperature = Math.round(props.data.temp.min)
    return `${minTemperature}°`
}
function day(){
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return weekDays[day]
}
    return (
    <div>
    <div className="row">
    <div className="col">
      <div className="weeklyForecastBackground weekDay">
        <div>{day()}</div>
      </div>
      <div className="weeklyForecast" id="weekly-forecast">
        <div className="forecastIcons">
          <WeatherIcon code={props.data.weather[0].icon} size={45} />
          </div>
          <div className="weeklyTemperature">
              <span className="maxTemp">{maxTemperature()}</span>
              <span> | </span>
              <span className="minTemp">{minTemperature()}</span>
          </div>
        </div>
        </div>
        </div>
        </div>
    )
}