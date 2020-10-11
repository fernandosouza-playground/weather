export enum WeatherConditions {
  Thunderstorm = "Thunderstorm",
  Drizzle = "Drizzle",
  Rain = "Rain",
  Snow = "Snow",
  Clear = "Clear",
  Clouds = "Clouds",
  Atmosphere = "Atmosphere"
}

export interface WeatherData {
  timestamp: string;
  city: string;
  temperature: number;
  max: number;
  min: number;
  weather: WeatherConditions;
  id: string;
}