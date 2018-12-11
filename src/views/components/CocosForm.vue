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
    object="Cocos编辑"
    class="cocos-form"
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

  </AppForm>
</template>

<style lang="postcss">
.cocos-form{

}
</style>
