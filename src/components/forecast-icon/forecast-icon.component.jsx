import React, {useState, useEffect }from "react";

import './forecast-icon.styles.css'

const ForecastIcon = (props) => {
    const forecastInit = {"temp":{"day":null}}

    const [forecastTemp, setforecastTemp] = useState([{},
        forecastInit,forecastInit,forecastInit,
        forecastInit,forecastInit,forecastInit,forecastInit])
    useEffect(() => {
        const fetchFunc = async () => {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=minutely,hourly,alerts&units=metric&appid=b9f05262f6049e53d601ad75aa6cae58`)
            const resJson = await response.json()

            setforecastTemp(resJson.daily)

            console.log(resJson)
            console.log(resJson.daily)

        }
        fetchFunc()

    }, [props.lon, props.lat])

    // console.log(forecastTemp[1].temp.day)

    return(
        <div className="forecast-items">

            <div className="forecast-item">
                <div className="forecast-icon">
                <img className="icon" src={`http://openweathermap.org/img/wn/02d.png`} alt={'condition'} /></div>
                <h2 className="forecast-temp">{Math.round(forecastTemp[1].temp.day)}℃</h2>
                <p className="forecast-min-max-temp">H: 20℃ L:2℃</p>
            </div>
            <div className="forecast-item">
                <div className="forecast-icon">
                <img className="icon" src={`http://openweathermap.org/img/wn/02d.png`} alt={'condition'} /></div>
                <h2 className="forecast-temp">{forecastTemp[1].temp.day}℃</h2>
                <p className="forecast-min-max-temp">H: 20℃ L:2℃</p>
            </div>
        </div>
    )
}

export default ForecastIcon
