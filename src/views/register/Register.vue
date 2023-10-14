<template>
  <div id="login" class="container-fluid d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-4 d-flex flex-column justify-content-center align-items-center left text-center">
          <img src="@/assets/images/logo.svg" alt="Logo TechSkillHub" class="img-fluid w-50">
          <h1>TechSkillHub</h1>
          <h6>Solutions for Resources IT</h6>
        </div>
        <div class="col-8 d-flex justify-content-center align-items-center right">
          <div class="form-login text-center">
            <h5>Faça parte do <span>Hub</span></h5>
            <Form @submit="onSubmit" class="d-flex flex-column p-4 position-relative">
              <Input
                labelInput="Nome"
                nameInput="nome"
                typeInput="text"
                rulesInput="required"
              />

              <Input
                labelInput="CPF"
                nameInput="CPF"
                typeInput="text"
                rulesInput="required"
              />

              <Input
                labelInput="Data de nascimento"
                nameInput="data de nascimento"
                typeInput="text"
                rulesInput="required"
              />

              <Input
                labelInput="Email"
                nameInput="email"
                typeInput="email"
                rulesInput="required|email"
              />

              <Input
                labelInput="Senha"
                nameInput="senha"
                typeInput="password"
                rulesInput="required"
              />
              
              <div class="row">
                <button class="primary m-auto">
                  Cadastrar
                </button>
              </div>
            </Form>
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
      width: 70%;
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