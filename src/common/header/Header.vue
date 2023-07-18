<template>
  <div class="fixed-top">
    <nav id="navbar" class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">LOGO</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link
                :to="{ name: 'home', hash: '#banner' }"
                class="nav-link"
                :class="currentPage == '#banner' ? 'active' : ''"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'home', hash: '#about' }"
                class="nav-link"
                :class="currentPage == '#about' ? 'active' : ''"
                >AboutUs</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  computed: {
    currentPage() {
      return this.$store.state.manager.currentPage
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  height: 70px;
  a {
    &.active {
      &::after {
        display: block;
        content: ' ';
        width: 100%;
        height: 2px;
        background-color: $primary;
      }
    }
  }
}
</style>
