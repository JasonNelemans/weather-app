import axios from 'axios'

import { weatherModel } from '@/types/weatherTypes'

const initialState = () => ({
  tenDayForecast: [
    {
      minTemp: 0,
      maxTemp: 0, 
      averageTemp: 0,
      date: ''
    }
  ],
  forecastedCity: ''
})

const key = process.env.VUE_APP_API_KEY

const state = initialState();

const actions = {
  async fetchWeather({commit, dispatch }: any, {city, country}: any) {
    if(!city || !country) {
      dispatch('appState/error', null, { root: true})
      return
    } else {
      try {
        dispatch('appState/loading', null, { root: true})
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${key}&days=10`
        )
        if(response.data.length === 0) {
          dispatch('appState/error', null, { root: true})
        } else {
          const tenDayForecast = response.data.data.map((day: any) => {
            return {
              minTemp: Math.round(day.min_temp),
              maxtemp: Math.round(day.max_temp),
              averageTemp: Math.round((day.max_temp + day.min_temp) / 2),
              date: day.valid_date,
            }
          })
          commit('updateForecast', {
            tenDayForecast
          })
          commit('updateCity', city)
          dispatch('appState/appOk', null, { root: true })
        }
      } catch (error) {
        console.log('error: ', error)
      }
    }
    dispatch('appState/doneLoading', null, { root: true})
  }
}

const mutations = {
  updateForecast(state: any, payload: any) {
    state.tenDayForecast = payload.tenDayForecast
  },
  updateCity(state: any, payload: any) {
    state.forecastedCity = payload
  }
}

const getters = {
  averageTempTenDays: (state: weatherModel) => {
    return Math.round(
      state.tenDayForecast
        .map(day => day.averageTemp)
        .reduce((acc, cur) => (cur += acc)) / 10
    )
  },
  sevenDayForecast: (state: weatherModel) => {
    return state.tenDayForecast.slice(0, 7)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}