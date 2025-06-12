import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Weather = () => {
    const [weather, setWeather] = useState({
        city: 'Gwangju',
        temp: 0,
        icon: ''
    });
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${weather.city}&appid=${API_KEY}&unit=metric`;
    const weatherIcon = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    const getWeatherData = async () => {
        let res = axios.get(weatherAPI);
        let data = (await res).data;
        setWeather({
            city: data.name,
            temp: parseFloat(data.main.temp - 273.15).toFixed(1),
            icon: data.weather[0].icon
        });
    }

    useEffect(() => {
        getWeatherData();
    }, [])


    return (
        <div style={{ textAlign: 'center', marginTop: '100px', border:'1px solid black'}}>
            <h1>{new Date().toLocaleDateString()}</h1>
            <img style={{ width: '100px', height: '100px' }} src={weatherIcon} alt="날씨 아이콘" />
            <p>현재 {weather.city}는 {weather.temp}℃입니다</p>
        </div>
    )
}

export default Weather