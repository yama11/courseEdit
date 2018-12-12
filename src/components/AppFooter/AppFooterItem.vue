<script>
/**
 * @overview 底部单个子项
 *
 * @author suyanping
 */

export default {
  name: 'AppFooterItem',

  props: {
    sectionAssets: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      typeObj: {
        empty: 'empty模式',
        boot: 'boot模式',
        television: 'television模式',
        teaching: 'teaching模式',
        flashcard: 'flashcard模式',
        game: 'game模式',
        cocos: 'cocos模式',
        celebrate: 'celebrate模式',
      },

      iconIndex: null,
    };
  },

  computed: {
    sectionName() {
      return this.$store.state.section;
    },

    currentStep() {
      return this.$store.state.step;
    },
  },

  methods: {
    showAction(index) {
      if (this.iconIndex === index) return;

      this.iconIndex = index;
    },

    hideAction() {
      if (this.iconIndex === null) return;

      this.iconIndex = null;
    },

    getBackStyle(scene) {
      const { foreground, background } = scene;

      return {
        'background-image': [`url(${background})`, `url(${foreground})`],
      };
    },

    lookCourse(step) {
      this.$store.commit('lookCourseStep', { step });
    },

    editCourse(step) {
      this.$emit('getCourse', step);

      this.lookCourse(step);
    },

    delCourse(step) {
      this.$emit('delStep', step);
    },
  },

};
</script>

<template>
  <div class="app-footer-item">

    <div
      v-for="(item,index) in sectionAssets"
      :key="item.type + '_' + index"
      :class="index === currentStep
        ? ['app-footer-item__step','app-footer-item__currentStep']
      : 'app-footer-item__step'"
      @mouseover="showAction(index)"
      @mouseout="hideAction">

      <div
        :style="getBackStyle(item.scene)"
        class="app-footer-item__block">

        <div
          slot="foreground"
          class="app-footer-item__content">

          <div>
            {{ sectionName }} 环节
            <br>
            {{ typeObj[item.type] }} {{ item.mode }}
          </div>

          <div
            v-if="iconIndex === index"
            class="app-footer-item__action">
            <i
              class="el-icon-search"
              @click.stop="lookCourse(index)"/>
            <i
              class="el-icon-edit"
              @click.stop="editCourse(index)"/>
            <i
              class="el-icon-delete"
              @click.stop="delCourse(index)"/>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style lang="postcss">
.app-footer-item{
  width: 95%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}

.app-footer-item__step{
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
  border: 1px solid gainsboro;
  width: 145px;
  height: 145px;
  margin-top: 2px;
  flex-shrink: 0;
  background-image:
}

.app-footer-item__currentStep{
  border: 5px solid gold;
}

.app-footer-item__block{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.app-footer-item__content{
  font-size: 20px;
  text-align: center;
  background: rgba(255,255,255,0.3);
}

.app-footer-item__action{
  width: 100%;
  height: 100%;
  line-height: 145px;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.3)
}

.app-footer-item__action i{
  color: white;
  margin-right: 10px;
  font-size: 22px;
  user-select: none;
}
</style>
