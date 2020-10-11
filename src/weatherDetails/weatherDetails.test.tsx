import React from 'react';
import { render } from '@testing-library/react';
import { WeatherDetails } from "./index";
import { WeatherConditions } from "../types";

const weather = {
  city: "Berlin",
  dateTime: "2017-02-16 15:00:00",
  weatherType: WeatherConditions.Clear,
  temperature: {
    min: 200,
    max: 300,
    current: 250,
  }
}

const cloudyWeather = {
  ...weather,
  weatherType: WeatherConditions.Clouds,
}

test('should render a formated date', () => {
  const { getByText } = render(<WeatherDetails forecastData={weather} />);
  const dateElement = getByText("Thursday 16. February");
  expect(dateElement).toBeInTheDocument();
});

test('should render the given city name', () => {
  const { getByText } = render(<WeatherDetails forecastData={weather} />);
  const cityNameElement = getByText("Berlin");
  expect(cityNameElement).toBeInTheDocument();
});

test('should render the given min and max kelvin temperature in celcius', () => {
  const { getByText } = render(<WeatherDetails forecastData={weather} />);
  const minTemperatureElement = getByText("-73°");
  const maxTemperatureNameElement = getByText("27°");
  expect(minTemperatureElement).toBeInTheDocument();
  expect(maxTemperatureNameElement).toBeInTheDocument();
});

test('should render the given current kelvin temperature in celcius', () => {
  const { getByText } = render(<WeatherDetails forecastData={weather} />);
  const currentTemperatureElement = getByText("-23°");
  expect(currentTemperatureElement).toBeInTheDocument();
});

test('should render the given weather condition', () => {
  const { getByText } = render(<WeatherDetails forecastData={weather} />);
  const weatherConditionElement = getByText("Clear");
  expect(weatherConditionElement).toBeInTheDocument();
});

test('should render a sun icon giving Clear as weather condition', () => {
  const { getByText } = render(<WeatherDetails forecastData={weather} />);
  const weatherConditionIconElement = getByText("weather-sun.svg");
  expect(weatherConditionIconElement).toBeInTheDocument();
});

test('should render a cloudy icon giving a weather condition different of Clear', () => {
  const { getByText } = render(<WeatherDetails forecastData={cloudyWeather} />);
  const weatherConditionIconElement = getByText("weather-cloud.svg");
  expect(weatherConditionIconElement).toBeInTheDocument();
});