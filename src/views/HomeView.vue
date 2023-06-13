<template>
  <main class="container d-flex justify-content-center align-items-center">
    <Banner />
  </main>
</template>

<script>
import Banner from '../components/banner/Banner.vue'
import Register from '../api/register/index'

const register = new Register()

export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {
    const data = {
      name: 'Matheus',
      email: 'teste@teste.com',
      password: '123456'
    }
    register.register(data)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}
</style>
