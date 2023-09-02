<template>
  <div class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center">
      <div class="row">
        <div class="col-5">
          <img src="./imgs/imgOportunity.png" alt="Banner" class="img-fluid" />
        </div>
        <div class="col-7 d-flex flex-column justify-content-center">
          <h1 class="mb-3">O que nos inspira?</h1>
          <p>
            Somos dois Devs já com uma boa bagagem e experiência, no decorrer de nossas carreiras
            nos deparamos com uma situação recorrente e que incomodava ambos no momento de buscar
            novas oportunidades. Sempre que encontrávamos uma vaga no LinkedIn e para nos candidatar
            éramos direcionados para outra plataforma, essa plataforma nunca carregava nossas
            informações já preenchidas no LinkedIn, como experiência profissional e histórico
            acadêmico.
          </p>
          <p>
            Diante desse cenário vimos a oportunidade de criar algo que facilite a candidatura, pois
            boa parte das vezes o candidato pode desistir de ir até o final por ter que ficar
            repetindo tais informações diversas vezes.
          </p>
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
#oportunity {
  background-color: $primary;
  color: $black;
  // margin-top: 80px;
  padding: 50px 0;
  h1 {
    font-size: 48px;
    color: $white;
  }
  @media (min-width: $md) {
  }
}
</style>
