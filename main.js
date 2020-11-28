const express = require("express");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 5500;
const APIKEY = "585e775f380c4ec83b6050b2a8a1794d";

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//GET Method
app.get("/myWeather", async (req, res) => {
  //Get current weather by City Name
  const city = req.query.city;
  try {
    const { status, data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    )
    //console.log(data)
    res.status(200)
    res.json({
      coords: data.coord,
      cityResponse: data.name,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like
    })
  }
  catch (e) {
    //console.log(e)
    res.json({
      errorCode: e.response.data.cod,
      error: e.response.data.message
    })
  }
})
//Server
app.listen(PORT, () => {
  console.log(`Server is listening in port ${PORT}`)
})