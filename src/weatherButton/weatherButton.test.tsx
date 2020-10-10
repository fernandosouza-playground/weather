import React from 'react';
import { render } from '@testing-library/react';
import { WeatherButton } from "./index";
import { Forecast } from "../types";

test('should render a formated celcius temperature', () => {
  const weather = {
    timestamp: "2017-02-16 15:00:00",
    temperature: 200,
    forecast: Forecast.Sunny
  }
  const { getByText } = render(<WeatherButton weather={weather} />);
  const temperatureElement = getByText("-73°");;
  expect(temperatureElement).toBeInTheDocument();
});

test('should render a formated time in a 12 hour clock format', () => {
  const weather = {
    timestamp: "2017-02-16 15:00:00",
    temperature: 200,
    forecast: Forecast.Sunny
  }
  const { getByText } = render(<WeatherButton weather={weather} />);
  const timeElement = getByText("3:00 PM");
  expect(timeElement).toBeInTheDocument();
});

test('should render a sun svg icon given a sunny forecast information', () => {
  const weather = {
    timestamp: "2017-02-16 15:00:00",
    temperature: 200,
    forecast: Forecast.Sunny
  }
  const { getByText } = render(<WeatherButton weather={weather} />);
  const iconElement = getByText("weather-sun.svg");
  expect(iconElement).toBeInTheDocument();
});

test('should render a sun but cloudy svg icon given a cloudy forecast information', () => {
  const weather = {
    timestamp: "2017-02-16 15:00:00",
    temperature: 200,
    forecast: Forecast.Cloudy
  }
  const { getByText } = render(<WeatherButton weather={weather} />);
  const iconElement = getByText("weather-cloud.svg");
  expect(iconElement).toBeInTheDocument();
});
