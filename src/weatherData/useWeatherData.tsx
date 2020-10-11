import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { WeatherData } from "../types";

interface IWeatherContext {
  fetch: () => void;
  selectWeather: (weatherData: WeatherData) => void;
  weatherData: WeatherData[] | null;
  selectedWeather: WeatherData | null;
  loading: true;
}

export const WeatherContext = createContext<IWeatherContext>({
  fetch: () => {},
  selectWeather: () => {},
  weatherData: null,
  selectedWeather: null,
  loading: true,
});

function weatherDataFactory(data: any): WeatherData[] {
  return data.list.map((item: any) => ({
    timestamp: item.dt_txt,
    city: data.city.name,
    temperature: item.main.temp,
    max: item.main.temp_max,
    min: item.main.temp_min,
    weather: item.weather[0].main,
    id: item.dt,
  }));
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "fetched":
      return { ...action.value, loading: false };
    case "select":
      return { ...state, selectedWeather: action.value };
    default:
      return state;
  }
}

export const WeatherDataProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, {
    weatherData: null,
    selectedWeather: null,
    loading: true,
  });

  function fetch() {
    dispatch({
      type: "loading",
    });
    axios.get("http://localhost:8080/https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22").then((res) => {
      const weatherData = weatherDataFactory(res.data);
      dispatch({
        type: "fetched",
        value: {
          weatherData: weatherData,
          selectedWeather: weatherData[0],
        },
      });
    });
  }

  function selectWeather(weatherData: WeatherData) {
    dispatch({
      type: "select",
      value: weatherData,
    });
  }

  return (
    <WeatherContext.Provider
      value={{
        fetch,
        selectWeather,
        ...state,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
export function useWeatherData() {
  const recipes = useContext(WeatherContext);
  return recipes;
}
