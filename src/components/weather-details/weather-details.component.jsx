import React from "react";

import './weather-details.styles.css'

const WeatherDetails = (props) =>{

    return(
        <div className="weather-details">
            <span className="description">weather.description</span>
            <span className="wind-speed">Wind speed</span>
            <span className="cloudiness">Cloudiness</span>
            <span className="humidity">humidity</span>
        </div>
    )
}

export default WeatherDetails