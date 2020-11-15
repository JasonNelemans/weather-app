const initialState = () => ({
})

const key = ''

const state = initialState();

const actions = {
  fetchWeather({commit, dispatch, state}: any, payload: any) {
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${payload.city}&country=${payload.country}&key=${key}&days=10`,
      { method: "get" }
    )
      .then(response => response.json())
      .then(response => console.log('response: ', response))
      .catch(error => console.log('error: ', error))
  }
}

export default {
  namespaced: true,
  state,
  actions,
}