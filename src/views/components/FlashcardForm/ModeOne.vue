<script>
/**
 * @overview FlashcardModeOne 表单
 *
 * @author suyanping
 */
export default {
  name: 'FlashcardModeOne',

  props: {
    content: {
      type: Object,
      default: () => {},
    },

    selectList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {

    };
  },

  methods: {

  },
};
</script>

<template>
  <el-form-item
    label="选项">
    <div class="flashcard-mode-one">
      <div
        v-for="(item,index) in content.cards"
        :key="index"
        class="flashcard-mode-one__block">
        <div class="flashcard-mode-one__index">
          <span>{{ selectList[index] }}</span>
          <AppSelectCourse
            v-model="item.url"
            course-type="image"
            class="flashcard-mode-one__select"/>
        </div>
        <el-input
          v-model="item.text"
          placeholder="请输入内容"
          class="flashcard-mode-one__text"/>
      </div>
    </div>
  </el-form-item>
</template>

<style lang="postcss">
.flashcard-mode-one{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.flashcard-mode-one__block{
  position: relative;
  width: 40%;
  margin-top: 20px;
}

.flashcard-mode-one__index > span{
  position: absolute;
  top: 0;
}

.flashcard-mode-one__select{
  display: inline-block;
  margin-left: 20px;
}

.flashcard-mode-one__text{
  margin-top: 10px;
  margin-left: 20px;
  width: 200px;
}
</style>
