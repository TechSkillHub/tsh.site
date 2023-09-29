<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12 py-4">
          <h1 class="text-center">Como funciona?</h1>
          <div class="row justify-content-between flex-column flex-md-row">
            <div class="box position-relative p-0">
              <div class="position-absolute step">1</div>
              <p class="text-center">Cadastre-se para ter acesso às melhores oportunidades do mercado</p>
            </div>
            <div class="box position-relative p-0">
              <div class="position-absolute step">2</div>
              <p class="text-center">Adicione os filtros que melhor correspondem ao que você busca</p>
            </div>
            <div class="box position-relative p-0">
              <div class="position-absolute step">3</div>
              <p class="text-center">Fique atento que entraremos em contato com as posições disponíveis para você</p>
            </div>
            <div class="box position-relative p-0">
              <div class="position-absolute step">4</div>
              <p class="text-center">Pronto! Disponibilizaremos os testes práticos feitos para você e sua carreira.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
#steps {
  background-color: rgb($primary, 0.4);
  color: $dark;
  min-height: 50vh;
  display: flex;
  align-items: center;
  padding: 80px 0 0 0;
  h1 {
    margin-bottom: 100px;
  }
  .box {
    box-shadow: 0px 0px 5px 0px #000000;
    border-radius: 10px;
    min-height: 200px;
    background-color: $primary;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 70px;
    .step {
      background-color: $white;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Audiowide', cursive;
      font-size: 48px;
      font-weight: 600;
      border: 10px solid rgb($primary, 0.6);
      top: -50px;
      left: 0px;
    }
    p {
      color: $white;
      max-width: 80%;
    }
  }
  @media (min-width: $md) {
    padding: 80px 0;
    h1 {
      margin-bottom: 100px;
    }
    .box {
      min-height: 300px;
      width: 22%;
      margin-bottom: 0px;
      .step {
        width: 120px;
        height: 120px;
        font-size: 54px;
        
        top: -50px;
        left: 0px;
      }
    }
  }
}
</style>
