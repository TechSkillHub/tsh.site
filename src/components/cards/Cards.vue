<template>
  <div class="container-fluid d-flex align-itens-center py-5">
    <div class="container d-flex flex-column justify-content-center text-center">
      <div class="row justify-content-around">
        <div class="col-lg-3 p-3">
          <svg
            class="bd-placeholder-img rounded-circle"
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

          <h2 class="fw-normal mt-4">Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae.</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>

        <div class="col-lg-3 p-3">
          <svg
            class="bd-placeholder-img rounded-circle"
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

          <h2 class="fw-normal mt-4">Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae.</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>

        <div class="col-lg-3 p-3">
          <svg
            class="bd-placeholder-img rounded-circle"
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

          <h2 class="fw-normal mt-4">Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae.</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
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
#cards {
  background-color: $white;
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
