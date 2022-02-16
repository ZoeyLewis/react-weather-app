import React from "react";
import "./style/Week.css";

export default function Week() {
  return (
    <div className="week">
      <div className="row">
        <div className="col-2" />
        <div className="weeklyForecastTitle col-4">Weekly Forecast:</div>
      </div>
      <div className="weeklyForecastBackground weekDay row">
        <div className="col-2">Sunday</div>
        <div className="col-2">Monday</div>
        <div className="col-2">Tuesday</div>
        <div className="col-2">Wednesday</div>
        <div className="col-2">Thursday</div>
        <div className="col-2">Friday</div>
      </div>
      <div className="weeklyForecast" id="weekly-forecast">
        <div className="row">
          <img
            className="forecastIcons col-2"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Sunshine"
          />
          <img
            className="forecastIcons col-2"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="Sun with showers"
          />
          <img
            className="forecastIcons col-2"
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="Cloud"
          />
          <img
            className="forecastIcons col-2"
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="Chance of rain"
          />
          <img
            className="forecastIcons col-2"
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="Chance of rain"
          />
          <img
            className="forecastIcons col-2"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Sunshine"
          />
          <div className="weeklyTemperature row">
            <div className="col-2">
              <span className="maxTemp"> 3° |</span>
              <span className="minTemp"> 0° </span>
            </div>
            <div className="col-2">
              <span className="maxTemp"> 3° |</span>
              <span className="minTemp"> 0° </span>
            </div>
            <div className="col-2">
              <span className="maxTemp"> 3° |</span>
              <span className="minTemp"> 0° </span>
            </div>
            <div className="col-2">
              <span className="maxTemp"> 3° |</span>
              <span className="minTemp"> 0° </span>
            </div>
            <div className="col-2">
              <span className="maxTemp"> 3° |</span>
              <span className="minTemp"> 0° </span>
            </div>
            <div className="col-2">
              <span className="maxTemp"> 3° |</span>
              <span className="minTemp"> 0° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
