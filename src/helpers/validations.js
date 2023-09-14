import { defineRule, configure } from "vee-validate";
import AllRules from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n';
import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';


configure({
  generateMessage: localize({
    pt_BR,
  }),
  class: {
    valid: "",
    invalid: "error",
  },
});

setLocale('pt_BR');

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

defineRule('required', value => {
  if (!value || !value.length) {
    return false;
  }
  return true;
});

export default {};