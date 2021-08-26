import React, { useState, useEffect } from 'react';
import WeatherItems from './WeatherItems';
const axios = require('axios');

function Weather(props) {
  const [weather, setWeather] = useState([]);


  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    axios.get('/api/weather')
    .then((response) => {
      console.log(response.data);
      setWeather(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  return (
    <div className="">
      <WeatherItems weather={weather}/>
    </div>
  )
}

export default Weather;