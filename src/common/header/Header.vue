<template>
  <div>
    <nav id="header" class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link
          class="navbar-brand logo"
          :to="{ path: '/', hash: '#banner' }"
          @click="hideMenu()"
        >
          Tech Skill Hub
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
            <!-- <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#carousel' }"
                class="nav-link"
                :class="currentPage == '#carousel' ? 'active' : ''"
                >Carousel</router-link
              >
            </li> -->
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#oportunity' }"
                class="nav-link"
                :class="currentPage == '#oportunity' ? 'active' : ''"
                >Oportunidade</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#whyus' }"
                class="nav-link"
                :class="currentPage == '#whyus' ? 'active' : ''"
                >Por que a TSH?</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#about' }"
                class="nav-link"
                :class="currentPage == '#about' ? 'active' : ''"
                >Sobre Nós</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <a @click="openModal()" class="nav-link">Modal</a>
            </li> -->
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
    },
    openModal() {
      this.$store.commit('manager/SET_MODAL_DEFAULT', {
        show: true,
        title: 'Title Modal',
        body: 'Body Modal'
      })
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
@media (min-width: $md) {
  .scroll-hidden {
    #header {
      right: 17px;
    }
  }
}
nav.navbar {
  padding: 17px 0;
  .logo {
    font-family: 'Audiowide', cursive;
    font-size: 28px;
    color: $primary;
  }
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
    @media (min-width: $md) {
      padding-top: 0px;
    }
  }
}
</style>
