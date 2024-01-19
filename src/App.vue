<template>
  <Cookies />
  <Transition>
    <ModalDefault v-if="modalDefault.show" :modalInfo="modalDefault" />
  </Transition>
  <Transition>
    <ModalLogin v-if="modalLogin.show" :modalLogin="modalLogin" />
  </Transition>
  <transition name="fade" mode="out-in">
    <Loading v-if="loading" />
  </transition>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Cookies from '@/common/cookies/Cookies.vue'
import ModalDefault from '@/common/modal/Default.vue'
import ModalLogin from '@/common/modal/Login.vue'
import Loading from '@/common/loading/Loading.vue'
import Header from '@/common/header/Header.vue'
import Footer from '@/common/footer/Footer.vue'
import { RouterView } from 'vue-router'

export default {
  data() {
    return {}
  },
  components: {
    Cookies,
    ModalDefault,
    ModalLogin,
    Loading,
    Header,
    Footer
  },
  computed: {
    loading() {
      return this.$store.state.manager.loading
    },
    modalDefault() {
      return this.$store.state.manager.modalDefault
    },
    modalLogin() {
      return this.$store.state.manager.modalLogin
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.$store.commit('manager/SET_LOADING', false)
    // }, 5000)
  },
  watch: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
#app {
  padding-top: 80px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
