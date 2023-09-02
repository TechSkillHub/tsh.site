<template>
  <div class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center">
      <div class="row">
        <div class="col-7 d-flex flex-column justify-content-center">
          <h1 class="mb-3">
            Amplie os resultados da sua empresa fazendo um upgrade no seu time de TI.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at leo dolor. Aliquam
            vulputate porta augue, sed molestie metus pharetra in. Sed ornare aliquam velit eget
            consectetur. Sed placerat, tellus vel finibus pharetra, ante eros ultricies sapien, quis
            aliquam neque lacus eu est.
          </p>
        </div>
        <div class="col-5">
          <img src="./imgs/imgBanner.png" alt="Banner" class="img-fluid" />
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
  // min-height: 80vh;
  color: $primary;
  margin-top: 80px;
  padding: 50px 0;
  h1 {
    font-size: 48px;
  }
  p {
    color: $dark-theme;
  }
  @media (min-width: $md) {
  }
}
</style>
