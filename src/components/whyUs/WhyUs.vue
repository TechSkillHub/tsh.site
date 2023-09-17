<template>
  <div class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center text-center">
      <h1>Por que a <br class="mobile" /><span>Tech Skill Hub</span>?</h1>
      <div class="row justify-content-around">
        <div class="col-10 col-lg-3 p-3 card my-3 my-md-0">
          <img
            src="./imgs/recruiters-candidate.jpg"
            alt="Recrutadores"
            width="230"
            style="margin: 23px auto !important;"
          />
          <h2 class="fw-normal mt-4">Simplifique sua jornada</h2>
          <p class="mx-auto">
            Acesse sua conta e registre oportunidades de emprego de forma fluida e intuitiva,
            simplificando o processo de busca por talentos qualificados.
          </p>
        </div>

        <div class="col-10 col-lg-3 p-3 card my-3 my-md-0">
          <img 
            src="./imgs/new-leads.jpg" 
            alt="Leads" 
            width="200" 
            class="mx-auto" 
          />
          <h2 class="fw-normal mt-4">Aumente seus leads</h2>
          <p class="mx-auto">
            Aumente o número de candidaturas e reduza a evasão de candidatos devido à nossa
            integração completa.
          </p>
        </div>

        <div class="col-10 col-lg-3 p-3 card my-3 my-md-0">
          <img 
            src="./imgs/user-concept.jpg" 
            alt="Leads" 
            width="200" 
            class="mx-auto" 
          />
          <h2 class="fw-normal mt-4">Seleção com maior efetividade</h2>
          <p class="mx-auto">
            Profissionais experientes tendem a selecionar vagas com maior critério e podem desistir
            quando o processo se torna tedioso.
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
#whyus {
  background-color: rgb($primary, 0.2);
  padding: 120px 0;
  h1 {
    font-size: 36px;
    color: $black;
    font-weight: 500;
    span {
      font-family: 'Audiowide', cursive;
      color: $primary;
    }
  }
  h2 {
    color: $primary;
    font-size: 20px;
    font-weight: 500 !important;
    min-height: 48px;
  }
  .mobile {
    display: block;
  }
  @media (min-width: $md) {
    .mobile {
      display: none;
    }
    h1 {
      font-size: 68px;
      margin-bottom: 100px;
    }
    p {
      max-width: 220px;
    }
  }
}
</style>
