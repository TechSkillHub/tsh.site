import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.name == 'home') {
      return {
        el: to.hash,
        top: 70
      }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})
router.beforeEach((to, from) => {
  store.commit('manager/SET_CURRENT_PAGE', to.hash)
  return true
})

export default router
