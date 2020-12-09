const axios = require("axios");
const APIKEY = "585e775f380c4ec83b6050b2a8a1794d";

module.exports = {
  getWeather: async (req, res) => {
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
  },
  infoGET: (req, res) => {
    res.send("<h1>Ejemplo de URL => GET /myWeather?city={city}</h1><br/><h2>Guia en README.md</h2>");
  }
}