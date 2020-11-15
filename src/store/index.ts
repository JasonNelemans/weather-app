import Vue from "vue";
import Vuex from "vuex";

import countries from "./modules/countries"
import weather from "./modules/weather"
import appState from "./modules/appState"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countries,
    weather,
    appState
  }
});
