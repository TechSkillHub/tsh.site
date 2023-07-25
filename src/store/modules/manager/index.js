export default {
  namespaced: true,
  state: {
    loading: false,
    currentPage: ''
  },
  mutations: {
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page
    },
    SET_LOADING(state, val) {
      state.loading = val
    }
  },
  getters: {},
  actions: {}
}
