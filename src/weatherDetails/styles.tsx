import styled from "styled-components";
import { WeatherIcon } from "../weatherIcon";

export const HighlightedTemperature = styled.div`
  font-size: 20rem;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 24.651rem;
    line-height: 25.6rem;
    width: auto;
  }
`;

export const WeatherHightLight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const CityName = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  color: #a8aabd;
  width: 100%;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 4.778rem;
    line-height: 56px;
  }
`;

export const Date = styled.div`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #fff;
  width: 100%;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 9.9rem;
    line-height: 12.8rem;
  }
`;

export const TemperatureRange = styled.div`
  font-size: 4.778rem;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: 0px;
  color: #a8aabd;

  @media screen and (min-width: 768px) {
    font-size: 4.778rem;
    flex: 1;
  }
`;

export const WeatherLike = styled.div`
  font-size: 4.778rem;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: 0px;
  color: #a8aabd;

  @media screen and (min-width: 768px) {
    font-size: 4.778rem;
    width: auto;
    flex: 1;
  }
`;

export const HighLightHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TemperatureDetails = styled.div`
  flex: 1;
`;

export const PlaceDetail = styled.div`
  flex: 1;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 0 6rem;
  }
`;

export const WeatherLikeBox = styled.div`
  flex: 1;
  text-align: center;
`;

export const ForecastIcon = styled(WeatherIcon)`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 32.8rem;
  }
`;