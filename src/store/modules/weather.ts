import axios from "axios";
import moment from "moment";

import { weatherModel } from "@/types/weatherTypes";

const initialState = () => ({
  tenDayForecast: [
    {
      minTemp: 0,
      maxTemp: 0,
      averageTemp: 0,
      date: ""
    }
  ],
  forecastedCity: ""
});

const key = process.env.VUE_APP_API_KEY;

const state = initialState();

const actions = {
  async fetchWeather({ commit, dispatch }: any, { city, country }: any) {
    if (!city || !country) {
      dispatch("appState/error", null, { root: true });
      return;
    } else {
      try {
        dispatch("appState/loading", null, { root: true });
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${key}&days=10`
        );
        if (response.data.length === 0) {
          dispatch("appState/error", null, { root: true });
        } else {
          const tenDayForecast = response.data.data.map((day: any) => {
            return {
              minTemp: Math.round(day.min_temp),
              maxtemp: Math.round(day.max_temp),
              averageTemp: Math.round((day.max_temp + day.min_temp) / 2),
              date: day.valid_date
            };
          });
          commit("updateForecast", {
            tenDayForecast
          });
          commit("updateCity", city);
          dispatch("appState/appOk", null, { root: true });
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
    dispatch("appState/doneLoading", null, { root: true });
  }
};

const mutations = {
  updateForecast(state: any, payload: any) {
    state.tenDayForecast = payload.tenDayForecast;
  },
  updateCity(state: any, payload: any) {
    state.forecastedCity = payload;
  }
};

const getters = {
  averageTempTenDays: (state: weatherModel) => {
    return Math.round(
      state.tenDayForecast
        .map(day => day.averageTemp)
        .reduce((acc, cur) => (cur += acc)) / 10
    );
  },
  sevenDayForecast: (state: weatherModel) => {
    return state.tenDayForecast.slice(0, 7);
  },
  getDates: (state: weatherModel, getters: any) => {
    if (state.forecastedCity) {
      const allMonths = getters.sevenDayForecast.map(
        (day: { date: string }) => {
          return moment(day.date).format("MMM");
        }
      );
      const allYears = getters.sevenDayForecast.map((day: { date: string }) => {
        return moment(day.date).format("YYYY");
      });
      const month =
        allMonths[0] === allMonths[6]
          ? allMonths[0]
          : `${allMonths[0]} - ${allMonths[6]}`;
      const date = `${moment(getters.sevenDayForecast[0].date).format(
        "D"
      )} - ${moment(getters.sevenDayForecast[6].date).format("D")}`;
      const year =
        allYears[0] === allYears[6]
          ? allYears[0]
          : `${allYears[0]} - ${allYears[6]}`;
      return `${month} ${date} ${year}`;
    }
  },
  dynamicColor: (state: any, getters: any) => {
    const colors: any = {
      "-40": "#102F7E",
      "-30": "#0C8DD6",
      "-20": "#1AA0EC",
      "-10": "#60C6FF",
      "0": "#9bdbff",
      "10": "#b4deda",
      "20": "#ffd66b",
      "30": "#ffc178",
      "40": "#fe9255"
    };
    const calculated: any = (
      Math.round(getters.averageTempTenDays / 10) * 10
    ).toString();
    return `linear-gradient(145.74deg,#9BDBFF -33.02%,#B4DEDA 52.01%,${colors[calculated]} 137.04%)`;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
