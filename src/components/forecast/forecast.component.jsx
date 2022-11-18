import React, { useState, useEffect } from "react";
import ForecastIcon from "../forecast-icon/forecast-icon.component";

import './forecast.styles.css'

const Forecast = (props) => {
    //const [day, setDay] = useState(null)

    return (
        <div className="forecast-container">
            <ForecastIcon
                lon={props.lon}
                lat={props.lat}
            />


        </div>
    )
}

export default Forecast