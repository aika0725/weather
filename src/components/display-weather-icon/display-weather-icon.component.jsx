import React from "react";

import './display-weather-icon.styles.css'

const WeatherIcon = (props) => {

    return (
        <div className="icon-weather-disply">
            <div className="icon-container"><img className="icon" src={`http://openweathermap.org/img/wn/02d@2x.png`} alt={'condition'} /></div>
            <h2 className="current-temp">{Math.round(280 - 273.15)}℃</h2>
            <p className="min-max-temp">H: 20℃  L:2℃</p>
        </div>
    )
}

export default WeatherIcon