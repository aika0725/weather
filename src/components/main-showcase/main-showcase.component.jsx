import React, { useState } from "react";
import WeatherShowcase from "../today-weather-showcase/today-weather-showcase.component";
import Forecast from "../forecast/forecast.component";
import Activities from "../something-cool/activites.component";

import './main-showcase.css'


const Showcase = () =>{
    const [location, setLocation] = useState('Oslo')

    return(
    <div className="main-showcase">

        <WeatherShowcase 
            location = {location}
        />

        <Forecast/>
        <Activities/>
    </div>
)}

export default Showcase
