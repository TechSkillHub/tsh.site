<template>
  <div class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center text-center">
      <h1>Nossos planos</h1>
      <div class="row justify-content-evenly">
        <div class="col-10 col-lg-3 p-3 box my-3 my-md-0">
          <h2 class="fw-normal mt-4">Basic</h2>
          <p class="mx-auto">
            Lotem ipsum dolor sit amen,<br/>consectetur adipiscing elit.
          </p>
          <ul class="list-unstyled details">
            <li>Full Support: Yes</li>
            <li>Duration : 60 Days</li>
            <li>Storage : 50 GB</li>
          </ul>
          <h3 class="price">R$ 15</h3>
          <button class="primary mx-auto my-4">Assinar</button>
        </div>
        <div class="col-10 col-lg-3 p-3 box my-3 my-md-0">
          <h2 class="fw-normal mt-4">PRO</h2>
          <p class="mx-auto">
            Lotem ipsum dolor sit amen,<br/>consectetur adipiscing elit.
          </p>
          <ul class="list-unstyled details">
            <li>Full Support: Yes</li>
            <li>Duration : 60 Days</li>
            <li>Storage : 50 GB</li>
          </ul>
          <h3 class="price">R$ 39</h3>
          <button class="primary mx-auto my-4">Assinar</button>
        </div>
        <div class="col-10 col-lg-3 p-3 box my-3 my-md-0">
          <h2 class="fw-normal mt-4">Premium</h2>
          <p class="mx-auto">
            Lotem ipsum dolor sit amen,<br/>consectetur adipiscing elit.
          </p>
          <ul class="list-unstyled details">
            <li>Full Support: Yes</li>
            <li>Duration : 60 Days</li>
            <li>Storage : 50 GB</li>
          </ul>
          <h3 class="price">R$ 99</h3>
          <button class="primary mx-auto my-4">Assinar</button>
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
#plans {
  background-color: rgb($grey-1, 0.3);
  padding: 120px 0 250px 0;
  .box {
    background-color: $white;
    border: 2px solid $dark-theme;
    transition: all ease-in-out 0.3s;
    .details {
      font-size: 20px;
      font-weight: 500;
    }
    .price {
      font-size: 35px;
      font-weight: 900;
      color: $dark-theme;
    }
    &:hover {
      transform: scale(1.2);
    }
  }
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
    font-size: 32px;
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
      font-size: 44px;
      margin-bottom: 100px;
    }
  }
}
</style>
