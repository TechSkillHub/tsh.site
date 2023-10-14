export default {
  namespaced: true,
  state: {
    loading: false,
    currentPage: '',
    modalDefault: {},
    modalLogin: {},
  },
  mutations: {
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page
    },
    SET_LOADING(state, val) {
      state.loading = val
    },
    SET_MODAL_DEFAULT(state, val) {
      state.modalDefault = val
    },
    SET_MODAL_LOGIN(state, val) {
      state.modalLogin = val
    }
  },
  getters: {},
  actions: {}
}
