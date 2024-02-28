<template>
  <div id="dashboard" class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto px-0">
        <div id="sidebar" class="collapse collapse-horizontal border-end" :class="windowWidth > 992 ? 'show' : ''">
          <div id="sidebar-nav" class="sidebar">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="ms-auto me-2 text-decoration-none mobile">
              <img src="./imgs/arrow.svg" alt="" class="arrow close">Close
            </a>
            <ul class="mt-2">
              <li :class="this.section == 'overview' ? 'active' : ''" @click="changeSection('overview')">Overview</li>
              <li :class="this.section == 'profile' ? 'active' : ''" @click="changeSection('profile')">Profile</li>
              <li :class="this.section == 'myJobs' ? 'active' : ''" @click="changeSection('myJobs')">My Jobs</li>
              <li :class="this.section == 'submitJobs' ? 'active' : ''" @click="changeSection('submitJobs')">Submit Jobs</li>
            </ul>
          </div>
        </div>
      </div>
      <main class="col ps-md-2 pt-2">
        <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="text-decoration-none mobile">
          Menu<img src="./imgs/arrow.svg" alt="" class="arrow">
        </a>
        <div class="content p-lg-5 p-3">
          <Overview v-show="this.section == 'overview'" />
          <Profile v-show="section == 'profile'"/>
          <MyJobs v-show="section == 'myJobs'"/>
          <SubmitJobs v-show="section == 'submitJobs'"/>
        </div>
      </main>
    </div>
  </div>
  <!-- <div id="dashboard" class="container-fluid">
    <div class="row">
      <div class="col-lg-2 col-auto p-0">
        <div id="sidebar" class="collapse collapse-horizontal show border-end sidebar">
        <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse">Menu</a>
          <ul id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
            <li :class="this.section == 'overview' ? 'active' : ''" @click="changeSection('overview')">Overview</li>
            <li :class="this.section == 'profile' ? 'active' : ''" @click="changeSection('profile')">Profile</li>
            <li :class="this.section == 'myJobs' ? 'active' : ''" @click="changeSection('myJobs')">My Jobs</li>
            <li :class="this.section == 'submitJobs' ? 'active' : ''" @click="changeSection('submitJobs')">Submit Jobs</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-10 col-12 p-0">
        <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse">Menu</a>
        <div class="content p-5">
          <Overview v-show="this.section == 'overview'" />
          <Profile v-show="section == 'profile'"/>
          <MyJobs v-show="section == 'myJobs'"/>
          <SubmitJobs v-show="section == 'submitJobs'"/>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import Overview from './sections/Overview.vue';
import Profile from './sections/Profile.vue';
import MyJobs from './sections/MyJobs.vue';
import SubmitJobs from './sections/SubmitJobs.vue';

export default {
  data() {
    return {
      section: 'profile',
      windowWidth: window.innerWidth
    }
  },
  components: {
    Overview,
    Profile,
    MyJobs,
    SubmitJobs
  },
  methods: {
    changeSection(value) {
      this.section = value
    },
    myEventHandler() {
      this.windowWidth = window.innerWidth
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
}
</script>

<style lang="scss" scoped>
#dashboard {
  min-height: 80vh;
  .sidebar {
    background-color: #f4f4f4;
    min-height: 80vh;
    border-top: 1px solid $grey1;
    padding-top: 0.5rem;
    @media (min-width: $md) {
      padding: 30px 0;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        padding: 20px;
        cursor: pointer;
        border-bottom: 1px solid $primary-light;
        &:hover, &.active {
          background-color: $primary;
          color: $white;
        }
      }
    }
  }
  a {
    color: $primary;
    .arrow {
      width: 20px;
      height: 20px;
      transform: rotate(-90deg);
      transition: all ease-in-out;
      &.close {
        transform: rotate(90deg);
        vertical-align: bottom;
      }
    }
  }
  main {
    margin-left: 0;
    @media (min-width: $lg) {
      margin-left: 20vw;
    }
  }
  #sidebar {
    position: fixed;
    z-index: 1;
  }
  #sidebar-nav {
    width: 80vw;
    height: 100vh;
    @media (min-width: $lg) {
      width: 20vw;
    }
  }
}
</style>