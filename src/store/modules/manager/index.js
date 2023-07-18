export default {
  namespaced: true,
  state: {
    currentPage: ''
  },
  mutations: {
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page
    }
  },
  getters: {},
  actions: {}
}
