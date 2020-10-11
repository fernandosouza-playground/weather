import React, { useEffect } from "react";
import { WeatherButton } from "./components/weatherButton";
import styled from "styled-components";
import { WeatherDetails } from "./components/weatherDetails";
import { useWeatherData } from "./weatherData/useWeatherData";

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
  const {
    fetch,
    loading,
    weatherData,
    selectedWeather,
    selectWeather,
  } = useWeatherData();

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return null;
  }

  return (
    selectedWeather &&
    weatherData && (
      <>
        <WeatherDetails
          forecastData={{
            city: selectedWeather.city,
            dateTime: selectedWeather.timestamp,
            weatherType: selectedWeather.weather,
            temperature: {
              min: selectedWeather.min,
              max: selectedWeather.max,
              current: selectedWeather.temperature,
            },
          }}
        />

        <WeatherList>
          {weatherData.map((item: any) => {
            return (
              <WeatherButton
                key={item.id}
                onClick={() => selectWeather(item)}
                weather={item}
                active={item.id === selectedWeather.id}
              />
            );
          })}
        </WeatherList>
      </>
    )
  );
}

export default App;
