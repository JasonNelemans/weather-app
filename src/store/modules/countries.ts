const initialState = () => ({
  countries: [],
  countriesApiUrl: "https://restcountries.eu/rest/v2/all"
});

const state = initialState();

const actions = {
  fetchCountries({commit, dispatch, state}: any) {
    fetch(state.countriesApiUrl, { method: "get" })
      .then(response => response.json())
      .then(countries => {
        const newCountries = countries.map((country: any) => {
          return (
            { code: country.alpha2Code, flag: country.flag}
          )
        })
        commit("updateCountries", newCountries)
        // console.log('mapped country: ', newCountries)
      })
      .catch(error => console.log("error: ", error))
  }
}

const mutations = {
  updateCountries(state: any, payload: any) {
    state.countries = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}