<template>
  <transition name="fade" mode="out-in">
    <Loading v-if="loading" />
  </transition>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Loading from '@/common/loading/Loading.vue'
import Header from '@/common/header/Header.vue'
import Footer from '@/common/footer/Footer.vue'
import { RouterView } from 'vue-router'

export default {
  data() {
    return {}
  },
  components: {
    Loading,
    Header,
    Footer
  },
  computed: {
    loading() {
      return this.$store.state.manager.loading
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('manager/SET_LOADING', false)
    }, 5000)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
