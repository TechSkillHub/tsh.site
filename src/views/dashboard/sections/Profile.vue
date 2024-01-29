<template>
  <div id="profile">
    <div class="d-flex flex-row">
      <div class="dash"></div>
      <h4 class="m-0 lh-1">Edit Profile</h4>
    </div>

    <div class="row my-3 card p-2">
      <div class="col-12 pb-5 images">
        <h6>Images</h6>
        <Form @submit ="onSubmit">
          <div class="row">
            <div class="col-lg-4 col-12 mb-5 mb-lg-0">
              <div class="d-flex flex-row position-relative justify-content-center">
                <div class="d-flex flex-column align-items-center mx-auto mx-lg-0">
                  <label class="mb-2">Image profile</label>
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
                  <label class="mb-2">Cover image</label>
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
  </div>
</template>

<script>
import UploadImage from './../../../components/form/UploadImage.vue'
import defaultThumb from './../imgs/default-user.jpg'
import defaultCover from './../imgs/default-cover.jpg'

export default {
  data() {
    return {
      form: {
        fileProfile: '',
        thumbProfile: defaultThumb,
        fileCover: '',
        thumbCover: defaultCover,
      }
    }
  },
  components: {
    UploadImage
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
    }
  },
  computed() {
  }
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