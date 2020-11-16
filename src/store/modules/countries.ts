import { CountryStateTypes, Country } from "@/types/CountryTypes";

const initialState = () => ({
  countries: [
    {
      code: "",
      flag: ""
    }
  ],
  countriesApiUrl: "https://restcountries.eu/rest/v2/all",
  country: "NL"
});

const state: CountryStateTypes = initialState();

const actions = {
  fetchCountries({ commit, state }: any) {
    fetch(state.countriesApiUrl, { method: "get" })
      .then(response => response.json())
      .then(countries => {
        const newCountries = countries.map((country: any) => {
          return { code: country.alpha2Code, flag: country.flag };
        });
        commit("updateCountries", newCountries);
        commit("sortCountries");
      })
      .catch(error => console.log("error: ", error));
  }
};

const mutations = {
  updateCountries(state: CountryStateTypes, payload: Country[]) {
    state.countries = payload;
  },
  updateCountry(state: CountryStateTypes, payload: string) {
    state.country = payload;
  },
  sortCountries(state: CountryStateTypes) {
    state.countries.sort((a: Country, b: Country) => {
      if (a.code < b.code) {
        return -1;
      }
      if (b.code < a.code) {
        return 1;
      }
      return 0;
    });
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
