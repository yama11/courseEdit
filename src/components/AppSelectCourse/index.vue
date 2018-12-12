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

      courseList: {
        image: [11, 12, 13],
        audio: [2],
        video: [3],
        animate: [21],
      },

      titleList: {
        audio: '音频',
        video: '视频',
        animate: '动画',
      },
    };
  },

  computed: {
    courseArr() {
      const typeData = this.courseList[this.courseType];

      return typeData || [];
    },

    selectTitle() {
      const titleData = this.titleList[this.courseType];

      return titleData || '';
    },

    courseName() {
      const name = this.value.split('/');

      const isAnimate = this.courseType === 'animate';

      return isAnimate
        ? `${name[name.length - 2]}.zip`
        : name[name.length - 1];
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
      v-if="selectTitle"
      type="primary"
      size="small"
      @click="selectCourse">
      选择{{ selectTitle }}
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
