import { http, rules, token } from '@/utils';

/* eslint-disable no-param-reassign */
export default {
  install(Vue) {
    Vue.prototype.$http = http;
    Vue.prototype.$rules = rules;
    Vue.prototype.$token = token;
  },
};
