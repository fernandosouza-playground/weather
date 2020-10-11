import React, { FC, HTMLAttributes } from "react";
import { WeatherConditions } from "../../types";
import styled from "styled-components";
import { ReactComponent as Suny } from "./weather-sun.svg";
import { ReactComponent as Cloudy } from "./weather-cloud.svg";

type IWatherIconSizes = "small" | "large";

interface IWatherIcon {
  forecast: WeatherConditions;
  size?: IWatherIconSizes;
}

const SunyIcon = styled(Suny)<{ size?: IWatherIconSizes }>`
  width: ${({ size }) => (size === "small" ? "12rem" : "320px")};
  fill: #fac703;
`;

const CloudyIcon = styled(Cloudy)<{ size?: IWatherIconSizes }>`
  width: ${({ size }) => (size === "small" ? "12rem" : "320px")};
`;

export const WeatherIcon: FC<HTMLAttributes<any> & IWatherIcon> = ({
  forecast,
  size = "small",
  className,
}) => {
  return forecast === WeatherConditions.Clear ? (
    <SunyIcon size={size} className={className} />
  ) : (
    <CloudyIcon size={size} className={className} />
  );
};
