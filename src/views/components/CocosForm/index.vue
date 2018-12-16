<script>
/**
 * @overview CocosForm表单
 *
 * @author suyanping
 */
export default {
  name: 'CocosForm',

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
        type: 'cocos',
        scene: {
          background: '',
          foreground: '',
        },
        src: {
          background: '',
          foreground: '',
        },
      },

      formRules: {

      },

      modeList: [
        { type: '模式一', value: 1 },
        { type: '模式二', value: 2 },
      ],

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

    submitForm(submit) {
      if (!this.initForm.src.foreground && !this.initForm.src.background) {
        this.$message.error('请选择一个动画');

        this.$refs.form.closeLoading();

        return;
      }

      submit();
    },
  },
};
</script>

<template>
  <AppForm
    ref="form"
    :visible="isShow"
    :model="initForm"
    :rules="formRules"
    object="Cocos编辑"
    class="cocos-form"
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

    <div class="init-form__block">
      <el-form-item
        label="前景动画">
        <AppSelectCourse
          v-model="initForm.src.foreground"
          course-type="animate"/>
      </el-form-item>

      <el-form-item
        label="后景动画">
        <AppSelectCourse
          v-model="initForm.src.background"
          course-type="animate"/>
      </el-form-item>
    </div>

  </AppForm>
</template>

<style lang="postcss">
.cocos-form{

}
</style>
