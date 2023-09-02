<template>
  <div class="container-fluid d-flex align-itens-center py-3 py-md-5">
    <div class="container d-flex flex-column justify-content-center text-center">
      <h1 class="mb-5">Por que a <br class="mobile"/><span>Tech Skill Hub</span>?</h1>
      <div class="row justify-content-around">
        <div class="col-lg-3 p-3 card my-3 my-md-0">
          <!-- <svg
            class="bd-placeholder-img rounded-circle mx-auto"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg> -->

          <img src="./imgs/recruiters-candidate.jpg" alt="Recrutadores" width="140" class="m-auto">

          <h2 class="fw-normal mt-4">Simplifique sua jornada</h2>
          <p>
            Acesse sua conta e registre oportunidades de emprego de forma fluida e intuitiva,
            simplificando o processo de busca por talentos qualificados.
          </p>
          <!-- <p><button class="primary m-auto" href="#">View details »</button></p> -->
        </div>

        <div class="col-lg-3 p-3 card my-3 my-md-0">
          <!-- <svg
            class="bd-placeholder-img rounded-circle mx-auto"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg> -->

          <img src="./imgs/new-leads.jpg" alt="Leads" width="140" class="mx-auto">

          <h2 class="fw-normal mt-4">Aumente seus leads</h2>
          <p>
            Aumente o número de candidaturas e reduza a evasão de candidatos devido à nossa
            integração completa.
          </p>
          <!-- <p><button class="primary m-auto" href="#">View details »</button></p> -->
        </div>

        <div class="col-lg-3 p-3 card my-3 my-md-0">
          <!-- <svg
            class="bd-placeholder-img rounded-circle mx-auto"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg> -->

          <img src="./imgs/user-concept.jpg" alt="Leads" width="140" class="mx-auto">


          <h2 class="fw-normal mt-4">Seleção com maior efetividade</h2>
          <p>
            Profissionais experientes tendem a selecionar vagas com maior critério e podem desistir
            quando o processo se torna tedioso.
          </p>
          <!-- <p><button class="primary m-auto" href="#">View details »</button></p> -->
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
  background-color: $white;
  h1 {
    font-size: 36px;
    color: $black;
    font-weight: 700;
    margin-top: 20px;
    span {
      font-family: 'Audiowide', cursive;
      color: $primary;
    }
  }
  h2 {
    color: $primary;
    font-size: 20px;
    font-weight: 500 !important;
  }
  .mobile {
    display: block;
  }
  @media (min-width: $md) {
    h1 {
      font-size: 48px;
    }
    .mobile {
      display: none;
    }
  }
}
</style>
