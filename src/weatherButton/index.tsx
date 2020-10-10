import React, { FC, MouseEvent } from "react";
import styled from "styled-components";
import { WeatherIcon } from "../weatherIcon";
import { Forecast } from "../types";
import { Temperature } from "../temperature";

const DateTime = styled.span`
  color: #a8aabd;
  font-size: 2.5rem;

  @media screen and (min-width: 768px) {
    font-size: 4.778rem;
  }
`;

const StyledTemperature = styled(Temperature)`
  font-weight: bold;
  font-size: 2.5rem;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 8.256rem;
    line-height: 96px;
  }
`;

const WeatherItemButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 3.2rem 4.6rem;
  border-radius: 6px;

  &[aria-pressed="true"] {
    background-color:#51557A
  }
`;

interface IWeatherItemButton {
  active?: boolean;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  weather: {
    timestamp: string;
    temperature: number;
    forecast: Forecast;
  };
}

export const WeatherButton: FC<IWeatherItemButton> = ({
  onClick,
  active,
  weather,
}) => {
  return (
    <WeatherItemButton role="button" aria-pressed={active} type="button" onClick={onClick}>
      <DateTime>
        {new Date(weather.timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </DateTime>
      <WeatherIcon forecast={weather.forecast} />
      <StyledTemperature value={Math.round(weather.temperature)} />
    </WeatherItemButton>
  );
};
