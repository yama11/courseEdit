<script>
/**
 * @overview 选择图片组件
 *
 * @author suyanping
 */
export default {
  name: 'AppSelectImage',

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      type: [11, 12, 13],

      dialogVisible: false,
    };
  },

  methods: {
    selectImg() {
      this.dialogVisible = true;
    },
  },
};
</script>

<template>
  <div>
    <div
      class="init-form__picture"
      @click="selectImg">
      <img
        v-if="value"
        :src="value" >
      <i
        v-else
        class="el-icon-plus"/>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      :modal="false"
      title="提示"
      width="800px">
      <span>这是显示图片素材数据</span>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogVisible = false">确 定</el-button>
        <el-button
          @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style lang="postcss">

</style>
