<script>
/**
 * @overview 选择音频组件
 *
 * @author suyanping
 */
export default {
  name: 'AppSelectAudio',

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      type: [2],

      dialogVisible: false,
    };
  },

  methods: {
    selectAudio() {
      this.dialogVisible = true;
    },
  },
};
</script>

<template>
  <div>
    <el-button
      type="primary"
      size="small"
      @click="selectAudio">
      选择音频
    </el-button>
    <div>{{ value }}</div>

    <el-dialog
      :visible.sync="dialogVisible"
      :modal="false"
      title="提示"
      width="800px">
      <span>这是显示音频素材数据</span>
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
