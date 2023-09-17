<template>
  <div
    class="scrollspy-example"
    data-bs-spy="scroll"
    data-bs-target="#header"
    data-bs-offset="0"
    tabindex="0"
  >
    <Banner id="banner" />
    <WhyUs id="whyus" />
    <!-- <Carousel id="carousel" /> -->
    <Oportunity id="oportunity" />
    <Plans id="plans" />
    <AboutUs id="about" />
  </div>
</template>

<script>
import Banner from '@/components/banner/Banner.vue'
import WhyUs from '@/components/whyUs/WhyUs.vue'
import Oportunity from '@/components/oportunity/Oportunity.vue'
import Plans from '@/components/plans/Plans.vue'
// import Carousel from '@/components/carousel/Carousel.vue'
import AboutUs from '@/components/aboutUs/AboutUs.vue'

export default {
  data() {
    return {}
  },
  components: {
    Banner,
    WhyUs,
    Oportunity,
    Plans,
    // Carousel,
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
