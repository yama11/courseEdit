<script>
/**
 * @overview 底部步骤条显示
 *
 * @author suyanping
 */
import AppFooterItem from './AppFooterItem';

export default {
  name: 'AppFooter',

  components: {
    AppFooterItem,
  },

  props: {
    sectionAssets: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {

    };
  },

  methods: {
    addStep() {
      this.$store.commit('addCourseStep');
    },

    editCurrCourse(step) {
      this.$emit('isEditCourse', step);
    },

    delCurrCourse(step) {
      this.$emit('isDelCourse', step);
    },

    moveLeft() {
      const content = this.$refs.content;

      content.scrollLeft -= 165;
    },

    moveRight() {
      const content = this.$refs.content;

      content.scrollLeft += 165;
    },
  },

};
</script>

<template>
  <div class="app-footer">

    <i
      class="
        el-icon-circle-plus-outline
        app-footer__icon"
      @click="addStep"/>

    <div class="app-footer__show">

      <div
        class="leftMove"
        @click="moveLeft">
        <i class="el-icon-arrow-left"/>
      </div>

      <div
        ref="content"
        class="app-footer__content">

        <AppFooterItem
          :section-assets="sectionAssets"
          @getCourse="editCurrCourse"
          @delStep="delCurrCourse"/>

      </div>

      <div
        class="rightMove"
        @click="moveRight">
        <i class="el-icon-arrow-right"/>
      </div>

    </div>

  </div>
</template>

<style lang="postcss">
.app-footer{
  border-bottom: 1px dashed gainsboro;
  height: 200px;
  width: 100%;
}

.app-footer__icon{
  margin-left: 48%;
  font-size: 30px;
  cursor: pointer;
  display: block;
}

.app-footer__show{
  width: 100%;
  height: 148px;
  overflow: hidden;
  position: relative;
}

.app-footer__content{
  width: 92%;
  height: 150px;
  position: relative;
  left: 50px;
  right: 100px;
  overflow: hidden;
}

.leftMove,
.rightMove{
  cursor: pointer;
  width: 30px;
  height: 145px;
  line-height: 145px;
  text-align: center;
  border: 1px solid gainsboro;
  background: ghostwhite;
  position: absolute;
  top: 2px;
}

.leftMove{
  left: 10px;
}

.rightMove{
  right: 10px;
}
</style>
