<script>
/**
 * @overview boot表单
 *
 * @author suyanping
 */
export default {
  name: 'BootForm',

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
      state: this.$store.state,

      initForm: {
        type: 'boot',
        scene: {
          background: '',
          foreground: '',
        },
        src: {
          index: '',
          title: '',
        },
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
    object="Boot编辑"
    class="boot-form"
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

    <el-form-item label="课件课序">
      <el-input v-model="initForm.src.index"/>
    </el-form-item>

    <el-form-item label="课时标题">
      <el-input v-model="initForm.src.title"/>
    </el-form-item>

  </AppForm>
</template>

<style lang="postcss">
.boot-form{

}
</style>
