<template>
  <div class="row position-relative pb-3 mb-2 mx-0">
    <Field :name="nameInput" v-slot="{ field, errors, handleChange }" :rules="rulesInput">
      <label :for="nameInput" :class="errors[0] ? 'has-error' : ''">{{ labelInput }}</label>
      
      <v-select 
        v-bind="field, this.$emit('value', field)" 
        :reduce="optionsInput => optionsInput.sigla"
        :placeholder="placeholderInput"
        :class="errors[0] ? 'has-error' : ''"
        :name="nameInput"
        :options="optionsInput"
        :searchable="true"
        @change="handleChange"
        label="nome"        
      >
        <template v-slot:no-options>Nenhum resultado encontrado.</template>
      </v-select>

      <ErrorMessage :name="nameInput" />
    </Field>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';

import { vMaska } from "maska"

export default {
  name: "Select",
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
    optionsInput: {
      type: Array,
      default: []
    },
  },
  
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>