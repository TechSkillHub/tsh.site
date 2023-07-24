<template>
  <div class="mask" v-if="!acceptedCookies">
    <div class="cookies">
      <div class="container d-flex flex-column flex-md-row">
        <p class="text-justify col-12 col-md-9 col-lg-10 m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis lacus eu turpis
          volutpat, in malesuada mauris sollicitudin. Donec vehicula molestie massa at pellentesque.
          Praesent egestas enim ac eros rhoncus tristique. Aenean id felis at erat tristique
          aliquam. Donec vitae consectetur massa, sit amet condimentum odio.
        </p>
        <div class="col-12 col-md-3 col-lg-2 d-flex">
          <button class="primary m-auto mt-4 my-md-auto me-md-0" @click="acceptCookies()">
            Aceitar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      acceptedCookies: false
    }
  },
  methods: {
    acceptCookies() {
      window.localStorage.setItem('acceptedCookies', true)
      this.acceptedCookies = true
      document.body.classList.remove('scroll-hidden')
    }
  },
  mounted() {
    if (window.localStorage.getItem('acceptedCookies') != undefined) {
      this.acceptedCookies = window.localStorage.getItem('acceptedCookies')
    } else {
      document.body.classList.add('scroll-hidden')
    }
  },
  unmounted() {
    document.body.classList.remove('scroll-hidden')
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
.cookies {
  width: 100vw;
  position: absolute;
  bottom: 0;
  border-top: 2px solid $white;
  background-color: $primary;
  padding: 40px;
  p {
    text-align: justify;
  }
}
</style>
