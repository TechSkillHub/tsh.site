<template>
  <div id="login" class="container-fluid d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-6 d-flex flex-column justify-content-center align-items-center left">
          <img src="@/assets/images/logo.svg" alt="Logo TechSkillHub" class="img-fluid w-50">
          <h1>TechSkillHub</h1>
          <h2>Solutions for Resources IT</h2>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center right">
          <div class="form-login text-center">
            <h1>Acesse suas vagas</h1>
            <Form @submit="onSubmit" class="d-flex flex-column p-4">

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
              
              <div class="row">
                <button class="primary m-auto">
                  Acessar
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
    .left {
      h1 {
        font-family: 'Audiowide', cursive;
        font-size: 70px;
        color: $primary;
        margin-top: 30px;
      }
      h2 {
        font-weight: 300;
        text-transform: uppercase;
      }
    }
    .form-login {
      width: 60%;
      h1 {
        color: $white;
        font-size: 30px;
      }
      form {
        border: 1px solid $grey-2;
        border-radius: 5px;
        background-color: $white;
      }
    }
  }
</style>