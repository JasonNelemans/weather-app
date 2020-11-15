import axios from 'axios'

const initialState = () => ({
  tenDayForecast: []
})

const key = ''

const state = initialState();

const actions = {
  async fetchWeather({commit, dispatch, state}: any, {city, country}: any) {
    if(!city || !country) {
      console.log('Please provide country and city')
      return
    } else {
      try {
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${key}&days=10`
        )
        if(response.data.length === 0) {
          console.log('There was an error with the response')
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
        }
      } catch (error) {
        console.log('error: ', error)
      }
    }
    console.log('Finished fetching.')
  }
}

const mutations = {
  updateForecast(state: any, payload: any) {
    state.tenDayForecast = payload.tenDayForecast
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}