import React, { useState } from "react";
import "./style/Search.css";
import axios from "axios";
import ReactLoading from "react-loading";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.city);
  function handleResponse(response) {
    setWeather({
      loaded: true,
      date: new Date (response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      city:response.data.name,
      icon: response.data.weather[0].icon
    });
  }

  function citySearch(){
    const apiKey = `eb9c72edfe9b2e4dc537230ab5404717`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault()
    citySearch()
  }
  function handleCityChange(event){
setCity(event.target.value);
  }
  if (weather.loaded) { return (
    <div className="weatherData">
    <form id="city-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-3">
          <label className="cityLabel">
            <strong>✈ Change City:</strong>
          </label>
        </div>
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            id="city-search-input"
            placeholder="e.g. Sydney"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div id="location-button" className="col-3">
          <button type="button" className="btn btn-info">
            Current Location
          </button>
        </div>
      </div>
    </form>
    <Forecast data={weather}/>
    </div>
  )}
  else {
    citySearch();
    return (
      <div className="loadingBars">
        <ReactLoading type="cylon" color="#006ec5" height={200} width={100} />
      </div>
    );
  }
}
