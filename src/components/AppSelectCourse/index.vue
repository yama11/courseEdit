<script>
/**
 * @overview 选择图片、音频、视频组件
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

    courseType: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      dialogVisible: false,
    };
  },

  computed: {
    courseArr() {
      if (this.courseType === 'image') {
        return [11, 12, 13];
      }

      if (this.courseType === 'audio') {
        return [2];
      }

      if (this.courseType === 'video') {
        return [3];
      }

      return [];
    },

    courseName() {
      const name = this.value.split('/');

      return name[name.length - 1];
    },
  },

  methods: {
    selectCourse() {
      this.dialogVisible = true;
    },
  },
};
</script>

<template>
  <div>
    <div
      v-if="courseType === 'image'"
      class="init-form__picture"
      @click="selectCourse">
      <img
        v-if="value"
        :src="value" >
      <i
        v-else
        class="el-icon-plus"/>
    </div>

    <el-button
      v-if="courseType === 'audio'"
      type="primary"
      size="small"
      @click="selectCourse">
      选择音频
    </el-button>

    <el-button
      v-if="courseType === 'video'"
      type="primary"
      size="small"
      @click="selectCourse">
      选择视频
    </el-button>

    <div>
      {{ courseName }}
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      :modal="false"
      title="提示"
      width="800px">
      <span>这是显示图片/音频/视频素材数据</span>
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
