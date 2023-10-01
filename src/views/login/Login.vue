<template>
  <div id="login" class="container-fluid d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-6 d-flex flex-column justify-content-center align-items-center left text-center">
          <img src="@/assets/images/logo.svg" alt="Logo TechSkillHub" class="img-fluid w-50">
          <h1>TechSkillHub</h1>
          <h6>Solutions for Resources IT</h6>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center right">
          <div class="form-login text-center">
            <h5>Acesse seu <span>Hub</span></h5>
            <Form @submit="onSubmit" class="d-flex flex-column p-4 position-relative">

              <Input
                nameInput="email"
                typeInput="email"
                labelInput="Email"
                rulesInput="required|email"
              />

              <Input
                nameInput="senha"
                typeInput="password"
                labelInput="Senha"
                rulesInput="required"
              />
              <small>Esqueceu a senha?</small>
              
              <div class="row">
                <button class="primary m-auto">
                  Acessar
                </button>
              </div>
            </Form>
            <p>Don't you have an account? Register</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Input from './../../components/form/Input.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Input
  },
  methods: {
    onSubmit(values) {
      console.log('Submitted', values);
    },
  },
}
</script>
<style lang="scss" scoped>
  #login {
    min-height: calc(100vh - 80px);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,139,139,1) 50%);
    color: $white;
    .left {
      h1 {
        font-family: $fontLogo;
        font-size: 70px;
        color: $primary;
        margin-top: 30px;
      }
      h6 {
        font-weight: 300;
        text-transform: uppercase;
      }
    }
    .form-login {
      width: 60%;
      h5 {
        color: $white;
        font-size: 30px;
        span {
          font-family: $fontLogo;
          font-size: 150%;
          font-weight: 300;
        }
      }
      form {
        border: 1px solid $grey2;
        border-radius: 5px;
        background-color: $white;
        color: $dark;
        small {
          position: absolute;
          right: 25px;
          bottom: 65px;
          font-size: 12px;
        }
      }
    }
  }
</style>