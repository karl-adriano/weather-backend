"use strict"

var express = require("express")
var app = express()

app.listen(3000)
console.log("Node.js Express server is running on port 3000...")

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  const allowedOrigins = ['https://editor.swagger.io', 'https://hoppscotch.io'];
  const origin = req.headers.origin;
      
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
      
  // Request methods you wish to allow eg: GET, POST, OPTIONS, PUT, PATCH, DELETE
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  // Pass to next layer of middleware
  next();
});
  
app.get("/v1/weather", get_weather)

function get_weather(request, response) {
    response.json( {
      "coord": {
        "lon": -123.262,
        "lat": 44.5646
      },
      "weather": [
        {
          "id": 741,
          "main": "Fog",
          "description": "fog",
          "icon": "50n"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 276.57,
        "feels_like": 276.57,
        "temp_min": 274.72,
        "temp_max": 279.05,
        "pressure": 1024,
        "humidity": 79
      },
      "visibility": 805,
      "wind": {
        "speed": 0,
        "deg": 0
      },
      "clouds": {
        "all": 100
      },
      "dt": 1642320503,
      "sys": {
        "type": 2,
        "id": 2012991,
        "country": "US",
        "sunrise": 1642347934,
        "sunset": 1642381185
      },
      "timezone": -28800,
      "id": 5720727,
      "name": "Corvallis",
      "cod": 200
    } )
}