<template>
  <div id="footer" class="bg-dark border-top py-5">
    <div class="container">
      <div class="row">
        <div class="d-flex flex-column flex-md-row align-items-center">
          <div
            class="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-start d-flex flex-column align-items-center"
          >
            <div class="text-center me-md-auto">
              <img src="./imgs/logo.svg" class="logo" alt="Logo Tech Skill Hub" /><br/>
              <span class="text-center">Tech Skill Hub</span>
            </div>
          </div>

          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <span>©2023 Company, Inc</span>
          </div>

          <ul
            class="col-12 col-md-4 nav justify-content-center justify-content-md-end list-unstyled d-flex"
          >
            <li class="mx-3">
              <a href="http://www.linkedin.com" target="_blank">
                <img src="./imgs/linkedin.svg" alt="Icon LinkedIn" />
              </a>
            </li>
            <li class="mx-3">
              <a href="http://www.instagram.com" target="_blank">
                <img src="./imgs/instagram.svg" alt="Icon Instagram" />
              </a>
            </li>
            <li class="mx-3">
              <a href="http://www.facebook.com" target="_blank">
                <img src="./imgs/facebook.svg" alt="Icon Facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
#footer {
  color: $white;
  position: relative;
  z-index: 10;
  .logo {
    width: 30px;
    height: auto;
    margin-bottom: 10px;
  }
  img {
    width: 18px;
    height: 20px;
  }
}
</style>
