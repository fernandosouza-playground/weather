import React, { FC } from "react";
import { Temperature } from "../temperature";
import { useMediaQuery } from "react-responsive";
import moment from "moment";
import {
  WeatherHightLight,
  PlaceDetail,
  CityName,
  WeatherLikeBox,
  ForecastIcon,
  TemperatureDetails,
  HighLightHeader,
  WeatherLike,
  TemperatureRange,
  HighlightedTemperature,
  Date
} from "./styles";
import { WeatherConditions } from "../types";

export interface IWeatherDetails {
  forecastData: {
    city: string,
    dateTime: string,
    weatherType: WeatherConditions,
    temperature: {
      min: number,
      max: number,
      current: number
    }
  }
}

export const WeatherDetails: FC<IWeatherDetails> = ({ forecastData }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <WeatherHightLight>
      {!isDesktop && (
        <PlaceDetail>
          <CityName>{forecastData.city}</CityName>
          <Date>{moment(forecastData.dateTime).format("dddd D. MMMM")}</Date>
        </PlaceDetail>
      )}
      <WeatherLikeBox>
        <ForecastIcon forecast={forecastData.weatherType} />
      </WeatherLikeBox>
      <TemperatureDetails>
        <HighLightHeader>
          <WeatherLike>{forecastData.weatherType}</WeatherLike>
          <TemperatureRange>
            <Temperature value={Math.round(forecastData.temperature.min)} /> /{" "}
            <Temperature value={Math.round(forecastData.temperature.max)} />
          </TemperatureRange>
        </HighLightHeader>
        <HighlightedTemperature>
          <Temperature value={Math.round(forecastData.temperature.current)} />
        </HighlightedTemperature>
      </TemperatureDetails>
      {isDesktop && (
        <PlaceDetail>
          <CityName>{forecastData.city}</CityName>
          <Date>{moment(forecastData.dateTime).format("dddd D. MMMM")}</Date>
        </PlaceDetail>
      )}
    </WeatherHightLight>
  );
};
