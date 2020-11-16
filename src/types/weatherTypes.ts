export interface WeatherModel {
  tenDayForecast: TenDayForeCast[];
  forecastedCity: string;
}

export interface Colours {
  [key: string]: string;
}

export interface TenDayForeCast {
  minTemp: number;
  maxTemp: number;
  averageTemp: number;
  date: string;
}
