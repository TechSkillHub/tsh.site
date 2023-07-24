<template>
  <div>
    <nav id="header" class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" :to="{ path: '/', hash: '#banner' }" @click="hideMenu()">
          LOGO
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          id="buttonHeader" 
          title="buttonHeader"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse" @click="hideMenu()">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#banner' }"
                class="nav-link"
                :class="currentPage == '#banner' ? 'active' : ''"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#about' }"
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
  methods: {
    hideMenu() {
      let el = document.getElementById('navbarCollapse')
      el.classList.remove('show')
    }
  },
  computed: {
    currentPage() {
      return this.$store.state.manager.currentPage
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
nav.navbar {
  padding: 16px 0;
  a {
    width: fit-content;
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
  .navbar-toggler {
    outline: none;
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
  .navbar-collapse ul {
    padding-top: 20px;
  }
}
</style>
