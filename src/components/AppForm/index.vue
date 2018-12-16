<script>
/**
 * @overview 弹窗表单
 *
 * @author suyanping
 */
import ElDialog from 'element-ui/packages/dialog';
import mixin from './mixin';

const { ...props } = ElDialog.props;

export default {
  name: 'AppForm',

  mixins: [mixin],

  props: {
    ...props,

    // 表单是否可见
    visible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {

    };
  },

  watch: {
    visible() {
      this.$nextTick(() => this.$refs.form.clearValidate());
    },
  },

  methods: {
    cancelForm() {
      this.$emit('dialogHide');
    },

    clearError() {
      this.$nextTick(() => this.$refs.form.cancel());
    },

    closeLoading() {
      this.$refs.form.submitCallback();
    },
  },
};
</script>

<template>
  <el-dialog
    ref="dialog"
    :title="object"
    :visible="visible"
    v-bind="$props"
    class="app-form-dialog"
    @close="clearError"
    @update:visible="value => $emit('update:visible', value)"
  >
    <VForm
      ref="form"
      v-bind="$attrs"
      @on-cancel="cancelForm"
      @on-submit="submitForm"
    >
      <!-- 表单内容 -->
      <slot />
    </VForm>
  </el-dialog>
</template>

<style lang="postcss">
.app-form-dialog .el-dialog__body {
  padding-bottom: 0;
}

.app-form-dialog .app-form__footer {
  text-align: right;
  padding-bottom: 1.5em;
}
</style>
