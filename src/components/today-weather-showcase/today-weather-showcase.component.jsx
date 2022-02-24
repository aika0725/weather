import React, { useEffect, useState } from "react";
import WeatherIcon from "../display-weather-icon/display-weather-icon.component";
import WeatherDetails from "../weather-details/weather-details.component";

import './today-weather-showcase.styles.css'

const TodayWeatherShowcase = (props) => {

    const [weather, setWeather] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    const [icon, setIcon] = useState(null)
    const [condition, setCondition] = useState(null)

    useEffect(() => {
        const fetchFunc = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=9b73ae9ab56b97f2a5b614c3df0b4365`)
            const resJson = await response.json()
            setIcon(resJson.weather.icon)
            setCondition(resJson.weather.main)
            setWeather(resJson.main.temp)
            setCountry(resJson.sys.country)
            setCity(resJson.name)
            console.log(resJson)
        }
        fetchFunc()
    }, [props.location])



    return (
        <div className="today-weather-showcase">
            <div className="current-weather">
                <WeatherIcon/>
                <WeatherDetails/>
            </div>

        </div>
    )
}

export default TodayWeatherShowcase