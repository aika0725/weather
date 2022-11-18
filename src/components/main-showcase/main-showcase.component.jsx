import React from "react";
import TodayWeatherShowcase from "../today-weather-showcase/today-weather-showcase.component";
import Forecast from "../forecast/forecast.component";
import Activities from "../something-cool/activites.component";

import './main-showcase.css'


const Showcase = (props) => {

    return (
        <div className="main-showcase">

            <TodayWeatherShowcase
                temp={props.temp}
                temp_min={props.temp_min}
                temp_max={props.temp_max}
                icon={props.icon}
                condition={props.condition}

                cloudiness={props.cloudiness}
                wind={props.wind}
                humidity={props.humidity}
                description={props.description}
            />

            <Forecast
                lon={props.lon}
                lat={props.lat}
            />
            <Activities />
        </div>
    )
}

export default Showcase
