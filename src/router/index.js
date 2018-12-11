import Vue from 'vue';
import Router from 'vue-router';
import Mistake from '@/views/Mistake';
import Main from '@/views/Main';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/mistake',
      name: 'Mistake',
      component: Mistake,
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});
