<template>

<div id="cookies" v-if="!acceptedCookies" class="modal d-block show">
  <div class="mask" @click="close()"></div>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="container my-auto">
        <div class="row">
          <div class="col-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis lacus eu turpis volutpat, in malesuada mauris sollicitudin. Donec vehicula molestie massa at pellentesque. 
          </div>
          <div class="col-2">
            <button type="button" class="btn primary mx-auto" @click="acceptCookies()">Aceitar</button>
          </div>
        </div>
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
#cookies {
  .modal-dialog {
    max-width: none;
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
  .modal-content {
    margin-top: calc(100vh - 130px);
    border-radius: 0;
    height: 130px;
  }
}
.mask {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
