<template>
  <div id="dashboard" class="container-fluid">
    <div class="row">
      <div class="col-2 p-0">
        <div class="sidebar">
          <ul>
            <li :class="this.section == 'overview' ? 'active' : ''" @click="changeSection('overview')">Overview Z</li>
            <li :class="this.section == 'profile' ? 'active' : ''" @click="changeSection('profile')">Profile</li>
            <li :class="this.section == 'myJobs' ? 'active' : ''" @click="changeSection('myJobs')">My Jobs</li>
            <li :class="this.section == 'submitJobs' ? 'active' : ''" @click="changeSection('submitJobs')">Submit Jobs</li>
          </ul>
        </div>
      </div>
      <div class="col-10 p-0">
        <div class="content px-5 pt-3">
          <Overview v-show="this.section == 'overview'" />
          <Profile v-show="section == 'profile'"/>
          <MyJobs v-show="section == 'myJobs'"/>
          <SubmitJobs v-show="section == 'submitJobs'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Overview from './sections/Overview.vue';
import Profile from './sections/Profile.vue';
import MyJobs from './sections/MyJobs.vue';
import SubmitJobs from './sections/SubmitJobs.vue';

export default {
  data() {
    return {
      section: 'overview'
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
    }
  }
}
</script>

<style lang="scss" scoped>
#dashboard {
  min-height: 80vh;
  .sidebar {
    background-color: #f4f4f4;
    padding: 30px 0;
    position: fixed;
    min-height: 80vh;
    width: inherit;
    border-top: 1px solid $grey1;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        // background-color: $grey2;
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
  .content {
    
  }
}
</style>