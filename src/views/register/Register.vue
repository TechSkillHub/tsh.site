<template>
  <div id="login" class="container-fluid d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-6 d-flex flex-column justify-content-center align-items-center left text-center">
          <img src="@/assets/images/logo.svg" alt="Logo TechSkillHub" class="img-fluid w-50">
          <h1>Tech Skill Hub</h1>
          <h6>Solutions for Resources IT</h6>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center right">
          <div class="form-login text-center">
            <h1 class="text-center">Faça parte do <span>Hub</span></h1>
            <Form @submit="onSubmit" class="d-flex flex-column p-4 position-relative">
              <div class="row mx-0 typeProfile mb-4">
                <button :class="typeProfile == 'candidato' ? 'active' : ''" @click.prevent="setProfile('candidato')">Candidato</button>
                <button :class="typeProfile == 'empregador' ? 'active' : ''" @click.prevent="setProfile('empregador')">Empregador</button>
              </div>
              <Input
                labelInput="Nome"
                nameInput="nome"
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
              <div class="divider">OU USE SUA CONTA</div>
              <div class="row mx-0 justify-content-between">
                <button class="outlined social">
                  <img src="./imgs/google.svg" alt="">
                  Google</button>
                <button class="outlined social">
                  <img src="./imgs/linkedin.svg" alt="">
                  LinkedIn</button>
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
      typeProfile: 'candidato'
    }
  },
  components: {
    Input
  },
  methods: {
    onSubmit(values) {
      console.log('Submitted', values);
    },
    setProfile(value) {
      if(value == 'candidato') {
        this.typeProfile = 'candidato'
      }
      if(value == 'empregador') {
        this.typeProfile = 'empregador'
      }
    }
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
      color: $dark;
      font-size: 160%;
    }
  }
  .right {
    h1 {
      color: $white;
      span {
        font-family: $fontLogo;
        font-size: 120%;
      }
    }
    .form-login {
      width: 80%;
      .typeProfile {
        background-color: rgb($primary, 0.4);
        border-radius: 50px;
        button {
          width: 50%;
          border-radius: 50px;
          border: none;
          background-color: transparent;
          height: 40px;
          &.active {
            background-color: $white;
            border: 1px solid $primary;
          }
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
        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          width: 100%;
          margin: auto;
          text-wrap: nowrap;
          &::before, &::after {
            display: block;
            content: "";
            height: 1px;
            background-color: black;
            width: 100%;
            margin: 30px 0;
          }
          &::before {
            margin-right: 10px;
          }
          &::after {
            margin-left: 10px;
          }
        }
        .social {
          width: 48%;
          padding: 15px 0;
          img {
            height: 30px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>