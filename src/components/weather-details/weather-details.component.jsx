import React from "react";

import './weather-details.styles.css'

const WeatherDetails = (props) =>{

    return(
        <div className="weather-details">
            <span className="description">{props.description}</span>
            <span className="wind-speed">Wind speed: {props.wind}m/sec</span>
            <span className="cloudiness">Cloudiness: {props.cloudiness}%</span>
            <span className="humidity">humidity: {props.humidity}%</span>
        </div>
    )
}

export default WeatherDetails