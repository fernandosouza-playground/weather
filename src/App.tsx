import React, { useState } from "react";
import data from "./weather-data.json";
import { WeatherButton } from "./weatherButton";
import { WeatherConditions } from "./types";
import styled from "styled-components";
import { WeatherDetails } from "./weatherDetails";

const forecast = data.list.map((item) => ({
  timestamp: item.dt_txt,
  temperature: item.main.temp,
  max: item.main.temp_max,
  min: item.main.temp_min,
  weather: item.weather[0],
  id: item.dt,
  forecast: item.weather[0].id === 800 ? WeatherConditions.Clear : WeatherConditions.Clouds,
}));

const WeatherList = styled.div`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  width: 100%;
  padding: 0;
  overflow-x: auto;
  flex-direction: row;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-bottom: 9.6rem;
  }
`;

function App() {
  const [selectedWeather, setSelectedWeather] = useState<any>(forecast[0]);

  const onSelectWeather = (weather: number) => {
    setSelectedWeather(weather);
  };

  return (
    <>
      <WeatherDetails
        forecastData={{
          city: data.city.name,
          dateTime: selectedWeather.timeStamp,
          weatherType: selectedWeather.weather.main,
          temperature: {
            min: selectedWeather.min,
            max: selectedWeather.max,
            current: selectedWeather.temperature,
          },
        }}
      />

      <WeatherList>
        {forecast.map((item: any) => {
          return (
            <WeatherButton
              key={item.id}
              onClick={() => onSelectWeather(item)}
              weather={item}
              active={item.id === selectedWeather.id}
            />
          );
        })}
      </WeatherList>
    </>
  );
}

export default App;
