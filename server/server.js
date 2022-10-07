require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/:city', (req, res) => {
    let cityName = req.params.city;
    console.log("12", req.params.city)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
            .then(response => res.send(response.data))
            .catch(err => console.log(err));
            //console.log(response.data)
});

module.exports = app;