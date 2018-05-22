const express = require('express'),
      app = express (),  
      bodyParser = require('body-parser'),
      cors = require('cors'),
      {getWeather, faveCity} = require (`${__dirname}/controllers/weather-controller`),
      port = 3001

      
 app.use(bodyParser.json());
 app.use(cors());    

app.get(`/api/getweather/:city`, getWeather)
app.post('/api/fave', faveCity)
      
app.listen(port, () => console.log(`hi there im listening ${port}`))