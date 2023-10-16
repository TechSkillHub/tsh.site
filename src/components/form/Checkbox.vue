<template>
  <div class="row position-relative pb-3 mb-2 mx-0">
    <Field :name="nameInput" v-slot="{ field, errors, handleChange }" :rules="rulesInput" >
      <label :for="nameInput" :class="errors[0] ? 'has-error' : ''">{{ labelInput }}</label>
      <input
        v-bind="field" 
        :type="type" 
        :name="nameInput" 
        :placeholder="placeholderInput"
        :class="errors[0] ? 'has-error' : ''"
        @input="handleChange"
        v-maska
        :data-maska="maskInput"
      />
      <i 
        class="fa-solid fa-slash hidden-password"
        v-if="isPassword && type == 'password'"
        >
      </i>
      <i 
        v-if="isPassword"
        class="fa-regular fa-eye" 
        @click="showHide()">
      </i>
      <ErrorMessage :name="nameInput" class="text-start" />
    </Field>
  </div>
</template>

<script>
import { toRef } from 'vue';
import { vMaska } from "maska"

export default {
  name: "Input",
  directives: { 
    maska: vMaska 
  },
  props: {
    typeInput: {
      type: String,
      default: "text",
    },
    valueInput: {
      type: String,
      default: "",
    },
    nameInput: {
      type: String,
      required: true,
    },
    labelInput: {
      type: String,
      required: true,
    },
    placeholderInput: {
      type: String,
      default: "",
    },
    rulesInput: {
      type: String,
      default: ""
    },
    maskInput: {
      type: String,
      default: ""
    },
    isPassword: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const nameInput = toRef(props, "nameInput");
  },
  data() {
    return {
      type: this.typeInput
    }
  },
  methods: {
    showHide() {
      this.type = this.type == 'password' ? 'text' : 'password'
    }
  }
}
</script>
<style lang="scss" scoped>
  i {
    cursor: pointer;
    position: absolute;
    width: auto;
    height: 24px;
    right: 0;
    top: 32px;
    color: $grey2;
  }
  .hidden-password {
    position: absolute;
    right: -1px;
    top: 32px;
  }
</style>