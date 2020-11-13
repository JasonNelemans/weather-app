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
        console.log('countries: ', countries)
      })
      .catch(error => console.log('error: ', error))
  }
}

export default {
  namespaced: true,
  state,
  actions,
}