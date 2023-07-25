<template>
  <div class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center text-center">
      <div class="row">
        <div class="col-12">
          <h1>COMING SOON!</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <!-- <h1>EM BREVE!</h1>
          <h2>A melhor plataforma para conectar profissionais de tecnologia.</h2> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#banner {
  background-color: $black;
  min-height: 100vh;
  color: $primary;
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 20px;
  }
  @media (min-width: $md) {
    h1 {
      font-size: 120px;
    }
    h2 {
      font-size: 20px;
    }
  }
}
</style>
