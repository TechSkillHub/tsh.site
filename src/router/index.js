import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login/Login.vue'
import store from '../store'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    store.commit('manager/SET_CURRENT_PAGE', to.hash)
    if (to.hash) {
      return {
        el: to.hash,
        top: 80
      }
    }
  },
  beforeEach(to, from) {
    store.commit('manager/SET_CURRENT_PAGE', to.hash)
    return true
  }
})

export default router
