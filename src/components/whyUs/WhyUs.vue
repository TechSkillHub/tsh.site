<template>
  <div class="container-fluid d-flex align-itens-center py-3 py-md-5">
    <div class="container d-flex flex-column justify-content-center text-center">
      <h1 class="mb-5">Por que a <span>Tech Skill Hub</span>?</h1>
      <div class="row justify-content-around">
        <div class="col-lg-3 p-3 card my-3 my-md-0">
          <svg
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
          </svg>

          <h2 class="fw-normal mt-4">Simples e Rápido</h2>
          <p>
            Acesse a conta e cadastre as vagas, de maneira fluída e intuitiva. Agilizando a busca
            por recursos.
          </p>
          <!-- <p><button class="primary m-auto" href="#">View details »</button></p> -->
        </div>

        <div class="col-lg-3 p-3 card my-3 my-md-0">
          <svg
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
          </svg>

          <h2 class="fw-normal mt-4">Mais Opções</h2>
          <p>Receba mais candidaturas.<br />Haverá menos evasão devido à integração completa.</p>
          <!-- <p><button class="primary m-auto" href="#">View details »</button></p> -->
        </div>

        <div class="col-lg-3 p-3 card my-3 my-md-0">
          <svg
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
          </svg>

          <h2 class="fw-normal mt-4">Possibilidades Melhores</h2>
          <p>
            Profissionais mais experientes escolhem mais as vagas e desistem quando o processo é
            "chato".
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
    font-size: 48px;
    color: $black;
    font-weight: 700;
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
  @media (min-width: $md) {
  }
}
</style>
