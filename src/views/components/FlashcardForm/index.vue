<script>
/**
 * @overview FlashcardForm表单
 *
 * @author suyanping
 */
import ModeOne from './ModeOne';
import ModeTwo from './ModeTwo';
import ModeThree from './ModeThree';
import ModeFour from './ModeFour';

export default {
  name: 'FlashcardForm',

  components: {
    ModeOne,
    ModeTwo,
    ModeThree,
    ModeFour,
  },

  props: {
    dataForm: {
      type: Object,
      default: () => {},
    },

    isShow: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      initForm: {
        type: 'flashcard',
        mode: 1,
        scene: {
          background: '',
          foreground: '',
        },
        src: {
          cards: [
            { url: '', text: '' },
            { url: '', text: '' },
            { url: '', text: '' },
            { url: '', text: '' },
          ],
        },
      },

      formRules: {

      },

      selectList: ['A', 'B', 'C', 'D'],

      mode: null,

      initSrc: {},

      modeArr: ['One', 'Two', 'Three', 'Four'],

      modeList: [
        { type: '模式一', value: 1 },
        { type: '模式二', value: 2 },
        { type: '模式三', value: 3 },
        { type: '模式四', value: 4 },
      ],

    };
  },

  computed: {
    courseTypeList() {
      return [...this.$store.state.typeList];
    },

    viewModeName() {
      return `mode${this.modeArr[this.initForm.mode - 1]}`;
    },

    viewModeKey() {
      return `flashcardMode${this.modeArr[this.initForm.mode - 1]}`;
    },
  },

  created() {
    if (this.dataForm.type === this.initForm.type) {
      this.initForm = { ...this.dataForm };
      this.mode = this.initForm.mode;
      this.initSrc = { ...this.initForm.src };
    }
  },

  methods: {
    changeType(type) {
      this.$emit('changeType', type);
    },

    changeMode(mode) {
      if (mode === this.mode) {
        this.initForm = {
          ...this.initForm,
          src: { ...this.initSrc },
        };

        return;
      }

      const srcList = [
        {
          cards: [
            { url: '', text: '' }, { url: '', text: '' },
            { url: '', text: '' }, { url: '', text: '' },
          ],
        },
        {
          answer: { select: 'A', url: '' },
          topic: ['', '', ''],
          options: ['', '', ''],
        },
        {
          answer: { select: 'A', url: '', text: '' },
          topic: { audio: '' },
          options: [
            { url: '', text: '' }, { url: '', text: '' },
            { url: '', text: '' },
          ],
        },
        {
          answer: { select: 'A', url: '' },
          topic: [],
          options: [{ url: '' }, { url: '' }, { url: '' }],
        },
      ];

      const src = srcList[this.initForm.mode - 1];

      this.initForm = {
        ...this.initForm,
        src,
      };
    },

    submitForm(submit) {
      submit();
    },
  },
};
</script>

<template>
  <AppForm
    :visible="isShow"
    :model="initForm"
    :rules="formRules"
    object="Flashcard编辑"
    class="flashcard-form"
    label-width="100px"
    @on-submit="submitForm"
    @dialogHide="$emit('changeDialog')">

    <el-form-item
      label="类型">
      <el-select
        v-model="initForm.type"
        placeholder="请选择类型"
        @change="changeType(initForm.type)">
        <el-option
          v-for="item in courseTypeList"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
    </el-form-item>

    <div class="init-form__block">
      <el-form-item
        label="前景图片">
        <AppSelectCourse
          v-model="initForm.scene.foreground"
          course-type="image"/>
      </el-form-item>

      <el-form-item
        label="后景图片">
        <AppSelectCourse
          v-model="initForm.scene.background"
          course-type="image"/>
      </el-form-item>
    </div>

    <el-form-item
      label="模式">
      <el-select
        v-model="initForm.mode"
        placeholder="请选择模式"
        @change="changeMode(initForm.mode)">
        <el-option
          v-for="item in modeList"
          :key="item.value"
          :label="item.type"
          :value="item.value"/>
      </el-select>
    </el-form-item>

    <component
      :is="viewModeName"
      :key="viewModeKey"
      :content="initForm.src"
      :select-list="selectList"
    />

  </AppForm>
</template>

<style lang="postcss">
.flashcard-form{

}
</style>
