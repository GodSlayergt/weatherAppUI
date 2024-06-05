import React from "react";
import { Body } from "../Body/Body";
import { Header } from "../Header/Header";
import { HourlyForecastMap } from "../HourlyForecast/HourlyForecast";
import "./weatherInfo.css";

export const WeatherInfo = ({ city, weatherData }) => {
  return (
    <div className="weatherInfo">
      <Header city={city} data={weatherData[0]} />
      <Body data={weatherData[0]} />
      <HourlyForecastMap weatherData={weatherData} />
    </div>
  );
};
