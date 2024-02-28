<template>
  <div id="profile">
    <div class="d-flex flex-row">
      <div class="dash"></div>
      <h4 class="m-0 lh-1">Editar Perfil</h4>
    </div>
    <Form @submit ="onSubmit">
      <div class="row my-3 card p-2">
        <div class="col-12 pb-5 images">
          <h6>Imagens</h6>
          <Form @submit ="onSubmit">
            <div class="row">
              <div class="col-lg-4 col-12 mb-5 mb-lg-0">
                <div class="d-flex flex-row position-relative justify-content-center">
                  <div class="d-flex flex-column align-items-center mx-auto mx-lg-0">
                    <label class="mb-2">Perfil</label>
                    <img :src="form.thumbProfile" class="thumb-profile">
                  </div>
                  
                  <UploadImage
                    nameInput="image profile"
                    rulesInput="file|size:10000|ext:jpeg,jpg,png,pdf"
                    @value="(i) => form.fileProfile = i"
                    @change="changeImageProfile"
                    class="file-profile d-flex justify-content-center"
                  />
                </div>
              </div>
    
              <div class="col-lg-8 col-12">
                <div class="d-flex flex-row position-relative">
                  <div class="d-flex flex-column align-items-center">
                    <label class="mb-2">Capa</label>
                    <img :src="form.thumbCover" class="thumb-cover">
                  </div>
                  
                  <UploadImage
                    nameInput="cover image"
                    rulesInput="file|size:10000|ext:jpeg,jpg,png,pdf"
                    @value="(i) => form.fileCover = i"
                    @change="changeImageCover"
                    class="file-cover d-flex justify-content-center"
                  />
                </div>
              </div>
            </div>
            
          </Form>
        </div>
      </div>
  
      <div class="row my-3 card p-2">
        <div class="col-12 pb-3">
          <h6>Informações</h6>

          <div class="row">
            <div class="col-12 col-lg-6">
              <Input
                labelInput="Nome"
                nameInput="nome"
                typeInput="text"
                rulesInput="required|alpha_spaces|min:4"
                placeholderInput="Insira o nome da empresa"
                @value="(i) => i.value.length >= 0 ? form.name = i.value : form.name"
                :valueInput="form.name"
              />
            </div>

            <div class="col-12 col-lg-6">
              <Input
                labelInput="E-mail"
                nameInput="e-mail"
                typeInput="email"
                rulesInput="required|email"
                placeholderInput="email@exemplo.com.br"
                @value="(i) => i.value.length >= 0 ? form.email = i.value : form.email"
                :valueInput="form.email"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-6">
              <Input
                labelInput="Website"
                nameInput="website"
                typeInput="text"
                rulesInput="required|url"
                placeholderInput="Insira o nome da empresa"
                @value="(i) => i.value.length >= 0 ? form.site = i.value : form.site"
                :valueInput="form.site"
              />
            </div>

            <div class="col-12 col-lg-6">
              <Select
                labelInput="Categorias"
                nameInput="categorias"
                rulesInput="required"
                :optionsInput="categorias"
                placeholderInput="Selecione"
                @value="(i) => i.value.length >= 0 ? form.categoriaSelected = i.value : form.categoriaSelected"
                :valueInput="form.categoriaSelected"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-6">
              <Switch
                v-model:checked="form.showProfile"
                label="Exibir perfil?"
              />
            </div>
          </div>

        </div>
        
      </div>

      <div class="row my-3 card p-2">
        <div class="col-12 pb-3">
          <h6>Sobre a Empresa</h6>

          <div class="row">
            <div class="col-12">
              <Textarea 
                nameInput="mensagem"
                placeholderInput="Informações sobre a empresa"
                @value="(i) => i.value.length >= 0 ? form.about = i.value : form.about"
                :valueInput="form.about"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row my-3 card p-2">
        <div class="col-12 pb-3">
          <h6>Redes Sociais</h6>

          <div class="row">
            <div class="col-12 col-lg-6">
              <Input
                labelInput="LinkedIn"
                nameInput="LinkedIn"
                typeInput="text"
                placeholderInput="http://linkedin.com/seu-perfil"
                @value="(i) => i.value.length >= 0 ? form.linkedin = i.value : form.linkedin"
                :valueInput="form.linkedin"
              />
            </div>

            <div class="col-12 col-lg-6">
              <Input
                labelInput="Facebook"
                nameInput="Facebook"
                typeInput="text"
                placeholderInput="http://facebook.com/seu-perfil"
                @value="(i) => i.value.length >= 0 ? form.facebook = i.value : form.facebook"
                :valueInput="form.facebook"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-6">
              <Input
                labelInput="Instagram"
                nameInput="Instagram"
                typeInput="text"
                placeholderInput="http://instagram.com/seu-perfil"
                @value="(i) => i.value.length >= 0 ? form.instagram = i.value : form.instagram"
                :valueInput="form.instagram"
              />
            </div>

            <div class="col-12 col-lg-6">
              <Input
                labelInput="YouTube"
                nameInput="YouTube"
                typeInput="text"
                placeholderInput="http://youtube.com/seu-perfil"
                @value="(i) => i.value.length >= 0 ? form.youtube = i.value : form.youtube"
                :valueInput="form.youtube"
              />
            </div>
          </div>

        </div>
      </div>

      <div class="row">
        <button class="primary ms-auto mt-3">
          Salvar
        </button>
      </div>
    </Form>

  </div>
