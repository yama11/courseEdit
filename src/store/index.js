import Vue from 'vue';
import Vuex from 'vuex';
import { http } from '@/utils';
import course from '@/assets/course';
import theme from '@/assets/theme';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    menu: theme.menu,

    assets: course,

    director: theme.director,

    section: 'home',

    step: 0,

    theme,

    initObj: {
      type: 'empty',
      scene: {
        background: '',
        foreground: '',
      },
    },

    typeList: [
      { label: 'empty类型', value: 'empty' },
      { label: 'boot类型', value: 'boot' },
      { label: 'television类型', value: 'television' },
      { label: 'teaching类型', value: 'teaching' },
      { label: 'flashcard类型', value: 'flashcard' },
      { label: 'game类型', value: 'game' },
      { label: 'cocos类型', value: 'cocos' },
      { label: 'celebrate类型', value: 'celebrate' },
    ],
  },

  getters: {
    sectionAssets(state) {
      return state.assets ? state.assets[state.section] : [];
    },

    stepAssets(state, getters) {
      return getters.sectionAssets[state.step];
    },
  },

  mutations: {
    currSection(state, section) {
      state.section = section;

      state.step = 0;
    },

    currSectionStep(state, status) {
      state.section = status.section;

      state.step = status.step;
    },

    addCourseStep(state) {
      state.assets[state.section].push(state.initObj);
    },

    lookCourseStep(state, currIndex) {
      if (state.step === currIndex.step) return;

      state.step = currIndex.step;
    },

    editCourseStep(state, data) {
      state.assets[state.section].splice(data.step, 1, data.dataForm);
    },

    delCourseStep(state, currIndex) {
      const currCourse = state.assets[state.section];

      const isSameStep = state.step === currIndex.step;

      const isGreatStep = state.step > currIndex.step;

      if (currCourse.length === 1 && currIndex.step === 0) {
        currCourse.splice(currIndex.step, 1, state.initObj);

        return;
      }

      if ((isSameStep && state.step !== 0) || isGreatStep) {
        state.step -= 1;
      }

      currCourse.splice(currIndex.step, 1);
    },

    initInfo() {

    },
  },

  actions: {
    initInfo({ commit }) {
      http.get('/user/init')
        .then(res => commit('initInfo', res));
    },
  },

});
