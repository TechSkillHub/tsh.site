import { createStore } from 'vuex'
import loginModule from './modules/login/index'
import registerModule from './modules/register/index'

const store = createStore({
  modules: {
    login: loginModule,
    register: registerModule
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

export default store
