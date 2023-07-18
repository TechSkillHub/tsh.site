<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from '@/common/header/Header.vue'
import Footer from '@/common/footer/Footer.vue'
import { RouterView } from 'vue-router'

export default {
  data() {
    return {}
  },
  components: {
    Header,
    Footer
  },
  mounted() {}
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
