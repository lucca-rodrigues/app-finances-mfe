import { createStore } from "vuex";

export default createStore({
  state: {
    selectedItem: null,
  },
  mutations: {
    setSelectedItem(state, item) {
      state.selectedItem = item;
    },
  },
  actions: {
    updateSelectedItem({ commit }, item) {
      commit("setSelectedItem", item);
    },
  },
});
