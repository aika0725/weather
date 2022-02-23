import React, { useEffect, useState } from "react";

const WeatherShowcase = (props) => { //props.cityName
    const [weather, setWeather] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    const [icon, setIcon] = useState(null)
    const [condition, setCondition] = useState(null)

    useEffect(() => {
        const fetchFunc = async () => {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=933d6b84e5a54ccda95231846222202&q=${props.cityName}&aqi=no`)
            const resJson = await response.json()
            setIcon(resJson.current.condition.icon)
            setCondition(resJson.current.condition.text)
            setWeather(resJson.current.temp_c)
            setCountry(resJson.location.country)
            setCity(resJson.location.name)
            console.log(resJson)
        }
        fetchFunc()
    }, [props.cityName])

    return (
        <div
            className="weather-showcase"
        >
            <p>{city}, {country}</p>
            <h2>{weather}℃</h2>
            <img src={`http:${icon}`} alt={condition}/>

        </div>
    )
}

export default WeatherShowcase