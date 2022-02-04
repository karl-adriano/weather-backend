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

app.get("/v1/hello", greet)

function greet(request, response) {
    response.json({
      "greeting": "Karl says Hello" 
    })
}