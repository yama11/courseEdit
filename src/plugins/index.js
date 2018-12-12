import { http, rules, token, error } from '@/utils';

/* eslint-disable no-param-reassign */
export default {
  install(Vue) {
    Vue.prototype.$http = http;
    Vue.prototype.$rules = rules;
    Vue.prototype.$token = token;
    Vue.prototype.$error = error;
  },
};
