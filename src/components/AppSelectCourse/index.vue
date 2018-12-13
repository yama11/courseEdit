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

    changeDialog(item) {
      this.$emit('input', item.preview_url);
      this.$emit('changValue', item);
      this.dialogVisible = false;
    },

    showEditor(show) {
      this.dialogVisible = show;
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

    <AppMaterial
      v-if="dialogVisible"
      :show-dialog="dialogVisible"
      :type-number="courseArr"
      @changeData="changeDialog"
      @showEditor="showEditor"
    />
  </div>
</template>

<style lang="postcss">

</style>
