<template>
  <div class="row position-relative pb-3 mb-2 mx-0">
    <Field :name="nameInput" v-slot="{ field, errors, handleChange }" :rules="rulesInput" >
      <label :for="nameInput" :class="errors[0] ? 'has-error' : ''">{{ labelInput }}</label>
      <input
        v-bind="field" 
        :type="typeInput" 
        :name="nameInput" 
        :placeholder="placeholderInput"
        :class="errors[0] ? 'has-error' : ''"
        @input="handleChange"
        v-maska
        :data-maska="maskInput"
      />
      <ErrorMessage :name="nameInput" />
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
    }
  },
  setup(props) {
    const nameInput = toRef(props, "nameInput");
  }
}
</script>
<style lang="">
  
</style>