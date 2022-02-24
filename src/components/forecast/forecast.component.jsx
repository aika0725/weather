import React from "react";
import ForecastIcon from "../forecast-icon/forecast-icon.component";

import './forecast.styles.css'

const Forecast = (props) =>{

    return(
        <div className="forecast-container">
            <ForecastIcon/>
        </div>
    )
}

export default Forecast