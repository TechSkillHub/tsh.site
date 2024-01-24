<template>
  <div id="register" class="container-fluid d-flex align-items-center px-0">
    <div class="container-md px-0">
      <div class="row flex-column flex-md-row">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center left text-center">
          <img src="@/assets/images/logo.svg" alt="Logo TechSkillHub" class="img-fluid w-50">
          <h1>Tech Skill Hub</h1>
          <h6>Solutions for Resources IT</h6>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center align-items-center right">
          <div class="form-login text-center">
            <h1 class="text-center">Faça parte do <span>Hub</span></h1>
            <Form @submit ="onSubmit" class="d-flex flex-column p-4 position-relative">
              <div class="row mx-0 typeProfile mb-4">
                <button :class="typeProfile == 'candidate' ? 'active' : ''" @click.prevent="setProfile('candidate')">Candidato</button>
                <button :class="typeProfile == 'employer' ? 'active' : ''" @click.prevent="setProfile('employer')">Empregador</button>
              </div>
              <Input
                labelInput="Nome"
                nameInput="nome"
                typeInput="text"
                rulesInput="required|alpha_spaces|min:4"
                placeholderInput="Insira seu nome completo"
                @value="(i) => i.value.length >= 0 ? form.name = i.value : form.name"
                :valueInput="form.name"
              />

              <Input
                labelInput="E-mail"
                nameInput="e-mail"
                typeInput="email"
                rulesInput="required|email"
                placeholderInput="email@exemplo.com.br"
                @value="(i) => i.value.length >= 0 ? form.email = i.value : form.email"
                :valueInput="form.email"
              />

              <Input
                labelInput="Senha"
                nameInput="senha"
                typeInput="password"
                rulesInput="required|passwordValid"
                placeholderInput="Insira uma senha"
                :isPassword=true
                class="mb-4"
                @value="(i) => i.value.length >= 0 ? form.password = i.value : form.password"
                :valueInput="form.password"
              />
              
              <div class="row">
                <button class="primary mx-auto mt-3">
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

            <button class="primary mx-auto mt-3" @click="onSubmit">
              Teste
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Input from './../../components/form/Input.vue'
import Register from './../../api/register/index'

const register = new Register()

export default {
  data() {
    return {
      typeProfile: 'candidate',
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  components: {
    Input
  },
  methods: {
    onSubmit() {
      register.register(this.form)
    },
    setProfile(value) {
      if(value == 'candidate') {
        this.typeProfile = 'candidate'
      }
      if(value == 'employer') {
        this.typeProfile = 'employer'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
#register {
  min-height: calc(100vh - 80px);
  color: $white;
  // background: linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(0,139,139,1) 40%);
  .left {
    padding: 30px 0;
    h1 {
      font-family: $fontLogo;
      font-size: 40px;
      color: $primary;
      margin-top: 30px;
      font-weight: 300;
    }
    h6 {
      font-weight: 300;
      text-transform: uppercase;
      color: $dark;
      font-size: 100%;
    }
  }
  .right {
    padding: 30px 0;
    background-color: $primary;
    h1 {
      color: $white;
      font-size: 30px;
    }
    .form-login {
      width: 90%;
      .typeProfile {
        background-color: rgb($primary, 0.4);
        border-radius: 50px;
        button {
          color: $white;
          width: 50%;
          border-radius: 50px;
          border: none;
          background-color: transparent;
          height: 40px;
          &.active {
            color: $white !important;
            border: 1px solid $dark !important;
            background-color: $primary !important;
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
  @media (min-width: $md) {
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,139,139,1) 50%);
    .left {
      margin-top: 0;
      h1 {
        font-family: $fontLogo;
        font-size: 70px;
        color: $primary;
        margin-top: 30px;
        font-weight: 300;
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
}
</style>