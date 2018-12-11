<script>
/**
 * @overview 选择视频组件
 *
 * @author suyanping
 */
export default {
  name: 'AppSelectVideo',

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      type: [3],

      dialogVisible: false,
    };
  },

  methods: {
    selectVideo() {
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
      @click="selectVideo">
      选择视频
    </el-button>
    <div>{{ value }}</div>

    <el-dialog
      :visible.sync="dialogVisible"
      :modal="false"
      title="提示"
      width="800px">
      <span>这是显示视频素材数据</span>
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
