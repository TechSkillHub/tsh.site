<template>
  <div
    class="scrollspy-example"
    data-bs-spy="scroll"
    data-bs-target="#navbar"
    data-bs-offset="0"
    tabindex="0"
  >
    <Banner id="banner" />
    <AboutUs id="about" />
  </div>
</template>

<script>
// import Register from '../api/register/index'
import Banner from '../components/banner/Banner.vue'
import AboutUs from '@/components/aboutUs/index.vue'

// const register = new Register()

export default {
  data() {
    return {}
  },
  components: {
    Banner,
    AboutUs
  },
  computed: {
    currentPage() {
      return this.$store.state.manager.currentPage
    }
  },
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
