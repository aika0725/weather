import React, { useState, useEffect } from 'react';
import Showcase from './components/main-showcase/main-showcase.component';
import Header from './components/header/header.component';
import CityDisplay from './components/city-display/city-display.component';
import './App.css';

const App = () =>{ 
  const [searchText, setSearchText] = useState('Oslo')
  const [city, setCity] = useState(null)
  const [country, setCountry] = useState(null)

  const [cloudiness, setCloudiness] = useState(null)
  const [wind, setWind] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [description, setDescription] = useState(null)

  const [temp, setTemp] = useState(null)
  const [temp_min, setTemp_min] = useState(null)
  const [temp_max, setTemp_max] = useState(null)
  const [icon, setIcon] = useState(null)
  const [condition, setCondition] = useState(null)

  const [lon, setLon] = useState(-9.1)
  const [lat, setLat] = useState(38)

  console.log(searchText)
  
  useEffect(() => {
    const fetchFunc = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=9b73ae9ab56b97f2a5b614c3df0b4365`)
        const resJson = await response.json()

        setCity(resJson.name)
        setCountry(resJson.sys.country)

        setCloudiness(resJson.clouds.all)
        setWind(resJson.wind.speed)
        setHumidity(resJson.main.humidity)
        setDescription(resJson.weather[0].description)

        setTemp(resJson.main.temp)
        setTemp_min(resJson.main.temp_min)
        setTemp_max(resJson.main.temp_max)
        setIcon(resJson.weather[0].icon)
        setCondition(resJson.weather[0].main)

        setLon(resJson.coord.lon)
        setLat(resJson.coord.lat)

        console.log(resJson)
    }
    fetchFunc()
}, [searchText])
  
  return(
  <div className='main'>
    <Header
      setSearchText = {setSearchText}
    />
    <CityDisplay
      cityName = {city}
      countryCode = {country}
    />
    <Showcase 
      cityName = {city}

      temp = {temp}
      temp_min = {temp_min}
      temp_max = {temp_max}
      icon = {icon}
      condition={condition}

      cloudiness={cloudiness}
      wind={wind}
      humidity={humidity}
      description={description}

      lon = {lon}
      lat = {lat}
    />
  </div>

)}

export default App;
