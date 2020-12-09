const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const weatherController = require("./services/weatherController")
const middlewares = require("./services/middlewares")

//CORS Middleware
app.use(middlewares.CORS);

//GET "/" => Gives information about the use of de Express-NodeJS APP 
app.get("/", weatherController.infoGET)
//GET "/myWeather" => Gives information about the city in the request
app.get("/myWeather", weatherController.getWeather);

//Server
app.listen(PORT, () => {
  console.log(`Server is listening in port ${PORT}`)
})