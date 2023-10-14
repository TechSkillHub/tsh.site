<template>
  <div id="modalDefault" class="modal d-block show">
      <div class="mask" @click="close()"></div>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          
          <button type="button" class="btn-close" @click="close()"></button>
          <div class="modal-body">
            <div class="col-12 d-flex justify-content-center align-items-center right">
              <div class="form-login text-center">
                <h5>Acesse seu <span>Hub</span></h5>
                <Form @submit="onSubmit" class="d-flex flex-column p-4 position-relative">

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
                    :isPassword=true
                  />
                  <small>Esqueceu a senha?</small>
                  
                  <div class="row">
                    <button class="primary mx-auto">
                      Acessar
                    </button>
                  </div>
                </Form>
                <p>Don't you have an account? <router-link :to="{ path: '/register', hash: '#register'}" @click="close()">Register</router-link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Input from './../../components/form/Input.vue'

export default {
  props: {
    modalInfo: {
      type: Object
    }
  },
  data() {
    return {}
  },
  components: {
    Input
  },
  mounted() {
    document.body.classList.add('scroll-hidden')
  },
  unmounted() {
    setTimeout(() => {
      document.body.classList.remove('scroll-hidden')
    }, 500)
  },
  created() {},
  methods: {
    close() {
      this.$store.commit('manager/SET_MODAL_LOGIN', { show: false })
    }
  }
}
</script>
<style lang="scss" scoped>
.form-login {
      width: 90%;
      h5 {
        color: $dark;
        font-size: 30px;
        span {
          font-family: $fontLogo;
          font-size: 130%;
          color: $primary;
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
</style>
