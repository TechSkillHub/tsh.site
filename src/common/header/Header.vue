<template>
  <div>
    <nav id="header" class="navbar navbar-expand-md fixed-top">
      <div class="container">
        <router-link
          class="navbar-brand logo"
          :to="{ path: '/', hash: '#banner' }"
          @click="hideMenu()"
        >
          Tech Skill Hub
        </router-link>
        <button class="primary inactive mx-2">Pessoal</button>
        <button class="primary">Empresa</button>
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
                >Sobre nós</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#banner' }"
                class="nav-link"
                :class="currentPage == '#banner' ? 'active' : ''"
                >Serviços</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#banner' }"
                class="nav-link"
                :class="currentPage == '#banner' ? 'active' : ''"
                >Contato</router-link
              >
            </li>
            <button class="secondary ms-3">Cadastre-se</button>
            <!-- <div>
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
                  :to="{ path: '/', hash: '#carousel' }"
                  class="nav-link"
                  :class="currentPage == '#carousel' ? 'active' : ''"
                  >Carousel</router-link
                >
              </li>
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
              <li class="nav-item">
                <router-link
                  :to="{ path: '/login', hash: '#login' }"
                  class="nav-link"
                  :class="currentPage == '#login' ? 'active' : ''"
                  >Login</router-link
                >
              </li>
              <li class="nav-item">
                <a @click="openModal()" class="nav-link">Modal</a>
              </li>
            </div> -->
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
nav {
  background-color: #FAFAFA;
}
nav.navbar {
  padding: 14px 0;
  .logo {
    font-family: 'Audiowide', cursive;
    font-size: 33px;
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
