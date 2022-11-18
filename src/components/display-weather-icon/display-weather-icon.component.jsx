import React from "react";

import './display-weather-icon.styles.css'

const WeatherIcon = (props) => {

    return (
        <div className="icon-weather-disply">
            <div className="icon-container"><img className="icon" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='condition' /></div>
            <h2 className="current-temp">{props.temp}℃</h2>
            <p className="min-max-temp">H: {props.temp_max}℃  L:{props.temp_min}℃</p>
        </div>
    )
}

export default WeatherIcon