// React
import React from 'react';

// Components
import { Container } from 'semantic-ui-react';

const WeatherCard = ({ weather }) => {
    return (
        <Container text>
            <h3>{weather.name}</h3>
            <div className="icon-wrapper">
                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather Condition"/>
            </div>
            <p>{Math.round(weather.main.temp)} ℃</p>
        </Container>
    )
};

export default WeatherCard;