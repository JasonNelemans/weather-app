import { AppTypes } from '@/types/AppTypes'

const initialState = () => ({
  appLoading: false,
  appStatus: "ok"
});

const state: AppTypes = initialState();

const actions = {
  loading({ commit }: any) {
    commit("loading");
  },
  doneLoading({ commit }: any) {
    commit("doneLoading");
  },
  error({ commit }: any) {
    commit("error");
  },
  appOk({ commit }: any) {
    commit("appOk");
  }
};

const mutations = {
  loading(state: AppTypes) {
    state.appLoading = true;
  },
  doneLoading(state: AppTypes) {
    state.appLoading = false;
  },
  error(state: AppTypes) {
    state.appStatus = "error";
  },
  appOk(state: AppTypes) {
    state.appStatus = "ok";
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
