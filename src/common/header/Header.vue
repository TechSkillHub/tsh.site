<template>
  <div>
    <nav id="header" class="navbar navbar-expand-xl fixed-top">
      <div class="container">
        <router-link
          class="navbar-brand logo"
          :to="{ path: '/', hash: '#banner' }"
          @click="hideMenu()"
        >
          Tech Skill Hub
        </router-link>
        <!-- <button class="primary desk mx-2">Candidato</button>
        <button class="primary desk">Empresa</button> -->
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
          <!-- <div class="mobile mt-3 justify-content-around">
            <button class="primary">Candidato</button>
            <button class="primary">Empresa</button>
          </div> -->
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#whyus' }"
                class="nav-link"
                :class="currentPage == '#whyus' ? 'active' : ''"
                >Por que?</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#oportunity' }"
                class="nav-link"
                :class="currentPage == '#oportunity' ? 'active' : ''"
                >Inspiração</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#plans' }"
                class="nav-link"
                :class="currentPage == '#plans' ? 'active' : ''"
                >Nossos planos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#steps' }"
                class="nav-link"
                :class="currentPage == '#steps' ? 'active' : ''"
                >Como funciona?</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: '/', hash: '#about' }"
                class="nav-link"
                :class="currentPage == '#about' ? 'active' : ''"
                >Sobre nós</router-link
              >
            </li>
            <button v-if="!logged" class="primary mx-auto ms-md-3 mt-3 mt-md-0" @click="openLogin()">Login/Cadastro</button>
            <button v-else class="secondary mx-auto ms-md-3 mt-3 mt-md-0" @click="logout()">Logout</button>
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
  mounted() {
    if (localStorage.getItem('token')) {
      this.$store.state.manager.logged = true;
    }
  },
  methods: {
    hideMenu() {
      let el = document.getElementById('navbarCollapse')
      el.classList.remove('show')
    },
    openLogin() {
      this.$store.commit('manager/SET_MODAL_LOGIN', {
        show: true,
      })
    },
    logout() {
      localStorage.removeItem('token')
      this.$store.commit('manager/SET_LOGGED', false)
    }
  },
  computed: {
    currentPage() {
      return this.$store.state.manager.currentPage
    },
    logged() {
      return this.$store.state.manager.logged
    },
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.desk {
  display: none !important;
}
.mobile {
  display: flex !important;
}
@media (min-width: $md) {
  .desk {
    display: block !important;
  }
  .mobile {
    display: none !important;
  }
  .scroll-hidden {
    #header {
      right: 17px;
    }
  }
}
nav {
  background-color: #f4f4f4;
}
nav.navbar {
  padding: 14px 0;
  .logo {
    font-family: $fontLogo;
    font-size: 33px;
    color: $primary;
    &::after {
      content: none !important;
      text-decoration: none;
    }
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
