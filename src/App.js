import React from 'react';
import Showcase from './components/main-showcase/main-showcase.component';
import Header from './components/header/header.component';
import CityDisplay from './components/city-display/city-display.component';
import './App.css';

const App = () => (
  <div className='main'>
    <Header/>
    <CityDisplay/>
    <Showcase />
  </div>

)

export default App;
