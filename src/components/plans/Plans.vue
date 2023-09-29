<template>
  <div class="container-fluid d-flex align-itens-center">
    <div class="container d-flex flex-column justify-content-center text-center">
      <h1>Nossos planos</h1>
      <div class="row justify-content-evenly">
        <div class="col-10 col-lg-3 p-3 box my-3 my-md-0">
          <h2 class="mt-4">Basic</h2>
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

        <div class="col-10 col-lg-3 p-3 box my-3 my-md-0 position-relative">
          <div class="position-absolute best-price">BEST PRICE</div>
          <h2 class="mt-4">PRO</h2>
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
          <h2 class="mt-4">Premium</h2>
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
  background-color: rgb($grey1, 0.3);
  padding: 50px 0;
  .box {
    overflow: hidden;
    background-color: $white;
    border: 2px solid $dark;
    transition: all ease-in-out 0.3s;
    .details {
      font-size: 20px;
      font-weight: 500;
    }
    .price {
      font-size: 35px;
      font-weight: 900;
      color: $dark;
    }
    &:hover {
      transform: scale(1.2);
    }
    .best-price {
      background-color: rgb($primary, 0.4);
      width: 100%;
      transform: rotate(40deg);
      top: 35px;
      right: -110px;
      font-weight: 600;
    }
  }
  h1 {
    margin-bottom: 40px;
    color: $primary;
    span {
      font-family: $fontLogo;
      color: $primary;
    }
  }
  h2 {
    color: $primary;
  }
  .mobile {
    display: block;
  }
  @media (min-width: $md) {
    padding: 80px 0;
    h1 {
      margin-bottom: 80px;
    }
    .mobile {
      display: none;
    }
  }
}
</style>
