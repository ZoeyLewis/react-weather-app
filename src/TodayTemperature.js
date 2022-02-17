import React, { useState } from "react"

export default function TodayTemperature(props){
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheight(event) {
event.preventDefault();
setUnit("fahrenheight");
    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }
    if (unit === "celsius") {
    return (
        <div>
<span id="degrees">{props.celsius}</span>
              <span id="unit">°C | <a href="/" onClick={convertToFahrenheight}>°F</a></span>
              </div>
              )}
            else {
                let fahrenheight = (props.celsius * 9/5) + 32

                return (
                    <div>
                    <span id="degrees">{Math.round(fahrenheight)}</span>
                                  <span id="unit"><a href="/" onClick={convertToCelsius}>°C</a> | °F</span>
                                  </div>
                                  )
            }}