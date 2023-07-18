<template>
  <div class="container-fluid d-flex">
    <h1>EM BREVE!</h1>
    <h3>A melhor plataforma para conectar profissionais de tecnologia.</h3>
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
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $primary;
  h1 {
    font-size: 120px;
    @media (max-width: 575.98px) {
      font-size: 70px;
    }
  }
  h3 {
    font-size: 20px;
  }
  h1,
  h3 {
    text-align: center;
  }
}
</style>
