import React, { useState, useEffect } from "react";
import "./style/Week.css";
import axios from "axios";
import WeeklyForecastDay from "./WeeklyForecastDay"

export default function Week(props) {
  let [loaded, setLoaded] = useState(false);
  let [weeklyForecast, setWeeklyForecast] = useState(null);

  function handleResponse(response){
setWeeklyForecast(response.data.daily)
setLoaded(true);
  }
useEffect(() => {
setLoaded(false);
}, [props.longitude, props.langitude]);
  
  if (loaded) {
    return (
    <div className="week">
      <div className="row weeklyForecastBackground">
        <div className="col-2" />
        <div className="weeklyForecastTitle col-4">Weekly Forecast:</div>
      </div>
      <div className="row">
      {weeklyForecast.map(function(dailyForecast, index) {
        if (index < 5){
          return (
        <div className="col" key={index}>
        <WeeklyForecastDay data={dailyForecast}/>
        </div>
          )
        }
        else {
          return null
        }
        
  })}
  </div>
  </div>
    );}
  else {
    const apiKey = `39bb51e02e1cb29597d2f2e3f55efcc3`
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    return null;
  }
}
