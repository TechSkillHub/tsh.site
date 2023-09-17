<template>
  <div class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center">
      <div class="row d-flex flex-column flex-md-row">
        <div class="col-12 col-md-6 d-flex">
          <img src="./imgs/imgOportunity.png" alt="Banner" class="img-fluid m-auto" />
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 class="mb-5">O que nos inspira?</h1>
          <p>
            Combinando nossos anos de experiência como desenvolvedores, identificamos uma lacuna
            notável no processo de candidatura online. Em inúmeras ocasiões, ao depararmos com
            oportunidades profissionais no LinkedIn, encontramo-nos confrontados com uma
            ineficiência que nos incomodava profundamente: ao clicar para se candidatar, éramos
            redirecionados para uma plataforma adicional que não conseguia importar nossos dados já
            meticulosamente preenchidos no LinkedIn, como nosso histórico acadêmico e experiência
            profissional.
          </p>
          <p>
            Diante dessa realidade, enxergamos uma valiosa oportunidade de inovação. Reconhecemos
            que essa redundância no fornecimento de informações essenciais durante o processo de
            candidatura pode ser desencorajadora para os candidatos, levando muitos a desistir antes
            de completar o processo.
          </p>
          <p>
            Motivados por essa percepção, decidimos criar uma solução que simplificasse
            significativamente o processo de candidatura, eliminando a necessidade de repetir
            informações já disponíveis previamente.
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
  // background-color: $primary;
  color: $black;
  // margin-top: 80px;
  padding: 150px 0;
  h1 {
    font-size: 28px;
    color: $primary;
    font-family: 'Audiowide', cursive;
  }
  p {
    line-height: 22px;
    max-width: 560px;
  }
  @media (min-width: $md) {
    h1 {
      font-size: 48px;
    }
  }
}
</style>
