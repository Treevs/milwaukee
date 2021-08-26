
const router = require('express').Router();
const axios = require('axios');

const { format } = require('date-fns');
const { response } = require('express');
function kelvinToFahrenheit(kelvin) {
  return Math.round((kelvin - 273.15) * 9/5 + 32);
}
router.get('/', (req, res, next) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?id=5263045&appid=${process.env.OPEN_WEATHER_API_KEY}`
  axios.get(url)
    .then(function (response) {
      const weatherArr = response.data.list
      weatherArr.forEach(element => {
        element.time = format(element.dt*1000, "p")
        element.feelsLike = kelvinToFahrenheit(element.main.feels_like)
        element.temp = kelvinToFahrenheit(element.main.temp)
      });
      return res.json(weatherArr)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return res.json({error: "error"})
    })
});




module.exports = router;