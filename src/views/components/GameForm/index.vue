<script>
/**
 * @overview GameForm表单
 *
 * @author suyanping
 */
import TopicItem from './TopicItem';

export default {
  name: 'GameForm',

  components: {
    TopicItem,
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
        type: 'game',
        scene: {
          background: '',
          foreground: '',
        },
        mode: 1,
        src: {
          gameUrl: '',
          list: [
            {
              title: '',
              clipUrl: '',
              options: [
                { content: '', imgUrl: '', isRightOption: true },
                { content: '', imgUrl: '', isRightOption: false },
                { content: '', imgUrl: '', isRightOption: false },
                { content: '', imgUrl: '', isRightOption: false },
              ],
            },
          ],
        },
      },

      formRules: {

      },

      modeList: [
        { type: '模式一', value: 1 },
        { type: '模式二', value: 2 },
      ],

      initTopic: {
        title: '',
        clipUrl: '',
        options: [
          { content: '', imgUrl: '', isRightOption: true },
          { content: '', imgUrl: '', isRightOption: false },
          { content: '', imgUrl: '', isRightOption: false },
          { content: '', imgUrl: '', isRightOption: false },
        ],
      },

    };
  },

  computed: {
    courseTypeList() {
      return [...this.$store.state.typeList];
    },
  },

  created() {
    if (this.dataForm.type === this.initForm.type) {
      this.initForm = { ...this.dataForm };
    }
  },

  methods: {
    changeType(type) {
      this.$emit('changeType', type);
    },

    addTopic() {
      this.initForm.src.list.push(this.initTopic);
    },

    sureDelTopic(index) {
      this.initForm.src.list.splice(index, 1);
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
    object="Game编辑"
    class="game-form"
    label-width="80px"
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
        placeholder="请选择模式">
        <el-option
          v-for="item in modeList"
          :key="item.value"
          :label="item.type"
          :value="item.value"/>
      </el-select>
    </el-form-item>

    <el-form-item
      label="游戏列表">
      <TopicItem
        v-model="initForm.src.list"
        @delTopic="sureDelTopic"/>

      <el-button
        type="primary"
        @click="addTopic">
        新增题目
      </el-button>
    </el-form-item>

  </AppForm>
</template>

<style lang="postcss">
.game-form{

}
</style>
