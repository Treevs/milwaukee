import React from 'react';

function WeatherItems(props) {

  return (
    <div className="weather-items">
      {props.weather && 
      props.weather.map(function(item) {
        return (
          <div className="weather-item" key={item.dt}>
            <div>{item.time}</div>
            <div>{item.temp}F</div>
            <div>Feels like {item.feelsLike}F</div>
          </div>
        )
      })
      
      }
    </div>
  )
}

export default WeatherItems;