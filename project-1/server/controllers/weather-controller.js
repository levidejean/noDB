// import .dotenv to make api keys visible to document;
require(`dotenv`).config();

const axios = require("axios");

//create a weather array to push response from getWeather into;
const cities = [];

const faveCity = (req, res) => {
 city.push(req.body.city);
 res.status(200).json(cities);
  
}


const getWeather = (req, res) => {
  const { city } = req.params;

  console.log(`LOOK HERE`, process.env.REACT_APP_WEATHER_API);
  axios
    .get(
    
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${
        process.env.REACT_APP_WEATHER_API
      }`
    )
    .then(results => {

      console.log(results.data);
      res.status(200).send(results.data);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
    });
};

module.exports = { getWeather, faveCity };
