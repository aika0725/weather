import React from "react";
import WeatherIcon from "../display-weather-icon/display-weather-icon.component";
import WeatherDetails from "../weather-details/weather-details.component";

import './today-weather-showcase.styles.css'

const TodayWeatherShowcase = (props) => {


    return (
        <div className="today-weather-showcase">
            <div className="current-weather">
                <WeatherIcon
                    temp={props.temp}
                    temp_min={props.temp_min}
                    temp_max={props.temp_max}
                    icon={props.icon}
                    condition={props.condition}
                />
                <WeatherDetails
                    cloudiness={props.cloudiness}
                    wind={props.wind}
                    humidity={props.humidity}
                    description={props.description}
                />
            </div>

        </div>
    )
}

export default TodayWeatherShowcase