import React from "react";

import './forecast-icon.styles.css'

const ForecastIcon = () => {

    return(
        <div className="forecast-item">
            <div className="forecast-icon"><img className="icon" src={`http://openweathermap.org/img/wn/02d.png`} alt={'condition'} /></div>
            <h2 className="forecast-temp">{Math.round(280 - 273.15)}℃</h2>
            <p className="forecast-min-max-temp">H: 20℃  L:2℃</p>
        </div>
    )
}

export default ForecastIcon
