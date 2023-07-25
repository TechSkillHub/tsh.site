<template>
  <div
    class="scrollspy-example"
    data-bs-spy="scroll"
    data-bs-target="#header"
    data-bs-offset="0"
    tabindex="0"
  >
    <Banner id="banner" />
    <Carousel id="carousel" />
    <AboutUs id="about" />
  </div>
</template>

<script>
import Banner from '@/components/banner/Banner.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import AboutUs from '@/components/aboutUs/AboutUs.vue'

export default {
  data() {
    return {}
  },
  components: {
    Banner,
    Carousel,
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
