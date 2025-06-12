import React from 'react'

const Weather = () => {
    let city = 'Gwangju';
    // const API_KEY = '8e282f5c637c21e859d15031b4a409fe';
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&unit=metric`;
    const weatherIcon = "https://media.istockphoto.com/id/1384846768/ko/%EB%B2%A1%ED%84%B0/%EA%B8%B0%EC%83%81-%EC%BB%AC%EB%A0%89%EC%85%98%EC%97%90%EC%84%9C-%EB%82%A0%EC%94%A8-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B2%A9%EB%A6%AC-%EB%90%9C-%EC%96%87%EC%9D%80-%EC%84%A0%ED%98%95-%EB%82%A0%EC%94%A8-%EA%B5%AC%EB%A6%84-%EB%B2%88%EA%B0%9C-%EC%9C%A4%EA%B3%BD-%EC%84%A0%EC%83%81-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%9D%BC%EC%9D%B8-%EB%B2%A1%ED%84%B0-%EB%82%A0%EC%94%A8-%EA%B8%B0%ED%98%B8-%EC%9B%B9-%EB%B0%8F-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B8%B0%ED%98%B8.jpg?s=612x612&w=0&k=20&c=0auwYtpbECq8r_E77qBTaOSYQU4LS4oHmR5Ac9ATA_A=";
    console.log(weatherAPI);


    return (
        <div>
            <h1>{new Date().toLocaleDateString()}</h1>
            <img style={{width: '100px', height: '100px'}} src={weatherIcon} alt="날씨 아이콘" />
            <p>현재 {city}는 ℃입니다</p>
        </div>
    )
}

export default Weather