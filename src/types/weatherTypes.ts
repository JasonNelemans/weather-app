export interface WeatherModel {
  tenDayForecast: {
    minTemp: number;
    maxTemp: number;
    averageTemp: number;
    date: string;
  }[];
  forecastedCity: string;
}
