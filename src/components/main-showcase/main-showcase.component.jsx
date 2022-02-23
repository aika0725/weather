import React, { useState } from "react";

import Header from "../header/header.component";
import WeatherShowcase from "../weather-showcase/weather-showcase.component";

import './main-showcase.css'


const Showcase = () =>{
    const [city, setCity] = useState('Oslo')

    return(
    <div className="main-showcase">
        <Header
            setCity={setCity}
        />
        <WeatherShowcase 
            cityName = {city}
        />
    </div>
)}

export default Showcase
