<template>
  <div class="row position-relative pb-3 mb-2 mx-0">
    <Field :name="nameInput" v-slot="{ field, errors, handleChange }" :rules="rulesInput" >
      <label :for="nameInput" :class="errors[0] ? 'has-error' : ''">{{ labelInput }}</label>
      <textarea
        v-bind="field" 
        :placeholder="placeholderInput"
        :class="errors[0] ? 'has-error' : ''"
        :name="nameInput" 
        @input="handleChange"
        v-on:keyup="countdown"
        v-model="mensagem"
        rows="5"
        maxlength="500"
      ></textarea>
      <small>Máx. de {{ remainingCount }} caracteres.</small>

      <ErrorMessage :name="nameInput" />
    </Field>
  </div>
</template>

<script>
import { vMaska } from "maska"

export default {
  name: "Textarea",
  directives: { 
    maska: vMaska 
  },
  props: {
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
  },
  data() {
    return {
      remainingCount: 500,
      maxCount: 500,
      mensagem: ''
    }
  },
  methods: {
    countdown() {
      this.remainingCount = this.maxCount - this.mensagem.length;
    },
  }
}
</script>
<style lang="scss" scoped>
small {
  text-align: right;
  font-size: 12px;
  padding: 0;
  color: $grey2;
}
</style>