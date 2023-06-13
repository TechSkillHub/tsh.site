<template>
  <main class="container d-flex justify-content-center align-items-center">
    <Banner/>
  </main>
</template>

<script>
import Register from '../api/register/index'
import Banner from '../components/banner/Banner.vue'

const register = new Register()

export default {
  data() {
    return {}
  },
  components: {
    Banner
},
  computed: {},
  mounted() {
    const data = {
      name: 'Felipe',
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
