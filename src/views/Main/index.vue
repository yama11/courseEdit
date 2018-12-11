<script>
/**
 * @overview 编辑主页面
 *
 * @author suyanping
 */
import { token } from '@/utils';
import viewEmptyForm from './../components/EmptyForm';
import viewBootForm from './../components/BootForm';
import viewTelevisionForm from './../components/TelevisionForm';
import viewTeachingForm from './../components/TeachingForm';
import viewFlashcardForm from './../components/FlashcardForm';
import viewCocosForm from './../components/CocosForm';
import viewGameForm from './../components/GameForm';
import viewCelebrateForm from './../components/CelebrateForm';

export default {
  name: 'Main',

  components: {
    viewEmptyForm,
    viewBootForm,
    viewTelevisionForm,
    viewTeachingForm,
    viewFlashcardForm,
    viewCocosForm,
    viewGameForm,
    viewCelebrateForm,
  },

  data() {
    return {

      dataForm: {},

      state: this.$store.state,

      step: null,

      isShowDialog: false,

      viewComponentName: 'viewEmptyForm',
    };
  },

  computed: {
    stepAssets() {
      return this.$store.getters.stepAssets;
    },

    sectionAssets() {
      return this.$store.getters.sectionAssets;
    },

    componentName() {
      return this.getType(this.stepAssets.type);
    },

    componentKey() {
      const { step, section } = this.$store.state;

      return `${section}-${step}`;
    },

    appComponentKey() {
      const { step, section } = this.$store.state;

      return `viewForm${section}-${step}`;
    },

  },

  created() {
    this.checkToken();
  },

  methods: {
    checkToken() {
      if (token.get()) {
        this.$router.push('/mistake');
      }
    },

    getType(type) {
      return type
        .split('')
        .reduce((acc, char, index) => {
          const isCapital = index === 0;

          return isCapital
            ? `${acc}${char.toUpperCase()}`
            : `${acc}${char}`;
        }, '');
    },

    editCurrStep(step) {
      this.isShowDialog = true;

      this.step = step;

      const data = this.state.assets[this.state.section][step];

      this.getviewComponentName(data.type);

      this.dataForm = { ...data };
    },

    submitForm(submit) {
      submit();
    },

    getviewComponentName(type) {
      const currType = this.getType(type);

      this.viewComponentName = `view${currType}Form`;
    },

    getCurrType(type) {
      this.getviewComponentName(type);
    },

    hideDialog() {
      this.isShowDialog = false;
    },

    delCurrStep(step) {
      this.$confirm(
        '确定删除该课件？',
        '删除确认',
        {
          showCancelButton: false,
          confirmButtonText: '删除',
          confirmButtonClass: 'el-button--danger',
        })
        .then(() => {
          this.$store.commit('delCourseStep', { step });
        })
        .catch(() => {});
    },
  },
};
</script>

<template>
  <div class="main">

    <div class="main-header">
      <p>主题：星球-宇宙</p>
    </div>

    <div class="main-body">

      <!-- <component
        :is="componentName"
        :key="componentKey"
        :asset="stepAssets"
        class="main-body__content"
      /> -->

      <component
        v-if="isShowDialog"
        :is="viewComponentName"
        :key="appComponentKey"
        :data-form="dataForm"
        :is-show="isShowDialog"
        @changeType="getCurrType"
        @changeDialog="hideDialog"
      />

    </div>

    <div class="main-footer">

      <AppFooter
        :section-assets="sectionAssets"
        @isDelCourse="delCurrStep"
        @isEditCourse="editCurrStep"/>

    </div>

  </div>
</template>

<style lang="postcss">
.main-header{
  margin: 20px 0 0 20px;
}

.main-body__content{
  width: 100%;
  height: 100%;
}

.main-body{
  width: 1202px;
  height: 677px;
  margin: 0 auto;
  position: relative;
  border: 1px solid gainsboro;
  box-sizing: border-box;
}
</style>
