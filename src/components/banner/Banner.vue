<template>
  <div class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center">
      <div class="row d-flex flex-column flex-md-row">
        <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
          <h3 class="mb-4">
            Potencialize os resultados de sua empresa através do aprimoramento de sua equipe de
            Tecnologia da Informação (TI).
          </h3>
          <p>
            A TSH irá auxiliá-lo na obtenção de uma medição mais precisa do desempenho da sua
            equipe, fornecendo dados personalizados com base no seu método de recrutamento e nos
            parâmetros da sua equipe. Esses insights valiosos serão fundamentais para impulsionar a
            aquisição de novos clientes.
          </p>
        </div>
        <div class="col-12 col-md-5">
          <img src="./imgs/imgBanner.png" alt="Banner" class="img-fluid w-100" />
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
  background-color: $white;
  padding: 50px 0;
  color: $primary;
  h3 {
    line-height: 110%;
  }
  p {
    max-width: 550px;
    color: $dark;
  }
  @media (min-width: $md) {
    h3 {
      line-height: 150%;
    }
  }
}
</style>