</template>

<script>
import UploadImage from './../../../components/form/UploadImage.vue'
import defaultThumb from './../imgs/default-user.jpg'
import defaultCover from './../imgs/default-cover.jpg'
import Input from './../../../components/form/Input.vue'
import Select from './../../../components/form/Select.vue'
import Switch from './../../../components/form/Switch.vue'
import Textarea from './../../../components/form/Textarea.vue'


export default {
  data() {
    return {
      form: {
        showProfile: false,
        fileProfile: '',
        thumbProfile: defaultThumb,
        fileCover: '',
        thumbCover: defaultCover,
        name: '',
        email: '',
        site: '',
        categoriaSelected: [],
        about: '',
        linkedin: '',
        facebook: '',
        instagram: '',
        youtube: '',
      },
      categorias: [
        {nome: 'Gestão', sigla: 'GE'},
        {nome: 'Desenvolvimento', sigla: 'DE'},
      ]
    }
  },
  components: {
    UploadImage,
    Input,
    Select,
    Switch,
    Textarea
  },
  methods: {
    changeImageProfile(){
      if(this.form.fileProfile) {
			  this.form.thumbProfile = URL.createObjectURL(this.form.fileProfile);
      } else {
        this.form.thumbProfile = defaultThumb
      }
    },
    changeImageCover(){
      if(this.form.fileCover) {
			  this.form.thumbCover = URL.createObjectURL(this.form.fileCover);
      } else {
        this.form.thumbCover = defaultCover
      }
    },
    onSubmit() {
      
      console.log('oi', this.form)
    }
  },
  computed() {
  },
  created() {
    let el = [
      {nome: 'Gestão', sigla: 'GE'},
      {nome: 'Desenvolvimento', sigla: 'DE'},
    ]
    let x = []
    for(let i = 0; i < el.length; i++) {
      x.push(el[i].sigla)
    }
    this.form.categoriaSelected = x

    this.form.name = 'Felipe Lima'
    this.form.email = 'felipelima.web@gmail.com'
    this.form.site = 'http://www.seu-site.com'
    this.form.showProfile = true
    this.form.about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel sodales neque. Vivamus sodales orci justo, eu consectetur tellus eleifend quis. Sed commodo fringilla diam at venenatis. Sed sollicitudin metus et facilisis vehicula. Praesent sodales lacus dapibus neque sollicitudin, ut porta felis condimentum. Nulla facilisi. Cras sit amet dui sapien. Quisque risus ipsum, porttitor at ante nec, pharetra efficitur eros. Sed elementum mi lacus, a iaculis dolor tincidunt id. Aenean leo.'
    this.form.linkedin = 'http://linkedin.com/seu-perfil'
    this.form.facebook = 'http://facebook.com/seu-perfil'
    this.form.instagram = 'http://instagram.com/seu-perfil'
    this.form.youtube = 'http://youtube.com/seu-perfil'
  },
}
</script>

<style lang="scss" scoped>
  #profile {
    .dash {
      width: 7px;
      height: auto;
      border-radius: 10px;
      background-color: $primary;
      margin-right: 5px;
    }
    .card {
      background-color: #f4f4f4;
    }
    .file-profile {
      bottom: 0;
      height: 150px;
      width: 150px;
      position: absolute;
    }
    .thumb-profile {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px solid $grey1;
      background-color: $white;
      object-fit: cover;
    }
    .file-cover {
      left: 0;
      bottom: 0;
      width: 100%;
      height: -webkit-fill-available;
      position: absolute;
    }
    .thumb-cover {
      width: 90%;
      height: auto;
      border: 1px solid $grey1;
      background-color: $white;
      object-fit: cover;
    }
    .file-cover,
    .thumb-cover {
      @media (min-width: $md) {
        width: 680px;
      }
    }
    .images {
      display: flex;
      flex-direction: column;
      form {
        display: flex;
        justify-content: center;
        @media (min-width: $md) {
          display: block;
        }
      }
    }
    
    
  }
</style>

<style lang="scss">
#profile {
  form {
    .file-profile {
      & > input {
        display: block;
        width: 150px;
        height: 150px;
        padding: 0;
        margin: 0;
        opacity: 0;
      }
      & > span {
        max-width: 150px;
        text-align: center;
        height: 45px;
      }
    }
    .file-cover {
      & > input {
        display: block;
        width: 90%;
        height: auto;
        padding: 0;
        margin: 0;
        opacity: 0;
      }
      & > span {
        max-width: 90%;
        text-align: center;
        height: 45px;
      }
    }
    .file-cover > input {
      @media (min-width: $md) {
        width: 680px;
      }
    }
    .file-cover > span {
      @media (min-width: $md) {
        max-width: 680px;
      }
    }
  }
}
</style>