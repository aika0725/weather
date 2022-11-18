import React from "react";

import './city-display.styles.css'

const CityDisplay = (props) =>{

    return (
        <div className="city-display"> {props.cityName}, {props.countryCode} </div>
    )
}

export default CityDisplay