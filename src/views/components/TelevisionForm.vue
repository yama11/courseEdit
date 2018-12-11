<script>
/**
 * @overview television表单
 *
 * @author suyanping
 */
export default {
  name: 'TelevisionForm',

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
        type: 'television',
        scene: {
          background: '',
          foreground: '',
        },
        src: {
          video: '',
        },
      },

      formRules: {

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
    object="Television编辑"
    class="television-form"
    label-width="80px"
    @on-submit="submitForm"
    @dialogHide="$emit('changeDialog')">

    <el-form-item
      label="模式">
      <el-select
        v-model="initForm.type"
        placeholder="请选择模式"
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
        <AppSelectImage
          v-model="initForm.scene.foreground"/>
      </el-form-item>

      <el-form-item
        label="后景图片">
        <AppSelectImage
          v-model="initForm.scene.background"/>
      </el-form-item>
    </div>

    <el-form-item
      label="视频">
      <AppSelectVideo
        v-model="initForm.src.video"/>
    </el-form-item>

  </AppForm>
</template>

<style lang="postcss">
.television-form{

}
</style>
