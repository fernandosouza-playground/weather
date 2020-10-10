import React, { FC, HTMLAttributes } from "react";
import { kelvinToCelcius } from "./temperatureConversor";

interface ITemperature {
  value: number
}

export const Temperature: FC<HTMLAttributes<any> & ITemperature> = ({
  value,
  className,
}) => {
  return <span className={className}>{kelvinToCelcius(value)}&deg;</span>;
};
