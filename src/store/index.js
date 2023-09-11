import { createStore } from 'vuex'
import loginModule from './modules/login/index'
import registerModule from './modules/register/index'
import managerModule from './modules/manager/index'

const store = createStore({
  modules: {
    login: loginModule,
    register: registerModule,
    manager: managerModule
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

export default store
